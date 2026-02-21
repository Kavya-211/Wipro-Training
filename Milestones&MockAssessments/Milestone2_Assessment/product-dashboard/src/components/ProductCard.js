import React, { useState } from "react";

function ProductCard({ product }) {
  const [fav, setFav] = useState(false);

  return (
    <div className="card m-3 shadow" style={{ width: "18rem" }}>
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        style={{ height: "180px", objectFit: "cover" }}
      />

      <div className="card-body text-center">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">₹{product.price}</p>
        <p className="text-muted">{product.category}</p>

        <button
          className="btn btn-warning"
          onClick={() => setFav(!fav)}
        >
          {fav ? " Favorite" : " Add Favorite"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
