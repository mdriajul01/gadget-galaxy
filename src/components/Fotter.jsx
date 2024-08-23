import React from 'react'
import logo from "../../public/logo.png"
import { TfiFacebook } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoMailUnreadSharp } from "react-icons/io5";
const Fotter = () => {
  return (
    <div>
      <footer className="footer bg-base-200 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <img className="h-20 object-cover m-0 -mr-3" src={logo} alt="" />
          <p className="-ml-3">
            <span className="text-xl font-semibold">Gadget Galaxy</span>
            <br />© 2024 Gadget Galaxy. All rights reserved.
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4 text-2xl ">
            <a href="" className="text-[#33ffffda]">
              <IoMailUnreadSharp />
            </a>
            <a href="" className="text-[#ec17ff]">
              <FaFacebookMessenger />
            </a>
            <a href="" className="text-[#1c74f8]">
              <TfiFacebook />
            </a>
            <a href="" className="text-[#e71919]">
              <BsInstagram />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default Fotter