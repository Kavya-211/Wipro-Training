import { useState } from "react";

function RecurringDeposit() {
  const [amount, setAmount] = useState("");
  const token = localStorage.getItem("token");

  const handleRD = async () => {
    const res = await fetch("http://localhost:5000/api/transfer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({ amount, type: "rd" })

    });

    const data = await res.json();

    if (res.ok) {
      alert("Recurring Deposit Created Successfully");
      setAmount("");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow p-4" style={{ maxWidth: "450px", width: "100%" }}>
        <h3 className="text-center mb-4">Recurring Deposit</h3>

        <input
          type="number"
          className="form-control mb-3"
          placeholder="Enter Monthly Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button className="btn btn-warning w-100" onClick={handleRD}>
          Start RD
        </button>
      </div>
    </div>
  );
}

export default RecurringDeposit;
