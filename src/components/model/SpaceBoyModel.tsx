'use client';

import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function SpaceBoyModel() {
    const { nodes, materials } = useGLTF('/model/space_boi_new.glb');

    const sphereBody1 = React.useRef<THREE.Group | null>(null);

    const sphere1 = React.useRef<THREE.Mesh | null>(null);
    const sphere2 = React.useRef<THREE.Mesh | null>(null);
    const sphere3 = React.useRef<THREE.Mesh | null>(null);

    const wave2 = React.useRef<THREE.Mesh | null>(null);

    useFrame(() => {
        if (sphereBody1.current?.rotation) {
            sphereBody1.current.rotation.y += 0.0025
        }

        if (sphere1.current?.rotation) {
            sphere1.current.rotation.z -= 0.008
            sphere1.current.rotation.x += 0.0005
        }

        if (sphere2.current?.rotation) {
            sphere2.current.rotation.z += 0.001
            sphere2.current.rotation.y += 0.005
            sphere2.current.rotation.x += 0.003
        }

        if (sphere3.current?.rotation) {
            sphere3.current.rotation.z += 0.003
            sphere3.current.rotation.y += 0.002
            sphere3.current.rotation.x += 0.005
        }

        if (wave2.current?.rotation) {
            wave2.current.rotation.z += 0.0005
        }
    })

    return (
        <group dispose={null}>
            <group scale={0.01}>

                {/* Body */}
                <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={(nodes.body_Material001_0 as THREE.Mesh).geometry}
                        material={materials['Material.001']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={(nodes.body_Material002_0 as THREE.Mesh).geometry}
                        material={materials['Material.002']}
                    />
                </group>

                {/* Platform */}

                <group
                    position={[0, -101.673, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[1120.013, 1120.013, 100]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={(nodes.Cube_Material001_0 as THREE.Mesh).geometry}
                        material={materials['Material.001']}
                        scale={[10, 10, 1]}
                    />
                </group>


                <group position={[-150, 392.646, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={39.706}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={(nodes.Sphere002_Material001_0 as THREE.Mesh).geometry}
                        material={materials['Material.001']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={(nodes.Sphere002_Material002_0 as THREE.Mesh).geometry}
                        material={materials['Material.002']}
                    />
                </group>
                <group
                    position={[199.634, 566.883, -221.001]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={39.706}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={(nodes.Sphere007_Material001_0 as THREE.Mesh).geometry}
                        material={materials['Material.001']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={(nodes.Sphere007_Material002_0 as THREE.Mesh).geometry}
                        material={materials['Material.002']}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={(nodes.particles_Material002_0 as THREE.Mesh).geometry}
                    material={materials['Material.002']}
                    position={[489.69, 793.811, 355.293]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={20.408}
                />
                <group
                    ref={sphereBody1}
                >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={(nodes.Sphere_Material001_0 as THREE.Mesh).geometry}
                    material={materials['Material.001']}
                    position={[495, 427.948, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={62.402}
                    ref={sphere1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={(nodes.Sphere001_Material002_0 as THREE.Mesh).geometry}
                    material={materials['Material.002']}
                    position={[495, 427.948, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={60.324}
                />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={(nodes.Sphere003_Material002_0 as THREE.Mesh).geometry}
                    material={materials['Material.002']}
                    position={[-150, 392.646, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={41.075}
                    ref={sphere2}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={(nodes.Sphere005_Material001_0 as THREE.Mesh).geometry}
                    material={materials['Material.001']}
                    position={[100, 460.196, -117.028]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={62.402}
                    ref={sphere3}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={(nodes.Sphere006_Material002_0 as THREE.Mesh).geometry}
                    material={materials['Material.002']}
                    position={[100, 460.196, -117.028]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={60.324}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={(nodes.Sphere008_Material002_0 as THREE.Mesh).geometry}
                    material={materials['Material.002']}
                    position={[199.634, 566.883, -221.001]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={41.075}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={(nodes.Sphere009_Material002_0 as THREE.Mesh).geometry}
                    material={materials['Material.002']}
                    position={[507.522, 667.594, -214.475]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={16.881}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={(nodes.Sphere010_Material002_0 as THREE.Mesh).geometry}
                    material={materials['Material.002']}
                    position={[-287.442, 585.792, -311.857]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={16.881}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={(nodes.Sphere011_Material002_0 as THREE.Mesh).geometry}
                    material={materials['Material.002']}
                    position={[-553.462, 331.074, -379.067]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={11.437}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={(nodes.waves_Material002_0 as THREE.Mesh).geometry}
                    material={materials['Material.002']}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[100, 100, 1.891]}
                    ref={wave2}
                    
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={(nodes.waves1_Material002_0 as THREE.Mesh).geometry}
                    material={materials['Material.002']}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[100, 100, 1.891]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={(nodes.waves2_Material002_0 as THREE.Mesh).geometry}
                    material={materials['Material.002']}
                    position={[92.464, 15.529, 2.112]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[100, 100, 1.891]}
                    
                />
            </group>
        </group>
    )
}

useGLTF.preload('/model/space_boi_new.glb')