import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { motion } from "framer-motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-sm py-2 shadow-xl" : "bg-gray-900/80 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 flex items-center space-x-2"
          >
            <a 
              href="#home" 
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
            >
              FullStack Dev
            </a>
            <div className="hidden md:flex space-x-2 ml-3">
              <SiMongodb className="text-green-500 hover:scale-110" title="MongoDB" />
              <SiExpress className="text-gray-300 hover:scale-110" title="Express" />
              <FaReact className="text-blue-400 hover:animate-spin" title="React" />
              <DiNodejs className="text-green-400 hover:scale-110" title="Node.js" />
            </div>
          </motion.div>

          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <motion.li 
                  key={item.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={`#${item.id}`}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group ${
                      activeSection === item.id 
                        ? "text-blue-400" 
                        : "text-white hover:text-blue-400"
                    }`}
                  >
                    {item.label}
                    <span className={`absolute left-0 bottom-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      activeSection === item.id 
                        ? "w-full bg-blue-400" 
                        : "w-0 bg-blue-400"
                    }`}></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-sm"
      >
        <ul className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <motion.li 
              key={item.id}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={`#${item.id}`}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-blue-400 bg-gray-800"
                    : "text-white hover:text-blue-400 hover:bg-gray-800"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Nav;