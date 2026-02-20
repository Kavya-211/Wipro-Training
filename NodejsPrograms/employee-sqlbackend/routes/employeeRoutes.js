const express = require("express");
const { body, validationResult } = require("express-validator");
const { registerEmployee } = require("../controllers/employeeController");
const db = require("../db/connection"); 

const router = express.Router();

// GET ALL EMPLOYEES
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM employees");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

//  REGISTER EMPLOYEE
router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Name required"),
    body("email").isEmail().withMessage("Valid email required"),
    body("department").notEmpty().withMessage("Department required"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
  registerEmployee
);

module.exports = router;
