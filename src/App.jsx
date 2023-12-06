import React, { useEffect, useState } from 'react'
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";



function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/home" exact element={<Home />}></Route>
        <Route path="/login" exact element={<Login />}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App