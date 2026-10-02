import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


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
        <Footer />
      </main>
    </div>
  );
}

export default App;
