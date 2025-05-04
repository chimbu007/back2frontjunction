import React, { useState } from "react";
import "./Blogpage.css"; // Import the separate CSS file
import img1 from "../image1.jpg";
import img2 from "../image2.jpg";
import img3 from "../image3.jpg";
// Array of images
const images = [img1, img2, img3];

// Corresponding blog boxes for each image
const blogs = [
  [
    { title: "Blog 1 - Topic A", content: "This is a short description of Blog 1." },
    { title: "Blog 2 - Topic B", content: "Summary of Blog 2, explaining key points." },
    { title: "Blog 3 - Topic C", content: "Details about Blog 3 and its insights." }
  ],
  [
    { title: "Blog 1 - Topic X", content: "This is a brief description of Blog 1 under Image 2." },
    { title: "Blog 2 - Topic Y", content: "Summary of Blog 2, related to image 2." },
    { title: "Blog 3 - Topic Z", content: "Insights from Blog 3 related to image 2." }
  ],
  [
    { title: "Blog 1 - Topic M", content: "This is a short description of Blog 1 under Image 3." },
    { title: "Blog 2 - Topic N", content: "Summary of Blog 2 related to the third image." },
    { title: "Blog 3 - Topic O", content: "Detailed view of Blog 3 with related information." }
  ]
];

const Blogpage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle the "Next" button click (Right arrow)
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle the "Previous" button click (Left arrow)
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      {/* Left side content */}
      <div className="content">
        <h2>Welcome to Our Blog</h2>
        <p>Explore our latest blog posts below the image slider. Click through the arrows to change the images and view different blogs related to them.</p>

        {/* Blog boxes - change dynamically with the image */}
        <div className="blog-container">
          {blogs[currentIndex].map((blog, index) => (
            <div key={index} className="blog-box">
              <h4>{blog.title}</h4>
              <p>{blog.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right side slider */}
      <div className="image-slider">
        <img src={images[currentIndex]} alt="Slider" className="slide-image" />

        {/* Left arrow button */}
        <button onClick={handlePrevClick} className="prev-button">
          &#8592; {/* Left arrow HTML entity */}
        </button>

        {/* Right arrow button */}
        <button onClick={handleNextClick} className="next-button">
          &#8594; {/* Right arrow HTML entity */}
        </button>
      </div>
    </div>
  );
};

export default Blogpage;
