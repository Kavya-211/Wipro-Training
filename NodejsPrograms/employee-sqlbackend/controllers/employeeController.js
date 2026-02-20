const db = require("../db/connection");

exports.registerEmployee = async (req, res) => {
  try {
    const { name, email, department } = req.body;

    await db.query(
      "INSERT INTO employees (name, email, department) VALUES (?, ?, ?)",
      [name, email, department]
    );

    res.status(201).json({ message: "Employee registered successfully" });

  } catch (error) {

    if (error.code === "ER_DUP_ENTRY") {
      return res.status(400).json({ message: "Email already exists" });
    }

    res.status(500).json({ message: "Server error" });
  }
};
