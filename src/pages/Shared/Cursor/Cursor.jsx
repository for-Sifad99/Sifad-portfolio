import React, { useEffect } from 'react';
import gsap from 'gsap';

const Cursor = () => {
    const handleMouseMove = (e) => {
        const {clientX, clientY} = e;
        gsap.to('#cursor', {
            x: clientX - 20 / 2,
            y: clientY - 20 / 2,
            duration: 1,
            delay: 0,
            ease: 'power4.out'
    })
    }
    useEffect(()=>{
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);
    return (
        <div
        id='cursor'
            className='hidden md:block fixed top-0 left-0 w-5 h-5 bg-white rounded-full z-40 mix-blend-difference pointer-events-none'> 
        </div>
    );
};

export default Cursor;