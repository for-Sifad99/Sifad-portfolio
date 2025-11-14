import React from 'react';
import pic from '../../../assets/about-picture.png';
import { infoList } from '../../assets';
import Container from '../../pages/Shared/SpaceContainer/Container';
import gsap from 'gsap';

const About = () => {
    return (
        <Container id={'about'}>
                <div className='dark:text-white text-black w-full sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-max mx-auto'>
                    <h4 onMouseEnter={() => gsap.to('#cursor', { scale: 6, duration: 0.4 })}
                        onMouseLeave={() => gsap.to('#cursor', { scale: 1, duration: 0.4 })} className='text-center sm:mb-2 text-lg dosis-font'>Introduction</h4>
                    <h2 className='text-center sm:text-5xl text-4xl font-medium font-ovo'>About me</h2>
                    <div className='w-full flex flex-col lg:flex-row items-center lg:gap-16 md:gap-12 sm:gap-10 gap-8 mt-8 sm:mt-10 md:mt-12 lg:mt-16'>
                        <div className='w-full max-w-80 sm:w-72 md:w-64 xl:w-80 rounded-3x'>
                            <img src={pic} alt="user picture" className='w-full h-full rounded-3xl' />
                        </div>
                        <div className='flex-1'>
                            <h4 className='mb-2 text-2xl font-semibold font-ovo uppercase'>It's me</h4>
                            <p
                                onMouseEnter={() => gsap.to('#cursor', { scale: 6, duration: 0.4 })}
                                onMouseLeave={() => gsap.to('#cursor', { scale: 1, duration: 0.4 })}
                                className='mb-4 sm:mb-6 text-xs sm:text-sm md:text-lg lg:text-base xl:text-lg md:leading-5.5 lg:leading-4.5 xl:leading-5.5 max-w-2xl dosis-font'>
                                I am an aspiring Fullstack Developer dedicated to mastering modern web technologies. I'm actively building real-world projects to gain experience and prepare for impactful collaborations in the tech industry.
                            </p>

                            <ul className='grid grid-cols-1 sm:grid-cols-3 sm:gap-6 gap-3 max-w-2xl'>
                                {infoList.map(({ icon: Icon, title, description }, i) => (
                                    <li key={i} className='border-2 border-[#d3cdf7] rounded-xl p-6 sm:p-3 md:p-4 lg:p-3 xl:p-6 cursor-pointer hover:shadow-[4px_4px_0_#d3cdf7] hover:-translate-y-1 transition-all duration-500'>

                                        <Icon className='p-2 sm:p-1 md:p-1.5 lg:p-2 mb-1 sm:mb-0 md:mb-0.5 lg:mb-1 rounded-full bg-purple-300 dark:bg-purple-400 text-black text-4xl sm:text-2xl md:text-3xl lg:text-4xl' />
                                        <h3 className='mb-1 sm:mb-0 lg:mb-1
                                 font-semibold border-gray-700'>{title}</h3>
                                        <h3 onMouseEnter={() => gsap.to('#cursor', { scale: 6, duration: 0.4 })}
                                            onMouseLeave={() => gsap.to('#cursor', { scale: 1, duration: 0.4 })}
                                            className='text-sm sm:text-xs xl:text-sm leading-4 sm:leading-3 border-gray-400'>{description}</h3>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
        </Container>
    );
};

export default About;
