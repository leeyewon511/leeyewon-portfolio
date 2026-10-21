export interface SkillItem {
  name: string;
  description: string;
  iconClass: string;
}

export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  englishTitle: string;
  summary: string;
  skills: SkillItem[];
}

// Devicon 공식 아이콘 클래스 기준입니다.
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    number: "01",
    title: "프로그래밍 언어",
    englishTitle: "Programming Languages",
    summary: "웹 개발의 기본 문법과 구조를 이해하며 직접 코드를 작성해 본 언어입니다.",
    skills: [
      { name: "JavaScript", iconClass: "devicon-javascript-plain colored", description: "동적 UI와 비동기 로직을 구현하며 학습했습니다." },
      { name: "HTML5", iconClass: "devicon-html5-plain colored", description: "시맨틱 구조와 접근성을 고려한 마크업을 연습했습니다." },
      { name: "CSS3", iconClass: "devicon-css3-plain colored", description: "반응형 레이아웃, 애니메이션과 스타일링을 구현했습니다." },
      { name: "Python", iconClass: "devicon-python-plain colored", description: "기초 문법과 문제 해결을 위한 코드를 작성해 보았습니다." },
    ],
  },
  {
    id: "frontend",
    number: "02",
    title: "프론트엔드",
    englishTitle: "Frontend",
    summary: "사용자가 직접 만나는 화면을 컴포넌트와 반응형 레이아웃으로 구성합니다.",
    skills: [
      { name: "React.js", iconClass: "devicon-react-original colored", description: "컴포넌트 기반 화면 구성과 상태 관리를 공부했습니다." },
    ],
  },
  {
    id: "backend",
    number: "03",
    title: "백엔드",
    englishTitle: "Backend",
    summary: "서버 로직과 API 흐름을 이해하고 프론트엔드와 연결하는 연습을 했습니다.",
    skills: [
      { name: "Node.js", iconClass: "devicon-nodejs-plain colored", description: "서버 런타임과 기본적인 API 로직을 만들어 보았습니다." },
      { name: "Express.js", iconClass: "devicon-express-original", description: "라우팅과 미들웨어를 활용한 서버 구조를 연습했습니다." },
    ],
  },
  {
    id: "database",
    number: "04",
    title: "데이터베이스",
    englishTitle: "Database",
    summary: "데이터를 저장하고 조회하는 기본적인 관계형·문서형 데이터베이스를 공부했습니다.",
    skills: [
      { name: "MySQL", iconClass: "devicon-mysql-plain colored", description: "테이블 설계, 기본 쿼리와 데이터 조회를 학습했습니다." },
      { name: "MongoDB", iconClass: "devicon-mongodb-plain colored", description: "문서형 데이터 구조와 기본적인 데이터 저장 방식을 살펴보았습니다." },
    ],
  },
  {
    id: "devops",
    number: "05",
    title: "DevOps & 인프라",
    englishTitle: "DevOps & Infrastructure",
    summary: "개발 환경을 구성하고 프로젝트를 실행·배포하는 흐름을 경험했습니다.",
    skills: [
      { name: "Docker", iconClass: "devicon-docker-plain colored", description: "컨테이너 기반 개발 환경을 구성해 보았습니다." },
      { name: "Vercel", iconClass: "devicon-vercel-original", description: "GitHub 프로젝트를 연결해 배포하는 과정을 경험했습니다." },
    ],
  },
  {
    id: "tools",
    number: "06",
    title: "도구 & 협업",
    englishTitle: "Tools & Collaboration",
    summary: "버전 관리, API 테스트와 디자인 협업에 사용하는 도구입니다.",
    skills: [
      { name: "Git / GitHub", iconClass: "devicon-github-original", description: "커밋과 브랜치를 사용해 작업 내용을 관리했습니다." },
      { name: "Postman", iconClass: "devicon-postman-plain colored", description: "API 요청과 응답을 테스트하는 데 사용했습니다." },
      { name: "Figma", iconClass: "devicon-figma-plain colored", description: "화면 디자인을 확인하고 UI 구성에 참고했습니다." },
    ],
  },
];
