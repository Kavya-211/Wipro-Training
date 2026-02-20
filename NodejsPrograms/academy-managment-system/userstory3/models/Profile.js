const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Profile = sequelize.define("Profile", {
  bio: DataTypes.STRING
});

module.exports = Profile;
