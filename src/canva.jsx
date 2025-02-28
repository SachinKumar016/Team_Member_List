import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

function CanvasComponent() {
  return (
   <Canvas style={{ width: "100%", height: "70vh", background:"blue" }} camera={{ position: [3, 3, 3] }}>
    <OrbitControls />
    <ambientLight />
    <mesh position={[3,2,3]}>
      <sphereGeometry args={[ true]}/>
      <meshBasicMaterial side={THREE.DoubleSide} />
    </mesh>
   </Canvas>
  );
}

export default CanvasComponent;
