import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
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
  const [isGlitching, setIsGlitching] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 150);
    }, 10000);
    return () => clearInterval(glitchInterval);
  }, []);

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
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <>
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Binary code overlay */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute font-mono text-xs text-red-500"
              style={{
                left: `${Math.random() * 100}vw`,
                top: `${Math.random() * 100}vh`,
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>
      </div>

      <section 
        id="projects" 
        className="relative min-h-screen py-32 px-6 overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 20% 80%, #0f0f0f 0%, #000000 100%)'
        }}
      >
        {/* Portal effects */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className={`relative inline-block ${isGlitching ? 'project-glitch' : ''}`}>
              <h1 className="text-7xl md:text-8xl font-bold mb-8 tracking-tighter"
                style={{
                  color: '#e60a14',
                  fontFamily: "'Bebas Neue', cursive",
                  letterSpacing: '0.15em',
                  textShadow: '0 0 30px rgba(230, 10, 20, 0.7)'
                }}
              >
                PROJECTS
              </h1>
            </div>
            
            {/* Animated divider */}
            <div className="relative w-72 h-1 mx-auto mb-12 overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-600 to-red-900" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            
            <p className="text-2xl max-w-2xl mx-auto leading-relaxed px-6 py-5 rounded-xl border border-red-500/20 bg-black/30 backdrop-blur-sm"
              style={{
                color: '#94a3b8',
                fontFamily: "'Bebas Neue', cursive",
                letterSpacing: '0.1em'
              }}
            >
              SHOWCASE OF MY CREATIVE WORK AND TECHNICAL EXPERTISE
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            {["all", "fullstack", "frontend"].map((tab) => {
              const isActive = activeTab === tab;
              return (
                <motion.button
                  key={tab}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab)}
                  className="relative px-10 py-4 font-bold rounded-full overflow-hidden group"
                  style={{
                    fontFamily: "'Bebas Neue', cursive",
                    letterSpacing: '0.1em',
                    fontSize: '1.1rem'
                  }}
                >
                  <div className={`absolute inset-0 transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-red-600 to-red-800' 
                      : 'bg-gradient-to-r from-gray-900 to-black'
                  }`} />
                  
                  <div className={`absolute inset-0.5 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-red-700 to-red-900' 
                      : 'bg-gradient-to-r from-gray-800 to-gray-900'
                  }`} />
                  
                  <span className={`relative z-10 transition-all duration-300 ${
                    isActive 
                      ? 'text-white' 
                      : 'text-gray-400 group-hover:text-red-400'
                  }`}>
                    {tab === 'all' ? 'ALL PROJECTS' : tab.toUpperCase()}
                  </span>
                  
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        boxShadow: '0 0 30px rgba(230, 10, 20, 0.7)'
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Projects Carousel */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.custom-swiper-next',
              prevEl: '.custom-swiper-prev',
            }}
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 3 }
            }}
            className="pb-32"
          >
            {filteredProjects.map((project, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  onHoverStart={() => setHoveredProject(i)}
                  onHoverEnd={() => setHoveredProject(null)}
                  whileHover={{ 
                    y: -20,
                    scale: 1.03,
                    rotateX: 5,
                    rotateY: Math.random() > 0.5 ? 2 : -2
                  }}
                  className="group relative rounded-3xl overflow-hidden cursor-pointer h-full"
                  onClick={() => setSelectedProject(project)}
                  style={{
                    perspective: '1000px'
                  }}
                >
                  {/* Project Card */}
                  <div className="relative h-full rounded-3xl overflow-hidden"
                    style={{
                      background: 'linear-gradient(145deg, rgba(20, 20, 20, 0.8), rgba(0, 0, 0, 0.9))',
                      border: '2px solid rgba(230, 10, 20, 0.3)',
                      boxShadow: hoveredProject === i 
                        ? '0 25px 50px rgba(230, 10, 20, 0.4), inset 0 0 40px rgba(230, 10, 20, 0.1)' 
                        : '0 10px 30px rgba(0,0,0,0.7)'
                    }}
                  >
                    {/* Glowing edge effect */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        boxShadow: 'inset 0 0 30px rgba(230, 10, 20, 0.3)'
                      }}
                    />

                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        style={{
                          filter: 'contrast(1.1) saturate(1.1)'
                        }}
                      />
                      
                      {/* Tech badges overlay */}
                      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 z-20">
                        {project.tech.slice(0, 2).map((tech, j) => (
                          <span
                            key={j}
                            className="px-3 py-1 text-xs font-bold rounded-full backdrop-blur-sm"
                            style={{
                              background: 'rgba(230, 10, 20, 0.2)',
                              color: '#fca5a5',
                              border: '1px solid rgba(230, 10, 20, 0.3)',
                              fontFamily: "'Bebas Neue', cursive",
                              letterSpacing: '0.05em'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 2 && (
                          <span className="px-3 py-1 text-xs font-bold rounded-full backdrop-blur-sm"
                            style={{
                              background: 'rgba(0, 0, 0, 0.7)',
                              color: '#ffffff',
                              border: '1px solid rgba(255, 255, 255, 0.2)',
                              fontFamily: "'Bebas Neue', cursive"
                            }}
                          >
                            +{project.tech.length - 2}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold flex-1"
                          style={{
                            color: '#ffffff',
                            fontFamily: "'Bebas Neue', cursive",
                            letterSpacing: '0.05em'
                          }}
                        >
                          {project.title}
                        </h3>
                        <div className="flex gap-2">
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-xl hover:bg-white hover:text-black transition-all duration-300"
                            style={{
                              background: 'rgba(255, 255, 255, 0.1)',
                              color: '#ffffff'
                            }}
                          >
                            <FiGithub className="w-5 h-5" />
                          </motion.a>
                          {project.live !== "#" && (
                            <motion.a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.2, rotate: -5 }}
                              onClick={(e) => e.stopPropagation()}
                              className="p-2 rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300"
                              style={{
                                background: 'rgba(230, 10, 20, 0.1)',
                                color: '#fca5a5'
                              }}
                            >
                              <FiExternalLink className="w-5 h-5" />
                            </motion.a>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-6 line-clamp-3 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold tracking-wider px-4 py-2 rounded-full"
                          style={{
                            background: project.category === 'fullstack' 
                              ? 'rgba(230, 10, 20, 0.2)' 
                              : 'rgba(59, 130, 246, 0.2)',
                            color: project.category === 'fullstack' ? '#fca5a5' : '#93c5fd',
                            border: `1px solid ${project.category === 'fullstack' ? 'rgba(230, 10, 20, 0.3)' : 'rgba(59, 130, 246, 0.3)'}`,
                            fontFamily: "'Bebas Neue', cursive"
                          }}
                        >
                          {project.category.toUpperCase()}
                        </span>
                        
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className="flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full"
                          style={{
                            background: 'rgba(230, 10, 20, 0.1)',
                            color: '#ffffff',
                            border: '1px solid rgba(230, 10, 20, 0.3)',
                            fontFamily: "'Bebas Neue', cursive"
                          }}
                        >
                          <FaEye className="w-4 h-4" />
                          VIEW
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex justify-center gap-6 mt-12">
            <button className="custom-swiper-prev group relative p-5 rounded-full overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.8), rgba(0, 0, 0, 0.9))',
                border: '2px solid rgba(230, 10, 20, 0.3)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/20 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <FiChevronLeft className="relative z-10 w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
            </button>
            
            <button className="custom-swiper-next group relative p-5 rounded-full overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.8), rgba(0, 0, 0, 0.9))',
                border: '2px solid rgba(230, 10, 20, 0.3)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/20 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <FiChevronRight className="relative z-10 w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Project Modal */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 flex items-center justify-center p-4 z-[9999]"
                onClick={() => setSelectedProject(null)}
                style={{
                  background: 'radial-gradient(circle at center, rgba(10, 10, 10, 0.98), rgba(0, 0, 0, 0.99))',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, rotateX: 10 }}
                  animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                  className="relative max-w-5xl w-full max-h-[90vh] overflow-auto rounded-3xl"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    background: 'linear-gradient(145deg, rgba(15, 15, 15, 0.95), rgba(0, 0, 0, 0.98))',
                    border: '2px solid rgba(230, 10, 20, 0.4)',
                    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.8), 0 0 50px rgba(230, 10, 20, 0.3)'
                  }}
                >
                  {/* Close button */}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 z-10 p-4 rounded-xl"
                    style={{
                      background: 'rgba(230, 10, 20, 0.1)',
                      border: '1px solid rgba(230, 10, 20, 0.3)',
                      color: '#fca5a5'
                    }}
                  >
                    <FiX className="w-6 h-6" />
                  </motion.button>

                  {/* Modal Content */}
                  <div className="relative h-80 md:h-96 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6"
                      style={{
                        color: '#ffffff',
                        fontFamily: "'Bebas Neue', cursive",
                        letterSpacing: '0.05em'
                      }}
                    >
                      {selectedProject.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-10 text-lg leading-relaxed"
                      style={{
                        borderLeft: '3px solid #e60a14',
                        paddingLeft: '1.5rem'
                      }}
                    >
                      {selectedProject.description}
                    </p>

                    <div className="mb-10">
                      <h3 className="text-2xl font-bold mb-6"
                        style={{
                          color: '#e60a14',
                          fontFamily: "'Bebas Neue', cursive",
                          letterSpacing: '0.1em'
                        }}
                      >
                        TECHNOLOGIES USED
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.tech.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ scale: 1.1, y: -3 }}
                            className="px-5 py-3 text-sm font-bold rounded-xl"
                            style={{
                              background: 'linear-gradient(135deg, rgba(230, 10, 20, 0.1), rgba(0,0,0,0.3))',
                              color: '#fca5a5',
                              border: '1px solid rgba(230, 10, 20, 0.3)',
                              fontFamily: "'Bebas Neue', cursive",
                              letterSpacing: '0.05em'
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6">
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -3 }}
                        className="flex-1 flex items-center justify-center gap-3 px-8 py-4 font-bold rounded-2xl transition-all"
                        style={{
                          background: 'linear-gradient(135deg, #111111, #000000)',
                          color: '#ffffff',
                          border: '2px solid rgba(255, 255, 255, 0.1)',
                          fontFamily: "'Bebas Neue', cursive",
                          letterSpacing: '0.1em'
                        }}
                      >
                        <FiGithub className="w-6 h-6" />
                        VIEW CODE
                      </motion.a>
                      
                      {selectedProject.live !== "#" && (
                        <motion.a
                          href={selectedProject.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -3 }}
                          className="flex-1 flex items-center justify-center gap-3 px-8 py-4 font-bold rounded-2xl transition-all"
                          style={{
                            background: 'linear-gradient(135deg, #e60a14, #b80c14)',
                            color: '#ffffff',
                            fontFamily: "'Bebas Neue', cursive",
                            letterSpacing: '0.1em'
                          }}
                        >
                          <FiExternalLink className="w-6 h-6" />
                          LIVE DEMO
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

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        
        .project-glitch {
          animation: project-glitch 0.3s linear;
        }
        
        @keyframes project-glitch {
          0% { transform: translate(0) }
          20% { transform: translate(-3px, 3px) scale(1.01) }
          40% { transform: translate(-3px, -3px) scale(0.99) }
          60% { transform: translate(3px, 3px) scale(1.02) }
          80% { transform: translate(3px, -3px) scale(0.98) }
          100% { transform: translate(0) scale(1) }
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }
        
        ::-webkit-scrollbar-thumb {
          background: #e60a14;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #b80c14;
        }
        
        .swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
};

export default Projects;