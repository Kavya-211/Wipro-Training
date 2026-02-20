require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());

const employeeRoutes = require("./routes/employeeRoutes");
app.use("/api/employees", employeeRoutes);

app.get("/", (req, res) => {
  res.send("Server is working on port 5000");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
