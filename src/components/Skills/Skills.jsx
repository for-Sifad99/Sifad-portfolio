import React from 'react';
import { techs } from '../../assets';
import AnimatedBorderCard from '../../pages/Shared/AnimatedBorderCard/AnimatedBorderCard';
import TiltContainer from '../../pages/Shared/TiltContainer/TiltContainer';
import Container from '../../pages/Shared/SpaceContainer/Container';
import gsap from 'gsap';


const Skills = () => {
    return (
        <Container id={'skills'}>
                <div className='w-full sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-max mx-auto'>
                    <h4 onMouseEnter={() => gsap.to('#cursor', { scale: 6, duration: 0.4 })}
                        onMouseLeave={() => gsap.to('#cursor', { scale: 1, duration: 0.4 })} className='text-center sm:mb-2 text-lg dosis-font'>Stack</h4>
                    <h2 className='text-center sm:text-5xl text-4xl font-medium font-ovo'>Skills</h2>

                    <div className='flex flex-wrap mt-8 sm:mt-10 gap-4 sm:gap-5.5 md:mt-12 lg:mt-16 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-max sm:justify-center md:justify-start mx-auto items-center font-ovo'>
                        {/* Card 1 */}
                        <div className="flex flex-col">
                            <AnimatedBorderCard>
                                <TiltContainer
                                    angleX={20}
                                    angleY={20}
                                    prs={1000}
                                    transSpd={1000}
                                >

                                    <div className='p-4 xl:p-8 rounded-xl flex flex-col'>
                                        <h1 className='text-2xl dark:text-gray-300 text-gray-600 font-semibold'>{techs[0].title}</h1>
                                        <div className='relative flex flex-wrap sm:grid grid-rows-2 grid-flow-col gap-1.5 md:gap-2 mt-4 md:mt-5 font-mono'>
                                            {techs[0].items.map((item, i) => (
                                                <TiltContainer
                                                    key={i}
                                                    angleX={20}
                                                    angleY={20}
                                                    prs={1000}
                                                    transSpd={1000}
                                                >
                                                    <div
                                                        className='flex items-center xl:gap-2 gap-1 bg-gray-100 shadow-sm rounded-3xl py-1 xl:py-1.5 px-3 xl:px-4 hover:scale-110 transition-all duration-300'
                                                    >
                                                        <img src={item.img} alt="" className='w-6 lg:w-7' />
                                                        <h3 onMouseEnter={() => gsap.to('#cursor', { scale: 6, duration: 0.4 })}
                                                            onMouseLeave={() => gsap.to('#cursor', { scale: 1, duration: 0.4 })} className='dark:text-black text-base lg:text-xl font-semibold'>{item.title}</h3>
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

                                    <div className='p-4 xl:p-8 rounded-xl flex flex-col'>
                                        <h1 className='text-2xl dark:text-gray-300 text-gray-600 font-semibold'>{techs[1].title}</h1>
                                        <div className='flex flex-wrap sm:grid grid-cols-2 gap-1.5 md:gap-2 mt-4 md:mt-5 font-mono'>
                                            {techs[1].items.map((item, i) => (
                                                <TiltContainer
                                                    key={i}
                                                    angleX={20}
                                                    angleY={20}
                                                    prs={1000}
                                                    transSpd={1000}
                                                >

                                                    <div className='flex items-center justify-center xl:gap-2 gap-1 bg-gray-100 shadow-sm rounded-3xl py-1 xl:py-1.5 px-3 xl:px-4 hover:scale-120 transition-all duration-500'>
                                                        <img src={item.img} alt="" className='w-6 lg:w-7' />
                                                        <h3 onMouseEnter={() => gsap.to('#cursor', { scale: 6, duration: 0.4 })}
                                                            onMouseLeave={() => gsap.to('#cursor', { scale: 1, duration: 0.4 })} className='dark:text-black text-base lg:text-xl font-semibold'>{item.title}</h3>
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

                                    <div className='p-4 xl:p-8 rounded-xl flex flex-col'>
                                        <h1 className='text-2xl dark:text-gray-300 text-gray-600 font-semibold'>{techs[2].title}</h1>
                                        <div className='flex sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-1.5 sm:gap-2 mt-4 md:mt-5 font-mono'>
                                            {techs[2].items.map((item, i) => (
                                                <TiltContainer
                                                    key={i}
                                                    angleX={20}
                                                    angleY={20}
                                                    prs={1000}
                                                    transSpd={1000}
                                                >

                                                    <div className='flex items-center justify-center xl:gap-2 gap-1 bg-gray-100 shadow-sm rounded-3xl py-1 xl:py-1.5 px-3 xl:px-4 hover:scale-120 transition-all duration-500'>
                                                        <img src={item.img} alt="" className='w-6 lg:w-7' />
                                                        <h3 onMouseEnter={() => gsap.to('#cursor', { scale: 6, duration: 0.4 })}
                                                            onMouseLeave={() => gsap.to('#cursor', { scale: 1, duration: 0.4 })} className='dark:text-black text-base lg:text-xl font-semibold'>{item.title}</h3>
                                                    </div>
                                                </TiltContainer>
                                            ))}
                                        </div>
                                    </div>
                                </TiltContainer>
                            </AnimatedBorderCard>
                        </div>
                    </div>
                </div>
        </Container>
    );
};
export default Skills;
