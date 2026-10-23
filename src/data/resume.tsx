import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { getAssetUrl, getVideoUrl, getImageUrl, getLogoUrl } from "@/lib/s3";

export const DATA = {
  name: "Thomas Sorensen",
  initials: "TS",
  url: "https://thomas-portfolio.example.com",
  location: "Trondheim, Norway",
  locationLink: "https://www.google.com/maps/place/trondheim",
  description:
    "I build, ship, and compete.",
  summary:
    "Co-founder and CEO of Lito, the tactile data layer for physical AI.",
  avatarUrl: getImageUrl("thomas-cogito.jpeg"),
  skills: [
    "AI Agents",
    "MCP",
    "Machine Learning",
    "Computer Vision",
    "YOLO",
    "Reinforcement Learning",
    "Robotics",
    "MuJoCo",
    "RAG",
    "Recommender Systems",
    "Python",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
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
        url: "https://www.linkedin.com/in/thomasns/",
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
      company: "Lito",
      href: "https://lito.so/",
      badges: [],
      location: "Trondheim",
      title: "CEO, Co-founder",
      logoUrl: "/logos/lito.png",
      start: "Aug 2026",
      end: "Present",
      description:
        "The tactile data layer for physical AI. High-fidelity force and touch data for training robot manipulation.",
    },
    {
      company: "EverestLabs.AI",
      href: "https://www.everestlabs.ai/",
      badges: [],
      location: "California",
      title: "AI Engineer",
      logoUrl: "/logos/everestlabs.png",
      start: "Jun 2026",
      end: "Aug 2026",
      description:
        "Improved their computer vision system by 10% mAP50 score.",
    },
    {
      company: "Bridgable",
      href: "https://bridgable.ai/",
      badges: [],
      location: "Trondheim",
      title: "CEO, Founder",
      logoUrl: "/logos/bridgable.png",
      start: "Jan 2026",
      end: "May 2026",
      description:
        "Lovable for industrial control systems.",
    },
    {
      company: "Cogito NTNU",
      href: "https://cogito-ntnu.no/",
      badges: [],
      location: "Trondheim",
      title: "CMO",
      logoUrl: "/logos/cogito.png",
      start: "Jan 2026",
      end: "May 2026",
      description:
        "Norway's biggest AI student organization.",
    },
    {
      company: "OpenBridge",
      href: "https://www.openbridge.no/",
      badges: [],
      location: "Oslo",
      title: "Software Developer",
      logoUrl: getLogoUrl("openbridge.png"),
      start: "Aug 2025",
      end: "May 2026",
      description:
        "Building open source web components \u2014 the industry standard for maritime. Part time.",
    },
    {
      company: "Altek",
      href: "",
      badges: [],
      location: "Remote",
      title: "AI Engineer",
      logoUrl: getLogoUrl("altek.jpeg"),
      start: "Feb 2026",
      end: "Apr 2026",
      description:
        "Automated customer service for 70+ hotels with AI agents. Part time.",
    },
    {
      company: "Infor",
      href: "",
      badges: [],
      location: "Trondheim",
      title: "Team Lead (AI Intern)",
      logoUrl: "/logos/infor.png",
      start: "Mar 2024",
      end: "Dec 2025",
      description:
        "Led a team of 9 people for 3 semesters with the world's third-largest ERP provider. Built AI for test automation, recommender systems and price recommendation.",
    },
    {
      company: "Rystad Energy",
      href: "",
      badges: [],
      location: "Oslo",
      title: "AI Intern",
      logoUrl: getLogoUrl("rystad.png"),
      start: "Jun 2025",
      end: "Aug 2025",
      description:
        "Made their data AI friendly with MCP.",
    },
    {
      company: "Norwegian Armed Forces",
      href: "",
      badges: [],
      location: "Norway",
      title: "Guard",
      logoUrl: "/logos/forsvaret.png",
      start: "Jan 2022",
      end: "Jan 2023",
      description:
        "Military service.",
    },
  ],
  education: [
    {
      school: "University of California, Berkeley",
      href: "https://www.berkeley.edu/",
      degree: "MA, Entrepreneurship",
      logoUrl: "/logos/berkeley.png",
      start: "Jun 2026",
      end: "Aug 2026",
      description: "Entrepreneurship program at UC Berkeley."
    },
    {
      school: "NTNU",
      href: "https://www.ntnu.no/",
      degree: "BA, Computer Science",
      logoUrl: getLogoUrl("ntnu-logo.png"),
      start: "Aug 2023",
      end: "May 2026",
      description: "Studying programming, algorithms, databases, and web development.\nCombining theoretical and practical skills to create robust IT solutions."
    },
  ],
  projects: [
    {
      title: "Autoresearch Robotics",
      href: "https://hack.lito.so/autoresearch.html",
      dates: "September 2026",
      active: true,
      description:
        "A robot that improves itself. It attempts a task, a second AI writes down what went wrong, and the new instructions are only kept if the robot measurably does better. Lift success went from 2/3 to 3/3 in development and 3/5 to 4/5 on unseen starting states, with 41% fewer controller steps. Built in 10 hours at Mad Hack.",
      technologies: [
        "MuJoCo",
        "Robosuite",
        "Python",
        "AI Agents"
      ],
      links: [
        {
          icon: <Icons.github className="size-4" />,
          type: "github",
          href: "https://github.com/thomsoren/autoresearch-robotics",
        },
        {
          icon: <Icons.globe className="size-4" />,
          type: "website",
          href: "https://hack.lito.so/autoresearch.html",
        },
      ],
      image: "",
      video: "/videos/autoresearch-lift.mp4"
    },
    {
      title: "Maritime AR Overlay",
      href: "https://ar.bridgable.ai/",
      dates: "January - May 2026",
      active: true,
      description:
        "Building the standard for POI video overlay with 7 developers. Real-time AR system combining computer vision, AIS data, and live video streaming for maritime navigation.",
      technologies: [
        "Computer Vision",
        "AIS Integration",
        "AR Overlay"
      ],
      links: [
        {
          icon: <Icons.globe className="size-4" />,
          type: "website",
          href: "https://ar.bridgable.ai/",
        },
      ],
      image: "",
      video: getVideoUrl("openar-demo.mp4")
    },
    {
      title: "ThinkDraw",
      href: "https://thinkdraw.thomasns.com",
      dates: "January 2026",
      active: true,
      description:
        "Speak your ideas and watch them become mindmaps, diagrams, or sketches in seconds. Turns messy thoughts into clean visuals without the drawing hassle.",
      technologies: [
        "Vite",
        "SST",
        "LLM",
        "TTS",
        "tldraw SDK"
      ],
      links: [
        {
          icon: <Icons.globe className="size-4" />,
          type: "website",
          href: "https://thinkdraw.thomasns.com",
        },
      ],
      image: "",
      video: getVideoUrl("thinkdrawdemo.mp4")
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
      title: "Mad Hack 2026",
      dates: "September 12, 2026",
      location: "Oslo",
      description:
        "Built a robot that improves itself in 10 hours. It attempts a task, a second AI writes down what went wrong, and the new instructions are only kept if the robot measurably does better. Lift success went from 2/3 to 3/3 in development and 3/5 to 4/5 on unseen starting states, with 41% fewer controller steps. Built with MuJoCo and Robosuite together with Ludvig \u00d8vrevik and Laksiya Balasubramaniam.",
      image: "/logos/madlab.png",
      win: "1st place | Hosted by AI Mad Lab",
      links: [
        {
          icon: <Icons.github className="size-4" />,
          title: "Source",
          href: "https://github.com/thomsoren/autoresearch-robotics",
        },
        {
          icon: <Icons.globe className="size-4" />,
          title: "Demo",
          href: "https://hack.lito.so/autoresearch.html",
        },
      ]
    },
    {
      title: "Norwegian AI Championship 2026",
      dates: "March 19-22, 2026",
      location: "Norway",
      description:
        "Biggest NM i AI ever with 350+ teams and 3100 participants. Built civilization evolution predictor, Tripletex accounting agent, and trained YOLO26x on A100 for grocery detection. Scored higher than 1st and 2nd place in 2 of 3 tasks.",
      image: getImageUrl("nm-i-ai-logo.ico"),
      win: "11th place | 350+ teams",
      links: []
    },
    {
      title: "HackEurope 2026",
      dates: "February 21-22, 2026",
      location: "Stockholm",
      description:
        "Europe's largest hackathon across Paris, Dublin, and Stockholm with 1000+ builders. Built an agentic sales automation demo that handles follow-ups and syncs HubSpot, Slack, Gmail, and Stripe automatically.",
      image: getImageUrl("hackeurope-logo.png"),
      win: undefined,
      links: []
    },
    {
      title: "Brain x Bouvet 2026",
      dates: "February 13-14, 2026",
      location: "Trondheim",
      description:
        "Built agentic AI political party system with realtime conversational avatars, multiagent governance visualization, and voting mechanisms. Connected ministers to web, RAG, and custom tools with domain-optimized system prompts using GEPA.",
      image: getImageUrl("brainlogo.png"),
      win: "1st place | Majority vote from contestants",
      links: []
    },
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
      win: "2nd place",
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
        "Built YOLO 11 object detection models for autonomous vessel obstacle detection. Achieved top 4 models in the 24-hour Kaggle competition for collision avoidance and risk assessment.",
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
