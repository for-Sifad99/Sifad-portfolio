import React, { useEffect, useState } from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { SiHyperskill } from "react-icons/si";
import { MdWorkOutline } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

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
                <ul className='text-base md:fixed right-4 bottom-20 max-h-xs w-12 font-medium hidden md:flex flex-col items-center shadow-xs rounded-full py-4 ovo-font bg-amber-200 bg-opacity-50'>
                    <li className='p-2 bg-slate-100 rounded-full mb-1'><a href="#top"><IoHomeOutline /></a></li>
                    <li className='p-2 bg-slate-100 rounded-full mb-1'><a href="#about"><FaRegCircleUser /></a></li>
                    <li className='p-2 bg-slate-100 rounded-full mb-1'><a href="#skills"><SiHyperskill /></a></li>
                    <li className='p-2 bg-slate-100 rounded-full mb-1'><a href="#works"><MdWorkOutline /></a></li>
                    <li className='p-2 bg-slate-100 rounded-full mb-1'><a href="#contact"><MdOutlineMailOutline /></a></li>
                </ul>
                <a href='#top' className='outfit-font'>
                    <p className='md:fixed xl:left-20 lg:left-14 left-6 top-3 hidden md:flex text-black text-[40px] font-semibold'>Sifad    
                        <img className='w-12' src='/portLogo.png' alt="" />
                    </p>
                </a>
            </>
        }
    </>
};

export default SideNav;