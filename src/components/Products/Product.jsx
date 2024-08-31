import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaTimes } from "react-icons/fa";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { motion } from "framer-motion";
import axios from "axios";
import rating from "../../../public/rating.png";
import "./Product.css";
import product from "../../../public/jsonFile/Product.json"


const Product = () => {
  const [gadget, setgadget] = useState([]);
  const [orderArray, setOrderArray] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("default");
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [selectedProduct, setSelectedProduct] = useState(null); // For the modal
  const itemsPerPage = 12;
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/gadget")
      .then((res) => {
        setgadget(res?.data); // Use fetched data
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleOrder = (index) => {
    const quantity = inputRefs.current[index]?.value || 1;
    const orderList = {
      name: gadget[index].name,
      price: gadget[index].price,
      name: product[index].name,
      price: product[index].price,
      quantity: parseInt(quantity, 10),
    };
    setOrderArray((prevOrderArray) => [...prevOrderArray, orderList]);
    setCartOpen(true);
  };

  const calculateTotal = () => {
    return orderArray.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    const [min, max] = event.target.value.split("-");
    setPriceRange([parseInt(min, 10), parseInt(max, 10)]);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleCheckout = () => {
    if (orderArray.length > 0) {
      navigate("/checkout");
    } else {
      alert(
        "Your cart is empty. Please add some products to proceed to checkout."
      );
    }
  };

  let sortedProducts = [...product, ...gadget]
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
    )
    .sort((a, b) => b.rating - a.rating);

  if (sortOption === "highToLow") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === "lowToHigh") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="my-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      {/* Header */}
      <h1 className="text-center font-extrabold text-4xl sm:text-5xl my-10 ">
        Explore Our Gadgets
      </h1>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 space-y-4 md:space-y-0">
        {/* Search Bar */}
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-12 pr-4 py-3 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-[#f8db89]"
            onChange={handleSearchChange}
            value={searchQuery}
          />
          <FaSearch className="absolute left-4 top-3.5 text-gray-400 text-lg" />
        </div>

        {/* Sort and Price Filters */}
        <div className="flex space-x-4">
          <select
            className="w-40 px-4 py-3 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-[#ef7c2d]"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="default">Sort by Rating</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>

          <select
            className="w-40 px-4 py-3 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-[#ef7c2d]"
            onChange={handlePriceRangeChange}
          >
            <option value="0-3000">All Prices</option>
            <option value="0-100">Under $100</option>
            <option value="100-500">$100 - $500</option>
            <option value="500-1000">$500 - $1000</option>
            <option value="1000-3000">Above $1000</option>
          </select>
        </div>

        {/* Cart Button */}
        <button
          className="flex items-center space-x-2 px-4 py-3 bg-[#7480ff] text-white rounded-full shadow hover:bg-[#655849] transition duration-300"
          onClick={() => setCartOpen(true)}
        >
          <FaShoppingCart className="text-lg" />
          <span>Cart ({orderArray.length})</span>
        </button>
      </div>

      {/* Products Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.06, rotate: 0.3 }}
              className="card-container bg-[#425166d3] rounded-xl shadow-lg overflow-hidden transform transition duration-75 hover:shadow-2xl hover:scale-y-50 cursor-pointer w-64 gap-10"
              onClick={() => handleProductClick(product)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="card-img w-full h-44 object-cover hover:opacity-90 transition-opacity duration-75"
              />
              <div className="p-5 flex flex-col">
                <h2 className="text-lg font-semibold text-white hover:text-[#fffd78] transition-colors duration-75 w-fit">
                  {product.name}
                </h2>
                <p className="text-[#f3ece9] font-bold text-xl mt-2">
                  ${product.price}
                </p>
                <div className="flex justify-end -mt-6">
                  <img src={rating} alt="Rating" className="w-6 h-6" />
                  <span className="text-[#f1e14a] font-semibold ">
                    10 / {product.rating}
                  </span>
                </div>

                <div className="flex items-center mt-4 space-x-2">
                  <input
                    ref={(el) => (inputRefs.current[idx] = el)}
                    type="number"
                    name="count"
                    defaultValue={1}
                    min="1"
                    className="w-16 px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#ef7c2d] mt-5"
                  />
                  <button
                    className="flex-1 text-balance px-4 py-2 bg-[#f3d54f] text-[#090d1b] text-semibold rounded-full shadow hover:bg-[#3a49eb]  transition mt-5 duration-300"
                    onClick={() => handleOrder(idx)}
                  >
                    Add to Cart
                  </button>
                </div>

                <button
                  className="mt-4 bg-[#f3ece9] text-[#090d1b] py-2 rounded-full shadow hover:bg-[#3a49eb] transition duration-300"
                  onClick={() => handleProductClick(product)}
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-lg text-gray-500">
            No products found matching your criteria.
          </p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 space-x-4">
        {currentPage > 1 && (
          <button
            className="px-4 py-2 bg-[#7480ff] text-white rounded-full shadow hover:bg-[#655849] transition duration-300"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <IoIosArrowDropleft className="text-xl" />
          </button>
        )}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full shadow ${
              currentPage === index + 1
                ? "bg-[#f8db89] text-[#090d1b]"
                : "bg-[#7480ff] text-white hover:bg-[#655849]"
            } transition duration-300`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            className="px-4 py-2 bg-[#7480ff] text-white rounded-full shadow hover:bg-[#655849] transition duration-300"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <IoIosArrowDropright className="text-xl" />
          </button>
        )}
      </div>

      {/* Cart Overlay */}
      {cartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-1/3 p-8">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            <ul>
              {orderArray.map((item, index) => (
                <li key={index} className="mb-4">
                  <p>{item.name}</p>
                  <p>
                    ${item.price} x {item.quantity} = $
                    {item.price * item.quantity}
                  </p>
                </li>
              ))}
            </ul>
            <div className="border-t-2 pt-4 mt-4">
              <p className="text-lg font-semibold">
                Total: ${calculateTotal()}
              </p>
              <button
                className="mt-4 w-full px-4 py-2 bg-[#f8db89] text-[#090d1b] rounded-full shadow hover:bg-[#ef7c2d] transition duration-300"
                onClick={handleCheckout}
              >
                Checkout
              </button>
              <button
                className="mt-4 w-full px-4 py-2 bg-[#7480ff] text-white rounded-full shadow hover:bg-[#655849] transition duration-300"
                onClick={() => setCartOpen(false)}
              >
                Close Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-900 hover:text-black"
              onClick={handleCloseModal}
            >
              <FaTimes className="text-xl" />
            </button>
            <h2 className="text-2xl text-center text-orange-500 font-bold mb-4">
              {selectedProduct.name}
            </h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="flex items-center w-fit h-96  object-cover rounded"
            />
            <p className="text-lg text-slate-950 font-semibold mb-2">
              Price: ${selectedProduct.price}
            </p>
            <div className="flex items-center mb-4">
              <img src={rating} alt="Rating" className="w-6 h-6 mr-2" />
              <span className="text-[#fd6500] font-semibold ">
                10 / {selectedProduct.rating}
              </span>
            </div>
            <p className="text-lg font-semibold w-fit mb-2">
              details: {selectedProduct.details}
            </p>
            <button
              className="mt-4 w-full px-4 py-2 bg-[#f8db89] text-[#090d1b] rounded-full shadow hover:bg-[#ef7c2d] transition duration-300"
              onClick={() => {
                handleOrder(selectedProduct);
                handleCloseModal();
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Product;
