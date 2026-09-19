import "../styles/capabilities.css";

function Capabilities() {
  return (
    <section id="capabilities" className="capabilities-section">
      <div className="capabilities-container">
        <div className="capabilities-heading">
          <p className="capabilities-label">WHAT I AM LEARNING</p>

          <h2>
            MY
              

            CAPABILITIES
          </h2>

          <p>
            대학 생활과 개인 프로젝트를 통해 공부하고 있는
            개발 영역을 정리했습니다.
          </p>
        </div>

        <div className="capabilities-list">
          <article className="capability-card capability-frontend">
            <div className="capability-icon">&lt;/&gt;</div>

            <div className="capability-content">
              <p className="capability-number">01</p>

              <h3>FRONTEND ARTISTRY</h3>

              <p>
                React, HTML5, CSS3, JavaScript를 공부하며
                반응형 UI와 Framer Motion 인터랙션을 만들어 봅니다.
              </p>

              <div className="capability-tags">
                <span>React</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
              </div>
            </div>
          </article>

          <article className="capability-card capability-backend">
            <div className="capability-icon">◇</div>

            <div className="capability-content">
              <p className="capability-number">02</p>

              <h3>BACKEND &amp; AUTH</h3>

              <p>
                Node.js와 Java로 간단한 서버와 REST API를 만들고,
                JWT 인증 흐름을 공부했습니다.
              </p>

              <div className="capability-tags">
                <span>Node.js</span>
                <span>Java</span>
                <span>REST API</span>
                <span>JWT</span>
              </div>
            </div>
          </article>

          <article className="capability-card capability-data">
            <div className="capability-icon">▤</div>

            <div className="capability-content">
              <p className="capability-number">03</p>

              <h3>DATA &amp; DEVOPS</h3>

              <p>
                MySQL, MariaDB, SQLite를 사용해 보고
                Docker와 Vercel 배포도 직접 연습했습니다.
              </p>

              <div className="capability-tags">
                <span>MySQL</span>
                <span>MariaDB</span>
                <span>SQLite</span>
                <span>Vercel</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
