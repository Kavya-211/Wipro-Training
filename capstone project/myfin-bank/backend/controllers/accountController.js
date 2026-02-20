const Account = require("../models/Account");
const Transaction = require("../models/Transaction");
const sendZeroBalanceEmail = require("../utils/sendEmail");
const User = require("../models/User");

// Balance
exports.getBalance = async (req, res) => {
  try {
    const account = await Account.findOne({ userId: req.user.id });

    if (!account)
      return res.status(404).json({ message: "Account not found" });

    res.json({ balance: account.balance });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};


//Deposit
exports.deposit = async (req, res) => {
  try {
    const { amount } = req.body;

    const account = await Account.findOne({ userId: req.user.id });
    if (!account)
      return res.status(404).json({ message: "Account not found" });

    account.balance += Number(amount);
    await account.save();

    const transactionId =
      "TXN" + Date.now() + Math.floor(Math.random() * 1000);

    await Transaction.create({
      senderId: req.user.id,
      transactionId,
      type: "deposit",
      amount: Number(amount),
      date: new Date()
    });

    res.json({
      message: "Deposit Successful",
      transactionId,
      balance: account.balance
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

//Withdraw
exports.withdraw = async (req, res) => {
  try {
    const { amount } = req.body;

    const account = await Account.findOne({ userId: req.user.id });
    if (!account)
      return res.status(404).json({ message: "Account not found" });

    if (account.balance < amount)
      return res.status(400).json({ message: "Insufficient Balance" });

    account.balance -= Number(amount);
    await account.save();

    const transactionId =
      "TXN" + Date.now() + Math.floor(Math.random() * 1000);

    await Transaction.create({
      senderId: req.user.id,
      transactionId,
      type: "withdraw",
      amount: Number(amount),
      date: new Date()
    });

    // Zero balance check
    if (account.balance === 0) {
      const user = await User.findById(req.user.id);

      // Send Email
      await sendZeroBalanceEmail(user, account.balance);

      // Admin receives email
      req.io.emit("zeroBalance", {
        message: ` Customer ${user.name}'s account balance reached ZERO`
      });
    }

    res.json({
      message: "Withdraw Successful",
      transactionId,
      balance: account.balance
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// history
exports.getTransactionHistory = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      senderId: req.user.id
    }).sort({ date: -1 });

    res.json(transactions);

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};
