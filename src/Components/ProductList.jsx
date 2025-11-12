import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../ContextApi/CartContext";
import { UserContext } from "../ContextApi/UserContext";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [url, setUrl] = useState("https://dummyjson.com/products");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setProducts(result.products);
      });
  }, [url]);

  const { cart, setCart } = useContext(CartContext);
  const { name } = useContext(UserContext);

  function AddCart(product) {
    let newCart = [...cart, product];
    if (name == null) {
      alert("Please login first!");
    } else {
      setCart(newCart);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
        E-Commerce Website
      </h1>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => setUrl("https://dummyjson.com/products")}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition"
        >
          All
        </button>
        <button
          onClick={() => setUrl("https://dummyjson.com/products/category/beauty")}
          className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg shadow-md transition"
        >
          Beauty
        </button>
        <button
          onClick={() => setUrl("https://dummyjson.com/products/category/furniture")}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md transition"
        >
          Furniture
        </button>
        <button
          onClick={() => setUrl("https://dummyjson.com/products/category/laptops")}
          className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg shadow-md transition"
        >
          Laptops
        </button>
        <button
          onClick={() => setUrl("https://dummyjson.com/products/category/groceries")}
          className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow-md transition"
        >
          Groceries
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
            <p className="text-sm text-gray-600 mb-2">
              {product.description.slice(0, 60)}...
            </p>
            <h4 className="text-blue-600 font-semibold mb-3">
              Price: ${product.price}
            </h4>

            <div className="flex gap-3 mt-auto">
              <Link
                to={`/details/${product.id}`}
                className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-md transition"
              >
                Read More
              </Link>
              <button
                onClick={() => AddCart(product)}
                className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
