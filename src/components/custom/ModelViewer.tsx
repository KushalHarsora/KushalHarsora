/* eslint-disable @typescript-eslint/no-unused-vars */
// components/ModelViewer.tsx
'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import React from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


import TokyoModel from '@/components/model/SpaceBoyModel';
import SpaceBoyModel from '@/components/model/SpaceBoyModel';

gsap.registerPlugin(ScrollTrigger);

const ModelViewer = () => {

    const TokyoModelRef = React.useRef<THREE.Group | null>(null);
    const SpaceBoyModelRef = React.useRef<THREE.Group | null>(null);

    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1 }}>
            <Canvas camera={{ position: [0, 4, 10], fov: 30 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} />
                <group position={[0, -2.5, 1]} ref={SpaceBoyModelRef}>
                    <SpaceBoyModel />
                </group>
                <OrbitControls />
            </Canvas>
        </div>
    );
}

export default ModelViewer