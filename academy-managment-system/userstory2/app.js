const express = require("express");
const session = require("express-session");
const bcrypt = require("bcrypt");

const sequelize = require("./config/db");
const User = require("./models/User");
const Course = require("./models/Course");

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const instructorRoutes = require("./routes/instructorRoutes");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: "secretkey",
  resave: false,
  saveUninitialized: false
}));

app.set("view engine", "ejs");

app.use(authRoutes);
app.use(adminRoutes);
app.use(instructorRoutes);

sequelize.sync({ force: true }).then(async () => {

  const hashedPassword = await bcrypt.hash("admin123", 10);

  await User.create({
    username: "admin",
    password: hashedPassword,
    role: "admin"
  });

  app.listen(3001, () => {
    console.log("UserStory2 running at http://localhost:3001");
  });

});
