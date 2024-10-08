import "./Footer.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  const handleExploreClick = (event) => {
    event.preventDefault();
    navigate("/");
    setTimeout(() => {
      const exploreSection = document.getElementById("explore-section");
      if (exploreSection) {
        exploreSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are a company dedicated to providing the best Electronic Vehicles
            to our customers.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/" onClick={(e) => e.preventDefault()}>
                Home
              </a>
            </li>
            <li>
              <a href="/" onClick={handleExploreClick}>
                Explore
              </a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/Varunxd1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/v.a.r.u.nxd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/varun-kumar-806a60165/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: varunkumar.workmail@gmail.com</p>
          <p>Phone: +9667588264</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Ev-olution. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
