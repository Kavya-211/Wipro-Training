const express = require("express");
const sequelize = require("./config/db");

const Student = require("./models/Student");
const Instructor = require("./models/Instructor");
const Course = require("./models/Course");
const Enrollment = require("./models/Enrollment");
const { fn, col, literal } = require("sequelize");

const app = express();
app.set("view engine", "ejs");

//  Total students per course
app.get("/report/students-per-course", async (req, res) => {
  const report = await Course.findAll({
    include: [
      { model: Student, attributes: [], through: { attributes: [] } }
    ],
    attributes: [
      "title",
      [fn("COUNT", col("Students.id")), "studentCount"]
    ],
    group: ["Course.id"]
  });
  res.render("studentsPerCourse", { report });
});

//  Total revenue per instructor
app.get("/report/revenue-per-instructor", async (req, res) => {
  const report = await Instructor.findAll({
    include: [
      { model: Course, include: [{ model: Student, attributes: [], through: { attributes: [] } }], attributes: [] }
    ],
    attributes: [
      "name",
      [
        literal(`(
          SELECT SUM(Courses.price)
          FROM Courses
          JOIN Enrollments ON Enrollments.CourseId = Courses.id
          WHERE Courses.InstructorId = Instructor.id
        )`),
        "totalRevenue"
      ]
    ]
  });
  res.render("revenuePerInstructor", { report });
});

// Most popular course
app.get("/report/most-popular-course", async (req, res) => {
  const report = await Course.findOne({
    include: [{ model: Student, attributes: [], through: { attributes: [] } }],
    attributes: [
      "title",
      [fn("COUNT", col("Students.id")), "studentCount"]
    ],
    group: ["Course.id"],
    order: [[fn("COUNT", col("Students.id")), "DESC"]]
  });
  res.render("popularCourse", { report });
});

sequelize.sync({ force: true }).then(async () => {
  const inst1 = await Instructor.create({ name: "John" });
  const inst2 = await Instructor.create({ name: "Alice" });

  const course1 = await Course.create({ title: "Math", price: 100, InstructorId: inst1.id });
  const course2 = await Course.create({ title: "Science", price: 150, InstructorId: inst1.id });
  const course3 = await Course.create({ title: "History", price: 200, InstructorId: inst2.id });

  for (let i = 1; i <= 10; i++) {
    const student = await Student.create({ name: `Student ${i}`, fee: 100 });
    if (i <= 5) await student.addCourse(course1);
    if (i >= 3 && i <= 8) await student.addCourse(course2);
    if (i >= 6) await student.addCourse(course3);
  }

  app.listen(3006, () => {
    console.log("UserStory6 running → http://localhost:3006");
  });
});
