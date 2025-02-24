import React from "react";

function Cart({ items, onRemoveFromCart }) {
  // total price of items in cart
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <h2 style={{ marginTop: 0 }}>Shopping cart</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {items.map((item) => (
          <div
            key={item.id} // uniquely identify
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "5px",
              padding: "10px",
              backgroundColor: "white",
              borderRadius: "5px",
            }}
          >
            <div>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <p style={{ color: "black" }}>{item.name}</p>
              <p style={{ color: "black" }}>
                ${item.price}x{item.quantity}
              </p>

              {/* single x qualtity */}

              <button
                onClick={() => onRemoveFromCart(item.id)}
                style={{
                  color: "white",
                  padding: "8px 15px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <h3>Total : ${total.toFixed(2)}</h3>
      </div>
    </>
  );
}

export default Cart;
