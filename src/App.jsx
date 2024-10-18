import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CarBrands from "./Components/CarBrands";
import Card from "./Components/card_mobil";
import MainHero from "./Components/MainHero";
import FAQ from "./Components/Faq";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      
      <div>
        <MainHero />
      </div>

      <div>
        <CarBrands />
      </div>

      <div>
        <Card/>
      </div>

      <div>
        <FAQ />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
