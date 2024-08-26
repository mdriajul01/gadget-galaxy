import * as React from "react";
import { useRef, useState } from "react";
import products from "../../../public/jsonFile/Product.json";
import rating from "../../../public/rating.png";
import "../Home/card/Card.css";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

function Product() {
  const [orderArray, setOrderArray] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("default");
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const itemsPerPage = 8;
  const inputRefs = useRef([]);

  const handleOrder = (index) => {
    const quantity = inputRefs.current[index]?.value;
    if (quantity) {
      const orderList = {
        name: products[index].name,
        price: products[index].price,
        quantity: parseInt(quantity, 10),
      };
      setOrderArray((prevOrderArray) => [...prevOrderArray, orderList]);
      setCartOpen(true);
    }
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
    <section className="my-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center font-bold text-3xl sm:text-4xl my-10 mt-16 mb-10 text-[#3a72ebec]">
        Available Gadgets
      </h1>

      <div className="text-center mb-6 relative">
        <input
          type="text"
          placeholder="Search products..."
          className="border-2 border-gray-300 rounded-lg p-2 w-full sm:w-1/2 lg:w-1/3"
          onChange={handleSearchChange}
          value={searchQuery}
        />
        <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      <div className="flex justify-center gap-4 mb-6">
        <select
          className="border-2 border-gray-300 rounded-lg p-2"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="default">Sort by Rating</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>

        <select
          className="border-2 border-gray-300 rounded-lg p-2"
          onChange={handlePriceRangeChange}
        >
          <option value="0-3000">All Prices</option>
          <option value="0-100">Under $100</option>
          <option value="100-500">$100 - $500</option>
          <option value="500-1000">$500 - $1000</option>
          <option value="1000-3000">Above $1000</option>
        </select>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 justify-center lg:w-2/3 ">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((e, idx) => (
                <div
                  key={idx}
                  className="border relative w-full sm:w-80 lg:w-64 p-2 hover:bg-[#d19a0323] rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#d19a03e5] hover:border-x-red-500 shadow-2px shadow-[#fffbf688] transition-transform transform hover:-translate-y-2"
                >
                  <img
                    className="w-full h-60 lg:h-44 object-cover rounded-xl"
                    src={e?.photo}
                    alt="Gadget loading"
                  />
                  <h1 className="font-bold text-white mt-2">{e?.name}</h1>
                  <p className="font-light text-base text-white">${e?.price}</p>

                  <div className="flex gap-2 my-4">
                    <input
                      ref={(el) => (inputRefs.current[idx] = el)}
                      type="number"
                      name="count"
                      className="border-2 border-purple-50 w-16 rounded-lg text-center"
                      min="1"
                    />
                  </div>
                  <div className="flex justify-end items-center mr-2">
                    <img className="h-8 -mt-14 " src={rating} alt="Rating" />
                    <h1 className="font-semibold text-lg text-[#ffbd06] ml-2 -mt-12">
                      {e.rating}
                    </h1>
                  </div>
                  <button
                    className="btn bg-amber-600 text-white border-2 border-amber-500 hover:text-[#09e2ff] hover:border-amber-600 text-lg mx-auto w-full flex justify-center mb-4 mt-2 rounded-xl p-1"
                    onClick={() => handleOrder(idx)}
                  >
                    <FaShoppingCart className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No products found</p>
            )}
          </div>

          <div className="flex justify-center mt-8">
            <button
              className="mx-2 px-4 py-2 bg-gray-300 text-black rounded flex items-center"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <IoIosArrowDropleft className="mr-2" />
              Previous
            </button>
            <span className="mx-2">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="mx-2 px-4 py-2 bg-gray-300 text-black rounded flex items-center"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
              <IoIosArrowDropright className="ml-2" />
            </button>
          </div>
        </div>
        <div className="lg:w-1/3 w-full lg:ml-8 mt-8 lg:mt-0">
          {cartOpen && (
            <div className="bg-gray-300 p-4 rounded-lg shadow-lg flex flex-col">
              <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#3a72ebec]">
                Order List
              </h1>
              <table className="border-collapse border-2 border-gray-100 w-full text-sm">
                <thead>
                  <tr>
                    <th className="border-2 border-gray-500 p-2 text-neutral-800 font-semibold text-lg text-center">
                      Gadget Name
                    </th>
                    <th className="border-2 border-gray-500 p-2 text-neutral-800 font-semibold text-lg text-center">
                      Quantity
                    </th>
                    <th className="border-2 border-gray-500 p-2 text-neutral-800 font-semibold text-lg text-center">
                      Price $
                    </th>
                    <th className="border-2 border-gray-500 p-2 text-neutral-800 font-semibold text-lg text-center">
                      Total Price $
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orderArray.length > 0 &&
                    orderArray.map((e, idx) => (
                      <tr key={idx}>
                        <td className="border-2 border-gray-500 text-center text-neutral-800 font-semibold text-pretty px-2 py-1">
                          {e.name}
                        </td>
                        <td className="border-2 border-gray-500 text-center text-neutral-800 font-bold text-pretty px-2 py-1">
                          {e.quantity}
                        </td>
                        <td className="border-2 border-gray-500 text-center text-neutral-800 font-semibold text-pretty px-2 py-1">
                          {e.price}
                        </td>
                        <td className="border-2 border-gray-500 text-center text-neutral-800 font-semibold text-pretty px-2 py-1">
                          {e.price * e.quantity}
                        </td>
                      </tr>
                    ))}
                  <tr>
                    <td
                      colSpan="3"
                      className="border-2 border-gray-500 text-neutral-800 font-semibold text-lg text-center px-2 py-1"
                    >
                      Total Price
                    </td>
                    <td className="border-2 border-gray-500 text-neutral-800 font-semibold text-lg text-center px-2 py-1">
                      {calculateTotal()}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-4 flex justify-between">
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-transparent hover:text-amber-500 text-xl hover:border-2 hover:border-amber-500"
                  onClick={() => setCartOpen(false)}
                >
                  Close
                </button>

                <div className="flex justify-end w-full mt-2">
                  <button className="btn bg-amber-600 text-white border-2 border-amber-500 hover:bg-transparent hover:text-amber-500 text-xl hover:border-amber-600 rounded-xl p-2 px-4">
                    Order
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Product;
