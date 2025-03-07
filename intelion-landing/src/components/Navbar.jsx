import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/intelion-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-6 px-8 md:px-16 lg:px-24 flex justify-between items-center relative z-50">
      <img src={logo} alt="Intelion Logo" className="h-10" />
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon
          icon={menuOpen ? faTimes : faBars}
          className="text-2xl"
        />
      </button>
      <ul
        className={`md:flex space-x-6 absolute md:static top-16 left-0 w-full bg-white shadow-md md:shadow-none md:w-auto flex-col md:flex-row transition-all duration-300 ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        <li>
          <a href="#home" className="hover:text-purple-600 block px-4 py-2">
            Home
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-purple-600 block px-4 py-2">
            Services
          </a>
        </li>
        <li>
          <a
            href="#industries"
            className="hover:text-purple-600 block px-4 py-2"
          >
            Industries
          </a>
        </li>
        <li>
          <a
            href="#market-research"
            className="hover:text-purple-600 block px-4 py-2"
          >
            Market Research
          </a>
        </li>
        <li>
          <a href="#company" className="hover:text-purple-600 block px-4 py-2">
            Company
          </a>
        </li>
        <li>
          <a href="#brands" className="hover:text-purple-600 block px-4 py-2">
            Brands
          </a>
        </li>
      </ul>
      <div className="hidden md:flex space-x-4 items-center">
        <a
          href="#contact"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
