import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Thomas Nordby Sørensen",
  initials: "TN",
  url: "https://thomas-portfolio.example.com",
  location: "Trondheim, Norway",
  locationLink: "https://www.google.com/maps/place/trondheim",
  description:
    "Student og utvikler med lidenskap for AI, web og entreprenørskap.",
  summary:
    "Jeg elsker å bygge løsninger som løser reelle problemer, og lærer kontinuerlig nye teknologier. Akkurat nå studerer jeg informatikk ved NTNU og jobber deltid som vekter. På fritiden leder jeg et AI-prosjekt i samarbeid med Infor, der jeg blant annet har jobbet med anbefalingssystemer, prisanbefaling og eksperimenterer med AI-agenter. Jeg er alltid på utkikk etter nye utfordringer og spennende muligheter!",
  avatarUrl: "/profilepic.png",
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
      company: "Cogito x Infor",
      href: "",
      badges: [],
      location: "Trondheim",
      title: "AI Intern / Prosjektleder",
      logoUrl: "/logos/cog.png",
      start: "2024",
      end: "nå",
      description:
        "Leder et team på 4 studenter i et samarbeid med Infor, verdens tredje største leverandør av ERP-systemer.\nHar utviklet flere AI-baserte løsninger, inkludert anbefalingssystemer, prisanbefaling og nå AI-agenter for å forbedre forretningsprosesser.\nFokuserer på maskinlæring, prosjektledelse og praktisk implementering av AI-løsninger.",
    },
    {
      company: "Utelivsbransjen",
      badges: [],
      href: "/logos/securitas.png",
      location: "Trondheim",
      title: "Vekter",
      logoUrl: "/logos/securitas.png",
      start: "2023",
      end: "2025",
      description:
        "Ansvar for sikkerheten til gjester på ulike utesteder.\nUtvikler gode kommunikasjons- og samarbeidsevner gjennom å håndtere utfordrende situasjoner i høyt tempo.",
    },
  ],
  education: [
    {
      school: "NTNU",
      href: "https://www.ntnu.no/",
      degree: "Bachelor i Informatikk",
      logoUrl: "/logos/ntnu-logo.png",
      start: "2023",
      end: "2026 (pågående)",
      description: "Studerer programmering, algoritmer, databaser og webutvikling.\nKombinerer teoretiske og praktiske ferdigheter for å skape robuste IT-løsninger."
    },
  ],
  projects: [
     {
      title: "Futleie",
      href: "",
      dates: "2025",
      active: false,
      description:
        "En utleienettside utviklet i faget Programvareutvikling.\nFokus på brukeropplevelse, sikker innlogging og enkel administrasjon av utleieobjekter.\nArbeidet ga god innsikt i planlegging, koding og testing av en fullstendig webapplikasjon.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Supabase",
        "Fullstack weutvikling",
        "Programvareutvikling"
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
      video: "/videos/Futleie.mp4"
    },
    {
      title: "Cogito x Infor",
      href: "",
      dates: "2023 - nå",
      active: true,
      description:
        "Utvikler anbefalingssystemer og prisanbefalinger for kunder basert på tidligere kjøpsdata.\nEksperimenterer med AI-agenter for å optimalisere interne forretningsprosesser.\nHar ansvar for både teknisk gjennomføring og teamledelse.",
      technologies: [
        "Maskinlæring",
        "Python",
        "ERP-systemer",
        "Prosjektledelse",
        "AI-agenter",
        "Anbefalingssystemer"
      ],
      links: [
        {
          icon: <Icons.github className="size-4" />,
          type: "github",
          href: "https://github.com/CogitoNTNU/cogitoxinfor-agents",
        },
      ],
      image: "",
      video: "/videos/InforBrowserUse2.mp4"
    },
    {
      title: "Anbefalingssystem for nyheter",
      href: "",
      dates: "2025",
      active: false,
      description:
        "Utviklet et content-based anbefalingssystem for nyhetsartikler som bruker sentence transformers til å finne lignende artikler basert på brukerpreferanser.\nHadde ansvar for hele pipeline fra datainnsamling til implementering av anbefalingsalgoritmen.",
      technologies: [
        "Python",
        "Sentence Transformers",
        "Maskinlæring",
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
      video: "/videos/News_recommender.mp4"
    },
   
    {
      title: "Kollapp",
      href: "",
      dates: "2024",
      active: false,
      description:
        "App for studenter i kollektiv som forenkler hverdagen ved å gjøre det enkelt å dele på oppgaver som søppel og rengjøring, håndtere oppgjør ved spleising av mat, og kommunisere via integrert gruppechat. Automatiserer mange av de utfordringene studenter i kollektiv møter.",
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
      video: "/videos/Kollapp.mp4"
    },
  ],
  hackathons: [
    {
      title: "Start Code 2024",
      dates: "25.–27. oktober 2024",
      location: "Trondheim",
      description:
        "Deltakerne fikk delta på et 48-timers hackathon i regi av Start Code, hvor vi skulle løse en case fra en av hovedsamarbeidspartnerne, emno. Her jobbet vi med å koble en Raspberry Pi opp mot en nettside automatisk. Det var en intens og lærerik opplevelse som ga innsikt i både maskinvareintegrasjon og webutvikling under tidspress.",
      image: "/startntnu.jpeg",
      links: []
    },
    {
      title: "BRAIN Hackathon 2025",
      dates: "15.–16. mars 2025",
      location: "Trondheim",
      description:
        "Arrangert av DNV med fokus på utvikling av en objektdeteksjons-modell for autonome fartøy. Oppgaven var å lage en maskinlæringsmodell for hindringsdeteksjon – et kritisk steg i utviklingen av autonom kollisjonsunngåelse. Konkurransen ble gjennomført på Kaggle, med 24 timer til å oppnå høyest mulig nøyaktighet, samtidig som vi la vekt på modellens fortolkbarhet and risikovurdering. Vi endte opp på andreplass, og ble kåret til beste presentasjon og for mest kreative approach. Vi benyttet datasynmodeller som YOLO 11.",
      image: "/brainlogo.png",
      win: "2. plass | Beste presentasjon | Mest kreative approach",
      links: []
    }
  ],
} as const;
