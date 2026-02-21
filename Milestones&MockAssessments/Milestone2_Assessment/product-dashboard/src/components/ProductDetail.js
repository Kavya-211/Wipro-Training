import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.log(err));
  }, [id]);

  if (!product) return <h3 className="text-center mt-5">Loading...</h3>;

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow">
        <img
          src={product.image}
          alt={product.name}
          className="img-fluid mb-3"
          style={{ maxHeight: "350px", objectFit: "cover" }}
        />

        <h2>{product.name}</h2>
        <p><b>Price:</b> ₹{product.price}</p>
        <p><b>Category:</b> {product.category}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
