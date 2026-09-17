import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <p className="about-label">ABOUT ME</p>

        <h2 className="about-title">ABOUT ME</h2>

        <div className="about-profile">
          <strong>이예원 (Lee Yewon)</strong>
          <span>·</span>
          <em>University Student</em>
        </div>

        <p className="about-description">
          안녕하세요, 웹 개발을 공부하고 있는 대학생 이예원(Lee Yewon)입니다.
          백엔드와 프론트엔드를 넘나들며 웹 서비스의 전체 구조를 공부하고 있습니다.
          단순히 기능을 구현하는 것을 넘어, 데이터 구조부터 사용자 인터페이스까지
          각 요소가 어떻게 연결되는지 파악하며 코드를 쓰려고 노력합니다.
          이처럼 전체적인 구조에 대한 이해를 바탕으로 탄탄한 기본기를 쌓아가며,
          지속 가능한 소프트웨어를 만들어가고 있습니다.
        </p>
      </div>
    </section>
  );
}

export default About;
