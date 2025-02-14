import React from 'react'
import Navbar from '../navbar/navbar'
import Home from '../pages/Home'

export default function Layout() {
    return (
        <div className='pb-20'>
            {/* Glowing Effect in Top Left Corner  */}
            <div className="absolute top-[-350px] left-[-280px]  w-[400px] h-[800px] bg-[radial-gradient(circle,_rgba(255,0,0,0.2)_5%,_rgba(0,0,255,0.2)_60%,transparent_90%)] blur-3xl"></div>

            {/* Left Border */}
            <div className="border-r border-zinc-800 h-full absolute left-12 opacity-50"></div>
            {/* Top Border */}
            <div className="border-t border-zinc-800 w-full absolute top-20 opacity-50"></div>
            {/* Right Border */}
            <div className="border-l border-zinc-800 h-full absolute right-12 opacity-50"></div>
            {/* glowing bar */}
            <div className="absolute top-[78px] left-38 w-28 h-[2px] bg-blue-500 rounded-full shadow-[0px_2px_10px_3px_rgba(0,102,255,0.7)]"></div>

            {/* Content */}
            <div className="relative z-10">
                <Navbar />
                <Home />
            </div>
        </div>
    )
}

