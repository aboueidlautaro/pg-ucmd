import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/static/css/format.css";
import Home from "./assets/routes/Home";
import Simulacion from "./assets/routes/Simulacion";
import Faq from "./assets/routes/Faq";
import Inscripcion from "./assets/routes/Inscripcion";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes path="/">
        <Route index element={<Home />} />
        <Route path="simulacion" element={<Simulacion />} />
        <Route path="faq" element={<Faq />} />
        <Route path="inscripcion" element={<Inscripcion />} />
      </Routes>
    </Router>
  );
}

export default App;
