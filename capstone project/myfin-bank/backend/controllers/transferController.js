const Account = require("../models/Account");
const Loan = require("../models/Loan");
const FixedDeposit = require("../models/FixedDeposit");
const RecurringDeposit = require("../models/RecurringDeposit");
const Transaction = require("../models/Transaction");
const User = require("../models/User");
const sendZeroBalanceEmail = require("../utils/sendEmail");


//Investment transfer
exports.transferMoney = async (req, res) => {
  try {
    const { amount, type } = req.body;

    const account = await Account.findOne({ userId: req.user.id });
    if (!account)
      return res.status(404).json({ message: "Account not found" });

    if (account.balance < amount)
      return res.status(400).json({ message: "Insufficient Balance" });

    account.balance -= amount;
    await account.save();

    if (type === "loan") {
      await Loan.create({
        userId: req.user.id,
        amount,
        status: "approved"
      });
    }

    if (type === "fd") {
      await FixedDeposit.create({
        userId: req.user.id,
        amount,
        interestRate: 6
      });
    }

    if (type === "rd") {
      await RecurringDeposit.create({
        userId: req.user.id,
        monthlyAmount: amount,
        durationMonths: 12,
        totalInvested: amount * 12,
        maturityAmount: amount * 12 * 1.06
      });
    }

    const transactionId =
      "TXN" + Date.now() + Math.floor(Math.random() * 1000);

    await Transaction.create({
      senderId: req.user.id,
      transactionId,
      type,   
      amount,
      date: new Date()
    });

    res.json({
      message: "Transfer Successful",
      transactionId
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};


//send money to user
exports.sendMoney = async (req, res) => {
  try {
    const { receiverEmail, amount } = req.body;

    const senderAccount = await Account.findOne({ userId: req.user.id });
    if (!senderAccount)
      return res.status(404).json({ message: "Sender account not found" });

    if (senderAccount.balance < amount)
      return res.status(400).json({ message: "Insufficient Balance" });

    const receiver = await User.findOne({ email: receiverEmail });
    if (!receiver)
      return res.status(404).json({ message: "Receiver not found" });

    const receiverAccount = await Account.findOne({ userId: receiver._id });
    if (!receiverAccount)
      return res.status(404).json({ message: "Receiver account not found" });

    // Balance update
    senderAccount.balance -= Number(amount);
    await senderAccount.save();
    
    //zero balance check
    if (senderAccount.balance === 0) {
    const senderUser = await User.findById(req.user.id);
    await sendZeroBalanceEmail(senderUser, senderAccount.balance);
    }

    receiverAccount.balance += Number(amount);
    await receiverAccount.save();

    const transactionId =
      "TXN" + Date.now() + Math.floor(Math.random() * 1000);

    // Sender Record
    await Transaction.create({
      senderId: req.user.id,
      receiverId: receiver._id,
      transactionId,
      type: "send",
      amount: Number(amount),
      date: new Date()
    });

    // Receiver Record
    await Transaction.create({
      senderId: receiver._id,   
      receiverId: req.user.id,
      transactionId,
      type: "receive",
      amount: Number(amount),
      date: new Date()
    });

    res.json({
      message: "Money Sent Successfully",
      transactionId
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};
