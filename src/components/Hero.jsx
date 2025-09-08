import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaServer, FaDownload } from "react-icons/fa";
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";
import Arunimg from "../assets/ArunImg.jpg";
import { Typewriter } from "react-simple-typewriter";


const Hero = () => {
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
      boxShadow: "0 20px 25px -5px rgba(99, 102, 241, 0.4), 0 10px 10px -5px rgba(99, 102, 241, 0.2)",
      transition: { duration: 0.3 }
    }
  };





  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row justify-center items-center w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 px-6 pt-24 md:pt-0 pb-12 overflow-hidden"
    >

{/* Image Circle */}
      <motion.div
        className="w-full md:w-[50%] flex justify-center items-center mb-12 md:mb-0 relative"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.div
          variants={imageVariants}
          whileHover="hover"
          className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-indigo-500 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-2xl"
          style={{ boxShadow: "0 0 50px rgba(99, 102, 241, 0.5)" }}
        >
          <img
            src={Arunimg}
            alt="Arun Rai"
            className="w-full h-full object-cover"
          />

        </motion.div>
      </motion.div>





{/* Name ANd Profeccion */}
      <motion.div
        className="w-full md:w-[50%] text-center md:text-left z-10"
        initial="hidden"
        animate="visible"
        variants={container}
      >

        <motion.div variants={item}>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              I am
              <Typewriter
                words={[' Arun Rai', ' Full Stack Developer']}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={200}
                deleteSpeed={20}
                delaySpeed={1500}
              />
            </span>
          </motion.h1>
        </motion.div>

      

        <motion.div variants={item}>
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed"
            whileHover={{ scale: 1.01 }}
          >
            Crafting digital experiences with modern web technologies.
            I specialize in building responsive, performant applications using the MERN stack.
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
            className="text-gray-300 hover:text-white bg-slate-800 p-3 rounded-full shadow-lg"
            whileHover={{
              scale: 1.2,
              backgroundColor: "#6366f1",
              boxShadow: "0 0 15px rgba(99, 102, 241, 0.7)"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub className="h-6 w-6" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/arun-fullstack/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white bg-slate-800 p-3 rounded-full shadow-lg"
            whileHover={{
              scale: 1.2,
              backgroundColor: "#0a66c2",
              boxShadow: "0 0 15px rgba(10, 102, 194, 0.7)"
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
            className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-semibold rounded-lg shadow-lg text-center flex items-center justify-center gap-2"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -3px rgba(99, 102, 241, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCode className="h-5 w-5" />
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 border-2 border-indigo-400 text-white font-semibold rounded-lg text-center flex items-center justify-center gap-2"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(99, 102, 241, 0.1)",
              boxShadow: "0 10px 15px -3px rgba(99, 102, 241, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
          <motion.a
            href="Arun_FullStackDev _Resume.pdf"
            download={"Arun_FullStackDev _Resume.pdf"}
            className="px-8 py-3 bg-slate-800 text-white font-semibold rounded-lg text-center flex items-center justify-center gap-2"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(30, 41, 59, 0.8)",
              boxShadow: "0 10px 15px -3px rgba(15, 23, 42, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="h-5 w-5" />
            Resume
          </motion.a>
        </motion.div>
      </motion.div>


{/* Scroll Button */}
      <motion.div
        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-indigo-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-sm mb-2">Scroll down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-indigo-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-indigo-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;