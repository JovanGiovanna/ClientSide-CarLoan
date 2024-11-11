import React from "react";

const Faq = () => {
  return (
    <>
      <div className="flex justify-center space-x-10 mt-12 mb-10">
        <section className="bg-white-100 py-12 mt-40">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">
              Mengapa Sewa Mobil Di Car Loan
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-start md:space-x-12 space-y-8 md:space-y-0">
              <div className="flex items-start space-x-4">
                <div className="bg-black text-white p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm1-9h4v2h-6V7h2v4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Cepat Dan Efisien</h3>
                  <p className="text-gray-700">
                    Batalkan Dan Ubah Semua <br></br>Booking Gratis Dalam Waktu{" "}
                    <br />3 Jam Sebelum Datang
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-black text-white p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2a10 10 0 110 20 10 10 0 010-20zm-1 15h2v-2h-2v2zm0-4h2V7h-2v6z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">100 Ribu+ Review</h3>
                  <p className="text-gray-700">Dari Pelanggan Web Kami</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Faq;
