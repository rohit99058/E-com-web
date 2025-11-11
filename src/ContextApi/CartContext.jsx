import { createContext, useState } from "react";

export let CartContext = createContext();

function CartProvider(props) {
  let [cart, setCart] = useState([]);

  // ✅ Remove item by ID
  const removeFromCart = (id) => {
    setCart(cart.filter(product => product.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
