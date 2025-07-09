import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";

function App() {
  return (
    <>
      <Nav />

      <section id="home">
        <Hero />
      </section>

      <section id="about"> 
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
