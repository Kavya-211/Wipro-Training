const express = require("express");
const path = require("path");
const requestLogger = require("./middleware/requestLogger");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());                     
app.use(express.urlencoded({ extended: true })); 
 
app.use(requestLogger);

const adminRoutes = require("./routes/adminRoutes");
const studentRoutes = require("./routes/studentRoutes");

app.use("/", adminRoutes);
app.use("/", studentRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
