import React from "react";

const Projects = () => {
  const projects = [
    { 
      title: "Events Planner", 
      bg: "bg-gradient-to-br from-green-600 to-green-800",
      tech: "MERN Stack"
    },
    { 
      title: "Job Portal", 
      bg: "bg-gradient-to-br from-blue-600 to-blue-800",
      tech: "React, Node.js"
    },
    { 
      title: "WeatherApp", 
      bg: "bg-gradient-to-br from-red-600 to-red-800",
      tech: "React, API Integration"
    },
    { 
      title: "Furni", 
      bg: "bg-gradient-to-br from-amber-600 to-amber-800",
      tech: "E-commerce Solution"
    },
  ];

  return (
    <div className="bg-gray-900 py-16 px-4">
      <h1 className="text-4xl font-bold text-white pb-4 border-b-2 border-amber-500 mb-12">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`${project.bg} rounded-xl p-6 h-64 flex flex-col justify-between transform hover:scale-105 transition-transform shadow-xl`}
          >
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-gray-200">{project.tech}</p>
            <button className="mt-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white py-2 px-4 rounded-lg transition-colors">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;