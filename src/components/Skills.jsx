import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaBootstrap,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiPostman, SiVite } from "react-icons/si";
import { DiJavascript, DiHtml5, DiCss3 } from "react-icons/di";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const skills = [
    {
      name: "Java",
      icon: FaJava,
      color: "from-red-400 to-red-600",
      bgColor: "from-red-500/10 to-red-600/10",
      category: "Backend",
      level: "Intermediate"
    },
    {
      name: "HTML5",
      icon: DiHtml5,
      color: "from-orange-400 to-orange-600",
      bgColor: "from-orange-500/10 to-orange-600/10",
      category: "Frontend",
      level: "Expert"
    },
    {
      name: "CSS3",
      icon: DiCss3,
      color: "from-blue-400 to-blue-600",
      bgColor: "from-blue-500/10 to-blue-600/10",
      category: "Frontend",
      level: "Expert"
    },
    {
      name: "JavaScript",
      icon: DiJavascript,
      color: "from-yellow-400 to-yellow-600",
      bgColor: "from-yellow-500/10 to-yellow-600/10",
      category: "Language",
      level: "Expert"
    },
    {
      name: "Bootstrap",
      icon: FaBootstrap,
      color: "from-purple-400 to-purple-600",
      bgColor: "from-purple-500/10 to-purple-600/10",
      category: "Frontend",
      level: "Advanced"
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "from-cyan-400 to-teal-500",
      bgColor: "from-cyan-500/10 to-teal-500/10",
      category: "Frontend",
      level: "Expert"
    },
    {
      name: "React",
      icon: FaReact,
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      category: "Frontend",
      level: "Expert"
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      color: "from-green-400 to-green-600",
      bgColor: "from-green-500/10 to-green-600/10",
      category: "Backend",
      level: "Advanced"
    },
    {
      name: "Express",
      icon: SiExpress,
      color: "from-gray-400 to-gray-600",
      bgColor: "from-gray-500/10 to-gray-600/10",
      category: "Backend",
      level: "Advanced"
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "from-green-500 to-green-700",
      bgColor: "from-green-500/10 to-green-600/10",
      category: "Database",
      level: "Advanced"
    },
    {
      name: "Git",
      icon: FaGitAlt,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
      category: "Tools",
      level: "Intermediate"
    },
    {
      name: "GitHub",
      icon: FaGithub,
      color: "from-gray-300 to-gray-500",
      bgColor: "from-gray-500/10 to-gray-600/10",
      category: "Tools",
      level: "Intermediate"
    },
    {
      name: "Postman",
      icon: SiPostman,
      color: "from-orange-400 to-orange-600",
      bgColor: "from-orange-500/10 to-orange-600/10",
      category: "Tools",
      level: "Intermediate"
    },
    {
      name: "Figma",
      icon: FaFigma,
      color: "from-pink-400 to-rose-500",
      bgColor: "from-pink-500/10 to-rose-500/10",
      category: "Design",
      level: "Intermediate"
    },
    {
      name: "Vite",
      icon: SiVite,
      color: "from-yellow-400 to-amber-500",
      bgColor: "from-yellow-500/10 to-amber-500/10",
      category: "Tools",
      level: "Advanced"
    },
  ];


  const filteredSkills = selectedCategory === "All"
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  const getLevelColor = (level) => {
    switch (level) {
      case "Expert": return "text-emerald-400";
      case "Advanced": return "text-blue-400";
      case "Intermediate": return "text-amber-400";
      default: return "text-gray-400";
    }
  };

  return (
    <section
      id="skills"
      className="relative py-20 px-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-indigo-500/8 to-cyan-500/8 rounded-full blur-3xl"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-amber-500/6 to-pink-500/6 rounded-full blur-3xl"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-full blur-3xl"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
          >
            Skills & Expertise
          </motion.h1>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Mastering the art of modern web development with cutting-edge technologies and frameworks
          </p>
        </motion.div>

       

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
        >
          {filteredSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={`${skill.name}-${index}`}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  y: -10,
                  rotateY: 5,
                }}
                whileTap={{ scale: 0.55 }}
                className="group relative cursor-pointer"
              >
                <div className={`relative p-8 bg-gradient-to-br ${skill.bgColor} backdrop-blur-lg rounded-3xl border border-indigo-500/20 shadow-xl overflow-hidden hover:shadow-indigo-500/20 transition-all duration-500`}>
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon container */}
                  <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    <motion.div
                      className={`p-4 rounded-2xl bg-gradient-to-r ${skill.color} shadow-lg`}
                      whileHover={{
                        rotate: [0, -10, 10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent className="text-4xl md:text-5xl text-white drop-shadow-lg" />
                    </motion.div>

                    <div className="space-y-2">
                      <h3 className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors duration-300">
                        {skill.name}
                      </h3>
                      <div className="flex items-center justify-center space-x-2">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full bg-slate-700/50 ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover effect border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/50 via-cyan-500/50 to-amber-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-0.5" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

     
        
      </div>
    </section>
  );
};

export default Skills;
