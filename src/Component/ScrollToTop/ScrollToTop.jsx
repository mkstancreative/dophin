import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Show the button after the first load and when scrolled down
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000); // drops in after 1s
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else if (window.scrollY < 100) {
        setVisible(true); // still show when page just loaded
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="scroll-to-top"
          onClick={scrollToTop}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <FaArrowUp className="arrow-icon" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
