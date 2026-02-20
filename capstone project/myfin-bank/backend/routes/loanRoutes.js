const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");

const {
  applyLoan,
  getMyLoans
} = require("../controllers/loanController");

router.post("/apply", verifyToken, applyLoan);
router.get("/my", verifyToken, getMyLoans);

module.exports = router;
