import React from 'react';
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import gsap from 'gsap';

const Footer = () => {
    return (
            <footer id='footer' className="footer footer-horizontal footer-center dark:bg-gray-200 bg-[#232323] text-primary-content dark:text-black gap-6 -mt-14 sm:gap-10 pt-10 sm:pt-[6%] pb-[2%] px-[3%] sm:px-[12%] dosis-font scroll-m-10">
                <aside>
                    <p className="text-3xl sm:text-4xl font-bold leading-4 sm:leading-6">
                        Port<span className='text-amber-500'>folio.</span>
                    </p>
                <p onMouseEnter={() => gsap.to('#cursor', { scale: 6, duration: 0.4 })}
                    onMouseLeave={() => gsap.to('#cursor', { scale: 1, duration: 0.4 })} className='flex text-sm sm:text-xl font-semibold dosis-font'>Sifad
                        <img className='w-4 sm:w-6' src='/portLogo.png' alt="" />
                    </p>
                </aside>
                <nav className="footer flex justify-between text-neutral-content dark:text-black items-center">
                <aside onMouseEnter={() => gsap.to('#cursor', { scale: 6, duration: 0.4 })}
                    onMouseLeave={() => gsap.to('#cursor', { scale: 1, duration: 0.4 })}>
                        <p className='leading-2 text-start text-[10px] sm:text-sm'>Copyright © {new Date().getFullYear()} - All right reserved</p>
                    </aside>
                    <nav className="grid-flow-col gap-1 sm:gap-2 sm:text-sm md:place-self-center md:justify-self-end">
                        <a href='https://github.com/' target="_blank" rel="noopener noreferrer" className='p-1.5 sm:p-2 border border-amber-500 dark:bg-amber-500 hover:border-white hover:bg-amber-500 hover:scale-110  sm:hover:scale-115 transition-all duration-500 hover:text-black rounded-full'>
                            <FiGithub />
                        </a>
                    <a href='https://www.linkedin.com/in/sifad-islam' target="_blank" rel="noopener noreferrer" className='p-1.5 sm:p-2 border border-amber-500 dark:bg-amber-500 hover:border-white hover:bg-amber-500 hover:scale-110  sm:hover:scale-115 transition-all duration-500 hover:text-black rounded-full'>
                            <FaLinkedinIn />
                        </a>
                    <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer" className='p-1.5 sm:p-2 border border-amber-500 dark:bg-amber-500 hover:border-white hover:bg-amber-500 hover:scale-110  sm:hover:scale-115 transition-all duration-500 hover:text-black rounded-full'>
                            <FaFacebookF />
                        </a>
                    </nav>
                </nav>
            </footer>
    );
};

export default Footer;
