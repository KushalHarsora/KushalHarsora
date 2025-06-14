'use client';

// System Imports
import React from 'react';
import dynamic from 'next/dynamic';

// Component Imports
import Home from '@/components/custom/Home';

// ✅ Dynamically import the 3D ModelViewer (disable SSR)
const ModelViewer = dynamic(() => import('@/components/custom/ModelViewer'), {
  ssr: false,
  loading: () => <div>Loading 3D model...</div>,
});

const Page = () => {
  return (
    <React.Fragment>
      <main className="h-fit w-screen flex flex-col justify-normal items-center gap-1">
      <ModelViewer />
      <Home />
      </main>
    </React.Fragment>
  );
};

export default Page;
