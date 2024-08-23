import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import ReactDOM from "react-dom/client";
import Home from './components/Home/Home.jsx'
import Registration from './components/firebasee/Auth/Registration.jsx'
import Login from './components/firebasee/Auth/Login.jsx'
import ContextAPI from './components/ContextAPI/ContextAPI.jsx'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/registration",
        element:<Registration></Registration>
      },
      {
        path: "/login",
        element:<Login></Login>
      }

    ]
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
