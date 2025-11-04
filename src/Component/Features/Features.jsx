import React from "react";
import { motion } from "framer-motion";
import "./Features.css";
import {
  FaUserMd,
  FaCalendarAlt,
  FaFileInvoiceDollar,
  FaClipboardList,
  FaUsers,
  FaChartBar,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserMd />,
    title: "Patient Management",
    description:
      "Create detailed patient profiles, track vitals, diagnoses, and visit history with ease.",
  },
  {
    icon: <FaCalendarAlt />,
    title: "Smart scheduling",
    description:
      "Assign caregivers, manage overlapping visits, and view schedules in list, calendar, or Kanban mode.",
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Billings and claims automation",
    description:
      "Generate compliant claims, verify insurance, and speed up reimbursements effortlessly.",
  },
  {
    icon: <FaClipboardList />,
    title: "Care planning",
    description:
      "Build personalized care plans and document every stage of treatment digitally.",
  },
  {
    icon: <FaUsers />,
    title: "Staff management",
    description:
      "Add and manage clinicians, track licenses, assign roles, and monitor utilization.",
  },
  {
    icon: <FaChartBar />,
    title: "Analytics dashboard",
    description:
      "Visualize performance, revenue trends, and patient outcomes with beautiful reports.",
  },
];

function Features({ id }) {
  return (
    <section className="features-section" id={id}>
      <motion.div
        className="features-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="features-badge">• Features</span>
        <h2 className="features-title">
          Everything You Need to Run a Smarter <br /> Home Health Agency
        </h2>
        <p className="features-description">
          From patient intake to invoicing, manage the entire continuum of care
          in one secure, unified platform designed to simplify operations,
          enhance coordination, and ensure every step of care delivery runs
          seamlessly.
        </p>
      </motion.div>

      <div className="features-flex">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features;
