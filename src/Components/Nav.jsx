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

  // Light / Dark mode background classes
  let bg =
    theme === "light"
      ? "bg-white text-gray-900 shadow-sm"
      : "bg-gray-900 text-white shadow-md";

  return (
    <nav
      className={`w-full ${bg} py-2 px-5 fixed top-0 left-0 z-50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-1">
          <h1 className="text-xl font-bold tracking-tight">
            <span className="text-red-500">&lt;</span>
            <span className="text-blue-500">ShopEase</span>
            <span className="text-red-500">/&gt;</span>
          </h1>
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center gap-4 text-sm font-medium">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/product", label: "Products" },
            { to: "/register", label: "Register" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `transition-all duration-200 hover:text-red-500 ${
                  isActive ? "text-red-500 font-semibold" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

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
              <ShoppingCartIcon fontSize="small" />
            </NavLink>
            {cart.length > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] rounded-full px-1.5 py-0.5">
                {cart.length}
              </span>
            )}
          </div>

          {/* Theme Toggle */}
          <span className="cursor-pointer text-lg">
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
