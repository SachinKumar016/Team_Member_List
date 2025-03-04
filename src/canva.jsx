import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

function CanvasComponent() {
  return (
   <Canvas style={{ width: "100vw", height: "90vh", background:"blue" }} camera={{ position: [0, 0, 0] }} scene={1000}>
    <OrbitControls />
    <ambientLight />
    <mesh position={new THREE.Vector3(0, -50, -20)}>
      <sphereGeometry args={[49, 50,50,true]}/>
      <meshBasicMaterial side={THREE.DoubleSide} />
    </mesh>
   </Canvas>
  );
}

export default CanvasComponent;
