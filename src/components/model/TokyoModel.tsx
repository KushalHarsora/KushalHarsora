'use client';

// System Imports
import * as React from 'react'
import { useGLTF } from '@react-three/drei'

export default function TokyoModel(props: React.JSX.IntrinsicElements['group']) {
  const { scene } = useGLTF('/model/a_regular_day_in_neo-tokyo.glb');
  return <primitive object={scene} {...props} />;
}