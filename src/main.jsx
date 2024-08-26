import { StrictMode } from "react";
// import { createRoot } from 'react-dom/client'
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./components/Home/Home.jsx";
import Registration from "./components/firebasee/Auth/Registration.jsx";
import Login from "./components/firebasee/Auth/Login.jsx";
import ContextAPI from "./components/ContextAPI/ContextAPI.jsx";
import Product from "./components/Products/Product.jsx";
import AboutUs from "./components/Home/AboutUs/AboutUs.jsx";
import Services from "./components/Home/service/Services.jsx";
import ContactUs from "./components/Home/ContuctUs/ContactUs.jsx";
import Add_Products from "./components/Add_product/Add_Products.jsx";
import Cart from "./components/Cart/Cart.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/Product",
        element: <Product></Product>,
        loader: () => {
          return fetch("../public/jsonFile/Product.json");
        },
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/new-product",
        element: <Add_Products></Add_Products>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextAPI>
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
    </ContextAPI>
  </StrictMode>
);
