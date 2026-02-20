const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("academy_userstory7", "root", "Kavya@123", {
  host: "localhost",
  dialect: "mysql",
  logging: false
});

module.exports = sequelize;
