import React, { useState } from "react";
// import Product from "./components/Products/Product"; // Assuming your Product component is here
import Cart from "./components/Cart/Cart";
import "./App.css";
import Navber from "./components/Home/Navber";
import { Outlet } from "react-router";
import Fotter from "./components/Fotter";
// import { CartProvider } from "./components/ContextAPI/CartContext";
// import Product from "./components/Products/Product";

const App = () => {
  const [orderArray, setOrderArray] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const calculateTotal = () => {
    return orderArray.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Fotter></Fotter>
      
      {cartOpen && (
        <Cart
          orderArray={orderArray}
          calculateTotal={calculateTotal}
          onClose={() => setCartOpen(false)}
        />
      )}
     
    </div>
  );
};

export default App;
