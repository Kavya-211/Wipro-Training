const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Instructor = sequelize.define("Instructor", {
  name: DataTypes.STRING
});

module.exports = Instructor;
