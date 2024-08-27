import React, { useRef, useState } from "react";
import products from "../../../public/jsonFile/Product.json";
import rating from "../../../public/rating.png";
import { FaShoppingCart, FaSearch, FaTimes } from "react-icons/fa";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { motion } from "framer-motion";
import "./Product.css";

function Product() {
  const [orderArray, setOrderArray] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("default");
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const itemsPerPage = 16;
  const inputRefs = useRef([]);

  const handleOrder = (index) => {
    const quantity = inputRefs.current[index]?.value || 1;
    const orderList = {
      name: products[index].name,
      price: products[index].price,
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

  let sortedProducts = [...products]
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
      <motion.h1
        className="text-center font-extrabold text-4xl sm:text-5xl my-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Explore Our Gadgets
      </motion.h1>

      {/* Search and Filters */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between mb-10 space-y-4 md:space-y-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
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
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
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
        </motion.div>

        {/* Cart Button */}
        <motion.button
          className="flex items-center space-x-2 px-4 py-3 bg-[#7480ff] text-white rounded-full shadow hover:bg-[#655849] transition duration-300"
          onClick={() => setCartOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaShoppingCart className="text-lg" />
          <span>Cart ({orderArray.length})</span>
        </motion.button>
      </motion.div>

      {/* Products Grid */}
      <motion.div
        className="flex flex-wrap justify-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.06, rotate: 0.3 }}
              className="card-container bg-[#425166d3] rounded-xl shadow-lg overflow-hidden transform transition duration-75 hover:shadow-2xl hover:scale-y-50 cursor-pointer w-64 gap-10"
              onClick={() => handleProductClick(product)}
              layout
            >
              <motion.img
                src={product.image}
                alt={product.name}
                className="card-img w-full h-44 object-cover hover:opacity-90 transition-opacity duration-75"
                whileHover={{ scale: 1.1 }}
              />
              <motion.div
                className="p-5 flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <h2 className="text-lg font-semibold text-white hover:text-[#fffd78] transition-colors duration-75 w-3/4">
                  {product.name}
                </h2>
                <p className="text-[#f3ece9] font-bold text-xl mt-2">
                  ${product.price}
                </p>
                <div className="flex items-center mt-3">
                  <img src={rating} alt="Rating" className="w-6 h-6" />
                  <span className="ml-2 text-[#f1e14a] font-medium">
                    {product.rating}
                  </span>
                </div>
                <div className="flex items-center mt-4 space-x-2">
                  <motion.input
                    ref={(el) => (inputRefs.current[idx] = el)}
                    type="number"
                    name="count"
                    defaultValue={1}
                    min="1"
                    className="w-16 px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#ef7c2d]"
                    whileFocus={{ scale: 1.05 }}
                  />
                  <motion.button
                    className="flex-1 px-4 py-2 bg-[#f3d54f] text-[#090d1b] text-semibold rounded-full shadow hover:bg-[#3a49eb]  transition duration-300"
                    onClick={() => handleOrder(idx)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))
        ) : (
          <p className="text-lg text-[#ef7c2d] font-bold">No products found.</p>
        )}
      </motion.div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 space-x-4">
        {currentPage > 1 && (
          <motion.button
            className="px-4 py-2 bg-[#7480ff] text-white rounded-full shadow hover:bg-[#655849] transition duration-300"
            onClick={() => setCurrentPage((prev) => prev - 1)}
            whileHover={{ scale: 1.1 }}
          >
            <IoIosArrowDropleft />
          </motion.button>
        )}
        {currentPage < totalPages && (
          <motion.button
            className="px-4 py-2 bg-[#7480ff] text-white rounded-full shadow hover:bg-[#655849] transition duration-300"
            onClick={() => setCurrentPage((prev) => prev + 1)}
            whileHover={{ scale: 1.1 }}
          >
            <IoIosArrowDropright />
          </motion.button>
        )}
      </div>

      {/* Cart Overlay */}
      {cartOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white rounded-lg p-8 relative max-w-3xl w-full mx-4"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              className="absolute top-4 right-4 text-gray-600 hover:text-red-600 transition duration-200"
              onClick={() => setCartOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes size={20} />
            </motion.button>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Shopping Cart
            </h2>
            <ul className="mb-6 space-y-4">
              {orderArray.map((order, idx) => (
                <li key={idx} className="flex justify-between items-center">
                  <span className="text-gray-700">
                    {order.name} x {order.quantity}
                  </span>
                  <span className="font-semibold text-gray-900">
                    ${order.price * order.quantity}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center text-xl font-bold text-gray-900 mb-6">
              <span>Total:</span>
              <span>${calculateTotal()}</span>
            </div>
            <button className="w-full px-4 py-3 bg-[#7480ff] text-white rounded-full shadow hover:bg-[#655849] transition duration-300">
              Checkout
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Product Details Modal */}
      {selectedProduct && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white rounded-lg p-8 relative max-w-3xl w-full mx-4"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              className="absolute top-4 right-4 text-gray-600 hover:text-red-600 transition duration-200"
              onClick={() => setSelectedProduct(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes size={20} />
            </motion.button>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              {selectedProduct.name}
            </h2>
            <motion.img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover rounded-md mb-6"
              whileHover={{ scale: 1.1 }}
            />
            <p className="text-lg text-gray-700 mb-4">
              {selectedProduct.description}
            </p>
            <p className="text-xl font-semibold text-gray-900">
              ${selectedProduct.price}
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

export default Product;
