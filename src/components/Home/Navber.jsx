// import React from "react";
import logo from "../../../public/logo.png";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { MdShoppingCartCheckout } from "react-icons/md";
import { RxDropdownMenu } from "react-icons/rx";
import { BsSearchHeartFill } from "react-icons/bs";
const Navber = () => {
  const navigate = useNavigate();
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
        <div className="container lg:ml-10 flex justify-between items-center font-semibold">
          {/* Logo or Title */}
          <button className="justify-center ">
            <img className="h-20 object-cover ml-4 " src={logo} alt="" />
            <h1 className="-mt-4 font-semibold text-lg text-[#ef7c2d]">
              Gadget <span className="text-[#f8db89] font-medium">Galaxy</span>{" "}
            </h1>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 items-center ml-5">
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
              placeholder="  Search..."
              className="rounded-xl"
            />
          </button>
        
            {/* Cart Icon Button */}
            <button className="text-[#dcf027] text-3xl  hover:bg-[#ef7c2d] p-2 rounded-md hidden md:block">
              <MdShoppingCartCheckout />
            </button>

            {/* Login Button */}

            <div
              onClick={() => navigate("/login")}
              className="my-auto w-fit lg:mx-0 ml-auto hidden md:block just "
            >
              <button className="btn text-xs bg-red-500 text-white hover:bg-sky-500 hover:text-base ">
                Login
              </button>
            </div>
        </div>
         

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 w-full bg-gray-800 text-white flex flex-col items-center z-20 ">
            <Link
              to="/"
              className="py-2 hover:bg-gray-700 w-full text-center "
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
              className="py-2 hover:bg-gray-700 w-full text-center flex justify-center"
              onClick={toggleSearch}
            >
              <BsSearchHeartFill className="mt-1" />

              <input
                type="search"
                placeholder="   Search..."
                className="rounded-[6px] border-2 "
              />
            </button>
            {/* <button
              className="py-2 hover:bg-gray-700 w-full text-center flex items-center justify-center"
              onClick={toggleSearch}
            >
              <BsSearchHeartFill className="text-2xl mr-2" />
              {isSearchOpen&& (
                <input
                  type="search"
                  placeholder="Search..."
                  className="rounded-2xl p-2 bg-gray-700 text-white"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
              )}
            </button> */}

            {/* Cart Icon Button (Mobile) */}

            <button
              className="py-2 hover:bg-gray-700  text-center"
              onClick={toggleMobileMenu}
            >
              <MdShoppingCartCheckout className="text-center text-2xl" />
            </button>
            <div onClick={() => navigate("/login")} className="p-5 ">
              <div onClick={toggleMobileMenu} className="">
                <button className="btn text-xl font-[48px]  bg-red-500 text-white hover:bg-sky-500 hover:text-base w-48 ">
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navber;
