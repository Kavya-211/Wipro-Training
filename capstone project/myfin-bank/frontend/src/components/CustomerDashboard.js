import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ChatBox from "../components/ChatBox";

function CustomerDashboard() {
  const navigate = useNavigate();
  const [showChat, setShowChat] = useState(false);

  const token = localStorage.getItem("token");
  const userId = token
    ? JSON.parse(atob(token.split(".")[1])).id
    : null;

  const adminId = "699555caa5e59793312fb5bb";

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4 fw-bold">
        Customer Dashboard
      </h2>

      <h4 className="mb-3 fw-bold" style={{ color: "#ffaa00" }}>
        Bank Operations
      </h4>

      <div className="row g-4 mb-5">

        
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div
            className="card shadow dashboard-card p-2"
            onClick={() => navigate("/deposit")}
            style={{ cursor: "pointer", borderRadius: "15px" }}
          >
            <img src="/deposit.jpg" className="card-img-top p-3" alt="deposit" height="150" />
            <div className="card-body text-center">
              <h5 className="card-title fw-semibold">Deposit</h5>
              <small className="text-muted">Add money securely</small>
            </div>
          </div>
        </div>

        
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div
            className="card shadow dashboard-card p-2"
            onClick={() => navigate("/withdraw")}
            style={{ cursor: "pointer", borderRadius: "15px" }}
          >
            <img src="/withdraw.jpg" className="card-img-top p-3" alt="withdraw" height="150" />
            <div className="card-body text-center">
              <h5 className="card-title fw-semibold">Withdraw</h5>
              <small className="text-muted">Withdraw funds</small>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
          <div
            className="card shadow dashboard-card p-2"
            onClick={() => navigate("/transfer")}
            style={{ cursor: "pointer", borderRadius: "15px" }}
          >
            <img src="/transfer.jpg" className="card-img-top p-3" alt="transfer" height="150" />
            <div className="card-body text-center">
              <h5 className="card-title fw-semibold">Transfer</h5>
              <small className="text-muted">Send money</small>
            </div>
          </div>
        </div>

       
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div
            className="card shadow dashboard-card p-2"
            onClick={() => navigate("/balance")}
            style={{ cursor: "pointer", borderRadius: "15px" }}
          >
            <img src="/bankbalance.jpg" className="card-img-top p-3" alt="balance" height="150" />
            <div className="card-body text-center">
              <h5 className="card-title fw-semibold">Check Balance</h5>
              <small className="text-muted">View account balance</small>
            </div>
          </div>
        </div>

      </div>


      <h4 className="mb-3 fw-bold" style={{ color: "#ff00c3" }}>
        Investment Categories
      </h4>

      <div className="row g-4 mb-5">

       
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div
            className="card shadow dashboard-card p-2"
            onClick={() => navigate("/fd")}
            style={{ cursor: "pointer", borderRadius: "15px" }}
          >
            <img src="/fixeddeposit.jpg" className="card-img-top p-3" alt="fd" height="150" />
            <div className="card-body text-center">
              <h5 className="card-title fw-semibold">Fixed Deposit</h5>
              <small className="text-muted">Invest safely</small>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
          <div
            className="card shadow dashboard-card p-2"
            onClick={() => navigate("/rd")}
            style={{ cursor: "pointer", borderRadius: "15px" }}
          >
            <img src="/recurringdeposit.jpg" className="card-img-top p-3" alt="rd" height="150" />
            <div className="card-body text-center">
              <h5 className="card-title fw-semibold">Recurring Deposit</h5>
              <small className="text-muted">Monthly investment</small>
            </div>
          </div>
        </div>

       
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div
            className="card shadow dashboard-card p-2"
            onClick={() => navigate("/emi")}
            style={{ cursor: "pointer", borderRadius: "15px" }}
          >
            <img src="/emicalculator.jpg" className="card-img-top p-3" alt="emi" height="150" />
            <div className="card-body text-center">
              <h5 className="card-title fw-semibold">EMI Calculator</h5>
              <small className="text-muted">Calculate EMI</small>
            </div>
          </div>
        </div>

      
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div
            className="card shadow dashboard-card p-2"
            onClick={() => navigate("/loan")}
            style={{ cursor: "pointer", borderRadius: "15px" }}
          >
            <img src="/loan.jpg" className="card-img-top p-3" alt="loan" height="150" />
            <div className="card-body text-center">
              <h5 className="card-title fw-semibold">Loan</h5>
              <small className="text-muted">Apply for loan</small>
            </div>
          </div>
        </div>

      </div>


      <div className="row g-4 mb-4">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div
            className="card shadow dashboard-card p-3 text-center"
            style={{ cursor: "pointer", borderRadius: "15px" }}
            onClick={() => setShowChat(!showChat)}
          >
            <h5 className="fw-semibold">Chat Support</h5>
            <small className="text-muted">
              If any Queries? Ask bank authority
            </small>
          </div>
        </div>
      </div>

      {showChat && userId && (
        <div className="row">
          <div className="col-12">
            <ChatBox
              userId={userId}
              receiverId={adminId}
            />
          </div>
        </div>
      )}

    </div>
  );
}

export default CustomerDashboard;
