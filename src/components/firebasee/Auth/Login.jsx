// @flow strict

import React from "react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../firebase.config";
import { ContextSource } from "../../ContextAPI/ContextAPI";

function Login() {
  const auth = getAuth(app);
  // const [user, setUser] = useState();
  const { logIn, googleUser } = useContext(ContextSource);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const data = e.target;
    const email = data.email.value;
    const password = data.password.value;
    console.log(email, password);

    if (email && password) {
      // signInWithEmailAndPassword(auth, email, password)
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      logIn(email, password)
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (customer) => {
      if (customer) {
        console.log(customer);
        setUser(customer);
      }
    });
  }, [auth]);

  // const handleLogOut = () => {
  //   if (user) {
  //     signOut(auth)
  //       .then((res) => {
  //         console.log("logOut Confarm");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // };
  return (
    <section className="bg-[#f7e1a53d] w-full ">
      <h1 className="text-5xl text-center font-bold mt-8">logIn</h1>
      <div
        onSubmit={handleLogin}
        className=" my-10 shadow-y  shadow-xl shadow-[#3af03494] border-y-4  border-y-[#52ff3b] border-x-2 p-3 mx-auto bg-[#daeff542] w-fit"
      >
        <form className=" w-1/2  ml-10 ">
          <div className="">
            <label className="text-lg font-semibold " htmlFor="">
              Enter your Email <span className="text-red-600">*</span>
            </label>
            <input
              name="email"
              placeholder=" example@email.com"
              type="text"
              className="border-2 border-black rounded-xl p-1 w-80  "
            />
          </div>
          <div className="">
            <label className="text-lg font-semibold " htmlFor="">
              Enter your Password <span className="text-red-600">*</span>
            </label>
            <input
              name="password"
              placeholder="password"
              type="password"
              className="border-2 border-black rounded-xl p-1 w-80 "
            />
          </div>
          <div>
            <button className="btn bg-red-500 mx-auto text-white w-1-2 flex justify-center mt-3 hover:bg-transparent hover:text-red-600 hover:border-red-500 border-2 shadow-[#d19a03a8] w-1/2">
              LogIn
            </button>
          </div>
        </form>

        <div className="flex justify-end">
          <button
            onClick={() => navigate("/registration")}
            className="text-red-500 font-semibold 
            hover:text-[#10ff08]  text-right text-lg mr-8 hover:text-xl "
          >
            New User?
          </button>
        </div>

        <div>
          <button
            onClick={() => googleUser()}
            className="btn  bg-[#fdd700] hover:text-[#f82d2d]  font-semibold w-full text-lg shadow-[#d19a03a8] hover:text-xl text-[#04279b]
          "
          >
            {" "}
            LogIn with Google
            <FcGoogle />
          </button>
        </div>
        {/* <div className="mx-auto w-fit">
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn text-white w-32 bg-red-500 "
            >
              LogOut
            </button>
          ) : (
            ""
          )}
        </div> */}
      </div>
    </section>
  );
}

export default Login;
