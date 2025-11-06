import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="hero-navbar">
      <div className="nav-header">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src="/assets/logo.png" alt="Dolfin Logo" />
        </Link>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link
            to="features"
            smooth={true}
            duration={600}
            offset={-70}
            activeClass="active"
            spy={true}
            onClick={closeMenu}
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            to="dolpfin"
            smooth={true}
            duration={600}
            offset={-70}
            activeClass="active"
            spy={true}
            onClick={closeMenu}
          >
            Dolfin AI
          </Link>
        </li>
        <li>
          <Link
            to="howitworks"
            smooth={true}
            duration={600}
            offset={-70}
            activeClass="active"
            spy={true}
            onClick={closeMenu}
          >
            How It Works
          </Link>
        </li>
        <li>
          <Link
            to="testimonials"
            smooth={true}
            duration={600}
            offset={-70}
            activeClass="active"
            spy={true}
            onClick={closeMenu}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-70}
            activeClass="active"
            spy={true}
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </li>

        <div className="mobile-actions">
          <Link className="login-btn" onClick={closeMenu}>
            Login
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-70}
            className="demo-btn"
            onClick={closeMenu}
          >
            Get Demo
          </Link>
        </div>
      </ul>

      <div className="nav-actions">
        <Link className="login-btn">Login</Link>
        <Link
          to="contact"
          smooth={true}
          duration={600}
          offset={-70}
          className="demo-btn"
        >
          Get Demo
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
