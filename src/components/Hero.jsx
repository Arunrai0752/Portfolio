import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { FiArrowRight, FiCode } from 'react-icons/fi';
import { Typewriter } from 'react-simple-typewriter';
import Arunimg from '../assets/ArunImg.jpg';

const floatVariant = {
  initial: { y: 0 },
  animate: { y: [-12, 0, -12], transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' } },
};

const containerVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const itemVariant = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
    >
      {/* Dot-grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(34,211,238,0.055)_1px,transparent_1px)] bg-[size:36px_36px]" />

      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-900/40 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">

          {/* ── LEFT: Text Content ── */}
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="flex-1 text-center md:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariant} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 text-sm font-mono-custom font-medium tracking-wide">Available for work</span>
            </motion.div>

            {/* Greeting */}
            <motion.p variants={itemVariant} className="text-slate-400 text-lg font-body font-medium mb-3 tracking-wide">
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariant}
              className="font-display text-[4.5rem] sm:text-[5.5rem] lg:text-[6.5rem] font-extrabold leading-none tracking-tight mb-4"
            >
              <span className="text-slate-50">ARUN </span>
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent bg-[size:200%] animate-gradient-x">RAI</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div variants={itemVariant} className="flex items-center gap-3 justify-center md:justify-start mb-8 h-12">
              <span className="text-slate-400 font-body font-light text-xl">I am a</span>
              <span className="text-xl font-semibold font-body bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                {mounted && (
                  <Typewriter
                    words={['Full Stack Developer', 'MERN Stack Expert', 'React.js Specialist', 'Problem Solver', 'Code Artist']}
                    loop={Infinity}
                    cursor
                    cursorStyle="_"
                    typeSpeed={75}
                    deleteSpeed={40}
                    delaySpeed={2000}
                  />
                )}
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariant}
              className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 mb-10 font-body"
            >
              Crafting exceptional digital experiences with modern web technologies.
              I specialize in building responsive, scalable applications using the MERN
              stack — turning ideas into polished, production-ready products.
            </motion.p>

            {/* Social icons */}
            <motion.div variants={itemVariant} className="flex gap-4 justify-center md:justify-start mb-10">
              {[
                { icon: FaGithub, href: 'https://github.com/Arunrai0752', label: 'GitHub', hoverColor: 'hover:text-slate-100 hover:border-slate-500' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/arun-fullstack/', label: 'LinkedIn', hoverColor: 'hover:text-blue-400 hover:border-blue-400/50' },
              ].map(({ icon: Icon, href, label, hoverColor }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl bg-slate-800/50 border border-slate-700/60 text-slate-400 transition-all duration-300 ${hoverColor}`}
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariant} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-950 overflow-hidden flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #22d3ee, #8b5cf6)' }}
              >
                <FiCode size={16} />
                <span>View My Work</span>
                <FiArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-100 bg-slate-800/60 border border-slate-700/60 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact Me
              </motion.a>

              <motion.a
                href="Arun_FullStackDev _Resume.pdf"
                download
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-300 bg-transparent border border-slate-700/60 hover:border-slate-500 hover:text-slate-100 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaDownload size={14} />
                Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex-shrink-0 relative"
          >
            <motion.div variants={floatVariant} initial="initial" animate="animate" className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/30 to-violet-500/30 blur-2xl scale-110" />

              {/* Rotating gradient border */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-[3px]"
                style={{ background: 'linear-gradient(180deg, #22d3ee, #8b5cf6, #22d3ee)' }}>
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                  <img
                    src={Arunimg}
                    alt="Arun Rai"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Animated ping ring */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/20 animate-ping" style={{ animationDuration: '3s' }} />

              {/* Tech badge - floating top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                animate-float="true"
                className="absolute -top-4 -right-6 bg-slate-900 border border-cyan-500/30 rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg shadow-cyan-500/10"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-mono-custom text-cyan-400 font-medium">React.js</span>
              </motion.div>

              {/* Experience badge - floating bottom left */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-4 -left-6 bg-slate-900 border border-violet-500/30 rounded-xl px-3 py-2 shadow-lg shadow-violet-500/10"
              >
                <p className="text-xs text-slate-400 font-body">Full Stack</p>
                <p className="text-sm font-semibold text-violet-400 font-display">Developer</p>
              </motion.div>

              {/* Binary decoration */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-40">
                {[1,0,1,0,1,1,0,1].map((bit, i) => (
                  <motion.span
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, delay: i * 0.12, repeat: Infinity }}
                    className="text-xs font-mono-custom text-cyan-400"
                  >
                    {bit}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-500 font-mono-custom tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-[1px] h-8 bg-gradient-to-b from-cyan-400/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}