import React from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei'
import { EffectComposer, BrightnessContrast } from '@react-three/postprocessing'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Model = () => {

    const { scene: Earth } = useGLTF('/earth.glb');

    const earthRef = React.useRef<THREE.Object3D>(null);

    const initProps = {
        pos: [-250, 15, 30] as [number, number, number],
        intensity: 10 as number,
    }

    Earth.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            child.material.envMapIntensity = 0.5;
            child.material.needsUpdate = true;
        }
    });

    React.useEffect(() => {
        const animate = () => {
            if (earthRef.current) {
                earthRef.current.rotation.y -= 0.00125;
                earthRef.current.rotation.z += 0.0005;
            }

            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    return (
        <React.Fragment>
            <section className='h-screen w-screen flex items-center justify-center bg-black'>
                <Canvas
                    style={{ backgroundColor: 'black' }}
                    shadows
                    gl={{
                        preserveDrawingBuffer: true,
                        antialias: true,
                        alpha: true,
                        powerPreference: 'low-power',
                        stencil: false,
                        depth: true,
                        failIfMajorPerformanceCaveat: true,
                        logarithmicDepthBuffer: true,
                        toneMapping: THREE.ACESFilmicToneMapping,
                        toneMappingExposure: 1.5,
                    }}
                >
                    <PerspectiveCamera
                        makeDefault fov={30}
                        near={0.1}
                        far={10000}
                        position={[0, 0, 2]}
                    />

                    <OrbitControls />

                    <directionalLight
                        color={'#ffffff'}
                        position={initProps.pos}
                        intensity={initProps.intensity}
                        castShadow={true}
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                        shadow-bias={-0.005}
                        shadow-radius={2}
                    />

                    <primitive ref={earthRef} object={Earth} scale={1} position={[0, -67.5, -135]} />

                    <EffectComposer depthBuffer>
                        <BrightnessContrast brightness={0} contrast={0.5} />
                    </EffectComposer>
                </Canvas>
            </section>
        </React.Fragment>
    )
}

export default Model