import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Capabilities from "./components/Capabilities";

function App() {
  return (
    <div>
      <Navbar />

      <main id="top">
        <Hero />
        <About />
        <Capabilities />
      </main>
    </div>
  );
}

export default App;
