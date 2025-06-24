import { motion } from 'framer-motion';

export default function Leadership() {
  return (
    <motion.section
      id="leadership"
      className="py-24 px-8 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">Leadership & Mentoring</h2>

      <div className="space-y-6 text-gray-300">
        <div>
          <h3 className="font-semibold text-white text-lg">President – SEITC (Student Society of Computer Science Engineering) </h3>
          <p>Led academic events, technical talks, and represented the student body of Computer Science Engineering (2025–Present).</p>
        </div>

        <div>
          <h3 className="font-semibold text-white text-lg">President – AJETEC</h3>
          <p>Organized chess workshops and interuniversity tournaments promoting logic and strategic thinking (2024–2025).</p>
        </div>

        <div>
          <h3 className="font-semibold text-white text-lg">Peer Mentor – Tecnológico de Monterrey</h3>
          <p>Guided first-year students in their academic transition. Completed certified Peer Mentoring program and received official badge (2024–Present).</p>
        </div>
      </div>
    </motion.section>
  );
}
