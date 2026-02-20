import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AuthPage from "./components/AuthPage";
import CustomerDashboard from "./components/CustomerDashboard";
import AdminDashboard from "./components/AdminDashboard";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import ApplyLoan from "./components/ApplyLoan";
import EMIcalculator from "./components/EMIcalculator";
import FixedDeposit from "./components/FixedDeposit";
import RecurringDeposit from "./components/RecurringDeposit";
import Balance from "./components/Balance";
import Transfer from "./components/Transfer";
import AdminLoans from "./components/AdminLoans";
import AdminAccounts from "./components/AdminAccounts";
import AdminCustomers from "./components/AdminCustomers";

function App() {

  const [role, setRole] = useState(localStorage.getItem("role"));

  useEffect(() => {
    const handleStorageChange = () => {
      setRole(localStorage.getItem("role"));
    };

    window.addEventListener("storage", handleStorageChange);
    handleStorageChange();

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/auth" element={<AuthPage setRole={setRole} />} />

        <Route
          path="/dashboard"
          element={
            role === "admin"
              ? <AdminDashboard key="admin" />
              : <CustomerDashboard key="customer" />
          }
        />
        
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/loan" element={<ApplyLoan />} />
        <Route path="/emi" element={<EMIcalculator />} />
        <Route path="/fd" element={<FixedDeposit />} />
        <Route path="/rd" element={<RecurringDeposit />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/admin/loans" element={<AdminLoans />} />
        <Route path="/admin/accounts" element={<AdminAccounts />} />
        <Route path="/admin/users" element={<AdminCustomers />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
