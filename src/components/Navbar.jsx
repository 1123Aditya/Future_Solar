import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX, FiPhone, FiMessageCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

// Navigation item with active styling
const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-4 py-2 rounded-md font-medium transition ${
        isActive
          ? "text-green-700 bg-green-100"
          : "text-gray-700 hover:text-green-700 hover:bg-green-50"
      }`
    }
  >
    {children}
  </NavLink>
);

const whatsappNumber = "9356264126";
const whatsappLink = `https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(
  "Hi, I'm interested in a solar quote!"
)}`;
const phoneLink = `tel:${whatsappNumber}`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white border-b border-gray-200 absolute top-0 inset-x-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between pl-3 h-20 px-0">
          {/* Logo + Tagline */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/assets/Images/logo3.jpg"
              alt="Futuresun Solar"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-4">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About Us</NavItem>
            <NavItem to="/services">Services</NavItem>
            <NavItem to="/projects">Projects</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-lg px-5 py-2 font-semibold shadow transition"
            >
              <FiMessageCircle className="w-5 h-5" />
              GET A QUOTE
            </a>
            <a
              href={phoneLink}
              className="flex items-center gap-2 border border-gray-300 hover:border-green-500 text-gray-700 hover:text-green-600 rounded-lg px-5 py-2 font-semibold bg-white shadow-sm transition"
            >
              <FiPhone className="w-5 h-5" />
              Call Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-green-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg absolute w-full z-40">
            <div className="px-4 py-4 flex flex-col gap-2">
              <NavItem to="/" onClick={() => setMenuOpen(false)}>Home</NavItem>
              <NavItem to="/about" onClick={() => setMenuOpen(false)}>About Us</NavItem>
              <NavItem to="/services" onClick={() => setMenuOpen(false)}>Services</NavItem>
              <NavItem to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavItem>
              <NavItem to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavItem>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-lg px-4 py-2 font-semibold shadow transition"
              >
                <FiMessageCircle className="w-5 h-5" />
                GET A QUOTE
              </a>
              <a
                href={phoneLink}
                className="flex items-center gap-2 border border-gray-300 hover:border-green-500 text-gray-700 hover:text-green-600 rounded-lg px-4 py-2 font-semibold bg-white shadow-sm transition"
              >
                <FiPhone className="w-5 h-5" />
                Call Us
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/9356264126"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition animate-blink"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-blink {
          animation: blink 1.5s infinite;
        }
      `}</style>
    </>
  );
}
