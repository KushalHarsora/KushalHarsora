'use client';

// System Imports
import React from 'react'

// Font Imports
import { Notable } from "next/font/google"

const notable = Notable({
  weight: "400",
  subsets: ["latin"],
});

const Home = () => {
    return (
        <React.Fragment>
            <section
                className=' h-screen w-screen flex flex-col justify-center items-center bg-transparent text-white'
            >
                <div className=' h-[70vh] w-screen flex justify-center items-end'>
                    <h1
                        className={` text-center text-8xl max-md:text-7xl ${notable.className}`}
                    >
                        Kushal
                        <br />
                        Harsora
                    </h1>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Home