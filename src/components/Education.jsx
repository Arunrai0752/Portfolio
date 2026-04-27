import { motion } from "framer-motion";
import { FiMapPin, FiCalendar, FiAward } from "react-icons/fi";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";

const education = [
  {
    degree: "B.Tech",
    institution: "Technocrats Institute Of Technology, Bhopal",
    field: "Electronics and Communication",
    score: "CGPA: 8.35",
    year: "2020 - 2024",
    level: "Higher Education",
    icon: FaGraduationCap,
  },
  {
    degree: "12th",
    institution: "Govt. Maharaja Multi Purpose H.S. Excellence School No.1, Chhatarpur",
    field: "MP Board",
    score: "Percentage: 63.8%",
    year: "2019-2020",
    level: "Senior Secondary",
    icon: FiBookOpen,
  },
  {
    degree: "10th",
    institution: "Govt. H.S. School, Kishangarh, Chhatarpur",
    field: "MP Board",
    score: "Percentage: 80.8%",
    year: "2017-2018",
    level: "Secondary",
    icon: FaSchool,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Education</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Academic Background</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
            My educational journey and achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                  <edu.icon className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                  {edu.level}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{edu.field}</p>

              <div className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                <div className="flex items-center gap-2">
                  <FiMapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="leading-snug">{edu.institution}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-4 h-4" />
                  <span>{edu.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiAward className="w-4 h-4" />
                  <span className="font-semibold text-neutral-700 dark:text-neutral-300">{edu.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}