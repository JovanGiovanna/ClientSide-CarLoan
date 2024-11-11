import React from "react";
import Header from "./Components/Header";
import MainHero from "./Components/MainHero";
import Ringkas from "./Components/DetailMobil";
import Footer from "./Components/Footer";

function ringkasan_mobil() {
  return (
    <div>
      <Header />

      <main>
        <MainHero />
        <Ringkas />
      </main>

      <Footer />
    </div>
  );
}

export default ringkasan_mobil;
