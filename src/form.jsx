import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import MainHero from "./Components/MainHero.jsx";
import DetailMobil from "./Components/DetailMobil.jsx";
import BookingForm from "./Components/BookingForm.jsx";
import FAQ_form from "./Components/FAQ_form.jsx";
import ketentuan from "./Components/ketentuan.jsx";

function form() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          {/* Rute utama (form) */}
          <Route path="/" element={<Navigate to="/form" replace />} />
          <Route
            path="/form"
            element={
              <>
                <MainHero />
                <BookingForm />
                <FAQ_form />
              </>
            }
          />

          {/* Rute untuk halaman Ringkasan Mobil */}
          <Route path="/ringkasan" element={<DetailMobil />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default form;
