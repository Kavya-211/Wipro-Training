const express = require("express");
const sequelize = require("./config/db");

require("./models/Student");
require("./models/Profile");
require("./models/Course");
require("./models/Enrollment");

const transactionRoutes = require("./routes/transactionRoutes");

const app = express();
app.use(express.json());

app.use(transactionRoutes);

sequelize.sync({ force: true }).then(() => {
  app.listen(3003, () => {
    console.log("UserStory4 running → http://localhost:3003");
  });
});
