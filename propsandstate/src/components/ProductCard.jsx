const ProductCard = ({ product, onBuy }) => {
  console.log(product);
  return (
    <>
      <div
        style={{
          border: "1px solid purple",
          padding: "10px",
          margin: "10px",
          borderRadius: "12px",
          backgroundColor: product.isStock ? "grey" : "dark-grey",
        }}
      >
        <h3>{product.name}</h3>
        <p>Price : ${product.price}</p>
        <p style={{ color: product.isStock ? "green" : "red" }}>
          {product.isStock ? "In stock" : "Out of Stock"}
        </p>
        <button onClick={() => onBuy(product.name)} disabled={!product.isStock}>
          Buy Now
        </button>
      </div>
    </>
  );
};

export default ProductCard;
