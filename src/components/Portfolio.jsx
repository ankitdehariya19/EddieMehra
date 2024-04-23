import React from 'react';
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
    },
    {
      id: 2,
      src: colorsearchtool,
      demoLink: 'https://color-search-tool.vercel.app/',
      codeLink: 'https://github.com/ankitdehariya19/Color-Search-Tool',
    },
    {
      id: 3,
      src: DashboardChart,
      demoLink: 'https://blackcoffer-beta.vercel.app/',
      codeLink: 'https://github.com/ankitdehariya19/Blackcoffer',
    },
    {
      id: 5,
      src: DashboardTable,
      demoLink: 'https://k-rite-ten.vercel.app/products/ProductsTable',
      codeLink: 'https://github.com/ankitdehariya19/K-RITE',
    },
    {
      id: 6,
      src: DarkMod,
      demoLink: 'https://cryptonet-technologies.vercel.app/',
      codeLink: 'https://github.com/ankitdehariya19/cryptonet-technologies',
    },
    {
      id: 7,
      src: BookMyStay,
      demoLink: 'https://bookmystay-neon.vercel.app/',
      codeLink: 'https://github.com/ankitdehariya19/BookMyStay',
    },
    {
      id: 8,
      src: DailyTasks,
      demoLink: 'https://daily-tasks-bay.vercel.app/',
      codeLink: 'https://github.com/ankitdehariya19/DailyTasks',
    },
    {
      id: 9,
      src: navbar,
      demoLink: 'https://education-two-liard.vercel.app/',
      codeLink: 'https://github.com/ankitdehariya19/education',
    },
    {
      id: 10,
      src: InterviewQuestions,
      demoLink: 'https://interview-questions-seven.vercel.app/',
      codeLink: 'https://github.com/ankitdehariya19/InterviewQuestions',
    },
  ];

  const openLinkInNewTab = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div
      name="portfolio"
      className={`w-full text-white min-h-screen ${
        darkMode ? 'bg-gradient-to-b from-black to-gray-800 text-white' : 'bg-white text-slate-800 '
      }`}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mt-40 mb-10">
          <p
            className={`text-4xl font-bold border-b-4 ${
              darkMode ? 'border-white ' : 'border-gray-500 text-slate-800'
            } p-2 inline`}
          >
            Portfolio
          </p>
          <p
            className={` py-6 ${
              darkMode ? 'text-white ' : ' text-slate-800'
            } `}
          >
            These are the technologies I've worked with
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-0">
          {portfolios.map((portfolio) => (
            <div key={portfolio.id} className="shadow-md duration-200 hover:scale-105 shadow-gray-600 rounded-lg  ">
              <div className="flex justify-center">
                <div className="image-container  " style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img
                    src={portfolio.src}
                    alt=""
                    className={`rounded-md w-full h-full  hover:object-fill ${
                      darkMode ? 'filter brightness-75' : ''
                    }`}
                  />
                </div>
              </div>

              <div className="flex items-center justify-center ">
                <button
                  className={`w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}
                  onClick={() => openLinkInNewTab(portfolio.demoLink)}
                >
                  Demo
                </button>
                <button
                  className={`w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}
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
