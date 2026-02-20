module.exports = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token || token !== "admin123") {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  next();
};
