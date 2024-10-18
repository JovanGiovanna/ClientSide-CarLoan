import BmwLogo from "../assets/bmw.png";
import HondaLogo from "../assets/hondalogo.png";
import HyundaiLogo from "../assets/hyundai.png";
import MitsubishiLogo from "../assets/mitsubishi-logo.png";
import ToyotaLogo from "../assets/toyota-logo.png";
import "../index.css";

function CarBrands() {
  return (
    <>
      <div className="text-3xl mt-10 text-center">
         <h1 className="font-bold">Populer Car Brands</h1>
      </div>
      <div className="ml-[280px] size-48 flex mt-[100px]">
        <img className="merek-img" src={BmwLogo} alt="..." />
        <img className="merek-img" src={HondaLogo} alt="..." />
        <img className="size-auto" src={HyundaiLogo} alt="..." />
        <img className="merek-img" src={MitsubishiLogo} alt="..." />
        <img className="merek-img" src={ToyotaLogo} alt="..." />
      </div>
    </>
  );
}

export default CarBrands;
