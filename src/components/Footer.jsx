import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`bg-${darkMode ? 'gray-900' : 'gray-100'} text-${darkMode ? 'white' : 'black'} p-4`}
    >
      <div className="flex justify-center items-center">
        <a
          href="https://github.com/ankitdehariya19" 
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/ankit-dehariya-27571b271"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <FaLinkedin size={24} />
        </a>
        <a href="mailto: mr.ankitdehariya000@gmail.com" className="mr-4"> 
          <HiOutlineMail size={24} />
        </a>
      </div>
      <p className="mt-2 text-center">
        Unlocking the potential of the web through stunning frontend craftsmanship. &copy; {new Date().getFullYear()} Ankit Dehariya. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
