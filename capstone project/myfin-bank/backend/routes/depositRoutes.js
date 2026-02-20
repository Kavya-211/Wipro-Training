const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");
const depositController = require("../controllers/depositController");

router.post("/fd", verifyToken, depositController.createFD);
router.post("/rd", verifyToken, depositController.createRD);

module.exports = router;
