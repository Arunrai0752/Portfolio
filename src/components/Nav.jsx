import React, { useState, useEffect } from 'react';
import { motion , AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaReact } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import { DiNodejs } from 'react-icons/di';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 10000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(glitchInterval);
    };
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Stranger Things Inspired Background Effect */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/30 to-transparent animate-pulse" />
      
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 py-3 border-b border-red-900/50' : 'bg-black/80 py-5'
        } ${isGlitching ? 'stranger-glitch' : ''}`}
        style={{
          backdropFilter: 'blur(10px)',
          boxShadow: '0 0 20px rgba(220, 38, 38, 0.3)',
          fontFamily: "'Bebas Neue', cursive"
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="flex items-center gap-6"
            >
              <motion.a
                href="#home"
                whileHover={{ scale: 1.05 }}
                className="relative text-3xl font-bold tracking-widest"
                style={{
                  color: '#e60a14',
                }}
              >
                ARUN DEV
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse" />
              </motion.a>
              
              <div className="hidden md:flex items-center gap-2">
                {[
                  { Icon: SiMongodb, color: 'text-green-500', glow: '#10b981' },
                  { Icon: SiExpress, color: 'text-gray-300', glow: '#9ca3af' },
                  { Icon: FaReact, color: 'text-cyan-400', glow: '#22d3ee' },
                  { Icon: DiNodejs, color: 'text-green-600', glow: '#16a34a' }
                ].map(({ Icon, color, glow }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: i % 2 === 0 ? 8 : -8,
                      boxShadow: `0 0 15px ${glow}`
                    }}
                    className="p-2 rounded-lg bg-black/50 border border-gray-800 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50" />
                    <Icon 
                      className={`w-5 h-5 ${color} relative z-10`}
                      style={{ filter: 'drop-shadow(0 0 2px currentColor)' }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  whileHover={{ 
                    y: -2,
                    color: '#e60a14',
                    textShadow: '0 0 8px #e60a14'
                  }}
                  className={`relative text-base font-semibold tracking-wide transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-red-500'
                      : 'text-gray-300 hover:text-red-400'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        boxShadow: '0 0 10px #ef4444'
                      }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 15px #e60a14'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 rounded-xl bg-black/60 border border-red-900/50 text-red-500 relative overflow-hidden"
              style={{
                boxShadow: '0 0 10px rgba(220, 38, 38, 0.5)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent" />
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    className="relative z-10"
                  >
                    <FiX className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    className="relative z-10"
                  >
                    <FiMenu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-red-900/50 bg-black/95 relative"
              style={{
                backdropFilter: 'blur(10px)',
                boxShadow: 'inset 0 0 20px rgba(220, 38, 38, 0.2)'
              }}
            >
              {/* Grid pattern background */}
              <div className="absolute inset-0 opacity-5 bg-[linear-gradient(90deg,#000_1px,transparent_1px),linear-gradient(#000_1px,transparent_1px)] bg-[size:20px_20px]" />
              
              <div className="relative z-10 px-6 py-4 space-y-2">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ 
                      x: 8,
                      color: '#e60a14'
                    }}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 text-lg font-semibold tracking-wide transition-all duration-300 border-b border-red-900/30 ${
                      activeSection === item.id
                        ? 'text-red-500'
                        : 'text-gray-300 hover:text-red-400'
                    }`}
                    style={{
                      textShadow: activeSection === item.id ? '0 0 8px #e60a14' : 'none'
                    }}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.span
                        className="absolute right-4 top-1/2 transform -translate-y-1/2"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ●
                      </motion.span>
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <style >{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        
        .stranger-glitch {
          position: relative;
          animation: glitch 0.2s linear infinite;
        }
        
        .stranger-glitch::before,
        .stranger-glitch::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: inherit;
          clip: rect(0, 900px, 0, 0);
          animation: glitch-effect 0.2s linear infinite;
        }
        
        .stranger-glitch::before {
          left: 2px;
          animation: glitch-effect 0.3s linear infinite;
          clip: rect(0, 900px, 0, 0);
        }
        
        .stranger-glitch::after {
          left: -2px;
          animation: glitch-effect2 0.2s linear infinite;
          clip: rect(0, 900px, 0, 0);
        }
        
        @keyframes glitch {
          0% { transform: translate(0) }
          20% { transform: translate(-1px, 1px) }
          40% { transform: translate(-1px, -1px) }
          60% { transform: translate(1px, 1px) }
          80% { transform: translate(1px, -1px) }
          100% { transform: translate(0) }
        }
        
        @keyframes glitch-effect {
          0% { clip: rect(42px, 9999px, 44px, 0) }
          5% { clip: rect(12px, 9999px, 59px, 0) }
          10% { clip: rect(48px, 9999px, 29px, 0) }
          15% { clip: rect(42px, 9999px, 73px, 0) }
          20% { clip: rect(63px, 9999px, 27px, 0) }
          25% { clip: rect(34px, 9999px, 55px, 0) }
          30% { clip: rect(86px, 9999px, 73px, 0) }
          35% { clip: rect(20px, 9999px, 20px, 0) }
          100% { clip: rect(42px, 9999px, 44px, 0) }
        }
        
        @keyframes glitch-effect2 {
          0% { clip: rect(42px, 9999px, 44px, 0) }
          5% { clip: rect(12px, 9999px, 59px, 0) }
          10% { clip: rect(48px, 9999px, 29px, 0) }
          15% { clip: rect(42px, 9999px, 73px, 0) }
          20% { clip: rect(63px, 9999px, 27px, 0) }
          25% { clip: rect(34px, 9999px, 55px, 0) }
          30% { clip: rect(86px, 9999px, 73px, 0) }
          35% { clip: rect(20px, 9999px, 20px, 0) }
          100% { clip: rect(42px, 9999px, 44px, 0) }
        }
      `}</style>
    </>
  );
}