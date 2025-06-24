import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-start px-8 max-w-4xl mx-auto pt-20">
      <p className="text-cyan-400 mb-2">Hi, my name is</p>

      <h1 className="text-4xl sm:text-6xl font-bold text-white">
        Diego García González.
      </h1>

      <TypeAnimation
       sequence={[
  'I build digital solutions with impact.', 2000,
  'I think in strategies — on the board and in code.', 2000,
  'I turn ideas into code.', 2000,
  'I play chess. I build software.', 2000
]}

        wrapper="h2"
        speed={50}
        className="text-3xl sm:text-5xl font-semibold text-cyan-400 mt-2"
        repeat={Infinity}
      />

      <p className="text-gray-300 mt-6 max-w-xl">
        I’m a software developer and engineering student who creates meaningful digital experiences using modern web technologies.
      </p>

      <div className="mt-6 flex items-center gap-4">
        <a
          href="/CV_Diego_Garcia_Gonzalez.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#0a192f] transition rounded"
        >
          View Resume
        </a>

        <a
          href="https://github.com/diegogarciagzz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-white text-2xl transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/diego-garcía-gonzález-15a36a297"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-white text-2xl transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
