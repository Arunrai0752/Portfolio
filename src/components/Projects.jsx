import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
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
import Mediconnect from '../assets/mediconnect.png';
import Iphonic from '../assets/Iphonic.png';
import Duvatech from '../assets/Duvatech.png';

const allProjects = [
  {
    title: 'MediConnect',
    tagline: 'Healthcare Connection Platform',
    description: 'Full-stack healthcare platform connecting patients with medical services. Features include appointment booking, doctor listings, and seamless patient management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    category: 'fullstack',
    github: 'https://gitlab.com/Arunrai0752/mediconnnect-f',
    live: 'https://mediconnnect-f.vercel.app/',
    image: Mediconnect, //← replace with MediConnectImg baad mein
    accent: '#22d3ee',
  },
  {
    title: 'Duva Tech',
    tagline: 'Client Attraction & Deal Platform',
    description: 'Professional business platform built to attract clients and close deals. Features a compelling frontend with a robust backend for lead management and business growth.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'fullstack',
    github: 'https://gitlab.com/Arunrai0752/duva-tech',
    live: 'https://www.duvatech.in/',
    image: Duvatech, // ← replace with DuvaTechImg baad mein
    accent: '#a78bfa',
  },

  {
    title: 'Iphonic',
    tagline: 'Mobile Store Frontend',
    description: 'Sleek and modern mobile store UI for browsing and showcasing smartphones with product listings, filters, and a smooth shopping experience.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    category: 'frontend',
    github: 'https://gitlab.com/Arunrai0752/iphonic#',
    live: 'https://iphonic-virid.vercel.app/',
    image: Iphonic, // ← replace with IphonicImg baad mein
    accent: '#f472b6',
  },
  { title: 'Two Souls Events Planner', tagline: 'Comprehensive Event Management System', description: 'End-to-end event management system handling weddings, birthdays, and engagements with hall booking, catering, decoration, music, and makeup services.', tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT Auth'], category: 'fullstack', github: 'https://github.com/Arunrai0752/Events-Planner', image: TwoSoulsImg, accent: '#22d3ee' },
  { title: 'MediVault', tagline: 'Healthcare Platform', description: 'Healthcare platform connecting doctors and patients with medical records, prescriptions, appointment scheduling, and reminders via email/SMS.', tech: ['MERN Stack', 'Nodemailer', 'JWT', 'Cloudinary'], category: 'fullstack', github: 'https://github.com/Arunrai0752/MediVault', image: MediVaultImg, accent: '#a78bfa' },
  { title: 'StoreBooks', tagline: 'Book Marketplace', description: 'Online marketplace for buying and selling books where users can upload, modify prices, and manage their own listings.', tech: ['React', 'Node.js', 'MongoDB', 'Cloudinary'], category: 'fullstack', github: 'https://github.com/Arunrai0752/React-Projects', image: StoreBooksImg, accent: '#34d399' },
  { title: 'Furni', tagline: 'Furniture E-Commerce', description: 'Modern e-commerce solution for furniture with a polished product catalog, cart functionality, and smooth shopping experience.', tech: ['HTML', 'CSS', 'Bootstrap'], category: 'frontend', github: 'https://github.com/Arunrai0752/Furni', image: FurniImg, accent: '#fbbf24' },
  { title: 'Portfolio Website', tagline: 'Personal Portfolio', description: 'Interactive personal portfolio showcasing projects, skills, and contact information with smooth animations.', tech: ['React', 'Framer Motion', 'Tailwind CSS'], category: 'frontend', github: 'https://github.com/Arunrai0752/Portfolio', image: PortfolioImg, accent: '#f472b6' },
  { title: 'WeatherApp', tagline: 'Real-Time Weather App', description: 'Real-time weather application with 5-day forecast using OpenWeather API with clean UI and responsive design.', tech: ['HTML', 'CSS', 'API Integration'], category: 'frontend', github: 'https://github.com/Arunrai0752/WeatherApp', image: WeatherAppImg, accent: '#22d3ee' },
  { title: 'FoodMart Clone', tagline: 'Food Delivery App', description: 'Food delivery app clone featuring restaurant listings and menu browsing with responsive UI.', tech: ['HTML', 'CSS', 'Bootstrap'], category: 'frontend', github: 'https://github.com/Arunrai0752/FoodMart', image: FoodMartImg, accent: '#ef4444' },
  { title: 'Todo List', tagline: 'Task Management App', description: 'Task management application with full CRUD operations and local storage persistence.', tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'], category: 'frontend', github: 'https://github.com/Arunrai0752/To_Do_List-', image: TodoImg, accent: '#a78bfa' },
  { title: 'Currency Converter', tagline: 'Real-Time Exchange Rates', description: 'Real-time currency conversion tool using live exchange rate API with intuitive UI.', tech: ['HTML', 'CSS', 'JavaScript', 'API Integration', 'Bootstrap'], category: 'frontend', github: 'https://github.com/Arunrai0752/Currency_Converter_ArunXrai', image: CurrencyImg, accent: '#34d399' },
  { title: 'Joke App', tagline: 'Joke Generator', description: 'Lightweight app that fetches and displays random jokes from a public API with a clean interface.', tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'API Integration'], category: 'frontend', github: 'https://github.com/Arunrai0752/Joke_api', image: JokeImg, accent: '#fbbf24' },

  { title: 'Calculator', tagline: 'Interactive Calculator', description: 'Feature-complete interactive calculator with basic and scientific arithmetic operations.', tech: ['HTML', 'CSS', 'JavaScript'], category: 'frontend', github: 'https://github.com/Arunrai0752/CalculaterArunXRai', image: CalculatorImg, accent: '#f472b6' },
];

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
];

function usePerView() {
  const [perView, setPerView] = useState(1);
  useEffect(() => {
    const calc = () => {
      if (window.innerWidth >= 1280) setPerView(3);
      else if (window.innerWidth >= 768) setPerView(2);
      else setPerView(1);
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);
  return perView;
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);
  const touchStart = useRef(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const perView = usePerView();

  const filtered = activeTab === 'all' ? allProjects : allProjects.filter(p => p.category === activeTab);
  const maxIndex = Math.max(0, filtered.length - perView);

  const goTo = useCallback((i) => setCurrent(Math.max(0, Math.min(i, maxIndex))), [maxIndex]);
  const move = (dir) => goTo(current + dir);

  useEffect(() => { setCurrent(0); }, [activeTab, perView]);

  const slideWidth = 100 / perView;

  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden bg-slate-950/50">

      <div className="max-w-7xl mx-auto" ref={ref}>

      

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-6xl font-extrabold tracking-tight">
            <span className="text-slate-50">Featured</span><br />
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>

          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }} className="flex gap-2">
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab.id ? 'text-slate-950 shadow-lg shadow-cyan-500/20' : 'bg-slate-800/50 border border-slate-700/60 text-slate-400 hover:text-slate-100'}`}
                style={activeTab === tab.id ? { background: 'linear-gradient(135deg,#22d3ee,#8b5cf6)' } : {}}>
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden"
          onTouchStart={e => { touchStart.current = e.touches[0].clientX; }}
          onTouchEnd={e => {
            const diff = touchStart.current - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 40) move(diff > 0 ? 1 : -1);
          }}>
          <div ref={trackRef} className="flex transition-transform duration-500 ease-[cubic-bezier(.25,.46,.45,.94)]"
            style={{ transform: `translateX(-${current * slideWidth}%)` }}>
            {filtered.map((project) => (
              <div key={project.title} className="flex-shrink-0 px-3"
                style={{ width: `${slideWidth}%` }}>
                <div className="group bg-slate-800/40 border border-slate-700/50 rounded-3xl overflow-hidden hover:border-slate-600/60 transition-all duration-300 backdrop-blur-sm flex flex-col h-full">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                      style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }} />
                    <img src={project.image} alt={project.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-sm border border-slate-700/60 text-slate-300 text-xs uppercase tracking-wide">
                      {project.category === 'fullstack' ? 'Full Stack' : 'Frontend'}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1 gap-3">
                    <div>
                      <h3 className="font-bold text-lg text-slate-100">{project.title}</h3>
                      <p className="text-xs mt-0.5" style={{ color: project.accent }}>{project.tagline}</p>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed flex-1 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map(t => (
                        <span key={t} className="px-2.5 py-1 rounded-lg bg-slate-900/60 border border-slate-700/40 text-slate-400 text-xs">{t}</span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2.5 py-1 rounded-lg bg-slate-900/60 border border-slate-700/40 text-slate-500 text-xs">+{project.tech.length - 3}</span>
                      )}
                    </div>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700/50 text-slate-300 text-sm hover:border-slate-500 hover:text-white transition-all duration-200">
                      <FiGithub size={15} /> View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8 gap-4">
          <button onClick={() => move(-1)} disabled={current === 0}
            className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-400 hover:text-slate-100 hover:border-slate-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200">
            <FiChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button key={i} onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-cyan-400' : 'w-1.5 bg-slate-600 hover:bg-slate-400'}`} />
            ))}
          </div>

          <button onClick={() => move(1)} disabled={current >= maxIndex}
            className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-400 hover:text-slate-100 hover:border-slate-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200">
            <FiChevronRight size={20} />
          </button>
        </div>

        <p className="text-center text-slate-500 text-xs mt-3">
          {Math.min(current + perView, filtered.length)} of {filtered.length} projects
        </p>

      </div>
    </section>
  );
}