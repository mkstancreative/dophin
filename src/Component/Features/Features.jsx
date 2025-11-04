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
import { MdHealthAndSafety } from "react-icons/md";
import { FaShareFromSquare } from "react-icons/fa6";
import { RiBaseStationLine } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";

const features = [
  {
    icon: <FaUserMd />,
    title: "Patient Management Automation",
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
    title: "Integrated Care Planning",
    description:
      "Build personalized care plans and document every stage of treatment digitally.",
  },
  {
    icon: <FaUsers />,
    title: "Seamless Resource Management",
    description:
      "Add and manage clinicians, track licenses, assign roles, and monitor utilization.",
  },
  {
    icon: <FaChartBar />,
    title: "Analytics dashboard",
    description:
      "Visualize performance, revenue trends, and patient outcomes with beautiful reports.",
  },
  {
    icon: <MdHealthAndSafety />,
    title: "Telehealth Integration:",
    description:
      "Utilization of telemedicine for consultations and follow-up care.",
  },
  {
    icon: <RiBaseStationLine />,
    title: "Dolfin AI Integration",
    description:
      "Dolfin AI Integration enables providers to deliver better care, reduce administrative burdens, and enhance patient outcomes.",
  },
  {
    icon: <FaShareFromSquare />,
    title: "Quality Management System (QMS)",
    description:
      "Seamless Document Management, Continuous Improvement (CA/PA), Incident Management, Audit Management, and Training.",
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
        <span className="features-badge">
          <GoDotFill /> Features
        </span>
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
