import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 text-center px-4">
      <h1 className="text-3xl sm:text-5xl font-bold mb-4">
        Let’s go Shopping with{" "}
        <span className="text-red-500 underline decoration-2">ShopEase</span>
      </h1>

      <Link
        to="/product"
        className="border-2 border-black rounded-lg px-6 py-2 mb-6 hover:bg-black hover:text-white transition duration-300 ease-in-out"
      >
        Explore
      </Link>

      <img
        className="w-full max-w-4xl rounded-2xl shadow-lg object-cover"
        src="https://cdn.pixabay.com/photo/2020/03/27/17/03/shopping-4974313_1280.jpg"
        alt="Shopping"
      />
    </div>
  );
};

export default Home;
