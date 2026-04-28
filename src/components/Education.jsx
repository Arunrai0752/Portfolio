import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCalendar, FiAward, FiMapPin } from 'react-icons/fi';
import { FaGraduationCap, FaSchool, FaBookOpen } from 'react-icons/fa';

const educationData = [
  {
    degree: 'B.Tech',
    field: 'Electronics & Communication Engineering',
    institution: 'Technocrats Institute of Technology, Bhopal',
    score: '8.35',
    scoreLabel: 'CGPA',
    year: '2020 – 2024',
    level: 'Higher Education',
    icon: FaGraduationCap,
    accent: '#22d3ee',
    highlight: true,
  },
  {
    degree: '12th Grade',
    field: 'Science Stream',
    institution: 'Govt. Maharaja Multi Purpose H.S. Excellence School No. 1, Chhatarpur',
    score: '63.8%',
    scoreLabel: 'Percentage',
    year: '2019 – 2020',
    level: 'Senior Secondary',
    icon: FaBookOpen,
    accent: '#a78bfa',
    highlight: false,
  },
  {
    degree: '10th Grade',
    field: 'MP Board',
    institution: 'Govt. H.S. School, Kishangarh, Chhatarpur',
    score: '80.8%',
    scoreLabel: 'Percentage',
    year: '2017 – 2018',
    level: 'Secondary',
    icon: FaSchool,
    accent: '#34d399',
    highlight: false,
  },
];

const containerVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="relative py-28 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(52,211,153,0.04),transparent_70%)]" />

      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-px w-12 bg-gradient-to-r from-emerald-400 to-transparent" />
          <span className="text-emerald-400 text-sm font-mono-custom font-medium tracking-widest uppercase">Education</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-6xl font-extrabold tracking-tight mb-16"
        >
          <span className="text-slate-50">Academic</span>
          <br />
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Background</span>
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {educationData.map((edu) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={edu.degree}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.015 }}
                className={`relative bg-slate-800/40 border rounded-3xl p-7 transition-all duration-400 backdrop-blur-sm overflow-hidden group ${
                  edu.highlight
                    ? 'border-cyan-500/25 hover:border-cyan-500/40'
                    : 'border-slate-700/50 hover:border-slate-600/60'
                }`}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: `linear-gradient(90deg, ${edu.accent}, transparent)` }}
                />

                {edu.highlight && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono-custom text-xs">Featured</span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${edu.accent}12`, border: `1px solid ${edu.accent}25` }}
                >
                  <Icon size={22} style={{ color: edu.accent }} />
                </div>

                {/* Level badge */}
                <p className="font-mono-custom text-xs font-medium uppercase tracking-widest mb-2" style={{ color: edu.accent }}>
                  {edu.level}
                </p>

                {/* Degree */}
                <h3 className="font-display font-extrabold text-2xl text-slate-50 mb-1">{edu.degree}</h3>
                <p className="text-slate-300 font-body font-medium text-sm mb-5">{edu.field}</p>

                {/* Institution */}
                <div className="flex items-start gap-2 mb-5 text-slate-400 text-sm font-body">
                  <FiMapPin size={14} className="mt-0.5 shrink-0" style={{ color: edu.accent }} />
                  <p className="leading-relaxed">{edu.institution}</p>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-900/60 rounded-xl p-3.5 border border-slate-700/40">
                    <div className="flex items-center gap-1.5 mb-1">
                      <FiCalendar size={12} style={{ color: edu.accent }} />
                      <span className="text-slate-500 font-mono-custom text-xs uppercase tracking-wide">Period</span>
                    </div>
                    <p className="text-slate-200 font-body font-semibold text-sm">{edu.year}</p>
                  </div>
                  <div className="bg-slate-900/60 rounded-xl p-3.5 border border-slate-700/40">
                    <div className="flex items-center gap-1.5 mb-1">
                      <FiAward size={12} style={{ color: edu.accent }} />
                      <span className="text-slate-500 font-mono-custom text-xs uppercase tracking-wide">{edu.scoreLabel}</span>
                    </div>
                    <p className="font-display font-extrabold text-xl" style={{ color: edu.accent }}>{edu.score}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}