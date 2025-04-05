import React from 'react'
import { Link } from 'react-router'

function Navbar() {
    return (
        <div>
            <div className="container mx-auto flex justify-between items-center h-[112px] px-12">
                <div>
                    <Link to={"/"}> <h1 className='Newsreader font-medium text-[32px] tracking-[-1%] text-[#426B1F]'> World Peas </h1> </Link>
                </div>

                <div>
                    <ul className='flex gap-[30px] mt-[20px]'>
                        <li className='inter text-[16px] leading-[130%] text-center text-black shadow-hov duration-75'> <Link to={"/"}> Shop </Link> </li>
                        <li className='inter text-[16px] leading-[130%] text-center text-black shadow-hov duration-75'> <Link to={"/"}> Newstand </Link> </li>
                        <li className='inter text-[16px] leading-[130%] text-center text-black shadow-hov duration-75'> <Link to={"/"}> Who we are </Link> </li>
                        <li className='inter text-[16px] leading-[130%] text-center text-black shadow-hov duration-75'> <Link to={"/"}> My profile </Link> </li>
                        <li className='mt-[-15px]'> <button className='w-[126px] h-[48px] rounded-[8px] bg-[#426B1F] font-semibold text-white leading-[130% text-center] cursor-pointer'> Basket (3) </button> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar