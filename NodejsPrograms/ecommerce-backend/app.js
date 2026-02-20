const express = require("express");
require("dotenv").config();

const orderRoutes = require("./routes/orderRoutes");

const app = express();
app.use(express.json());

app.use("/api/orders", orderRoutes);

app.listen(process.env.PORT, () =>
  console.log("Server running on port " + process.env.PORT)
);
