import React from 'react';
import { techs } from '../../../assets/assets';
import AnimatedBorderCard from '../AnimatedBorderCard/AnimatedBorderCard';
import Marquee from 'react-fast-marquee';
import TiltContainer from '../TiltContainer/TiltContainer';


const Skills = () => {
    return (
        <div id='skills' className='px-[12%] md:mb-30 sm:mb-26 mb-24 scroll-mt-10'>
            <h4 className='text-center sm:mb-2 text-lg font-ovo'>Stack</h4>
            <h2 className='text-center sm:text-5xl text-4xl font-medium font-ovo'>Skills</h2>

            <Marquee
                direction='left'
                speed={100}
                gradient={false}
                pauseOnHover={true}
                autoFill={false}
            >
                <div className='flex mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:space-x-5 space-x-4 px-2 xl:px-2.5 p-2 overflow-hidden no-scrollbar font-ovo'>
                    {/* Card 1 */}
                    <div className="flex flex-col">
                        <AnimatedBorderCard>
                            <TiltContainer
                                angleX={20}
                                angleY={20}
                                prs={1000}
                                transSpd={1000}
                            >

                                <div className='p-6 rounded-xl flex flex-col'>
                                    <h1 className='text-2xl text-gray-600 font-semibold'>{techs[0].title}</h1>
                                    <div className='relative grid grid-rows-2 grid-flow-col md:gap-2 gap-1 md:mt-5 mt-4 font-mono'>
                                        {techs[0].items.map((item, i) => (
                                            <TiltContainer
                                                key={i}
                                                angleX={20}
                                                angleY={20}
                                                prs={1000}
                                                transSpd={1000}
                                            >
                                                <div
                                                    className='flex items-center lg:gap-2 gap-1 bg-gray-100 shadow-sm rounded-3xl py-1 lg:py-1.5 px-3 lg:px-4 hover:scale-110 transition-all duration-300 cursor-pointer'
                                                >
                                                    <img src={item.img} alt="" className='lg:w-7 w-6' />
                                                    <h3 className='lg:text-xl text-base font-semibold'>{item.title}</h3>
                                                </div>
                                            </TiltContainer>
                                        ))}

                                    </div>
                                </div>
                            </TiltContainer>
                        </AnimatedBorderCard>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col">
                        <AnimatedBorderCard>
                            <TiltContainer
                                angleX={20}
                                angleY={20}
                                prs={1000}
                                transSpd={1000}
                            >

                            <div className='p-6 rounded-xl flex flex-col'>
                                <h1 className='text-2xl text-gray-600 font-semibold'>{techs[1].title}</h1>
                                <div className='grid grid-cols-2 md:gap-2 gap-1 md:mt-5 mt-4 font-mono'>
                                    {techs[1].items.map((item, i) => (
                                        <TiltContainer
                                            key={i}
                                            angleX={20}
                                            angleY={20}
                                            prs={1000}
                                            transSpd={1000}
                                        >

                                            <div  className='flex items-center justify-center lg:gap-2 gap-1 bg-gray-100 shadow-sm rounded-3xl py-1 lg:py-1.5 px-3 lg:px-4 hover:scale-120 transition-all duration-500'>
                                                <img src={item.img} alt="" className='lg:w-7 w-6' />
                                                <h3 className='lg:text-xl text-base font-semibold'>{item.title}</h3>
                                            </div>
                                        </TiltContainer>
                                    ))}
                                </div>
                            </div>
                            </TiltContainer>
                        </AnimatedBorderCard>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col">
                        <AnimatedBorderCard>
                            <TiltContainer
                                angleX={20}
                                angleY={20}
                                prs={1000}
                                transSpd={1000}
                            >

                            <div className='md:p-6 sm:px-4 p-6 rounded-xl flex flex-col'>
                                <h1 className='text-2xl text-gray-600 font-semibold'>{techs[2].title}</h1>
                                <div className='grid grid-cols-1 md:gap-2 gap-1 md:mt-5 mt-4 font-mono'>
                                    {techs[2].items.map((item, i) => (
                                        <TiltContainer
                                            key={i}
                                            angleX={20}
                                            angleY={20}
                                            prs={1000}
                                            transSpd={1000}
                                        >

                                            <div className='flex items-center justify-center lg:gap-2 gap-1 bg-gray-100 shadow-sm rounded-3xl py-1 lg:py-1.5 px-3 lg:px-4 hover:scale-120 transition-all duration-500'>
                                                <img src={item.img} alt="" className='lg:w-7 w-6' />
                                                <h3 className='lg:text-xl text-base font-semibold'>{item.title}</h3>
                                            </div>
                                        </TiltContainer>
                                    ))}
                                </div>
                            </div>
                            </TiltContainer>
                        </AnimatedBorderCard>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Skills;
