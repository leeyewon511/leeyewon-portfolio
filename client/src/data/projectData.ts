export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  category: string;
  period: string;
  role: string;
  summary: string;
  techStack: string[];
  githubUrl?: string;
  mediaList?: { type: "image" | "video"; src: string; caption?: string }[];
  overview: {
    purpose: string[];
  };
  featuresList: {
    title: string;
    points: string[];
  }[];
  myRoleSection: {
    part: string;
    percentage?: string;
    details: string[];
  }[];
  conclusion: {
    learnings: string[];
  };
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "nexus",
    number: "01",
    name: "AI 모방학습 기반 로봇팔 체험 시스템 개발",
    category: "Robotics & Simulation",
    period: "2026.07 ~ 진행 중",
    role: "데이터 수집·증강, Isaac Sim 시뮬레이션 및 논문 작성",
    summary: "AI 모방 학습 기반 양팔 로봇 제어를 위한 데이터 파이프라인 구축 및 Isaac Sim 가상환경 시뮬레이션 프로젝트입니다.",
    techStack: ["Python", "Isaac Sim"],
    githubUrl: "",
    mediaList: [
      { type: "video", src: "/videos/학습된 SO101_실행.mp4", caption: "SO101 실제 구동 테스트" },
      { type: "video", src: "/videos/로봇팔 가상환경 학습 테스트.mp4", caption: "Isaac Sim 가상환경 학습 테스트" },
      { type: "video", src: "/videos/리더암-팔로워암 연동 영상.mp4", caption: "리더암-팔로워암 연동 제어" }
    ],
    overview: {
      purpose: [
        "AI 모방 학습 기반 양팔 로봇 제어 시스템을 구축하여 복잡한 조작 작업 자동화 실현",
        "Isaac Sim 가상 시뮬레이션 환경 구축을 통해 실물 로봇 위험을 줄이고 빠른 학습 데이터 생성 파이프라인 확보",
        "연구 결과 및 검증 데이터를 학술 대회 논문으로 작성 및 투고 예정"
      ]
    },
    featuresList: [
      {
        title: "가상환경 시뮬레이션 및 데이터 증강",
        points: [
          "NVIDIA Isaac Sim 기반 정밀 로봇 물리 환경 및 태스크 시나리오 구축",
          "다양한 환경 변수를 고려한 합성 데이터셋 자동 수집 및 증강 파이프라인 개발"
        ]
      },
      {
        title: "하드웨어 연동 및 제어",
        points: [
          "리더암의 움직임을 팔로워암에 실시간으로 동기화하는 원격 제어 및 텔레오퍼레이션 구현",
          "학습된 AI 모방 학습 정책 모델을 로봇 관절 모터에 적용하여 정밀 조작 수행"
        ]
      }
    ],
    myRoleSection: [
      {
        part: "시뮬레이션 & 파이프라인 구축",
        details: [
          "Isaac Sim 상에서 로봇 모델링 로드 및 카메라 센서, 그리퍼 물성 튜닝",
          "학습에 필요한 궤적 데이터 기록 및 전처리 자동화 스크립트 작성"
        ]
      },
      {
        part: "하드웨어 연동 및 성능 검증",
        details: [
          "리더암-팔로워암 통신 레이턴시 최소화 및 캘리브레이션 작업 진행",
          "실제 학습된 모델의 궤적 추종 오차 검증 및 현장 테스트 수행"
        ]
      },
      {
        part: "논문 작성",
        details: [
          "논문 작성 진행 예정"
        ]
      }
    ],
    conclusion: {
      learnings: [
        "시뮬레이션(Sim2Real)과 실제 하드웨어 간의 갭을 극복하는 데이터 수집의 중요성을 배웠습니다.",
        "로봇 공학과 AI 모방 학습이 어떻게 결합되어 자동화를 이루는지 전체 아키텍처를 이해하는 계기가 되었습니다.",
        "실험 결과를 체계적으로 분석하고 정리하여 학술 논문으로 구조화하는 연구 역량을 기를 예정입니다."
      ]
    }
  },
  {
    id: "almang",
    number: "02",
    name: "알맹(almeng) - 맞춤 정보 카드 큐레이션 웹앱",
    category: "React + Vite Frontend",
    period: "2026.03 ~ 2026.05",
    role: "프론트엔드 개발 (인증 플로우 & UI 컴포넌트 구현)",
    summary: "복잡한 세상을 쉽고 직관적으로 이해할 수 있도록 정보를 카드 형태로 제공하는 정보 큐레이션 웹 애플리케이션의 프론트엔드 프로젝트입니다.",
    techStack: ["React 19", "Vite", "Zustand", "Sass(SCSS)", "React Router", "Axios"],
    mediaList: [
      { type: "video", src: "/videos/알맹 회원가입 영상.mp4", caption: "알맹 회원가입 & 온보딩 실제 시연 영상" },
      { type: "image", src: "/videos/almeng-1-main-login.png", caption: "메인 브랜드 소개 및 소셜 로그인 게이트" },
      { type: "image", src: "/videos/almeng-2-signup-id.png", caption: "단계별 가입 1단계: 아이디 입력 및 유효성 검사" },
      { type: "image", src: "/videos/almeng-3-signup-pw.png", caption: "단계별 가입 2단계: 비밀번호 입력 및 규칙 안내" },
      { type: "image", src: "/videos/almeng-4-signup-pwconfirm.png", caption: "단계별 가입 3단계: 비밀번호 재확인 검증" },
      { type: "image", src: "/videos/almeng-5-signup-email.png", caption: "단계별 가입 4단계: 이메일 입력" },
      { type: "image", src: "/videos/almeng-6-interests-time.png", caption: "온보딩: 맞춤 관심사 주제 및 배송 시간대 설정" },
      { type: "image", src: "/videos/almeng-5-figma-flow.png", caption: "Figma 전체 와이어프레임 & 화면 플로우차트" }
    ],
    overview: {
      purpose: [
        "정보 과잉 시대에 복잡하고 긴 텍스트 대신 '한 장씩 넘겨보는 카드 뉴스' 형태로 핵심 내용을 자연스럽게 전달하는 모바일 친화형 큐레이션 서비스 구축",
        "신규 사용자의 가입 이탈률을 줄이기 위해 한 화면에 한 가지 질문만 던지는 직관적인 '단계별(Step-by-step) 온보딩' 사용자 경험 제공"
      ]
    },
    featuresList: [
      {
        title: "스텝 기반 인터랙티브 회원가입 (Step-by-Step Flow)",
        points: [
          "아이디 → 비밀번호 → 비밀번호 확인 → 이름 → 이메일 순서로 진행되는 포커스형 인터페이스",
          "정규식(Regex) 기반의 실시간 유효성 검증 및 입력 조건 충족 시 부드러운 화면 전환"
        ]
      },
      {
        title: "인증 인가 및 상태 관리 (Zustand & Protected Route)",
        points: [
          "Zustand 스토어를 활용하여 로그인 토큰 및 사용자 인증 상태를 전역에서 안전하게 제어",
          "React Router 기반 GuestOnlyRoute와 ProtectedRoute를 구축하여 미인증 사용자의 페이지 접근 제어"
        ]
      },
      {
        title: "감성적인 브랜드 아이덴티티 & 반응형 UI",
        points: [
          "Sass(SCSS) 모듈화를 통한 일관된 타이포그래피, 간격 및 모바일 뷰포트 맞춤형 스타일링",
          "구글, 카카오, 네이버, 애플 소셜 로그인 UI 및 알맹 고유의 원두 모티브 로고 디자인 결합"
        ]
      }
    ],
    myRoleSection: [
      {
        part: "단계별 가입 플로우(Signup) 컴포넌트 개발",
        details: [
          "React 기반 단계별 입력 폼 상태 관리 및 영문/숫자/특수문자 조합 실시간 정규식 검증 로직 구현",
          "키보드 Enter 액션 및 스텝별 포커스 이동 처리로 모바일 터치 사용성 극대화"
        ]
      },
      {
        part: "인증 페이지(Auth) 및 라우팅 가드 구축",
        details: [
          "메인 브랜드 인트로와 폼이 유기적으로 결합된 로그인 페이지 UI 구현",
          "Zustand와 React Router를 연동하여 로그인 여부에 따른 동적 리다이렉션 로직 구성"
        ]
      }
    ],
    conclusion: {
      learnings: [
        "Figma에서 기획된 정교한 사용자 흐름을 실제 React 컴포넌트 구조로 1:1 대응하여 구현하는 인터페이스 설계 역량을 길렀습니다.",
        "단계별 입력 폼의 상태 전파와 유효성 검증을 깔끔하게 분리하여 유지보수성 높은 클라이언트 코드를 작성하는 방법을 배웠습니다."
      ]
    }
  },
  {
    id: "ideation",
    number: "03",
    name: "아이데이션 융합 실습 - 시각장애인용 음성 젖병",
    category: "Hardware & Service Design",
    period: "2026.03 ~ 2026.06",
    role: "서비스 기획, 기술 검증 및 스토리보드 제작",
    summary: "다전공 협업을 통해 시각장애인 부모의 육아 고충을 해결하기 위한 음성 안내 저울 젖병 서비스 기획 및 프로토타입 검증 프로젝트입니다.",
    techStack: ["서비스 기획", "3D 모델링", "스토리보드", "기술 타당성 검증"],
    mediaList: [
      { type: "video", src: "/videos/아이데이션 모델링_스토리보드.mp4", caption: "3D 모델링 및 스토리보드 영상" },
      { type: "image", src: "/videos/아이데이션융합실습_판넬.png", caption: "아이데이션 융합실습 판넬" }
    ],
    overview: {
      purpose: [
        "시각장애인 부모가 영유아 분유 조제 시 용량 측정에 겪는 어려움을 해소하기 위한 배리어프리 디바이스 기획",
        "음성 안내와 무게 감지 센서를 결합하여 안전하고 독립적인 육아 환경 조성"
      ]
    },
    featuresList: [
      {
        title: "실시간 무게 측정 및 음성 피드백",
        points: [
          "로드셀 센서 기반 분유 및 물의 정밀 무게 측정 로직 설계",
          "단계별 용량 달성 시 직관적인 음성 멘트 및 진동 알림 인터페이스"
        ]
      },
      {
        title: "인체공학적 디자인 및 제품 기획",
        points: [
          "시각장애인의 촉각 피드백을 극대화한 양각 인디케이터 및 미끄럼 방지 그립 설계",
          "3D 모델링 렌더링 및 사용자 사용 시나리오 스토리보드 영상화"
        ]
      }
    ],
    myRoleSection: [
      {
        part: "기획 및 기술 타당성 검증",
        details: [
          "타깃 사용자 페르소나 설정 및 심층 인터뷰를 통한 핵심 페인포인트 도출",
          "센서 모듈 및 마이크로컨트롤러 선정, 하드웨어 회로 구성 타당성 조사"
        ]
      },
      {
        part: "스토리보드 & 전시 판넬 제작",
        details: [
          "사용자 시나리오 기반 스토리보드 기획 및 3D 모델링 시각화 영상 제작",
          "성과 발표를 위한 최종 융합 실습 포스터 판넬 디자인 및 발표"
        ]
      }
    ],
    conclusion: {
      learnings: [
        "기술적인 화려함보다 실제 사용자의 결핍을 정밀하게 진단하고 해결책을 제시하는 배리어프리 관점을 체화했습니다.",
        "다양한 전공자들과의 협업 과정에서 명확한 커뮤니케이션과 문서화의 가치를 배웠습니다."
      ]
    }
  },
  {
    id: "integrated-data-contest",
    number: "04",
    name: "길벗(FreeMove) - 휠체어 이동 지원 서비스",
    category: "Full-Stack Web App",
    period: "2026.03.30 ~ 2026.04.28",
    role: "개인 프로젝트 (기획, 프론트엔드/백엔드 풀스택 개발)",
    summary: "교통약자(휠체어 사용자)의 이동권 보장을 위해 실시간 공공데이터와 AI 상담을 결합한 맞춤형 이동 지원 웹 서비스입니다.",
    techStack: ["React", "Node.js", "Express", "Vite", "Open API", "Groq AI"],
    githubUrl: "https://github.com/leeyewon511/FreeMove",
    mediaList: [
      { type: "video", src: "/videos/통합데이터 실행 영상.mp4", caption: "길벗 웹 서비스 실제 시연 영상" },
      { type: "image", src: "/videos/freemove-ui-screens.png", caption: "길벗 4단 핵심 UI 화면 (홈, 지도, 충전소, AI 도우미)" }
    ],
    overview: {
      purpose: [
        "휠체어 사용자가 대중교통 이용 및 목적지 이동 시 겪는 실시간 정보 단절(저상버스 유무, 충전소 위치, 역사 엘리베이터 고장 등) 문제를 해결",
        "파편화된 다중 공공데이터를 지도 기반 단일 인터페이스로 통합하고, AI 기반 이동 수단 추천을 통해 이동 장벽 해소"
      ]
    },
    featuresList: [
      {
        title: "실시간 공공데이터 통합 지도 (TAGO · 레일포털)",
        points: [
          "TAGO 실시간 저상버스 운행 위치 및 도착 정보 연동",
          "전국 4,100여 개 전동휠체어 급속충전소 위치 및 운영시간 안내",
          "철도 역사별 엘리베이터 실시간 가동 현황 및 복지콜 대기 정보 제공"
        ]
      },
      {
        title: "Groq AI 기반 맞춤 이동 수단 추천 및 실시간 상담",
        points: [
          "사용자의 출발지/도착지 및 특수 상황을 고려한 최적 무장애 경로 추천",
          "자연어 기반 이동 상담 챗봇 인터페이스 구축을 통한 직관적인 편의 제공"
        ]
      }
    ],
    myRoleSection: [
      {
        part: "프론트엔드 UI & 인터랙션 개발",
        details: [
          "React 기반 모바일 친화형 4대 핵심 탭(홈, 지도, 충전소, AI) 반응형 인터페이스 구현",
          "출발지·도착지 주소 검색 및 지도 클릭 기반 자동 도로명 주소 매핑 인터랙션 구현"
        ]
      },
      {
        part: "백엔드 API 서버 구축 & 공공데이터 프록시",
        details: [
          "Node.js & Express 기반 공공데이터(TAGO, 철도산업정보센터, 공공데이터포털) 프록시 서버 구축",
          "CORS 이슈 해결 및 XML/JSON 원시 데이터 파싱, Groq AI API 연동 파이프라인 개발"
        ]
      }
    ],
    conclusion: {
      learnings: [
        "XML/JSON 등 다양한 규격의 다중 공공 API를 안정적으로 파싱하고 프록시 처리하는 풀스택 데이터 핸들링 역량을 확보했습니다.",
        "복잡한 교통·시설 정보를 교통약자의 시선에 맞춰 직관적인 무장애 UI/UX로 시각화하는 뜻깊은 개발 경험을 쌓았습니다."
      ]
    }
  }
];
