import React from "react";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
const Footer = () => {
  return (
    <div className="bg-[#244D3F] min-h-[30vh] flex items-center">
      <footer className="container mx-auto px-6 py-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-bold text-4xl md:text-5xl text-white mb-4">
            KeenKeeper
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <div className="mt-8">
            <p className="text-white font-semibold mb-4">Social Links</p>
            <div className="flex items-center justify-center gap-6">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={instagram} alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={facebook} alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={twitter} alt="Twitter" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 mb-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          <p className="order-2 md:order-1">
            &copy; 2026 KeenKeeper. All rights reserved.
          </p>
          <ul className="flex flex-wrap justify-center gap-4 md:gap-8 order-1 md:order-2">
            <li className="hover:text-white cursor-pointer transition-colors">
              Privacy Policy
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Terms of Service
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Cookies
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
