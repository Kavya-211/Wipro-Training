import { useContext } from "react";
import VegetableCard from "../components/VegetableCard";
import { ProductContext } from "../context/ProductContext";
import "./Shop.css";

function Shop() {
  // 🔥 GET PRODUCTS FROM CONTEXT (shared with Admin)
  const { products } = useContext(ProductContext);

  return (
    <div className="shop-container">
      <h1 className="shop-title">🛒 VeggieMart Shop</h1>

      <div className="shop-grid">
        {products.map((veg) => (
          <VegetableCard key={veg.id} vegetable={veg} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
