import { ProjectsCardProps } from "../components/projects/projects-card";

export const projects: ProjectsCardProps[] = [
  {
    projectName: "Password Auth",
    projectDescription:
      "Password Auth is an innovative password and note manager application designed to enhance online security and simplify password management for users.",
    projectTechStack: "Firebase | Flutter | Dart | AES 256 ",
    githubLink: "https://github.com/JyrwaJR/password-manager",
  },
  {
    projectName: "Online Code Editor Web App",
    projectDescription:
      "A Code Editor powered by Monaco Editor, the engine behind VS Code. Compile code across 40+ languages, customize themes, and access runtime insights.",
    projectTechStack: "Firebase | ES6 | MUI | React",
    githubLink: "https://github.com/JyrwaJR/password-manager",
  },
  {
    projectName: "Portfolio Website v1",
    projectDescription:
      "Crafted a dynamic portfolio website showcasing my skills and projects using Tailwind CSS, Next.js, and Vercel. Seamlessly deployed for optimal performance and accessibility.",
    projectTechStack: "Nextjs | Tailwind | ES6 | Vercel",
    githubLink: "https://github.com/JyrwaJR/v1",
    projectLink: "https://jyrwaboys.vercel.app/",
  },
  {
    projectName: "Easy Church",
    projectDescription:
      " This open-source project is designed to help churches and religious organizations manage their members, events, donations, and more effectively.",
    projectTechStack: "Nextjs | MongoDB | Tailwind | Vercel",
    projectLink: "https://easychurch.vercel.app/",
    githubLink: "https://github.com/JyrwaJR/balang-management-system",
  },
];
type WorkedProjectsType = {
  year: string;
  title: string;
  madeAt: string;
  tech: string;
  link?: string;
  github?: string;
};
export const workedProjects: WorkedProjectsType[] = [
  {
    title: "Portfolio v1",
    year: "2024",
    madeAt: "-",
    tech: "Next.js | TailwindCSS | Vercel",
    link: "https://jyrwaboys.vercel.app/",
    github: "",
  },
  {
    title: "Easy Church | Church Management System",
    year: "2024",
    madeAt: "-",
    tech: "Next.js | Prisma | Vercel | MongoDB",
    link: "https://easychurch.vercel.app/",
    github: "https://github.com/JyrwaJR/balang-management-system",
  },
  {
    title: "Password Auth",
    year: "2023",
    madeAt: "NIELIT Shillong",
    tech: "Flutter | Firebase | AES 256 | Dart",
    github: "https://github.com/JyrwaJR/password-manager",
  },
  {
    title: "Online Code Editor",
    year: "2022",
    madeAt: "MLCU, Shillong",
    tech: "React | Firebase | Monaco Editor",
    github: "https://github.com/JyrwaJR/password-manager",
  },
];
