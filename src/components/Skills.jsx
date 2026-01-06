import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaBootstrap,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiPostman, SiVite, SiTypescript } from 'react-icons/si';
import { DiJavascript, DiHtml5, DiCss3 } from 'react-icons/di';

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 150);
    }, 12000);
    return () => clearInterval(glitchInterval);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  const stagger = {
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skills = [
    { name: 'Java', icon: FaJava, color: '#ef4444', level: 75, desc: 'Backend logic' },
    { name: 'HTML5', icon: DiHtml5, color: '#f97316', level: 95, desc: 'Structure & semantics' },
    { name: 'CSS3', icon: DiCss3, color: '#3b82f6', level: 90, desc: 'Styling mastery' },
    { name: 'JavaScript', icon: DiJavascript, color: '#eab308', level: 92, desc: 'Dynamic magic' },
    { name: 'Bootstrap', icon: FaBootstrap, color: '#a855f7', level: 85, desc: 'Rapid UI' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4', level: 94, desc: 'Utility-first' },
    { name: 'React', icon: FaReact, color: '#0ea5e9', level: 88, desc: 'Component wizardry' },
    { name: 'Node.js', icon: FaNodeJs, color: '#22c55e', level: 82, desc: 'Server-side power' },
    { name: 'Express', icon: SiExpress, color: '#71717a', level: 80, desc: 'API crafting' },
    { name: 'MongoDB', icon: SiMongodb, color: '#10b981', level: 78, desc: 'NoSQL database' },
    { name: 'Git', icon: FaGitAlt, color: '#f97316', level: 70, desc: 'Version control' },
    { name: 'GitHub', icon: FaGithub, color: '#d1d5db', level: 75, desc: 'Code collaboration' },
    { name: 'Postman', icon: SiPostman, color: '#f97316', level: 72, desc: 'API testing' },
    { name: 'Figma', icon: FaFigma, color: '#ec4899', level: 65, desc: 'UI/UX design' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3b82f6', level: 85, desc: 'Type safety' }
  ];

  return (
    <>
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(90deg,#e60a14_1px,transparent_1px),linear-gradient(#e60a14_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500/20 rounded-full"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
            }}
            animate={{
              x: [null, Math.random() * 20 - 10 + 'px'],
              y: [null, Math.random() * 20 - 10 + 'px'],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        ))}
      </div>

      <section
        id="skills"
        className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 70% 50%, #0a0a0a 0%, #000000 100%)'
        }}
      >
        {/* Portal glow effect */}
        <div className="absolute -left-32 top-1/2 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute -right-32 top-1/3 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className={`relative inline-block ${isGlitching ? 'skill-glitch' : ''}`}>
              <h1 
                className="text-7xl md:text-8xl font-bold mb-10 tracking-tighter"
                style={{
                  color: '#e60a14',
                  fontFamily: "'Bebas Neue', cursive",
                  letterSpacing: '0.15em',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                SKILLS
              </h1>
              {/* Glow effect */}
              <div 
                className="absolute inset-0 blur-2xl opacity-50"
                style={{
                  background: '#e60a14',
                  zIndex: 1
                }}
              />
            </div>
            
            {/* Animated divider */}
            <div className="relative w-64 h-1 mx-auto mb-12 overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-600 to-red-900" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            
            <p className="text-2xl max-w-3xl mx-auto leading-relaxed px-6 py-5 rounded-xl border border-red-500/20 bg-black/30 backdrop-blur-sm" 
              style={{
                color: '#94a3b8',
                fontFamily: "'Bebas Neue', cursive",
                letterSpacing: '0.1em',
                textShadow: '0 2px 4px rgba(0,0,0,0.8)'
              }}
            >
              MASTERING THE ART OF MODERN WEB DEVELOPMENT
            </p>
          </motion.div>

          {/* Active Skill Info */}
          {activeSkill && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto mb-16 p-8 rounded-2xl border-2 border-red-500/30 bg-black/50 backdrop-blur-lg"
              style={{
                boxShadow: '0 0 40px rgba(230, 10, 20, 0.3)'
              }}
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="p-4 rounded-xl" style={{ background: 'rgba(230, 10, 20, 0.1)', border: `1px solid ${activeSkill.color}30` }}>
                  <activeSkill.icon className="w-12 h-12" style={{ color: activeSkill.color }} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2" style={{ color: '#ffffff', fontFamily: "'Bebas Neue', cursive" }}>
                    {activeSkill.name}
                  </h3>
                  <p className="text-lg" style={{ color: '#cbd5e1' }}>{activeSkill.desc}</p>
                </div>
              </div>
              <div className="relative h-3 bg-black/50 rounded-full overflow-hidden border border-red-900/50">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${activeSkill.level}%` }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ 
                    background: `linear-gradient(90deg, ${activeSkill.color}80, ${activeSkill.color})`,
                    boxShadow: `0 0 20px ${activeSkill.color}`
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold" style={{ color: '#ffffff', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
                    {activeSkill.level}%
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          >
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              const isActive = activeSkill?.name === skill.name;
              
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ 
                    scale: 1.15,
                    y: -12,
                    rotate: Math.random() > 0.5 ? 5 : -5
                  }}
                  onHoverStart={() => setActiveSkill(skill)}
                  onHoverEnd={() => setActiveSkill(null)}
                  className="group relative flex flex-col items-center p-8 rounded-2xl cursor-pointer backdrop-blur-sm"
                  style={{
                    background: isActive 
                      ? `linear-gradient(135deg, rgba(230, 10, 20, 0.15), rgba(0,0,0,0.8))`
                      : 'linear-gradient(135deg, rgba(20, 20, 20, 0.7), rgba(0,0,0,0.9))',
                    border: `2px solid ${isActive ? '#e60a14' : 'rgba(230, 10, 20, 0.2)'}`,
                    boxShadow: isActive 
                      ? `0 20px 40px rgba(230, 10, 20, 0.4), inset 0 0 30px rgba(230, 10, 20, 0.1)`
                      : '0 10px 30px rgba(0,0,0,0.5)'
                  }}
                >
                  {/* Binary code background */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-10">
                    <div className="absolute inset-0 font-mono text-xs" style={{ color: skill.color }}>
                      101010101001
                    </div>
                  </div>

                  {/* Skill level indicator */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 flex items-center justify-center rounded-full border-2 border-red-500/50 bg-black"
                       style={{ boxShadow: '0 0 15px rgba(230, 10, 20, 0.5)' }}>
                    <span className="text-xs font-bold" style={{ color: '#ffffff' }}>{skill.level}%</span>
                  </div>

                  {/* Icon container */}
                  <div className="relative p-5 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300"
                       style={{
                         background: `rgba(230, 10, 20, 0.1)`,
                         border: `1px solid ${skill.color}30`,
                         boxShadow: isActive ? `0 0 30px ${skill.color}80` : 'none'
                       }}>
                    <Icon className="w-12 h-12 transition-all duration-300"
                          style={{ 
                            color: isActive ? '#ffffff' : skill.color,
                            filter: isActive ? 'drop-shadow(0 0 10px currentColor)' : 'none'
                          }} />
                  </div>

                  {/* Skill name */}
                  <h3 className="text-xl font-bold text-center mb-3 transition-all duration-300"
                      style={{
                        color: isActive ? '#ffffff' : '#f1f5f9',
                        fontFamily: "'Bebas Neue', cursive",
                        letterSpacing: '0.1em',
                        textShadow: isActive ? '0 0 15px rgba(255,255,255,0.8)' : 'none'
                      }}>
                    {skill.name}
                  </h3>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"
                       style={{
                         background: `radial-gradient(circle at center, ${skill.color}20 0%, transparent 70%)`,
                       }} />
                </motion.div>
              );
            })}
          </motion.div>

       
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        
        .skill-glitch {
          animation: skill-glitch 0.4s linear;
        }
        
        @keyframes skill-glitch {
          0% { transform: translate(0) }
          20% { transform: translate(-4px, 3px) scale(1.02) }
          40% { transform: translate(-3px, -3px) scale(0.98) }
          60% { transform: translate(4px, 4px) scale(1.01) }
          80% { transform: translate(3px, -4px) scale(0.99) }
          100% { transform: translate(0) scale(1) }
        }
        
        section {
          position: relative;
        }
        
        section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #e60a14, transparent);
          animation: scan 3s linear infinite;
        }
        
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
      `}</style>
    </>
  );
}