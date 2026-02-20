const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Enrollment = sequelize.define("Enrollment", {
  grade: DataTypes.STRING
});

module.exports = Enrollment;
