import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMapPin, FiCalendar, FiCheckCircle } from 'react-icons/fi';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiTypescript, SiVercel } from 'react-icons/si';

const experiences = [
  {
    role: 'Full Stack Developer',
    type: 'Contract',
    company: 'Remote — Freelance',
    period: 'Dec 2025 – Present',
    current: true,
    description:
      'Working under a senior developer on multiple production-level client web applications, delivering end-to-end solutions across frontend, backend, and deployment.',
    bullets: [
      'Built responsive frontends using React.js, Tailwind CSS, and TypeScript',
      'Developed and integrated REST APIs using Node.js and Express',
      'Implemented backend features including JWT authentication and data handling',
      'Collaborated on MongoDB database design and operations',
      'Deployed frontend applications on Vercel and backend services on Render',
    ],
    tags: ['React.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Vercel', 'Render'],
    tagIcons: [FaReact, SiTypescript, FaNodeJs, SiMongodb, SiTailwindcss, SiVercel],
    accent: '#22d3ee',
    accentLight: 'cyan',
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

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="relative py-28 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.05),transparent_60%)]" />

      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-px w-12 bg-gradient-to-r from-violet-400 to-transparent" />
          <span className="text-violet-400 text-sm font-mono-custom font-medium tracking-widest uppercase">Work Experience</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-6xl font-extrabold tracking-tight mb-16"
        >
          <span className="text-slate-50">Professional</span>
          <br />
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Journey</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-violet-500/30 to-transparent hidden md:block" />

          <motion.div
            variants={containerVariant}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="relative md:pl-24"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-5 h-5 rounded-full border-2 border-cyan-400 bg-slate-950 hidden md:flex items-center justify-center">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-cyan-400/30 animate-ping" />
                  )}
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-slate-800/40 border border-slate-700/50 rounded-3xl p-8 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-400 backdrop-blur-sm"
                >
                  {/* Card top */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-display font-bold text-2xl text-slate-50">{exp.role}</h3>
                        {exp.current && (
                          <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono-custom font-medium">
                            Current
                          </span>
                        )}
                        <span className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono-custom">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-slate-300 font-body font-medium text-lg">{exp.company}</p>
                    </div>

                    <div className="flex flex-col gap-2 text-sm text-slate-400 font-body shrink-0">
                      <span className="flex items-center gap-2">
                        <FiCalendar size={14} className="text-cyan-400" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2">
                        <FiMapPin size={14} className="text-violet-400" />
                        Remote
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 font-body text-sm leading-relaxed mb-6 pl-0 border-l-2 border-cyan-500/30 pl-4">
                    {exp.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-8">
                    {exp.bullets.map((bullet, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -16 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + i * 0.07, duration: 0.5 }}
                        className="flex items-start gap-3 text-sm text-slate-300 font-body"
                      >
                        <FiCheckCircle size={15} className="text-cyan-400 mt-0.5 shrink-0" />
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-700/40 text-slate-300 font-mono-custom text-xs hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* "Actively looking" card */}
            <motion.div variants={fadeUp} className="relative md:pl-24">
              <div className="absolute left-6 top-8 w-5 h-5 rounded-full border border-slate-600 bg-slate-950 hidden md:flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-slate-600" />
              </div>
              <div className="bg-slate-800/20 border border-dashed border-slate-700/50 rounded-3xl p-8 text-center">
                <p className="text-slate-500 font-body text-sm mb-2">Your opportunity here</p>
                <p className="font-display font-bold text-xl bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  Open to Full-Time Roles
                </p>
                <motion.a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-block mt-4 px-6 py-2.5 rounded-xl font-semibold text-sm text-slate-950"
                  style={{ background: 'linear-gradient(135deg, #22d3ee, #8b5cf6)' }}
                >
                  Let's Talk
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}