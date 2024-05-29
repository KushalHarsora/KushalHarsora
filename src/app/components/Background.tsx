'use client';

import React from "react";
import { Canvas } from "@react-three/fiber";
import TestModel from "./TestModel"
import { Environment } from "@react-three/drei";

const Background: React.FC = () => {
  return(
    <Canvas style={{backgroundColor: "#000"}}>
      <directionalLight intensity={0.01} position={[0, 2, 1]}/>
      <Environment preset='city' />
      <TestModel />
    </Canvas>
  )
}

export default Background;