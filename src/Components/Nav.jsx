import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ThemeContext } from "../ContextApi/ThemeContext";
import { CartContext } from "../ContextApi/CartContext";

const Nav = () => {
  let { theme, setTheme } = useContext(ThemeContext);
  let { cart } = useContext(CartContext);

  let bg =
    theme === "light"
      ? "bg-white text-black shadow-md"
      : "bg-gray-900 text-white shadow-lg";

  return (
    <nav className={`w-full ${bg} py-4 px-6 fixed top-0 left-0 z-50`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="logo">
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="text-red-500">&lt;</span>
            <span className="text-blue-500">ShopEase</span>
            <span className="text-red-500">/&gt;</span>
          </h1>
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `transition-all duration-200 hover:text-red-500 ${
                isActive ? "text-red-500 font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-all duration-200 hover:text-red-500 ${
                isActive ? "text-red-500 font-semibold" : ""
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/product"
            className={({ isActive }) =>
              `transition-all duration-200 hover:text-red-500 ${
                isActive ? "text-red-500 font-semibold" : ""
              }`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/register"
            className={({ isActive }) =>
              `transition-all duration-200 hover:text-red-500 ${
                isActive ? "text-red-500 font-semibold" : ""
              }`
            }
          >
            Register
          </NavLink>

          {/* Cart Icon */}
          <div className="relative">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `transition-all duration-200 hover:text-red-500 ${
                  isActive ? "text-red-500 font-semibold" : ""
                }`
              }
            >
              <ShoppingCartIcon />
            </NavLink>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                {cart.length}
              </span>
            )}
          </div>

          {/* Theme Toggle */}
          <span className="cursor-pointer text-2xl">
            {theme === "light" ? (
              <ToggleOffIcon
                onClick={() => setTheme("dark")}
                className="hover:text-red-500 transition-all"
              />
            ) : (
              <ToggleOnIcon
                onClick={() => setTheme("light")}
                className="hover:text-yellow-400 transition-all"
              />
            )}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
