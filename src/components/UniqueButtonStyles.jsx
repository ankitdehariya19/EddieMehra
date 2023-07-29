import React from 'react';

const UniqueButtonStyles = () => {
  const buttonStyles = {
    position: 'relative',
    cursor: 'pointer',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '600',
    letterSpacing: '1px',
    border: 'none',
    padding: '14px 32px',
    background: '#fff',
    color: '#262626',
    fontSize: '20px',
    textTransform: 'uppercase',
    margin: '0 30px',
  };

  const pseudoElementStyles = {
    content: "''",
    position: 'absolute',
    width: '30px',
    height: '30px',
    top: '-10px',
    left: '-10px',
    borderTop: '3px solid #fff',
    borderLeft: '3px solid #fff',
    transition: 'all 0.5s',
  };

  const handleHover = (event) => {
    event.target.style.backgroundColor = '#fff';
    event.target.style.color = '#007BFF';
    event.target.style.before = { ...pseudoElementStyles };
    event.target.style.after = {
      ...pseudoElementStyles,
      bottom: '-10px',
      right: '-10px',
      borderBottom: '3px solid #fff',
      borderRight: '3px solid #fff',
    };
  };

  const handleMouseLeave = (event) => {
    event.target.style.backgroundColor = 'transparent';
    event.target.style.color = '#262626';
    event.target.style.before = null;
    event.target.style.after = null;
  };

  return (
    <div className="wrapper">
      <button
        className="btn"
        style={buttonStyles}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        button one
      </button>
    </div>
  );
};

export default UniqueButtonStyles;
