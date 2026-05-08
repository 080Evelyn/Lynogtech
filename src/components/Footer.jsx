import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { MapPin } from "lucide-react";
import logo from "../assets/logo11.png";

const Footer = () => {
  return (
    <footer className="bg-[#060B16] text-gray-400 pt-16 pb-8 px-6 md:px-12 border-t border-white/5">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <img src={logo} alt="Lynog Tech Logo" className="h-10 mb-6" />

          <p className="text-sm leading-relaxed mb-6 max-w-xs">
            We build scalable digital products and systems that help businesses
            grow, operate efficiently, and deliver real value.
          </p>

          <div className="flex items-start gap-2 text-sm">
            <MapPin size={16} className="mt-1 text-blue-500" />
            <span>
              1 Alhaji Adenekan Street, Opp. Access Bank,
              College Bus Stop, Okota, Lagos
            </span>
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
            Company
          </h4>

          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
            Resources
          </h4>

          <ul className="space-y-3 text-sm">
            <li>
              <Link to="#" className="hover:text-white transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT / SOCIAL */}
        <div>
          <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
            Contact
          </h4>

          <p className="text-sm mb-4">
            Email:{" "}
            <a
              href="mailto:office@lynogtech.com.ng"
              className="text-blue-500 hover:text-blue-400 transition"
            >
              office@lynogtech.com.ng
            </a>
          </p>
          <p>
            tel:{" "}
            <a
              href="tel:+2348030000000"
              className="text-blue-500 hover:text-blue-400 transition"
            >
              +234 903 311 3048
            </a>
          </p>

          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-blue-500 hover:text-white transition"
            >
              <FaFacebook />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-blue-500 hover:text-white transition"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-blue-500 hover:text-white transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-blue-500 hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-12 pt-6 border-t border-white/5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Lynog Tech Nig. Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;