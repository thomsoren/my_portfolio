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
    "Student and developer with a passion for AI, web development, and entrepreneurship.",
  summary:
    "I love building solutions that solve real problems and continuously learning new technologies. Currently studying Computer Science at NTNU and working part-time as a security guard. In my spare time, I lead an AI project in collaboration with Infor, where I've worked on recommendation systems, price recommendations, and experimented with AI agents. I'm always looking for new challenges and exciting opportunities!",
  avatarUrl: getImageUrl("thomas-profilbilde.jpg"),
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Framer Motion",
    "Java",
    "Figma",
    "JavaFX",
    "Git",
    "Tailwind"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
      title: "Futleie",
      href: "https://github.com/thomsoren/futleie-github",
      dates: "2025",
      active: false,
      description:
        "A rental website developed in the Software Development course.\nFocus on user experience, secure login, and simple administration of rental objects.\nThe work provided good insight into planning, coding, and testing a complete web application.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Supabase",
        "Fullstack web development",
        "Software development"
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
      title: "Cogito x Infor",
      href: "https://github.com/CogitoNTNU/cogitoxinfor-agents",
      dates: "2023 - 2025",
      active: true,
      description:
        "Developing recommendation systems and price recommendations for customers based on previous purchase data.\nExperimenting with AI agents to optimize internal business processes.\nResponsible for both technical implementation and team leadership.",
      technologies: [
        "Machine Learning",
        "Python",
        "ERP Systems",
        "Project Management",
        "AI Agents",
        "Recommendation Systems"
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
      title: "News Recommendation System",
      href: "https://github.com/jernbert/TDT4215---Recommender-Project",
      dates: "2025",
      active: false,
      description:
        "Developed a content-based recommendation system for news articles that uses sentence transformers to find similar articles based on user preferences.\nResponsible for the entire pipeline from data collection to implementation of the recommendation algorithm.",
      technologies: [
        "Python",
        "Sentence Transformers",
        "Machine Learning",
        "NLP"
      ],
      links: [
        {
          icon: <Icons.github className="size-4" />,
          type: "github",
          href: "https://github.com/jernbert/TDT4215---Recommender-Project",
        },
      ],
      image: "",
      video: getVideoUrl("News_recommender.mp4")
    },
   
    {
      title: "Kollapp",
      href: "https://github.com/ludvigovrevik/Kollapp",
      dates: "2024",
      active: false,
      description:
        "App for students in shared housing that simplifies daily life by making it easy to share tasks like garbage and cleaning, handle settlements when splitting food costs, and communicate via integrated group chat. Automates many of the challenges students in shared housing face.",
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
      image: getImageUrl("recover.png"),
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
