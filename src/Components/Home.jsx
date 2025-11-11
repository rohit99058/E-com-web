import React from "react";
import { Link } from "react-router-dom";
import './Home.css'

const Home = () => {
  return (
    <div style={{display : "flex", flexDirection : "column", justifyContent : "center", alignItems : "center"}}>
      <h1 style={{ textAlign: "center" }}>
        Let's Shopping with <span style={{ color: "red", textDecoration : "underline" }}>ShopEase</span>
      </h1>
      <span
        style={{
          border: "2px solid black",
          borderRadius: "10px",
          height: "30px",
          width : "180px",
          textAlign : "center",
          marginBottom : "10px"
        }}
      >
        <Link to="/product">Explore</Link>
      </span>
      <img
        style={{ height: "100%", width: "100%", backgroundSize : "cover" }}
        src="https://cdn.pixabay.com/photo/2020/03/27/17/03/shopping-4974313_1280.jpg"
        alt=""
      />
    </div>
  );
};

export default Home;
