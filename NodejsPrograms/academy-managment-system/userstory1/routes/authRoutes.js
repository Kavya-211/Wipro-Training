const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const router = express.Router();

// Login page
router.get("/login", (req, res) => {
  res.render("login");
});

// Handle login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username } });

  if (!user) {
    return res.send("User not found");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.send("Invalid credentials");
  }

  // Save session
  req.session.user = {
    id: user.id,
    username: user.username,
    role: user.role
  };

  res.redirect("/dashboard");
});

// Protected dashboard
router.get("/dashboard", (req, res) => {

  if (!req.session.user) {
    return res.redirect("/login");
  }

  res.render("dashboard", { user: req.session.user });
});

// Logout
router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
});

module.exports = router;
