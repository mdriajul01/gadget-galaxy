import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navber from './components/Home/Navber'
import { Outlet } from 'react-router'
import Fotter from './components/Fotter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navber></Navber>
      <Outlet></Outlet>
      <Fotter></Fotter>
    </>
  )
}

export default App
