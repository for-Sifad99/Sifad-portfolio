import React, { useRef, useState } from 'react';
import glitch from '../../../assets/glitch.jpg';
import Container from '../../pages/Shared/SpaceContainer/Container';
import gsap from 'gsap';
import emailjs from '@emailjs/browser';
import { GiClick } from "react-icons/gi";
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_gm9cy7m', 'template_xym7r76', form.current, {
                publicKey: 'HtcGxv--7wKNJ4vNd',
            })
            .then(() => {
                setIsSent(true);
                setTimeout(() => {
                    form.current.reset();
                    setIsSent(false);
                    toast.success('Done!');
                }, [3000]);
                setIsSent(true);
            },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <Container id={'contact'}>
            <h4 onMouseEnter={() => gsap.to('#cursor', { scale: 6, duration: 0.4 })}
                onMouseLeave={() => gsap.to('#cursor', { scale: 1, duration: 0.4 })} className='text-center sm:mb-2 text-lg dosis-font'>Ping</h4>
            <h2 className='text-center sm:text-5xl text-4xl font-medium font-ovo'>Contact</h2>
            <div className='my-8 sm:mt-10 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-max md:mt-12 lg:mt-16 md:gap-8 lg:gap-12 xl:gap-16 flex flex-col md:flex-row items-center justify-center mx-auto font-mono'>
                {/* Left - Form */}
                <div className="w-full md:w-1/2 max-w-md space-y-4 order-2 md:order-1">
                    <p onMouseEnter={() => gsap.to('#cursor', { scale: 6, duration: 0.4 })}
                        onMouseLeave={() => gsap.to('#cursor', { scale: 1, duration: 0.4 })} className="flex items-center gap-1 dark:text-gray-200 text-gray-600 mb-4 text-xs sm:text-lg md:text-sm lg:text-base xl:text-lg sm:leading-6 md:leading-4 xl:leading-6 font-semibold">
                        <img className='hidden sm:block w-12 md:w-8 lg:w-10 xl:w-12 -ml-2.5 md:-ml-1.5 lg:-ml-2 xl:-ml-2.5' src='/portLogo.png' alt="" />  We'd love to hear from you! Fill out the form and we’ll be in touch soon.
                    </p>

                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="space-y-4 dark:text-gray-300 text-gray-700"
                    >
                        <div>
                            <label className="text-sm">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Your name"
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="text-sm">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="you@example.com"
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="text-sm">Phone Number</label>
                            <input
                                name="tel"
                                type="tel"
                                required
                                placeholder="+880 1XXXXXXXXX"
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className='relative group overflow-hidden bg-blue-600 rounded-md'>
                            <div className='absolute inset-0 bg-amber-500 rounded-md -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-20'></div>

                            <button
                                type="submit"
                                className="flex justify-center items-center gap-2 w-full text-white hover:text-black font-semibold py-2 rounded-md transition duration-500 relative z-20"
                            >
                                Get in Touch {isSent ? <span className="loading loading-spinner loading-xs"></span> : <GiClick />}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right - Image */}
                <div className="relative w-full md:w-1/2 max-w-md mb-10 md:mb-0 flex justify-center order-1 md:order-2">
                    <img
                        src={glitch}
                        alt="Contact Illustration"
                        className="rounded-xl shadow-lg w-full"
                    />
                    <div onMouseEnter={() => gsap.to('#cursor', { scale: 6, duration: 0.4 })}
                        onMouseLeave={() => gsap.to('#cursor', { scale: 1, duration: 0.4 })} className='flex flex-col font-bold text-xs sm:text-xl md:text-base absolute top-[32%] left-[6%] sm:left-[10%] text-white'>
                        <p>Email: sifayed99@gmail.com</p>
                        <p className='sm:-mt-1'>Phone: 01409000956</p>
                    </div>
                </div>
            </div>
            <Toaster />
        </Container>
    );
};

export default Contact;
