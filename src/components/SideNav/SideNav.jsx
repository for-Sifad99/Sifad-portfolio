import React, { useEffect, useState } from 'react';
import { assets } from '../../../assets/assets';

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
                <ul className='text-lg md:fixed right-4 bottom-20 max-h-xs w-12 font-medium hidden md:flex flex-col items-center gap-1 shadow-xs rounded-full py-8 ovo-font bg-gradient-to-b from-[#faf2fa] via-[#efebfd] to-[#ecf0fd] bg-opacity-50'>
                    <li><a href="#top">H</a></li>
                    <li><a href="#about">A</a></li>
                    <li><a href="#skills">S</a></li>
                    <li><a href="#works">W</a></li>
                    <li><a href="#contact">C</a></li>
                    <li><a href="#contact">
                        <img src={assets.moon_icon} alt="" className='w-[14px] mt-1' />
                    </a>
                    </li>
                </ul>
                <a href='#top' className='outfit-font'>
                    <p className='md:fixed xl:left-20 lg:left-14 left-6 top-3 hidden md:flex text-black text-[40px] font-semibold'>Sifad <span className='w-4 h-4 rounded-full bg-[#b5a8ff] mt-[30px] ml-1'></span></p>
                </a>
            </>
        }
    </>
};

export default SideNav;