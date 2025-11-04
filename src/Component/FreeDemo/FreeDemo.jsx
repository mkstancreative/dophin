import { motion } from "framer-motion";
import "./FreeDemo.css";

export default function FreeDemo() {
  return (
    <motion.div
      className="free-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="rating-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="stars">⭐⭐⭐⭐⭐</div>
        <div className="rating-text">4.9/5</div>
        <div className="bubbles">
          <motion.div
            className="bubble"
            style={{ background: "#4FC3F7" }}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
          <motion.div
            className="bubble"
            style={{ background: "#81C784" }}
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
          />
          <motion.div
            className="bubble"
            style={{ background: "#BA68C8" }}
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
          />
          <motion.div
            className="bubble"
            style={{ background: "#FFB74D" }}
            animate={{ y: [0, -7, 0] }}
            transition={{ repeat: Infinity, duration: 3.4, ease: "easeInOut" }}
          />
          <div className="bubble bubble-large">50+</div>
        </div>
        <p className="subtext">Over 50 providers are currently transitioning seamlessly to our platform with amazing testimonies</p>
      </motion.div>

      <motion.h1
        className="free-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Ready to Streamline Your Home <br /> Healthcare Operations?
      </motion.h1>

      <motion.div
        className="free-buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <button className="btn btn-outline">Login</button>
        <button className="btn btn-primary">Get Free Demo</button>
      </motion.div>
    </motion.div>
  );
}
