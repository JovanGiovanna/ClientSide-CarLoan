import react from "react";
import km from "../assets/speed.svg";
import kursi from "../assets/seat.svg";
import bensin from "../assets/bensin.svg";
import transmisi from "../assets/gear.svg";

const Ringkas = () => {
  return (
    <>
      <div className="inline-flex font-semibold mt-3">
        <div>
          <div className="inline-flex">
            <img src={km} alt="Km" />
            <p className="text-lg ml-2">47 Km</p>
          </div>
          <br />
          <div className="inline-flex">
            <img src={bensin} alt="Fuel" />
            <p className="text-lg ml-2">4L/Pertamax</p>
          </div>
        </div>
        <div className="ml-10">
          <div className="inline-flex">
            <img src={kursi} alt="Seats" />
            <p className="text-lg ml-2">4 Seats</p>
          </div>
          <br />
          <div className="inline-flex">
            <img src={transmisi} alt="Transmission" />
            <p className="text-lg ml-2">Manual</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ringkas;
