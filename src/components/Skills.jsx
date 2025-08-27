import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTypescript, SiTailwindcss, SiBootstrap, SiGithub } from "react-icons/si";
import { DiJavascript, DiHtml5, DiCss3 } from "react-icons/di";

const Skills = () => {
  const skills = [
    { name: "Java", icon: <FaJava />, color: "text-red-500" },
    { name: "HTML5", icon: <DiHtml5 />, color: "text-orange-500" },
    { name: "CSS3", icon: <DiCss3 />, color: "text-blue-500" },
    { name: "JavaScript", icon: <DiJavascript />, color: "text-yellow-400" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-500" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
    { name: "React", icon: <FaReact />, color: "text-blue-400" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-400" },
    { name: "Express", icon: <SiExpress />, color: "text-gray-300" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
    { name: "GitHub", icon: <SiGithub />, color: "text-white" },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="skills" className="relative flex flex-col md:flex-row justify-center items-center w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 px-6 pt-24 md:pt-0 pb-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-white pb-4 border-b-2 border-amber-500 mb-12"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h1>


        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-10 sm:gap-x-14 sm:gap-y-12 md:gap-x-16 md:gap-y-16 mb-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                boxShadow: "0 0 25px rgba(245, 158, 11, 0.3)"
              }}
              className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center 
                bg-gray-800 border-2 border-gray-700 cursor-default
                transition-all duration-300 hover:border-amber-400 ${skill.color}`}
            >
              <div className="text-2xl sm:text-3xl">
                {skill.icon}
              </div>
              <div className="absolute -bottom-7 w-full text-center">
                <span className="text-white text-xs sm:text-sm font-medium">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 max-w-md sm:max-w-2xl mx-auto text-base sm:text-lg">
            I work with these technologies daily to build modern, responsive, and scalable web applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;