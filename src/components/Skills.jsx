import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaJava, FaBootstrap, FaFigma, FaGitAlt, FaGithub, FaDatabase,
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiPostman, SiVite, SiTypescript } from 'react-icons/si';
import { DiJavascript, DiHtml5, DiCss3 } from 'react-icons/di';

const categories = ['Frontend', 'Backend', 'Database', 'Tools'];

const skills = {
  Frontend: [
    { name: 'React.js', icon: FaReact, level: 88, color: '#22d3ee' },
    { name: 'TypeScript', icon: SiTypescript, level: 85, color: '#3b82f6' },
    { name: 'JavaScript', icon: DiJavascript, level: 92, color: '#eab308' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 94, color: '#06b6d4' },
    { name: 'HTML5', icon: DiHtml5, level: 95, color: '#f97316' },
    { name: 'CSS3', icon: DiCss3, level: 90, color: '#3b82f6' },
    { name: 'Bootstrap', icon: FaBootstrap, level: 85, color: '#a855f7' },
    { name: 'Vite', icon: SiVite, level: 82, color: '#a78bfa' },
  ],
  Backend: [
    { name: 'Node.js', icon: FaNodeJs, level: 82, color: '#22c55e' },
    { name: 'Express.js', icon: SiExpress, level: 80, color: '#71717a' },
    { name: 'REST APIs', icon: FaDatabase, level: 85, color: '#22d3ee' },
    { name: 'Java', icon: FaJava, level: 75, color: '#ef4444' },
  ],
  Database: [
    { name: 'MongoDB', icon: SiMongodb, level: 78, color: '#10b981' },
    { name: 'Mongoose', icon: SiMongodb, level: 75, color: '#22c55e' },
  ],
  Tools: [
    { name: 'Git', icon: FaGitAlt, level: 70, color: '#f97316' },
    { name: 'GitHub', icon: FaGithub, level: 75, color: '#d1d5db' },
    { name: 'Postman', icon: SiPostman, level: 72, color: '#f97316' },
    { name: 'Figma', icon: FaFigma, level: 65, color: '#ec4899' },
  ],
};

function SkillBar({ name, level, icon: Icon, color, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.015 }}
      className="bg-slate-800/40 border flex justify-center border-slate-700/50 rounded-2xl p-5 hover:border-slate-600/50 transition-all duration-300 group"
    >
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: `${color}15`, border: `1px solid ${color}25` }}
          >
            <Icon size={18} style={{ color }} />
          </div>
          <span className="text-slate-200 font-body font-medium text-sm">{name}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('Frontend');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden bg-slate-950/50">
    
      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-px w-12 bg-gradient-to-r from-cyan-400 to-transparent" />
          <span className="text-cyan-400 text-sm font-mono-custom font-medium tracking-widest uppercase">My Arsenal</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
        >
          <span className="text-slate-50">Tech</span>{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Skills</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-400 font-body text-base max-w-xl mb-12"
        >
          A comprehensive toolkit for building modern, full-stack web applications from design to deployment.
        </motion.p>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-xl font-body font-medium text-sm transition-all duration-300 ${
                activeTab === cat
                  ? 'text-slate-950 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-800/50 border border-slate-700/60 text-slate-400 hover:text-slate-100 hover:border-slate-600'
              }`}
              style={activeTab === cat ? { background: 'linear-gradient(135deg, #22d3ee, #8b5cf6)' } : {}}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {skills[activeTab].map((skill) => (
            <SkillBar key={skill.name} {...skill} inView={inView} />
          ))}
        </motion.div>

        {/* Bottom decorative tags cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 flex flex-wrap gap-2 justify-center"
        >
          {Object.values(skills).flat().map((s) => (
            <span
              key={s.name}
              className="px-3 py-1.5 rounded-full bg-slate-800/40 border border-slate-700/40 text-slate-400 font-mono-custom text-xs hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-200 cursor-default"
            >
              {s.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}