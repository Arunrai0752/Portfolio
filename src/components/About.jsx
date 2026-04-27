import { motion } from "framer-motion";
import { FiCode, FiServer, FiDatabase, FiUsers } from "react-icons/fi";

const highlights = [
  { icon: FiCode, title: "Frontend", text: "React, TypeScript, Tailwind CSS" },
  { icon: FiServer, title: "Backend", text: "Node.js, Express, REST APIs" },
  { icon: FiDatabase, title: "Database", text: "MongoDB, Mongoose" },
  { icon: FiUsers, title: "Collaboration", text: "Git, Agile, Client Work" },
];

export default function About() {
  return (
    <section id="about"       className="relative py-28 px-6 bg-gradient-to-b from-white via-neutral-50 to-white dark:from-black dark:via-neutral-950 dark:to-black overflow-hidden"
 
 >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Professional Summary</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            A passionate developer focused on creating impactful digital solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg"
          >
            <p>
              I'm a passionate{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">MERN Stack Developer</span>{" "}
              with a keen eye for detail and a drive for creating exceptional digital
              experiences. My journey in web development has equipped me with a
              comprehensive skill set to bring ideas to life.
            </p>
            <p>
              I specialize in building{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">responsive, scalable applications</span>{" "}
              using modern JavaScript frameworks. From crafting intuitive user
              interfaces to developing robust backend systems, I enjoy every aspect
              of the development process.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-blue-200 dark:hover:border-blue-800 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-3">
                  <h.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-1">{h.title}</h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{h.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}