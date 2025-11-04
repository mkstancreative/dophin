import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="hero-navbar">
      <Link to="/" className="nav-logo">
        <img src="/assets/logo.png" alt="Dolfin Logo" />
      </Link>

      <ul className="nav-links">
        <li>
          <Link
            to="features"
            smooth={true}
            duration={600}
            offset={-70}
            activeClass="active"
            spy={true}
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
          >
            Dolfin AI
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
          >
            Contact Us
          </Link>
        </li>
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
