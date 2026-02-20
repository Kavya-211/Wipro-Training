require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const Chat = require("./models/Chat");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

app.use((req, res, next) => {
  req.io = io;
  next();
});

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/myfinbank")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/chat", require("./routes/chatRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/account", require("./routes/accountRoutes"));
app.use("/api/loan", require("./routes/loanRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/transfer", require("./routes/transferRoutes"));
app.use("/api/deposits", require("./routes/depositRoutes"));

// SOCKET.IO
io.on("connection", (socket) => {

  console.log("User connected:", socket.id);

  socket.on("joinRoom", (userId) => {
    if (!userId) return;
    socket.join(userId);
  });

  socket.on("sendMessage", async (data) => {
    try {
      console.log("Incoming chat data:", data);

      const { senderId, receiverId, message } = data;

      if (!senderId || !receiverId || !message) {
        console.log("Invalid chat payload");
        return;
      }

      const newMessage = await Chat.create({
        senderId: new mongoose.Types.ObjectId(senderId),
        receiverId: new mongoose.Types.ObjectId(receiverId),
        message
      });

      io.to(receiverId).emit("receiveMessage", newMessage);
      io.to(senderId).emit("receiveMessage", newMessage);

    } catch (err) {
      console.log("Chat Error:", err.message);
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });

});

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "test") {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
module.exports = app;
module.exports.server = server;
