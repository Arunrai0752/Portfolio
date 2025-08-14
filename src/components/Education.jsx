import React from "react";
import { motion } from "framer-motion";

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
    <section id="education" className="bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-gray-800 pb-4 border-b-2 border-amber-500 mb-12"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h1>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-gray-500 mt-1">{edu.field}</p>
                </div>
                <div className="mt-4 md:mt-0 md:text-right">
                  <p className="text-gray-700 font-medium">{edu.score}</p>
                  <p className="text-amber-600 font-semibold">{edu.year}</p>
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