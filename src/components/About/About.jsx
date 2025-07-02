import React from 'react';
import pic from '../../../assets/my-github-picture.png';
import {infoList} from '../../../assets/assets';

const About = () => {
    return (
        <div id='about' className='w-full px-[12%] md:my-30 sm:my-26 my-24 scroll-mt-10'>
            <h4 className='text-center sm:mb-2 text-lg font-ovo'>Introduction</h4>
            <h2 className='text-center sm:text-5xl text-4xl font-medium font-ovo'>About me</h2>

            <div className='w-full flex flex-col lg:flex-row items-center lg:gap-16 md:gap-12 sm:gap-10 gap-8 my-8 sm:my-10 md:my-12 lg:my-16'>
                <div className='w-full max-w-80 sm:w-72 md:w-64 xl:w-80 rounded-3x'>
                    <img src={pic} alt="user picture" className='w-full h-full rounded-3xl' />
                </div>
                <div className='flex-1'>
                    <h4 className='mb-2 text-2xl font-semibold font-ovo'>It's me</h4>
                    <p className='mb-4 sm:mb-6 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base max-w-2xl font-ovo'>
                        I am an aspiring Fullstack Developer dedicated to mastering modern web technologies. I'm actively building real-world projects to gain experience and prepare for impactful collaborations in the tech industry.
                    </p>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 sm:gap-6 gap-3 max-w-2xl'>
                        {infoList.map(({icon, iconDark, title, description}, i) => (
                            <li key={i} className='border-2 border-[#d3cdf7] rounded-xl p-6 sm:p-3 md:p-4 lg:p-3 xl:p-6 cursor-pointer hover:shadow-[4px_4px_0_#d3cdf7] hover:-translate-y-1 transition-all duration-500'>
                                <img src={icon} alt={title} className='w-7 mt-2' />
                                <h3 className='my-2 font-semibold border-gray-700'>{title}</h3>
                                <h3 className='text-sm sm:text-xs lg:text-[10px] xl:text-sm border-gray-400'>{description}</h3>
                            </li>
                        ))}
                    </ul> 
                </div>
            </div>
        </div>
    );
};

export default About;