import React from "react";
import { Link } from "react-router-dom";
function ProductCard({ product }) {
  return (
    <>
      <div
        className="product-card"
        style={{
          width: "220px",
          textAlign: "center"
        }}
      >
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "contain",
              marginBottom: "10px"
            }}
          />
          <h4 style={{ fontSize: "14px" }}>{product.title}</h4>
        </Link>
      </div>
    </>
  );
}
export default ProductCard;
