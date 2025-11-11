import React, { useContext } from "react";
import { CartContext } from "../ContextApi/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  let { cart, removeFromCart } = useContext(CartContext);

  const styles = {
    cartContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      gap: "20px",
      padding: "30px",
      backgroundColor: "#f7f8fa",
      minHeight: "100vh",
      boxSizing: "border-box",
    },
    emptyCart: {
      textAlign: "center",
      fontSize: "1.5rem",
      color: "#777",
      margin: "100px auto",
      width: "100%",
    },
    productCard: {
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      padding: "15px",
      width: "250px", // ✅ fixed width
      height: "380px", // ✅ fixed height
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    productImage: {
      width: "100%",
      height: "160px",
      objectFit: "cover",
      borderRadius: "8px",
      marginBottom: "10px",
    },
    productTitle: {
      fontSize: "1.1rem",
      color: "#333",
      textAlign: "center",
      marginBottom: "6px",
    },
    productDescription: {
      fontSize: "0.85rem",
      color: "#555",
      textAlign: "center",
      marginBottom: "8px",
      flexGrow: "1",
    },
    productPrice: {
      color: "#007bff",
      fontWeight: "bold",
      marginBottom: "8px",
    },
    link: {
      textDecoration: "none",
      color: "#007bff",
      fontWeight: "500",
      transition: "color 0.3s ease",
      marginBottom: "8px",
    },
    removeBtn: {
      backgroundColor: "#ff4d4f",
      color: "white",
      border: "none",
      padding: "8px 14px",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "0.9rem",
      transition: "background-color 0.3s ease",
    },
  };

  return (
    <div style={styles.cartContainer}>
      {cart.length === 0 ? (
        <h2 style={styles.emptyCart}>Your cart is empty 🛒</h2>
      ) : (
        cart.map((product) => (
          <div
            key={product.id}
            style={styles.productCard}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
            }}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              style={styles.productImage}
            />
            <h3 style={styles.productTitle}>{product.title}</h3>
            <p style={styles.productDescription}>
              {product.description.length > 50
                ? product.description.slice(0, 50) + "..."
                : product.description}
            </p>
            <h4 style={styles.productPrice}>Price : ${product.price}</h4>
            <Link to={`/details/${product.id}`} style={styles.link}>
              Read More...
            </Link>
            <button
              style={styles.removeBtn}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "#e60000")
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "#ff4d4f")
              }
              onClick={() => removeFromCart(product.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
