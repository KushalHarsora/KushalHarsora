'use client';

import React from "react";
import { Canvas } from "@react-three/fiber";
import Models from "./Models"
import { Environment } from "@react-three/drei";

const Background: React.FC = () => {
  return(
    <Canvas style={{backgroundColor: "#000"}}>
      <directionalLight intensity={3} position={[0, 3, 2]}/>
      <Environment preset="city" />
      <Models />
    </Canvas>
  )
}

export default Background;