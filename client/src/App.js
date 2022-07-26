import React from "react";
import GameDetail from "./components/pages/GameDetail/GameDetail";
import Home from "./components/pages/Home/Home";

import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage/LandingPage";
import CreateVideogame from "./components/pages/CreateVideogame/CreateVideogame";
import NotFound from "./components/pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
    
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/games" element={<Home />} />
          <Route path="/game/:idVideogame" element={<GameDetail/>}/>
          <Route path="/game/newgame" element={<CreateVideogame/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>

    </div>
  );
}

export default App;
