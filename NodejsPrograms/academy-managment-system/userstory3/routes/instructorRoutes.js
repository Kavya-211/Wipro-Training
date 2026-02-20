const express = require("express");
const Instructor = require("../models/Instructor");
const Course = require("../models/Course");

const router = express.Router();

// One-to-Many
Instructor.hasMany(Course);
Course.belongsTo(Instructor);

// Create Instructor
router.post("/instructors", async (req, res) => {
  const instructor = await Instructor.create({ name: req.body.name });
  res.json(instructor);
});

// Create Course for Instructor
router.post("/instructors/:id/course", async (req, res) => {
  const course = await Course.create({
    title: req.body.title,
    InstructorId: req.params.id
  });
  res.json(course);
});

// View instructors with courses
router.get("/instructors", async (req, res) => {
  const instructors = await Instructor.findAll({ include: Course });
  res.json(instructors);
});

module.exports = router;
