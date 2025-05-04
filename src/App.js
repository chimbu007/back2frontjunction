import React from 'react';
import { Routes, Route } from "react-router-dom"; 
import Homepage from "./home/Homepage.js";
import Blogpage from "./pages/Blogpage.js";
import Aboutpage from "./pages/Aboutpage.js";
import Contactpage from "./pages/Contactpage.js";
import Course from './courses/Course.js';
import Frontend from './courses/Frontend.js';
import Graphic from './courses/Graphic.js';
import UIUX from './courses/UIUX.js';
import AutoCAD from './courses/AutoCAD.js';
import Fullstack from './courses/Fullstack.js';
import Blender from './courses/Blender.js';
import ARVR from './courses/ARVR.js';
import Gamedesign from './courses/Gamedesign.js';
import Navbar from "./components/Navbar.js"; // Import Navbar
import Footer from "./components/Footer.js"; // Import Footer

function App() {
  return (
    <div>
      <Navbar /> {/* Navbar outside Routes */}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/Graphic" element={<Graphic />} />
        <Route path="/uiux" element={<UIUX />} />
        <Route path="/autocad" element={<AutoCAD />} />
        <Route path="/fullstack" element={<Fullstack />} />
        <Route path="/blender modelling" element={<Blender />} />
        <Route path="/arvr" element={<ARVR />} />
        <Route path="/gamedesign" element={<Gamedesign />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;