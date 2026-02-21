//Userstory A1
const express = require("express");
const Course = require("../models/Course");
const { courseValidation, validate } = require("../middleware/validate");

const router = express.Router();

router.post("/", courseValidation, validate, async (req, res, next) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json({
      success: true,
      data: course,
      message: "Course Created"
    });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const courses = await Course.find();
    res.json({
      success: true,
      data: courses,
      message: "Courses Fetched"
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;