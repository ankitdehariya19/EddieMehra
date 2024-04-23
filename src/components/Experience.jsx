import React from 'react';
import html from '../assets/portfolio/html.png';
import css from '../assets/portfolio/css.png';
import javascript from '../assets/portfolio/javascript.png';
import react from '../assets/portfolio/react.png';
import nextjs from '../assets/portfolio/nextjs.png';
import github from '../assets/portfolio/github (2).png';
import tailwind from '../assets/portfolio/tailwind.png';
import scss from '../assets/portfolio/scss.png';
import bootstrap from '../assets/portfolio/bootstrap.png';

const Experience = ({ darkMode, toggleDarkMode }) => {
  const getCardClassName = (lightModeClass, darkModeClass) => {
    return darkMode ? darkModeClass : lightModeClass;
  };

  const techs = [
    {
        id: 1,
        src: html,
        title: "HTML",
        lightModeStyle: "shadow-orange-500",
        darkModeStyle: "shadow-orange-300",
      },
      {
        id: 2,
        src: css,
        title: "CSS",
        lightModeStyle: "shadow-blue-500",
        darkModeStyle: "shadow-blue-300",
      },
      {
        id: 3,
        src: javascript,
        title: "JAVASCRIPT",
        lightModeStyle: "shadow-yellow-500",
        darkModeStyle: "shadow-yellow-300", 
      },
      {
        id: 4,
        src: react,
        title: "ReactJS",
        lightModeStyle: "shadow-blue-600",
        darkModeStyle: "shadow-blue-400",
      },
      {
        id: 5,
        src: nextjs,
        title: "NextJs",
        lightModeStyle: "shadow-gray-500",
        darkModeStyle: "shadow-gray-600", 
      },
      {
        id: 6,
        src: tailwind,
        title: "TAILWIND",
        lightModeStyle: "shadow-sky-400",
        darkModeStyle: "shadow-sky-400", 
      },
      {
        id: 7,
        src: bootstrap,
        title: "Bootstrap",
        lightModeStyle: "shadow-purple-800",
        darkModeStyle: "shadow-purple-600", 
      },
      {
        id: 8,
        src: github,
        title: "Github",
        lightModeStyle: "shadow-gray-800",
        darkModeStyle: "shadow-gray-200", 
      },
      {
        id: 9,
        src: scss,
        title: "Scss",
        lightModeStyle: "shadow-pink-400",
        darkModeStyle: "shadow-pink-300",
      },
  ];

  return (
    <div
      name="experience"
      className={`bg-gradient-to-b ${
        darkMode ? 'from-gray-800 to-black text-white' : 'bg-white text-slate-800'
      } w-full h-full`}
    >
      <div className="max-w-screen-lg mx-auto py-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mt-40 mb-10">
          <p
            className={`text-4xl font-bold border-b-4 ${
              darkMode ? 'border-white ' : 'border-gray-500 text-slate-800'
            } p-2 inline`}
          >
            Experience
          </p>
          <p        className={` py-6 ${
              darkMode ? 'text-white ' : ' text-slate-800'
            } `}>These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map((tech) => (
            <div
              key={tech.id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${
                getCardClassName(tech.lightModeStyle, tech.darkModeStyle)
              }`}
            >
              <img src={tech.src} alt=" " className="w-20 mx-auto"></img>
              <p className={`mt-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{tech.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <button
        className={`fixed bottom-4 right-4 text-sm ${
          darkMode ? 'bg-white text-gray-800' : 'bg-black text-white'
        } px-3 py-1 rounded-md`}
        onClick={toggleDarkMode}
      >
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button> */}
    </div>
  );
};

export default Experience;
