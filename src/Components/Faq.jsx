function FAQ() {
  return (
    <>
      <div className="flex justify-center space-x-10 mt-10 mb-10">
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <div>
            <h2 className="font-bold text-xl">Cepat Dan Efisien</h2>
            <p className="text-sm text-gray-600">
              Batalkan Dan Ubah Semua Booking Gratis Dalam Waktu 3 Jam Sebelum
              Datang
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>

          <div>
            <h2 className="font-bold text-xl">100 Ribu+ Review</h2>
            <p className="text-sm text-gray-600">Dari Pelanggan Web Kami</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
