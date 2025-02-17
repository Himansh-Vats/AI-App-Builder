import { useState } from "react";
import DemoApp from "./DemoApp";
import LandingPage from "./LandingPage";

export default function Home() {
    const [activeButton, setActiveButton] = useState('demo');

    return (
        /* font-family: 'Bricolage Grotesque', sans-serif; */
        <div className="h-full" style={{ fontFamily: 'Bricolage Grotesque' }}>
            {/* Tab */}
            <div className="flex flex-col h-40 items-center justify-center mx-36 border-b-1 border-dashed border-zinc-700 mb-13">

                <div className="text-zinc-400 flex justify-center w-full gap-8" >
                    <button
                        className={`border-[0.5px] rounded-full py-3 text-center w-full lg:w-1/4 transition-colors text-sm ${activeButton === 'demo' ? 'text-[#36a3ff] border-blue-400 bg-zinc-800 bg-opacity-90' : ''
                            }`}
                        onClick={() => setActiveButton('demo')}
                    >
                        Demo Apps
                    </button>

                    <button
                        className={`border-[0.5px] rounded-full py-3 text-center w-full lg:w-1/4 transition-colors text-sm ${activeButton === 'landing' ? 'text-[#36a3ff] bg-zinc-800 bg-opacity-90' : ''}`}
                        onClick={() => setActiveButton('landing')}
                    >
                        Landing Pages
                    </button>
                </div>
            </div>
            {/* <div className="border-b-1 border-dashed border-zinc-700 mt-20"></div> */}


            {/* Body */}
            <div className="px-36">
                {activeButton == "demo" ? <DemoApp /> : <LandingPage />}
            </div>

        </div>
    );
}
