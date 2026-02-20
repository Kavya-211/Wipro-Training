const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Instructor = require("./Instructor");

const Course = sequelize.define("Course", {
  title: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, defaultValue: 100 }
});

// One-to-Many
Instructor.hasMany(Course);
Course.belongsTo(Instructor);

module.exports = Course;
