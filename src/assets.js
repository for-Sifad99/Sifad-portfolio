import html from '../assets/techs/html5.png';
import css from '../assets/techs/css3.png';
import tailwind from '../assets/techs/tailwindcss.png';
import js from '../assets/techs/javascript.png';
import react from '../assets/techs/react.png';
import node from '../assets/techs/nodejs.png';
import express from '../assets/techs/express.png';
import mongodb from '../assets/techs/mongodb.png';
import firebase from '../assets//techs/firebase.png';
import git from '../assets/techs/git.png';
import vscode from '../assets/techs/visual.png';
import RideXLogo from '../assets/WorksImg/ridexLogo.webp';
import RideXBanner from '../assets/WorksImg/RideXBanner.png';
import echonowLogo from '../assets/WorksImg/echonowLogo.png';
import echonowBanner from '../assets/WorksImg/echonowBanner.png';
import ShelfyLogo from '../assets/worksImg/ShelfyLogo.png';
import shelfyBanner from '../assets/WorksImg/shelfyBanner.png';
import {
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiSocketdotio,
    SiGooglegemini,
    SiFirebase,
    SiGit,
    SiVscodium,
} from 'react-icons/si';

import { RiProjectorFill } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa6";
import { IoLanguageOutline } from "react-icons/io5";

export const works = [
    {
  id: 1,
  title: "RideX (TEAM)",
  webLogo: RideXLogo,
  image: RideXBanner,
  overview:
    "RideX is a smart, AI-assisted ride-sharing platform that connects passengers, riders, and admins with real-time tracking, role-based dashboards, and a modern user experience.",
  challenge:
    "Building real-time ride updates, live location tracking, and syncing data across passengers, riders, and admins using Socket.IO was one of the most complex parts.",
  future:
    "Upcoming improvements include SMS alerts, advanced analytics, multi-provider payment gateway, machine-learning based ride predictions, and deeper AI integration.",
   stack: [SiNextdotjs, tailwind, js, react, express, mongodb, SiSocketdotio, SiGooglegemini],
  live: "https://ridex-ride-sharing.vercel.app/",
        client: "https://github.com/rubel6610/RideX-Frontend",
        server: "https://github.com/rubel6610/ridex-backend",
    },
    {
        id: 2,
        title: "EchoNow",
        webLogo: echonowLogo,
        image: echonowBanner,
       overview:
    "EchoNow is a modern news aggregator platform featuring premium content, subscriptions, admin controls, and real-time article management with Firebase authentication and a full Express.js + MongoDB backend.",
  challenge:
    "Building a secure role-based dashboard, handling article approval workflows, and integrating Stripe payments with Firebase token protection were the main challenges.",
  future:
    "Future plans include AI-powered article recommendations, multi-language support, mobile apps, advanced search, social sharing features, and enhanced analytics.",
        stack: [html, css, tailwind, js, react, express, mongodb, firebase],
        live: "https://echonow.netlify.app/",
        client: "https://github.com/for-Sifad99/Echonow-client",
        server: "https://github.com/for-Sifad99/Echonow-server",
    },
    {
        id: 3,
              title: "EchoNow",
        webLogo: ShelfyLogo,
        image: shelfyBanner,
      overview:
    "ShelfyBook is a full-stack library management system built with React, Firebase, and MongoDB. It handles book inventory, user accounts, borrowing, comments, and ratings with a secure and responsive interface.",
  challenge:
    "Designing a smooth borrowing and returning flow, syncing book availability in real time, and maintaining role-based access for users and admins were the main challenges.",
  future:
    "Future plans include smarter recommendations, a mobile app, advanced analytics, multilingual support, and improved social features like replies and discussions.",
        stack: [html, css, tailwind, js, react, express, mongodb, firebase],
        live: "https://shelfybook.netlify.app/",
        client: "https://github.com/for-Sifad99/Shelfy-client",
        server: "https://github.com/for-Sifad99/Shelfy-server",
    }
];

export const infoList = [
    {
        icon: IoLanguageOutline,
        title: 'Languages',
        description: 'HTML, CSS, Tailwind, JavaScript, React Js, Node Js, MongoDB.'
    },
    {
        icon: FaGraduationCap,
        title: 'Education',
        description: 'Diploma in Computer Science, currently studying at college.'
    },
    {
        icon: RiProjectorFill,
        title: 'Projects',
        description: 'Built 10+ projects with clean code and responsive design.'
    }
];

export const techs = [
    {
        title: 'Frontend',
        items: [
            {
                img: html,
                title: 'HTML',
                icon: SiHtml5,
                description: 'Standard markup language for structuring and presenting content across web browsers and mobile devices.'
            },
            {
                img: css,
                title: 'CSS',
                icon: SiCss3,
                description: 'Style sheet language used to design and style websites, layouts, animations, and responsive elements.'
            },
            {
                img: tailwind,
                title: 'Tailwind',
                icon: SiTailwindcss,
                description: 'A utility-first CSS framework used for fast, responsive styling without writing custom styles manually.'
            },
            {
                img: js,
                title: 'JavaSpt',
                icon: SiJavascript,
                description: 'A powerful programming language for dynamic, interactive web applications and browser-based functionality.'
            },
            {
                img: react,
                title: 'React',
                icon: SiReact,
                description: 'JavaScript library for building fast, modular user interfaces with reusable components and virtual DOM.'
            },
        ]
    },
    {
        title: 'Backend',
        items: [
            {
                img: node,
                title: 'Node.js',
                icon: SiNodedotjs,
                description: 'JavaScript runtime built on Chrome’s V8 engine to build scalable, networked, server-side applications.'
            },
            {
                img: express,
                title: 'Express',
                icon: SiExpress,
                description: 'Minimalist Node.js web framework for building fast, scalable APIs and handling server-side routing.'
            },
            {
                img: mongodb,
                title: 'MongoDB',
                icon: SiMongodb,
                description: 'Document-oriented NoSQL database for flexible, scalable storage of data in JSON-like documents.'
            },
            {
                img: firebase,
                title: 'Firebase',
                icon: SiFirebase,
                description: 'Comprehensive app development platform with authentication, hosting, and real-time database support.'
            },
        ]
    },
    {
        title: 'Tools',
        items: [
            {
                img: git,
                title: 'Git',
                icon: SiGit,
                description: 'Distributed version control system for source code tracking, collaboration, and efficient project workflows.'
            },
            {
                img: vscode,
                title: 'VS',
                icon: SiVscodium,
                description: 'Lightweight, powerful code editor with debugging, extensions, and Git support for development efficiency.'
            },
        ]
    }
];
