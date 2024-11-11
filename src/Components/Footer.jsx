import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-8 mt-40">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        
        {/* Logo Section */}
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h2 className="text-2xl font-bold">Logo</h2>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Partner Pembayaran</h3>
            <div className="flex mt-2 space-x-4">
              <img src="path/to/bca-logo.png" alt="BCA" className="h-10" />
              <img src="path/to/gopay-logo.png" alt="GoPay" className="h-10" />
              <img src="path/to/dana-logo.png" alt="Dana" className="h-10" />
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h3 className="text-lg font-semibold">Tentang Kami</h3>
          <p className="text-sm mt-4">
            Lorem ipsum dolor sit <br /> amet, consectetur <br />adipiscing elit.
            Nullam <br />cursus, augue mollis <br />elementum pretium.
          </p>
        </div>

        {/* Social Media Section */}
        <div className="w-full sm:w-1/3">
          <h3 className="text-lg font-semibold">Follow Kami Di</h3>
          <div className="flex flex-col mt-4 space-y-2">
            <a href="#" className="flex items-center space-x-2">
              <img src="path/to/facebook-icon.png" alt="Facebook" className="h-6" />
              <span>Facebook</span>
            </a>
            <a href="#" className="flex items-center space-x-2">
              <img src="path/to/instagram-icon.png" alt="Instagram" className="h-6" />
              <span>Instagram</span>
            </a>
            <a href="#" className="flex items-center space-x-2">
              <img src="path/to/tiktok-icon.png" alt="TikTok" className="h-6" />
              <span>TikTok</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center mt-8 border-t border-white pt-4">
        <p className="text-sm font-extrabold">&copy; 2023 Car Loan</p>
      </div>
    </footer>
  );
};

export default Footer;
