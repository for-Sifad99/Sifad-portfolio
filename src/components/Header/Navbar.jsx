import React, { useEffect, useRef, useState } from 'react';
import { IoIosSunny} from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { SiHyperskill } from "react-icons/si";
import { MdWorkOutline } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbAlignBoxBottomRight } from "react-icons/tb";
import useTheme from '../../hooks/themeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isScroll, setIsScroll] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const sideMenuRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        const handleClickOutside = (event) => {
            if (sideMenuRef.current && !sideMenuRef.current.contains(event.target) && isOpen) {
                closeMenu();
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
        setIsOpen(true);
    };
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
        setIsOpen(false);
    };

    return (
        <>
            <nav className={`w-full md:static fixed ovo-font md:px-6 lg:px-[6%] ${isOpen ? '' : 'py-2'} md:py-2 px-4 flex items-center justify-between z-30 rounded-full ${isScroll ? 'bg-white/60 backdrop-blur-md dark:bg-[#1d232a]/60' : ''}`}>
                <a href='#top' className={`outfit-font ${isOpen ? 'md:block hidden' : ''}`}>
                    <p className='flex text-black dark:text-white text-4xl sm:text-[40px]  cursor-pointer font-semibold dosis-font'>Sifad
                        <img className='w-8 sm:w-10' src='/portLogo.png' alt="" />
                    </p>
                </a>

                <ul className='dark:bg-gray-100 dark:text-black text-sm xl:text-[15px] 2xl:text-base font-medium hidden md:flex items-center gap-6 xl:gap-7 2xl:gap-8 rounded-full px-12 py-3 bg-transparent shadow-sm dosis-font'>
                    <a href="#top"> <li>Home</li></a>
                    <a href="#about"> <li>About me</li></a>
                    <a href="#skills"> <li>Skills</li></a>
                    <a href="#works"> <li>Works</li></a>
                    <a href="#contact"> <li>Contact me</li></a>
                </ul>

                <div className={`flex items-center justify-center gap-2 sm:gap-3 ${isOpen ? 'md:block hidden' : ''}`}>
                    {/* Theme */}
                    <label className="swap swap-rotate">
                        <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />

                        {/* sun icon */}
                        <IoIosSunny className="swap-off fill-orange-300 text-3xl rounded-full transition duration-500 cursor-pointer" />

                        {/* moon icon */}
                        <IoMoonOutline className="swap-on text-gray-400 text-3xl rounded-full transition duration-500 cursor-pointer" />
                    </label>
                    <div className='relative group overflow-hidden hover:text-white  duration-500 transition-all rounded-full cursor-pointer'>
                        {/* Animated background */}
                        <div className='absolute inset-0 bg-purple-300 rounded-full -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-20'></div>

                        {/* Contact button (text stays above) */}
                        <a href='#contact' className='hidden lg:flex items-center gap-2 font-medium border border-gray-400 group-hover:border-purple-300 px-8 py-2 rounded-full relative z-30'>
                            Contact <MdArrowOutward />
                        </a>
                    </div>
                    <button onClick={openMenu} className='block md:hidden text-[26px] sm:text-3xl sm:ml-2 cursor-pointer'>
                        <RiMenu3Fill />
                    </button>
                </div>

                {/* Mobile Menu */}
                <ul ref={sideMenuRef} className='font-medium md:hidden flex flex-col gap-1 sm:gap-2 pb-20 pt-16 px-8 fixed -right-64 top-0 bottom-0 w-60 text-lg bg-gradient-to-b from-[#f8e4f8] via-[#d7daf8] to-[#f1f1fc] dark:from-[#3b2f4c] dark:via-[#2e324f] dark:to-[#3a3b5c] transition duration-500 h-screen z-30'>
                    <div className='flex justify-between items-center mb-8 sm:pb-6'>
                        <a href='#top' className='outfit-font cursor-pointer'>
                            <p className='flex dark:text-white text-black text-4xl sm:text-[40px] font-semibold dosis-font'>Sifad
                                <img className='w-8 sm:w-10' src='/portLogo.png' alt="" />
                            </p>
                        </a>
                        <div onClick={closeMenu} className='cursor-pointer'>
                            <IoMdClose className='text-2xl  sm:text-3xl'/>
                    </div>
                    </div>

                    <li><a onClick={closeMenu} href="#top" className='flex items-center gap-2 py-1 hover:mb-1 hover:px-8 hover:bg-slate-100 hover:text-black rounded-full transition-all duration-500 dosis-font'><IoHomeOutline />Home</a></li>
                    <li><a onClick={closeMenu} href="#about" className='flex items-center gap-2 py-1 hover:mb-1 hover:px-8 hover:bg-slate-100 hover:text-black rounded-full transition-all duration-500 dosis-font'><FaRegCircleUser />About me</a></li>
                    <li><a onClick={closeMenu} href="#skills" className='flex items-center gap-2 py-1 hover:mb-1 hover:px-8 hover:bg-slate-100 hover:text-black rounded-full transition-all duration-500 dosis-font'><SiHyperskill />Skills</a></li>
                    <li><a onClick={closeMenu} href="#works" className='flex items-center gap-2 py-1 hover:mb-1 hover:px-8 hover:bg-slate-100 hover:text-black  rounded-full transition-all duration-500 dosis-font'><MdWorkOutline />Works</a></li>
                    <li><a onClick={closeMenu} href="#contact" className='flex items-center gap-2 py-1 hover:mb-1 hover:px-8 hover:bg-slate-100 hover:text-black rounded-full transition-all duration-500 dosis-font'><MdOutlineMailOutline />Contact me</a></li>
                    <li><a onClick={closeMenu} href="#footer" className='flex items-center gap-2 py-1 hover:mb-1 hover:px-7 hover:bg-slate-100 hover:text-black  rounded-full transition-all duration-500 dosis-font'><TbAlignBoxBottomRight />Footer</a></li>
                </ul>
            </nav>
            <div className={`pt-24 md:pt-8 ${isOpen ? 'sm:pt-20' : 'sm:pt-24'}`}>
            </div>
        </>
    );
};

export default Navbar;
