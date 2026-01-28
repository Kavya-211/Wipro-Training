import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ✅ Popup ONLY when adding to cart
  const addToCart = (veg) => {
    const exist = cart.find(item => item.id === veg.id);

    if (exist) {
      setCart(cart.map(item =>
        item.id === veg.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...veg, quantity: 1 }]);
    }

    toast.success(`${veg.name} added to cart 🛒`);
  };

  const increment = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

 const decrement = (id) => {
  setCart(cart =>
    cart
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0) // ❌ remove when 0
  );
};


  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, increment, decrement, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
