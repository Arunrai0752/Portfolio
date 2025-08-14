import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaServer } from "react-icons/fa";
import Arunimg from "../assets/ArunImg.jpg"; 

const Hero = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 1
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.3 }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10],
      transition: {
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <section 
      id="home"
      className="flex flex-col md:flex-row justify-center items-center w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 px-6 py-12 md:py-0"
    >
      {/* Left Side - Image with Animation */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center mb-12 md:mb-0"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.div
          variants={imageVariants}
          whileHover="hover"
          className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-amber-400 bg-gray-700 shadow-xl"
        >
          {/* Profile Image */}
          <img 
            src={Arunimg} 
            alt="Arun Rai"
            className="w-full h-full object-cover"
          />
          
          {/* Floating tech icons */}
          <motion.div 
            className="absolute top-8 left-8 text-amber-400"
            animate={{
              x: [0, 10, 0],
              y: [0, -10, 0],
              rotate: [0, 15, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <FaCode className="text-xl" />
          </motion.div>
          <motion.div 
            className="absolute bottom-8 right-8 text-amber-400"
            animate={{
              x: [0, -10, 0],
              y: [0, 10, 0],
              rotate: [0, -15, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          >
            <FaServer className="text-xl" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Side - Text Content */}
      <motion.div 
        className="w-full md:w-1/2 text-center md:text-left"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.div variants={item}>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            whileHover={{ scale: 1.02 }}
          >
            Hi, I'm <span className="text-amber-400">Arun Rai</span>
          </motion.h1>
        </motion.div>

        <motion.div variants={item}>
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200 mb-6"
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
        </motion.div>

        <motion.div variants={item}>
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0"
            whileHover={{ scale: 1.01 }}
          >
            Building seamless web experiences with React, Node.js, and modern web technologies
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex justify-center md:justify-start space-x-6 mb-8"
          variants={item}
          whileHover={{ scale: 1.05 }}
        >
          <motion.a 
            href="https://github.com/Arunrai0752" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white bg-gray-800 p-3 rounded-full"
            whileHover={{ 
              scale: 1.2,
              backgroundColor: "#1f2937"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub className="h-6 w-6" />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/arun-fullstack/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white bg-gray-800 p-3 rounded-full"
            whileHover={{ 
              scale: 1.2,
              backgroundColor: "#0a66c2"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin className="h-6 w-6" />
          </motion.a>
         
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          variants={item}
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 bg-amber-500 text-white font-semibold rounded-lg shadow-lg text-center"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#f59e0b",
              boxShadow: "0 10px 15px -3px rgba(245, 158, 11, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 border-2 border-amber-400 text-white font-semibold rounded-lg text-center"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(245, 158, 11, 0.1)",
              boxShadow: "0 10px 15px -3px rgba(245, 158, 11, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;