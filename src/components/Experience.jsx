import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin, FiCheck, FiTrendingUp } from "react-icons/fi";

const experiences = [
  {
    title: "Full Stack Developer (Contract)",
    company: "Client-Based Projects under Senior Developer",
    period: "Dec 2025 – Present",
    location: "Remote",
    type: "Contract",
    highlight: "Professional Client Delivery",
    points: [
      "Contributed to multiple client-based web applications under senior developer leadership",
      "Engineered responsive, scalable frontend systems using React.js, Tailwind CSS, and TypeScript",
      "Developed and integrated RESTful APIs using Node.js and Express.js",
      "Implemented secure backend systems including authentication, authorization, and data workflows",
      "Collaborated on MongoDB database architecture and operational integrations",
      "Managed production deployments via Vercel and Render with performance-focused optimization",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company: "Freelance Projects & Personal Development",
    period: "2024 – Present",
    location: "Bhopal, India",
    type: "Independent",
    highlight: "Portfolio & Product Development",
    points: [
      "Built and deployed 25+ frontend projects demonstrating advanced UI/UX implementation",
      "Developed multiple full-stack products including MediVault, Audio-to-Text Platform, and business web applications",
      "Integrated authentication systems, REST APIs, cloud deployment, and scalable backend services",
      "Specialized in performance optimization, responsive architecture, animation systems, and modern deployment pipelines",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 px-6 bg-gradient-to-b from-white via-neutral-50 to-white dark:from-black dark:via-neutral-950 dark:to-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 text-sm font-semibold tracking-[0.2em] uppercase border border-blue-100 dark:border-blue-800">
            Experience
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold mt-6 leading-tight">
            Professional <span className="text-blue-600">Journey</span>
          </h2>

          <p className="mt-5 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Delivering scalable web solutions through client-focused development,
            premium frontend engineering, and evolving full stack expertise.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-neutral-300 dark:border-neutral-800 ml-4 md:ml-8 space-y-14">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="relative pl-10"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[14px] top-4 w-7 h-7 rounded-full bg-blue-600 border-4 border-white dark:border-black shadow-lg" />

              <div className="group rounded-3xl p-8 md:p-10 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                {/* Header */}
                <div className="flex flex-wrap justify-between items-start gap-5 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                      <FiBriefcase className="w-6 h-6 text-blue-600" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold">{exp.title}</h3>
                      <p className="text-neutral-600 dark:text-neutral-400 mt-1">
                        {exp.company}
                      </p>

                      <div className="flex flex-wrap gap-4 mt-3 text-sm text-neutral-500 dark:text-neutral-400">
                        <span className="flex items-center gap-2">
                          <FiCalendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-2">
                          <FiMapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    <span className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      {exp.type}
                    </span>

                    <span className="flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                      <FiTrendingUp />
                      {exp.highlight}
                    </span>
                  </div>
                </div>

                {/* Points */}
                <ul className="space-y-4">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 text-neutral-700 dark:text-neutral-300 leading-relaxed"
                    >
                      <div className="mt-1 p-1 rounded-full bg-blue-50 dark:bg-blue-900/20">
                        <FiCheck className="w-4 h-4 text-blue-600" />
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}