const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const courseRoutes = require("./routes/courseRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/courses", courseRoutes);
app.use("/api/enroll", enrollmentRoutes);

app.use(notFound);
app.use(errorHandler);

if (!mongoose.connection.readyState) {
  mongoose.connect("mongodb://127.0.0.1:27017/smartlearn");
  console.log("MongoDB Connected");
}

if (process.env.NODE_ENV !== "test") {
  app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
  });
}

module.exports = app;