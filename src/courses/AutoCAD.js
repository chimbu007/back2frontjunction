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
    { question: "Is this course for beginners?", answer: "Yes, no prior experience is required." },
    { question: "What software is needed for the course?", answer: "AutoCAD; guidance for installation is provided." },
    { question: "Can I use this for architecture or mechanical design?", answer: "Absolutely! The course is versatile for multiple industries." },
    { question: "Will I receive certification?", answer: "Yes, upon completing the course and projects." },
    // { question: "Do I Receive Anything After I Complete a Course?", answer: "Yes, you will receive a certificate upon successful completion." },
  ];

  return (
    <div className="container">
      {/* Left Section */}
      <div className="content">
        <nav className="breadcrumb">
          <span>HOME</span> / <span>COURSES</span> / <span className="Indicate">COURSE DETAILS</span>
        </nav>
        <h1>AutoCAD Course</h1>
        <p className="description">
        Learn 2D and 3D drafting with AutoCAD, the industry standard for engineering, architecture, and design. This course is tailored for beginners to develop professional-level skills.

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
          title="Module 1: Introduction to AutoCAD"
          content={
            <>
            <ul>
            <li>Getting Started with CAD : Overview of computer-aided design in various industries.</li>
            <li>Interface and Navigation : Learn tools, menus, and command shortcuts.</li>
            </ul>
            </>
          }
        />
        <CollapsibleFAQ
          title="Module 2: 2D Drafting"
          content={
            <>
            <ul>
            <li>Basic Drafting Commands : Lines, arcs, polylines, and annotations.</li>
            <li>Layers and Templates : Organizing designs for better clarity and efficiency.</li>            </ul>
            </>
          }
        />
        <CollapsibleFAQ
          title="Module 3: 3D Modeling"
          content={
            <>
            <ul>
            <li>Solid and Surface Modeling : Extrusions, lofts, and sweeps.</li>
            <li>Rendering and Visualization : Apply materials and create realistic renders.</li>
            </ul>
            </>
          }
        />
        <CollapsibleFAQ
          title="Module 4: Practical Projects"
          content={
            <>
            <ul>
              <li>Project 1: Floor Plan Drafting : Create a detailed 2D layout of a building.</li>
              <li>Project 2: Mechanical 3D Model : Design and render a mechanical component.</li>
            </ul>
            </>
          }
        />
      </div>

  {/* Other Courses (Right Side) */}
  <div className="other-courses">
    <h2>Other Courses</h2>
    <div className="course-item">
      <p><strong>Full Stack Development Course</strong></p>
    </div>
    <div className="course-item">
      <p><strong>Blender Modelling and Animation</strong></p>
    </div>
    <div className="course-item">
      <p><strong>AR/VR Development</strong></p>
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