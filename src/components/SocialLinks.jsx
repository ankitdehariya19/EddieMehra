import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = ({ darkMode }) => {
  const links = [
    {
      id: 1,
      chid: (
        <>
          LinkedIn <FaLinkedin size={20} />
        </>
      ),
      href: 'https://linkedin.com/in/ankit-dehariya-27571b271',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      chid: (
        <>
          GitHub <FaGithub size={20} />
        </>
      ),
      href: 'https://github.com/ankitdehariya19', 
    },
    {
      id: 3,
      chid: (
        <>
          Mail <HiOutlineMail size={20} />
        </>
      ),
      href: 'mailto: mr.ankitdehariya000@gmail.com', 
    },
    {
      id: 4,
      chid: (
        <>
          Resume <BsFillPersonLinesFill size={20} />
        </>
      ),
      href: '/resume.pdf', 
      style: 'rounded-br-md',
      download: true,
      target: '_blank',
    },
  ];

  return (
    <div className={`hidden lg:flex flex-col top-[45%] left-0 fixed pl-4 ${darkMode ? 'text-white' : 'text-black'}`}>
      <div>
        <ul className=''>
          {links.map((link) => (
            <li
              key={link.id}
              className={`flex justify-between items-center w-40 h-14 px-4 bg-gradient-to-r ${
                darkMode ? 'bg-white' : 'bg-black'
              } ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] ${link.style}`}
            >
              <a
                href={link.href}
                className={`flex justify-between items-center w-full ${darkMode ? 'text-black' : 'text-white'}`}
                download={link.download}
                target={link.target}
                rel='noreferrer'
              >
                {link.chid}
              </a>
            </li>
          ))}
          <div className={`group w-0.5 h-28 ${darkMode ? 'bg-white' : 'bg-black'} ml-6 mt-5`} />
        </ul>
      </div>
      <div className=''>
        <h3
          className={`group ml-6 rotate-90 origin-left transform hover:-rotate-12 duration-500 mt-4 fixed ${
            darkMode ? 'text-white' : 'text-black'
          }`}
        >
          Follow Me
        </h3>
      </div>
    </div>
  );
};

export default SocialLinks;
