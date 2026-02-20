import { useEffect, useState, useCallback } from "react";

function AdminLoans() {
  const [loans, setLoans] = useState([]);
  const token = localStorage.getItem("token");

  const fetchLoans = useCallback(async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/admin/loans",
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

  const updateStatus = async (loanId, status) => {
    await fetch(
      "http://localhost:5000/api/admin/loan-status",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        body: JSON.stringify({ loanId, status })
      }
    );

    fetchLoans(); 
  };

  useEffect(() => {
    fetchLoans();
  }, [fetchLoans]);

  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-center">Loan Management</h3>

      <table className="table table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>User Email</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {loans.length === 0 ? (
            <tr>
              <td colSpan="4">No loan applications found</td>
            </tr>
          ) : (
            loans.map((loan) => (
              <tr key={loan._id}>
                <td>{loan.userId?.email}</td>
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

                <td>
                  {loan.status === "pending" && (
                    <>
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={() =>
                          updateStatus(loan._id, "approved")
                        }
                      >
                        Approve
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          updateStatus(loan._id, "rejected")
                        }
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>

              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminLoans;
