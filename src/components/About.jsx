import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaRocket, FaBolt, FaCode, FaLayerGroup } from 'react-icons/fa';
import Arunimg from '../assets/ArunImg.jpg';

const stats = [
  { value: '2+', label: 'Years Learning' },
  { value: '15+', label: 'Projects Built' },
  { value: '10+', label: 'Technologies' },
  { value: '3', label: 'Client Projects' },
];

const highlights = [
  {
    icon: FaRocket,
    title: 'Performance First',
    desc: 'I obsess over performance metrics, delivering fast, optimized applications.',
    color: 'from-cyan-500/20 to-cyan-500/5',
    border: 'border-cyan-500/20',
    iconColor: 'text-cyan-400',
  },
  {
    icon: FaBolt,
    title: 'Modern Stack',
    desc: 'React, Node.js, TypeScript, MongoDB — full-stack proficiency end-to-end.',
    color: 'from-violet-500/20 to-violet-500/5',
    border: 'border-violet-500/20',
    iconColor: 'text-violet-400',
  },
  {
    icon: FaCode,
    title: 'Clean Code',
    desc: 'Maintainable, readable, and scalable code following best practices.',
    color: 'from-amber-500/20 to-amber-500/5',
    border: 'border-amber-500/20',
    iconColor: 'text-amber-400',
  },
  {
    icon: FaLayerGroup,
    title: 'End-to-End',
    desc: 'From pixel-perfect UIs to robust APIs and database architecture.',
    color: 'from-emerald-500/20 to-emerald-500/5',
    border: 'border-emerald-500/20',
    iconColor: 'text-emerald-400',
  },
];

const containerVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.05),transparent_70%)]" />

      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-px w-12 bg-gradient-to-r from-cyan-400 to-transparent" />
          <span className="text-cyan-400 text-sm font-mono-custom font-medium tracking-widest uppercase">About Me</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-6xl font-extrabold tracking-tight mb-16"
        >
          <span className="text-slate-50">Passionate</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Developer</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left: Photo + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="space-y-8"
          >
            {/* Photo card */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group">
              <img
                src={Arunimg}
                alt="Arun Rai"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              {/* Corner decoration */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-400/60 rounded-tl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-violet-400/60 rounded-br-lg" />
              {/* Overlay text */}
              <div className="absolute bottom-6 left-6">
                <p className="font-display font-bold text-2xl text-white">Arun Rai</p>
                <p className="text-cyan-400 text-sm font-mono-custom">Full Stack Developer</p>
              </div>
            </div>

          </motion.div>

          {/* Right: Bio + Highlights */}
          <motion.div
            variants={containerVariant}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-8"
          >
            <motion.div variants={fadeUp} className="space-y-5 text-slate-400 font-body text-base leading-relaxed">
              <p>
                I'm a passionate{' '}
                <span className="text-cyan-400 font-semibold">MERN Stack Developer</span>{' '}
                with a keen eye for detail and a drive for creating exceptional digital experiences. My journey in web development
                has equipped me with a comprehensive skill set that allows me to bring ideas to life.
              </p>
              <p>
                I specialize in building{' '}
                <span className="text-violet-400 font-semibold">responsive, scalable applications</span>{' '}
                using modern JavaScript frameworks. Currently working as a{' '}
                <span className="text-amber-400 font-semibold">Contract Full Stack Developer</span>,
                I deliver production-ready solutions from intuitive user interfaces to robust backend systems.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community. I'm always excited to take on new challenges.
              </p>
            </motion.div>

          
          </motion.div>
        </div>
      </div>
    </section>
  );
}