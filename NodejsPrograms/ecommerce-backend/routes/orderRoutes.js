const express = require("express");
const router = express.Router();
const validateOrder = require("../middleware/validateOrder");
const { placeOrder } = require("../controllers/orderController");
const db = require("../db/connection");


// PLACE ORDER
router.post("/", validateOrder, placeOrder);

// GET ALL ORDERS
router.get("/", async (req, res) => {
  try {
    const [orders] = await db.query("SELECT * FROM orders ORDER BY created_at DESC");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});


// GET ORDER WITH ITEMS
router.get("/:id", async (req, res) => {
  try {
    const orderId = req.params.id;

    const [order] = await db.query("SELECT * FROM orders WHERE id = ?", [orderId]);

    const [items] = await db.query(`
      SELECT p.name, p.price, oi.quantity
      FROM order_items oi
      JOIN products p ON oi.product_id = p.id
      WHERE oi.order_id = ?
    `, [orderId]);

    res.json({ order: order[0], items });

  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});


module.exports = router;
