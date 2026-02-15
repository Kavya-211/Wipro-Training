const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Student = require("./Student");
const Course = require("./Course");

const Enrollment = sequelize.define("Enrollment", {});

// Many-to-Many relation
Student.belongsToMany(Course, { through: Enrollment });
Course.belongsToMany(Student, { through: Enrollment });

module.exports = Enrollment;
