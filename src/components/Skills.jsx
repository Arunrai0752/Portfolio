import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaBootstrap, FaFigma, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiPostman, SiTypescript, SiHtml5, SiCss3 } from "react-icons/si";
import { DiJavascript } from "react-icons/di";

const skills = [
  { name: "React", icon: FaReact, color: "#0ea5e9" },
  { name: "TypeScript", icon: SiTypescript, color: "#3b82f6" },
  { name: "JavaScript", icon: DiJavascript, color: "#eab308" },
  { name: "Node.js", icon: FaNodeJs, color: "#22c55e" },
  { name: "Express", icon: SiExpress, color: "#6b7280" },
  { name: "MongoDB", icon: SiMongodb, color: "#10b981" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
  { name: "HTML5", icon: SiHtml5, color: "#f97316" },
  { name: "CSS3", icon: SiCss3, color: "#3b82f6" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#a855f7" },
  { name: "Git", icon: FaGitAlt, color: "#f97316" },
  { name: "GitHub", icon: FaGithub, color: "#9ca3af" },
  { name: "Postman", icon: SiPostman, color: "#f97316" },
  { name: "Figma", icon: FaFigma, color: "#ec4899" },
];

export default function Skills() {
  return (
    <section id="skills"       className="relative py-28 px-6 bg-gradient-to-b from-white via-neutral-50 to-white dark:from-black dark:via-neutral-950 dark:to-black overflow-hidden"
 >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Technologies I Use</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
            Tools and technologies I've mastered through hands-on experience
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-md transition-all cursor-default"
            >
              <skill.icon className="w-8 h-8" style={{ color: skill.color }} />
              <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}