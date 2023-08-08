import React from 'react';

const PortfolioTypes = () => {
  const projectTypes = [
    {
      title: "Single-page applications (SPAs)",
      description: "Create modern, responsive, and dynamic single-page applications using technologies like React, Angular, or Vue.js. Showcase your ability to build interactive user interfaces with smooth transitions and animations.",
    },
    {
      title: "E-commerce websites",
      description: "Build e-commerce websites with features like product listings, shopping carts, and checkout processes. Highlight your skills in handling data, managing states, and implementing payment gateways.",
    },
    {
      title: "Portfolio websites",
      description: "Your own portfolio website can be an excellent example of your frontend development skills. Make it visually appealing, mobile-friendly, and showcase your projects, skills, and resume.",
    },
    {
      title: "Landing pages",
      description: "Create captivating landing pages with eye-catching designs and clear call-to-action buttons. Showcase your ability to create a strong first impression and effectively communicate a message.",
    },
    {
      title: "Web applications",
      description: "Develop web applications that solve real-world problems. It could be a task manager, note-taking app, weather app, or any other application that provides value to users.",
    },
    {
      title: "Interactive maps",
      description: "Build interactive maps using libraries like Mapbox or Leaflet. Show your ability to work with geolocation data and implement map features like markers, popups, and tooltips.",
    },
    {
      title: "API integration",
      description: "Demonstrate your ability to work with APIs by building projects that fetch and display data from external APIs. For example, you could create a weather app that retrieves weather data from a weather API.",
    },
    {
      title: "Responsive designs",
      description: "Showcase your skills in creating responsive web designs that adapt to various screen sizes, from desktops to mobile devices.",
    },
    {
      title: "UI component libraries",
      description: "If you have created reusable UI component libraries, showcase them as standalone projects. This demonstrates your ability to create modular and scalable components.",
    },
    {
      title: "Game development",
      description: "If you have an interest in game development, create web-based games using HTML5, CSS, and JavaScript. Showcase your creativity and problem-solving skills in game design and mechanics.",
    },
  ];

  return (
    <div className="portfolio-types px-4 py-8 md:px-16">
      <h2 className="text-3xl font-bold mb-6">Types of Projects for Your Portfolio</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projectTypes.map((projectType, index) => (
          <div key={index} className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-3">{projectType.title}</h3>
            <p className="text-gray-700">{projectType.description}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-gray-700">
        When selecting projects for your portfolio, focus on quality over quantity. Choose projects that highlight different aspects of your frontend development skills and technologies. Ensure that your portfolio is well-organized, visually appealing, and provides clear descriptions of each project and your role in it.
      </p>
    </div>
  );
};

export default PortfolioTypes;
