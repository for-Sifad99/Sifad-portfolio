import React, { useState } from 'react';
import { works } from '../../../assets/assets';
import { motion, AnimatePresence } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { MdOutlineClose } from "react-icons/md";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { TbListDetails } from "react-icons/tb";
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

const Contact = () => {
    const [project, setProject] = useState(works[0]);
    const [swiper, setSwiper] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(works[currentIndex]);
    };

    return (
        <>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 1.5, duration: 0.4, ease: 'easeIn' }
                }}
                id='works' className="relative px-[12%] md:mb-30 sm:mb-26 mb-24 scroll-mt-10"
            >
                <h4 className='text-center sm:mb-2 text-lg font-ovo'>Highlights</h4>
                <h2 className='text-center sm:text-5xl text-4xl font-medium font-ovo'>Works</h2>

                <div className='my-8 sm:my-10 md:my-12 lg:my-16 flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-4 lg:gap-6 xl:gap-10 font-mono'>
                    {/* Text */}
                    <div className="flex-1 w-full md:w-1/2 max-w-md space-y-2 order-2 md:order-1">
                        <div className='text-5xl sm:text-7xl md:text-5xl lg:text-7xl leading-none font-extrabold text-transparent text-outline-black lg:mb-3 md:mb-1.5 sm:mb-2 mb-1'>
                            {project.id}
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={project.webLogo} alt="" className='w-6 sm:w-10 md:w-7 lg:w-10' />
                            <div className='text-[28px] sm:text-5xl md:text-4xl lg:text-5xl font-mono font-bold leading-none text-gray-700'>{project.title}</div>
                        </div>
                        <p className='sm:pt-1 md:pt-0 lg:pt-2 text-sm sm:text-lg md:text-sm lg:text-lg text-[#2f2279] leading-3.5 sm:leading-5 md:leading-4 lg:leading-4.5 xl:leading-5 font-mono'>{project.overview}</p>

                        <div className='sm:pt-1.5 md:pt-0.5 lg:pt-1.5 border-b border-gray-400'></div>
                        <div className='flex flex-wrap items-center gap-1.5 sm:gap-2 sm:pt-1.5 md:pt-0.5 lg:pt-1.5'>
                            <button
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="See Details"
                                onClick={() => setIsModalOpen(true)}
                                className='p-2.5 sm:p-3.5 md:p-2.5 lg:p-3.5 font-bold text-base sm:text-xl md:text-base lf:text-xl bg-[#e6ddff] rounded-full'>
                                <TbListDetails />
                            </button>

                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <button
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content="Open Live"
                                    className='p-2.5 sm:p-3.5 md:p-2.5 lg:p-3.5 font-bold text-base sm:text-xl md:text-base lf:text-xl bg-[#e6ddff] rounded-full'>
                                    <BsArrowUpRight />
                                </button>
                            </a>

                            <Tooltip
                                id="my-tooltip"
                                place="top"
                                effect="solid"
                                className="!bg-[#e1d7fd] !text-black !text-xs !px-2 !py-1 !rounded-md !rotate-[1deg]"
                            />
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex-1 w-full md:w-1/2 max-w-md flex justify-center order-1 md:order-2">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            onSlideChange={handleSlideChange}
                            onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
                        >
                            {works.map((_, i) => (
                                <SwiperSlide key={i}>
                                    <div className='w-full sm:h-full relative group flex justify-center items-center'>
                                        <img src={project.image} alt="" className='object-cover bg-cover opacity-90 h-full w-full' />
                                    </div>
                                    <div className='flex items-center justify-between w-full z-20'>
                                        <button className='absolute left-0 top-[calc(50%-12px)] sm:top-[calc(50%-20px)] md:top-[calc(50%-16px)] lg:top-[calc(50%-20px)] lg:p-2.5 md:p-2 sm:p-2.5 p-1.5 font-bold text-lg sm:text-xl md:text-base lg:text-xl bg-[#fad43e] hover:bg-[#fada71] rounded-e-md' onClick={() => swiper.slidePrev()}>
                                            <PiCaretLeftBold />
                                        </button>
                                        <button className={`absolute right-0 top-[calc(50%-12px)] sm:top-[calc(50%-20px)] md:top-[calc(50%-16px)] lg:top-[calc(50%-20px)] lg:p-2.5 md:p-2 sm:p-2.5 p-1.5 font-bold text-lg sm:text-xl md:text-base lg:text-xl bg-[#fad43e] hover:bg-[#fada71] rounded-s-md ${project.id == works.length ? 'hidden' : ''}`} onClick={() => swiper.slideNext()}>
                                            <PiCaretRightBold />
                                        </button>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </motion.section>

            {/* 🪄 Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="fixed left-[7.5%] top-[16%] sm:left-[14%] w-[85%] max-w-sm h-auto bg-white z-50 p-4 sm:p-8 rounded-xl shadow-2xl border border-[#cfc5ff]"
                    >
                        <div className="mt-2 flex items-center justify-between">
                            <div className='flex items-center gap-1 sm:gap-1.5'>
                                <img src={project.webLogo} alt="" className='w-6 sm:w-10' />
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{project.title}</h2>
                            </div>
                             <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-black text-sm font-bold bg-[#eee6ff] p-2 rounded-full hover:bg-[#dccfff] transition-all duration-500"
                            >
                                <MdOutlineClose />
                            </button>
                        </div>
                        <img src={project.image} alt="" className='mt-2 max-h-20 w-36' />
                        <div className="mt-3 text-sm text-gray-700 font-mono space-y-1">

                            <div className='flex flex-col'>
                                <h3 className='text-[13px] sm:text-base font-bold'>🔥Development Hurdles</h3>
                                <p className=' text-[11px] sm:text-sm mt-[2px] leading-3 sm:leading-3.5'>{project.challenge}</p></div>
                            <div className='flex flex-col'>
                                <h3 className='text-[13px] sm:text-base font-bold'>🌟What’s Cooking Next? </h3>
                                <p className=' text-[11px] sm:text-sm mt-[2px] leading-3 sm:leading-3.5'>{project.future}</p></div>
                            <div className='flex flex-col'>
                                <h3 className='text-[13px] sm:text-base font-bold'>🔧Tools Used</h3>
                                <ul className='flex flex-wrap sm:flex-nowrap items-center sm:gap-2 gap-1.5 mt-[2px]'>
                                    {project.stack.map((s, i) => (
                                        <li
                                            key={i}
                                            className='bg-gray-100 shadow-sm rounded-3xl p-1 sm:p-2 hover:scale-110 transition-all duration-300 cursor-pointer'
                                        >
                                            <img src={s} alt="" className='w-4 sm:w-5' />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-3 sm:mt-4 flex justify-end gap-2">
                            <a href={project.client} target="_blank" rel="noopener noreferrer">
                                <button className='flex items-center gap-1 sm:gap-2 py-2 px-2 sm:px-3 font-normal text-[10px] sm:text-xs bg-[#e6ddff]  rounded-full hover:bg-[#d6c7ff] transition-all duration-500'>
                                    <BsGithub />Client repo
                                </button>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <button className='flex items-center gap-1 sm:gap-2 py-2 px-2 sm:px-3 font-normal text-[11px] sm:text-xs bg-[#e6ddff]  rounded-full hover:bg-[#d6c7ff] transition-all duration-500'>
                                    <BsGithub />Server repo
                                </button>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Contact;
