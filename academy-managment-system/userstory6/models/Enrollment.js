const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Student = require("./Student");
const Course = require("./Course");

// Many-to-Many
const Enrollment = sequelize.define("Enrollment", {});

Student.belongsToMany(Course, { through: Enrollment });
Course.belongsToMany(Student, { through: Enrollment });

module.exports = Enrollment;
