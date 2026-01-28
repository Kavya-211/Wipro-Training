import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import { AdminAuthProvider } from "./context/AdminAuthContext";
import { AuthProvider } from "./auth/AuthContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AdminAuthProvider>
       <AuthProvider> 
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
       </AuthProvider> 
    </AdminAuthProvider>
  </BrowserRouter>
);
