import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
// import { useControls } from "leva";
import { Mesh, Color } from "three";

const Models: React.FC = () => {
    const { nodes, materials } = useGLTF('/assets/torus.glb');
    const Torus = useRef<Mesh>(null);
    const { viewport } = useThree();

    useFrame(() => {
        if (Torus.current) {
            Torus.current.rotation.z += 0.02;
            Torus.current.rotation.y += 0.005;
            Torus.current.rotation.x += 0.001;
        }
    });

    // const controlMaterial = useControls({
    //     thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    //     roughness: { value: 0.7, min: 0, max: 1, step: 0.05 },
    //     transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    //     ior: { value: 1, min: 0, max: 4, step: 0.01 },
    //     backside: { value: false }
    // })

    return (
        <group scale={viewport.width / 7}>
            <Text 
            fontSize={0.5} 
            position={[0, 0, 0]}
            color={new Color(0xffffff)}> Kushal Harsora </Text>
            <mesh
                ref={Torus}
                castShadow
                receiveShadow
                geometry={(nodes.Torus as Mesh).geometry}
                material={materials['Material.001']}
                position={[0, 0, 2.5]}
            >
                <MeshTransmissionMaterial
                    thickness={0.25}
                    roughness={0.72}
                    transmission={1}
                    ior={1}
                    backside
                />
            </mesh>
        </group>
    );
}

export default Models;
