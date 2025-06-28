import React, { useRef } from 'react';
import { assets } from '../../../assets/assets';

const Navbar = () => {
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    };
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    };

    return (
        <>
           
            <nav className='w-full fixed ovo-font px-4 md:px-6 lg:px-[6%] py-4 flex items-center justify-between z-50'>
                <a href='#top' className='outfit-font'>
                    <p className='flex text-black text-[40px] font-semibold'>Sifad <span className='w-4 h-4 rounded-full bg-pink-400 mt-[30px] ml-1'></span></p>
                </a>

                <ul className='font-medium hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-xs bg-opacity-50'>
                    <li><a href="#top">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className='flex items-center gap-3'>
                    <button>
                        <img src={assets.moon_icon} alt="" className='w-6' />
                    </button>
                    <a href='#contact' className='border border-gray-500 hidden font-medium px-10 py-2.5 rounded-full ml-4 lg:flex gap-3 items-center'>Contact<img src={assets.arrow_icon} alt="" className='w-3' /></a>
                    <button onClick={openMenu} className='block md:hidden sm:ml-3'>
                        <img src={assets.menu_black} alt="" className='w-6' />
                    </button>
                </div>

                {/* Mobile Menu */}
                <ul ref={sideMenuRef} className='font-medium md:hidden flex flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-5 bg-rose-50 transition duration-500 h-screen'>
                    <div onClick={closeMenu} className='absolute right-5 top-7 border border-gray-400 rounded-full p-2'>
                        <img src={assets.close_black} alt="" className='w-3 cursor-pointer' />
                    </div>

                    <li><a onClick={closeMenu} href="top">Home</a></li>
                    <li><a onClick={closeMenu} href="#about">About</a></li>
                    <li><a onClick={closeMenu} href="#education">Education</a></li>
                    <li><a onClick={closeMenu} href="#skills">Skills</a></li>
                    <li><a onClick={closeMenu} href="#projects">Projects</a></li>
                    <li><a onClick={closeMenu} href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;