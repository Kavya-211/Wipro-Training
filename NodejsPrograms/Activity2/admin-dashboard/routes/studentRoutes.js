const express = require("express");
const router = express.Router();
const validateStudent = require("../middleware/validateStudent");

router.get("/student", (req, res) => {
  res.render("studentForm");
});

router.post("/student", validateStudent, (req, res) => {
  const { name, email } = req.body;
  res.send(`Student Registered: ${name} (${email})`);
});

module.exports = router;
