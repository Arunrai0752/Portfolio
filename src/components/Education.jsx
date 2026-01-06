import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiAward, FiCalendar, FiMapPin, FiBookOpen, FiChevronRight } from "react-icons/fi";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const Education = () => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 150);
    }, 15000);
    return () => clearInterval(glitchInterval);
  }, []);

  const educationData = [
    {
      degree: "B.TECH",
      institution: "Technocrats Institute Of Technology, Bhopal",
      field: "Electronics and Communication",
      score: "CGPA: 8.35",
      year: "2020 - 2024",
      level: "HIGHER EDUCATION",
      icon: FaGraduationCap,
      color: "#e60a14"
    },
    {
      degree: "12th",
      institution: "Govt. Maharaja Multi Purpose H.S. Excellence School No.1, Chhatarpur",
      field: "MP Board",
      score: "Percentage: 63.8%",
      year: "2019-2020",
      level: "SENIOR SECONDARY",
      icon: FiBookOpen,
      color: "#dc2626"
    },
    {
      degree: "10th",
      institution: "Govt. H.S. School, Kishangarh, Chhatarpur",
      field: "MP Board",
      score: "Percentage: 80.8%",
      year: "2017-2018",
      level: "SECONDARY",
      icon: FaSchool,
      color: "#b91c1c"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  const stagger = {
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  };

  return (
    <>
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Binary rain effect */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-xs text-red-500/20"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: -20,
              opacity: 0
            }}
            animate={{
              y: '100vh',
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              delay: i * 0.3,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.div>
        ))}
      </div>

      <section 
        id="education" 
        className="relative min-h-screen py-32 px-6 overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 50% 30%, #111111 0%, #000000 100%)'
        }}
      >
        {/* Portal glow effects */}
        <div className="absolute -left-40 top-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute -right-40 bottom-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <div className={`relative inline-block ${isGlitching ? 'edu-glitch' : ''}`}>
              <h1 className="text-7xl md:text-8xl font-bold mb-8 tracking-tighter"
                style={{
                  color: '#e60a14',
                  fontFamily: "'Bebas Neue', cursive",
                  letterSpacing: '0.15em',
                  textShadow: '0 0 25px rgba(230, 10, 20, 0.7)'
                }}
              >
                EDUCATION
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
              MY ACADEMIC JOURNEY AND ACHIEVEMENTS
            </p>
          </motion.div>

          {/* Timeline indicator */}
          <div className="relative mb-16">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-1 w-2/3 bg-gradient-to-r from-transparent via-red-500/30 to-transparent rounded-full" />
            <div className="flex justify-between px-8">
              {educationData.map((edu, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveIndex(i)}
                  className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                    activeIndex === i 
                      ? 'bg-red-500 shadow-lg shadow-red-500/50 scale-125' 
                      : 'bg-red-500/30'
                  }`}
                >
                  <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-bold transition-all duration-300 ${
                    activeIndex === i ? 'opacity-100' : 'opacity-40'
                  }`}
                    style={{
                      color: activeIndex === i ? '#ffffff' : '#9ca3af',
                      fontFamily: "'Bebas Neue', cursive",
                      letterSpacing: '0.1em'
                    }}
                  >
                    {edu.year.split(' - ')[0]}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Education Cards */}
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-10"
          >
            {educationData.map((edu, i) => {
              const Icon = edu.icon;
              const isActive = activeIndex === i;
              
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ 
                    y: -15,
                    scale: 1.03,
                    boxShadow: isActive ? '0 25px 50px rgba(230, 10, 20, 0.4)' : '0 15px 40px rgba(0,0,0,0.5)'
                  }}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
                    isActive ? 'z-10' : 'z-0'
                  }`}
                  style={{
                    background: isActive
                      ? 'linear-gradient(145deg, rgba(230, 10, 20, 0.1), rgba(0,0,0,0.9))'
                      : 'linear-gradient(145deg, rgba(20, 20, 20, 0.8), rgba(0,0,0,0.9))',
                    border: `2px solid ${isActive ? '#e60a14' : 'rgba(230, 10, 20, 0.2)'}`,
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#e60a14_1px,transparent_1px)] bg-[size:20px_20px]" />

                  {/* Top badge */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full font-bold"
                    style={{
                      background: isActive ? 'rgba(230, 10, 20, 0.3)' : 'rgba(20, 20, 20, 0.9)',
                      border: `1px solid ${isActive ? '#e60a14' : 'rgba(230, 10, 20, 0.3)'}`,
                      color: isActive ? '#ffffff' : '#9ca3af',
                      fontFamily: "'Bebas Neue', cursive",
                      letterSpacing: '0.1em',
                      fontSize: '0.9rem'
                    }}
                  >
                    {edu.level}
                  </div>

                  <div className="p-8 relative z-10">
                    {/* Degree header */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-2"
                          style={{
                            color: isActive ? '#ffffff' : '#f1f5f9',
                            fontFamily: "'Bebas Neue', cursive",
                            letterSpacing: '0.1em'
                          }}
                        >
                          {edu.degree}
                        </h3>
                        <p className="text-lg"
                          style={{
                            color: isActive ? '#fca5a5' : '#94a3b8',
                            fontFamily: "'Bebas Neue', cursive",
                            letterSpacing: '0.05em'
                          }}
                        >
                          {edu.field}
                        </p>
                      </div>
                      
                      <motion.div
                        animate={floatAnimation}
                        className="p-4 rounded-2xl ml-4"
                        style={{
                          background: isActive 
                            ? `rgba(${parseInt(edu.color.slice(1,3), 16)}, ${parseInt(edu.color.slice(3,5), 16)}, ${parseInt(edu.color.slice(5,7), 16)}, 0.2)`
                            : 'rgba(20, 20, 20, 0.9)',
                          border: `2px solid ${isActive ? edu.color : 'rgba(230, 10, 20, 0.2)'}`
                        }}
                      >
                        <Icon className="w-8 h-8" style={{ color: isActive ? '#ffffff' : edu.color }} />
                      </motion.div>
                    </div>

                    {/* Institution */}
                    <div className="mb-8 p-4 rounded-xl"
                      style={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <FiMapPin className="mt-1 flex-shrink-0" style={{ color: edu.color }} />
                        <p className="text-gray-300 leading-relaxed text-sm">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    {/* Year and Score */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl text-center"
                        style={{
                          background: 'rgba(0, 0, 0, 0.5)',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <FiCalendar style={{ color: edu.color }} />
                          <span className="text-xs font-bold tracking-wider"
                            style={{
                              color: '#9ca3af',
                              fontFamily: "'Bebas Neue', cursive"
                            }}
                          >
                            DURATION
                          </span>
                        </div>
                        <div className="text-lg font-bold" style={{ color: '#ffffff' }}>
                          {edu.year}
                        </div>
                      </div>

                      <div className="p-4 rounded-xl text-center"
                        style={{
                          background: 'rgba(0, 0, 0, 0.5)',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <FiAward style={{ color: edu.color }} />
                          <span className="text-xs font-bold tracking-wider"
                            style={{
                              color: '#9ca3af',
                              fontFamily: "'Bebas Neue', cursive"
                            }}
                          >
                            PERFORMANCE
                          </span>
                        </div>
                        <div className="text-2xl font-bold" style={{ color: edu.color }}>
                          {edu.score.split(': ')[1]}
                        </div>
                      </div>
                    </div>

                    {/* Year indicator */}
                    <div className="mt-8 pt-6 border-t border-gray-800/50">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold tracking-wider"
                          style={{
                            color: '#9ca3af',
                            fontFamily: "'Bebas Neue', cursive",
                            letterSpacing: '0.1em'
                          }}
                        >
                          ACADEMIC YEAR
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold" style={{ color: '#ffffff' }}>
                            {edu.year}
                          </span>
                          <FiChevronRight style={{ color: edu.color }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover effect */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 pointer-events-none ${
                    isActive ? 'opacity-50' : ''
                  }`}
                    style={{
                      background: `radial-gradient(circle at center, ${edu.color}20 0%, transparent 70%)`,
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        
        .edu-glitch {
          animation: edu-glitch 0.3s linear;
        }
        
        @keyframes edu-glitch {
          0% { transform: translate(0) }
          20% { transform: translate(-3px, 3px) scale(1.01) }
          40% { transform: translate(-3px, -3px) scale(0.99) }
          60% { transform: translate(3px, 3px) scale(1.02) }
          80% { transform: translate(3px, -3px) scale(0.98) }
          100% { transform: translate(0) scale(1) }
        }
        
        .timeline-dot {
          position: relative;
        }
        
        .timeline-dot::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: rgba(230, 10, 20, 0.3);
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
          70% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
          100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
        }
      `}</style>
    </>
  );
};

export default Education;