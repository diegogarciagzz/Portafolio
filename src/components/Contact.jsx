import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-24 px-8 max-w-4xl mx-auto text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-cyan-400 mb-4">Contact Me</h2>
      <p className="text-gray-300 mb-6">
        Feel free to reach out if you'd like to collaborate or just say hi!
      </p>
      <a
        href="mailto:Diego.Garcia.Gzz@outlook.com"
        className="inline-block px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#0a192f] rounded transition"
      >
        Send me an email
      </a>
    </motion.section>
  );
}
