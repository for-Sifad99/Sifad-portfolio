import React from 'react';
import { techs }from '../../../assets/assets';
import Marquee from 'react-fast-marquee';
import AnimatedBorderCard from '../AnimatedBorderCard/AnimatedBorderCard';


const Skills = () => {
    return (
        <div id='skills' className='px-[12%] mb-30 scroll-mt-10'>
            <h4 className='text-center sm:mb-2 text-lg font-ovo'>My technical level</h4>
            <h2 className='text-center sm:text-5xl text-4xl font-medium font-ovo'>Skills</h2>

            <Marquee
                direction='left'
                speed={100}
                gradient={false}
                pauseOnHover={true}
                autoFill={false}
                className='my-10'
            >
                <div className="flex sm:space-x-6 sm:px-3 space-x-4 px-2 overflow-hidden no-scrollbar py-5">
                    {
                        techs.map(({ img, icon : Icon , title, description }, i) => (
                            <AnimatedBorderCard>
                                <div key={i} className='sm:px-8 sm:py-5 px-6 py-3 rounded-2xl flex flex-col justify-start items-start gap-2 sm:w-64 w-50'>
                                    <img src={img} alt={`${title} picture`} className='p-3 group-hover:p-0 group-hover:bg-transparent group-hover:border-none border-2 border-[#f7e6ff] bg-[#fff] sm:w-24 w-18 rounded-full mb-1 transition-all duration-500' />
                                    <div className='group-hover:text-gray-700 sm:text-3xl text-2xl font-semibold flex items-center sm:gap-2 gap-1 transition-all duration-500'>
                                        <span>{<Icon />}</span>
                                        <p>{title}</p>
                                    </div>
                                    <p className='sm:text-base text-sm sm:leading-5 text-[#494949] group-hover:text-black leading-4 transition-all duration-500'>{description}</p>
                                </div>
                            </AnimatedBorderCard>
                        ))
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default Skills;
