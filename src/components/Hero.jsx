import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode, FaDownload, FaChevronDown } from 'react-icons/fa';
import Arunimg from '../assets/ArunImg.jpg';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    // Random glitch effect for text
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 100);
    }, 8000);

   

    return () => {
      clearInterval(glitchInterval);
    };
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  
  return (
    <>
      {/* Stranger Things Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Red grid lines */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,#e60a14_1px,transparent_1px),linear-gradient(#e60a14_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [null, -50, null],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </div>

      <section
        id="home"
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-24 md:pt-0 overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #0a0a0a 0%, #000 100%)'
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse" />
        
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="w-full md:w-1/2  flex justify-center items-center mb-12 md:mb-0 z-10"
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 40px rgba(230, 10, 20, 0.5)'
            }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="relative rounded-full p-2"
          >
            <div className={`relative ${isGlitching ? 'stranger-glitch' : ''}`}>
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-red-500/50 shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black/50 z-10" />
                <img
                  src={Arunimg}
                  alt="Arun Rai"
                  className="w-full h-full object-cover relative z-0"
                  style={{
                    filter: 'contrast(1.1) saturate(1.1)'
                  }}
                />
              </div>
              
              {/* Stranger Things logo effect */}
              <div className="absolute -inset-4 rounded-full border-2 border-red-500/30 animate-ping pointer-events-none" />
            </div>
            
            {/* Floating React Icon with Stranger Things glow */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: 'linear',
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }
              }}
              className="absolute -top-4 -right-4 w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-lg border-2 border-red-500/50"
              style={{
                boxShadow: '0 0 20px rgba(230, 10, 20, 0.7)'
              }}
            >
              <FaCode className="w-7 h-7 text-red-500" />
            </motion.div>
            
            {/* Binary code animation */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-1 opacity-60">
              {[1,0,1,0,1,1,0,1].map((bit, i) => (
                <motion.span
                  key={i}
                  className="text-xs font-mono text-red-500"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1,
                    delay: i * 0.1,
                    repeat: Infinity
                  }}
                >
                  {bit}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="w-full md:w-1/2 text-center md:text-left z-10"
        >
          <motion.div variants={fadeInUp}>
            <p className="text-xl font-medium mb-3 tracking-wider" style={{
              color: '#9ca3af',
              textShadow: '0 0 10px rgba(156, 163, 175, 0.5)',
              fontFamily: "'Bebas Neue', cursive"
            }}>
              HELLO, I'M
            </p>
            
            <div className={`relative ${isGlitching ? 'stranger-text-glitch' : ''}`}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tighter" style={{
                color: '#e60a14',
                fontFamily: "'Bebas Neue', cursive",
                letterSpacing: '0.05em'
              }}>
                ARUN RAI
              </h1>
            </div>
            
            <div className="text-2xl md:text-3xl h-12 flex items-center justify-center md:justify-start">
              <div className="relative">
                <span className="text-gray-300 font-light mr-2" style={{ fontFamily: "'Bebas Neue', cursive" }}>
                  I AM A
                </span>
                <span className="text-red-400 font-bold" style={{
                  textShadow: '0 0 10px rgba(248, 113, 113, 0.7)',
                  fontFamily: "'Bebas Neue', cursive"
                }}>
                  <Typewriter
                    words={['FULL STACK DEVELOPER', 'MERN STACK EXPERT', 'PROBLEM SOLVER', 'CODE ARTIST']}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={40}
                    delaySpeed={2000}
                  />
                </span>
              </div>
            </div>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-8 text-lg max-w-xl mx-auto md:mx-0 leading-relaxed px-4 md:px-0 py-4 rounded-lg border-l-4 border-red-500/50 bg-black/30 backdrop-blur-sm"
            style={{
              color: '#d1d5db',
              textShadow: '0 1px 2px rgba(0,0,0,0.8)'
            }}
          >
            Crafting exceptional digital experiences with modern web technologies.
            I specialize in building responsive, scalable applications using the MERN stack
            and turning ideas into reality.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex justify-center md:justify-start gap-6 mt-8"
          >
            <motion.a
              href="https://github.com/Arunrai0752"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.15, 
                y: -5,
                boxShadow: '0 0 25px rgba(255, 255, 255, 0.8)'
              }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-xl bg-black/60 border border-gray-800 text-gray-300 relative overflow-hidden group"
              style={{
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50 group-hover:from-gray-800/50 transition-all duration-300" />
              <FaGithub className="w-7 h-7 relative z-10 group-hover:text-white" />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/arun-fullstack/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.15, 
                y: -5,
                boxShadow: '0 0 25px rgba(37, 99, 235, 0.8)'
              }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-xl bg-black/60 border border-gray-800 text-gray-300 relative overflow-hidden group"
              style={{
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-black/50 group-hover:from-blue-800/50 transition-all duration-300" />
              <FaLinkedin className="w-7 h-7 relative z-10 group-hover:text-blue-400" />
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-10"
          >
            <motion.a
              href="#projects"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(230, 10, 20, 0.7)'
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 font-bold rounded-full flex items-center justify-center gap-3 relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #e60a14 0%, #b80c14 100%)',
                color: '#ffffff',
                fontFamily: "'Bebas Neue', cursive",
                fontSize: '1.1rem',
                letterSpacing: '0.05em'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <FaCode className="w-5 h-5 relative z-10" />
              <span className="relative z-10">VIEW MY WORK</span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 25px rgba(220, 38, 38, 0.5)',
                borderColor: '#e60a14',
                color: '#e60a14'
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gray-700 font-bold rounded-full hover:border-red-500 hover:text-red-500 transition-all duration-300 flex items-center justify-center"
              style={{
                color: '#d1d5db',
                fontFamily: "'Bebas Neue', cursive",
                fontSize: '1.1rem',
                letterSpacing: '0.05em'
              }}
            >
              CONTACT ME
            </motion.a>

            <motion.a
              href="Arun_FullStackDev _Resume.pdf"
              download
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 20px rgba(156, 163, 175, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 font-bold rounded-full flex items-center justify-center gap-3 relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
                color: '#e5e7eb',
                fontFamily: "'Bebas Neue', cursive",
                fontSize: '1.1rem',
                letterSpacing: '0.05em'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <FaDownload className="w-5 h-5 relative z-10" />
              <span className="relative z-10">RESUME</span>
            </motion.a>
          </motion.div>
        </motion.div>

      
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        
        .stranger-glitch {
          position: relative;
          animation: stranger-glitch 0.3s linear;
        }
        
        @keyframes stranger-glitch {
          0% { transform: translate(0) }
          20% { transform: translate(-3px, 2px) }
          40% { transform: translate(-2px, -2px) }
          60% { transform: translate(3px, 3px) }
          80% { transform: translate(2px, -3px) }
          100% { transform: translate(0) }
        }
        
        .stranger-text-glitch::before,
        .stranger-text-glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .stranger-text-glitch::before {
          left: 2px;
          text-shadow: -2px 0 #00ffff;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }
        
        .stranger-text-glitch::after {
          left: -2px;
          text-shadow: -2px 0 #ff00ff;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim2 5s infinite linear alternate-reverse;
        }
        
        @keyframes glitch-anim {
          0% { clip: rect(62px, 9999px, 71px, 0) }
          5% { clip: rect(33px, 9999px, 40px, 0) }
          10% { clip: rect(82px, 9999px, 91px, 0) }
          15% { clip: rect(51px, 9999px, 60px, 0) }
          20% { clip: rect(12px, 9999px, 21px, 0) }
          25% { clip: rect(71px, 9999px, 80px, 0) }
          30% { clip: rect(42px, 9999px, 51px, 0) }
          35% { clip: rect(92px, 9999px, 101px, 0) }
          40% { clip: rect(21px, 9999px, 30px, 0) }
          45% { clip: rect(82px, 9999px, 91px, 0) }
          50% { clip: rect(53px, 9999px, 62px, 0) }
          55% { clip: rect(12px, 9999px, 21px, 0) }
          60% { clip: rect(72px, 9999px, 81px, 0) }
          65% { clip: rect(43px, 9999px, 52px, 0) }
          70% { clip: rect(92px, 9999px, 101px, 0) }
          75% { clip: rect(22px, 9999px, 31px, 0) }
          80% { clip: rect(83px, 9999px, 92px, 0) }
          85% { clip: rect(54px, 9999px, 63px, 0) }
          90% { clip: rect(13px, 9999px, 22px, 0) }
          95% { clip: rect(73px, 9999px, 82px, 0) }
          100% { clip: rect(44px, 9999px, 53px, 0) }
        }
        
        @keyframes glitch-anim2 {
          0% { clip: rect(62px, 9999px, 71px, 0) }
          5% { clip: rect(33px, 9999px, 40px, 0) }
          10% { clip: rect(82px, 9999px, 91px, 0) }
          15% { clip: rect(51px, 9999px, 60px, 0) }
          20% { clip: rect(12px, 9999px, 21px, 0) }
          25% { clip: rect(71px, 9999px, 80px, 0) }
          30% { clip: rect(42px, 9999px, 51px, 0) }
          35% { clip: rect(92px, 9999px, 101px, 0) }
          40% { clip: rect(21px, 9999px, 30px, 0) }
          45% { clip: rect(82px, 9999px, 91px, 0) }
          50% { clip: rect(53px, 9999px, 62px, 0) }
          55% { clip: rect(12px, 9999px, 21px, 0) }
          60% { clip: rect(72px, 9999px, 81px, 0) }
          65% { clip: rect(43px, 9999px, 52px, 0) }
          70% { clip: rect(92px, 9999px, 101px, 0) }
          75% { clip: rect(22px, 9999px, 31px, 0) }
          80% { clip: rect(83px, 9999px, 92px, 0) }
          85% { clip: rect(54px, 9999px, 63px, 0) }
          90% { clip: rect(13px, 9999px, 22px, 0) }
          95% { clip: rect(73px, 9999px, 82px, 0) }
          100% { clip: rect(44px, 9999px, 53px, 0) }
        }
      `}</style>
    </>
  );
}