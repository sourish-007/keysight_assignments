import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "./ProductCard";

function Category() {
  const { type } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url =
      type === "electronics"
        ? "https://fakestoreapi.com/products/category/electronics"
        : "https://fakestoreapi.com/products/category/men's clothing";

    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [type]);

  return (
    <>
      <header className="header">
        <h2>Shoppy</h2>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="#">About Us</Link>
          <Link to="/category/electronics">Electronics</Link>
          <Link to="/category/clothing">Clothing</Link>
          <Link to="#">Contact Us</Link>
        </nav>
      </header>

      <div className="category">
        <h2>{type.toUpperCase()} PRODUCTS</h2>

        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <footer className="footer">
        <p>© 2026 Shoppy. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Category;
