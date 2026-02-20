import { useState } from "react";

function FixedDeposit() {
  const [amount, setAmount] = useState("");
  const token = localStorage.getItem("token");

  const handleFD = async () => {
    const res = await fetch("http://localhost:5000/api/transfer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({ amount, type: "fd" })

    });

    const data = await res.json();

    if (res.ok) {
      alert("Fixed Deposit Created Successfully");
      setAmount("");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow p-4" style={{ maxWidth: "450px", width: "100%" }}>
        <h3 className="text-center mb-4">Fixed Deposit</h3>

        <input
          type="number"
          className="form-control mb-3"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button className="btn btn-success w-100" onClick={handleFD}>
          Invest in FD
        </button>
      </div>
    </div>
  );
}

export default FixedDeposit;
