import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import "../pages/Cart.css";

function Admin() {
  const { products, addProduct, deleteProduct } = useContext(ProductContext);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleAdd = () => {
    if (!name || !price || !image) return alert("Fill all fields");

    addProduct({
      name,
      price: Number(price),
      image
    });

    setName("");
    setPrice("");
    setImage("");
  };

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6 text-green-700">Admin Panel</h2>

      {/* ADD PRODUCT */}
      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <h3 className="font-semibold mb-4">Add New Vegetable</h3>

        <input className="border p-2 mr-2" placeholder="Name"
          value={name} onChange={(e) => setName(e.target.value)} />

        <input className="border p-2 mr-2" placeholder="Price"
          value={price} onChange={(e) => setPrice(e.target.value)} />

        <input className="border p-2 mr-2" placeholder="Image URL"
          value={image} onChange={(e) => setImage(e.target.value)} />

        <button onClick={handleAdd}
          className="bg-green-600 text-white px-4 py-2 rounded">
          Add Item
        </button>
      </div>

      {/* PRODUCT LIST */}
      <h3 className="font-semibold mb-4">All Products</h3>

      {products.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />

          <div className="cart-info">
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>

          <button className="remove-btn"
            onClick={() => deleteProduct(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Admin;
