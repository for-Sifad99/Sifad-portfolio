import React from 'react';
import Navbar from '../../components/Header/Navbar';
import Hero from '../../components/Hero/Hero';
import SideNav from '../../components/SideNav/SideNav';
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import Works from '../../components/Works/Works';

const Home = () => {
    return (
        <> 
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Works />
             <SideNav />
        </>
    );
};

export default Home;