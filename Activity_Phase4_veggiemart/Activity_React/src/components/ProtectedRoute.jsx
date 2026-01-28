import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AdminAuthContext } from "../context/AdminAuthContext";

function ProtectedRoute({ children }) {
  const { isAdmin } = useContext(AdminAuthContext);

  return isAdmin ? children : <Navigate to="/admin-login" replace />;
}

export default ProtectedRoute;
