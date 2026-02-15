const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Student = require("./Student");
const Instructor = require("./Instructor");

const Enrollment = sequelize.define("Enrollment", {});

Student.belongsToMany(Instructor, { through: Enrollment });
Instructor.belongsToMany(Student, { through: Enrollment });

module.exports = Enrollment;
