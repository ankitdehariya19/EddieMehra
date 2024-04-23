const About = ({ darkMode, toggleDarkMode }) => {
  return (
    <div
      name="about"
      className={`w-full h-auto ${
        darkMode ? 'dark-mode' : ''
      }`}
      style={{ backgroundColor: `var(--bg-color)`, color: `var(--text-color)` }}
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className={`text-2xl lg:text-4xl font-bold inline ${
            darkMode ? 'border-b-4 border-white' : 'border-b-4 border-gray-500'
          }`}>
            About Me
          </p>
        </div>
        <p className={`text-lg sm:text-xl md:text-lg lg:text-xl xl:text-lg 2xl:text-xl mt-4 sm:mt-8`}>
          Hello, I'm Ankit Dehariya, a passionate Frontend Developer with a strong background in web development. I have expertise in HTML, CSS, SCSS, Tailwind CSS, Bootstrap, JavaScript, React.js, Next.js, and GitHub. My journey as a web developer began with a curiosity for creating captivating user interfaces and seamless user experiences.

          My fascination with web technologies led me to pursue a Bachelor's Degree in Computer Science Engineering, where I gained a solid foundation in software development principles. Throughout my academic journey, I actively engaged in various coding projects and internships to apply my knowledge in real-world scenarios.

          I thrive in a fast-paced and collaborative environment, where creativity and problem-solving skills are put to the test. As a Frontend Developer, I take pride in turning design concepts into functional and interactive websites that leave a lasting impression on users.

          One of the aspects that excites me the most about web development is its continuous evolution. I am dedicated to staying up-to-date with the latest trends and best practices in the industry, as it enables me to create cutting-edge web solutions.

          My portfolio showcases some of my most significant projects,
        </p>
        <p className={`text-lg sm:text-xl md:text-lg lg:text-xl xl:text-lg 2xl:text-xl mt-4 sm:mt-8`}>
        where I have applied my technical skills to create seamless and visually appealing user interfaces. I believe that a well-designed website can not only convey information but also evoke emotions and create memorable experiences.

Aside from web development, I enjoy collaborating with cross-functional teams, exploring new technologies, and contributing to open-source projects. I'm a firm believer in the power of teamwork and the impact it can have on achieving remarkable results.

When I'm not coding, you can find me exploring new hiking trails, reading books on technology and design, or experimenting with new recipes in the kitchen.

Thank you for visiting my portfolio website. I am thrilled to share my journey as a Frontend Developer and look forward to exploring new opportunities and challenges in the world of web development.

If you'd like to connect or learn more about my work, feel free to reach out through the contact details provided on this website. Let's create something extraordinary together!
        </p>
      </div>
    </div>
  );
};

export default About;
