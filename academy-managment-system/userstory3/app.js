const express = require("express");
const sequelize = require("./config/db");

require("./models/Student");
require("./models/Profile");
require("./models/Instructor");
require("./models/Course");
require("./models/Enrollment");

const studentRoutes = require("./routes/studentRoutes");
const instructorRoutes = require("./routes/instructorRoutes");
const courseRoutes = require("./routes/courseRoutes");

const app = express();
app.use(express.json());

app.use(studentRoutes);
app.use(instructorRoutes);
app.use(courseRoutes);

sequelize.sync({ force: true }).then(() => {
  app.listen(3002, () => {
    console.log("UserStory3 running → http://localhost:3002");
  });
});
