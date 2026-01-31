import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <>
      <div className="product-container">
        <img src={product.image} alt={product.title} />

        <div>
          <h2 className="api-box">{product.title}</h2>
          <p className="static-box">⭐ 4.0 Rating</p>

          <div className="add-cart-container">
            <h3>₹ {product.price * 80}</h3>
            <button
              className="add-cart-btn"
              onClick={() => {
                addToCart(product);
                navigate("/cart");
              }}
            >
              Add to Cart
            </button>
          </div>

          <p className="api-box">{product.description}</p>
        </div>
      </div>
    </>
  );
}

export default Product;
