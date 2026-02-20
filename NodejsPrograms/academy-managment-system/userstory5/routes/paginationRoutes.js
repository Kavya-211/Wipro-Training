const express = require("express");
const Student = require("../models/Student");
const Course = require("../models/Course");
const Enrollment = require("../models/Enrollment");

const router = express.Router();

/*  pagination */
function getPagination(page, pageSize = 5) {
  const limit = pageSize;
  const offset = (page - 1) * pageSize;
  return { limit, offset };
}

/*  STUDENTS  */
router.get("/students", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const { limit, offset } = getPagination(page);

  const students = await Student.findAll({ limit, offset });
  res.json(students);
});

/* COURSES */
router.get("/courses", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const { limit, offset } = getPagination(page);

  const courses = await Course.findAll({ limit, offset });
  res.json(courses);
});

/* ENROLLMENTS  */
router.get("/enrollments", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const { limit, offset } = getPagination(page);

  const enrollments = await Enrollment.findAll({
    limit,
    offset,
    include: [Student, Course]
  });
  res.json(enrollments);
});

module.exports = router;
