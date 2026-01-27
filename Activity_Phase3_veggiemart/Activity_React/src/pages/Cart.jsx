import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const { cart, increment, decrement, removeItem } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Cart</h2>

      {cart.length === 0 && <p className="empty-cart">Cart is empty</p>}

      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <div className="cart-info">
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>

          <div className="cart-controls">
            <button className="qty-btn" onClick={() => decrement(item.id)}>-</button>
            <span className="qty">{item.quantity}</span>
            <button className="qty-btn" onClick={() => increment(item.id)}>+</button>
          </div>

          <div className="cart-subtotal">
            ₹{item.price * item.quantity}
          </div>

          <button className="remove-btn" onClick={() => removeItem(item.id)}>
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="cart-total">
          <h3>Total: ₹{total}</h3>
          
        </div>
      )}
    </div>
  );
}

export default Cart;
