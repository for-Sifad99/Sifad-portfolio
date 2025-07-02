import React, { useEffect, useRef, useState } from 'react';
import { assets } from '../../../assets/assets';


const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const sideMenuRef = useRef();

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(scrollY > 50){
                setIsScroll(true);
            }else{
                setIsScroll(false);
            };
        });
    });

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
            <nav className={`w-full md:static fixed ovo-font md:px-6 lg:px-[6%] md:py-2 px-4 flex items-center justify-between z-999 rounded-full ${isScroll ? 'bg-white/60 backdrop-blur-md' : ''}`}>
                <a href='#top' className={`outfit-font ${isOpen ? 'md:block hidden' : ''}`}>
                    <p className='flex text-black text-[40px] font-semibold '>Sifad 
                        <img className='w-12' src='/portLogo.png' alt="" />
                    </p>
                </a>

                <ul className='font-medium hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-transparent shadow-sm'>
                    <a href="#top"> <li>Home</li></a>
                    <a href="#about"> <li>About me</li></a>
                    <a href="#skills"> <li>Skills</li></a>
                    <a href="#works"> <li>Works</li></a>
                    <a href="#contact"> <li>Contact me</li></a>
                </ul>

                <div className={`flex items-center justify-center gap-3 ${isOpen ? 'md:block hidden' : ''}`}>
                    <button>
                        <img src={assets.moon_icon} alt="" className='w-6' />
                    </button>
                    <a href='#contact' className='hidden font-medium border border-gray-400 px-10 py-2.5 rounded-full ml-4 lg:flex gap-3 items-center'>Contact<img src={assets.arrow_icon} alt="" className='w-3' /></a>
                    <button onClick={openMenu} className='block md:hidden sm:ml-3'>
                        <img src={assets.menu_black} alt="" className='w-6' />
                    </button>
                </div>

                {/* Mobile Menu */}
                <ul ref={sideMenuRef} className='font-medium md:hidden flex flex-col gap-3 pb-20 pt-4 px-10 fixed -right-64 top-0 bottom-0 w-64 bg-gradient-to-b from-[#f8e4f8] via-[#d7daf8] to-[#f1f1fc] transition duration-500 h-screen'>
                    <div className='flex justify-between items-center pb-40'>
                        <a href='#top' className='outfit-font'>
                            <p className='flex text-black text-3xl font-semibold'>Sifad
                                <img className='w-8' src='/portLogo.png' alt="" />
                            </p>
                        </a>
                    <div onClick={closeMenu} className='rounded-full p-2'>
                        <img src={assets.close_black} alt="" className='w-3 cursor-pointer' />
                    </div>
                    </div>

                    <li><a onClick={closeMenu} href="#top">Home</a></li>
                    <li><a onClick={closeMenu} href="#about">About me</a></li>
                    <li><a onClick={closeMenu} href="#skills">Skills</a></li>
                    <li><a onClick={closeMenu} href="#works">Works</a></li>
                    <li><a onClick={closeMenu} href="#contact">Contact me</a></li>
                </ul>
            </nav>
            <div className={`md:pt-8 ${isOpen ? 'sm:pt-14 pt-10' : 'sm:pt-24 pt-20'}`}>
            </div>
        </>
    );
};

export default Navbar;