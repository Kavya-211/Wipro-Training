const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Student = sequelize.define("Student", {
  name: { type: DataTypes.STRING, allowNull: false },
  fee: { type: DataTypes.FLOAT, defaultValue: 1000 } 
});

module.exports = Student;
