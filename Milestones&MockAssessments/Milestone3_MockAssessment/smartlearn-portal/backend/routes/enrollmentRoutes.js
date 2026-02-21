//Userstory A2
const express = require("express");
const Enrollment = require("../models/Enrollment");
const Course = require("../models/Course");
const { enrollValidation, validate } = require("../middleware/validate");

const router = express.Router();

router.post("/", enrollValidation, validate, async (req, res, next) => {
  try {
    const { userId, courseId } = req.body;

    const courseExists = await Course.findOne({ courseId });
    if (!courseExists) {
      return res.status(400).json({
        success: false,
        message: "Course does not exist",
        data: null
      });
    }

    const duplicate = await Enrollment.findOne({ userId, courseId });
    if (duplicate) {
      return res.status(400).json({
        success: false,
        message: "Already Enrolled",
        data: null
      });
    }

    const enrollment = await Enrollment.create({ userId, courseId });

    res.status(201).json({
      success: true,
      data: enrollment,
      message: "Enrollment Successful"
    });

  } catch (error) {
    next(error);
  }
});

module.exports = router;