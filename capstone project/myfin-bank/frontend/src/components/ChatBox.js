import { useEffect, useState } from "react";
import socket from "../socket";

function ChatBox(props) {

  const userId = props.userId || props.currentUserId;
  const receiverId = props.receiverId || props.selectedUserId;

  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {

    if (!userId || !receiverId) return;

    socket.emit("joinRoom", userId);

    fetch(`http://localhost:5000/api/chat/${userId}/${receiverId}`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setMessages(data);
        } else {
          setMessages([]);
        }
      })
      .catch(() => setMessages([]));

    socket.on("receiveMessage", (msg) => {

      if (
        (msg.senderId === userId && msg.receiverId === receiverId) ||
        (msg.senderId === receiverId && msg.receiverId === userId)
      ) {
        setMessages(prev => [...prev, msg]);
      }
    });

    return () => {
      socket.off("receiveMessage");
    };

  }, [userId, receiverId]);

  const sendMessage = () => {

    if (!text.trim()) return;
    if (!userId || !receiverId) return;

    socket.emit("sendMessage", {
      senderId: userId,
      receiverId: receiverId,
      message: text
    });

    setText("");
  };

  return (
    <div className="card shadow">
      <div className="card-header bg-primary text-white">
        Chat Support
      </div>

      <div style={{ height: "350px", overflowY: "auto", padding: "10px" }}>
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`text-${msg.senderId === userId ? "end" : "start"} mb-2`}
          >
            <span
              className={`badge ${
                msg.senderId === userId
                  ? "bg-success"
                  : "bg-secondary"
              }`}
            >
              {msg.message}
            </span>
          </div>
        ))}
      </div>

      <div className="d-flex p-2">
        <input
          className="form-control me-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type message..."
        />
        <button
          className="btn btn-primary"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
