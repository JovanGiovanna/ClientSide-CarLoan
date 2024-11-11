import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import CarBrands from "./Components/CarBrands.jsx";
import Card from "./Components/card_mobil.jsx";
import MainHero from "./Components/MainHero.jsx";
import Faq from "./Components/Faq.jsx";
import DetailMobil from "./Components/DetailMobil.jsx"; 
function App() {
  return (
    <Router>
      <div>
        <Header />
        
        <Routes>
          {/* Rute utama (home) */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={
            <>
              <MainHero />
              <CarBrands />
              <Card />
              <Faq />
            </>
          } />
          
          {/* Rute untuk halaman Ringkasan Mobil */}
          <Route path="/ringkasan" element={<DetailMobil />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
