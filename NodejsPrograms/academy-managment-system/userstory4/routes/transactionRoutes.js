const express = require("express");
const sequelize = require("../config/db");

const Student = require("../models/Student");
const Profile = require("../models/Profile");
const Course = require("../models/Course");
const Enrollment = require("../models/Enrollment");

const router = express.Router();

// one to many  
Student.hasOne(Profile);
Profile.belongsTo(Student);
//many to many
Student.belongsToMany(Course, { through: Enrollment });
Course.belongsToMany(Student, { through: Enrollment });

 //  Student + Profile 

router.post("/create-student-profile", async (req, res) => {
  const t = await sequelize.transaction();

  try {
    const student = await Student.create(
      { name: req.body.name },
      { transaction: t }
    );

    await Profile.create(
      {
        bio: req.body.bio,
        StudentId: student.id
      },
      { transaction: t }
    );

    await t.commit();
    res.send("Student and Profile created successfully");

  } catch (error) {
    await t.rollback();
    res.send("Transaction failed → Rolled back");
  }
});


  //  Enroll Student into Course

router.post("/enroll", async (req, res) => {
  const t = await sequelize.transaction();

  try {
    const student = await Student.findByPk(req.body.studentId);
    const course = await Course.findByPk(req.body.courseId);

    if (!student || !course) {
      throw new Error("Invalid Student or Course");
    }

    await student.addCourse(course, { transaction: t });

    await t.commit();
    res.send("Enrollment successful");

  } catch (error) {
    await t.rollback();
    res.send("Enrollment failed → Rolled back");
  }
});

//create course before enrollment
router.post("/courses", async (req, res) => {
  const course = await Course.create({ title: req.body.title });
  res.json(course);
});

/* View all data */
router.get("/students", async (req, res) => {
  const data = await Student.findAll({ include: [Profile, Course] });
  res.json(data);
});

module.exports = router;
