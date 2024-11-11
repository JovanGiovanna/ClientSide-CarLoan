import React from "react";
import km from "../assets/speed.svg";
import kursi from "../assets/seat.svg";
import bensin from "../assets/bensin.svg";
import transmisi from "../assets/gear.svg";

const Ringkas = () => {
  return (
    <div className="flex space-x-10 font-semibold mt-3">
      {/* Kolom Pertama */}
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <img src={km} alt="Km" className="w-6 h-6" />
          <p className="text-lg">47 Km</p>
        </div>
        <div className="flex items-center space-x-2">
          <img src={bensin} alt="Fuel" className="w-6 h-6" />
          <p className="text-lg">4L / Pertamax</p>
        </div>
      </div>

      {/* Kolom Kedua */}
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <img src={kursi} alt="Seats" className="w-6 h-6" />
          <p className="text-lg">4 Seats</p>
        </div>
        <div className="flex items-center space-x-2">
          <img src={transmisi} alt="Transmission" className="w-6 h-6" />
          <p className="text-lg">Manual</p>
        </div>
      </div>
    </div>
  );
};

export default Ringkas;