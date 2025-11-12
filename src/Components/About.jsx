import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 md:px-16 py-10 flex flex-col items-center">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="self-start mb-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow transition-colors duration-300"
      >
        ← Back
      </button>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-600">
        About Our Store
      </h1>

      {/* Content */}
      <div className="max-w-3xl text-lg leading-relaxed space-y-4 bg-white p-6 rounded-2xl shadow-md">
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

      {/* Footer */}
      <footer className="mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="font-semibold text-blue-500">ShopEase</span>. All rights reserved.
      </footer>
    </div>
  );
};

export default About;
