import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiCalendar, FiMapPin } from "react-icons/fi";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech",
      institution: "Technocrats Institute Of Technology, Bhopal",
      field: "Electronics and Communication",
      score: "CGPA: 8.35",
      year: "2020 - 2024"
    },
    {
      degree: "12th",
      institution: "Govt. Maharaja Multi Purpose H.S. Excellence School No.1, Chhatarpur",
      field: "MP Board",
      score: "Percentage: 63.8%",
      year: "2019-2020"
    },
    {
      degree: "10th",
      institution: "Govt. H.S. School, Kishangarh, Chhatarpur",
      field: "MP Board",
      score: "Percentage: 80.8%",
      year: "2017-2018"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const stagger = {
    whileInView: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section id="education" className="relative min-h-screen py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-zinc-100 mb-6 tracking-tight">
            Education
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            My academic journey and achievements
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-zinc-800/50">
                  <FiAward className={`w-8 h-8 ${
                    i === 0 ? 'text-emerald-400' :
                    i === 1 ? 'text-sky-400' :
                    'text-amber-400'
                  }`} />
                </div>
                <div className="flex items-center text-zinc-400 font-medium">
                  <FiCalendar className="mr-2 w-5 h-5" />
                  {edu.year}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-100 mb-2 group-hover:text-emerald-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-zinc-300 text-lg font-medium">{edu.field}</p>
                </div>

                <div className="flex items-start gap-2">
                  <FiMapPin className="text-zinc-500 mt-1 flex-shrink-0 w-5 h-5" />
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {edu.institution}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-700/50">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400 text-sm font-medium">Score</span>
                    <span className="text-2xl font-bold text-emerald-400">{edu.score}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;