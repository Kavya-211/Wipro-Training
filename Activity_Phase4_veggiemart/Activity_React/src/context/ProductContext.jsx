import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "Capsicum", price: 70, image: "/images/Capsicum.jpg" },
    { id: 2, name: "Brinjal", price: 40, image: "/images/Brinjal.jpg" },
    { id: 3, name: "Cucumber", price: 50, image: "/images/Cucumber.jpg" },
    { id: 4, name: "BitterGuord", price: 60, image: "/images/BitterGuord.jpg" },
    { id: 5, name: "Ladyfinger", price: 40, image: "/images/Ladyfinger.jpg" },
    { id: 6, name: "Tomato", price: 40, image: "/images/Tomato.jpg" },
    { id: 7, name: "Potato", price: 30, image: "/images/Potato.jpg" },
    { id: 8, name: "Carrot", price: 60, image: "/images/Carrot.jpg" },
    { id: 9, name: "Broccoli", price: 90, image: "/images/Broccoli.jpg" },
    { id: 10, name: "Onion", price: 35, image: "/images/Onion.jpg" },
    { id: 11, name: "Greenchilli", price: 35, image: "/images/Greenchilli.jpg" },
    { id: 12, name: "Cabbage", price: 35, image: "/images/Cabbage.jpg" }
  ]);

  const addProduct = (product) => {
    setProducts(prev => [...prev, { ...product, id: Date.now() }]);
  };

  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
