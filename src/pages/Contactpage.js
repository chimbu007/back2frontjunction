import React, { useState } from "react";
import axios from "axios";
import "./Contactpage.css";
import {
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaBehance,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send data to backend
      const res = await axios.post("http://localhost:3001/send-email", formData);
      alert(res.data.success || "Form submitted successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div className="contact-container">
       <div className="social-section">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a href="#" className="icon"><FaEnvelope /></a>
          <a href="#" className="icon"><FaTwitter /></a>
          <a href="#" className="icon"><FaFacebookF /></a>
          <a href="#" className="icon"><FaInstagram /></a>
          <a href="#" className="icon"><FaLinkedinIn /></a>
          <a href="#" className="icon"><FaYoutube /></a>
          <a href="#" className="icon"><FaBehance /></a>
          <a href="#" className="icon"><FaTelegramPlane /></a>
          <a href="#" className="icon"><FaWhatsapp /></a>
        </div>
      </div>
      <div className="contact-form">
        <h2>Contact Our Team</h2>
        <form onSubmit={handleSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
          />

          <label>Your email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john.doe@email.com"
          />

          <label>Your phone number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="123-456-7890"
          />

          <label>Your message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
