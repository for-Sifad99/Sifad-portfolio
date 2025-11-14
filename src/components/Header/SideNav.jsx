import React, { useEffect, useState } from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { SiHyperskill } from "react-icons/si";
import { MdWorkOutline, MdOutlineMailOutline } from "react-icons/md";


const SideNav = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 51);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return <>
        {
            isVisible &&
            <>
                <ul className='text-black text-base md:fixed right-2 bottom-20 max-h-xs w-[50px] font-medium hidden md:flex flex-col items-center shadow-xs dark:shadow-sm rounded-full py-4 ovo-font dark:bg-gray-100 bg-purple-200 bg-opacity-50 z-30'>
                    <li className='p-2 dark:hover:bg-slate-300 hover:bg-slate-100 hover:scale-110 rounded-full transition-all duration-500'><a href="#top"><IoHomeOutline /></a></li>
                    <li className='p-2 dark:hover:bg-slate-300 hover:bg-slate-100 hover:scale-110 rounded-full transition-all duration-500'><a href="#about"><FaRegCircleUser /></a></li>
                    <li className='p-2 dark:hover:bg-slate-300 hover:bg-slate-100 hover:scale-110 rounded-full transition-all duration-500'><a href="#skills"><SiHyperskill /></a></li>
                    <li className='p-2 dark:hover:bg-slate-300 hover:bg-slate-100 hover:scale-110 rounded-full transition-all duration-500'><a href="#works"><MdWorkOutline /></a></li>
                    <li className='p-2 dark:hover:bg-slate-300 hover:bg-slate-100 hover:scale-110 rounded-full transition-all duration-500'><a href="#contact"><MdOutlineMailOutline /></a></li>
                </ul>
                <a href='#top' className='outfit-font z-990 bg-white/20 cursor-pointer'>
                    <p className='md:fixed xl:left-20 lg:left-14 left-6 top-3 hidden md:flex dark:text-white text-black text-[40px] font-semibold dosis-font'>Sifad
                        <img className='w-10 h-11 my-auto' src='/portLogo.png' alt="" />
                    </p>
                </a>
            </>
        }
    </>
};

export default SideNav;
