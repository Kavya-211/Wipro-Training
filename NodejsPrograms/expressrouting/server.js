const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

// Built-in JSON middleware
app.use(express.json());

// Morgan logging
app.use(morgan("dev"));

// Custom logging middleware
app.use((req, res, next) => {
  console.log("Custom Log:", req.method, req.url);
  next();
});

// Set EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// AUTH MIDDLEWARE
function auth(req, res, next) {
  const isLoggedIn = true;  // changed to true for testing
  if (!isLoggedIn) {
    return res.status(401).send("Unauthorized");
  }
  next();
}


// ROUTES

// Home page (EJS)
app.get("/", (req, res) => {
  res.render("home", {
    user: "Niti Dwivedi",
    role: "Admin",
    kpas: ["Coding", "Testing"]
  });
});

// Test error route
app.get("/error", (req, res, next) => {
  next(new Error("Something went wrong!"));
});

// User routes
app.get("/user", (req, res) => {
  res.send("User fetched");
});

app.post("/userpost", auth, (req, res) => {
  res.send("User data posted");
});

app.put("/userput", auth, (req, res) => {
  res.send("User updated");
});

app.delete("/userdelete", auth, (req, res) => {
  res.send("User deleted");
});


// ❗ ERROR HANDLING MIDDLEWARE (ALWAYS LAST)
app.use((err, req, res, next) => {
  console.log("Error Middleware:", err.message);
  res.status(500).send("Internal Server Error: " + err.message);
});


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
