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
      {
        id: "voice-phishing-contest",
        period: "3-2",
        date: "2026.01 ~ 2026.12",
        title: "대국민 보이스피싱 대응 아이디어 공모전",
        category: "Competitions & Projects",
        description: "활동 내용 작성 예정",
      },
      {
        id: "requirements-specification",
        period: "3-2",
        date: "2026.09 ~ 현재",
        title: "산후조리 서비스 통합 예약 및 관리 시스템",
        category: "Competitions & Projects",
        description:
          "산후조리원 및 케어 서비스 통합 예약을 위한 요구사항 명세서, 시스템 아키텍처 및 프로젝트 정의서 작성",
      },
      {
        id: "bdad-mentor-32",
        period: "3-2",
        date: "2026.01 ~ 2026.12",
        title: "BDAD 학습공동체",
        category: "Mentoring & Leadership",
        role: "멘토",
        description: "활동 내용 작성 예정",
      },
      {
        id: "dongseo-starter-mentor-32",
        period: "3-2",
        date: "2026.01 ~ 2026.12",
        title: "동서스타터",
        category: "Mentoring & Leadership",
        role: "멘토",
        description: "활동 내용 작성 예정",
      },
      {
        id: "learning-up-toeic",
        period: "3-2",
        date: "2026.01 ~ 2026.12",
        title: "러닝UP 커뮤니티",
        category: "Community & Scholarship",
        role: "토익 멘티",
        description: "활동 내용 작성 예정",
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
      {
        id: "nexus",
        period: "3학년 여름방학",
        date: "2026.01 ~ 2026.12",
        title: "AI + X Nexus",
        category: "Competitions & Projects",
        description: "활동 내용 작성 예정",
      },
      {
        id: "backend-database-mentoring",
        period: "3학년 여름방학",
        date: "2026.01 ~ 2026.12",
        title: "백엔드 로직 및 데이터베이스 연동 멘토링",
        category: "Mentoring & Leadership",
        role: "멘티",
        description: "활동 내용 작성 예정",
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
      {
        id: "barrier-free-contest",
        period: "3-1",
        date: "2026.01 ~ 2026.12",
        title: "2026 현대오토에버 배리어프리 앱 개발 콘테스트 공모전",
        category: "Competitions & Projects",
        description: "활동 내용 작성 예정",
      },
      {
        id: "integrated-data-contest",
        period: "3-1",
        date: "2026.01 ~ 2026.12",
        title: "통합데이터 공모전",
        category: "Competitions & Projects",
        description: "활동 내용 작성 예정",
      },
      {
        id: "ideation",
        period: "3-1",
        date: "2026.01 ~ 2026.12",
        title: "아이데이션",
        category: "Competitions & Projects",
        description: "활동 내용 작성 예정",
      },
      {
        id: "almang",
        period: "3-1",
        date: "2026.01 ~ 2026.12",
        title: "알맹 almeng",
        category: "Competitions & Projects",
        description: "활동 내용 작성 예정",
      },
      {
        id: "dongseo-starter-mentor-31",
        period: "3-1",
        date: "2026.01 ~ 2026.12",
        title: "동서스타터",
        category: "Mentoring & Leadership",
        role: "멘토",
        description: "활동 내용 작성 예정",
      },
      {
        id: "bdad-mentee-31",
        period: "3-1",
        date: "2026.01 ~ 2026.12",
        title: "BDAD 학습공동체",
        category: "Mentoring & Leadership",
        role: "멘티",
        description: "활동 내용 작성 예정",
      },
      {
        id: "ai-mentor",
        period: "3-1",
        date: "2026.01 ~ 2026.12",
        title: "AI 활용과 이해",
        category: "Mentoring & Leadership",
        role: "멘토",
        description: "활동 내용 작성 예정",
      },
      {
        id: "dlc",
        period: "3-1",
        date: "2026.01 ~ 2026.12",
        title: "DLC",
        category: "Programs & Learning",
        role: "진로성장프로그램",
        description: "활동 내용 작성 예정",
      },
      {
        id: "book-club-31",
        period: "3-1",
        date: "2026.01 ~ 2026.12",
        title: "독서클럽",
        category: "Community & Scholarship",
        description: "활동 내용 작성 예정",
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
      {
        id: "carrot-post-mentoring",
        period: "2학년 겨울방학",
        date: "2026.01 ~ 2026.12",
        title: "여름방학 멘토링",
        category: "Mentoring & Leadership",
        role: "멘티",
        description: "활동 내용 작성 예정",
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
      {
        id: "student-council",
        period: "2-2",
        date: "2026.01 ~ 2026.12",
        title: "학생회",
        category: "Community & Scholarship",
        description: "활동 내용 작성 예정",
      },
      {
        id: "bdad-mentee-22",
        period: "2-2",
        date: "2026.01 ~ 2026.12",
        title: "BDAD 학습공동체",
        category: "Mentoring & Leadership",
        role: "멘티",
        description: "활동 내용 작성 예정",
      },
      {
        id: "creative-coding",
        period: "2-2",
        date: "2026.01 ~ 2026.12",
        title: "창의적 생활코딩 튜터링",
        category: "Mentoring & Leadership",
        role: "멘티",
        description: "활동 내용 작성 예정",
      },
      {
        id: "dongseo-starter-mentee",
        period: "2-2",
        date: "2026.01 ~ 2026.12",
        title: "동서스타터",
        category: "Mentoring & Leadership",
        role: "멘티",
        description: "활동 내용 작성 예정",
      },
      {
        id: "ict-innovation",
        period: "2-2",
        date: "2026.01 ~ 2026.12",
        title: "ICT 이노베이션 교육",
        category: "Programs & Learning",
        description: "활동 내용 작성 예정",
      },
      {
        id: "attendance-project",
        period: "2-2",
        date: "2026.01 ~ 2026.12",
        title: "수업출결관리 프로젝트",
        category: "Competitions & Projects",
        role: "출결 기능 구현",
        description: "활동 내용 작성 예정",
      },
      {
        id: "ai-development-contest",
        period: "2-2",
        date: "2026.01 ~ 2026.12",
        title: "AI 우수 개발 공모전",
        category: "Competitions & Projects",
        description: "활동 내용 작성 예정",
      },
      {
        id: "book-club-22",
        period: "2-2",
        date: "2026.01 ~ 2026.12",
        title: "독서클럽",
        category: "Community & Scholarship",
        description: "활동 내용 작성 예정",
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
      {
        id: "naver-blog-team-project",
        period: "2-1",
        date: "2026.01 ~ 2026.12",
        title: "네이버 블로그 관리 팀프로젝트",
        category: "Competitions & Projects",
        role: "팀 프로젝트",
        description: "활동 내용 작성 예정",
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
