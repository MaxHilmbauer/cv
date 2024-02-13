import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
  TiqqeLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Maximilian Hilmbauer",
  initials: "MH",
  location: "Austria, CET",
  locationLink: "",
  about:
    "An entusiastic developer. Interested in various things, always enjoying a challenge. My hands-on approach is driven by a passion for creating and problem-solving.",
  summary:
    "I'm a Full Stack Developer with a focus on Backend Development. I'm passionate about creating software that is both efficent and user-friendly. I'm always looking for new challenges and opportunities to grow. " +
    "I'm a quick learner and I'm always eager to learn new technologies.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/75342497?s=400&u=acc7d99cb7d672aaa95c29b5645f774e2943195e&v=4",
  personalWebsiteUrl: "https://maximilianhilmbauer.me",
  contact: {
    email: "maximilian.hilmbauer@outlook.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/MaxHilmbauer",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/maximilian-h-705253271/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "IT-HTL Ybbs an der Donau",
      degree: "Information Technology, Network Engineering",
      start: "2021",
      end: "Current",
    },
    {
      school: "BG/BRG Amstetten",
      degree: "Middle School Diploma",
      start: "2017",
      end: "2021",
    },
  ],
  work: [
    {
      company: "SOP Hilmbauer & Mauberger GmbH",
      link: "https://www.sop.co.at/",
      badges: [],
      title: "Part-Time Full Stack Developer",
      // logo: SOPLogo,
      start: "2022",
      end: "Current",
      description:
        "Implementing new features and fixed bugs in the company's software named LBA. The software is used for the administration of the company's business processes. Technologies: Vue.js, JavaScript, Java Spring, SQL, Git",
    },
  ],
  skills: [
    "Java",
    "Java Spring",
    "React",
    "Vue.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "SQL",
    "Git",
  ],
  projects: [
    {
      title: "Alpaca - In Development",
      techStack: ["React", "Next.js", "TypeScript", "DevOps"],
      description:
        "A platform to manage applications, referals and job offers for a company.",
      link: {
        label: "Alpaca",
        href: "https://github.com/MaxHilmbauer/alpaca",
      },
    },
    {
      title: "Indy Version 2",
      techStack: ["React", "Next.js", "TypeScript", "DevOps"],
      description: "A new user interface for the students of the IT-HTL Ybbs.",
      link: {
        label: "Indy-v2",
        href: "https://github.com/MaxHilmbauer/indy-v2",
      },
    },
    /*{
      title: "OneHuman",
      techStack: ["Vue.js", "TypeScript", "Java Spring Boot", "DevOps"],
      description: "A platform to track employee work hours.",
      link: {
        label: "OneHuman",
        href: "https://github.com/MaxHilmbauer/onehuman-ts",
      },
    },*/
  ],
} as const;
