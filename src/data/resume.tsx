import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Karmjeet",
  initials: "KC",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "20 year old something guy",
  summary:
    "full stack web developer • passionate about building impactful digital solutions with clean, efficient code.",
  avatarUrl: "/me1.jpg",
  skills: [
    "React",
    "Express",
    "Postman",
    "MongoDB",
    "HTML",
    "CSS",
    "JS",
    "C",
    "C++",
    "Python",
    "Java",
    "Git",
    "GitHub",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/addresskrish",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/addresskrish",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/addresskrish",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto: karmjeetchauhan07@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "TBI GEU",
      href: "https://tbi.geu.ac.in/",
      badges: [],
      location: "Remote",
      title: "full stack developer",
      logoUrl: "/tbigue.png",
      start: "Apr 2025",
      end: "Present",
      description:
        "Build and ship full-stack web applications",
    },
    {
      company: "Nothing",
      badges: [],
      href: "https://nothing.community/",
      location: "London • Remote",
      title: "Individual Contributor",
      logoUrl: "/nothing.avif",
      start: "Dec 2024",
      end: "Present",
      description:
        "Contributed a widget design concepts",
    },
  ],
  education: [
    {
      school: "Scrimba",
      href: "https://scrimba.com/",
      degree: "Font-end devlopment",
      logoUrl: "/scrimba_logo.jpeg",
      start: "2025",
      end: "Present",
    },
    // {
    //   school: "Buildspace",
    //   href: "https://buildspace.so",
    //   degree: "s5",
    //   logoUrl: "/buildspace.jpg",
    //   start: "Jun 2024",
    //   end: "Aug 2024",
    // },
    {
      school: "Gujarat Technological University",
      href: "https://www.gtu.ac.in/",
      degree: "Bachelor Of Engineering",
      logoUrl: "/gtu.png",
      start: "Jun 2022",
      end: "Jun 2026",
    },
  ],
  projects: [
    {
      title: "Assembly: Endgame",
      href: "https://github.com/addresskrish/assembly-endgame",
      dates: "",
      active: true,
      description:
        "Assembly Endgame is a word-guessing game inspired by the classic game Hangman. Developed as part of Scrimba's course project, the goal is to guess the hidden word within a limited number of attempts while avoiding incorrect guesses.",
      technologies: [
        "React.js",
        "CLX"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/addresskrish/assembly-endgame",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assembly-endgame.png",
      video:
        "",
    },
    {
      title: "Tenzies Game",
      href: "https://github.com/addresskrish/tenzies-game",
      dates: "",
      active: true,
      description:
        "Tenzies is an interactive dice game built using React. The goal of the game is to roll the dice until all of them show the same number. Players can hold dice to prevent them from being rerolled, adding a layer of strategy to the gameplay.",
      technologies: [
        "React.js",
        "CLX"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/addresskrish/tenzies-game",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tenzies-game.png",
      video: "",
    },
    {
      title: "Anime Website",
      href: "https://github.com/addresskrish/anime-website",
      dates: "",
      active: true,
      description:
        "This website showcases popular anime shows with information and images, providing a visually appealing and user-friendly interface.",
      technologies: [
        "HTML",
        "CSS",
        "JS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/addresskrish/anime-website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Anime-Website-Banner.png",
      video: "",
    },
    {
      title: "Tesla landing page",
      href: "https://github.com/addresskrish/tesla-landing-page",
      dates: "",
      active: true,
      description:
        "Tesla landing page using react and tailwind css.",
      technologies: [
        "React.js",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/addresskrish/tesla-landing-page",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tesla-landing-page.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Hackout - 2024",
      dates: "11 Aug 2024",
      location: "Daiict, Gandhinagar",
      description:
        "Developed a web application",
      image:
        "./daiict-logo.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
