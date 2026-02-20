import { useEffect, useState, useCallback } from "react";

function AdminAccounts() {
  const [accounts, setAccounts] = useState([]);
  const [form, setForm] = useState({ userId: "", balance: "" });
  const token = localStorage.getItem("token");

  const fetchAccounts = useCallback(() => {
    fetch("http://localhost:5000/api/admin/accounts", {
      headers: { Authorization: token }
    })
      .then(res => res.json())
      .then(data => setAccounts(data));
  }, [token]);

  useEffect(() => {
    fetchAccounts();
  }, [fetchAccounts]);

  const handleCreate = async () => {
    await fetch("http://localhost:5000/api/admin/accounts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify(form)
    });

    setForm({ userId: "", balance: "" });
    fetchAccounts();
  };

  const handleUpdate = async (id) => {
    const balance = prompt("Enter new balance");

    await fetch(`http://localhost:5000/api/admin/accounts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({ balance })
    });

    fetchAccounts();
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/admin/accounts/${id}`, {
      method: "DELETE",
      headers: { Authorization: token }
    });

    fetchAccounts();
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Manage Accounts</h3>

      <div className="card p-3 mb-4">
        <h5>Create Account</h5>

        <input
          className="form-control mb-2"
          placeholder="User ID"
          value={form.userId}
          onChange={(e) => setForm({ ...form, userId: e.target.value })}
        />

        <input
          className="form-control mb-2"
          placeholder="Balance"
          value={form.balance}
          onChange={(e) => setForm({ ...form, balance: e.target.value })}
        />

        <button className="btn btn-success" onClick={handleCreate}>
          Create
        </button>
      </div>

      <table className="table table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>User</th>
            <th>Balance</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {accounts.map(acc => (
            <tr key={acc._id}>
              <td>{acc.userId?.name}</td>
              <td>₹ {acc.balance}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => handleUpdate(acc._id)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(acc._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminAccounts;
