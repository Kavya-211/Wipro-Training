const FixedDeposit = require("../models/FixedDeposit");
const RecurringDeposit = require("../models/RecurringDeposit");
const Transaction = require("../models/Transaction");
const Account = require("../models/Account");

//  create fixed deposit
exports.createFD = async (req, res) => {
  try {
    const { amount, interestRate, durationMonths } = req.body;

    const account = await Account.findOne({ userId: req.user.id });
    if (!account)
      return res.status(404).json({ message: "Account not found" });

    if (account.balance < amount)
      return res.status(400).json({ message: "Insufficient Balance" });

    // Deduct from account
    account.balance -= Number(amount);
    await account.save();

    const maturityAmount =
      amount +
      (amount * interestRate * durationMonths) / (100 * 12);

    await FixedDeposit.create({
      userId: req.user.id,
      amount,
      interestRate,
      durationMonths,
      maturityAmount
    });

    // create transacton entry
    const transactionId =
      "TXN" + Date.now() + Math.floor(Math.random() * 1000);

    await Transaction.create({
      senderId: req.user.id,
      transactionId,
      type: "fd",
      amount,
      date: new Date()
    });

    res.json({
      message: "Fixed Deposit Created Successfully",
      transactionId
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};


//  create reccuring deposit
exports.createRD = async (req, res) => {
  try {
    const { monthlyAmount, durationMonths, interestRate } = req.body;

    const account = await Account.findOne({ userId: req.user.id });
    if (!account)
      return res.status(404).json({ message: "Account not found" });

    if (account.balance < monthlyAmount)
      return res.status(400).json({ message: "Insufficient Balance" });

    // Deduct installment
    account.balance -= Number(monthlyAmount);
    await account.save();

    const totalInvested = monthlyAmount * durationMonths;

    const maturityAmount =
      totalInvested +
      (totalInvested * interestRate * durationMonths) / (100 * 12);

    await RecurringDeposit.create({
      userId: req.user.id,
      monthlyAmount,
      durationMonths,
      interestRate,
      totalInvested,
      maturityAmount
    });

    // create transaction history
    const transactionId =
      "TXN" + Date.now() + Math.floor(Math.random() * 1000);

    await Transaction.create({
      senderId: req.user.id,
      transactionId,
      type: "rd",
      amount: monthlyAmount,
      date: new Date()
    });

    res.json({
      message: "Recurring Deposit Created Successfully",
      transactionId
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};
