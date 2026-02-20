
const express = require("express");
const session = require("express-session");
const sequelize = require("./config/db");
const User = require("./models/User");
const authRoutes = require("./routes/authRoutes");
const bcrypt = require("bcrypt");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: "secretkey",
  resave: false,
  saveUninitialized: false
}));

app.set("view engine", "ejs");

app.use(authRoutes);

sequelize.sync({ force: true }).then(async () => {

  const hashedPassword = await bcrypt.hash("admin123", 10);

  await User.create({
    username: "admin",
    password: hashedPassword,
    role: "admin"
  });

  app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
  });

});
