const Chat = require("../models/Chat");

exports.getMessages = async (req, res) => {
  try {
    const { userId } = req.params;
    const currentUser = req.user.id;

    const messages = await Chat.find({
      $or: [
        { senderId: currentUser, receiverId: userId },
        { senderId: userId, receiverId: currentUser },
      ],
    }).sort({ createdAt: 1 });

    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
