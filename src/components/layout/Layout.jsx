import React from 'react'
import Navbar from '../navbar/navbar'
import Home from '../pages/Home'

export default function Layout() {
    return (
        <div className="relative min-h-screen pb-36">
            {/* Glowing Effect in Top Left Corner */}
            <div className="absolute top-[-350px] left-[-280px] w-[400px] h-[800px] bg-[radial-gradient(circle,_rgba(255,0,0,0.2)_5%,_rgba(0,0,255,0.2)_60%,transparent_90%)] blur-3xl"></div>

            {/* Left Border */}
            <div className="absolute left-12 top-0 w-[1px] h-full bg-zinc-700 opacity-50"></div>

            {/* Right Border */}
            <div className="absolute right-12 top-0 w-[1px] h-full bg-zinc-700 opacity-50"></div>

            {/* Top Border */}
            <div className="absolute top-20 left-0 w-full h-[1px] bg-zinc-700 opacity-50"></div>

            {/* Glowing Bar */}
            <div className="absolute top-[78px] left-38 w-28 h-[2px] bg-blue-500 rounded-full shadow-[0px_2px_10px_3px_rgba(0,102,255,0.7)]"></div>

            {/* Content */}
            <div className="relative z-10">
                <Navbar />
                <Home />
            </div>
        </div>
    );
}
