import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar bg-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <button
          className="hamburger-menu text-white md:hidden"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <ul
          className={`navbar-list ${
            isMenuOpen ? "block" : "hidden"
          } md:flex space-x-4`}
        >
          <li>
            <Link to="/" className="navbar-link hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="navbar-link hover:text-blue-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/blogposts" className="navbar-link hover:text-blue-400">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-link hover:text-blue-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


