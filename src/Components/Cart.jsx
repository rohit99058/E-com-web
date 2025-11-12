import React, { useContext } from "react";
import { CartContext } from "../ContextApi/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="flex flex-wrap justify-start items-start gap-6 p-8 min-h-screen bg-gray-100">
      {cart.length === 0 ? (
        <h2 className="w-full text-center text-2xl text-gray-500 mt-24">
          Your cart is empty 🛒
        </h2>
      ) : (
        cart.map((product) => (
          <div
            key={product.id}
            className="bg-white w-64 h-[380px] p-4 rounded-xl shadow-md flex flex-col items-center justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <h3 className="text-lg font-semibold text-gray-800 text-center mb-1">
              {product.title}
            </h3>
            <p className="text-sm text-gray-600 text-center flex-grow mb-2">
              {product.description.length > 50
                ? product.description.slice(0, 50) + "..."
                : product.description}
            </p>
            <h4 className="text-blue-600 font-semibold mb-1">
              Price : ${product.price}
            </h4>
            <Link
              to={`/details/${product.id}`}
              className="text-blue-500 font-medium hover:underline mb-2"
            >
              Read More...
            </Link>
            <button
              onClick={() => removeFromCart(product.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm transition-colors duration-300"
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
