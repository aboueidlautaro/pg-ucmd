import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/static/css/format.css";
import Home from "./assets/routes/Home";
import Simulacion from "./assets/routes/Simulacion";
import Faq from "./assets/routes/Faq";
import Inscripcion from "./assets/routes/Inscripcion";
import Contact from "./assets/routes/Contact";
import Footer from "./assets/components/Footer";
import NotFound from "./assets/routes/NotFound";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes path="/">
        <Route index element={<Home />} />
        <Route path="simulacion" exact element={<Simulacion />} />
        <Route path="faq" element={<Faq />} />
        <Route path="inscripcion" element={<Inscripcion />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
