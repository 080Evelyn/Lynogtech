import { Link } from "react-router-dom";
import logo from "../assets/lynoLogo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#994F8F] to-[#46C8FC] text-white py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        {/* Logo and Company Name */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={logo} alt="Lynogg Tech Logo" className="h-12 mb-2" />
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
          {/* Useful Links */}
          <div>
            <h4 className="font-bold text-lg mb-3">Useful Links</h4>
            <ul>
              <Link
                to="/"
                className="block hover:!text-pink-400 py-2 border-b border-white/20">
                Home
              </Link>
              <Link
                to="/services"
                className="block hover:!text-pink-400 py-2 border-b border-white/20">
                Services
              </Link>
              <Link
                to="/contact"
                className="block hover:!text-pink-400 py-2 border-b border-white/20">
                Contact Us
              </Link>
              <Link
                to="/about"
                className="block hover:!text-pink-400 py-2 border-b border-white/20">
                About Us
              </Link>
            </ul>
          </div>

          {/* Legal/Policy Links */}
          <div>
            <h4 className="font-bold text-lg mb-3"></h4>{" "}
            <ul>
              <Link
                to="#"
                className="block hover:!text-pink-400 py-2 border-b border-white/20">
                FAQ
              </Link>
              <Link
                to="#"
                className="block hover:!text-pink-400 py-2 border-b border-white/20">
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="block hover:!text-pink-400 py-2 border-b border-white/20">
                Terms & Conditions
              </Link>
            </ul>
          </div>

          {/* Contact Information/Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-lg mb-3">Follow us</h4>
            <p className="mb-4 text-center md:text-left">
              Email:
              <a href="mailto:support@Lynogtech.ng" className="hover:underline">
                office@lynogtech.com.ng
              </a>
            </p>
            <div className="flex space-x-4">
              {/* Replace with actual social media icons (e.g., from Font Awesome or SVG) */}
              <a href="#" className="text-white hover:text-gray-300">
                <FaFacebook className="w-6 h-6 text-blue-900 hover:text-[#FF16E0]" />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaTwitter className="w-6 h-6 text-blue-900 hover:text-[#FF16E0]" />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaInstagram className="w-6 h-6 text-blue-900 hover:text-[#FF16E0]" />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaLinkedinIn className="w-6 h-6 text-blue-900 hover:text-[#FF16E0]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white border-opacity-30 mt-8 pt-6 text-center text-sm">
        <p>
          Copyright &copy;{new Date().getFullYear()} All rights reserved by
          LYNOG TECH NIG
        </p>
      </div>
    </footer>
  );
};

export default Footer;
