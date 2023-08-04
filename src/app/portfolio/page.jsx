import React from 'react';
import style from './page.module.css';

const PortfolioPage = () => {
    return (
        <div>
            
            <h2 className='text-5xl text-slate-300 font-semibold mt-6'>Our Works</h2>
            <p className='text-slate-300 font-semibold ml-2 my-3'>Choose a Gallery</p>

            <div className='row'>
                <div className='md:col-4'>
                    <div className={`w-full flex flex-col justify-end items-end ${style.bg_illustration}`}>
                        <h2 className='text-4xl font-bold p-2'>Illustration</h2>
                    </div>
                </div>
                <div className='md:col-4'>
                    <div className={`w-full flex flex-col justify-end items-end ${style.bg_web}`}>
                        <h2 className='text-4xl font-bold p-2'>Illustration</h2>
                    </div>
                </div>
                <div className='md:col-4'>
                    <div className={`w-full flex flex-col justify-end items-end ${style.bg_application}`}>
                        <h2 className='text-4xl font-bold p-2'>Illustration</h2>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default PortfolioPage;