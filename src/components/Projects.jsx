import { useEffect, useRef, useState } from "react";
import "../styles/projects.css";

const projects = [
  {
    id: "01",
    category: "PROJECT 01",
    title: "First Project",
    description:
      "첫 번째 프로젝트의 목적과 해결하려고 했던 문제를 작성 예정입니다. 사용자가 어떤 기능을 이용할 수 있는지와 프로젝트의 전체적인 방향을 설명할 예정입니다.",
    duration: "프로젝트 기간 작성 예정",
    team: "프로젝트 인원 작성 예정",
    role: "담당 역할 작성 예정",
    features: "주요 기능과 사용자 흐름을 작성 예정",
    learning:
      "프로젝트를 진행하며 배운 점과 어려웠던 점, 해결 과정을 작성 예정",
    tags: [
      "사용 기술 작성 예정",
      "주요 기능 작성 예정",
      "데이터베이스 작성 예정",
    ],
    mediaType: "placeholder",
    mediaSrc: "",
    mediaAlt: "First Project preview",
  },
  {
    id: "02",
    category: "PROJECT 02",
    title: "Second Project",
    description:
      "두 번째 프로젝트의 목적과 서비스 구조, 구현한 기능에 대한 설명을 작성 예정입니다.",
    duration: "프로젝트 기간 작성 예정",
    team: "프로젝트 인원 작성 예정",
    role: "담당 역할 작성 예정",
    features:
      "두 번째 프로젝트에서 구현한 주요 기능을 작성 예정",
    learning:
      "두 번째 프로젝트에서 새롭게 배운 기술과 해결한 문제를 작성 예정",
    tags: [
      "사용 기술 작성 예정",
      "라이브러리 작성 예정",
      "API 작성 예정",
    ],
    mediaType: "placeholder",
    mediaSrc: "",
    mediaAlt: "Second Project preview",
  },
  {
    id: "03",
    category: "PROJECT 03",
    title: "Third Project",
    description:
      "세 번째 프로젝트를 시작하게 된 계기와 프로젝트에서 담당한 부분을 작성 예정입니다.",
    duration: "프로젝트 기간 작성 예정",
    team: "프로젝트 인원 작성 예정",
    role: "담당 역할 작성 예정",
    features:
      "세 번째 프로젝트의 핵심 기능과 구현 방법을 작성 예정",
    learning:
      "세 번째 프로젝트를 통해 얻은 경험과 개선할 부분을 작성 예정",
    tags: [
      "기술 이름 작성 예정",
      "기능 이름 작성 예정",
      "기타 경험 작성 예정",
    ],
    mediaType: "placeholder",
    mediaSrc: "",
    mediaAlt: "Third Project preview",
  },
  {
    id: "04",
    category: "PROJECT 04",
    title: "Fourth Project",
    description:
      "네 번째 프로젝트에서 해결하려고 했던 문제와 서비스의 주요 목적을 작성 예정입니다.",
    duration: "프로젝트 기간 작성 예정",
    team: "프로젝트 인원 작성 예정",
    role: "담당 역할 작성 예정",
    features:
      "네 번째 프로젝트에서 구현한 기능을 작성 예정",
    learning:
      "네 번째 프로젝트를 진행하면서 알게 된 점을 작성 예정",
    tags: [
      "사용 기술 작성 예정",
      "배포 도구 작성 예정",
      "협업 경험 작성 예정",
    ],
    mediaType: "placeholder",
    mediaSrc: "",
    mediaAlt: "Fourth Project preview",
  },
  {
    id: "05",
    category: "PROJECT 05",
    title: "Fifth Project",
    description:
      "다섯 번째 프로젝트의 배경과 사용자가 이용할 수 있는 기능을 작성 예정입니다.",
    duration: "프로젝트 기간 작성 예정",
    team: "프로젝트 인원 작성 예정",
    role: "담당 역할 작성 예정",
    features:
      "다섯 번째 프로젝트의 주요 기능을 작성 예정",
    learning:
      "다섯 번째 프로젝트를 통해 배운 점과 개선할 부분을 작성 예정",
    tags: [
      "기술 이름 작성 예정",
      "데이터베이스 작성 예정",
      "배운 점 작성 예정",
    ],
    mediaType: "placeholder",
    mediaSrc: "",
    mediaAlt: "Fifth Project preview",
  },
];

function ProjectMedia({ project }) {
  if (project.mediaType === "image" && project.mediaSrc) {
    return (
      <img
        src={project.mediaSrc}
        alt={project.mediaAlt}
      />
    );
  }

  if (project.mediaType === "video" && project.mediaSrc) {
    return (
      <video
        src={project.mediaSrc}
        controls
        muted
        playsInline
        poster={project.poster}
      />
    );
  }

  return (
    <div className="project-media-placeholder">
      <span className="media-placeholder-label">
        MEDIA {project.id}
      </span>

      <p>
        프로젝트 사진 또는
          

        영상 추가 예정
      </p>
    </div>
  );
}

function Projects() {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !viewport || !track) {
      return undefined;
    }

    const updateSlider = () => {
      // 모바일에서는 프로젝트를 세로로 표시
      if (window.innerWidth <= 700) {
        track.style.transform = "translate3d(0, 0, 0)";
        setScrollProgress(0);
        return;
      }

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollDistance = sectionHeight - viewportHeight;
      const currentScroll = window.scrollY - sectionTop;

      const progress =
        scrollDistance > 0
          ? Math.min(
              Math.max(currentScroll / scrollDistance, 0),
              1
            )
          : 0;

      const maxTranslate =
        track.scrollWidth - viewport.clientWidth;

      track.style.transform = `translate3d(${
        -maxTranslate * progress
      }px, 0, 0)`;

      setScrollProgress(progress);
    };

    const handleResize = () => {
      updateSlider();
    };

    window.addEventListener("scroll", updateSlider, {
      passive: true,
    });

    window.addEventListener("resize", handleResize);

    updateSlider();

    return () => {
      window.removeEventListener("scroll", updateSlider);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="projects-section"
      style={{
        "--project-count": projects.length,
      }}
    >
      <div className="projects-sticky">
        <div className="projects-heading">
          <p className="projects-label">
            PROJECTS
          </p>

          <h2>Projects</h2>

          <p className="projects-description">
            스크롤하여 프로젝트를 하나씩 확인해 보세요.
          </p>
        </div>

        <div
          ref={viewportRef}
          className="projects-viewport"
        >
          <div
            ref={trackRef}
            className="projects-track"
          >
            {projects.map((project) => (
              <article
                className="project-slide"
                key={project.id}
              >
                <div className="project-slide-heading">
                  <div>
                    <p className="project-category">
                      {project.category}
                    </p>

                    <h3>{project.title}</h3>
                  </div>

                  <span className="project-page-number">
                    {project.id} /{" "}
                    {String(projects.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="project-content">
                  <div className="project-media-frame">
                    <ProjectMedia project={project} />
                  </div>

                  <div className="project-details">
                    <p className="project-detail-label">
                      PROJECT DESCRIPTION
                    </p>

                    <p className="project-text">
                      {project.description}
                    </p>

                    <div className="project-info-list">
                      <div className="project-info-item">
                        <span>기간</span>
                        <strong>{project.duration}</strong>
                      </div>

                      <div className="project-info-item">
                        <span>인원</span>
                        <strong>{project.team}</strong>
                      </div>

                      <div className="project-info-item">
                        <span>역할</span>
                        <strong>{project.role}</strong>
                      </div>
                    </div>

                    <div className="project-detail-block">
                      <p className="project-detail-label">
                        MAIN FEATURES
                      </p>

                      <p>{project.features}</p>
                    </div>

                    <div className="project-detail-block">
                      <p className="project-detail-label">
                        WHAT I LEARNED
                      </p>

                      <p>{project.learning}</p>
                    </div>

                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="projects-scroll-guide">
          <span>SCROLL TO EXPLORE</span>

          <div className="projects-scroll-line">
            <div
              className="projects-scroll-progress"
              style={{
                width: `${scrollProgress * 100}%`,
              }}
            ></div>
          </div>

          <span>{projects.length} PROJECTS</span>
        </div>
      </div>
    </section>
  );
}

export default Projects;
