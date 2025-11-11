import React, { useContext } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import { ThemeContext } from "../ContextApi/ThemeContext";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from "../ContextApi/CartContext";

const Nav = () => {
  let { theme, setTheme } = useContext(ThemeContext);
  let {cart} = useContext(CartContext)

  let bg={}

  if(theme == 'light'){
    bg={
      backgroundColor : "white",
      color : "black"
    }
  }else{
     bg={
      backgroundColor : "black",
      color : "white"
    }
  }

  return (
    <nav className="navbar" style={bg}> 
      <div className="nav-container">
        <NavLink to="/" className="logo">
          <h1>
            <span className="angle">&lt;</span>
            <span className="brand">ShopEase</span>
            <span className="slash"> /</span>
            <span className="angle">&gt;</span>
          </h1>
        </NavLink>

        {/* Links */}
        <div className="links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/product"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Register
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <ShoppingCartIcon />
          </NavLink><sup><p>{cart.length}</p></sup>
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

           <span>
            {theme == "light" ? (
              <ToggleOffIcon onClick={() => setTheme("dark")}></ToggleOffIcon>
            ) : (
              <ToggleOnIcon onClick={() => setTheme("light")}></ToggleOnIcon>
            )}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
