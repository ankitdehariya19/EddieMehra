import React from 'react';
import './cssButtonAnimationStyles.css';

const Button = ({ text, darkMode, onClick, onReset }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }

    console.log('Button clicked'); 

    if (onReset) {
      onReset();
    }
  };

  return (
    <button
      className={`btn ${darkMode ? 'dark-mode' : ''}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
