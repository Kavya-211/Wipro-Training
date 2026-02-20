const express = require("express");
const router = express.Router();
const Chat = require("../models/Chat");

router.get("/:user1/:user2", async (req, res) => {
  try {
    const { user1, user2 } = req.params;

    const messages = await Chat.find({
      $or: [
        { senderId: user1, receiverId: user2 },
        { senderId: user2, receiverId: user1 }
      ]
    }).sort({ createdAt: 1 });

    res.json(messages);
  } catch (err) {
    console.log("Fetch Chat Error:", err.message);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
