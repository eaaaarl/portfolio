import { Icons } from "@/components/icons";
import {
  Box,
  Code,
  Container,
  Database,
  FileCode2,
  HomeIcon,
  LayoutTemplate,
  Terminal,
} from "lucide-react";

export const DATA = {
  devName: "Earl Dominic Ado",
  name: "Earl Dominic Ado",
  initials: "EA",
  url: "https://eaaaarl.vercel.app",
  location: "San Francisco, Agusan Del Sur",
  locationLink: "https://maps.app.goo.gl/nJXDQFTM5aSTDpeU9",
  description:
    "“Simplicity is the ultimate sophistication.” — Leonardo da Vinci",
  summary: "Hi, I'm Earl. A Full Stack Developer who enjoys building things from the ground up web apps, mobile apps, and everything in between. I like both the problem solving and creative side of development, and I'm always experimenting with new ideas and technologies. I care about writing clean, maintainable code and building things that actually help people. Always open to new projects and challenges that push me to grow.", avatarUrl: "/me.jpg",
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/eaaaarl",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "",
        icon: Icons.linkedin,
        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/eaaaaaarl01010",
        icon: Icons.facebook,

        navbar: true,
      },

      Resume: {
        name: "Resume",
        url: "/resume.pdf",
        icon: Icons.resume,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Freelance Web Development",
      badges: ["NextJS"],
      location: "Remote",
      title: "Full Stack Web Developer",
      logoUrl: "/freelance.png",
      start: "2022",
      end: "Present",
      href: "https://github.com/eaaaarl",
      description:
        "Assist fellow students with their academic projects, providing web development solutions and technical guidance. Create custom web applications tailored to specific project requirements using modern frameworks like Next.js and Laravel. Focus on delivering clean, well-documented code while helping others understand web development concepts.",
    },
  ],

  education: [
    {
      school: "Senior High School - Agusan Sur National High School",
      href: "https://www.facebook.com/agsurhigh",
      degree: "Computer Programming",
      logoUrl: "/asnhs-logo.png",
      start: "2018",
      end: "2020",
      description: "",
    },
    {
      school: "Northern Eastern Mindanao State University - Lianga Campus",
      href: "https://www.nemsu.edu.ph/",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: "/nemsu-logo.png",
      start: "2024",
      end: "Present",
      description:
        "3rd Year Computer Science Student • Expected Graduation 2026",
    },
  ],
  projects: [
    {
      title: "Faculty Evaluation System - NLC",
      href: "https://fes-nlc.vercel.app",
      dates: "Sep 2024 - Dec 2024",
      active: true,
      description:
        "FEVALS is a designed and developed a faculty performance evaluation system for educational institutions, featuring secure role-based access, dynamic evaluation forms with customizable rubrics, real-time analytics dashboards, and automated report generation",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "React Query",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/fesnlc.png",
      video: "",
    },
    {
      title: "Barangay Information System - EBIS",
      href: "#",
      dates: "June 2024 - August 2024",
      active: true,
      description:
        "EBIS is a designed and developed a local government platform for managing resident data, issuing documents (clearances, permits), tracking complaints, and generating analytics. Includes SMS notifications via Semaphore API for real-time updates.",
      technologies: [
        "PHP",
        "Semaphore",
        "jQuery",
        "HTML",
        "CSS",
        "Bootstrap",
        "Admin LTE",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ebis.png",
      video: "",
    },
    {
      title: "iMovia",
      href: "#",
      dates: "April 2025 - May 2025",
      active: true,
      description:
        "A feature-rich movie discovery app built with React Native that showcases trending films, personalized recommendations, and secure user authentication. Leveraging TMDB's extensive API, iMovia delivers a seamless cinematic experience with modern UI/UX principles.",
      technologies: [
        "Expo",
        "React Native",
        "Firebase Authentication",
        "Redux Toolkit",
        "Tailwind CSS",
        "TypeScript",
        "TMDB API",
      ],
      links: [
        {
          type: "Mobile",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/imovia.jpg",
      video: "",
    },
    {
      title: "ENSTRA",
      href: "#",
      dates: "May 2025 - Current",
      active: true,
      description:
        "A digital enrollment system for National Service Training Program (NSTP) components (CWTS, ROTC, and LTS) that streamlines student registration, class management, and administrative tracking. The platform modernizes traditional paper-based processes with secure online workflows.",
      technologies: [
        "React Vite",
        "Express JS",
        "Docker",
        "PostgreSQL",
        "Tailwind CSS",
        "Shadcn UI",
        "Redux Toolkit",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/default.jpg",
      video: "",
    },
  ],
  events: [
    {
      title: "Hack4Gov Capture the Flag",
      dates: "August 23 - 24, 2024",
      location: "Almont Inland Resort, Butuan City",
      description:
        "Participated in my first cybersecurity Capture the Flag (CTF) competition, solving challenges in areas such as cryptography, web exploitation, and reverse engineering. It was an incredible learning experience that sharpened my problem-solving and teamwork skills.",
      image: "/hack4gov.jpg",
      mlh: "",
      links: [],
    },
  ],
} as const;
