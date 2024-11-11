import React from "react";
import detail from "/src/assets/detail.svg";

const DetailButton = () => {
<<<<<<< Updated upstream
  return (
    <a href="/vehicle/detail">
      <button className="bg-ButtonDetail inline-flex w-32 py-2 justify-center rounded-xl hover:bg-ButtonHover">
        <img className="w-6" src={detail} alt="" />
        <p className="text-white ml-1">Detail</p>
      </button>
    </a>
  );
=======

    return(
        <a href="/vehicle/detail">
            <button className="bg-ButtonDetail inline-flex w-32 py-2 justify-center rounded-xl hover:bg-ButtonHover bg-sky-700 ml">
                <img className="" src={detail} alt="" />
                <p className="text-white font-bold">Detail Lengkap</p>
            </button> 
        </a>
    );

>>>>>>> Stashed changes
};

export default DetailButton;
