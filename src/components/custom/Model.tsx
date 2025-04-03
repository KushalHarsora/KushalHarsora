import React from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { EffectComposer, BrightnessContrast } from '@react-three/postprocessing'

const Model = () => {

    const { scene: Earth } = useGLTF('/earth.glb');

    const earthRef = React.useRef<THREE.Object3D>(null);

    const initProps = {
        pos: [-250, 60, 20] as [number, number, number],
        intensity: 10 as number,
    }

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
                    camera={{ position: [0, 0.75, 20], fov: 25 }}
                    style={{ backgroundColor: 'black' }}
                >
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

                    <primitive ref={earthRef} object={Earth} scale={1} position={[0, -100, -125]} />

                    <EffectComposer depthBuffer>
                        <BrightnessContrast brightness={0} contrast={0.5} />
                    </EffectComposer>
                </Canvas>
            </section>
        </React.Fragment>
    )
}

export default Model