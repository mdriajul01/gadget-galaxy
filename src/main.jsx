import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import ReactDOM from "react-dom/client";
import Home from './components/Home/Home.jsx'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={routes}>
          <App />
      </RouterProvider>

  </StrictMode>,


)
