import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import AddProduct from "./components/AddProduct";
import { ProductContext } from "./context/ProductContext";

function App() {
  const { products } = useContext(ProductContext);

  return (
    <Router>
      <nav className="navbar navbar-dark bg-dark p-2">
        <Link className="navbar-brand" to="/">Products</Link>
        <Link className="btn btn-success" to="/add">Add Product</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
