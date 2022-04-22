import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Destination from "./components/pages/Destination";
import Crew from "./components/pages/Crew";
import Technology from "./components/pages/Technology";
import Me from "./components/pages/Me";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/destination" element={<Destination />} />
        <Route exact path="/crew" element={<Crew />} />
        <Route exact path="/technology" element={<Technology />} />
      </Routes>
      <Me />
    </BrowserRouter>
  );
}

export default App;
