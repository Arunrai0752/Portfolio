import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    { 
      title: "Two Souls Events Planner", 
      description: "Comprehensive event management system handling weddings, birthdays, engagements with hall booking, catering, decoration, music, and makeup services",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT Auth"],
      category: "fullstack",
      bg: "from-purple-600 to-purple-800",
      github: "https://github.com/Arunrai0752/Events-Planner",
      live: "#"
    },
    { 
      title: "MediVault", 
      description: "Healthcare platform connecting doctors and patients with medical records, prescriptions, appointment scheduling, and reminders via email/SMS",
      tech: ["MERN Stack", "Nodemailer"],
      category: "fullstack",
      bg: "from-teal-600 to-teal-800",
      github: "https://github.com/Arunrai0752/MediVault",
      live: "#"
    },
    { 
      title: "StoreBooks", 
      description: "Online marketplace for buying and selling books where users can upload, modify prices, and manage their book listings",
      tech: ["React", "Node.js", "MongoDB", "Cloudinary"],
      category: "fullstack",
      bg: "from-amber-600 to-amber-800",
      github: "https://github.com/Arunrai0752/React-Projects/tree/main/BooksStore",
      live: "#"
    },
    { 
      title: "Furni", 
      description: "E-commerce solution for furniture with cart functionality and payment integration",
      tech: ["HTML" , "CSS" ,"Bootstrap"],
      category: "frontend",
      bg: "from-orange-600 to-orange-800",
      github: "https://github.com/Arunrai0752/Furni",
      live: "#"
    },
    { 
      title: "Portfolio Website", 
      description: "Interactive personal portfolio showcasing skills, projects and contact information",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      category: "frontend",
      bg: "from-blue-600 to-blue-800",
      github: "https://github.com/Arunrai0752/Portfolio",
      live: "#"
    },
    { 
      title: "WeatherApp", 
      description: "Real-time weather application with 5-day forecast using OpenWeather API",
      tech: ["HTML", "CSS",  "API Integration"],
      category: "frontend",
      bg: "from-red-600 to-red-800",
      github: "https://github.com/Arunrai0752/WeatherApp",
      live: "#"
    },
    { 
      title: "FoodMart Clone", 
      description: "Food delivery app clone with restaurant listings and menu browsing",
      tech: ["HTML", "CSS", "Bootstrap"],
      category: "frontend",
      bg: "from-green-600 to-green-800",
      github: "https://github.com/Arunrai0752/FoodMart",
      live: "#"
    },
    { 
      title: "Todo List", 
      description: "Task management application with CRUD operations and local storage",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      category: "frontend",
      bg: "from-indigo-600 to-indigo-800",
      github: "https://github.com/Arunrai0752/To_Do_List-",
      live: "#"
    },
    { 
      title: "Currency Converter", 
      description: "Real-time currency conversion tool using exchange rate API",
      tech: ["HTML" ,"CSS", "JavaScript", "API Integration", "Bootstrap"],
      category: "frontend",
      bg: "from-pink-600 to-pink-800",
      github: "https://github.com/Arunrai0752/Currency_Converter_ArunXrai",
      live: "#"
    },
    { 
      title: "Joke App", 
      description: "Application that fetches and displays random jokes from an API",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "API Integration"],
      category: "frontend",
      bg: "from-yellow-600 to-yellow-800",
      github: "https://github.com/Arunrai0752/Joke_api",
      live: "#"
    },
    { 
      title: "Calculator", 
      description: "Interactive calculator with basic arithmetic operations",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      bg: "from-gray-600 to-gray-800",
      github: "https://github.com/Arunrai0752/CalculaterArunXRai",
      live: "#"
    },
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="projects" className="bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-white pb-4 border-b-2 border-amber-500 mb-12"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {["all", "fullstack", "frontend"].map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full capitalize ${
                activeTab === tab 
                  ? "bg-amber-500 text-white" 
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br ${project.bg} rounded-xl overflow-hidden shadow-xl`}
            >
              <div className="p-6 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    className="flex items-center text-white hover:text-amber-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub className="mr-2" /> Code
                  </a>
                
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;