export interface SkillItem {
  name: string;
  level?: string;
  description: string;
  badge?: string;
  iconName?: string;
}

export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  englishTitle: string;
  summary: string;
  skills: SkillItem[];
}

export const PROFILE_INFO = {
  nameKorean: "이예원",
  nameEnglish: "Lee Yewon",
  role: "University Student · Web Developer",
  tagline: "a university student learning to build thoughtful and useful web experiences",
  githubUrl: "https://github.com",
  email: "yewon.lee.dev@gmail.com",
  heroPortrait: "/manus-storage/lee-yewon-character_53f23ec1.png",
  aboutKoreanIntro: `안녕하세요, 웹 개발을 공부하고 있는 대학생 이예원(Lee Yewon)입니다.

React를 활용해 직관적이고 인터랙티브한 사용자 인터페이스를 구현하는 것부터, Node.js와 Express를 기반으로 안정적인 REST API 서버와 비즈니스 로직을 설계하는 풀스택 개발에 깊은 관심을 두고 있습니다.

MySQL 데이터베이스를 활용한 효율적인 스키마 모델링과 쿼리 최적화, Docker 기반의 컨테이너 환경 구축 및 JWT 인증을 프로젝트에 직접 적용하며 프론트엔드와 백엔드를 아우르는 데이터 흐름 제어 역량을 키워왔습니다.

아직 배우는 과정에 있지만, 새로운 기술을 직접 시도하고 프로젝트를 완성해 가는 개발자가 되기 위해 꾸준히 공부하고 있습니다.`,
  aboutEnglishIntro: `Hello, I am Lee Yewon, a university student studying web development.

I have a strong passion for full-stack web development—from crafting intuitive, interactive user interfaces with React to designing robust RESTful API servers and scalable business logic using Node.js and Express.

Through hands-on project experience, I have honed my ability to manage end-to-end data flow across both client and server environments. This includes designing efficient relational schemas and optimizing queries with MySQL, containerizing applications with Docker, and implementing secure JWT-based authentication.

While I am continuously growing, I remain dedicated to expanding my engineering skillset—eagerly adopting emerging technologies and seeing every project through to completion with high standards of quality.`
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    number: "01",
    title: "프론트엔드 (Frontend)",
    englishTitle: "Frontend Engineering",
    summary: "웹 표준 구조와 시각적 스타일링, 동적 인터랙션 및 상태 제어를 다루는 핵심 UI 역량입니다.",
    skills: [
      {
        name: "React",
        level: "Core Stack",
        badge: "SPA Architecture",
        description: "함수형 컴포넌트, 커스텀 훅, Context API 및 모던 렌더링 라이프사이클을 활용한 유연한 대화형 웹 구축"
      },
      {
        name: "JavaScript (ES6+)",
        level: "Core Language",
        badge: "Async / DOM",
        description: "비동기 Promise/async-await 처리, 클로저, 이벤트 루프 이해 기반의 동적 클라이언트 로직 구현"
      },
      {
        name: "HTML5",
        level: "Semantic Markup",
        badge: "Web Standards",
        description: "접근성과 SEO 최적화를 고려한 시맨틱 태그 구조화 및 웹 표준 준수 마크업"
      },
      {
        name: "CSS3",
        level: "Styling & Responsive",
        badge: "Flexbox / Grid",
        description: "반응형 레이아웃 설계, 애니메이션 효과, 미디어 쿼리 및 유연한 뷰포트 스타일링"
      }
    ]
  },
  {
    id: "backend",
    number: "02",
    title: "백엔드 & 서버 (Backend)",
    englishTitle: "Backend & Systems",
    summary: "API 구조, 기본적인 비즈니스 로직, 인증 흐름과 서버 런타임을 공부하고 있습니다.",
    skills: [
      {
        name: "Node.js",
        level: "Server Runtime",
        badge: "Non-blocking I/O",
        description: "Express 기반 RESTful API 엔드포인트 설계, 미들웨어 구성 및 비동기 이벤트 핸들링"
      },
      {
        name: "Java",
        level: "Object-Oriented",
        badge: "Backend Core",
        description: "객체지향 구조를 바탕으로 간단한 비즈니스 로직과 서버 구조를 만들어 보는 연습"
      },
      {
        name: "JWT (JSON Web Token)",
        level: "Auth & Security",
        badge: "Bearer Auth",
        description: "Access / Refresh 토큰 발급, 시크릿 키 기반 전자 서명 검증 및 안전한 무상태(Stateless) 인가 미들웨어 구현"
      }
    ]
  },
  {
    id: "database",
    number: "03",
    title: "데이터베이스 (Database)",
    englishTitle: "Data Management & Storage",
    summary: "관계형 데이터베이스 모델링, SQL 쿼리 최적화 및 경량 임베디드 스토리지 활용 경험입니다.",
    skills: [
      {
        name: "MySQL",
        level: "Relational DB",
        badge: "Relational DB",
        description: "테이블 정규화, 외래키 관계 정의, 인덱싱 및 대용량 트랜잭션 무결성 관리"
      },
      {
        name: "MariaDB",
        level: "Open Source RDBMS",
        badge: "High Performance",
        description: "MySQL 호환 엔진 기반의 스키마 마이그레이션, 쿼리 작성 및 데이터 핸들링"
      },
      {
        name: "SQLite",
        level: "Embedded DB",
        badge: "Zero-Config",
        description: "로컬 파일 기반 가벼운 스토리지 구축, 인메모리 캐싱 및 프로토타이핑 데이터 관리"
      }
    ]
  },
  {
    id: "framework-library",
    number: "04",
    title: "Framework & Library",
    englishTitle: "Frameworks & UI Libraries",
    summary: "현대적 개발 생태계의 UI 라이브러리와 스타일링 프레임워크를 조합하여 생산성을 극대화합니다.",
    skills: [
      {
        name: "React Ecosystem",
        level: "Library",
        badge: "UI Components",
        description: "재사용 가능한 아토믹 디자인 컴포넌트 구축 및 상태 관리 라이브러리 연동"
      },
      {
        name: "Tailwind CSS & Animation",
        level: "CSS Framework",
        badge: "Design Systems",
        description: "유틸리티 우선 CSS로 다크 모드, 타이포그래피와 반응형 레이아웃을 구성하는 연습"
      },
      {
        name: "Framer Motion",
        level: "Motion Library",
        badge: "Micro-interactions",
        description: "스크롤 기반 텍스트 리빌, 스티키 카드 인터랙션, 자석(Magnetic) 효과 등 인터랙티브 UX 구현"
      }
    ]
  },
  {
    id: "etc-devops",
    number: "05",
    title: "DevOps, Tools & Collaboration (Etc)",
    englishTitle: "DevOps, Tooling & Design",
    summary: "컨테이너 가상화, 클라우드 자동 배포, 버전 관리 및 디자이너 협업 도구를 아우릅니다.",
    skills: [
      {
        name: "Docker",
        level: "DevOps & Container",
        badge: "Containerization",
        description: "Dockerfile 작성, 일관된 멀티스테이지 빌드 환경 격리 및 컨테이너화 배포 프로세스 이해"
      },
      {
        name: "Git & GitHub",
        level: "Version Control",
        badge: "VCS & GitFlow",
        description: "브랜치 전략, Pull Request 코드 리뷰, 커밋 히스토리 관리 및 협업 워크플로우"
      },
      {
        name: "Vercel",
        level: "Deployment Platform",
        badge: "CI/CD & Edge",
        description: "깃허브 레포지토리 연동 자동 CI/CD 빌드, 프리뷰 환경 배포 및 커스텀 도메인 라우팅"
      },
      {
        name: "Figma",
        level: "Design & Prototype",
        badge: "UI/UX Tool",
        description: "디자인 시스템 확인, 오토레이아웃 분석, 시각 에셋 추출 및 디자이너와의 유기적인 커뮤니케이션"
      }
    ]
  }
];

export const MARQUEE_GIFS = [
  "/videos/학습된 SO101_실행.mp4",
  "/videos/로봇팔 가상환경 학습 테스트.mp4",
  "/videos/리더암-팔로워암 연동 영상.mp4",
  "/videos/DB 연동 및 백엔드 로직 영상.mp4",
  "/videos/중고거래 사이트 ui 분석.mp4",
  "/videos/아이데이션 모델링_스토리보드.mp4",
  "/videos/아이데이션융합실습_판넬.png",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "/videos/award-ai-contest.png",
  "/videos/cinema-booking-backend.mp4",
  "/videos/영화관 예배 백엔드 로직.mp4",
  "/videos/DB 연동 및 백엔드 로직 영상.mp4",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "/videos/알맹 회원가입 영상.mp4",
  "/videos/integrated-data-demo.mp4",
  "/videos/소개실 캡스톤_20240847이예원.mp4",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif"
];

export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  category: string;
  summary: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  images: {
    leftTop: string;
    leftBottom: string;
    rightTall: string;
  };
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "auth-saas",
    number: "01",
    name: "AuthGuard & Cloud API Hub",
    category: "Full-Stack Practice",
    summary: "React와 Node.js, JWT 전자 서명을 학습하며 만들어 본 사용자 인증 및 권한 관리 프로젝트",
    techStack: ["React", "Node.js", "JWT", "MySQL", "Docker", "Tailwind CSS"],
    features: [
      "Access & Refresh 토큰을 활용한 인증 흐름과 세션 갱신 연습",
      "MySQL 관계형 데이터베이스 구조와 비밀번호 보안 처리 학습",
      "Docker를 활용한 로컬 개발 환경 구성 연습"
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://authguard-demo.dev",
    images: {
      leftTop: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      leftBottom: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      rightTall: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
    }
  },
  {
    id: "creative-interactive",
    number: "02",
    name: "Aura Creative Studio Platform",
    category: "Frontend & UI/UX",
    summary: "Figma 디자인을 참고해 반응형 레이아웃과 인터랙션을 연습한 웹 프로젝트",
    techStack: ["React", "JavaScript", "HTML5", "CSS3", "Framer Motion", "Figma", "Vercel"],
    features: [
      "Figma 화면을 참고한 반응형 UI와 모바일 화면 구성",
      "Framer Motion을 활용한 스크롤 효과와 자석(Magnetic) 버튼 연습",
      "Vercel을 활용한 프로젝트 배포 흐름 경험"
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://aura-studio.dev",
    images: {
      leftTop: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      leftBottom: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      rightTall: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
    }
  },
  {
    id: "data-analytics",
    number: "03",
    name: "Solaris Data Management Engine",
    category: "Backend & Database",
    summary: "Java와 Node.js, MariaDB와 SQLite를 사용해 데이터 흐름을 연습한 개인 프로젝트",
    techStack: ["Java", "Node.js", "MariaDB", "SQLite", "Docker", "Git/GitHub"],
    features: [
      "MariaDB의 기본 SQL 쿼리와 SQLite 로컬 데이터 저장 방식 연습",
      "Java 객체지향 구조와 Node.js REST API 구성 학습",
      "Git과 GitHub를 활용한 버전 관리 및 작업 기록"
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://solaris-data.dev",
    images: {
      leftTop: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      leftBottom: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      rightTall: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
    }
  }
];
