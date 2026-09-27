import "../styles/skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-heading">
          <p className="skills-label">TECHNICAL STACK</p>

          <h2>Skills</h2>

          <p>
            기술 스택 섹션에 대한 전체적인 소개글  예정
          </p>
        </div>

        <div className="skills-grid">
          <article className="skill-detail-card">
            <div className="skill-detail-top">
              <span className="skill-index">01</span>
              <span className="skill-status">STUDYING</span>
            </div>

            <h3>Frontend</h3>

            <p>
              프론트엔드 관련 학습 내용 및 구현 가능 영역 작성 예정
            </p>

            <div className="skill-chip-list">
              <span>React</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
            </div>
          </article>

          <article className="skill-detail-card">
            <div className="skill-detail-top">
              <span className="skill-index">02</span>
              <span className="skill-status">PRACTICE</span>
            </div>

            <h3>Backend</h3>

            <p>
              백엔드 서버 및 API 구축 관련 사용 경험 작성 예정
            </p>

            <div className="skill-chip-list">
              <span>Node.js</span>
              <span>Java</span>
              <span>REST API</span>
              <span>JWT</span>
            </div>
          </article>

          <article className="skill-detail-card">
            <div className="skill-detail-top">
              <span className="skill-index">03</span>
              <span className="skill-status">PRACTICE</span>
            </div>

            <h3>Database</h3>

            <p>
              DB 모델링, 스키마 설계 및 쿼리 활용 경험 작성 예정
            </p>

            <div className="skill-chip-list">
              <span>MySQL</span>
              <span>MariaDB</span>
              <span>SQLite</span>
            </div>
          </article>

          <article className="skill-detail-card">
            <div className="skill-detail-top">
              <span className="skill-index">04</span>
              <span className="skill-status">TOOLS</span>
            </div>

            <h3>Tools &amp; Etc</h3>

            <p>
              버전 관리, 협업 툴, 배포 환경 활용 경험 작성 예정
            </p>

            <div className="skill-chip-list">
              <span>Git</span>
              <span>GitHub</span>
              <span>Docker</span>
              <span>Vercel</span>
              <span>Figma</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Skills;
