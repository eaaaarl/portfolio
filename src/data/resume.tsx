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
  devName: "Eaaaarl",
  name: "Earl Dominic Ado",
  initials: "EA",
  url: "https://eaaaarl.vercel.app",
  location: "San Francisco, Agusan Del Sur",
  locationLink: "https://maps.app.goo.gl/nJXDQFTM5aSTDpeU9",
  description:
    "Computer Science student and aspiring Software Engineer. I love building innovative solutions and exploring modern technologies. Passionate about full-stack development and creating enterprise-level applications.",
  summary:
    "As a dedicated Computer Science student, I'm actively pursuing my path in software engineering through hands-on project development. I've built several applications using Next.js and modern web technologies, focusing on creating efficient and scalable solutions. Outside of academics, I'm constantly working on side projects to deepen my understanding of full-stack development and enterprise architecture. I believe in continuous learning and staying current with industry trends. When I'm not coding, you'll find me upskilling in modern tech stacks and exploring new ways to build robust applications that solve real-world problems.",
  avatarUrl: "/me.jpg",
  skillsWithIcons: [
    { name: "React", icon: <Code className="w-4 h-4" /> },
    { name: "Vue.js", icon: <Code className="w-4 h-4" /> },
    { name: "Next.js", icon: <Box className="w-4 h-4" /> },
    { name: "PHP", icon: <Code className="w-4 h-4" /> },
    { name: "Laravel", icon: <LayoutTemplate className="w-4 h-4" /> },
    { name: "Node.js", icon: <Terminal className="w-4 h-4" /> },
    { name: "Express.js", icon: <Terminal className="w-4 h-4" /> },
    { name: "Nest.js", icon: <Terminal className="w-4 h-4" /> },
    { name: "Typescript", icon: <FileCode2 className="w-4 h-4" /> },
    { name: "Postgres", icon: <Database className="w-4 h-4" /> },
    { name: "Docker", icon: <Container className="w-4 h-4" /> },
  ],
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
        "Developed a comprehensive Faculty Evaluation System for North Eastern Mindanao State University - Lianga Campus (NEMSU LC). This web application streamlines the evaluation process by allowing students to assess faculty performance digitally, replacing traditional paper-based methods. The system features secure authentication, automated evaluation periods, and detailed reporting capabilities for administration.",
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
          href: "https://fes-nlc.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/fesnlc.png",
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
