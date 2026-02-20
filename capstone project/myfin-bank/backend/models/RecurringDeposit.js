const mongoose = require("mongoose");

const rdSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  monthlyAmount: Number,
  durationMonths: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("RecurringDeposit", rdSchema);
