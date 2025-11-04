'use client';

import React from 'react';
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
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const stagger = {
    whileInView: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const skills = [
    { name: 'Java', icon: FaJava, color: 'text-red-400', level: 'Intermediate' },
    { name: 'HTML5', icon: DiHtml5, color: 'text-orange-400', level: 'Expert' },
    { name: 'CSS3', icon: DiCss3, color: 'text-blue-400', level: 'Expert' },
    { name: 'JavaScript', icon: DiJavascript, color: 'text-yellow-400', level: 'Expert' },
    { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-400', level: 'Advanced' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400', level: 'Expert' },
    { name: 'React', icon: FaReact, color: 'text-sky-400', level: 'Expert' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-400', level: 'Advanced' },
    { name: 'Express', icon: SiExpress, color: 'text-zinc-400', level: 'Advanced' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', level: 'Advanced' },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-500', level: 'Intermediate' },
    { name: 'GitHub', icon: FaGithub, color: 'text-zinc-300', level: 'Intermediate' },
    { name: 'Postman', icon: SiPostman, color: 'text-orange-400', level: 'Intermediate' },
    { name: 'Figma', icon: FaFigma, color: 'text-pink-400', level: 'Intermediate' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500', level: 'Advanced' }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return 'bg-emerald-400/20 text-emerald-400';
      case 'Advanced': return 'bg-sky-400/20 text-sky-400';
      case 'Intermediate': return 'bg-amber-400/20 text-amber-400';
      default: return 'bg-zinc-600/20 text-zinc-400';
    }
  };

  return (
    <>
      <section
        id="skills"
        className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-zinc-950"
      >
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-zinc-100 mb-6 tracking-tight">
              Skills
            </h1>
            <div className="w-32 h-1 bg-emerald-400 mx-auto mb-6" />
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Mastering the art of modern web development with cutting-edge technologies and frameworks
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          >
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.1, y: -8 }}
                  className="group flex flex-col items-center p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm cursor-default"
                >
                  <div className="p-4 rounded-xl bg-zinc-800/50 mb-4 group-hover:bg-emerald-400/10 transition-colors">
                    <Icon className={`w-10 h-10 ${skill.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <h3 className="text-zinc-100 font-semibold text-lg mb-1 group-hover:text-emerald-400 transition-colors">
                    {skill.name}
                  </h3>
                
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}