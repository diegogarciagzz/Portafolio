import { motion } from 'framer-motion';
import {
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiOracle,
  SiR,
  SiGithub,
  SiGit,
  SiJavascript
} from 'react-icons/si';

export default function Skills() {
  const skills = [
    { icon: <SiPython />, label: 'Python' },
    { icon: <SiJavascript />, label: 'JavaScript' },
    { icon: <SiCplusplus />, label: 'C++' },
    { icon: <SiHtml5 />, label: 'HTML5' },
    { icon: <SiCss3 />, label: 'CSS3' },
    { icon: <SiMysql />, label: 'MySQL' },
    { icon: <SiOracle />, label: 'Oracle APEX' },
    { icon: <SiR />, label: 'R' },
    { icon: <SiGit />, label: 'Git' },
    { icon: <SiGithub />, label: 'GitHub' },
  ];

  return (
    <motion.section
      id="skills"
      className="py-24 px-8 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">Skills</h2>

      <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 text-white text-5xl mt-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-110 group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="text-white group-hover:text-cyan-400">
              {skill.icon}
            </div>
            <span className="mt-2 text-sm text-gray-300 group-hover:text-white transition-all duration-200">
              {skill.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
