import { Mouse } from 'lucide-react';
import React from 'react';
const Model = React.lazy(() => import('./components/custom/Model'));


const App = () => {
  return (
    <React.Fragment>
      <React.Suspense fallback={<main className='h-screen w-screen overflow-hidden flex items-center justify-center bg-black text-white text-2xl'>Loading...</main>}>
        <main className='h-screen w-screen flex flex-col items-center justify-center relative overflow-x-hidden'>
          <section className='absolute top-0 left-0 z-10 flex flex-col items-center justify-start gap-3 pt-20 h-[150vh] w-screen text-white bg-transparent text-7xl max-lg:text-7xl max-md:text-4xl max-md:px-2'>
            <div>
              <span className=' text-7xl max-md:text-6xl'>NAMASTE👋🏻</span>
            </div>
            <div>
              <span className='w-fit flex flex-row justify-center items-center gap-1 text-white text-base max-md:text-xs animate-bounce border border-white py-2.5 max-md:py-1.5 px-4 max-md:px-3 rounded-3xl'>
              Scroll Down <Mouse className=' max-md:w-[20px]' />
              </span>
            </div>
          </section>
          <section className='fixed top-0 left-0 z-0 h-screen w-screen flex items-center justify-center bg-black'>
            <Model />
          </section>
        </main>
      </React.Suspense>
    </React.Fragment>
  );
};

export default App;
