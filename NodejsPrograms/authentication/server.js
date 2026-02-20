// Load dependencies
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const { json, urlencoded } = require("express");
const mongoose = require("mongoose");
const User = require("./models/User.js");

const app = express();
app.set("view engine", "ejs");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/authdb")
    .then(() => console.log("Db connected"))
    .catch(err => console.error(err));

// Built-in middleware
app.use(json());  // Parse JSON
app.use(urlencoded({ extended: true })); // Parse form data
app.use(cookieParser());

// Optional: static files (CSS/JS if you add them later)
// app.use(express.static("public"));

// Session middleware
app.use(session({
    secret: 'sample-secretkey',
    resave: false,
    saveUninitialized: false
}));

// Routes

// Create demo user
app.get("/demouser", async (req, res) => {
    await User.create({ username: "demouser", password: "1234" });
    res.send("User created");
});

// Login page
app.get("/login", (req, res) => res.render("login"));

// Login POST
app.post("/login", async (req, res) => {
    const user = await User.findOne(req.body); // finds by username & password
    if (!user) return res.send("Invalid credentials");
    req.session.user = user;  // store user in session
    res.redirect("/dashboard");
});

// Dashboard page (protected)
app.get("/dashboard", (req, res) => {
    if (!req.session.user) return res.redirect("/login");
    res.render("dashboard", { user: req.session.user });
});

// Logout
app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/login");
});

// Start server
app.listen(3000, () => console.log("Server started on http://localhost:3000"));
