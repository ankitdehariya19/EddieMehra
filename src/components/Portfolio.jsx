import React, { useState } from 'react';
import Mausam from '../assets/portfolio/Mausam.png';
import colorsearchtool from '../assets/portfolio/colorsearchtool.png';
import DashboardChart from '../assets/portfolio/DashboardChart.png';
import DashboardTable from '../assets/portfolio/DashboardTable.png';
import DarkMod from '../assets/portfolio/DarkMod.png';
import BookMyStay from '../assets/portfolio/BookMyStay.png';
import DailyTasks from '../assets/portfolio/DailyTasks.png';
import navbar from '../assets/portfolio/navbar.jpg';
import InterviewQuestions from '../assets/portfolio/InterviewQuestions.png';

const Portfolio = ({ darkMode, toggleDarkMode }) => {
  const portfolios = [
    {
      id: 1,
      src: Mausam,
      demoLink: 'https://mausom.vercel.app/',
      codeLink: 'https://github.com/ankitdehariya19/mausom',
      description: 'Mausam is a weather app that provides real-time weather information for your location.'
    },
    {
      id: 2,
      src: colorsearchtool,
      demoLink: 'https://color-search-tool.vercel.app/',
      codeLink: 'https://github.com/ankitdehariya19/Color-Search-Tool',
      description: 'Color Search Tool is a web app that allows you to search for colors and get their hex codes.'
    },
    {
      id: 3,
      src: DashboardChart,
      demoLink: 'https://blackcoffer-beta.vercel.app/',
      codeLink: 'https://github.com/ankitdehariya19/Blackcoffer',
      description: 'Blackcoffer is a data visualization dashboard for tracking company metrics.'
    },
    {
      id: 5,
      src: DashboardTable,
      demoLink: 'https://k-rite-ten.vercel.app/products/ProductsTable',
      codeLink: 'https://github.com/ankitdehariya19/K-RITE',
      description: 'K-RITE is an e-commerce platform for selling products.'
    },
    {
      id: 6,
      src: DarkMod,
      demoLink: 'https://cryptonet-technologies.vercel.app/',
      codeLink: 'https://github.com/ankitdehariya19/cryptonet-technologies',
      description: 'Cryptonet Technologies is a website for a tech company with a dark mode feature.'
    },
    {
      id: 7,
      src: BookMyStay,
      demoLink: 'https://bookmystay-neon.vercel.app/',
      codeLink: 'https://github.com/ankitdehariya19/BookMyStay',
      description: 'BookMyStay is a hotel booking platform for finding and reserving accommodations.'
    },
    {
      id: 8,
      src: DailyTasks,
      demoLink: 'https://daily-tasks-bay.vercel.app/',
      codeLink: 'https://github.com/ankitdehariya19/DailyTasks',
      description: 'Daily Tasks is a task management app for keeping track of your daily to-do list.'
    },
    {
      id: 9,
      src: navbar,
      demoLink: 'https://education-two-liard.vercel.app/',
      codeLink: 'https://github.com/ankitdehariya19/education',
      description: 'Education is a website for an educational institution with a responsive navigation bar.'
    },
    {
      id: 10,
      src: InterviewQuestions,
      demoLink: 'https://interview-questions-seven.vercel.app/',
      codeLink: 'https://github.com/ankitdehariya19/InterviewQuestions',
      description: 'Interview Questions is a platform for practicing coding interview questions and solutions.'
    },
  ];

  const openLinkInNewTab = (link) => {
    window.open(link, '_blank');
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div  name="portfolio" className={`w-full min-h-screen ${darkMode ? 'bg-gradient-to-b from-black to-gray-800 text-white' : 'bg-white text-slate-800'}`}>
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="mt-40 mb-10">
          <h1 className={`text-4xl font-bold border-b-4 ${darkMode ? 'border-white' : 'border-gray-500 text-slate-800'} p-2 inline`}>
            Portfolio
          </h1>
          <p className={`py-6 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
            Explore the technologies I've worked with
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-0 ">
          {portfolios.map((portfolio, index) => (
            <div
              key={portfolio.id}
              className="shadow-md duration-200 hover:scale-105 shadow-gray-600 rounded-lg relative border"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex justify-center p-1">
                <div className="image-container" style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img
                    src={portfolio.src}
                    alt={portfolio.description}
                    className={`rounded-md w-full h-full hover:object-fill ${darkMode ? 'filter brightness-75' : ''}`}
                  />
                </div>
              </div>

              <div className={`absolute bottom-20 left-0 right-0 mx-auto w-full bg-gray-800 bg-opacity-75 text-white p-4 rounded-t-lg transition-all duration-500 ${hoveredIndex === index ? 'translate-y-0' : 'translate-y-full opacity-0'}`}>
                <p className="text-center">{portfolio.description}</p>
              </div>

              <div className="flex items-center justify-center z-10">
                <button
                  className={`w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105  ${darkMode ? 'text-white' : 'text-gray-800'}`}
                  onClick={() => openLinkInNewTab(portfolio.demoLink)}
                >
                  Demo
                </button>
                <button
                  className={`w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ${darkMode ? 'text-white' : 'text-gray-800'}`}
                  onClick={() => openLinkInNewTab(portfolio.codeLink)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
