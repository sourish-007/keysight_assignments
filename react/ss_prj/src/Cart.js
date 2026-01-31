import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity * 80,
    0
  );

  return (
    <>
      <div style={{ padding: "30px" }}>
        <h2>Cart Page</h2>

        {cart.map(item => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid black",
              padding: "10px 0"
            }}
          >
            <img src={item.image} alt="" width="80" />
            <p style={{ width: "300px" }}>{item.title}</p>
            <p style={{ width: "120px" }}>₹ {item.price * 80}</p>
            <p>Qty: {item.quantity}</p>
          </div>
        ))}

        <div style={{ marginTop: "20px" }}>
          <button
            onClick={() => navigate("/category/electronics")}
            style={{ padding: "10px 20px", marginRight: "20px" }}
          >
            Purchase More
          </button>

          <strong>Total Price: ₹ {totalPrice}</strong>
        </div>
      </div>
    </>
  );
}

export default Cart;
