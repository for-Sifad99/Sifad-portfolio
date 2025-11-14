import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../../components/Header/Navbar';
import SideNav from '../../components/Header/SideNav';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import Works from '../../components/Works/Works';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Cursor from '../Shared/Cursor/Cursor';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false),1200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        className="
                        fixed inset-0 bg-[#d3cdf7] flex flex-col items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className='font-mono flex flex-col items-center justify-center'>
                            <div className='relative w-20 h-20 sm:w-26 sm:h-26 md:w-32 md:h-32 rounded-full border-4 border-white border-t-[#0487af] animate-spin'>
                                <div className='absolute inset-0 flex items-center justify-center'></div>
                            </div>
                            <p className='flex items-center text-[#4a86ed] text-[28px] sm:text-[32px] md:text-[40px] font-bold mt-1 sm:mt-2 -mb-1 sm:-m-1.5'>Sifad
                                <img className='w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-11' src='/portLogo.png' alt="" />
                            </p>
                            <h5 className='text-[10px] sm:text-xs font-bold text-[#0487af]'>LOADING</h5>
                        </div>
               </motion.div>
                )}
            </AnimatePresence>

            {!isLoading && (
                <main className='dark:bg-[#1d232a] dark:text-white'>
                    <Cursor />
                    <Navbar />
                    <Hero />
                    <About />
                    <Skills />
                    <Works />
                    <Contact />
                    <Footer />
                    <SideNav />
                </main>
            )}
        </>
    );
};

export default Home;
