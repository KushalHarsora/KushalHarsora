import React from 'react'
const Model = React.lazy(() => import('./components/custom/Model'));

const App = () => {
  return (
    <React.Fragment>
      <React.Suspense fallback={<div className='h-screen w-screen flex items-center justify-center bg-black text-white text-2xl'>Loading...</div>}>
        <main className='h-screen w-screen flex items-center justify-center relative'>
          <section className='absolute top-0 left-0 z-10 h-[50vh] w-screen flex flex-col justify-center items-center text-white text-9xl max-lg:text-8xl max-md:text-7xl'>
            WELCOME
            <div>
              <img src="/mouse_scroll.gif" alt="gif" width={20} height={20} className=' bg-white text-white' />
            </div>
          </section>
          <Model />
        </main>
      </React.Suspense>
    </React.Fragment>
  )
}

export default App
