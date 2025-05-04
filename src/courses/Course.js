import React from "react";
import CourseCard from "../components/Coursecard.js";
import "./Course.css"; // Import CSS

const coursesData = [
  {
    image: "https://via.placeholder.com/300", // Replace with actual image URL
    title: "Frontend Development Course",
    description: "Master the skills to create dynamic, responsive, and visually appealing websites.",
  },
  {
    image: "https://via.placeholder.com/300",
    title: "UI/UX Design Course",
    description: "Learn to create visually stunning user interfaces and seamless user experiences.",
  },
  {
    image: "https://via.placeholder.com/300",
    title: "Graphic Designing Course",
    description: "Develop professional-level graphic design skills in this beginner-friendly course.",
  },
  {
    image: "https://via.placeholder.com/300",
    title: "Auto CAD Course",
    description: "Develop professional-level graphic design skills in this beginner-friendly course.",
  },
  {
    image: "https://via.placeholder.com/300",
    title: "Full Stack Development Course",
    description: "Develop professional-level graphic design skills in this beginner-friendly course.",
  },
  {
    image: "https://via.placeholder.com/300",
    title: "Blender Modelling and Animation",
    description: "Develop professional-level graphic design skills in this beginner-friendly course.",
  },
  {
    image: "https://via.placeholder.com/300",
    title: "AR/VR Development Course",
    description: "Develop professional-level graphic design skills in this beginner-friendly course.",
  },
  {
    image: "https://via.placeholder.com/300",
    title: "Game Design and Development Course",
    description: "Develop professional-level graphic design skills in this beginner-friendly course.",
  },
];

const Courses = () => {
  return (
    <div className="courses-container">
      <h2>OUR COURSES</h2>
      <div className="courses-grid">
        {coursesData.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
