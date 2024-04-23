import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = ({ darkMode, toggleDarkMode }) => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home',
      label: 'Home',
    },
    {
      id: 2,
      link: 'about',
      label: 'About',
    },
    {
      id: 3,
      link: 'portfolio',
      label: 'Portfolio',
    },
    {
      id: 4,
      link: 'experience',
      label: 'Experience',
    },
    {
      id: 5,
      link: 'contact',
      label: 'Contact',
    },
  ];

  return (
    <div
      className={`flex justify-between items-center w-full h-20 text-white fixed bg-[#000000ad] px-7 z-10 ${
        darkMode ? 'bg-black' : ''
      }`}
    >
      <h1 className='font-bold text-5xl'>
        <span className='text-green-400'>E</span>
        <span>dd</span>
        <span className='text-green-400'>ie</span>
      </h1>

      <ul className='hidden md:flex'>
        {links.map((link) => (
          <li
            key={link.id}
            className='px-4 py-2 cursor-pointer text-white hover:text-gray-300 hover:underline transition-colors duration-300'
          >
            <Link to={link.link} smooth duration={500}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-50 text-gray-500 md:hidden'
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className=' -z-50 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
          {links.map((link) => (
            <li key={link.id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
              <Link onClick={() => setNav(!nav)} to={link.link} smooth duration={500}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
