const express = require("express");
const Program = require("../models/Program");
const Enrollment = require("../models/Enrollment");
const User = require("../models/User");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { userId, programId } = req.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "userId is required",
        data: null
      });
    }

    const userExists = await User.findOne({ userId });
    if (!userExists) {
      return res.status(400).json({
        success: false,
        message: "User not found",
        data: null
      });
    }

    const programExists = await Program.findOne({ programId });
    if (!programExists) {
      return res.status(400).json({
        success: false,
        message: "Program not found",
        data: null
      });
    }

    const enrollment = await Enrollment.create({ userId, programId });

    res.status(201).json({
      success: true,
      message: "Enrollment successful",
      data: enrollment
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Already enrolled",
        data: null
      });
    }
    next(err);
  }
});

module.exports = router;