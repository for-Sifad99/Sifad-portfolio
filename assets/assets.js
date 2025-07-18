import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import html from './techs/html5.png';
import css from './techs/css3.png';
import tailwind from './techs/tailwindcss.png';
import js from './techs/javascript.png';
import react from './techs/react.png';
import node from './techs/nodejs.png';
import express from './techs/express.png';
import mongodb from './techs/mongodb.png';
import firebase from './techs/firebase.png';
import git from './techs/git.png';
import vscode from './techs/visual.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import Shelfy from '../assets/WorksImg/Shelfy.png';
import Cooksy from '../assets/WorksImg/Cooksy.png';
import JobTrack from '../assets/WorksImg/JobTrack.png';
import CooksyLogo from '../assets/worksImg/CooksyLogo.png';
import ShelfyLogo from '../assets/worksImg/ShelfyLogo.png';
import JobTrackLogo from '../assets/worksImg/JobTrackLogo.png';
import {
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiFirebase,
    SiGit,
    SiVscodium,
} from 'react-icons/si';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const works = [
    {
        id: 1,
        title: "Cooksy",
        webLogo: CooksyLogo,
        image: Cooksy,
        overview:
            "Cooksy lets food lovers explore, add, and share recipes with a clean, real-time interface designed for home cooks and enthusiasts.",
        challenge:
            "Managing live updates and syncing likes in real-time with Firebase was challenging.",
        future:
            "Plans to add video tutorials, meal planning, and smart shopping lists for easier cooking.",
        stack: [html, css, tailwind, js, react, express, mongodb, firebase],
        live: "https://teal-biscochitos-d75707.netlify.app/",
        client: "https://github.com/for-Sifad99/Coocsy?tab=readme-ov-file",
    },
    {
        id: 2,
        title: "Shelfy",
        webLogo: ShelfyLogo,
        image: Shelfy,
        overview:
            "Shelfy helps schools manage book catalogs, borrowing, and returns with an intuitive, responsive design.",
        challenge:
            "Creating smooth, dynamic animations using Framer Motion without performance drops was tough.",
        future:
            "Upcoming features include barcode scanning, overdue alerts, and reading progress reports.",
        stack: [html, css, tailwind, js, react, express, mongodb, firebase],
        live: "https://shelfybook.netlify.app/",
        client: "https://github.com/for-Sifad99/Shelfy?tab=readme-ov-file",
    },
    {
        id: 3,
        title: "Job Track",
        webLogo: JobTrackLogo,
        image: JobTrack,
        overview:
            "Job Track connects job seekers with opportunities through a sleek UI and secure Firebase authentication.",
        challenge:
            "Building secure private routes and managing dynamic user sessions was challenging.",
        future:
            "Plans to add a resume builder, AI-powered job suggestions, and employer dashboards.",
        stack: [html, css, tailwind, js, react, firebase],
        live: "https://hello-job-auth-55f6e.web.app/",
        client: "https://github.com/for-Sifad99/Job-Track?tab=readme-ov-file",
    }
];

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, Tailwind, JavaScript, React Js, Node Js, MongoDB.' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Diploma in Computer Science, currently studying at college.' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built 10+ projects with clean code and responsive design.' }
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
