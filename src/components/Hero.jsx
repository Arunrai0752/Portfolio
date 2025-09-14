import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode, FaDownload, FaRocket } from "react-icons/fa";
import Arunimg from "../assets/ArunImg.jpg";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1.2
      }
    },
    hover: {
      scale: 1.05,
      rotate: 5,
      boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.5), 0 0 0 1px rgba(99, 102, 241, 0.3)",
      transition: { duration: 0.3 }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row justify-center items-center w-full min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 px-6 pt-24 md:pt-0 pb-12 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-600/5 to-cyan-600/5 rounded-full blur-3xl"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
        />
      </div>

      <motion.div
        className="w-full md:w-[45%] flex justify-center items-center mb-12 md:mb-0 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={imageVariants}
          whileHover="hover"
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-cyan-400 to-amber-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-indigo-400 to-cyan-400 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 rounded-full" />
            <img
              src={Arunimg}
              alt="Arun Rai"
              className="w-full h-full object-cover relative z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full" />
          </div>

          <motion.div
            className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <FaRocket className="text-white text-sm" />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full md:w-[55%] text-center md:text-left z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <motion.div
            className="mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-xl md:text-2xl text-cyan-400 font-medium mb-2">Hello, I'm</h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-amber-400 animate-gradient-x">
                Arun Rai
              </span>
            </h1>
            <div className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light">
              <Typewriter
                words={['Full Stack Developer', 'MERN Stack Expert', 'Problem Solver']}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed"
            whileHover={{ scale: 1.01 }}
          >
            Crafting exceptional digital experiences with modern web technologies.
            I specialize in building responsive, scalable applications using the MERN stack
            and turning ideas into reality.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-start space-x-4 mb-8"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com/Arunrai0752"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{
              scale: 1.1,
              y: -5,
              boxShadow: "0 20px 40px -12px rgba(99, 102, 241, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="h-6 w-6 text-gray-300 group-hover:text-white transition-colors" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/arun-fullstack/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{
              scale: 1.1,
              y: -5,
              boxShadow: "0 20px 40px -12px rgba(10, 102, 194, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className="h-6 w-6 text-gray-300 group-hover:text-blue-400 transition-colors" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </motion.a>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          variants={itemVariants}
        >
          <motion.a
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center flex items-center justify-center gap-3 overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px -12px rgba(99, 102, 241, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-indigo-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            <FaCode className="h-5 w-5 relative z-10" />
            <span className="relative z-10">View My Work</span>
          </motion.a>

          <motion.a
            href="#contact"
            className="group relative px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-white transition-all duration-300 text-center flex items-center justify-center gap-3 overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px -5px rgba(34, 211, 238, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Contact Me</span>
          </motion.a>

          <motion.a
            href="Arun_FullStackDev _Resume.pdf"
            download={"Arun_FullStackDev _Resume.pdf"}
            className="group relative px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center flex items-center justify-center gap-3 overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px -12px rgba(71, 85, 105, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <FaDownload className="h-5 w-5 relative z-10" />
            <span className="relative z-10">Resume</span>
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-cyan-400 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="text-sm mb-3 font-medium">Discover More</span>
        <motion.div
          className="relative"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center p-1">
            <motion.div
              className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-indigo-400 rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-sm" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;