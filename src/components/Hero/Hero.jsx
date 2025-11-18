import React from 'react';
import { BsArrowDownRight } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaHandScissors } from "react-icons/fa6";
import colorBg from '../../../assets/bg-color.png'
import HeroImg from '../heroImg/HeroImg';
import { Typewriter } from 'react-simple-typewriter';
import gsap from 'gsap';


const Hero = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center md:mb-26 sm:mb-22 mb-18 mx-auto flex flex-col items-center justify-center gap-4'>
            <div className='dark:hidden fixed top-[440px] sm:top-[400px] xl:top-[400px] lg:top-[450px] md:top-[450px] -left-40 xl:left-0 lg:-left-10 md:-left-20 w-[1000px] xl:w-[1100px] md:w-[1000px] h-full -z-10 translate-y-[-80%] '>
                <img src={colorBg} alt="" className='w-full' />
            </div>
            <HeroImg />
            <h3 onMouseEnter={() => gsap.to('#cursor', { scale: 6, duration: 0.4 })}
                onMouseLeave={() => gsap.to('#cursor', { scale: 1, duration: 0.4 })} className='flex items-center gap-3 text-sm -mb-1 md:text-xl font-mono'>Hi! I'm Sifad<FaHandScissors /></h3>
            <h1 className='text-[28px] sm:text-6xl lg:text-[66px] font-semibold font-mono -mt-3 -mb-1 sm:-mb-0 sm:-mt-2'>
                <span>
                    <Typewriter
                        words={['Web Developer', 'Coder']}
                        loop={0} // 0 means infinity
                        cursor
                        cursorStyle='|'
                        typeSpeed={100}
                        deleteSpeed={60}
                        delaySpeed={1500}
                    />
                </span>
            </h1>
            <p onMouseEnter={() => gsap.to('#cursor', { scale: 6, duration: 0.4 })}
                onMouseLeave={() => gsap.to('#cursor', { scale: 1, duration: 0.4 })} className='max-w-2xl mx-auto text-sm sm:text-base font-ovo sm:leading-5 leading-4 sm:-my-1 -my-2 text-medium z-5'>
                I am a passionate fullstack web developer from Chandpur, Bangladesh. Currently learning and building exciting projects to sharpen my skills for future opportunities.
            </p>
            <div className='flex flex-col sm:flex-row items-center md:gap-4 sm:gap-2 gap-1 mt-2'>
                <a href="#contact" className='group px-6 py-2 sm:px-10 sm:py-3 border border-white dark:border-gray-200 rounded-full dark:bg-gray-200 dark:text-black bg-black text-white flex items-center gap-2'>contact me <BsArrowDownRight className='-rotate-45 group-hover:translate-x-2 transition-all duration-500' /></a>
                <div className='relative group overflow-hidden hover:text-white dark:hover:text-black duration-500 transition-all rounded-full'>
                    {/* Animated background */}
                    <div className='absolute inset-0 bg-purple-300 rounded-full -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-20'></div>

                    <a
  href="/sifad-resume.pdf"
  download
  className='px-6 py-2 sm:px-10 sm:py-3 border border-gray-500 group-hover:border-purple-300 rounded-full flex items-center gap-2 relative z-20'
>
  my resume <MdOutlineFileDownload />
</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
