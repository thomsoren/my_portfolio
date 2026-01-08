import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { getAssetUrl, getVideoUrl, getImageUrl, getLogoUrl } from "@/lib/s3";

export const DATA = {
  name: "Thomas Nordby Sørensen",
  initials: "TN",
  url: "https://thomas-portfolio.example.com",
  location: "Trondheim, Norway",
  locationLink: "https://www.google.com/maps/place/trondheim",
  description:
    "I help teams ship reliable AI.\nFrom problem to product.",
  summary:
    "I like building. I like learning. And I like the feeling when a messy workflow becomes a simple product. That's why I spend time on evaluation, reliability, and shipping, not just demos.",
  avatarUrl: getImageUrl("thomas-profilbilde.jpg"),
  skills: [
    "Python",
    "Machine Learning",
    "RAG",
    "Computer Vision",
    "Reinforcement Learning",
    "AI Agents",
    "MCP",
    "Recommender Systems",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Java",
    "Git"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "thomanso@stud.ntnu.no",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/thomsoren",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/thomas-nordby-s%C3%B8rensen-80253b1ab/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:thomanso@stud.ntnu.no",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "OpenBridge",
      href: "",
      badges: [],
      location: "Oslo",
      title: "Part-time Software Developer",
      logoUrl: getLogoUrl("openbridge.png"),
      start: "Aug 2025",
      end: "Present",
      description:
        "Working as a part-time software developer while studying, focusing on full-stack development and contributing to innovative software solutions.",
    },
    {
      company: "Rystad Energy",
      href: "",
      badges: [],
      location: "Oslo",
      title: "Summer Intern",
      logoUrl: getLogoUrl("rystad.png"),
      start: "Jun 2025",
      end: "Aug 2025",
      description:
        "Summer internship at a leading energy intelligence company, gaining experience in data analysis and software development within the energy sector.",
    },
    {
      company: "Cogito x Infor",
      href: "",
      badges: [],
      location: "Trondheim",
      title: "AI Intern / Project Leader",
      logoUrl: getLogoUrl("cog.png"),
      start: "2024",
      end: "2025",
      description:
        "Lead a team of 4 students in collaboration with Infor, the world's third-largest ERP systems provider.\nDeveloped several AI-based solutions, including recommendation systems, price recommendations, and now AI agents to improve business processes.\nFocusing on machine learning, project management, and practical implementation of AI solutions.",
    },
    {
      company: "Nightlife Industry",
      badges: [],
      href: getLogoUrl("securitas.png"),
      location: "Trondheim",
      title: "Security Guard",
      logoUrl: getLogoUrl("securitas.png"),
      start: "2023",
      end: "2025",
      description:
        "Responsible for guest safety at various nightlife venues.\nDeveloping strong communication and collaboration skills by handling challenging situations at a fast pace.",
    },
  ],
  education: [
    {
      school: "NTNU",
      href: "https://www.ntnu.no/",
      degree: "Bachelor in Computer Science",
      logoUrl: getLogoUrl("ntnu-logo.png"),
      start: "2023",
      end: "2026 (ongoing)",
      description: "Studying programming, algorithms, databases, and web development.\nCombining theoretical and practical skills to create robust IT solutions."
    },
  ],
  projects: [
    {
      title: "PokeClicker",
      href: "https://github.com/thomsoren/PokeClicker",
      dates: "September - November 2025",
      active: true,
      description:
        "Built web-based Pokemon game with React and TypeScript. Implemented game state management, MongoDB backend for saving progress, and interactive battle system.",
      technologies: [
        "React",
        "TypeScript",
        "MongoDB",
        "Vite"
      ],
      links: [
        {
          icon: <Icons.github className="size-4" />,
          type: "github",
          href: "https://github.com/thomsoren/PokeClicker",
        },
        {
          icon: <Icons.globe className="size-4" />,
          type: "website",
          href: "https://pokeclicker.no/",
        },
      ],
      image: "",
      video: getVideoUrl("pokemondemo.mp4")
    },
    {
      title: "Bridgable MCP",
      href: "https://bridgable.ai/",
      dates: "October 2025",
      active: true,
      description:
        "Built MCP server that gives AI agents instant access to OpenBridge domain knowledge. Integrated RAG system to enable one-line installation for querying OpenBridge documentation and APIs.",
      technologies: [
        "MCP",
        "RAG",
        "AI Agents",
        "Python"
      ],
      links: [
        {
          icon: <Icons.globe className="size-4" />,
          type: "website",
          href: "https://bridgable.ai/",
        },
      ],
      image: "",
      video: getVideoUrl("bridgablemcpdemo.mp4")
    },
    {
      title: "Vervify",
      href: "https://vervify.no/",
      dates: "August 2025",
      active: true,
      description:
        "Built centralized directory for all NTNU student organizations. Implemented self-service registration system and search functionality to help students discover campus activities.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL"
      ],
      links: [
        {
          icon: <Icons.github className="size-4" />,
          type: "github",
          href: "https://github.com/thomsoren/Vervify",
        },
        {
          icon: <Icons.globe className="size-4" />,
          type: "website",
          href: "https://vervify.no/",
        },
      ],
      image: "",
      video: getVideoUrl("vervifydemo.mp4")
    },
    {
      title: "Cogito x Infor",
      href: "https://github.com/CogitoNTNU/cogitoxinfor-agents",
      dates: "2023 - 2025",
      active: true,
      description:
        "Led team of 9 students building ML recommendation systems for Infor ERP. Developed product recommendation engine and price prediction models using customer purchase history. Built no-code browser test automation tool for cloud ERP, replacing thousands of hours of manual testing.",
      technologies: [
        "Python",
        "Machine Learning",
        "AI Agents",
        "scikit-learn"
      ],
      links: [
        {
          icon: <Icons.github className="size-4" />,
          type: "github",
          href: "https://github.com/CogitoNTNU/cogitoxinfor-agents",
        },
      ],
      image: "",
      video: getVideoUrl("InforBrowserUse2.mp4")
    },
    {
      title: "Futleie",
      href: "https://github.com/thomsoren/futleie-github",
      dates: "2025",
      active: false,
      description:
        "Built rental marketplace web app with Next.js and Supabase. Implemented authentication, item listing/browsing, and admin dashboard for managing rental inventory.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "Tailwind CSS"
      ],
      links: [
        {
          icon: <Icons.github className="size-4" />,
          type: "github",
          href: "https://github.com/thomsoren/futleie-github",
        },
        {
          icon: <Icons.globe className="size-4" />,
          type: "website",
          href: "https://futleie56.vercel.app/",
        },
      ],
      image: "",
      video: getVideoUrl("Futleie.mp4")
    },
    {
      title: "Kollapp",
      href: "https://github.com/ludvigovrevik/Kollapp",
      dates: "2024",
      active: false,
      description:
        "Built desktop app for student shared housing management. Implemented task scheduling, expense splitting with automated settlements, and group chat using Java and JavaFX.",
      technologies: [
        "Java",
        "JavaFX"
      ],
      links: [
        {
          icon: <Icons.github className="size-4" />,
          type: "github",
          href: "https://github.com/ludvigovrevik/Kollapp",
        },
      ],
      image: "",
      video: getVideoUrl("Kollapp.mp4")
    },
  ],
  hackathons: [
    {
      title: "Recover Norge Hackathon",
      dates: "October 24-25, 2025",
      location: "Trondheim",
      description:
        "Built ML ensemble model to predict missing actions in home repair calculations. Trained XGBoost, CatBoost, LightGBM, and custom neural network to automate manual identification process. Delivered three production-ready demos solving real workflow problems.",
      image: getLogoUrl("recoverlogo.png"),
      win: "1st place",
      links: []
    },
    {
      title: "Norwegian AI Championship 2025",
      dates: "August 2025",
      location: "Norway",
      description:
        "Week-long AI competition with three tasks: built RAG system for medical document NLP, trained RL agent for autonomous driving, and implemented computer vision model for tumor segmentation.",
      image: getImageUrl("nm-ai.png"),
      win: "2nd place - Norwegian AI Championship",
      links: []
    },
    {
      title: "A* Hackathon 2025 w/ Norges Gruppen & Cogito",
      dates: "April 4-5, 2025",
      location: "Trondheim",
      description:
        "Built real-time YOLOv11 system for self-checkout with automatic product classification, receipt generation, and theft detection. Developed web app with mobile camera integration for live demo.",
      image: getImageUrl("astar.jpeg"),
      win: "3rd place",
      links: []
    },
    {
      title: "BRAIN Hackathon 2025",
      dates: "March 15-16, 2025",
      location: "Trondheim",
      description:
        "Built YOLO 11 object detection model for autonomous vessel obstacle detection and collision avoidance. 24-hour Kaggle competition focused on model accuracy, interpretability, and risk assessment.",
      image: getImageUrl("brainlogo.png"),
      win: "2nd place | Best presentation | Most creative approach",
      links: []
    },
    {
      title: "Start Code 2024",
      dates: "October 25-27, 2024",
      location: "Trondheim",
      description:
        "Built automated Raspberry Pi to web integration for emno. Implemented hardware-to-web connection system during 48-hour hackathon.",
      image: getImageUrl("startntnu.jpeg"),
      win: undefined,
      links: []
    },
  ],
} as const;
