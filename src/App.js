import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/Home.js'
import Nopage from './page/Nopage.js'
import Singlemovie from './page/Singlemovie.js'
import Navbar from './component/Navbar.js';
import Footer from './component/Footer.js';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar name="ArpitLiv" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Singlemovie />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
