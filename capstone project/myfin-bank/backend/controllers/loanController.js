const Loan = require("../models/Loan");

exports.applyLoan = async (req, res) => {
  const { amount } = req.body;

  await Loan.create({
    userId: req.user.id,
    amount,
    status: "pending"
  });

  res.json({ message: "Loan Applied Successfully" });
};

// customer view their loan accepted or rejected
exports.getMyLoans = async (req, res) => {
  try {
    const loans = await Loan.find({ userId: req.user.id });
    res.json(loans);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

