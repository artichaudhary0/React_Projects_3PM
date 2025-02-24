import "./App.css";

import ProductList from "./components/ProductList";

function App() {
  // list of products
  const product = [
    { name: "Laptop", price: 123214, isStock: true },
    { name: "Pc", price: 134523214, isStock: true },
    { name: "Mobile", price: 453123214, isStock: false },
    { name: "Laptop", price: 123214, isStock: true },
    { name: "Pc", price: 134523214, isStock: true },
    { name: "Mobile", price: 453123214, isStock: false },
  ];

  return (
    <>
      <ProductList products={product} />
    </>
  );
}

export default App;
