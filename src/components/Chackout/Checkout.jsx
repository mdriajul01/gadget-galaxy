// Checkout.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [orderArray, setOrderArray] = useState([
    { name: "Product 1", price: 100, quantity: 2 },
    { name: "Product 2", price: 50, quantity: 1 },
  ]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    quantity: "",
  });
  const navigate = useNavigate();

  // Calculate total price
  const calculateTotal = () => {
    return orderArray.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const { name, price, quantity } = newProduct;
    if (name && price && quantity) {
      setOrderArray((prev) => [
        ...prev,
        {
          name,
          price: parseFloat(price),
          quantity: parseInt(quantity, 10),
        },
      ]);
      setNewProduct({ name: "", price: "", quantity: "" });
    }
  };

  const handleDeleteProduct = (index) => {
    setOrderArray((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    alert("Order placed successfully!");
    // Clear cart and redirect
    setOrderArray([]);
    navigate("/");
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        {/* Order Summary */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b py-2 px-4">Product</th>
                <th className="border-b py-2 px-4">Quantity</th>
                <th className="border-b py-2 px-4">Price</th>
                <th className="border-b py-2 px-4">Total</th>
                <th className="border-b py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orderArray.map((item, index) => (
                <tr key={index}>
                  <td className="border-b py-2 px-4">{item.name}</td>
                  <td className="border-b py-2 px-4">{item.quantity}</td>
                  <td className="border-b py-2 px-4">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="border-b py-2 px-4">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="border-b py-2 px-4">
                    <button
                      onClick={() => handleDeleteProduct(index)}
                      className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td
                  colSpan="3"
                  className="border-t py-2 px-4 text-right font-bold"
                >
                  Total
                </td>
                <td className="border-t py-2 px-4 font-bold">
                  ${calculateTotal().toFixed(2)}
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Checkout Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userInfo.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-lg font-medium mb-2">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={userInfo.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Complete Purchase
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
