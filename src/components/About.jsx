import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaBolt, FaCode, FaEye } from 'react-icons/fa';

export default function About() {
  const [isGlitching, setIsGlitching] = useState(false);
  const [isBinaryVisible, setIsBinaryVisible] = useState(false);

  useEffect(() => {
    // Random glitch effect
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 15000);

    // Binary code effect
    const binaryInterval = setInterval(() => {
      setIsBinaryVisible(true);
      setTimeout(() => setIsBinaryVisible(false), 3000);
    }, 8000);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(binaryInterval);
    };
  }, []);

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
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  };

  return (
    <>
      {/* Stranger Things Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Scanning line effect */}
        <motion.div
          className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/80 to-transparent"
          animate={{ y: ['0vh', '100vh', '0vh'] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{ filter: 'blur(1px)' }}
        />
      </div>

      <section
        id="about"
        className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #111 0%, #000 100%)'
        }}
      >
        {/* Binary Rain Effect */}
        {isBinaryVisible && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute font-mono text-xs text-red-500/30"
                initial={{
                  x: Math.random() * 100 + 'vw',
                  y: -20,
                  opacity: 0
                }}
                animate={{
                  y: '100vh',
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  delay: i * 0.1,
                  ease: 'linear'
                }}
                style={{
                  left: `${Math.random() * 100}vw`,
                  animationDelay: `${i * 0.2}s`
                }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </motion.div>
            ))}
          </div>
        )}

        {/* Upside Down Portal Effect */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className={`relative inline-block ${isGlitching ? 'stranger-text-glitch' : ''}`}>
              <h1 
                className="text-7xl md:text-8xl font-bold mb-8 tracking-tighter"
                style={{
                  color: '#e60a14',
                  fontFamily: "'Bebas Neue', cursive",
                  letterSpacing: '0.1em'
                }}
              >
                ABOUT ME
              </h1>
            </div>
            
            <div className="relative w-48 h-2 mx-auto mb-10 overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-600 to-red-900 animate-pulse" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            
            <p className="text-2xl max-w-3xl mx-auto leading-relaxed px-4 py-6 rounded-xl border border-red-500/30 bg-black/40 backdrop-blur-sm" 
              style={{
                color: '#d1d5db',
                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                fontFamily: "'Bebas Neue', cursive",
                letterSpacing: '0.05em'
              }}
            >
              PASSIONATE ABOUT CRAFTING DIGITAL EXPERIENCES THAT MAKE A DIFFERENCE
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-16"
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ 
                y: -10,
                boxShadow: '0 25px 50px rgba(230, 10, 20, 0.3)',
                borderColor: '#e60a14'
              }}
              className="relative p-10 rounded-3xl border-2 border-red-900/50 backdrop-blur-lg overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, rgba(10,10,10,0.9) 0%, rgba(0,0,0,0.9) 100%)'
              }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,#e60a14_1px,transparent_1px),linear-gradient(#e60a14_1px,transparent_1px)] bg-[size:30px_30px]" />
              
              {/* Glowing corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-500" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500" />

              <motion.div
                animate={floatAnimation}
                className="absolute -top-6 -right-6 w-20 h-20 bg-red-500/10 rounded-full blur-xl"
              />

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-10 flex items-center gap-4" 
                  style={{
                    color: '#ffffff',
                    fontFamily: "'Bebas Neue', cursive",
                    letterSpacing: '0.1em'
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 45, scale: 1.2 }}
                    className="p-3 rounded-xl bg-gradient-to-br from-red-600 to-red-800"
                    style={{ boxShadow: '0 0 20px rgba(230, 10, 20, 0.7)' }}
                  >
                    <FaRocket className="w-7 h-7 text-white" />
                  </motion.div>
                  <span className="relative">
                    PROFESSIONAL SUMMARY
                    <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-red-600 to-transparent" />
                  </span>
                </h3>

                <div className="space-y-8 text-lg leading-relaxed" 
                  style={{
                    color: '#cbd5e1'
                  }}
                >
                  <p className="relative pl-6 border-l-2 border-red-500/50">
                    <span className="absolute -left-2 top-0 w-3 h-3 bg-red-500 rounded-full" />
                    I'm a passionate <span className="font-bold text-red-400" style={{ textShadow: '0 0 10px rgba(248, 113, 113, 0.5)' }}>MERN STACK DEVELOPER</span> with a keen eye for detail
                    and a drive for creating exceptional digital experiences. My journey in web development has equipped me with
                    a comprehensive skill set that allows me to bring ideas to life.
                  </p>

                  <p className="relative pl-6 border-l-2 border-red-500/50">
                    <span className="absolute -left-2 top-0 w-3 h-3 bg-red-500 rounded-full" />
                    I specialize in building <span className="font-bold text-red-400" style={{ textShadow: '0 0 10px rgba(248, 113, 113, 0.5)' }}>RESPONSIVE, SCALABLE APPLICATIONS</span> using
                    modern JavaScript frameworks and technologies. From crafting intuitive user interfaces to developing robust
                    backend systems, I enjoy every aspect of the development process.
                  </p>

                  <p className="relative pl-6 border-l-2 border-red-500/50">
                    <span className="absolute -left-2 top-0 w-3 h-3 bg-red-500 rounded-full" />
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                    or sharing knowledge with the developer community. I'm always excited to take on new challenges and
                    collaborate on innovative projects.
                  </p>
                </div>

              
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        
        .stranger-text-glitch {
          position: relative;
          animation: text-glitch 0.3s linear;
        }
        
        @keyframes text-glitch {
          0% { transform: translate(0) }
          20% { transform: translate(-3px, 2px) }
          40% { transform: translate(-2px, -2px) }
          60% { transform: translate(3px, 3px) }
          80% { transform: translate(2px, -3px) }
          100% { transform: translate(0) }
        }
        
        .binary-rain {
          position: absolute;
          color: rgba(230, 10, 20, 0.3);
          animation: fall linear infinite;
        }
        
        @keyframes fall {
          to {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </>
  );
}