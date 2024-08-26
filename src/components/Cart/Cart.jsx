import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";

const Cart = ({ orderArray = [], calculateTotal, onClose }) => {
  const [voucherCode, setVoucherCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState("");

  // Handle voucher code application
  const applyVoucher = () => {
    if (voucherCode === "DISCOUNT10") {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  };

  // Handle payment method change
  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  const totalAmount = calculateTotal ? calculateTotal() - discount : 0;

  return (
    <div className="min-h-screen bg-gray-100 p-4 lg:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Your Cart</h1>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            <AiOutlineClose size={24} />
          </button>
        </div>

        {/* Order Details */}
        <table className="w-full border-collapse border border-gray-200 mb-6">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 text-left">Item</th>
              <th className="border border-gray-300 p-2 text-left">Quantity</th>
              <th className="border border-gray-300 p-2 text-left">Price</th>
              <th className="border border-gray-300 p-2 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {orderArray.length > 0 ? (
              orderArray.map((item, idx) => (
                <tr key={idx}>
                  <td className="border border-gray-300 p-2">{item.name}</td>
                  <td className="border border-gray-300 p-2 text-center">
                    {item.quantity}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    ${item.price}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    ${item.price * item.quantity}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="border border-gray-300 p-2 text-center text-gray-500"
                >
                  No items in cart
                </td>
              </tr>
            )}
            <tr>
              <td
                colSpan="3"
                className="border border-gray-300 p-2 text-right font-bold"
              >
                Subtotal
              </td>
              <td className="border border-gray-300 p-2 text-center">
                ${calculateTotal ? calculateTotal() : 0}
              </td>
            </tr>
            <tr>
              <td
                colSpan="3"
                className="border border-gray-300 p-2 text-right font-bold"
              >
                Discount
              </td>
              <td className="border border-gray-300 p-2 text-center">
                -${discount}
              </td>
            </tr>
            <tr>
              <td
                colSpan="3"
                className="border border-gray-300 p-2 text-right font-bold"
              >
                Total
              </td>
              <td className="border border-gray-300 p-2 text-center font-bold">
                ${totalAmount}
              </td>
            </tr>
          </tbody>
        </table>

        {/* Voucher Section */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <MdArrowDropDown size={24} />
            <h2 className="text-xl font-semibold ml-2">Apply Voucher</h2>
          </div>
          <div className="flex">
            <input
              type="text"
              value={voucherCode}
              onChange={(e) => setVoucherCode(e.target.value)}
              placeholder="Enter voucher code"
              className="border border-gray-300 rounded-l-md p-2 w-full"
            />
            <button
              onClick={applyVoucher}
              className="bg-blue-600 text-white rounded-r-md px-4 py-2"
            >
              Apply
            </button>
          </div>
        </div>

        {/* Payment Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="Visa"
                checked={selectedPayment === "Visa"}
                onChange={handlePaymentChange}
                className="mr-2"
              />
              <FaCcVisa size={24} />
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="MasterCard"
                checked={selectedPayment === "MasterCard"}
                onChange={handlePaymentChange}
                className="mr-2"
              />
              <FaCcMastercard size={24} />
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="PayPal"
                checked={selectedPayment === "PayPal"}
                onChange={handlePaymentChange}
                className="mr-2"
              />
              <FaCcPaypal size={24} />
            </label>
          </div>
        </div>

        {/* Order Button */}
        <div className="flex justify-end">
          <button
            className="bg-green-600 text-white rounded-md px-4 py-2"
            disabled={!selectedPayment}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  orderArray: PropTypes.array,
  calculateTotal: PropTypes.func,
  onClose: PropTypes.func.isRequired,
};

export default Cart;
