import { Mouse } from 'lucide-react';
import React from 'react';
const Model = React.lazy(() => import('./components/custom/Model'));
import Lenis from 'lenis';

const lenis = new Lenis({
  autoRaf: true,
});

lenis.on('scroll', (e) => {
  console.log(e);
});

const App = () => {
  return (
    <React.Fragment>
      <React.Suspense fallback={<div className='h-screen w-screen flex items-center justify-center bg-black text-white text-2xl'>Loading...</div>}>
        <main className='h-[150vh] w-screen flex flex-col items-center justify-center relative overflow-x-hidden'>
          <section className='relative z-10 flex flex-col items-center justify-center gap-5 h-[50vh] w-screen text-white bg-black text-7xl max-lg:text-7xl max-md:text-4xl max-md:px-2'>
            <div className='w-screen h-fit flex flex-col items-center justify-center gap-2'>
              <span className=' text-orange-500 font-semibold'>NAMASTE</span>
              <span>I am <span className=' font-bold'>KUSHAL HARSORA</span></span>
            </div>
            <div className='w-screen h-auto flex justify-center items-center'>
              <span className=' w-fit flex flex-row gap-1 text-white text-base animate-bounce border border-white py-2.5 px-4 rounded-3xl'>
              Scroll Down <Mouse />
              </span>
            </div>
          </section>
          <Model />
        </main>
      </React.Suspense>
    </React.Fragment>
  );
};

export default App;
