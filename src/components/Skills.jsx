import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTypescript, SiTailwindcss, SiBootstrap, SiGithub } from "react-icons/si";
import { DiJavascript, DiHtml5, DiCss3 } from "react-icons/di";

const Skills = () => {
  const skills = [
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-3xl" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300 text-3xl" /> },
    { name: "React", icon: <FaReact className="text-blue-400 text-3xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-3xl" /> },
    { name: "JavaScript", icon: <DiJavascript className="text-yellow-400 text-3xl" /> },
    { name: "HTML5", icon: <DiHtml5 className="text-orange-500 text-3xl" /> },
    { name: "CSS3", icon: <DiCss3 className="text-blue-500 text-3xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-3xl" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500 text-3xl" /> },
    { name: "Java + DSA", icon: <FaJava className="text-red-500 text-3xl" /> },
    { name: "Git/GitHub", icon: <SiGithub className="text-white text-3xl" /> },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="bg-gray-900 py-20 px-4">
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-xl flex flex-col items-center"
            >
              <div className="mb-4">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>

       
      </div>
    </section>
  );
};

export default Skills;