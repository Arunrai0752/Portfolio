import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const contactInfo = [
  { icon: FiMapPin, label: 'Location', value: 'Bhopal, Madhya Pradesh, India', link: null, accent: '#22d3ee' },
  { icon: FiPhone, label: 'Phone', value: '+91 9098209835', link: 'tel:+919098209835', accent: '#a78bfa' },
  { icon: FiMail, label: 'Email', value: 'arunrai0752@gmail.com', link: 'mailto:arunrai0752@gmail.com', accent: '#34d399' },
];

const socials = [
  { icon: FiGithub, href: 'https://github.com/Arunrai0752', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/arun-fullstack/', label: 'LinkedIn' },
  { icon: FiTwitter, href: '#', label: 'Twitter' },
];

const containerVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden bg-slate-950/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.05),transparent_70%)]" />

      <div className="max-w-4xl mx-auto" ref={ref}>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex items-center gap-4 mb-4">
          <div className="h-px w-12 bg-gradient-to-r from-violet-400 to-transparent" />
          <span className="text-violet-400 text-sm font-mono tracking-widest uppercase">Get In Touch</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="font-display text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          <span className="text-slate-50">Let's Build</span><br />
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Something Great</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }} className="text-slate-400 text-base max-w-xl mb-12">
          I'm always open to discussing new opportunities, interesting projects,
          or just having a chat about technology and innovation.
        </motion.p>

        {/* Contact Cards */}
        <motion.div variants={containerVariant} initial="hidden" animate={inView ? 'show' : 'hidden'} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <motion.div key={info.label} variants={fadeUp} whileHover={{ y: -3, scale: 1.02 }}
                className="flex flex-col gap-3 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-5 hover:border-slate-600/60 transition-all duration-300 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${info.accent}12`, border: `1px solid ${info.accent}25` }}>
                  <Icon size={16} style={{ color: info.accent }} />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">{info.label}</p>
                  {info.link ? (
                    <a href={info.link} className="text-slate-200 text-sm font-medium hover:text-cyan-400 transition-colors">{info.value}</a>
                  ) : (
                    <p className="text-slate-200 text-sm font-medium">{info.value}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 mb-8" />

        {/* Bottom row */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-slate-500 text-xs uppercase tracking-widest mb-3">Connect With Me</p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  whileHover={{ scale: 1.1, y: -3 }} whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-400 hover:text-slate-100 hover:border-slate-500 transition-all duration-300">
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/40 border border-slate-700/50 rounded-full text-slate-400 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            Available for new projects
          </div>
        </div>

      </div>
    </section>
  );
}