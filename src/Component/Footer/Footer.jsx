import { motion } from "framer-motion";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { IoLocation } from "react-icons/io5";

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="footer-content">
        <div className="footer-brand">
          <h2 className="brand-logo">
            <span className="blue">Dolfin Home </span>
            <span className="light">Health Software.</span>
          </h2>
          <p className="tagline">Simple, Intelligent, and Intuitive</p>

          <div className="socials">
            <NavLink to="">
              <FaFacebook />
            </NavLink>
            <NavLink>
              <FaLinkedinIn />
            </NavLink>
            <NavLink>
              <FaInstagram />
            </NavLink>
            <NavLink>
              <IoLogoTwitter />
            </NavLink>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">How it works</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li>
              <span>
                <FaPhoneAlt />
              </span>{" "}
              <span>+1 (202) 916-0252</span>
            </li>
            <li>
              <span>
                {" "}
                <TiMessages />
              </span>{" "}
              <span>ask@netpro.international</span>
            </li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Join Our Newsletter</h4>
          <p>We’ll send you periodic updates to to help empower your healthcare business and operations.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© 2025 Dolfin. All rights reserved.</div>
    </motion.footer>
  );
}
