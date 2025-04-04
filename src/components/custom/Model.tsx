import React from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, useGLTF } from '@react-three/drei'
import { EffectComposer, BrightnessContrast, Bloom, Vignette } from '@react-three/postprocessing'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Model = () => {

    const { scene: Earth } = useGLTF('/earth.glb');

    const earthRef = React.useRef<THREE.Object3D>(null);

    const isMobile = window.innerWidth <= 768;

    const initProps = {
        pos: [-100, 60, 10] as [number, number, number],
        intensity: !isMobile ? 7.5 : 10 as number,
    }
    
    React.useMemo(() => {
        Earth.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material.envMapIntensity = 0.5;
            child.material.needsUpdate = true;
          }
        });
    }, [Earth]);

    React.useEffect(() => {
        const animate = () => {
            if (earthRef.current) {
                earthRef.current.rotation.y -= 0.00125;
            }

            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    return (
        <React.Fragment>
            <Canvas
                style={{ backgroundColor: 'black' }}
                shadows
                gl={{
                    preserveDrawingBuffer: true,
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance',
                    precision: 'highp',
                    stencil: false,
                    depth: true,
                    failIfMajorPerformanceCaveat: true,
                    logarithmicDepthBuffer: true,
                    toneMapping: THREE.ACESFilmicToneMapping,
                    toneMappingExposure: 1.5,
                    pixelRatio: window.devicePixelRatio > 2 ? 2 : window.devicePixelRatio
                }}
            >
                <PerspectiveCamera
                    makeDefault fov={30}
                    near={0.1}
                    far={5000}
                    position={[0, 0, 2]}
                />

                <directionalLight
                    color={'#ffffff'}
                    position={initProps.pos}
                    intensity={initProps.intensity}
                    castShadow={true}
                />

                <primitive ref={earthRef} object={Earth} scale={0.15} position={[0, -140, -270]} />

                <EffectComposer depthBuffer>
                    <BrightnessContrast brightness={0.2} contrast={0.5} />
                    <Bloom intensity={0.25} luminanceSmoothing={0.9} />
                    <Vignette offset={0.5} darkness={0.75} />
                </EffectComposer>
            </Canvas>
        </React.Fragment>
    )
}

export default Model