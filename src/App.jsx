import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Extras from './components/Extras'
import Leadership from './components/Leadership';

export default function App() {
  return (
    <div className="bg-[#0a192f] text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Leadership />
      <Skills />
      <Projects />
      <Extras />
      <Contact />
    </div>
  )
}
