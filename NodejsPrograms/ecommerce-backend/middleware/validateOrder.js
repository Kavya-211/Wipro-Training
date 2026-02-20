module.exports = (req, res, next) => {
  const { custname, items } = req.body;

  if (!custname) return res.status(400).json({ message: "Customer name required" });
  if (!Array.isArray(items) || items.length === 0)
    return res.status(400).json({ message: "At least one item required" });

  for (let item of items) {
    if (!item.product_id || !item.quantity)
      return res.status(400).json({ message: "Product ID and quantity required" });
  }

  next();
};
