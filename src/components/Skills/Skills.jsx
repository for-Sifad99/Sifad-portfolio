import React from 'react';
import { techs } from '../../../assets/assets';
import AnimatedBorderCard from '../AnimatedBorderCard/AnimatedBorderCard';

const Skills = () => {
    return (
        <div id='skills' className='px-[14%] mb-30 scroll-mt-10'>
            <h4 className='text-center sm:mb-2 text-lg font-ovo'>My technical level</h4>
            <h2 className='text-center sm:text-5xl text-4xl font-medium font-ovo'>Skills</h2>

            <div className='flex flex-col sm:flex-row sm:my-20 my-10 mx-auto md:gap-6 sm:gap-3 gap-6 font-ovo items-start max-w-xs sm:max-w-full'>
                {/* Card 1 */}
                <div className="flex flex-col">
                    <AnimatedBorderCard>
                        <div className='md:p-6 sm:px-4 p-6 rounded-xl flex flex-col'>
                            <h1 className='text-2xl text-gray-600 font-semibold'>{techs[0].title}</h1>
                            <div className='flex flex-wrap md:gap-2 gap-1 md:mt-5 sm:mt-4 mt-5 font-mono'>
                                {techs[0].items.map((item, index) => (
                                    <div key={index} className='flex items-center justify-center gap-1 bg-gray-100 shadow-sm rounded-3xl py-1 px-3'>
                                        <img src={item.img} alt="" className='md:w-6 sm:w-4 w-6' />
                                        <h3 className='font-semibold'>{item.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedBorderCard>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col">
                    <AnimatedBorderCard>
                        <div className='md:p-6 sm:px-4 p-6 rounded-xl flex flex-col'>
                            <h1 className='text-2xl text-gray-600 font-semibold'>{techs[1].title}</h1>
                            <div className='flex flex-wrap md:gap-2 gap-1 md:mt-5 sm:mt-4 mt-5 font-mono'>
                                {techs[1].items.map((item, index) => (
                                    <div key={index} className='flex items-center justify-center gap-1 bg-gray-100 shadow-sm rounded-3xl py-1 px-3'>
                                        <img src={item.img} alt="" className='w-6' />
                                        <h3 className='font-semibold'>{item.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedBorderCard>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col mx-auto sm:mx-0">
                    <AnimatedBorderCard>
                        <div className='md:p-6 sm:px-4 p-6 rounded-xl flex flex-col'>
                            <h1 className='text-2xl text-gray-600 font-semibold'>{techs[2].title}</h1>
                            <div className='flex flex-wrap md:gap-2 gap-1 md:mt-5 mt-4 font-mono'>
                                {techs[2].items.map((item, index) => (
                                    <div key={index} className='flex items-center justify-center gap-1 bg-gray-100 shadow-sm rounded-3xl py-1 px-3'>
                                        <img src={item.img} alt="" className='w-6' />
                                        <h3 className='font-semibold'>{item.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedBorderCard>
                </div>
            </div>
        </div>
    );
};

export default Skills;
