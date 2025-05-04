import React, { useState } from "react";
import "./CourseDetails.css";

const CollapsibleFAQ = ({ title, content, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible-container">
      <div className="collapsible-header" onClick={toggleCollapse}>
        <span className="title">{title}</span>
        <span className="toggle-button">{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && (
        <div className="collapsible-content">
          {image && <img src={image} alt="Sample" />}
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const CourseDetails = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "What are the prerequisites for this course?", answer: "No prerequisites are required. This course is beginner-friendly." },
    { question: "Do I need AR/VR hardware to join?", answer: "While not mandatory, having access to AR/VR hardware will enhance your learning experience." },
    { question: "Can I build AR/VR apps for mobile devices?", answer: "Yes, the course covers AR/VR development for both mobile and desktop platforms." },
    // { question: "What’s the final outcome of the course?", answer: "A portfolio of 3D models and animations to showcase your skills." },
    // { question: "Do I Receive Anything After I Complete a Course?", answer: "Yes, you will receive a certificate upon successful completion." },
  ];

  return (
    <div className="container">
      {/* Left Section */}
      <div className="content">
        <nav className="breadcrumb">
          <span>HOME</span> / <span>COURSES</span> / <span className="Indicate">COURSE DETAILS</span>
        </nav>
        <h1>AR/VR Development Course</h1>
        <p className="description">
        Immerse yourself in the future of technology with our AR/VR Development Course. Learn to create interactive augmented and virtual reality experiences for applications in gaming, education, and beyond.
        </p>
        {/* <p className="description">
          Master the art of building interactive and visually appealing websites and web applications. Enroll now and embark on your path to becoming a skilled front-end web developer.
        </p> */}
      </div>

      {/* Right Sidebar */}
      <div className="sidecard">
        <div className="course-info">
          <p><span>📊</span> <strong>Student Level:</strong> Beginner</p>
          <hr />
          <p><span>📅</span> <strong>Duration:</strong> 3 Months</p>
          <hr />
          <p><span>🌍</span> <strong>Mode:</strong> Online, Live Classes</p>
          <hr />
          <p><span>🎓</span> <strong>Certificate:</strong> YES</p>
        </div>
      </div>

      {/* Course Syllabus & Other Courses Wrapper */}
      <div className="syllabus-container">
        {/* Course Syllabus */}
        <div className="Coursedetails">
        <h1>Course Syllabus</h1>

        <CollapsibleFAQ
          title="Introduction to AR/VR"
          content={
            <>
            <ul>
            <li>Understanding AR and VR: Learn the difference between augmented and virtual reality and their applications.</li>
              <li>Overview of Tools and Platforms: Explore AR/VR development platforms like Unity, Unreal Engine, and ARKit/ARCore.</li>
              <li>Hardware Integration: Understand how AR/VR hardware like Oculus Rift, HTC Vive, and Microsoft HoloLens works.
              </li>
            </ul>
            </>
          }
        />
        <CollapsibleFAQ
          title="AR Development"
          content={
            <>
            <ul>
            <li>AR Basics with ARKit/ARCore: Learn to create augmented reality experiences for mobile devices.</li>
              <li>Image and Object Tracking: Master techniques to track objects and images in real-world environments.</li>
              <li>Interactivity in AR: Add touch and gesture-based interactivity to AR applications.
              </li>
            </ul>
            </>
          }
        />
        <CollapsibleFAQ
          title="VR Development"
          content={
            <>
            <ul>
            <li>VR Environment Creation: Learn to design and develop immersive virtual environments.</li>
              <li>VR Interaction Design: Understand best practices for designing intuitive interactions in VR.
              </li>
              <li>Motion Tracking and Controllers: Integrate motion controllers and sensors for dynamic user interactions.</li>
            </ul>
            </>
          }
        />
        <CollapsibleFAQ
          title="Individual Project"
          content={
            <>
            <ul>
            <li>AR Product Visualization: Develop an AR application for visualizing products in real-world environments.</li>
              <li>VR Simulation: Create a VR simulation for training or entertainment purposes.
              </li>
            </ul>
            </>
          }
        />
      </div>

  {/* Other Courses (Right Side) */}
  <div className="other-courses">
    <h2>Other Courses</h2>
    <div className="course-item">
      <p><strong>Game Design and Development</strong></p>
    </div>
    <div className="course-item">
      <p><strong>Frontend Development</strong></p>
    </div>
    <div className="course-item">
      <p><strong>UIUX Design</strong></p>
    </div>
  </div>
</div>


      {/* FAQ Section */}
      <div className="faq-container">
        <h1>Popular Questions to Ask Before Choosing a Course</h1>
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'active' : ''}`} onClick={() => toggleAnswer(index)}>
            <div className="faq-question">{faq.question}</div>
            <span className="icon">{openIndex === index ? '−' : '+'}</span>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;