import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";



function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/home" exact element={<Home />}></Route>
        <Route path="/login" exact element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App