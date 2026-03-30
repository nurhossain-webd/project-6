import React from 'react';
import { LuPlay } from "react-icons/lu";


const Banner = () => {
    return (
        <div className='w-10/12 mx-auto flex items-center justify-between p-8 '>
            <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1 text-xs font-medium themeText  shadow-sm">
                    <span className="h-2 w-2 text-xs rounded-full themeColor"></span>
                    New: AI-Powered Tools Available
                </div>
                <div className='space-y-2'>
                    <h1 className='text-3xl font-bold'>Supercharge Your <br /> Digital Workflow</h1>
                    <p className='text-xs text-black/60'>Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br /> Explore Products</p>
                    <div className='flex gap-4 mt-3'>
                        <button className="btn themeColor rounded-full text-white">Explore products</button>
                        <button className="btn themeText border border-[#4F39F6] rounded-full"> <LuPlay className="mr-2 text-[#4F39F6]" /> Demo</button>
                    </div>
                </div>
            </div>
            <div>
                <img className="h-[400px] w-auto object-contain" src="/banner.png" alt="logo" />
            </div>
        </div>
    );
};

export default Banner;