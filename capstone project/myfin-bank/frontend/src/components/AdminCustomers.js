import { useEffect, useState, useCallback } from "react";

function AdminCustomers() {

  const [customers, setCustomers] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 5;

  const token = localStorage.getItem("token");

  const fetchCustomers = useCallback(() => {
  fetch("http://localhost:5000/api/admin/customers", {
    headers: { Authorization: token }
  })
    .then(res => res.json())
    .then(data => setCustomers(data));
}, [token]);

const fetchAccounts = useCallback(() => {
  fetch("http://localhost:5000/api/admin/accounts", {
    headers: { Authorization: token }
  })
    .then(res => res.json())
    .then(data => setAccounts(data));
}, [token]);
useEffect(() => {
  fetchCustomers();
  fetchAccounts();
}, [fetchCustomers, fetchAccounts]);


  //create customer
  const handleCreate = async () => {
    await fetch("http://localhost:5000/api/admin/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify(form)
    });

    setForm({ name: "", email: "", password: "" });
    fetchCustomers();
  };

  //update customer
  const handleUpdate = async (id) => {
    const name = prompt("Enter new name");
    const email = prompt("Enter new email");

    await fetch(`http://localhost:5000/api/admin/customers/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({ name, email })
    });

    fetchCustomers();
  };

  //toggle status
  const toggleStatus = async (id) => {
    await fetch(`http://localhost:5000/api/admin/customers/status/${id}`, {
      method: "PUT",
      headers: { Authorization: token }
    });

    fetchCustomers();
  };

  const getBalance = (userId) => {
    const account = accounts.find(acc => acc.userId?._id === userId);
    return account ? account.balance : 0;
  };

  //pagination

  const indexOfLast = currentPage * customersPerPage;
  const indexOfFirst = indexOfLast - customersPerPage;
  const currentCustomers = customers.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(customers.length / customersPerPage);

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Manage Customers</h3>
      <div className="card p-3 mb-4">
        <h5>Create Customer</h5>

        <input
          className="form-control mb-2"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="form-control mb-2"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="btn btn-success" onClick={handleCreate}>
          Create
        </button>
      </div>

      <table className="table table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Balance</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {currentCustomers.map(c => (
            <tr key={c._id}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td className="fw-bold text-success">
                ₹ {getBalance(c._id)}
              </td>
              <td>
                {c.active === false ? (
                  <span className="text-danger">Inactive</span>
                ) : (
                  <span className="text-success">Active</span>
                )}
              </td>
              <td>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => handleUpdate(c._id)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => toggleStatus(c._id)}
                >
                  Activate/deactivate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-center mt-3">

        <button
          className="btn btn-secondary me-2"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>

        <span className="fw-bold align-self-center">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="btn btn-secondary ms-2"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>

      </div>

    </div>
  );
}

export default AdminCustomers;
