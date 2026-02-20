const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");
const adminController = require("../controllers/adminController");

//customer routes
router.get("/customers", verifyToken, adminController.getCustomers);
router.post("/customers", verifyToken, adminController.createCustomer);
router.put("/customers/:id", verifyToken, adminController.updateCustomer);
router.put("/customers/status/:id", verifyToken, adminController.toggleCustomerStatus);

//account routes
router.get("/accounts", verifyToken, adminController.getAccounts);
router.post("/accounts", verifyToken, adminController.createAccount);
router.put("/accounts/:id", verifyToken, adminController.updateAccount);
router.delete("/accounts/:id", verifyToken, adminController.deleteAccount);

//loan managment routes
router.get("/loans", verifyToken, adminController.getAllLoans);
router.put("/loan-status", verifyToken, adminController.updateLoanStatus);

module.exports = router;
