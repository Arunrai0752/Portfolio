import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import { FaEye } from 'react-icons/fa';
import { useInView } from 'framer-motion';
import TwoSoulsImg from '../assets/Twosouls.png';
import MediVaultImg from '../assets/MedVault.png';
import StoreBooksImg from '../assets/BooksStore.png';
import FurniImg from '../assets/Furni.png';
import PortfolioImg from '../assets/PortFolio.png';
import WeatherAppImg from '../assets/Weather.png';
import FoodMartImg from '../assets/Foodmart.png';
import TodoImg from '../assets/To-DoList.png';
import CurrencyImg from '../assets/Currency.png';
import JokeImg from '../assets/Joke.png';
import CalculatorImg from '../assets/Calculator.png';

const allProjects = [
  {
    title: 'Two Souls Events Planner',
    tagline: 'Comprehensive Event Management System',
    description: 'End-to-end event management system handling weddings, birthdays, and engagements with hall booking, catering, decoration, music, and makeup services.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT Auth'],
    category: 'fullstack',
    github: 'https://github.com/Arunrai0752/Events-Planner',
    live: '#',
    image: TwoSoulsImg,
    featured: true,
    accent: '#22d3ee',
  },
  {
    title: 'MediVault',
    tagline: 'Healthcare Platform',
    description: 'Healthcare platform connecting doctors and patients with medical records, prescriptions, appointment scheduling, and reminders via email/SMS.',
    tech: ['MERN Stack', 'Nodemailer', 'JWT', 'Cloudinary'],
    category: 'fullstack',
    github: 'https://github.com/Arunrai0752/MediVault',
    live: '#',
    image: MediVaultImg,
    featured: true,
    accent: '#a78bfa',
  },
  {
    title: 'StoreBooks',
    tagline: 'Book Marketplace',
    description: 'Online marketplace for buying and selling books where users can upload, modify prices, and manage their own listings.',
    tech: ['React', 'Node.js', 'MongoDB', 'Cloudinary'],
    category: 'fullstack',
    github: 'https://github.com/Arunrai0752/React-Projects/tree/main/BooksStore',
    live: '#',
    image: StoreBooksImg,
    featured: false,
    accent: '#34d399',
  },
  {
    title: 'Furni',
    tagline: 'Furniture E-Commerce',
    description: 'Modern e-commerce solution for furniture with a polished product catalog, cart functionality, and smooth shopping experience.',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    category: 'frontend',
    github: 'https://github.com/Arunrai0752/Furni',
    live: '#',
    image: FurniImg,
    featured: false,
    accent: '#fbbf24',
  },
  {
    title: 'Portfolio Website',
    tagline: 'Personal Portfolio',
    description: 'Interactive personal portfolio showcasing projects, skills, and contact information with smooth animations.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    category: 'frontend',
    github: 'https://github.com/Arunrai0752/Portfolio',
    live: '#',
    image: PortfolioImg,
    featured: false,
    accent: '#f472b6',
  },
  {
    title: 'WeatherApp',
    tagline: 'Real-Time Weather App',
    description: 'Real-time weather application with 5-day forecast using OpenWeather API with clean UI and responsive design.',
    tech: ['HTML', 'CSS', 'API Integration'],
    category: 'frontend',
    github: 'https://github.com/Arunrai0752/WeatherApp',
    live: '#',
    image: WeatherAppImg,
    featured: false,
    accent: '#22d3ee',
  },
  {
    title: 'FoodMart Clone',
    tagline: 'Food Delivery App',
    description: 'Food delivery app clone featuring restaurant listings and menu browsing with responsive UI.',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    category: 'frontend',
    github: 'https://github.com/Arunrai0752/FoodMart',
    live: '#',
    image: FoodMartImg,
    featured: false,
    accent: '#ef4444',
  },
  {
    title: 'Todo List',
    tagline: 'Task Management App',
    description: 'Task management application with full CRUD operations and local storage persistence.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    category: 'frontend',
    github: 'https://github.com/Arunrai0752/To_Do_List-',
    live: '#',
    image: TodoImg,
    featured: false,
    accent: '#a78bfa',
  },
  {
    title: 'Currency Converter',
    tagline: 'Real-Time Exchange Rates',
    description: 'Real-time currency conversion tool using live exchange rate API with intuitive UI.',
    tech: ['HTML', 'CSS', 'JavaScript', 'API Integration', 'Bootstrap'],
    category: 'frontend',
    github: 'https://github.com/Arunrai0752/Currency_Converter_ArunXrai',
    live: '#',
    image: CurrencyImg,
    featured: false,
    accent: '#34d399',
  },
  {
    title: 'Joke App',
    tagline: 'Joke Generator',
    description: 'Lightweight app that fetches and displays random jokes from a public API with a clean interface.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'API Integration'],
    category: 'frontend',
    github: 'https://github.com/Arunrai0752/Joke_api',
    live: '#',
    image: JokeImg,
    featured: false,
    accent: '#fbbf24',
  },
  {
    title: 'Calculator',
    tagline: 'Interactive Calculator',
    description: 'Feature-complete interactive calculator with basic and scientific arithmetic operations.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'frontend',
    github: 'https://github.com/Arunrai0752/CalculaterArunXRai',
    live: '#',
    image: CalculatorImg,
    featured: false,
    accent: '#f472b6',
  },
];

const tabs = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const filtered = activeTab === 'all' ? allProjects : allProjects.filter(p => p.category === activeTab);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedProject]);

  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden bg-slate-950/50">
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.04),transparent_70%)]" />

      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-px w-12 bg-gradient-to-r from-cyan-400 to-transparent" />
          <span className="text-cyan-400 text-sm font-mono-custom font-medium tracking-widest uppercase">Portfolio</span>
        </motion.div>

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            <span className="text-slate-50">Featured</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex gap-2"
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl font-body text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-slate-950 shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-800/50 border border-slate-700/60 text-slate-400 hover:text-slate-100'
                }`}
                style={activeTab === tab.id ? { background: 'linear-gradient(135deg, #22d3ee, #8b5cf6)' } : {}}
              >
                {tab.label}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
                className="group bg-slate-800/40 border border-slate-700/50 rounded-3xl overflow-hidden cursor-pointer hover:border-slate-600/60 hover:shadow-xl hover:shadow-slate-900/50 transition-all duration-400 backdrop-blur-sm flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
                  />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-sm border border-slate-700/60 text-slate-300 font-mono-custom text-xs uppercase tracking-wide">
                      {project.category === 'fullstack' ? 'Full Stack' : 'Frontend'}
                    </span>
                  </div>

                  {/* Action overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      onClick={(e) => e.stopPropagation()}
                      className="p-3 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-200 hover:text-white hover:border-slate-500 transition-all duration-200 backdrop-blur-sm"
                    >
                      <FiGithub size={18} />
                    </motion.a>
                    {project.live !== '#' && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-200 backdrop-blur-sm"
                      >
                        <FiExternalLink size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display font-bold text-lg text-slate-100 group-hover:text-white transition-colors">{project.title}</h3>
                      <p className="font-mono-custom text-xs mt-0.5" style={{ color: project.accent }}>{project.tagline}</p>
                    </div>
                    <FaEye size={14} className="text-slate-600 group-hover:text-slate-400 mt-1 transition-colors" />
                  </div>

                  <p className="text-slate-400 text-sm font-body leading-relaxed mb-4 flex-1 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-lg bg-slate-900/60 border border-slate-700/40 text-slate-400 font-mono-custom text-xs">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900/60 border border-slate-700/40 text-slate-500 font-mono-custom text-xs">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── PROJECT MODAL ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-700/60 rounded-3xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 z-10 p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-200 backdrop-blur-sm"
              >
                <FiX size={18} />
              </button>

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-6">
                  <h2 className="font-display font-extrabold text-3xl text-slate-50 mb-1">{selectedProject.title}</h2>
                  <p className="font-mono-custom text-sm" style={{ color: selectedProject.accent }}>{selectedProject.tagline}</p>
                </div>

                <p className="text-slate-300 font-body text-base leading-relaxed mb-8 pl-4 border-l-2 border-slate-700">
                  {selectedProject.description}
                </p>

                <div className="mb-8">
                  <h4 className="font-display font-bold text-slate-200 text-sm uppercase tracking-widest mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.04 }}
                        className="px-4 py-2 rounded-xl bg-slate-800/60 border border-slate-700/50 text-slate-200 font-mono-custom text-sm hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-200"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-100 bg-slate-800 border border-slate-700 hover:border-slate-500 transition-all duration-200"
                  >
                    <FiGithub size={16} />
                    View Code
                  </motion.a>
                  {selectedProject.live !== '#' && (
                    <motion.a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950"
                      style={{ background: 'linear-gradient(135deg, #22d3ee, #8b5cf6)' }}
                    >
                      <FiExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}