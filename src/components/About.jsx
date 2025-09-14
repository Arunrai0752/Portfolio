import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt, FaCode, FaRocket, FaHeart, FaLightbulb } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 20px 40px -12px rgba(99, 102, 241, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  const floatingAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section
      id="about"
      className="relative flex flex-col justify-center items-center w-full min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 px-6 pt-24 md:pt-0 pb-12 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-32 right-20 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-full blur-3xl"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-80 h-80 bg-gradient-to-r from-amber-500/8 to-pink-500/8 rounded-full blur-3xl"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-full blur-3xl"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16 pt-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent mt-12"
            whileHover={{ scale: 1.02 }}
          >
            About Me
          </motion.h1>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about crafting digital experiences that make a difference in people's lives
          </p>
        </motion.div>

          <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="group relative bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-lg p-8 rounded-3xl border border-cyan-500/20 shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaRocket className="text-amber-400" />
                Professional Summary
              </h3>

              <div className="space-y-10 text-lg text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate <span className="text-cyan-400 font-semibold">MERN Stack Developer</span> with a keen eye for detail
                  and a drive for creating exceptional digital experiences. My journey in web development has equipped me with
                  a comprehensive skill set that allows me to bring ideas to life.
                </p>

                <p>
                  I specialize in building <span className="text-amber-400 font-semibold">responsive, scalable applications</span> using
                  modern JavaScript frameworks and technologies. From crafting intuitive user interfaces to developing robust
                  backend systems, I enjoy every aspect of the development process.
                </p>

                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                  or sharing knowledge with the developer community. I'm always excited to take on new challenges and
                  collaborate on innovative projects.
                </p>
              </div>

             
            </motion.div>

           
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
