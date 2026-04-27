import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiX, FiChevronLeft, FiChevronRight, FiPause, FiPlay } from "react-icons/fi";
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

const projects = [
  {
    title: "Two Souls Events Planner",
    desc: "Comprehensive event management system handling weddings, birthdays, engagements with hall booking, catering, decoration, music, and makeup services",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT Auth"],
    category: "fullstack",
    github: "https://github.com/Arunrai0752/Events-Planner",
    image: TwoSoulsImg,
  },
  {
    title: "MediVault",
    desc: "Healthcare platform connecting doctors and patients with medical records, prescriptions, appointment scheduling, and reminders via email/SMS",
    tech: ["MERN Stack", "Nodemailer"],
    category: "fullstack",
    github: "https://github.com/Arunrai0752/MediVault",
    image: MediVaultImg,
  },
  {
    title: "StoreBooks",
    desc: "Online marketplace for buying and selling books where users can upload, modify prices, and manage their book listings",
    tech: ["React", "Node.js", "MongoDB", "Cloudinary"],
    category: "fullstack",
    github: "https://github.com/Arunrai0752/React-Projects/tree/main/BooksStore",
    image: StoreBooksImg,
  },
  {
    title: "Furni",
    desc: "E-commerce solution for furniture with cart functionality and payment integration",
    tech: ["HTML", "CSS", "Bootstrap"],
    category: "frontend",
    github: "https://github.com/Arunrai0752/Furni",
    image: FurniImg,
  },
  {
    title: "Portfolio Website",
    desc: "Interactive personal portfolio showcasing skills, projects and contact information",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    category: "frontend",
    github: "https://github.com/Arunrai0752/Portfolio",
    image: PortfolioImg,
  },
  {
    title: "WeatherApp",
    desc: "Real-time weather application with 5-day forecast using OpenWeather API",
    tech: ["HTML", "CSS", "API Integration"],
    category: "frontend",
    github: "https://github.com/Arunrai0752/WeatherApp",
    image: WeatherAppImg,
  },
  {
    title: "FoodMart Clone",
    desc: "Food delivery app clone with restaurant listings and menu browsing",
    tech: ["HTML", "CSS", "Bootstrap"],
    category: "frontend",
    github: "https://github.com/Arunrai0752/FoodMart",
    image: FoodMartImg,
  },
  {
    title: "Todo List",
    desc: "Task management application with CRUD operations and local storage",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    category: "frontend",
    github: "https://github.com/Arunrai0752/To_Do_List-",
    image: TodoImg,
  },
  {
    title: "Currency Converter",
    desc: "Real-time currency conversion tool using exchange rate API",
    tech: ["HTML", "CSS", "JavaScript", "API Integration", "Bootstrap"],
    category: "frontend",
    github: "https://github.com/Arunrai0752/Currency_Converter_ArunXrai",
    image: CurrencyImg,
  },
  {
    title: "Joke App",
    desc: "Application that fetches and displays random jokes from an API",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "API Integration"],
    category: "frontend",
    github: "https://github.com/Arunrai0752/Joke_api",
    image: JokeImg,
  },
  {
    title: "Calculator",
    desc: "Interactive calculator with basic arithmetic operations",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    github: "https://github.com/Arunrai0752/CalculaterArunXRai",
    image: CalculatorImg,
  },
];

const tabs = ["all", "fullstack", "frontend"];

export default function Projects() {
  const [tab, setTab] = useState("all");
  const [selected, setSelected] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const filtered = tab === "all" ? projects : projects.filter((p) => p.category === tab);

  // Auto-scroll animation
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isPaused) return;

    let scrollSpeed = 1; // pixels per frame

    const animate = () => {
      if (container && !isPaused && !isDragging) {
        container.scrollLeft += scrollSpeed;
        
        // Reset to start when reaching the end for infinite loop effect
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, isDragging, filtered]);

  // Reset scroll when tab changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  }, [tab]);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    startXRef.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeftRef.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  // Manual scroll buttons
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Featured Work</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
            Drag, scroll, or watch — 25+ projects showcasing my expertise
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold capitalize transition-all ${
                tab === t
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700 hover:border-blue-300"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            {filtered.length} projects • Drag to explore
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-blue-600 hover:border-blue-300 transition-all"
              title={isPaused ? "Auto-scroll" : "Pause"}
            >
              {isPaused ? <FiPlay className="w-4 h-4" /> : <FiPause className="w-4 h-4" />}
            </button>
            <button
              onClick={() => scroll("left")}
              className="p-2.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-blue-600 hover:border-blue-300 transition-all"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-blue-600 hover:border-blue-300 transition-all"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Slider */}
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex gap-5 overflow-x-auto pb-6 cursor-grab active:cursor-grabbing scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* Duplicate projects for infinite scroll effect */}
          {[...filtered, ...filtered].map((project, i) => (
            <motion.div
              key={`${project.title}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % filtered.length) * 0.05 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelected(project)}
              className="flex-shrink-0 w-80 sm:w-96 rounded-2xl overflow-hidden bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl transition-all cursor-pointer group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90 dark:bg-neutral-900/90 text-blue-600 dark:text-blue-400 capitalize backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-4 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-700 text-neutral-500">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* GitHub Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-blue-600 transition-colors"
                >
                  <FiGithub className="w-4 h-4" />
                  View Code
                  <FiExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile hint */}
        <p className="text-center text-xs text-neutral-400 dark:text-neutral-500 mt-4 md:hidden">
          ← Swipe to explore projects →
        </p>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-neutral-900 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-auto border border-neutral-200 dark:border-neutral-700 shadow-2xl"
            >
              {/* Modal Image */}
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-xl bg-white/90 dark:bg-neutral-900/90 text-neutral-700 dark:text-neutral-300 hover:bg-white dark:hover:bg-neutral-800 transition-colors backdrop-blur-sm shadow-lg"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold">{selected.title}</h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 capitalize">
                    {selected.category}
                  </span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  {selected.desc}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.tech.map((t) => (
                      <span
                        key={t}
                        className="text-sm px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium border border-blue-100 dark:border-blue-800/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                  >
                    <FiGithub className="w-5 h-5" /> View on GitHub
                  </a>
                  {selected.live && selected.live !== "#" && (
                    <a
                      href={selected.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 border border-neutral-300 dark:border-neutral-600 rounded-xl font-semibold text-neutral-700 dark:text-neutral-300 hover:border-blue-500 hover:text-blue-600 transition-all"
                    >
                      <FiExternalLink className="w-5 h-5" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hide scrollbar styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}