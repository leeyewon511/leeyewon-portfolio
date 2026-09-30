import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />

      <main id="top">
        <Hero />
        <About />
        <Capabilities />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
