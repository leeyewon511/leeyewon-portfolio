export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  category: string;
  period: string;
  role: string;
  summary: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  mediaLabel: string;
}

// 실제 프로젝트 설명과 미디어는 나중에 채울 수 있도록
// 현재 알고 있는 정보만 담고 나머지는 작성 예정으로 남겼습니다.
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "nexus",
    number: "01",
    name: "Nexus",
    category: "Project & Mentoring",
    period: "3학년 여름방학",
    role: "프로젝트 역할 작성 예정",
    summary: "기획부터 구현까지 참여하며 서비스 제작 과정을 경험한 프로젝트입니다.",
    techStack: ["기술 스택 작성 예정"],
    features: [
      "프로젝트를 시작하게 된 이유 작성 예정",
      "주요 기능과 구현한 부분 작성 예정",
      "프로젝트를 통해 배운 점 작성 예정",
    ],
    githubUrl: "",
    mediaLabel: "Nexus 사진 또는 영상 추가 예정",
  },
  {
    id: "almang",
    number: "02",
    name: "Almang",
    category: "React + Vite",
    period: "3-1",
    role: "프로젝트 역할 작성 예정",
    summary: "React와 Vite를 활용해 화면을 구성하고 웹 프로젝트를 구현한 경험입니다.",
    techStack: ["React", "Vite", "기술 추가 예정"],
    features: [
      "프로젝트를 만든 목적 작성 예정",
      "React 컴포넌트와 화면 구성 작성 예정",
      "구현 과정에서 배운 점 작성 예정",
    ],
    githubUrl: "",
    mediaLabel: "Almang 사진 또는 영상 추가 예정",
  },
  {
    id: "ideation",
    number: "03",
    name: "Ideation",
    category: "Idea Development",
    period: "3-1",
    role: "프로젝트 역할 작성 예정",
    summary: "아이디어를 발굴하고 서비스의 방향과 핵심 기능을 구체화한 프로젝트입니다.",
    techStack: ["기술 스택 작성 예정"],
    features: [
      "문제를 발견한 과정 작성 예정",
      "아이디어를 발전시킨 과정 작성 예정",
      "서비스 흐름과 기대 효과 작성 예정",
    ],
    githubUrl: "",
    mediaLabel: "Ideation 사진 또는 영상 추가 예정",
  },
  {
    id: "integrated-data-contest",
    number: "04",
    name: "Integrated Data Contest",
    category: "Data Contest",
    period: "3-1",
    role: "프로젝트 역할 작성 예정",
    summary: "통합데이터를 활용해 문제를 분석하고 서비스 아이디어를 구현한 공모전 프로젝트입니다.",
    techStack: ["데이터 기술 작성 예정"],
    features: [
      "사용한 데이터와 분석 방법 작성 예정",
      "공모전 아이디어와 핵심 기능 작성 예정",
      "결과와 프로젝트에서 배운 점 작성 예정",
    ],
    githubUrl: "",
    mediaLabel: "Integrated Data Contest 사진 또는 영상 추가 예정",
  },
];
