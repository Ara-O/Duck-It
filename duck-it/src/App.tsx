import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useLoader, Canvas } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

function App() {
  const duck = useLoader(GLTFLoader, "../src/models/Duck/Duck.gltf");

  return (
    <>
      <Canvas shadows>
        <directionalLight position={[3.3, 1.0, 4.4]} castShadow />
        <primitive
          object={duck.scene}
          position={[0, 1, 0]}
          children-0-castShadow
        />
        <OrbitControls></OrbitControls>
      </Canvas>
      <h3>Rubber ducking for those with no friends :*)</h3>
    </>
  );
}

export default App;
