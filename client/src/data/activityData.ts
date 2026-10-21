export type ActivityCategory =
  | "Mentoring & Leadership"
  | "Competitions & Projects"
  | "Programs & Learning"
  | "Community & Scholarship";

export interface ActivityItem {
  id: string;
  period: string;
  date?: string;
  title: string;
  category: ActivityCategory;
  role?: string;
  description: string;
}

export interface ActivityPeriod {
  id: string;
  label: string;
  title: string;
  year: string;
  term: string;
  periodDate: string;
  items: ActivityItem[];
}

// 최신 학기부터 과거 학기 순서입니다.
export const ACTIVITY_PERIODS: ActivityPeriod[] = [
  {
    id: "year-3-semester-2",
    label: "3-2",
    title: "Third Year · Second Semester",
    year: "Third Year",
    term: "Second Semester",
    periodDate: "2026.09.01 ~ 현재",
    items: [
      // 2026.09 ~ 현재
      {
        id: "requirements-specification",
        period: "3-2",
        date: "2026.09 ~ 현재",
        title: "산후조리 서비스 통합 예약 및 관리 시스템",
        category: "Competitions & Projects",
        description:
          "산후조리원 및 케어 서비스 통합 예약을 위한 요구사항 명세서, 시스템 아키텍처 및 프로젝트 정의서 작성",
      },
      // 2026.09 ~ 진행 중
      {
        id: "bdad-mentor-32",
        period: "3-2",
        date: "2026.09.21 ~ 진행 중",
        title: "BDAD 학습공동체",
        category: "Mentoring & Leadership",
        role: "멘토",
        description: "자료구조의 동작 원리 및 알고리즘 이론 개념 스터디 멘토링 진행",
      },
      // 2026.08.24 ~ 2026.09.30
      {
        id: "voice-phishing-contest",
        period: "3-2",
        date: "2026.08.24 ~ 2026.09.30",
        title: "대국민 보이스피싱 대응 아이디어 공모전",
        category: "Competitions & Projects",
        description: "보이스피싱 피해 예방 및 실시간 탐지를 위한 서비스 아이디어 기획 및 시스템 아키텍처 설계",
      },
      // 2026.01 ~ 진행 중 (동서스타터)
      {
        id: "dongseo-starter-mentor-32",
        period: "3-2",
        date: "2026.09.28 ~ 진행 중",
        title: "동서스타터",
        category: "Mentoring & Leadership",
        role: "멘토",
        description: "동일 전공 2학년 멘티 대상 전공 교과목 학습 가이드 제공 및 학업 적응·성장 지원 멘토링 진행",
      },
      // 2026.01 ~ 진행 중 (러닝UP)
      {
        id: "learning-up-toeic",
        period: "3-2",
        date: "2026.10.01 ~ 진행 중",
        title: "러닝UP 커뮤니티",
        category: "Community & Scholarship",
        role: "멘티",
        description: "토익 어학 역량 강화를 위한 그룹 학습 스터디 및 멘토링 진행",
      },
    ],
  },
  {
    id: "year-3-summer",
    label: "3-S",
    title: "Third Year · Summer Break",
    year: "Third Year",
    term: "Summer Break",
    periodDate: "2026.06.23 ~ 2026.08.31",
    items: [
      // 2026.07 ~ 진행 중
      {
        id: "nexus",
        period: "3학년 여름방학",
        date: "2026.07 ~ 진행 중",
        title: "AI + X Nexus",
        category: "Competitions & Projects",
        description:
          "AI 모방 학습 기반 양팔 로봇 제어를 위한 데이터 수집·증강, Isaac Sim 시뮬레이션 및 모니터링 대시보드 연구 개발",
      },
      // 2026.07 ~ 2026.08
      {
        id: "backend-database-mentoring",
        period: "3학년 여름방학",
        date: "2026.07 ~ 2026.08",
        title: "영화관 예매 시스템 백엔드 및 DB 연동 멘토링",
        category: "Mentoring & Leadership",
        role: "멘티",
        description:
          "영화관 예매 시스템 주제로 기능정의서 작성, ERD 설계 및 Express·MySQL 기반 백엔드 로직과 DB 연동 실습 수행",
      },
    ],
  },
  {
    id: "year-3-semester-1",
    label: "3-1",
    title: "Third Year · First Semester",
    year: "Third Year",
    term: "First Semester",
    periodDate: "2026.03.03 ~ 2026.06.22",
    items: [
      // 2026.04.20 ~ 2026.05.17
      {
        id: "barrier-free-contest",
        period: "3-1",
        date: "2026.04.20 ~ 2026.05.17",
        title: "2026년 현대오토에버 배리어프리 앱 개발 콘테스트 공모전",
        category: "Competitions & Projects",
        description: "사회적 취약계층의 이동 및 생활 편의 증진을 위한 앱 서비스 아이디어 기획 및 제안서 작성",
      },
      // 2026.03.30 ~ 2026.04.28
      {
        id: "integrated-data-contest",
        period: "3-1",
        date: "2026.03.30 ~ 2026.04.28",
        title: "2026년 전국 통합데이터 활용 공모전",
        category: "Competitions & Projects",
        description: "실시간 공공데이터 연동 웹 서비스 기획·개발 및 웹 애플리케이션 배포 완료",
      },
      // 2026.03.27 ~ 2026.06.12
      {
        id: "ai-mentor",
        period: "3-1",
        date: "2026.03.27 ~ 2026.06.12",
        title: "AI이해와활용 AI·SW 튜터링",
        category: "Mentoring & Leadership",
        role: "멘토",
        description: "'AI 이해와 활용' 수강생 멘토링 (Python 기초 실습 및 AI 도구 활용 가이드)",
      },
      // 2026.03.27 ~ 2026.05.31
      {
        id: "dlc",
        period: "3-1",
        date: "2026.03.27 ~ 2026.05.31",
        title: "동서리더스클럽(DLC)",
        category: "Programs & Learning",
        description: "관심 분야별 자율 스터디를 통한 진로 탐색, IT·SW 취업 정보 공유 및 커리어 역량 강화 활동 수행",
      },
      // 2026.03.25 ~ 2026.06.10
      {
        id: "book-club-31",
        period: "3-1",
        date: "2026.03.25 ~ 2026.06.10",
        title: "독서클럽",
        category: "Community & Scholarship",
        description: "독서 및 토론을 통하여 창의적이고 논리적인 사고력 향상과 다양한 분야의 지식을 습득 ",
      },
      // 2026.03.23 ~ 2026.06.08
      {
        id: "bdad-mentee-31",
        period: "3-1",
        date: "2026.03.23 ~ 2026.06.08",
        title: "BDAD 학습공동체",
        category: "Mentoring & Leadership",
        role: "멘티",
        description: "데이터베이스 문법, SQL 쿼리 작성 및 트랜잭션 개념 습득을 위한 학습공동체 멘토링 참여",
      },
      // 2026.03 ~ 2026.06
      {
        id: "ideation",
        period: "3-1",
        date: "2026.03 ~ 2026.06",
        title: "아이데이션 융합 실습",
        category: "Competitions & Projects",
        description:
          "다전공 협업 기반 시각장애인용 음성 저울 젖병 기획, 기술 구현 가능성 검증, 제품 디자인 및 홍보 영상 제작",
      },
      // 2026.03 ~ 2026.05 (알맹)
      {
        id: "almang",
        period: "3-1",
        date: "2026.03 ~ 2026.05",
        title: "알맹 almeng",
        category: "Competitions & Projects",
        description:
          "사용자 설정 주제·시간 기반 맞춤형 정보 구독 앱 서비스 기획, Figma UI/UX 디자인 및 프론트엔드 개발",
      },
      // 2026.03 ~ 2026.05 (동서스타터)
      {
        id: "dongseo-starter-mentor-31",
        period: "3-1",
        date: "2026.03 ~ 2026.05",
        title: "동서스타터",
        category: "Mentoring & Leadership",
        role: "멘토",
        description: "동일 전공 2학년 멘티 대상 전공 교과목 학습 가이드 제공 및 학업 적응·성장 지원 멘토링 진행",
      },
    ],
  },
  {
    id: "year-2-winter",
    label: "2-W",
    title: "Second Year · Winter Break",
    year: "Second Year",
    term: "Winter Break",
    periodDate: "2025.12.20 ~ 2026.03.02",
    items: [
      // 2026.01 ~ 2026.02
      {
        id: "carrot-post-mentoring",
        period: "2학년 겨울방학",
        date: "2026.01 ~ 2026.02",
        title: "여름방학 멘토링",
        category: "Mentoring & Leadership",
        role: "멘티",
        description: "중고거래 웹사이트 UI/UX 분석 및 React 기반 라우팅(React Router)과 웹 서버 통신 구현 실습",
      },
    ],
  },
  {
    id: "year-2-semester-2",
    label: "2-2",
    title: "Second Year · Second Semester",
    year: "Second Year",
    term: "Second Semester",
    periodDate: "2025.09.01 ~ 2025.12.19",
    items: [
      // 2025.11.19 ~ 2025.12.10
      {
        id: "ai-development-contest",
        period: "2-2",
        date: "2025.11.19 ~ 2025.12.10",
        title: "AI 우수 개발 공모전",
        category: "Competitions & Projects",
        description:
          "'스마트 에코 캠퍼스'를 주제로 Generative AI 및 객체 분류 로직을 활용해 올바른 분리배출을 유도하는 AI 로봇 시뮬레이션 개발",
      },
      // 2025.11.17 ~ 2025.12.07
      {
        id: "ict-innovation",
        period: "2-2",
        date: "2025.11.17 ~ 2025.12.07",
        title: "ICT 이노베이션 교육",
        category: "Programs & Learning",
        description:
          "AI 리터러시 습득 및 생성형 AI 도구를 활용한 기초 코딩 융합 실습 과정을 통해 AI 기반 개발 역량 강화",
      },
      // 2025.11 ~ 2025.12
      {
        id: "attendance-project",
        period: "2-2",
        date: "2025.11 ~ 2025.12",
        title: "수업출결관리 프로젝트",
        category: "Competitions & Projects",
        description:
          "React 기반으로 컴포넌트 UI를 설계하고 학생 출결 등록·조회 및 상태 관리 기능을 갖춘 웹 프로젝트 제작",
      },
      // 2025.10.01 ~ 2025.12.12
      {
        id: "creative-coding",
        period: "2-2",
        date: "2025.10.01 ~ 2025.12.12",
        title: "창의적생활코딩 AI기초 튜터링",
        category: "Mentoring & Leadership",
        role: "멘티",
        description:
          "창의적생활코딩 교양 교과 연계 튜토링 참여를 통한 프로그래밍 기초 및 소프트웨어 문제해결 역량 강화",
      },
      // 2025.09.24 ~ 2025.12.25
      {
        id: "dongseo-starter-mentee",
        period: "2-2",
        date: "2025.09.24 ~ 2025.12.25",
        title: "동서스타터",
        category: "Mentoring & Leadership",
        role: "멘티",
        description: "선후배 간 멘토링을 통한 전공 교과 학습 노하우 습득, 학업 및 대학 생활 관련 정보 공유",
      },
      // 2025.09.23 ~ 2025.12.03
      {
        id: "book-club-22",
        period: "2-2",
        date: "2025.09.23 ~ 2025.12.03",
        title: "독서클럽",
        category: "Community & Scholarship",
        description: "독서 및 토론을 통하여 창의적이고 논리적인 사고력 향상과 다양한 분야의 지식을 습득 ",
      },
      // 2025.09.22 ~ 2025.12.08
      {
        id: "bdad-mentee-22",
        period: "2-2",
        date: "2025.09.22 ~ 2025.12.08",
        title: "BDAD 학습공동체",
        category: "Mentoring & Leadership",
        role: "멘티",
        description: "React 기초 개념, 컴포넌트 구조 및 프론트엔드 기본 동작 원리 습득을 위한 멘토링 참여",
      },
    ],
  },
  {
    id: "year-2-semester-1",
    label: "2-1",
    title: "Second Year · First Semester",
    year: "Second Year",
    term: "First Semester",
    periodDate: "2025.03.01 ~ 2025.06.23",
    items: [
      // 2025.04 ~ 2026.05
      {
        id: "naver-blog-team-project",
        period: "2-1",
        date: "2025.04 ~ 2025.05",
        title: "네이버 블로그 관리 프로젝트",
        category: "Competitions & Projects",
        description: "HTML/CSS/JS 기반 네이버 블로그 벤치마킹 프로젝트 및 CRUD 관리 기능 구현",
      },
    ],
  },
];

export const ACTIVITY_CATEGORIES: ActivityCategory[] = [
  "Mentoring & Leadership",
  "Competitions & Projects",
  "Programs & Learning",
  "Community & Scholarship",
];

export const ALL_ACTIVITIES: ActivityItem[] = ACTIVITY_PERIODS.flatMap(
  (period) => period.items,
);
