import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo11.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-semibold"
      : "text-gray-300 hover:text-white transition";

  return (
    <header className="sticky top-0 z-50 bg-[#0B0F19]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Lynog Tech" className="h-10 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <NavLink to="/" className={navLinkStyle}>
              Home
            </NavLink>

            <NavLink to="/services" className={navLinkStyle}>
              Services
            </NavLink>

            <NavLink to="/about" className={navLinkStyle}>
              About Us
            </NavLink>

            <NavLink to="/contact" className={navLinkStyle}>
              Contact
            </NavLink>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-300 hover:text-white transition"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <div className="px-6 pb-6 pt-2 bg-[#0B0F19] border-t border-white/5 flex flex-col gap-4 text-sm">

          <NavLink to="/" onClick={() => setOpen(false)} className={navLinkStyle}>
            Home
          </NavLink>

          <NavLink to="/services" onClick={() => setOpen(false)} className={navLinkStyle}>
            Services
          </NavLink>

          <NavLink to="/about" onClick={() => setOpen(false)} className={navLinkStyle}>
            About Us
          </NavLink>

          <NavLink to="/contact" onClick={() => setOpen(false)} className={navLinkStyle}>
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
}