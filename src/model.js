import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Model(props) {
  const { scene } = useGLTF("/models/robot.gltf"); // Load 3D model
  const modelRef = useRef(); // Reference to the 3D model
  const mousePos = useRef({ x: 0, y: 0 }); // Store mouse position

  // Track mouse position across the window
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalize mouse position to range [-1, 1]
      mousePos.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Clean up event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Smoothly update rotation using lerp
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y +=
        0.05 * (mousePos.current.x * Math.PI - modelRef.current.rotation.y);
      modelRef.current.rotation.x +=
        0.05 * (mousePos.current.y * Math.PI - modelRef.current.rotation.x);
    }
  });

  // Attach modelRef to the 3D model
  return <primitive ref={modelRef} object={scene} {...props} />;
}

export default Model;
