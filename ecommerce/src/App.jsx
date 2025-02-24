import { useState } from "react";
import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";

function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 34545,
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Mobile",
      price: 3455,
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Pc",
      price: 3423545,
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [cartItem, setCartItem] = useState([]);

  const cartItemCount = cartItem.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const onAddToCart = (product) => {
    setCartItem((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // true
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // const onRemoveFromCart = (productId) => {
  //   setCartItem((prevItems) =>
  //     prevItems.filter((item) => item.id !== productId)
  //   );
  // };

  const onRemoveFromCart = (productId) => {
    setCartItem((e) => {
      return e
        .map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity - 1 }; // 1 0
          }
          return item;
        })
        .filter((item) => item.quantity > 0); // remove item with quantity 0
    });
  };

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <NavBar cartItemCount={cartItemCount} />
      <h1 style={{ textAlign: "center" }}>Eccomerce</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <Products
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
      <Cart items={cartItem} onRemoveFromCart={onRemoveFromCart} />
    </div>
  );
}

export default App;
