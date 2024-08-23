// import React from "react";
import logo from "../../../public/logo.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { MdShoppingCartCheckout } from "react-icons/md";
import { BsSearchHeartFill } from "react-icons/bs";
import { RxDropdownMenu } from "react-icons/rx";
const Navber = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <div>
      <nav className="bg-[#55462af5] p-4">
        <div className="container mx-auto flex justify-between items-center font-semibold">
          {/* Logo or Title */}
          <button className="justify-center ">
            <img className="h-20 object-cover ml-4 " src={logo} alt="" />
            <h1 className="-mt-4 font-semibold text-lg text-[#ef7c2d]">
              Gadget <span className="text-[#f8db89] font-medium">Galaxy</span>{" "}
            </h1>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link
              to="/"
              className="text-white hover:bg-[#ef7c2d] px-3 py-2 rounded"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:bg-[#ef7c2d] px-3 py-2 rounded"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-white hover:bg-[#ef7c2d] px-3 py-2 rounded"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-white hover:bg-[#ef7c2d] px-3 py-2 rounded"
            >
              Contact
            </Link>
            <Link
              to="/blog"
              className="text-white hover:bg-[#ef7c2d] px-3 py-2 rounded"
            >
              Products
            </Link>
            <Link
              to="/blog"
              className="text-white hover:bg-[#ef7c2d] px-3 py-2 rounded"
            >
              Add Products
            </Link>
          </div>
          {/* Search Button */}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#dcf027] text-4xl  hover:bg-[#ef7c2d] hover:rounded-3xl hover:p-2 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <RxDropdownMenu />
          </button>

          {/* Search Button */}

          <button
            className="text-white text-2xl  p-2 rounded-md hidden md:block "
            onClick={toggleSearch}
          >
            <input
              type="text"
              placeholder="Search..."
              className="rounded-2xl"
            />

            {/* Search Input (Visible on Click) */}
          </button>

          {/* Cart Icon Button */}
          <button className="text-[#dcf027] text-3xl  hover:bg-[#ef7c2d] p-2 rounded-md hidden md:block">
            <MdShoppingCartCheckout />
          </button>

          {/* Login Button */}
          <button className="text-[#f76504] hover:bg-[#ef7c2d] hover:text-[#dcf027] p-2 rounded-md hidden md:block bg-[#dcf027] hover:font-semibold ">
            Login
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center z-10">
            <Link
              to="/"
              className="py-2 hover:bg-gray-700 w-full text-center"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="py-2 hover:bg-gray-700 w-full text-center"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link
              to="/services"
              className="py-2 hover:bg-gray-700 w-full text-center"
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="py-2 hover:bg-gray-700 w-full text-center"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            <Link
              to="/blog"
              className="py-2 hover:bg-gray-700 w-full text-center"
              onClick={toggleMobileMenu}
            >
              Products
            </Link>
            <Link
              to="/blog"
              className="py-2 hover:bg-gray-700 w-full text-center"
              onClick={toggleMobileMenu}
            >
              Add Products
            </Link>
            <button
              className="py-2 hover:bg-gray-700 w-full text-center"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-5 h-5 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M14 10a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <input
                type="search"
                placeholder="Search..."
                className="rounded-2xl"
              />
            </button>
            <button
              className="py-2 hover:bg-gray-700  text-center"
              onClick={toggleMobileMenu}
            >
              <MdShoppingCartCheckout className="text-center text-2xl" />
            </button>
            <button
              className="py-2 hover:bg-gray-700 w-full text-center"
              onClick={toggleMobileMenu}
            >
              Login
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navber;
