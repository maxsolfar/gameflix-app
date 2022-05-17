import React from "react";
import Navbar from "./components/organisms/Navbar/Navbar";
import Home from "./components/pages/Home/Home";

import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
    
        <Routes>
        
          <Route path="/" element={<LandingPage />} />
          <Route path="/games" element={<Home />} />
          
        </Routes>

    </div>
  );
}

export default App;
