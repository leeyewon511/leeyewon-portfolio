import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />

      <main id="top">
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
