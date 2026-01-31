import React from "react";
import { Link } from "react-router-dom";

function Home() {
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
      <div className="home">
        <h1>Welcome to Shoppy</h1>

        <p>
          Shoppy is a simple and user-friendly online shopping platform where
          users can explore a wide range of products, from the latest
          electronics to stylish clothing. Our focus is on quality products
          and a smooth shopping experience.
        </p>

        <ul className="categories">
          <li className="category-card">
            <Link to="/category/electronics">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                alt="Electronics"
              />
              <h3>Electronics</h3>
            </Link>
          </li>

          <li className="category-card">
            <Link to="/category/clothing">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
                alt="Clothing"
              />
              <h3>Clothing</h3>
            </Link>
          </li>
        </ul>
      </div>
      <footer className="footer">
        <p>© 2026 Shoppy. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;
