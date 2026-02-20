const User = require("../models/User");
const Account = require("../models/Account");

// GET ALL CUSTOMERS 
exports.getCustomers = async (req, res) => {
  try {
    const customers = await User.find({ role: "customer" });
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// CREATE CUSTOMER 
exports.createCustomer = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      role: "customer"
    });

    res.json({ message: "Customer Created", user });

  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// UPDATE CUSTOMER 
exports.updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    await User.findByIdAndUpdate(id, { name, email });

    res.json({ message: "Customer Updated" });

  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// ACTIVATE / DEACTIVATE CUSTOMER 
exports.toggleCustomerStatus = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user)
      return res.status(404).json({ message: "User not found" });

    user.active = !user.active;
    await user.save();

    res.json({
      message: user.active ? "Customer Activated" : "Customer Deactivated"
    });

  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// GET ALL ACCOUNTS 
exports.getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find().populate("userId");
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// CREATE ACCOUNT 
exports.createAccount = async (req, res) => {
  try {
    const { userId, balance } = req.body;

    const account = await Account.create({
      userId,
      balance
    });

    res.json({ message: "Account Created", account });

  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

//UPDATE ACCOUNT 
exports.updateAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const { balance } = req.body;

    await Account.findByIdAndUpdate(id, { balance });

    res.json({ message: "Account Updated" });

  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

//DELETE ACCOUNT 
exports.deleteAccount = async (req, res) => {
  try {
    const { id } = req.params;

    await Account.findByIdAndDelete(id);

    res.json({ message: "Account Deleted" });

  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

//GET ALL LOAN ACCOUNTS
exports.getAllLoans = async (req, res) => {
  try {
    const Loan = require("../models/Loan");
    const loans = await Loan.find().populate("userId");
    res.json(loans);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.updateLoanStatus = async (req, res) => {
  try {
    const { loanId, status } = req.body;

    const Loan = require("../models/Loan");

    await Loan.findByIdAndUpdate(loanId, { status });

    res.json({ message: "Loan Status Updated" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
