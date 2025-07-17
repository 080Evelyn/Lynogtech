import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#994F8F] to-[#46C8FC] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="">
            <p className="text-4xl font-bold text-blue-600">LYNOG TECH NIG</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-lg font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "!text-pink-300 font-semibold"
                  : "hover:underline !text-white"
              }>
              Home
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "!text-pink-300 font-semibold"
                  : "hover:underline !text-white"
              }>
              Services
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "!text-pink-300 font-semibold"
                  : "hover:underline !text-white"
              }>
              Contact Us
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? " !text-pink-300 font-semibold"
                  : "hover:underline !text-white"
              }>
              About Us
            </NavLink>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link to={"/contact"}>
              <button className="!bg-[#FF16E0] hover:!bg-pink-500 cursor-pointer text-white font-semibold px-6 py-2 rounded-full shadow-lg transition duration-200">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              className="!bg-[#FF16E0] cursor-pointer"
              onClick={() => setOpen(!open)}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-20 left-0 w-full bg-gradient-to-r from-[#46C8FC] to-[#994F8F] px-6 py-4 space-y-2 text-sm font-medium shadow-lg transition-all duration-300 transform ${
          open
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        } md:hidden`}>
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
        <button className="w-full !bg-[#FF16E0] mt-2 hover:!bg-pink-500 cursor-pointer text-white font-semibold px-4 py-2 rounded-full shadow">
          Contact Us
        </button>
      </div>
    </header>
  );
}
