import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { useControls } from "leva";
import { BackSide, Mesh } from "three";
import { ior, roughness, thickness, transmission } from "three/examples/jsm/nodes/core/PropertyNode.js";

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

    const controlMaterial = useControls({
        thickness: { value: 0.2, min: 0, max: 3, step: 0.05},
        roughness: { value: 0.7, min: 0, max: 1, step: 0.1},
        transmission: { value: 1, min: 0, max: 1, step: 0.1},
        ior: { value: 1, min: 0, max: 3, step: 0.01},
        backside: { value: true }
    })

    return (
        <group scale={viewport.width / 7}>
            <Text fontSize={0.5} position={[0, 0, 0]}> Kushal Harsora </Text>
            <mesh
                ref={Torus}
                castShadow
                receiveShadow
                geometry={(nodes.Torus as Mesh).geometry}
                material={materials['Material.001']}
            >
                <MeshTransmissionMaterial {...controlMaterial} />
            </mesh>
        </group>
    );
}

export default Models;
