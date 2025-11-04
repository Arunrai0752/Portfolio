import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const stagger = {
    whileInView: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <>
      <section
        id="about"
        className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-zinc-950"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-zinc-100 mb-6 tracking-tight">
              About Me
            </h1>
            <div className="w-32 h-1 bg-emerald-400 mx-auto mb-6" />
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Passionate about crafting digital experiences that make a difference in people's lives
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-12"
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-zinc-100 mb-6 flex items-center gap-3">
                <FaRocket className="text-emerald-400" />
                Professional Summary
              </h3>

              <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
                <p>
                  I'm a passionate <span className="text-emerald-400 font-semibold">MERN Stack Developer</span> with a keen eye for detail
                  and a drive for creating exceptional digital experiences. My journey in web development has equipped me with
                  a comprehensive skill set that allows me to bring ideas to life.
                </p>

                <p>
                  I specialize in building <span className="text-emerald-400 font-semibold">responsive, scalable applications</span> using
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
        </div>
      </section>
    </>
  );
}