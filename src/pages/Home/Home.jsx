import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Header/Navbar';
import Hero from '../../components/Hero/Hero';
import SideNav from '../../components/SideNav/SideNav';
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import Works from '../../components/Works/Works';
import Contact from '../../components/Contact/Contact';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipLoader } from 'react-spinners';

<ClipLoader color="#4fa94d" loading={true} size={80} />

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
                            <div className='relative w-32 h-32 rounded-full border-4 border-white border-t-[#0487af] animate-spin'>
                                <div className='absolute inset-0 flex items-center justify-center'></div>
                            </div>
                            <p className='flex text-[#4a86ed] text-[40px] font-bold mt-3 -mb-1'>Sifad
                                <img className='w-12' src='/portLogo.png' alt="" />
                            </p>
                            <h5 className='text-xs font-bold text-[#0487af]'>LOADING</h5>
                        </div>
               </motion.div>
                )}
            </AnimatePresence>

            {!isLoading && (
                <main>
                    <Navbar />
                    <Hero />
                    <About />
                    <Skills />
                    <Works />
                    <Contact />
                    <SideNav />
                </main>
            )}
        </>
    );
};

export default Home;
