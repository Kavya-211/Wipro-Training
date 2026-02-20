import { useState } from "react";

function Transfer() {
  const [mode, setMode] = useState("investment"); 
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("loan");
  const [receiverEmail, setReceiverEmail] = useState("");
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  const handleInvestmentTransfer = async () => {
    const res = await fetch("http://localhost:5000/api/transfer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({
        amount: Number(amount),
        type
      })
    });

    const data = await res.json();

    if (res.ok) {
      setMessage(`Success! Transaction ID: ${data.transactionId}`);
    } else {
      setMessage(data.message);
    }
  };

  const handleSendMoney = async () => {
    const res = await fetch("http://localhost:5000/api/transfer/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({
        receiverEmail,
        amount: Number(amount)
      })
    });

    const data = await res.json();

    if (res.ok) {
      setMessage(`Money Sent! Transaction ID: ${data.transactionId}`);
    } else {
      setMessage(data.message);
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4 shadow" style={{ maxWidth: "500px", width: "100%" }}>
        <h3 className="text-center mb-4">Transfer</h3>

        <select
          className="form-control mb-3"
          value={mode}
          onChange={(e) => setMode(e.target.value)}
        >
          <option value="investment">Investment Transfer</option>
          <option value="send">Send Money to User</option>
        </select>

        {mode === "send" && (
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Receiver Email"
            value={receiverEmail}
            onChange={(e) => setReceiverEmail(e.target.value)}
          />
        )}

        <input
          type="number"
          className="form-control mb-3"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        {mode === "investment" && (
          <select
            className="form-control mb-3"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="loan">Loan</option>
            <option value="fd">Fixed Deposit</option>
            <option value="rd">Recurring Deposit</option>
          </select>
        )}

        <button
          className="btn btn-primary w-100"
          onClick={
            mode === "investment"
              ? handleInvestmentTransfer
              : handleSendMoney
          }
        >
          {mode === "investment" ? "Transfer" : "Send Money"}
        </button>

        {message && (
          <div className="alert alert-info mt-3 text-center">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default Transfer;
