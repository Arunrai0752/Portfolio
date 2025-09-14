import React from "react";
import { motion } from "framer-motion";
import {  FiAward, FiCalendar, FiMapPin } from "react-icons/fi";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech",
      institution: "Technocrats Institute Of Technology, Bhopal",
      field: "Electronics and Communication",
      score: "CGPA: 8.35",
      year: "2020 - 2024",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      degree: "12th",
      institution: "Govt. Maharaja Multi Purpose H.S. Excellence School No.1, Chhatarpur",
      field: "MP Board",
      score: "Percentage: 63.8%",
      year: "2019-2020",
      icon: <FiAward className="text-4xl text-green-400" />,
      gradient: "from-green-500 to-teal-600"
    },
    {
      degree: "10th",
      institution: "Govt. H.S. School, Kishangarh, Chhatarpur",
      field: "MP Board",
      score: "Percentage: 80.8%",
      year: "2017-2018",
      icon: <FiAward className="text-4xl text-indigo-400" />,
      gradient: "from-indigo-500 to-blue-600"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
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
    <section id="education" className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 py-20 px-4 overflow-hidden">
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
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Education
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My academic journey and achievements
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.5), 0 0 0 1px rgba(99, 102, 241, 0.3)",
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-full blur-lg group-hover:blur-xl group-hover:scale-150 transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-2xl hover:shadow-amber-500/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${edu.gradient} shadow-lg`}>
                    {edu.icon}
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-amber-400 font-semibold">
                      <FiCalendar className="mr-2" />
                      {edu.year}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-300 text-lg font-medium">{edu.field}</p>
                  </div>

                  <div className="flex items-start space-x-2">
                    <FiMapPin className="text-gray-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-700/50">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm font-medium">Score</span>
                      <span className="text-2xl font-bold text-amber-400">{edu.score}</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-3xl font-bold text-white mb-4">Continuous Learning</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Beyond formal education, I continuously expand my knowledge through online courses,
              workshops, and staying updated with the latest technologies in software development.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white text-sm font-medium">
                React & Next.js
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 rounded-full text-white text-sm font-medium">
                Node.js & Express
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full text-white text-sm font-medium">
                Cloud & DevOps
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full text-white text-sm font-medium">
                UI/UX Design
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
