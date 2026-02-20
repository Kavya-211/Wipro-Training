const express = require("express");
const router = express.Router();

let courses = [
  { id: 1, name: "React Basics" },
  { id: 2, name: "Node.js Fundamentals" },
];

router.get("/", (req, res) => {
  res.json(courses);
});

router.post("/", (req, res) => {
  const newCourse = { id: Date.now(), name: req.body.name };
  courses.push(newCourse);
  res.status(201).json(newCourse);
});

router.delete("/:id", (req, res) => {
  courses = courses.filter(c => c.id != req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
