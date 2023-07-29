import React from 'react';
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import installNode from '../assets/portfolio/installNode.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';

const Portfolio = ({ darkMode, toggleDarkMode }) => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
    {
      id: 7, // Make sure to use unique IDs for each portfolio item
      src: arrayDestruct, // Use the correct file name for each image
    },
  ];

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
          <p        className={` py-6 ${
              darkMode ? 'text-white ' : ' text-slate-800'
            } `}>These are the technologies I've worked with</p>
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-0">
          {portfolios.map((portfolio) => (
            <div key={portfolio.id} className="shadow-md duration-200 hover:scale-105 shadow-gray-600 rounded-lg">
              <div className="flex justify-center">
                <img
                  src={portfolio.src}
                  alt=""
                  className={`rounded-md   w-full h-auto ${
                    darkMode ? 'filter brightness-75' : ''
                  }`}
                />
              </div>

              <div className="flex items-center justify-center">
                <button className={` w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Demo
                </button>
                <button className={` w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Code
                </button>
              </div>
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

export default Portfolio;
