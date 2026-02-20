import { useState, useEffect } from "react";
import { FaRupeeSign } from "react-icons/fa";

function Withdraw() {
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(0);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:5000/api/account/balance", {
      headers: { authorization: token }
    })
      .then(res => res.json())
      .then(data => setBalance(data.balance));
  }, [token]);

  const handleWithdraw = async () => {
    const res = await fetch("http://localhost:5000/api/account/withdraw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token
      },
      body: JSON.stringify({ amount })
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "85vh",
        background: "linear-gradient(to right, #9db2f3, #95a5d8)"
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "12px"
        }}
      >
        <h3 className="text-center mb-3">Withdraw</h3>

        <h5 className="mb-3 text-center fw-bold text-success">
          Balance: <FaRupeeSign /> {balance}
        </h5>

        <input
          type="number"
          className="form-control mb-3"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button
          className="btn btn-danger w-100"
          onClick={handleWithdraw}
        >
          Withdraw
        </button>
      </div>
    </div>
  );
}

export default Withdraw;
