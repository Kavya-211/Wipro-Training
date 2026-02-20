const express = require("express");
const Student = require("../models/Student");
const Course = require("../models/Course");
const Enrollment = require("../models/Enrollment");

const router = express.Router();

// Many-to-Many
Student.belongsToMany(Course, { through: Enrollment });
Course.belongsToMany(Student, { through: Enrollment });

// View courses with students
router.get("/courses", async (req, res) => {
  const courses = await Course.findAll({ include: Student });
  res.json(courses);
});

module.exports = router;
