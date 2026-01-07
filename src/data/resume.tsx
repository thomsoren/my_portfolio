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
        "Led team of 4 building ML recommendation systems for Infor ERP. Developed product recommendation engine and price prediction models using customer purchase history. Currently implementing AI agents to automate business processes.",
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
        "We won the Recover Norge Hackathon by developing a machine learning solution to predict missing actions in repair calculations. Recover Norge helps people when their homes are damaged, but their team often spends hours manually identifying missing actions. We built an ensemble model combining XGBoost, CatBoost, LightGBM, and a custom neural network to automate this process. For the final task, we created three live production demos in just a few hours based on real problems Recover faces daily, demonstrating practical tools they could immediately use to speed up their workflow and focus on fixing homes instead of fixing calculations.",
      image: getLogoUrl("recoverlogo.png"),
      win: "1st place",
      links: []
    },
    {
      title: "Norwegian AI Championship 2025",
      dates: "August 2025",
      location: "Norway",
      description:
        "We won 2nd place in the Norwegian AI Championship 2025 with Cogito, a week-long competition featuring three challenging tasks: NLP with retrieval-augmented generation for medical documents, reinforcement learning with a self-driving car, and computer vision with tumor segmentation.",
      image: getImageUrl("nm-ai.png"),
      win: "2nd place - Norwegian AI Championship",
      links: []
    },
    {
      title: "A* Hackathon 2025 w/ Norges Gruppen & Cogito",
      dates: "April 4-5, 2025",
      location: "Trondheim",
      description:
        "During a 16-hour hackathon organized by A* Consulting in collaboration with Norges Gruppen and Cogito, we developed a real-time AI system (YOLOv11) for automatic product classification, receipt generation, and theft detection in self-checkout systems. Our live demo using mobile camera, web app, and a robust computer vision model secured us a solid third place.",
      image: getImageUrl("astar.jpeg"),
      win: "3rd place",
      links: []
    },
    {
      title: "BRAIN Hackathon 2025",
      dates: "March 15-16, 2025",
      location: "Trondheim",
      description:
        "Organized by DNV with a focus on developing an object detection model for autonomous vessels. The task was to create a machine learning model for obstacle detection – a critical step in developing autonomous collision avoidance. The competition was conducted on Kaggle, with 24 hours to achieve the highest possible accuracy, while emphasizing model interpretability and risk assessment. We ended up in second place and were awarded best presentation and most creative approach. We used computer vision models like YOLO 11.",
      image: getImageUrl("brainlogo.png"),
      win: "2nd place | Best presentation | Most creative approach",
      links: []
    },
    {
      title: "Start Code 2024",
      dates: "October 25-27, 2024",
      location: "Trondheim",
      description:
        "Participated in a 48-hour hackathon organized by Start Code, where we solved a case from one of their main partners, emno. We worked on automatically connecting a Raspberry Pi to a website. It was an intense and educational experience that provided insight into both hardware integration and web development under time pressure.",
      image: getImageUrl("startntnu.jpeg"),
      links: []
    },
  ],
} as const;
