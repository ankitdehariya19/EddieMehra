import React, { useState } from 'react';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // Import the Footer component

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <About darkMode={darkMode} />
      <Portfolio darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <SocialLinks darkMode={darkMode} />
      <Footer darkMode={darkMode} /> {/* Add the Footer component */}
    </div>
  );
}

export default App;
