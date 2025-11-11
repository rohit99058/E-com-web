import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1 className="about-title">About Our Store</h1>

      <div className="about-content">
        <p>
          Welcome to <strong>ShopEase</strong> — your one-stop destination for
          top-quality products at unbeatable prices. We believe shopping should
          be fun, fast, and effortless.
        </p>
        <p>
          Our mission is to bring you the best deals, trustworthy brands, and a
          seamless online shopping experience. With a growing catalog and
          customer-first policies, we aim to make your life easier and brighter.
        </p>
        <p>
          Thank you for choosing us. Every click you make supports a team that’s
          passionate about innovation, quality, and your satisfaction.
        </p>
      </div>

      <footer className="about-footer">
        <p>© {new Date().getFullYear()} ShopEase. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
