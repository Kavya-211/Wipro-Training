function validateStudent(req, res, next) {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).send("Error: Name and Email are required!");
  }

  next();
}

module.exports = validateStudent;   
