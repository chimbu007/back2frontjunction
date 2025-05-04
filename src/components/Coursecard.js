import React from "react";

const CourseCard = ({ image, title, description }) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-image" />
      <div className="course-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CourseCard;
