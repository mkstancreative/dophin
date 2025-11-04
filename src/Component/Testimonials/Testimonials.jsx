import React from "react";
import { motion } from "framer-motion";
import "./Testimonials.css";

const testimonials = [
  { name: "Brian Ramirez", role: "Financial Analyst", text: "This banking app has completely transformed how I manage my finances. It's user-friendly and efficient!" },
  { name: "David Anderson", role: "Marketing Manager", text: "I love the instant transfer feature! It makes sending money to friends and family a breeze." },
  { name: "James Carter", role: "Graphic Designer", text: "The budgeting tools are fantastic. They've really helped me keep track of my spending!" },
  { name: "Jane Doe", role: "Data Scientist", text: "I've never felt more secure about my online banking. The security features are top-notch!" },
  { name: "John Mitchell", role: "Product Manager", text: "I appreciate the transparency in fees. No hidden charges mean I can manage my finances confidently." },
  { name: "Daniel Walker", role: "Web Developer", text: "Automated savings has changed my life! I'm saving more than I ever thought possible." },
  { name: "William Johnson", role: "Sales Executive", text: "The virtual debit card feature gives me peace of mind when shopping online. Highly recommend!" },
  { name: "Joshua White", role: "Business Consultant", text: "I can't believe how quick money transfers are now. Saves me so much time." },
];

const Testimonials = () => {
  // Duplicate testimonials for smooth infinite scroll
  const repeated = [...testimonials, ...testimonials];

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <div className="badge">Testimonials</div>
        <h2 className="title">Real Feedback from Satisfied Customers</h2>
        <p className="subtitle">
          Discover what real clients have to say about how our services have helped them achieve their goals and manage their finances effortlessly.
        </p>
      </div>

      {/* Row 1 - Left to Right */}
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
