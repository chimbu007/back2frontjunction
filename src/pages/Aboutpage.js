import React, { useState } from "react";
import "./Aboutpage.css"; // Import CSS file
import img1 from "../image1.jpg";

const images = [img1];
const AboutUs = () => {
      const [currentIndex] = useState(0);
  return (
    <div className="about-container">
   <img src={images[currentIndex]} alt="About Us" className="about-image" />

      <div className="about-content">
        <h2>ABOUT US</h2>
        <p>
          We specialize in offering courses covering AR/VR, Photoshop, After Effects, UI/UX,
          3D modeling, gaming, and more. Additionally, our experienced and creative freelance
          team delivers stunning outputs meeting modern standards.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
