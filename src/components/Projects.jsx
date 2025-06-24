import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "AwaQ Tech – Environmental Monitoring System",
      description: "Full-stack web platform and Unity training game for an NGO. Built with HTML, CSS, JS, REST API, and MySQL.",
      tech: ["HTML", "CSS", "JavaScript", "Unity", "MySQL"],
      link: "https://github.com/diegogarciagzz/VITANOVAJUNIO"
    },
    {
      title: "HackBITS – Habit Tracker (HackMTY 2024)",
      description: "Oracle APEX app for daily habit tracking with calendar views and interactive stats.",
      tech: ["Oracle APEX", "SQL", "HTML5", "CSS3"],
      link: "https://github.com/diegogarciagzz/HackBits"
    },
    {
      title: "CrediFiel Datathon (2025)",
      description: "Analyzed 15M+ credit records using SQL and R to design a smart debt recovery strategy.",
      tech: ["SQL", "R"],
      link: "https://github.com/diegogarciagzz/Datathon2025"
    },
    {
      title: "Streaming Service Simulator",
      description: "OOP-based movie platform developed in C++ using inheritance and polymorphism.",
      tech: ["C++", "OOP"],
      link: "https://github.com/diegogarciagzz/ServiciodeStreaming"
    }
  ];

  return (
    <motion.section
      id="projects"
      className="py-24 px-8 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">Projects</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#112240] p-6 rounded shadow-md border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-2">{project.description}</p>
            <p className="text-gray-400 text-sm mb-4">Tech: {project.tech.join(", ")}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
