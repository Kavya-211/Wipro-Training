import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import socket from "../socket";
import ChatBox from "../components/ChatBox";

function AdminDashboard() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);
  const [showChat, setShowChat] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState("");

  const token = localStorage.getItem("token");
  const userId = token
    ? JSON.parse(atob(token.split(".")[1])).id
    : null;

  useEffect(() => {
    if (userId) {
      socket.emit("joinRoom", userId);
    }
  }, [userId]);

  useEffect(() => {
    if (!token) return;

    fetch("http://localhost:5000/api/admin/customers", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Customers API:", data);

        if (Array.isArray(data)) {
          setCustomers(data);
        } else if (Array.isArray(data.customers)) {
          setCustomers(data.customers);
        } else {
          setCustomers([]);
        }
      })
      .catch((err) => {
        console.log("Fetch error:", err);
        setCustomers([]);
      });
  }, [token]);

  useEffect(() => {

    socket.on("zeroBalance", (data) => {
      console.log("Zero balance event received:", data);

      setNotifications((prev) => [
        {
          id: Date.now(),
          message: data.message,
          time: new Date().toLocaleString(),
        },
        ...prev,
      ]);
    });

    return () => {
      socket.off("zeroBalance");
    };
  }, []);

  const handleDelete = (id) => {
    setNotifications((prev) =>
      prev.filter((note) => note.id !== id)
    );
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Admin Dashboard</h2>

      <div className="row g-4 mb-4">

        <div className="col-md-4">
          <div
            className="card shadow p-4 text-center"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/admin/users")}
          >
            <h4>Manage Users</h4>
            <p>View and manage customer accounts.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="card shadow p-4 text-center"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/admin/loans")}
          >
            <h4>Manage Loans</h4>
            <p>Approve or reject loan applications.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="card shadow p-4 text-center"
            style={{ cursor: "pointer" }}
            onClick={() => setShowChat(!showChat)}
          >
            <h4>Chat Support</h4>
            <p>Chat with customers</p>
          </div>
        </div>

      </div>

      {showChat && (
        <div className="card shadow p-4 mb-4">

          <div className="mb-3">
            <label className="form-label fw-bold">
              Select Customer to Chat
            </label>

            <select
              className="form-select"
              value={selectedCustomerId}
              onChange={(e) =>
                setSelectedCustomerId(e.target.value)
              }
            >
              <option value="">-- Select Customer --</option>

              {customers.map((customer) => (
                <option
                  key={customer._id}
                  value={customer._id}
                >
                  {customer.name}
                </option>
              ))}
            </select>
          </div>

          {selectedCustomerId && userId && (
            <ChatBox
              currentUserId={userId}
              selectedUserId={selectedCustomerId}
            />
          )}

        </div>
      )}

      {notifications.length > 0 && (  
        <div className="card shadow mt-4">
          <div className="card-header bg-danger text-white py-2">
            Zero Balance Notifications
          </div>

          <div
            className="card-body"
            style={{
              maxHeight: "150px",
              overflowY: "auto",
              padding: "10px",
            }}
          >
            {notifications.map((note) => (
              <div
                key={note.id}
                className="d-flex justify-content-between align-items-start mb-2 border-bottom pb-2"
                style={{ fontSize: "14px" }}
              >
                <div>
                  <strong>{note.message}</strong>
                  <br />
                  <small className="text-muted">
                    {note.time}
                  </small>
                </div>

                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleDelete(note.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

export default AdminDashboard;
