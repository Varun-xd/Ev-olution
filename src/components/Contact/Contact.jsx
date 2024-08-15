import React, { useState } from "react";
import "./Contact.css";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    setSubmitted(true);
  };

  return (
    <div className="contact-background">
      <div className="contact-container">
        <div className="contact-content">
          <h2>Contact Us</h2>
          {submitted ? (
            <div className="success-message">
              <h3>Thank you for reaching out!</h3>
              <p>We will get back to you shortly.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">
                  <FaUser className="icon" />
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="On"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <FaEnvelope className="icon" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="On"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">
                  <FaCommentDots className="icon" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
