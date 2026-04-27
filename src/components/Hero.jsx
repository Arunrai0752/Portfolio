import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import ArunImg from "../assets/ArunImg.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white dark:from-black dark:via-neutral-950 dark:to-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
              Hi, I'm{" "}
              <span className="text-blue-600">Arun Rai</span>
            </h1>

            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-4 font-medium">
              Full Stack Developer
            </p>

            <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mb-10 leading-relaxed text-lg">
              I build exceptional digital experiences with modern web technologies. 
              Specializing in React, Node.js, and the MERN stack to create 
              responsive, scalable applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
              >
                View My Work
                <FiArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-neutral-300 dark:border-neutral-700 rounded-xl font-semibold text-neutral-700 dark:text-neutral-300 hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="/Arun_FullStackDev_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-100 dark:bg-neutral-800 rounded-xl font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              >
                <FiDownload className="w-4 h-4" />
                Resume
              </a>
            </div>

            <div className="flex items-center gap-3 mt-8">
              <a
                href="https://github.com/Arunrai0752"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-blue-600 transition-colors"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/arun-fullstack/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-blue-600 transition-colors"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-2xl overflow-hidden border-2 border-neutral-200 dark:border-neutral-800 shadow-2xl">
              <img
                src={ArunImg}
                alt="Arun Rai"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}