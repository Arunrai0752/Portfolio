import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiX, FiCode, FiEye } from "react-icons/fi";
import TwoSoulsImg from "../assets/Twosouls.png";
import MediVaultImg from "../assets/MedVault.png";
import StoreBooksImg from "../assets/BooksStore.png";
import FurniImg from "../assets/Furni.png";
import PortfolioImg from "../assets/PortFolio.png";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", damping: 25, stiffness: 300 }
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const cardFloatingAnimation = {
    y: [0, -5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.5
    }
  };

  return (
    <section id="projects" className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-600/5 to-cyan-600/5 rounded-full blur-3xl"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my creative work and technical expertise
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {["all", "fullstack", "frontend"].map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full capitalize font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 backdrop-blur-sm border border-gray-600"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 }
          }}
          className="pb-16 custom-swiper-nav"
        >
          {filteredProjects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                variants={itemVariants}
                animate={cardFloatingAnimation}
                whileHover={{
                  y: -20,
                  scale: 1.03,
                  boxShadow: "0 35px 60px -12px rgba(99, 102, 241, 0.6), 0 0 0 2px rgba(245, 158, 66, 0.4)",
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className="bg-gradient-to-br from-gray-800 via-gray-850 to-gray-900 rounded-3xl overflow-hidden shadow-2xl cursor-pointer group border border-gray-700/60 backdrop-blur-sm"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-amber-500 rounded-full text-white shadow-lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, '_blank');
                        }}
                      >
                        <FiCode className="text-sm" />
                      </motion.button>
                      {project.live !== "#" && (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="p-2 bg-blue-500 rounded-full text-white shadow-lg"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.live, '_blank');
                          }}
                        >
                          <FiEye className="text-sm" />
                        </motion.button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full text-xs text-gray-300 border border-gray-600">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-xs text-white">
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
            box-shadow: 0 8px 32px rgba(0,0,0,0.3);
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.6rem;
            border: 2px solid #f59e42;
            transition: all 0.3s ease;
            z-index: 10;
            backdrop-filter: blur(10px);
          }
          .custom-swiper-nav .swiper-button-next:hover,
          .custom-swiper-nav .swiper-button-prev:hover {
            background: linear-gradient(135deg, #f59e42, #fb923c);
            color: #fff;
            transform: scale(1.1);
            border-color: #fff;
            box-shadow: 0 0 20px rgba(245, 158, 66, 0.5), 0 8px 32px rgba(0,0,0,0.3);
          }
          .custom-swiper-nav .swiper-button-next:after,
          .custom-swiper-nav .swiper-button-prev:after {
            font-size: 1.6rem;
            font-weight: bold;
          }
        `}</style>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-gray-700/50"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 bg-gray-800/80 backdrop-blur-sm rounded-full p-3 z-10 hover:bg-amber-500 transition-all duration-300 shadow-lg"
                  >
                    <FiX className="text-white text-xl" />
                  </motion.button>

                  <div className="h-80 md:h-96 overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="p-8">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-4"
                  >
                    {selectedProject.title}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-300 mb-8 text-lg leading-relaxed"
                  >
                    {selectedProject.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-8"
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full text-sm text-white border border-gray-600 hover:border-amber-500 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap gap-4"
                  >
                    <motion.a
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl text-white hover:from-gray-600 hover:to-gray-500 transition-all duration-300 shadow-lg"
                    >
                      <FiGithub className="mr-3 text-lg" /> View Code
                    </motion.a>
                    {selectedProject.live !== "#" && (
                      <motion.a
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl text-white hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg shadow-amber-500/25"
                      >
                        <FiExternalLink className="mr-3 text-lg" /> Live Demo
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
