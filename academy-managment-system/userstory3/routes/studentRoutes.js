const express = require("express");
const Student = require("../models/Student");
const Profile = require("../models/Profile");
const Course = require("../models/Course");

const router = express.Router();

// One-to-One
Student.hasOne(Profile);
Profile.belongsTo(Student);

// Create Student
router.post("/students", async (req, res) => {
  const student = await Student.create({ name: req.body.name });
  res.json(student);
});

// Create Profile for Student
router.post("/students/:id/profile", async (req, res) => {
  const profile = await Profile.create({
    bio: req.body.bio,
    StudentId: req.params.id
  });
  res.json(profile);
});

// Enroll student in course
router.post("/students/:sid/enroll/:cid", async (req, res) => {
  const student = await Student.findByPk(req.params.sid);
  const course = await Course.findByPk(req.params.cid);
  await student.addCourse(course);
  res.send("Student Enrolled");
});

// View student with profile + courses
router.get("/students", async (req, res) => {
  const students = await Student.findAll({
    include: [Profile, Course]
  });
  res.json(students);
});

module.exports = router;
