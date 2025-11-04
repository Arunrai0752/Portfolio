import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode, FaDownload } from 'react-icons/fa';
import Arunimg from '../assets/ArunImg.jpg';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: 'easeOut' }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const float = {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-24 md:pt-0 bg-zinc-950 overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-zinc-950"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="w-full md:w-1/2 flex justify-center items-center mb-12 md:mb-0 z-10"
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="relative"
          >
            <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-zinc-800 shadow-2xl bg-zinc-900/50 backdrop-blur-sm">
              <img
                src={Arunimg}
                alt="Arun Rai"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-3 -right-3 w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center shadow-lg"
            >
              <FaCode className="w-5 h-5 text-zinc-950" />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="w-full md:w-1/2 text-center md:text-left z-10"
        >
          <motion.div variants={fadeInUp}>
            <p className="text-xl text-zinc-400 font-medium mb-2">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-100 mb-4 tracking-tight">
              Arun Rai
            </h1>
            <div className="text-2xl md:text-3xl text-zinc-400 font-light h-10">
              <Typewriter
                words={['Full Stack Developer', 'MERN Stack Expert', 'Problem Solver']}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={1800}
              />
            </div>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg text-zinc-400 max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            Crafting exceptional digital experiences with modern web technologies.
            I specialize in building responsive, scalable applications using the MERN stack
            and turning ideas into reality.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex justify-center md:justify-start gap-4 mt-8"
          >
            <motion.a
              href="https://github.com/Arunrai0752"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-emerald-400 transition-all duration-300"
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/arun-fullstack/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-sky-400 hover:border-sky-400 transition-all duration-300"
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-emerald-400 text-zinc-950 font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-emerald-300 transition-colors"
            >
              <FaCode className="w-5 h-5" />
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-zinc-700 text-zinc-300 font-semibold rounded-full hover:border-emerald-400 hover:text-emerald-400 transition-all"
            >
              Contact Me
            </motion.a>

            <motion.a
              href="Arun_FullStackDev _Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-zinc-800 text-zinc-100 font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-zinc-700 transition-colors"
            >
              <FaDownload className="w-5 h-5" />
              Resume
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-zinc-500"
        >
          <span className="text-sm font-medium mb-3">Discover More</span>
          <motion.div
            animate={float}
            className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-emerald-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}