import "../styles/footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="footer-logo">
              이예원 <span>/</span> Lee Yewon
            </a>

            <p>
              대학생 개발자 포트폴리오
                

              Footer 소개 문구 작성 예정
            </p>
          </div>

          <nav className="footer-navigation">
            <p className="footer-heading">
              NAVIGATION
            </p>

            <a href="#top">Home</a>
            <a href="#about">About</a>
            <a href="#capabilities">
              Capabilities
            </a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
      
          </nav>

          <div className="footer-social">
            <p className="footer-heading">
              ELSEWHERE
            </p>

            <a
              href="https://github.com/leeyewon511"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a href="mailto:leeyewon511@gmail.com">
              Email
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          
          <p>
            Portfolio content and links 작성 예정
          </p>
        </div>
      </div>
    </footer>
   );
}

export default Footer;
