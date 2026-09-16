import "../styles/navbar.css";

function Navbar( ) {
  return (
    <header className="navbar">
      <a href="#top">이예원 / Lee Yewon</a>

      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
