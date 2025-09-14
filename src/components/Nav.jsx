import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { motion, AnimatePresence } from "framer-motion";

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

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    }
  };

  const menuItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-lg py-2 shadow-2xl border-b border-indigo-500/20"
          : "bg-slate-900/80 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            variants={logoVariants}
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 flex items-center space-x-3"
          >
            <motion.a
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent hover:from-amber-400 hover:via-cyan-400 hover:to-indigo-400 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              FullStack Dev
            </motion.a>
            <div className="hidden md:flex space-x-2 ml-4">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-1 rounded-full bg-gradient-to-r from-green-400 to-green-600 shadow-lg"
              >
                <SiMongodb className="text-white text-sm" title="MongoDB" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: -5 }}
                className="p-1 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 shadow-lg"
              >
                <SiExpress className="text-white text-sm" title="Express" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg"
              >
                <FaReact className="text-white text-sm" title="React" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-1 rounded-full bg-gradient-to-r from-green-500 to-green-700 shadow-lg"
              >
                <DiNodejs className="text-white text-sm" title="Node.js" />
              </motion.div>
            </div>
          </motion.div>

          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  custom={index}
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={`#${item.id}`}
                    className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 group ${
                      activeSection === item.id
                        ? "text-amber-400 bg-indigo-500/20 shadow-lg"
                        : "text-gray-300 hover:text-amber-400 hover:bg-indigo-500/10"
                    }`}
                  >
                    {item.label}
                    <motion.span
                      className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-amber-400 to-cyan-400 rounded-full transition-all duration-300 ${
                        activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                      layoutId="activeIndicator"
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiX className="block h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMenu className="block h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-gradient-to-b from-slate-900/95 to-indigo-900/95 backdrop-blur-lg border-t border-indigo-500/20"
          >
            <ul className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={`#${item.id}`}
                    className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-amber-400 bg-indigo-500/30 shadow-lg border border-amber-400/30"
                        : "text-white hover:text-amber-400 hover:bg-indigo-500/20 hover:shadow-md"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Nav;