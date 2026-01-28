import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./VegetableCard.css";


function VegetableCard({ vegetable }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="veg-card">
      <img src={vegetable.image} alt={vegetable.name} className="veg-image" />
      <h2 className="veg-name">{vegetable.name}</h2>
      <p className="veg-price">₹{vegetable.price}</p>
      <button className="add-btn" onClick={() => addToCart(vegetable)}>
        Add to Cart
      </button>
    </div>
  );
}

export default VegetableCard;
