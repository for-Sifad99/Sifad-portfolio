import React from 'react';
import photo from '../../../assets/myPhoto.png';
import { motion } from 'framer-motion';

const HeroImg = () => {
    return (
        <div className='w-full h-full z-50 flex justify-center items-center'>
            <div className='relative w-[250px] h-[250px] overflow-visible'>
                {/* Animated Circle Behind Image */}
                <motion.svg
                    className='absolute top-0 left-0 w-full h-full z-0'
                    fill='transparent'
                    viewBox='0 0 506 506'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke='#000'
                        strokeWidth='6'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        initial={{ strokeDasharray: '24 10 0 0' }}
                        animate={{
                            strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            repeatType: 'reverse'
                        }}
                    />
                </motion.svg>
                <div className='bg-black w-[300px] absolute bottom-0 left-0'></div>

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 1, duration: 0.4, ease: 'easeInOut' }
                    }}
                    className='absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-[4%] w-[230px] bg-[#d7d7dd] rounded-full z-10 '
                >
                    <img
                        src={photo}
                        alt="user photo"
                        className='object-contain w-full'
                    />
                    
                </motion.div>
            </div>
        </div>
    );
};

export default HeroImg;
