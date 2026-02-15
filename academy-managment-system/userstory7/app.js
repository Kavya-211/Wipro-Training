const express = require("express");
const sequelize = require("./config/db");
const Student = require("./models/Student");
const Instructor = require("./models/Instructor");
const Enrollment = require("./models/Enrollment");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Show forms
app.get("/create-instructor", (req, res) => res.render("createInstructor"));
app.get("/create-student", (req, res) => res.render("createStudent"));
app.get("/enroll-student", async (req, res) => {
  const students = await Student.findAll();
  const instructors = await Instructor.findAll();
  res.render("enrollStudent", { students, instructors });
});
app.get("/login", (req, res) => res.render("login"));

// Handle form submissions
app.post("/instructor", async (req, res) => {
  await Instructor.create({ name: req.body.name });
  res.send("Instructor created successfully!");
});

app.post("/student", async (req, res) => {
  await Student.create({ name: req.body.name });
  res.send("Student created successfully!");
});

app.post("/enroll", async (req, res) => {
  const { studentId, instructorId } = req.body;
  const student = await Student.findByPk(studentId);
  const instructor = await Instructor.findByPk(instructorId);
  await student.addInstructor(instructor); 
  res.send("Student enrolled successfully!");
});

app.post("/login", (req, res) => {
  res.send(`Logged in as: ${req.body.username}`);
});

sequelize.sync({ force: true }).then(() => {
  app.listen(3007, () => console.log("UserStory7 running → http://localhost:3007"));
});
