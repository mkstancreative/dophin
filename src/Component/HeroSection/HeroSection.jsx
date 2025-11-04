import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./HeroSection.css";
import Navbar from "../Navbar/Navbar";

const HeroSection = ({ home, id}) => {
  return (
    <section className="hero-section">
      <Navbar home={home} id={id} />
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          Simplify & Automate Home Health Operations
          <br />
          <span>with One Powerful Platform</span>
        </h1>
        <p>
          Streamline your operations, manage staff, track visits, and improve
          patient outcomes all in one easy-to-use, AI-powered, HIPAA-compliant
          platform built for modern home health agencies.
        </p>
      </motion.div>

      <motion.div
        className="hero-dashboard"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <img src="/assets/img1.png" alt="Dashboard Preview" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
