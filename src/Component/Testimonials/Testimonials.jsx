import React from "react";
import { motion } from "framer-motion";
import "./Testimonials.css";
import { GoDotFill } from "react-icons/go";

const testimonials = [
  {
    name: "Grace O",
    role: "Healing Hands Homecare",
    text: "Dolfin revolutionized our operations. Scheduling, tracking, and billing are now seamless we’ve cut admin time by over 50%.",
  },
  {
    name: "Dr. Kelvin A.",
    role: "Clinical Lead, HopeLine Healthcare",
    text: "With Dolfin, our caregivers spend more time with patients and less time on paperwork.!",
  },
  {
    name: "Mary N.",
    role: "Compliance Officer, PrimeCare Home Health",
    text: "Compliance used to be stressful. With Dolfin, records are organized and audits are easy.",
  },
  {
    name: "Samson U.",
    role: "Managing Director, Lifeline HomeCare Services",
    text: "Dolfin’s analytics give us clear insights to improve performance and make smarter decisions.",
  },
  {
    name: "Ngozi I.",
    role: "Administrator, Comfort Care Agency",
    text: "The Dolfin transition was smooth, great onboarding and support. It feels like a true partnership.",
  },
  {
    name: "Tunde O.",
    role: "Finance Manager, Gentle Touch Healthcare",
    text: "Billing errors are gone. Dolfin’s automation speeds up payments and keeps clients happy.",
  },
];

const Testimonials = ({ id }) => {
  const repeated = [...testimonials, ...testimonials];

  return (
    <section className="testimonials-section" id={id}>
      <div className="testimonials-header">
        <div className="badge">
          {" "}
          <GoDotFill /> Testimonials
        </div>
        <h2 className="title">Real Feedback from Satisfied Customers</h2>
        <p className="subtitle">
        Discover what clients have to say about products and our services.
        </p>
      </div>

      <motion.div
        className="testimonial-row"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
      >
        {repeated.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <h4>{t.name}</h4>
            <p className="role">{t.role}</p>
            <p className="text">"{t.text}"</p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
        ))}
      </motion.div>

      {/* Row 2 - Right to Left */}
      <motion.div
        className="testimonial-row reverse"
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
      >
        {repeated.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <h4>{t.name}</h4>
            <p className="role">{t.role}</p>
            <p className="text">"{t.text}"</p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
