import React, { useRef } from "react";
import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { Mesh, Color } from "three";
import { color } from "three/examples/jsm/nodes/Nodes.js";

const TestModel: React.FC = () => {

    const { nodes, materials, scene } = useGLTF('/assets/earth.glb');
    const Earth = useRef<Mesh>(null);
    const { viewport } = useThree();

    useFrame(() => {
        if(Earth.current) {
            Earth.current.rotateY(-0.01);
        }
    })

    return (
        <React.Fragment>
            <group scale={viewport.width / 7}>
                <primitive object={scene} ref={Earth}/>
                <Text
                fontSize={0.5}
                position={[0, 0, 0]}
                color = {new Color(0xffffff)}
                >
                    Kushal Harsora
                </Text>
            </group>
        </React.Fragment>
    )
}

export default TestModel;

