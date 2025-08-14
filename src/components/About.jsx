import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section
      id="about"
      className="bg-gradient-to-r from-gray-800 to-gray-900 py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-white pb-4 border-b-2 border-amber-500 mb-12"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h1>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <motion.div
            variants={item}
            className="flex flex-col md:flex-row gap-6 md:gap-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center bg-gray-700/50 p-3 rounded-lg"
            >
              <MdOutlineMail className="text-amber-500 text-2xl mr-2" />
              <a
                href="mailto:realarunrai0752@gmail.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                realarunrai0752@gmail.com
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center bg-gray-700/50 p-3 rounded-lg"
            >
              <FaPhoneAlt className="text-amber-500 text-xl mr-2" />
              <a
                href="tel:90998209835"
                className="text-gray-300 hover:text-white transition-colors"
              >
                +91 9098209835
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={item}
            className="flex gap-6"
          >
            <motion.a
              whileHover={{ y: -5 }}
              href="https://github.com/Arunrai0752"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="h-8 w-8" />
            </motion.a>
            <motion.a
              whileHover={{ y: -5 }}
              href="https://www.linkedin.com/in/arun-fullstack/"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-8 w-8" />
            </motion.a>
           
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-gray-700/30 p-8 rounded-xl"
        >
          <h2 className="text-2xl font-semibold text-amber-400 mb-4">Professional Summary</h2>
          <p className="text-gray-300 leading-relaxed">
            Motivated and detail-oriented MERN Stack Developer with a strong foundation in building
            responsive web applications.Experienced in developing full-stack solutions, integrating APIs,
            and working with modern JavaScript frameworks.Passionate about solving real-world problems
            through clean and efficient code
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;