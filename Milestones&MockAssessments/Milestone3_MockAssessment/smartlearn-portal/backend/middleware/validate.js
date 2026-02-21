//Userstory A1 &A2 Vlidation
const { body, validationResult } = require("express-validator");

exports.courseValidation = [
  body("courseId").notEmpty().withMessage("courseId required"),
  body("title").notEmpty().withMessage("title required"),
  body("category").notEmpty().withMessage("category required"),
  body("price").isFloat({ min: 0 }).withMessage("price must be positive")
];

exports.enrollValidation = [
  body("userId").notEmpty().withMessage("userId required"),
  body("courseId").notEmpty().withMessage("courseId required")
];

exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: errors.array()[0].msg,
      data: null
    });
  }
  next();
};