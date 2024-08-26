// src/contexts/CartContext.js
import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [orderArray, setOrderArray] = useState([]);

  const addToCart = (item) => {
    setOrderArray((prevOrderArray) => [...prevOrderArray, item]);
  };

  const removeFromCart = (index) => {
    setOrderArray((prevOrderArray) =>
      prevOrderArray.filter((_, i) => i !== index)
    );
  };

  const calculateTotal = () => {
    return orderArray.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{ orderArray, addToCart, removeFromCart, calculateTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
