import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Jump from "./actions/Jump.jsx";
import Standing from "./actions/Standing.jsx";

export const JUMP_MS = 1700;

const Action = ({ action }) => {
  return (
    <Canvas>
      <OrbitControls />
      <directionalLight intensity={0.5} />
      <ambientLight intensity={3} />
      <Suspense fallback={null}>
        {action === "standing" ? <Standing /> : <Jump />}
      </Suspense>
    </Canvas>
  );
};

export default Action;
