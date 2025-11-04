import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";
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
      github: "https://github.com/Arunrai0752/Events-Planner",
      live: "#",
      image: TwoSoulsImg
    },
    {
      title: "MediVault",
      description: "Healthcare platform connecting doctors and patients with medical records, prescriptions, appointment scheduling, and reminders via email/SMS",
      tech: ["MERN Stack", "Nodemailer"],
      category: "fullstack",
      github: "https://github.com/Arunrai0752/MediVault",
      live: "#",
      image: MediVaultImg
    },
    {
      title: "StoreBooks",
      description: "Online marketplace for buying and selling books where users can upload, modify prices, and manage their book listings",
      tech: ["React", "Node.js", "MongoDB", "Cloudinary"],
      category: "fullstack",
      github: "https://github.com/Arunrai0752/React-Projects/tree/main/BooksStore",
      live: "#",
      image: StoreBooksImg
    },
    {
      title: "Furni",
      description: "E-commerce solution for furniture with cart functionality and payment integration",
      tech: ["HTML", "CSS", "Bootstrap"],
      category: "frontend",
      github: "https://github.com/Arunrai0752/Furni",
      live: "#",
      image: FurniImg
    },
    {
      title: "Portfolio Website",
      description: "Interactive personal portfolio showcasing skills, projects and contact information",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      category: "frontend",
      github: "https://github.com/Arunrai0752/Portfolio",
      live: "#",
      image: PortfolioImg
    },
    {
      title: "WeatherApp",
      description: "Real-time weather application with 5-day forecast using OpenWeather API",
      tech: ["HTML", "CSS", "API Integration"],
      category: "frontend",
      github: "https://github.com/Arunrai0752/WeatherApp",
      live: "#",
      image: WeatherAppImg
    },
    {
      title: "FoodMart Clone",
      description: "Food delivery app clone with restaurant listings and menu browsing",
      tech: ["HTML", "CSS", "Bootstrap"],
      category: "frontend",
      github: "https://github.com/Arunrai0752/FoodMart",
      live: "#",
      image: FoodMartImg
    },
    {
      title: "Todo List",
      description: "Task management application with CRUD operations and local storage",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      category: "frontend",
      github: "https://github.com/Arunrai0752/To_Do_List-",
      live: "#",
      image: TodoImg
    },
    {
      title: "Currency Converter",
      description: "Real-time currency conversion tool using exchange rate API",
      tech: ["HTML", "CSS", "JavaScript", "API Integration", "Bootstrap"],
      category: "frontend",
      github: "https://github.com/Arunrai0752/Currency_Converter_ArunXrai",
      live: "#",
      image: CurrencyImg
    },
    {
      title: "Joke App",
      description: "Application that fetches and displays random jokes from an API",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "API Integration"],
      category: "frontend",
      github: "https://github.com/Arunrai0752/Joke_api",
      live: "#",
      image: JokeImg
    },
    {
      title: "Calculator",
      description: "Interactive calculator with basic arithmetic operations",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      github: "https://github.com/Arunrai0752/CalculaterArunXRai",
      live: "#",
      image: CalculatorImg
    }
  ];

  const filteredProjects = activeTab === "all" ? projects : projects.filter(p => p.category === activeTab);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedProject]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="projects" className="relative min-h-screen py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-zinc-100 mb-6 tracking-tight">
            My Projects
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            A showcase of my creative work and technical expertise
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {["all", "fullstack", "frontend"].map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-emerald-400 text-zinc-950 shadow-lg shadow-emerald-400/25'
                  : 'bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800/50 border border-zinc-700 hover:border-zinc-600'
              }`}
            >
              {tab === 'all' ? 'All' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.custom-swiper-next',
            prevEl: '.custom-swiper-prev',
          }}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 }
          }}
          className="pb-20"
        >
          {filteredProjects.map((project, i) => (
            <SwiperSlide key={i}>
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative rounded-3xl overflow-hidden bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm cursor-pointer shadow-xl hover:shadow-2xl hover:border-emerald-400 transition-all duration-500"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      onClick={(e) => e.stopPropagation()}
                      className="p-3 bg-zinc-800/80 backdrop-blur-sm rounded-xl text-zinc-300 hover:bg-emerald-400 hover:text-zinc-950 transition-all"
                    >
                      <FiGithub className="w-5 h-5" />
                    </motion.a>
                    {project.live !== "#" && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 bg-zinc-800/80 backdrop-blur-sm rounded-xl text-zinc-300 hover:bg-sky-400 hover:text-zinc-950 transition-all"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 bg-zinc-800/50 rounded-full text-xs text-zinc-300 border border-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-emerald-400/20 text-emerald-400 rounded-full text-xs font-medium border border-emerald-400/30">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="custom-swiper-prev p-4 bg-zinc-800/50 backdrop-blur-sm rounded-full border border-zinc-700 text-zinc-400 hover:bg-emerald-400 hover:text-zinc-950 hover:border-emerald-400 transition-all duration-300 shadow-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="custom-swiper-next p-4 bg-zinc-800/50 backdrop-blur-sm rounded-full border border-zinc-700 text-zinc-400 hover:bg-emerald-400 hover:text-zinc-950 hover:border-emerald-400 transition-all duration-300 shadow-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-zinc-950/90 backdrop-blur-xl flex items-center justify-center p-4 z-[9999]"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25 }}
                className="bg-zinc-900/95 backdrop-blur-xl rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-auto border border-zinc-800 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-3 bg-zinc-800/50 backdrop-blur-sm rounded-2xl border border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 transition-all z-10"
                >
                  <FiX className="w-5 h-5 text-zinc-300" />
                </motion.button>

                <div className="h-64 md:h-80 lg:h-96 overflow-hidden mb-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
                    {selectedProject.description}
                  </p>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-zinc-100 mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-zinc-800/50 rounded-xl text-sm text-zinc-300 border border-zinc-700 hover:bg-emerald-400/20 hover:text-emerald-400 hover:border-emerald-400/30 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center justify-center px-6 py-4 bg-zinc-800 text-zinc-100 font-semibold rounded-2xl border border-zinc-700 hover:bg-emerald-400 hover:text-zinc-950 hover:border-emerald-400 transition-all shadow-lg"
                    >
                      <FiGithub className="mr-2 w-5 h-5" />
                      View Code
                    </motion.a>
                    {selectedProject.live !== "#" && (
                      <motion.a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center justify-center px-6 py-4 bg-zinc-800 text-zinc-100 font-semibold rounded-2xl border border-zinc-700 hover:bg-sky-400 hover:text-zinc-950 hover:border-sky-400 transition-all shadow-lg"
                      >
                        <FiExternalLink className="mr-2 w-5 h-5" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
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