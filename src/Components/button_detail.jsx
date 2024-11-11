import React from "react";
const DetailButton = () => {
  return (
    <a href="/ringkasan">
      <button className="bg-ButtonDetail inline-flex w-36 py-2 justify-center rounded-xl hover:bg-ButtonHover bg-sky-700">
        <p className="text-white ml-1 font-bold p-1">Detail Lengkap</p>
      </button>
    </a>
  );
};

export default DetailButton;
