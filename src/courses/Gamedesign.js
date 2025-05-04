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
    { question: "Do I need prior programming knowledge?", answer: "Basic programming knowledge is helpful but not mandatory. This course will cover the fundamentals." },
    { question: "Can I create games for mobile and consoles?", answer: "Yes, the course covers multi-platform game development for PC, mobile, and consoles." },
    { question: "Will I be able to publish games after this course?", answer: "Yes, the course includes guidance on publishing games to major platforms." },
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
        <h1 style={{fontSize:"35px"}}>Game Design and Development Course</h1>
        <p className="description">
        Step into the exciting world of game creation with our Game Design and Development Course. This course equips you with the knowledge and tools to design, develop, and deploy your own games, whether for mobile, PC, or consoles.

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
          title="Fundamentals of Game Design"
          content={
            <>
            <ul>
            <li>Introduction to Game Development: Learn the basic principles of game design, including genres, mechanics, and the player experience.</li>
              <li>Game Engines Overview: Understand how game engines like Unity and Unreal Engine work and their capabilities.</li>
              <li>Storyboarding and Concept Design: Create compelling game narratives and visual concepts to guide the development process.
              </li>
            </ul>
            </>
          }
        />
        <CollapsibleFAQ
          title="Game Development Essentials"
          content={
            <>
            <ul>
            <li>Unity Basics: Learn to navigate the Unity interface, manage assets, and create scenes.</li>
              <li>Scripting with C#: Understand the basics of C# programming to implement game mechanics like movement, interaction, and scoring.</li>
              <li>Physics and Animation: Master the Unity physics engine to create realistic motion and animations for characters and objects.</li>
            </ul>
            </>
          }
        />
        <CollapsibleFAQ
          title="Advanced Game Development"
          content={
            <>
            <ul>
            <li>Multiplayer Game Development: Learn to implement networking features for multiplayer games, including lobbies and player interactions.</li>
              <li>Level Design: Understand the principles of creating engaging and balanced game levels using tools like ProBuilder.
              </li>
              <li>Publishing Your Game: Learn how to optimize, test, and publish your game on platforms like Steam, Google Play, and App Store.
              </li>
            </ul>
            </>
          }
        />
        <CollapsibleFAQ
          title="Individual Projects"
          content={
            <>
            <ul>
            <li>2D Platformer Game: Design and develop a complete 2D platformer game with levels, animations, and scoring systems.</li>
              <li>3D Adventure Game: Create a 3D adventure game with a storyline, challenges, and advanced mechanics.</li>
            </ul>
            </>
          }
        />
      </div>

  {/* Other Courses (Right Side) */}
  <div className="other-courses">
    <h2>Other Courses</h2>
    <div className="course-item">
      <p><strong>Frontend Development</strong></p>
    </div>
    <div className="course-item">
      <p><strong>UIUX Design</strong></p>
    </div>
    <div className="course-item">
      <p><strong>Graphic Design</strong></p>
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