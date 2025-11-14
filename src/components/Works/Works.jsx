import React, { useEffect, useRef, useState } from 'react';
import Container from '../../pages/Shared/SpaceContainer/Container';
import { works } from '../../assets';
import { motion, AnimatePresence } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { MdOutlineClose } from "react-icons/md";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { TbListDetails } from "react-icons/tb";
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import gsap from 'gsap';

const Contact = () => {
    const [project, setProject] = useState(works[0]);
    const [swiper, setSwiper] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef();

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(works[currentIndex]);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target) && modalRef) {
                setIsModalOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen]);

    // Function to render stack items correctly
    const renderStackItem = (item, index) => {
        // Check if item is a React component (function) or an image source (string)
        if (typeof item === 'function') {
            // It's a React icon component
            const IconComponent = item;
            return (
                <li
                    key={index}
                    className='dark:bg-gray-200 bg-gray-100 shadow-sm rounded-3xl p-1 sm:p-2 hover:scale-110 transition-all duration-300 cursor-pointer flex items-center justify-center'
                >
                    <IconComponent className='w-4 h-4 sm:w-5 sm:h-5' />
                </li>
            );
        } else if (typeof item === 'string') {
            // It's an image source URL
            return (
                <li
                    key={index}
                    className='dark:bg-gray-200 bg-gray-100 shadow-sm rounded-3xl p-1 sm:p-2 hover:scale-110 transition-all duration-300 cursor-pointer'
                >
                    <img src={item} alt="" className='w-4 sm:w-5' />
                </li>
            );
        } else {
            // It's likely an imported image module (object with default property)
            // This handles cases where imported images might be objects rather than direct strings
            const src = item?.default || item;
            return (
                <li
                    key={index}
                    className='dark:bg-gray-200 bg-gray-100 shadow-sm rounded-3xl p-1 sm:p-2 hover:scale-110 transition-all duration-300 cursor-pointer'
                >
                    <img src={src} alt="" className='w-4 sm:w-5' />
                </li>
            );
        }
    };

    return <>
        <Container id='works'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 1.5, duration: 0.4, ease: 'easeIn' }
                }}
                className="relative"
            >
                <h4 onMouseEnter={() => gsap.to('#cursor', { scale: 6, duration: 0.4 })}
                    onMouseLeave={() => gsap.to('#cursor', { scale: 1, duration: 0.4 })} className='text-center sm:mb-2 text-lg dosis-font'>Highlights</h4>
                <h2 className='text-center sm:text-5xl text-4xl font-medium font-ovo'>Works</h2>

                <div className='mt-8 sm:mt-10 md:mt-12 lg:mt-16 md:max-w-2xl lg:max-w-4xl xl:max-w-max mx-auto flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-4 lg:gap-6 xl:gap-10 font-mono'>
                    {/* Text */}
                    <div className="flex-1 w-full md:w-1/2 max-w-lg space-y-2 order-2 md:order-1">
                        <div className='dark:hidden text-5xl sm:text-7xl md:text-5xl lg:text-7xl leading-none font-extrabold text-transparent text-outline-black lg:mb-3 md:mb-1.5 sm:mb-2 mb-1'>
                            {project.id}
                        </div>
                        <div className='hidden dark:block text-5xl sm:text-7xl md:text-5xl lg:text-7xl leading-none font-extrabold text-white lg:mb-3 md:mb-1.5 sm:mb-2 mb-1'>
                            {project.id}
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={project.webLogo} alt="" className='w-6 sm:w-10 md:w-7 lg:w-10' />
                            <div className='text-[28px] sm:text-5xl md:text-4xl lg:text-5xl font-mono font-bold leading-none dark:text-gray-300 text-gray-700'>{project.title}</div>
                        </div>
                        <p onMouseEnter={() => gsap.to('#cursor', { scale: 6, duration: 0.4 })}
                            onMouseLeave={() => gsap.to('#cursor', { scale: 1, duration: 0.4 })} className='sm:pt-1 md:pt-0 lg:pt-2 text-sm sm:text-lg md:text-sm lg:text-lg dark:text-gray-400 text-gray-600 leading-3.5 sm:leading-5 md:leading-4 lg:leading-4.5 xl:leading-5 font-mono'>{project.overview}</p>

                        <div className='sm:pt-1.5 md:pt-0.5 lg:pt-1.5 border-b border-gray-400'></div>
                        <div className='flex flex-wrap items-center gap-1.5 sm:gap-2 sm:pt-1.5 md:pt-0.5 lg:pt-1.5'>
                            <button
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="See Details"
                                onClick={() => setIsModalOpen(true)}
                                className='p-2.5 sm:p-3.5 md:p-2.5 lg:p-3.5 font-bold text-base sm:text-xl md:text-base lf:text-xl dark:text-black dark:bg-[#c9b8f8] bg-[#e6ddff] rounded-full'>
                                <TbListDetails />
                            </button>

                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <button
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content="Open Live"
                                    className='p-2.5 sm:p-3.5 md:p-2.5 lg:p-3.5 font-bold text-base sm:text-xl md:text-base lf:text-xl dark:text-black dark:bg-[#c9b8f8] bg-[#e6ddff] rounded-full'>
                                    <BsArrowUpRight />
                                </button>
                            </a>

                            <Tooltip
                                id="my-tooltip"
                                place="top"
                                effect="solid"
                                className="dark:!bg-[#946ffa] !bg-[#e1d7fd] dark:!text-white !text-black !text-xs !px-2 !py-1 !rounded-md !rotate-[1deg]"
                            />
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex-1 w-full md:w-1/2 max-w-lg flex justify-center order-1 md:order-2">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            onSlideChange={handleSlideChange}
                            onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
                        >
                            {works.map((_, i) => (
                                <SwiperSlide key={i}>
                                    <div className='w-full sm:h-full relative group flex justify-center items-center'>
                                        <img src={project.image} alt="" className='object-cover bg-cover opacity-90 h-[300px] w-full' />
                                    </div>
                                    <div className='flex items-center justify-between w-full z-20'>
                                        {/* Previous button - hidden on first project */}
                                        {project.id > 1 && (
                                            <button className='absolute left-0 top-[calc(50%-12px)] sm:top-[calc(50%-20px)] md:top-[calc(50%-16px)] lg:top-[calc(50%-20px)] lg:p-3 md:p-2.5 sm:p-3 p-2 font-bold text-lg sm:text-xl md:text-base lg:text-xl bg-[#1670ff] hover:bg-[#1467e0] text-white transition-all duration-300 shadow-lg' onClick={() => swiper?.slidePrev()}>
                                                <PiCaretLeftBold />
                                            </button>
                                        )}
                                        {/* Next button - hidden on last project */}
                                        {project.id < works.length && (
                                            <button className='absolute right-0 top-[calc(50%-12px)] sm:top-[calc(50%-20px)] md:top-[calc(50%-16px)] lg:top-[calc(50%-20px)] lg:p-3 md:p-2.5 sm:p-3 p-2 font-bold text-lg sm:text-xl md:text-base lg:text-xl bg-[#1670ff] hover:bg-[#1467e0] text-white transition-all duration-300 shadow-lg' onClick={() => swiper?.slideNext()}>
                                                <PiCaretRightBold />
                                            </button>
                                        )}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </motion.div>

            {/* 🪄 Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        ref={modalRef}
                        className="fixed left-[7.5%] top-[16%] sm:left-[14%] w-[85%] max-w-sm h-auto dark:bg-[#1d232a] bg-white z-30 p-4 sm:p-8 rounded-xl shadow-2xl border border-[#cfc5ff] dark:border-[#ad9dff]"
                    >
                        <div className="mt-2 flex items-center justify-between">
                            <div className='flex items-center gap-1 sm:gap-1.5'>
                                <img src={project.webLogo} alt="" className='w-6 sm:w-10' />
                                <h2 className="text-2xl sm:text-3xl font-bold dark:text-white text-gray-800">{project.title}</h2>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-black text-sm font-bold bg-[#cfc5ff] p-2 rounded-full hover:bg-[#dccfff] transition-all duration-500"
                            >
                                <MdOutlineClose />
                            </button>
                        </div>
                        <img src={project.image} alt="" className='mt-2 max-h-20 w-36' />
                        <div className="mt-3 text-sm text-gray-700 font-mono space-y-1">

                            <div
                                className='flex flex-col'>
                                <h3 onMouseEnter={() => gsap.to('#cursor', { scale: 6, duration: 0.4 })}
                                    onMouseLeave={() => gsap.to('#cursor', { scale: 1, duration: 0.4 })} className='dark:text-gray-100 text-[13px] sm:text-base font-bold'>🔥Development Hurdles</h3>
                                <p onMouseEnter={() => gsap.to('#cursor', { scale: 6, duration: 0.4 })}
                                    onMouseLeave={() => gsap.to('#cursor', { scale: 1, duration: 0.4 })}
                                    className='dark:text-gray-200 text-[11px] sm:text-sm mt-[2px] leading-3 sm:leading-3.5'>{project.challenge}</p></div>
                            <div className='flex flex-col'>
                                <h3 onMouseEnter={() => gsap.to('#cursor', { scale: 6, duration: 0.4 })}
                                    onMouseLeave={() => gsap.to('#cursor', { scale: 1, duration: 0.4 })}
                                    className='dark:text-gray-100 text-[13px] sm:text-base font-bold'>🌟What’s Cooking Next? </h3>
                                <p onMouseEnter={() => gsap.to('#cursor', { scale: 6, duration: 0.4 })}
                                    onMouseLeave={() => gsap.to('#cursor', { scale: 1, duration: 0.4 })}
                                    className='dark:text-gray-200 text-[11px] sm:text-sm mt-[2px] leading-3 sm:leading-3.5'>{project.future}</p></div>
                            <div className='flex flex-col'>
                                <h3 onMouseEnter={() => gsap.to('#cursor', { scale: 6, duration: 0.4 })}
                                    onMouseLeave={() => gsap.to('#cursor', { scale: 1, duration: 0.4 })}
                                    className='dark:text-gray-100 text-[13px] sm:text-base font-bold'>🔧Tools Used</h3>
                                <ul className='flex flex-wrap sm:flex-nowrap items-center sm:gap-2 gap-1.5 mt-[2px]'>
                                    {project.stack.map((item, index) => renderStackItem(item, index))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-3 sm:mt-4 flex justify-end gap-2">
                            <a href={project.client} target="_blank" rel="noopener noreferrer" className='relative group overflow-hidden rounded-full'>
                                {/* Animated background */}
                                <div className='absolute inset-0 bg-amber-500 rounded-full -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-10'></div>
                                <button className='flex py-2 px-2 sm:px-3 font-normal text-[10px] sm:text-xs text-black dark:bg-[#cfc5ff] bg-[#e6ddff] rounded-full transition-all duration-200'>
                                    <span className='flex items-center gap-1 sm:gap-2 z-20'><BsGithub />Client repo</span>
                                </button>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className='relative group overflow-hidden rounded-full'>
                                {/* Animated background */}
                                <div className='absolute inset-0 bg-amber-500 rounded-full -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-10'></div>
                                <button className='flex py-2 px-2 sm:px-3 font-normal text-[10px] sm:text-xs text-black dark:bg-[#cfc5ff] bg-[#e6ddff] rounded-full transition-all duration-200'>
                                    <span className='flex items-center gap-1 sm:gap-2 z-20'> <BsGithub />Server repo</span>
                                </button>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Container>
    </>
};

export default Contact;