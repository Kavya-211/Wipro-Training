const express = require("express");
const sequelize = require("./config/db");

require("./models/Student");
require("./models/Course");
require("./models/Enrollment");

const Student = require("./models/Student");
const Course = require("./models/Course");
const Enrollment = require("./models/Enrollment");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Pagination helper
function getPagination(page, pageSize = 5) {
  const limit = pageSize;
  const offset = (page - 1) * pageSize;
  return { limit, offset };
}

// Students page
app.get("/students", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const { limit, offset } = getPagination(page);

  const students = await Student.findAll({ limit, offset });

  res.render("students", { students, page });
});

sequelize.sync({ force: false }).then(async () => {
  const studentCount = await Student.count();
  if (studentCount === 0) {
    for (let i = 1; i <= 20; i++) {
      await Student.create({ name: `Student ${i}` });
    }
  }

  app.listen(3005, () => {
    console.log("UserStory5 running → http://localhost:3005");
  });
});
