import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Standing from "./Standing.jsx";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div className="App">
      <Canvas>
        <OrbitControls />
        <directionalLight intensity={0.5} />
        <ambientLight intensity={3} />
        <Suspense fallback={null}>
          <Standing />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
