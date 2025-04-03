import { Mouse } from 'lucide-react';
import React from 'react'
const Model = React.lazy(() => import('./components/custom/Model'));

const App = () => {
  return (
    <React.Fragment>
      <React.Suspense fallback={<div className='h-screen w-screen flex items-center justify-center bg-black text-white text-2xl'>Loading...</div>}>
        <main className='h-screen w-screen flex items-center justify-center relative'>
          <section className='absolute top-0 left-0 z-10 h-[50vh] w-screen flex flex-col justify-center items-center gap-3 text-white text-9xl max-lg:text-7xl max-md:text-6xl'>
            WELCOME
            <div className='flex flex-row gap-1 text-white text-base animate-bounce border border-white py-2 px-3 rounded-3xl'>
              Scroll Down <Mouse />
            </div>
          </section>
          <Model />
        </main>
      </React.Suspense>
    </React.Fragment>
  )
}

export default App
