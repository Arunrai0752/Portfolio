import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";

// Placeholder images - replace with your actual project screenshots
import TwoSoulsImg from "../assets/Twosouls.png";
import MediVaultImg from "../assets/MedVault.png";
import StoreBooksImg from "../assets/BooksStore.png";
import FurniImg from "../assets/Furni.png";
import PortfolioImg from "../assets/PortFolio.png"; // Assuming this is your portfolio image
import WeatherAppImg from "../assets/Weather.png";
import FoodMartImg from "../assets/Foodmart.png";
import TodoImg from "../assets/To-DoList.png";
import CurrencyImg from "../assets/Currency.png";
import JokeImg from "../assets/Joke.png";
import CalculatorImg from "../assets/Calculator.png";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { 
      title: "Two Souls Events Planner", 
      description: "Comprehensive event management system handling weddings, birthdays, engagements with hall booking, catering, decoration, music, and makeup services",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT Auth"],
      category: "fullstack",
      bg: "from-purple-600 to-purple-800",
      github: "https://github.com/Arunrai0752/Events-Planner",
      live: "#",
      image: TwoSoulsImg
    },
    { 
      title: "MediVault", 
      description: "Healthcare platform connecting doctors and patients with medical records, prescriptions, appointment scheduling, and reminders via email/SMS",
      tech: ["MERN Stack", "Nodemailer"],
      category: "fullstack",
      bg: "from-teal-600 to-teal-800",
      github: "https://github.com/Arunrai0752/MediVault",
      live: "#",
      image: MediVaultImg
    },
    { 
      title: "StoreBooks", 
      description: "Online marketplace for buying and selling books where users can upload, modify prices, and manage their book listings",
      tech: ["React", "Node.js", "MongoDB", "Cloudinary"],
      category: "fullstack",
      bg: "from-amber-600 to-amber-800",
      github: "https://github.com/Arunrai0752/React-Projects/tree/main/BooksStore",
      live: "#",
      image: StoreBooksImg
    },
    { 
      title: "Furni", 
      description: "E-commerce solution for furniture with cart functionality and payment integration",
      tech: ["HTML", "CSS", "Bootstrap"],
      category: "frontend",
      bg: "from-orange-600 to-orange-800",
      github: "https://github.com/Arunrai0752/Furni",
      live: "#",
      image: FurniImg
    },
    { 
      title: "Portfolio Website", 
      description: "Interactive personal portfolio showcasing skills, projects and contact information",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      category: "frontend",
      bg: "from-blue-600 to-blue-800",
      github: "https://github.com/Arunrai0752/Portfolio",
      live: "#",
      image: PortfolioImg
    },
    { 
      title: "WeatherApp", 
      description: "Real-time weather application with 5-day forecast using OpenWeather API",
      tech: ["HTML", "CSS", "API Integration"],
      category: "frontend",
      bg: "from-red-600 to-red-800",
      github: "https://github.com/Arunrai0752/WeatherApp",
      live: "#",
      image: WeatherAppImg
    },
    { 
      title: "FoodMart Clone", 
      description: "Food delivery app clone with restaurant listings and menu browsing",
      tech: ["HTML", "CSS", "Bootstrap"],
      category: "frontend",
      bg: "from-green-600 to-green-800",
      github: "https://github.com/Arunrai0752/FoodMart",
      live: "#",
      image: FoodMartImg
    },
    { 
      title: "Todo List", 
      description: "Task management application with CRUD operations and local storage",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      category: "frontend",
      bg: "from-indigo-600 to-indigo-800",
      github: "https://github.com/Arunrai0752/To_Do_List-",
      live: "#",
      image: TodoImg
    },
    { 
      title: "Currency Converter", 
      description: "Real-time currency conversion tool using exchange rate API",
      tech: ["HTML", "CSS", "JavaScript", "API Integration", "Bootstrap"],
      category: "frontend",
      bg: "from-pink-600 to-pink-800",
      github: "https://github.com/Arunrai0752/Currency_Converter_ArunXrai",
      live: "#",
      image: CurrencyImg
    },
    { 
      title: "Joke App", 
      description: "Application that fetches and displays random jokes from an API",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "API Integration"],
      category: "frontend",
      bg: "from-yellow-600 to-yellow-800",
      github: "https://github.com/Arunrai0752/Joke_api",
      live: "#",
      image: JokeImg
    },
    { 
      title: "Calculator", 
      description: "Interactive calculator with basic arithmetic operations",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      bg: "from-gray-600 to-gray-800",
      github: "https://github.com/Arunrai0752/CalculaterArunXRai",
      live: "#",
      image: CalculatorImg
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", damping: 25 }
    },
    exit: { opacity: 0, scale: 0.8 }
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

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-12 custom-swiper-nav"
        >
          {filteredProjects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                variants={item}
                whileHover={{ y: -10 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-xl cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-700 rounded-full text-xs text-white">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs text-white">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <style>{`
          .custom-swiper-nav .swiper-button-next,
          .custom-swiper-nav .swiper-button-prev {
            color: #f59e42;
            background: rgba(30, 41, 59, 0.95);
            border-radius: 50%;
            box-shadow: 0 4px 16px rgba(0,0,0,0.25);
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.4rem;
            border: 2px solid #f59e42;
            transition: background 0.3s, color 0.3s, transform 0.2s;
            z-index: 10;
          }
          .custom-swiper-nav .swiper-button-next:hover,
          .custom-swiper-nav .swiper-button-prev:hover {
            background: #f59e42;
            color: #fff;
            transform: scale(1.18);
            border-color: #fff;
            box-shadow: 0 0 16px #f59e42, 0 4px 16px rgba(0,0,0,0.25);
          }
          .custom-swiper-nav .swiper-button-next:after,
          .custom-swiper-nav .swiper-button-prev:after {
            font-size: 1.4rem;
            font-weight: bold;
          }
        `}</style>

        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="relative">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-gray-900 rounded-full p-2 z-10 hover:bg-amber-500 transition-colors"
                  >
                    <FiX className="text-white text-xl" />
                  </button>
                  
                  <div className="h-64 md:h-80 overflow-hidden">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-6">
                    {selectedProject.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-white">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={selectedProject.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-700 rounded-lg text-white hover:bg-amber-500 transition-colors"
                    >
                      <FiGithub className="mr-2" /> View Code
                    </a>
                    {selectedProject.live !== "#" && (
                      <a 
                        href={selectedProject.live} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-amber-500 rounded-lg text-white hover:bg-amber-600 transition-colors"
                      >
                        <FiExternalLink className="mr-2" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;