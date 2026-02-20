const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");

const {
  transferMoney,
  sendMoney
} = require("../controllers/transferController");

router.post("/", verifyToken, transferMoney);

router.post("/send", verifyToken, sendMoney);

module.exports = router;
