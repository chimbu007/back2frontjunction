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
    { question: "Do I need prior 3D experience?", answer: "No, the course is beginner-friendly." },
    { question: "What software is used?", answer: "Blender, which is free and open-source." },
    { question: "Can I pursue game development after this course?", answer: "Yes, the skills learned are applicable in game design and development." },
    { question: "What’s the final outcome of the course?", answer: "A portfolio of 3D models and animations to showcase your skills." },
  ];

  return (
    <div className="container">
      {/* Left Section */}
      <div className="content">
        <nav className="breadcrumb">
          <span>HOME</span> / <span>COURSES</span> / <span className="Indicate">COURSE DETAILS</span>
        </nav>
        <h1>Blender Modelling and Animation Course</h1>
        <p className="description">
        Master 3D modeling, texturing, and animation in Blender, an open-source tool used in games, movies, and AR/VR. Perfect for beginners aiming to enter the 3D industry.
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
          title="Module 1: Blender Basics"
          content={
            <>
            <ul>
            <li>Introduction to Blender : Learn the interface, tools, and shortcuts.</li>
            <li>Basic 3D Modeling :Create and modify basic shapes for 3D design.</li>
            </ul>
            </>
          }
        />
        <CollapsibleFAQ
          title="Module 2: Texturing and Rendering"
          content={
            <>
            <ul>
            <li>Materials and UV Mapping : Apply textures and shaders to models.</li>
              <li>Lighting and Rendering : Create realistic scenes with proper lighting.</li>
            </ul>
            </>
          }
        />
        <CollapsibleFAQ
          title="Module 3: Animation Basics"
          content={
            <>
            <ul>
            <li>Rigging and Keyframing : Learn to rig characters and create animations.</li>
              <li>Animating Scenes : Build short animated sequences with camera movement.
              </li>
            </ul>
            </>
          }
        />
        <CollapsibleFAQ
          title="Module 4: Capstone Projects"
          content={
            <>
            <ul>
            <li>Project 1: Character Design : Model, rig, and texture a 3D character.</li>
            <li>Project 2: Short Animated Film : Develop a 10-second animation with a modeled environment.</li>
            </ul>
            </>
          }
        />
      </div>

  {/* Other Courses (Right Side) */}
  <div className="other-courses">
    <h2>Other Courses</h2>
    <div className="course-item">
      <p><strong>AR/VR Development</strong></p>
    </div>
    <div className="course-item">
      <p><strong>Game Design and Development</strong></p>
    </div>
    <div className="course-item">
      <p><strong>Frontend Development</strong></p>
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