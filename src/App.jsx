import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Components from "./pages/Components.jsx"
import './App.css'

function App() {

  return (
    <>

        <nav>
          <Link to="/">Gallery</Link>
          <Link to="/variations">Variations</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/variations" element={<Components />}/>
        </Routes>
    </>
  )
}

export default App
