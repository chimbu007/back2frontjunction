import React, { useState, useEffect  }from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
const Navbar = () => {
    
    const [openDropdown, setOpenDropdown] = useState(null);
   
       // Toggle Dropdown
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

      return (
        <div className="landing-container">
          {/* Navbar */}
          <nav className="navbar">
            <div className="logo">
            <img src="Letterpad.png" alt="logo" />
            </div>
    
            <ul className="nav-links">
            <li><Link to="/">Home</Link></li>  {/* Home Link */}
            <li><Link to="/about">About</Link></li>  {/* About Link */}
              {/* Courses Dropdown */}
              <li className="dropdown">
              <button onClick={() => toggleDropdown("courses")}>
              Courses ⌄
                </button>
                {openDropdown === "courses" && (
                  <ul className="dropdown-content">
                    <li><Link to="/frontend">Frontend Development</Link></li>
                    <li><Link to="/uiux">UI/UX Design</Link></li>
                    <li><Link to="/graphic">Graphic Design</Link></li>
                    <li><Link to="/autocad">AutoCAD</Link></li>
                    <li><Link to="/fullstack">Full Stack Development</Link></li>
                    <li><Link to="/blender modelling">Blender Modelling and Animation</Link></li>
                    <li><Link to="/arvr">AR/VR Development</Link></li>
                    <li><Link to="/gamedesign">Game Design and Development</Link></li>
                  </ul>
                )}
              </li>
              <li><Link to="/blog">Blog</Link></li>  {/* Blog Link */}             
              <li><Link to="/contact">Contact</Link></li>  {/* contact Link */}
    
              {/* Services Dropdown */}
              <li className="dropdown">
              <button onClick={() => toggleDropdown("services")}>
              Services ⌄
                </button>
                {openDropdown === "services" && (
                  <ul className="dropdown-content">
                    <li><Link to="/contact">3D Animation</Link></li>
                    <li><Link to="/contact">3D Production</Link></li>
                    <li><Link to="/contact">AR/VR Development</Link></li>
                    <li><Link to="/contact">CAD Design</Link></li>
                    <li><Link to="/contact">Architecture Visualization</Link></li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>   
          </div> 
        );
};

export default Navbar;