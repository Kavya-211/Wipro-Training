const db = require("../db/connection");

exports.placeOrder = async (req, res) => {
  const { custname, items } = req.body;
  const conn = await db.getConnection();

  try {
    await conn.beginTransaction();

    let totalAmount = 0;

    //  Check stock & calculate total
    for (let item of items) {
      const [product] = await conn.query(
        "SELECT * FROM products WHERE id = ?",
        [item.product_id]
      );

      if (product.length === 0)
        throw new Error("Product not found");

      if (product[0].stock < item.quantity)
        throw new Error("Not enough stock");

      totalAmount += product[0].price * item.quantity;

      await conn.query(
        "UPDATE products SET stock = stock - ? WHERE id = ?",
        [item.quantity, item.product_id]
      );
    }

    //  Insert order
    const [order] = await conn.query(
      "INSERT INTO orders (custname, totalamount) VALUES (?, ?)",
      [custname, totalAmount]
    );

    //  Insert order items
    for (let item of items) {
      await conn.query(
        "INSERT INTO order_items (order_id, product_id, quantity) VALUES (?, ?, ?)",
        [order.insertId, item.product_id, item.quantity]
      );
    }

    await conn.commit();
    res.json({ message: "Order placed successfully" });

  } catch (err) {
    await conn.rollback();
    res.status(500).json({ error: err.message });
  } finally {
    conn.release();
  }
};
