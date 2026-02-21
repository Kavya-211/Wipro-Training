const express = require("express");
const { body, validationResult } = require("express-validator");
const Program = require("../models/Program");

const router = express.Router();

router.post(
  "/",
  [
    body("programId").notEmpty(),
    body("name").notEmpty(),
    body("category").notEmpty(),
    body("price").isFloat({ min: 0 })
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const err = new Error("Validation Error");
        err.status = 400;
        return next(err);
      }

      const program = await Program.create(req.body);

      res.status(201).json({
        success: true,
        message: "Program created",
        data: program
      });
    } catch (err) {
      next(err);
    }
  }
);

router.get("/", async (req, res, next) => {
  try {
    const programs = await Program.find();
    res.json({
      success: true,
      message: "Programs fetched",
      data: programs
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;