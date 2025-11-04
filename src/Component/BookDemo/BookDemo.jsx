import React, { useState } from "react";
import "./BookDemo.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDemo = ({ id }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    business: "",
    phone: "",
    email: "",
    url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formsubmit.co/ask@netpro.international", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Your demo request has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          business: "",
          phone: "",
          email: "",
          url: "",
        });
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      toast.error("Network error! Please check your connection.");
    }
  };

  return (
    <section className="book-demo-section" id={id}>
      <div className="book-demo-container">
        <div className="form-container">
          <h2>Book a free Demo</h2>
          <p className="subtitle">
            Let’s show you how Dolfin can streamline your home healthcare
            operations. Schedule a personalized demo — no obligations, just
            insights.
          </p>

          <form className="demo-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <input
                type="text"
                name="business"
                placeholder="Enter business name"
                value={formData.business}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="url"
                name="url"
                placeholder="Enter Website"
                value={formData.url}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>

          <p className="disclaimer">
            By providing my phone number to Dolfin, I agree and acknowledge that
            Dolfin may send text messages to my wireless phone number for any
            purpose. Message and data rates may apply. Message frequency will
            vary, and you will be able to opt-out by replying “STOP”.
          </p>
        </div>

        <div className="image-container">
          <img src="/assets/img3.png" alt="Healthcare demo" />
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </section>
  );
};

export default BookDemo;
