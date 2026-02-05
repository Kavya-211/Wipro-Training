const express = require("express");
const path = require("path");
const products = require("./data");

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = 5000;

// Set EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Logging middleware
app.use(logger);

// Admin dashboard route (SERVER RENDERED)
app.get("/products", (req, res) => {
  res.render("products", { products });
});

// Force error route
app.get("/error", (req, res, next) => {
  next(new Error("Manual error triggered"));
});

// Error middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
