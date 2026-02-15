const express = require("express");
const Course = require("../models/Course");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/instructor", roleMiddleware("instructor"), async (req, res) => {
  const courses = await Course.findAll({
    where: { instructorId: req.session.user.id }
  });

  res.render("instructor", { courses });
});

module.exports = router;
