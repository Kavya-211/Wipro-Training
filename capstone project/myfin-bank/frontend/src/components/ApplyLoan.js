import { useState, useEffect, useCallback } from "react";

function ApplyLoan() {
  const [amount, setAmount] = useState("");
  const [loans, setLoans] = useState([]);

  const token = localStorage.getItem("token");
  const fetchLoans = useCallback(async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/loan/my",
        {
          headers: { Authorization: token }
        }
      );

      const data = await res.json();
      setLoans(data);
    } catch (err) {
      console.log(err);
    }
  }, [token]);

  const applyLoan = async () => {
    if (!amount || amount <= 0) {
      alert("Enter valid amount");
      return;
    }

    await fetch(
      "http://localhost:5000/api/loan/apply",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        body: JSON.stringify({ amount: Number(amount) })
      }
    );

    setAmount("");
    fetchLoans(); 
  };

  useEffect(() => {
    fetchLoans();
  }, [fetchLoans]);

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4 shadow" style={{ maxWidth: "600px", width: "100%" }}>
        <h3 className="mb-4 text-center">Apply for Loan</h3>

        <input
          type="number"
          className="form-control mb-3"
          placeholder="Enter Loan Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button
          className="btn btn-primary w-100 mb-4"
          onClick={applyLoan}
        >
          Apply Loan
        </button>

        <h5 className="mb-3">Your Loan Applications</h5>

        <table className="table table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {loans.length === 0 ? (
              <tr>
                <td colSpan="2">No loan applications yet</td>
              </tr>
            ) : (
              loans.map((loan) => (
                <tr key={loan._id}>
                  <td>₹ {loan.amount}</td>
                  <td>
                    <span
                      className={
                        loan.status === "approved"
                          ? "text-success fw-bold"
                          : loan.status === "rejected"
                          ? "text-danger fw-bold"
                          : "text-warning fw-bold"
                      }
                    >
                      {loan.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default ApplyLoan;
