import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section 
      id="home"
      className="flex justify-center items-center w-full h-screen max-h-[600px] bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900"
    >
      <div className="text-center px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            whileHover={{ scale: 1.02 }}
          >
            Hi, I'm <span className="text-amber-400">Arun</span>
          </motion.h1>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold text-gray-200 mb-8"
            animate={{
              color: ["#e5e7eb", "#f59e0b", "#e5e7eb"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            Full Stack Developer
          </motion.h2>
          
          <motion.div 
            className="flex justify-center space-x-6"
            whileHover={{ scale: 1.1 }}
          >
            <a href="https://github.com/Arunrai0752" className="text-gray-300 hover:text-white">
              <FaGithub className="h-8 w-8" />
            </a>
            <a href="https://www.linkedin.com/in/arun-fullstack/" className="text-gray-300 hover:text-white">
              <FaLinkedin className="h-8 w-8" />
            </a>
          
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;