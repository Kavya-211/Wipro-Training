
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("academy_db", "root", "Kavya@123", {
  host: "localhost",
  dialect: "mysql",
  logging: false
});

module.exports = sequelize;
