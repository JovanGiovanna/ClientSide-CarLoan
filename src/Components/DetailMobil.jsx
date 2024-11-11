import mobil from "../assets/mobil.png"; 

const DetailMobil = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      {/* Container untuk Detail Mobil */}
      <div className="bg-white w-[700px] rounded-2xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">Detail Mobil</h1>

        {/* Gambar Mobil */}
        <img src={mobil} alt="Mobil" className="w-full h-[300px] object-cover rounded-xl mb-6" />

        {/* Informasi Mobil */}
        <div className="px-4">
          <h2 className="text-3xl font-bold">Nama Model</h2>
          <p className="text-gray-600">Honda, Putih, MKD 1152</p>
        </div>

        {/* Status dan Detail Spesifikasi */}
        <div className="flex items-center justify-between px-4 mt-6 text-gray-800">
          {/* Status Ketersediaan */}
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
            <p>Available</p>
          </div>

          {/* Spesifikasi */}
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <span>⚙️</span>
              <p>Manual</p>
            </div>
            <div className="flex items-center space-x-2">
              <span>🚗</span>
              <p>4 Seats</p>
            </div>
            <div className="flex items-center space-x-2">
              <span>⛽</span>
              <p>3L / Pertamax</p>
            </div>
            <div className="flex items-center space-x-2">
              <span>📍</span>
              <p>47 Km</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMobil;
