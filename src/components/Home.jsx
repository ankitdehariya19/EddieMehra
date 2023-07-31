import React, { useEffect, useState } from 'react';
import ParticlesBg from 'particles-bg';
import heroImg from '../assets/hero.jpg';
import Button from './Button';
import { Link } from 'react-scroll';



const Home = ({ darkMode, toggleDarkMode }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      name="home"
      className={`flex h-screen w-full pl-5 ${darkMode ? 'dark-mode' : ''}`}
      style={{ backgroundColor: `var(--bg-color)`, color: `var(--text-color)` }}
    >
      {isDesktop ? (
        <ParticlesBg type="cobweb" bg={true} />
      ) : (
        <ParticlesBg type="color" bg={true} num={5} velocity={0.1} />
      )}
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className=' mt-4 text-4xl sm:text-7xl font-bold'>
            I'm a Frontend Developer
          </h2>
          <p className='py-4 max-w-md'>
            Hello, I'm Ankit Dehariya, a passionate web developer with expertise in HTML,
            CSS, SCSS, Tailwind CSS, Bootstrap, JavaScript, React.js,
            Next.js, and GitHub. I'm excited to showcase my portfolio website,
            where you can explore my projects, skills, and experiences.
          </p>
          <Link to="portfolio" smooth={true} duration={500} offset={-70}>
            <Button text="Portfolio" darkMode={darkMode} />
          </Link>

        </div>
        <div>
          <img src={heroImg} alt='my profile' className='rounded-2xl mx-auto w-2/3 md:w-3/5'></img>
        </div>
      </div>
      <button
        className={`fixed bottom-4 right-4 text-sm ${darkMode ? 'bg-white text-gray-800' : 'bg-black text-white'
          } px-3 py-1 rounded-md`}
        onClick={toggleDarkMode}
      >
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default Home;
