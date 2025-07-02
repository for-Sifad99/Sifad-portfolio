import React from 'react';
import glitch from '../../../assets/glitch.png';

const Contact = () => {
    return (
        <div id='contact' className="px-[12%] md:mb-30 sm:mb-26 mb-24 scroll-mt-10">
            <h4 className='text-center sm:mb-2 text-lg font-ovo'>Ping</h4>
            <h2 className='text-center sm:text-5xl text-4xl font-medium font-ovo'>Contact</h2>

            <div className='my-8 sm:my-10 md:my-12 lg:my-16 flex flex-col md:flex-row items-center justify-center font-mono'>
            {/* Left - Form */}
                <div className="w-full md:w-1/2 max-w-md space-y-4 order-2 md:order-1">
                <p className="flex sm:items-center gap-1 text-gray-600 sm:mb-6 mb-4 sm:text-sm text-xs font-semibold">
                        <img className='w-12 sm:block hidden' src='/portLogo.png' alt="" />  We'd love to hear from you! Fill out the form and we’ll be in touch soon.
                </p>

                <form className="space-y-4">
                    <div>
                        <label className="text-sm text-gray-700">Full Name</label>
                        <input
                            type="text"
                            placeholder="Your name"
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            placeholder="+880 1XXXXXXXXX"
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Get in Touch
                    </button>
                </form>
            </div>

            {/* Right - Image */}
                <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center order-1 md:order-2">
                <img
                        src={glitch}
                    alt="Contact Illustration"
                        className="rounded-xl shadow-lg w-[250px] sm:max-w-xs md:max-w-md"
                />
            </div>
            </div>
        </div>
    );
};

export default Contact;
