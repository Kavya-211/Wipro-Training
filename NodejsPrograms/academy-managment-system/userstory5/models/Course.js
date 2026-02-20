const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Course = sequelize.define("Course", {
  title: DataTypes.STRING
});

module.exports = Course;
