import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-8 mt-40">
      <div className="container mx-auto flex flex-wrap justify-center items-start gap-8 px-4">
        {/* Logo Section */}
        <div className="flex-1 mb-6 sm:mb-0">
          <h2 className="text-2xl font-bold">Logo</h2>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Partner Pembayaran</h3>
            <div className="flex mt-2 space-x-4">
              <div className="bg-white p-1 flex justify-center rounded-xl mr-4">
                <img
                  src="../src/assets/BCA-logo.jpg"
                  alt="BCA"
                  className="h-10"
                />
              </div>
              <div className="bg-white p-1 flex justify-center rounded-xl mr-4">
                <img
                  src="../src/assets/GoPay-Logo-2019.png"
                  alt="GoPay"
                  className="h-10"
                />
              </div>
              <div className="bg-white p-1 flex justify-center items-center rounded-xl">
                <img
                  src="../src/assets/Logo_dana_blue.svg.png"
                  alt="Dana"
                  className="h-6"
                />
              </div>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="flex-1 mb-6 sm:mb-0">
          <h3 className="text-lg font-semibold">Tentang Kami</h3>
          <p className="text-sm mt-4">
            Lorem ipsum dolor sit <br /> amet, consectetur <br />
            adipiscing elit. Nullam <br />
            cursus, augue mollis <br />
            elementum pretium.
          </p>
        </div>

        {/* Social Media Section */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold">Follow Kami Di</h3>
          <div className="flex flex-col mt-4 space-y-2">
            <a href="#" className="flex items-center space-x-2">
              <Icon
                icon="ic:baseline-facebook"
                className="w-6 h-6 text-white"
              />
              <span>Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/starbhak.official/?hl=en"
              className="flex items-center space-x-2"
            >
              <Icon icon="mdi:instagram" className="w-6 h-6 text-white" />
              <span>Instagram</span>
            </a>
            <a href="#" className="flex items-center space-x-2">
              <Icon icon="ic:baseline-tiktok" className="w-6 h-6 text-white" />
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
