import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Galaxy from './components/Galaxy';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-ink-950 min-h-screen">
      <Cursor />
      <Nav />
      <Hero />
      <Galaxy />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
