// @flow strict

import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../firebase.config";
import { ContextSource } from "../../ContextAPI/ContextAPI";
import Swal from "sweetalert2"; // Import SweetAlert2

function Login() {
  const auth = getAuth(app);
  const { logIn, googleUser } = useContext(ContextSource);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = e.target;
    const email = data.email.value;
    const password = data.password.value;

    if (email && password) {
      try {
        await logIn(email, password);
        Swal.fire({
          title: "Success!",
          text: "You have successfully logged in!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/"); // Redirect to home page
        });
      } catch (error) {
        Swal.fire({
          title: "Login Failed!",
          text: "Invalid email or password. Please try again.",
          icon: "error",
          confirmButtonText: "Try Again",
        }).then(() => {
          // Optionally, you can focus the input fields for better user experience
          document.querySelector('input[name="email"]').focus();
        });
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });
    return () => unsubscribe(); // Clean up subscription on unmount
  }, [auth]);

  return (
    <section className="bg-[#f7e1a53d] w-full ">
      <h1 className="text-5xl text-center font-bold mt-8">Log In</h1>
      <div className="my-10 shadow-y shadow-xl shadow-[#3af03494] border-y-4 border-y-[#52ff3b] border-x-2 p-3 mx-auto bg-[#daeff542] w-fit">
        <form onSubmit={handleLogin} className="w-1/2 ml-10">
          <div>
            <label className="text-lg font-semibold">
              Enter your Email <span className="text-red-600">*</span>
            </label>
            <input
              name="email"
              placeholder="example@email.com"
              type="text"
              className="border-2 border-black rounded-xl p-1 w-80"
            />
          </div>
          <div>
            <label className="text-lg font-semibold">
              Enter your Password <span className="text-red-600">*</span>
            </label>
            <input
              name="password"
              placeholder="password"
              type="password"
              className="border-2 border-black rounded-xl p-1 w-80"
            />
          </div>
          <div>
            <button className="btn bg-red-500 mx-auto text-white w-1/2 flex justify-center mt-3 hover:bg-transparent hover:text-red-600 hover:border-red-500 border-2 shadow-[#d19a03a8]">
              Log In
            </button>
          </div>
        </form>

        <div className="flex justify-end">
          <button
            onClick={() => navigate("/registration")}
            className="text-red-500 font-semibold hover:text-[#10ff08] text-right text-lg mr-8 hover:text-xl"
          >
            New User?
          </button>
        </div>

        <div>
          <button
            onClick={() => googleUser()}
            className="btn bg-[#fdd700] hover:text-[#f82d2d] font-semibold w-full text-lg shadow-[#d19a03a8] hover:text-xl text-[#04279b]"
          >
            Log In with Google
            <FcGoogle />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Login;
