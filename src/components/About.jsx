import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-24 px-8 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">About Me</h2>

      <motion.p
        className="text-gray-300 mb-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I'm a 5th-semester Computer Science Engineering student at Tecnológico de Monterrey.
        I specialize in full-stack web development, object-oriented programming, and data analysis.
      </motion.p>

      <motion.p
        className="text-gray-400"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Outside of code, I enjoy chess, football, and mentoring new students.
        I’m passionate about building digital tools that matter and solving real-world challenges through technology.
      </motion.p>
    </motion.section>
  );
}
