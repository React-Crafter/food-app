import './App.css'

import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
