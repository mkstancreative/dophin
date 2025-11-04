import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HowItWorks.css";

const steps = [
  {
    number: 1,
    title: "Add patients and clinicians",
    text: "Set up your agency’s team and patient list in minutes.",
  },
  {
    number: 2,
    title: "Plan and schedule visits",
    text: "Easily plan, manage, and assign visits with real-time scheduling.",
  },
  {
    number: 3,
    title: "Track and optimize care",
    text: "Monitor performance, revenue, and optimize operations efficiently.",
  },
];

const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="how-container">
      {/* Left Side: Dashboard Image */}
      <motion.div
        className="how-image-container"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/assets/img2.png" // Replace with your image path
          alt="Dashboard Preview"
          className="how-image"
        />
      </motion.div>

      {/* Right Side: Steps */}
      <motion.div
        className="how-content"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="how-badge">How it works</div>
        <h2 className="how-title">
          Streamline Care Delivery in Just <span>Three Steps</span>
        </h2>

        <div className="steps">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={`step ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="step-header">
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <motion.span
                  className="arrow"
                  animate={{ rotate: activeIndex === index ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▶
                </motion.span>
              </div>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.p
                    className="step-text"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {step.text}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="how-buttons">
          <button className="btn btn-outline">See pricing</button>
          <button className="btn btn-primary">Get Free Demo</button>
        </div>
      </motion.div>
    </div>
  );
};

export default HowItWorks;
