import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    

    <header className="bg-gray-800 text-white p-4 sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-center">
        <ul className="flex space-x-8">
          <li>
            <Link
            
              to="/"
              className="hover:text-blue-400 transition duration-300 "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-400 transition duration-300"
              >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-blue-400 transition duration-300"
              >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/brands"
              className="hover:text-blue-400 transition duration-300"
              >
              Brands
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-blue-400 transition duration-300"
              >
              Services
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
