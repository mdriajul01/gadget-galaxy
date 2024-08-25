// import React from "react";
import logo from "../../../public/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { MdShoppingCartCheckout } from "react-icons/md";
import { RxDropdownMenu } from "react-icons/rx";
import { BsSearchHeartFill } from "react-icons/bs";
import { ContextSource } from "../ContextAPI/ContextAPI";
const Navber = () => {
  const { user, logOut } = useContext(ContextSource);
  console.log(user);
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
      <nav className="bg-[#72613ef3] p-4">
        <div className="container lg:ml-10 flex justify-between items-center font-semibold">
          {/* Logo or Title */}
          <button className="justify-center ">
            <img className="h-20 object-cover ml-4 " src={logo} alt="" />
            <h1 className="-mt-4 font-semibold text-lg text-[#ef7c2d] ">
              Gadget <span className="text-[#f8db89] font-medium">Galaxy</span>{" "}
            </h1>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 items-center ml-5">
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-cyan-400 underline  "
                  : ""
              }
            >
              <h1 className="text-white hover:bg-[#ef7c2d] px-3 py-2 rounded text-lg font-semibold">
                Home
              </h1>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-500 underline  "
                  : ""
              }
            >
              <h1 className="text-white hover:bg-[#ef7c2d] px-3 py-2 rounded text-lg font-semibold">
                About
              </h1>
            </NavLink>
            <NavLink
              to={"/services"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-500 underline  "
                  : ""
              }
            >
              <h1 className="text-white hover:bg-[#ef7c2d] px-3 py-2 rounded text-lg font-semibold">
                Services
              </h1>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-500 underline  "
                  : ""
              }
            >
              <h1 className="text-white hover:bg-[#ef7c2d] px-3 py-2 rounded text-lg font-semibold">
                Contuct
              </h1>
            </NavLink>
            <Link
              to={"/Product"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-500 underline  "
                  : ""
              }
            >
              <h1 className="text-white hover:bg-[#ef7c2d] px-3 py-2 rounded text-lg font-semibold">
                Shop
              </h1>
            </Link>
            <NavLink
              to="/new-product"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-500 underline"
                  : ""
              }
            >
              <h1 className="text-white hover:bg-[#ef7c2d] px-3 py-2 rounded text-lg font-semibold">
                Add Product
              </h1>
            </NavLink>
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

          {/* Cart Icon Button */}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 w-full bg-gray-800 text-white flex flex-col items-center z-20 ">
            <NavLink
              to={"/"}
              className="py-2 hover:bg-gray-700 w-full text-center "
              onClick={toggleMobileMenu}
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className="py-2 hover:bg-gray-700 w-full text-center"
              onClick={toggleMobileMenu}
            >
              About
            </NavLink>
            <NavLink
              to={"/services"}
              className="py-2 hover:bg-gray-700 w-full text-center"
              onClick={toggleMobileMenu}
            >
              Services
            </NavLink>
            <NavLink
              to={"/contact"}
              className="py-2 hover:bg-gray-700 w-full text-center"
              onClick={toggleMobileMenu}
            >
              Contact
            </NavLink>
            <NavLink
              to={"/Product"}
              className="py-2 hover:bg-gray-700 w-full text-center"
              onClick={toggleMobileMenu}
            >
              Products
            </NavLink>
            <NavLink
              to={"/new-product"}
              className="py-2 hover:bg-gray-700 w-full text-center"
              onClick={toggleMobileMenu}
            >
              Add Products
            </NavLink>
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
            {user ? (
              <div className="flex gap-5">
                <img
                  src={user?.photoURL}
                  className="w-12 h-12 rounded-full object-cover"
                  alt=""
                />
                <div>
                  <p>{user?.displayName}</p>
                </div>
                <button
                  onClick={() => logOut()}
                  className="btn text-xl font-[48px]  bg-[#090e1a] text-white hover:bg-sky-500 hover:text-base w-26 mb-3"
                >
                  LogOut
                </button>
              </div>
            ) : (
              <div onClick={() => navigate("/login")} className="p-5 ">
                <div onClick={toggleMobileMenu} className="">
                  <button className="btn text-xl font-[48px]  bg-red-500 text-white hover:bg-sky-500 hover:text-base w-48 ">
                    Login
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
        <div className="container mx-auto px-4 lg:px-10 flex  lg:flex-row lg:items-center lg:justify-between font-semibold gap-5 justify-center rounded-t-xl w-full bg-[#2f3547b4] max-w-full -mb-4 shadow-2xl shadow-[#000000] mt-2">
          {/* search and Go Button */}
          <div className="flex justify-end lg:flex-row items-center lg:space-x-4 w-full lg:w-auto my-4 ">
            <input
              type="text"
              placeholder="Search -->"
              className="p-3 rounded-s-xl bg-white w-fit lg:w-auto py-4 focus:ring-0 focus:outline-none placeholder:text-dark2 lg:mb-0"
            />
            <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl :-mt-4 w-fit lg:w-auto hover:bg-slate-800 border-l-2 border-[#6e79f8] ">
              Go
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <button
              aria-label="Shopping Cart"
              className="text-[#dcf027] text-3xl hover:bg-[#ef7c2d] p-2 rounded-md hidden md:block"
            >
              <MdShoppingCartCheckout />
            </button>

            {/* Login Button */}

            {user ? (
              <div className="flex gap-5">
                <img
                  src={user?.photoURL}
                  className="w-12 h-12 rounded-full object-cover"
                  alt=""
                />
                <div>
                  <p>{user?.displayName}</p>
                  {/* <p>{user?.email}</p> */}
                </div>
                <button
                  onClick={() => logOut()}
                  className="btn text-xs bg-red-500 w-fit hidden md:block text-white hover:bg-sky-500 hover:text-base"
                >
                  LogOut
                </button>
              </div>
            ) : (
              <button
                onClick={() => navigate("/login")}
                aria-label="Login"
                className="btn text-xs bg-red-500 w-fit hidden md:block text-white hover:bg-sky-500 hover:text-base"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
