import { useState } from "react";

function Deposit() {
  const [amount, setAmount] = useState("");
  const token = localStorage.getItem("token");

  const handleDeposit = async () => {
    const res = await fetch("http://localhost:5000/api/account/deposit", {
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
    style={{ minHeight: "80vh" }}
  >
    <div
      className="card shadow-lg p-4"
      style={{
        width: "100%",
        maxWidth: "450px",
        borderRadius: "12px"
      }}
    >
      <h4 className="text-center mb-4">Deposit Money</h4>

      <input
        type="number"
        className="form-control mb-3"
        placeholder="Enter Amount"
        onChange={(e) => setAmount(e.target.value)}
      />

      <button
        className="btn btn-success w-100"
        onClick={handleDeposit}
      >
        Deposit
      </button>
    </div>
  </div>
);

}

export default Deposit;
