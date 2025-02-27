import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React from "react";

function CanvasComponent() {
  return (
   <Canvas className="mt-50 ml-40" style={{ width: "400px", height: "400px" }} camera={{ position: [3, 3, 3] }}>
    <OrbitControls />
    <ambientLight />
    <mesh>
      <boxGeometry args={[1,1,1,30,30, false]}/>
      <meshBasicMaterial />
    </mesh>
   </Canvas>
  );
}

export default CanvasComponent;
