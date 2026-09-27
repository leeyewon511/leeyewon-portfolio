import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />

      <main id="top">
        <Hero />
        <About />
        <Capabilities />
        <Skills />
      </main>
    </div>
  );
}

export default App;
