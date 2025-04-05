import React from 'react';
import img1 from '/img-1.png';
import img2 from '/img-2.png'

function HeroArea() {
    return (
        <div>
            <div className='container mx-auto mt-[150px] px-12'>
                <div className='text-center'>
                    <h1 className='Newsreader text-[64px] Newsreader leading-[120%] tracking-[-2%] text-center'> <span className='font-[16px]'> We’re </span> <i>farmers</i>, <i>purveyors</i>, <span className='font-[16px]'>and</span> <i>eaters</i> <span className='font-[16px]'> of organically grown food. </span> </h1>
                    <button className='w-[227px] h-[64px] rounded-[8px] bg-[#426B1F] inter font-semibold text-[20px] leading-[130%] text-white mt-[48px] cursor-pointer'> Browse our shop </button>
                </div>

                <div className='w-[106%] flex mt-[160px] justify-end items-center mb-[100px] gap-x-[55px]'>
                    <div>
                        <img className='w-[504px] h-[693px]' src={img1} alt="" />  
                    </div>

                    <div>
                        <img className='w-[780px] h-[480px] shadow-[_0px_4px_4px / _rgba(0, 0, 0, 25%)]' src={img2} alt="" />
                        <p className='inter text-[14px] text-black leading-[160%] tracking-[-1%] mt-[16px]'> <span className='font-medium'> Central California </span> — The person who grew these was located in Central California and, er, hopefully very well-compensated. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroArea