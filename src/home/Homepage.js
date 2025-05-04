import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css"; // Importing the CSS file
import { FaWhatsapp, FaEnvelope} from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Canvas, useFrame } from "@react-three/fiber";
import { PresentationControls, Stage, useGLTF } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("./models/robot.gltf");
  const modelRef = useRef();
  const mousePos = useRef({ x: 0, y: 0 });

  // Track mouse movement globally
  useEffect(() => {
    const handleMouseMove = (event) => {
      mousePos.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Smoothly rotate the model based on mouse movement
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y +=
        0.05 * (mousePos.current.x * Math.PI - modelRef.current.rotation.y);
      modelRef.current.rotation.x +=
        0.05 * (mousePos.current.y * Math.PI - modelRef.current.rotation.x);
    }
  });

  return <primitive ref={modelRef} object={scene} {...props} />;
}

const LandingPage = () => {
  const scrollRef = useRef(null);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 200; // Adjust scroll speed/distance
      }
    }, 2000); // Scroll every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>
          FROM VISION TO REALITY, <br /> BEYOND IMAGINATION.
        </h1>
        <p>
          We are a talented and passionate team turning your wildest dreams into
          reality using AR/VR technologies.
        </p>
        <div className="cont">
          <Link to="/contact" className="btn">
            <div className="btnInner">Get Started</div>
          </Link>
        </div>
      </div>

      {/* 3D Model Canvas */}
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ fov: 25 }}
        style={{
          position: "absolute",
          top: "30%",
          left: "20%",
          width: "300px",
          height: "300px",
          transform: "translate(-50%, -50%)",
          zIndex: 1, // Place behind content
        }}
      >
        <PresentationControls speed={1.5} global zoom={0.3} polar={[-0.1, Math.PI / 4]}>
          <Stage environment={null}>
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>

      {/* Call-to-Action Section */}
      <div className="cta-container">
        <h2>Take the Next Step Toward Your Personal and Professional Goals</h2>
        <p>
          Elevate your career and life with Pep Software. Our training programs provide the tools and knowledge you need to achieve your goals.
          <br />
          Join us and unlock your full potential.
        </p>
        <button className="cta-button">
        <Link to="/courses" style={{ textDecoration: "none", color: "inherit" }}>Explore Courses</Link>
      </button>
      </div>
      {/* Services Section */}
      <div className="services-section">
        <h2>Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src="https://via.placeholder.com/300" alt="Portfolio" />
            <h3>Portfolio</h3>
            <p>Explore our innovative projects and creative designs reflecting passion for technology and impactful solutions.</p>
          </div>
          <div className="service-card">
            <img src="https://via.placeholder.com/300" alt="Courses" />
            <h3>Courses</h3>
            <p>Embark on a journey to master multiple disciplines seamlessly, with expert-guided courses for well-rounded expertise.</p>
          </div>
          <div className="service-card">
            <img src="https://via.placeholder.com/300" alt="Team" />
            <h3>Team</h3>
            <p>Meet the talented team delivering exceptional results and creating memorable experiences for every project.</p>
          </div>
        </div>
      </div>
      <div className="speciality-section">
        <h2>Our Speciality</h2>
      <div className="carousel-container">
      <button
        className="arrow left"
        onClick={() => (scrollRef.current.scrollLeft -= 300)}
      >
        <FaChevronLeft />
      </button>

      <div className="carousel" ref={scrollRef}>
        <div className="carousel-item">
          <img src="seamless-integrations.png" alt="Seamless Integrations" />
        </div>
        <div className="carousel-item">
          <img src="expert-support.png" alt="Expert Support" />
        </div>
        <div className="carousel-item">
          <img src="advanced-analytics.png" alt="Advanced Analytics" />
        </div>
        <div className="carousel-item">
          <img src="custom-solutions.png" alt="Custom Solutions" />
        </div>
        <div className="carousel-item">
          <img src="custom-solutions.png" alt="Creative Design" />
        </div>
        <div className="carousel-item">
          <img src="custom-solutions.png" alt="Innovative Solution" />
        </div>
      </div>
      </div>

      <button
        className="arrow right"
        onClick={() => (scrollRef.current.scrollLeft += 300)}
      >
        <FaChevronRight />
      </button>
    </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2>CONTACT US</h2>
        <div className="contact-details">
          <div className="contact-item">
            <FaWhatsapp className="contact-icon" />
            <span>+91 75581 97152</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>satechstudios@gmail.com</span>
          </div>
        </div>
        <button className="contact-button">
  <Link to="/Contact" style={{ textDecoration: "none", color: "inherit" }}>Contact Us</Link>
</button>      </div>
    </div>
  );
};

export default LandingPage;
