const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Course = require("../models/Course");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/admin", roleMiddleware("admin"), (req, res) => {
  res.render("admin");
});

router.get("/create-instructor", roleMiddleware("admin"), (req, res) => {
  res.render("createInstructor");
});

router.post("/create-instructor", roleMiddleware("admin"), async (req, res) => {
  const { username, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  await User.create({
    username,
    password: hashed,
    role: "instructor"
  });

  res.send("Instructor Created");
});

router.get("/create-course", roleMiddleware("admin"), (req, res) => {
  res.render("createCourse");
});

router.post("/create-course", roleMiddleware("admin"), async (req, res) => {
  const { title, instructorId } = req.body;

  await Course.create({ title, instructorId });

  res.send("Course Created");
});

module.exports = router;
