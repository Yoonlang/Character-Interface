import React, { Suspense, useState } from "react";
import { Canvas } from "react-three-fiber";
import Standing from "../components/actions/Standing.jsx";
import Jump from "../components/actions/Jump.jsx";
import { OrbitControls } from "@react-three/drei";

const Home = () => {
  const [action, setAction] = useState("standing");

  const changeAction = () => {
    setAction((old) => (old === "standing" ? "jump" : "standing"));
  };

  return (
    <div className="App">
      <Canvas>
        <OrbitControls />
        <directionalLight intensity={0.5} />
        <ambientLight intensity={3} />
        <Suspense fallback={null}>
          {action === "standing" ? <Standing /> : <Jump />}
        </Suspense>
      </Canvas>
      <button onClick={changeAction}>
        {action === "standing" ? "점프" : "차렷"}
      </button>
    </div>
  );
};

export default Home;
