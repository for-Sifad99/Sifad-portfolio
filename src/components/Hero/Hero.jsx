import React from 'react';
import { assets } from '../../../assets/assets';
import HeroImg from '../heroImg/HeroImg';
import { Typewriter } from 'react-simple-typewriter';
const Hero = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto flex flex-col items-center justify-center gap-4'>
            <div className='fixed top-[440px] sm:top-[400px] xl:top-[400px] lg:top-[450px] md:top-[450px] -left-40 xl:left-0 lg:-left-10 md:-left-20 w-[1000px] xl:w-[1100px] md:w-[1000px] h-full -z-10 translate-y-[-80%] '>
                <img src={assets.header_bg_color} alt="" className='w-full' />
            </div>
               <HeroImg />
            <h3 className='flex items-end gap-2 text-sm -mb-1 md:text-xl font-mono'>Hi! I'm Sifad<img src={assets.hand_icon} alt="" className='w-6' /></h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-semibold font-mono -mt-2'>
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
            <p className='max-w-2xl mx-auto text-sm sm:text-base font-ovo sm:leading-5 leading-4 sm:-my-1 -my-2 text-medium'>
                I am a passionate fullstack web developer from Chandpur, Bangladesh. Currently learning and building exciting projects to sharpen my skills for future opportunities.
            </p>
            <div className='flex flex-col sm:flex-row items-center md:gap-4 gap-1 mt-2'>
                <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>contact me <img src={assets.right_arrow_white} alt="" className='w-4' /></a>

                <a href="/public/sample-resume.pdf" download className='px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2'>my resume <img src={assets.download_icon} alt="" className='w-4' /></a>
            </div>
        </div>
    );
};

export default Hero;