import { FaGithub, FaLinkedin } from 'react-icons/fa';


export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 bg-[#0a192fb3] backdrop-blur-md p-4 border-b border-gray-700 shadow-md z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="text-cyan-400 font-bold text-xl">DG</span>
        <div className="space-x-4 flex items-center">
          <a href="#about" className="text-gray-300 hover:text-cyan-400">About</a>
          <a href="#leadership" className="text-gray-300 hover:text-cyan-400">Leadership</a>
          <a href="#skills" className="text-gray-300 hover:text-cyan-400">Skills</a>
          <a href="#projects" className="text-gray-300 hover:text-cyan-400">Projects</a>
          <a href="#extras" className="text-gray-300 hover:text-cyan-400">Achievements</a>
          <a href="#contact" className="text-gray-300 hover:text-cyan-400">Contact</a>
          <a href="https://github.com/diegogarciagzz" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 text-xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/diego-garcía-gonzález-15a36a297" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 text-xl">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}
