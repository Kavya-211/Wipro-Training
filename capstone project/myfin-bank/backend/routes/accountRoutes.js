const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");
const accountController = require("../controllers/accountController");

router.get("/balance", verifyToken, accountController.getBalance);
router.post("/deposit", verifyToken, accountController.deposit);
router.post("/withdraw", verifyToken, accountController.withdraw);
router.get("/history", verifyToken, accountController.getTransactionHistory);

module.exports = router;
