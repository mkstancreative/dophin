import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./DolfinFeatures.css";

const features = {
  "1. Clinical Decision Support": {
    icon: "🩺",
    summary: "Analyze patient data for faster, better care decisions.",
    useCases: [
      "Early risk detection: Predict hospital readmissions, falls, infections, or pressure ulcers.",
      "Predictive analytics: Identify patients likely to deteriorate or miss visits.",
      "Care plan recommendations: Suggest individualized care plans.",
      "Symptom analysis: NLP models flag emerging health concerns from notes.",
    ],
  },
  "2. Operational & Workflow Automation": {
    icon: "⚙️",
    summary:
      "Automate heavy documentation, scheduling, and compliance demands.",
    useCases: [
      "Automated documentation: AI listens to visits and generates compliant clinical notes.",
      "Visit scheduling optimization: Assign caregivers based on proximity, skill set, and availability.",
      "Task prioritization: Identify which patients or tasks need attention first.",
      "Regulatory compliance assistance: AI checks documentation against CMS or payer requirements.",
    ],
  },
  "3. Natural Language Processing (NLP)": {
    icon: "💬",
    summary:
      "Process free-text notes and messages to uncover insights and automate reporting.",
    useCases: [
      "Clinical note summarization: Condenses multi-page nurse notes into concise summaries.",
      "Sentiment analysis: Detects emotional distress or caregiver burnout in communications.",
      "Voice-based charting: Caregivers dictate notes that are automatically structured and coded.",
      "Automated coding: NLP maps clinical notes to ICD-10 and OASIS codes for billing.",
    ],
  },
  "4. Patient Engagement & Remote Monitoring": {
    icon: "📈",
    summary:
      "Enable more personalized, continuous care beyond in-person visits.",
    useCases: [
      "Virtual health assistants: Chatbots remind patients to take medications or perform exercises.",
      "Predictive adherence monitoring: AI identifies patients likely to miss medication or therapy sessions.",
      "Remote monitoring analytics: Interprets sensor data (e.g., BP, heart rate) to detect anomalies.",
      "Personalized education: AI tailors educational content for patients’ literacy levels.",
    ],
  },
  "5. Billing, Reimbursement & Revenue Cycle": {
    icon: "💰",
    summary:
      "Streamline back-office operations to reduce claim denials and accelerate payments.",
    useCases: [
      "Automated coding and charge capture: Reduces missed billing opportunities.",
      "Claim denial prediction: AI flags documentation likely to trigger payer denials.",
      "Revenue forecasting: Predicts agency performance based on visit volume and payer mix.",
      "Eligibility verification: Automates insurance and benefit checks.",
    ],
  },
  "6. Workforce Management & Training": {
    icon: "👩‍⚕️",
    summary:
      "Support staff efficiency, satisfaction, and retention critical issues in home health.",
    useCases: [
      "Caregiver matching: AI matches patients and caregivers based on skills, preferences, and outcomes.",
      "Predictive staffing: Forecasts staffing needs based on seasonal demand and patient acuity.",
      "AI-driven training: Personalized microlearning modules based on performance data.",
      "Turnover risk prediction: Identifies caregivers at risk of burnout or leaving.",
    ],
  },
  "7. Quality & Compliance Monitoring": {
    icon: "🔒",
    summary: "Ensure care quality, safety, and adherence to regulations.",
    useCases: [
      "OASIS QA/QI automation: AI reviews assessments for accuracy and completeness.",
      "Clinical audit support: Automated review of documentation for quality and compliance issues.",
      "Outcome tracking: AI correlates interventions with patient outcomes to measure effectiveness.",
      "Fraud detection: Identifies unusual billing or visit patterns.",
    ],
  },
  "8. Integration & Interoperability": {
    icon: "🔗",
    summary:
      "Assist in managing and interpreting data from multiple systems (EHR, RPM, etc.).",
    useCases: [
      "Data normalization: Cleans and standardizes data from different devices and systems.",
      "Cross-platform insights: Consolidates clinical and operational data for unified dashboards.",
      "Interoperability mapping: AI automatically maps data fields between EHR systems.",
    ],
  },
};

const DolfinAIHome = ({ id }) => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const panelRef = useRef(null);

  // 🔹 Close panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setSelectedFeature(null);
      }
    };

    if (selectedFeature) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedFeature]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    hover: { scale: 1.05, boxShadow: "0 8px 15px rgba(0, 50, 100, 0.2)" },
  };

  const detailVariants = {
    initial: { x: "100vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100vw", opacity: 0 },
  };

  return (
    <div className="dolfin-ai-section" id={id}>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="dolfin-header"
      >
        <h1 className="main-title">
          Dolfin AI: Intelligent Integration for Home Health
        </h1>
        <p className="value-prop">
          Dolfin AI Integration helps providers{" "}
          <b>
            deliver better care, reduce administrative burdens, and improve
            patient outcomes.
          </b>
        </p>
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#0070e0" }}
          whileTap={{ scale: 0.95 }}
          className="cta-button"
        >
          Request a Demo
        </motion.button>
      </motion.header>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="dolfin-grid-container"
      >
        {Object.entries(features).map(([title, data]) => (
          <motion.div
            key={title}
            className="dolfin-card"
            variants={cardVariants}
            whileHover="hover"
            onClick={() => setSelectedFeature(title)}
          >
            <span className="dolfin-icon">{data.icon}</span>
            <h3 className="dolfin-title">{title.split(". ")[1]}</h3>
            <p className="dolfin-summary">{data.summary}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Overlay + Detail Panel */}
      <AnimatePresence>
        {selectedFeature && (
          <>
            {/* Overlay to catch outside clicks */}
            <motion.div
              className="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              ref={panelRef}
              key="dolfin-detail"
              variants={detailVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ type: "spring", stiffness: 500, damping: 40 }}
              className="dolfin-detail-panel"
            >
              <button
                className="close-button"
                onClick={() => setSelectedFeature(null)}
              >
                &times;
              </button>
              <h2>{selectedFeature.split(". ")[1]}</h2>
              <ul>
                {features[selectedFeature].useCases.map((useCase, index) => (
                  <li key={index}>
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {useCase}
                    </motion.span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DolfinAIHome;
