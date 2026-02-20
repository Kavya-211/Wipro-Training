import { useEffect, useState } from "react";
import { FaRupeeSign } from "react-icons/fa";

function Balance() {

  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {

    fetch("http://localhost:5000/api/account/balance", {
      headers: { Authorization: token }
    })
      .then(res => res.json())
      .then(data => {
        if (data.balance !== undefined) {
          setBalance(data.balance);
        }
      });

    fetch("http://localhost:5000/api/account/history", {
      headers: { Authorization: token }
    })
      .then(res => res.json())
      .then(data => {
        setTransactions(data);
      });

  }, [token]);

  return (
    <div className="container mt-5">

      <div className="d-flex justify-content-center mb-4">
        <div
          className="card shadow p-4 text-center"
          style={{ maxWidth: "450px", width: "100%" }}
        >
          <h3 className="mb-3">Account Balance</h3>
          <h2 className="text-success">
            <FaRupeeSign /> {balance}
          </h2>
        </div>
      </div>

      <div className="card shadow p-4">
        <h4 className="mb-3">Transaction History</h4>

        <table className="table table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th>Transaction ID</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {transactions.length === 0 ? (
              <tr>
                <td colSpan="4">No transactions found</td>
              </tr>
            ) : (
              transactions.map((txn) => (
                <tr key={txn._id}>
                  <td>{txn.transactionId}</td>
                  <td>
                    <span
                      className={
                        txn.type === "send"
                          ? "text-danger fw-bold"
                          : txn.type === "receive"
                          ? "text-success fw-bold"
                          : "text-primary fw-bold"
                      }
                    >
                      {txn.type}
                    </span>
                  </td>
                  <td>
                    <FaRupeeSign /> {txn.amount}
                  </td>
                  <td>
                    {new Date(txn.date).toLocaleString()}
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

export default Balance;
