import React, { useState } from "react";
import "./BookDemo.css";

const BookDemo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    business: "",
    phone: "",
    email: "",
    region: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll reach out soon for your free demo.");
  };

  return (
    <section className="book-demo-section">
      <div className="book-demo-container">
        {/* Left Side - Form */}
        <div className="form-container">
          <h2>Book a free demo</h2>
          <p className="subtitle">
            Let’s show you how Dolfin can streamline your home healthcare operations. 
            Schedule a personalized demo — no obligations, just insights.
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
              <select
                name="region"
                value={formData.region}
                onChange={handleChange}
                required
              >
                <option value="">Choose region</option>
                <option value="North America">North America</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>

          <p className="disclaimer">
            By providing my phone number to Dolfin, I agree and acknowledge that Dolfin may send 
            text messages to my wireless phone number for any purpose. Message and data rates 
            may apply. Message frequency will vary, and you will be able to opt-out by replying “STOP”.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="image-container">
          <img src="/assets/img3.png" alt="Healthcare demo" />
        </div>
      </div>
    </section>
  );
};

export default BookDemo;
