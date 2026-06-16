export interface Experience {
  role: string
  organization: string
  location: string
  startDate: string
  endDate: string | null
  description: string
  highlights: string[]
  type: "work" | "education"
}

export const experiences: Experience[] = [
  {
    role: "Student Developer",
    organization: "Self-Employed / Freelance",
    location: "Melbourne, Australia",
    startDate: "2020",
    endDate: null,
    description: "Building web apps, mobile apps, games, and AI tools for clients and personal projects.",
    highlights: [
      "Developed an AI assistant and encrypted device bridge (OneBridge)",
      "Built VCE Forge, a study platform serving thousands of students",
      "Created Fret Flow, an AI-powered guitar practice app",
      "Produced music and edited video content with 100K+ views",
    ],
    type: "work",
  },
  {
    role: "Video Editor & Motion Designer",
    organization: "Freelance",
    location: "Melbourne, Australia",
    startDate: "2019",
    endDate: null,
    description: "Editing video content, motion graphics, and music production for various clients.",
    highlights: [
      "Edited content viewed over 100,000 times across platforms",
      "Created motion graphics and visual effects in After Effects",
      "Produced original music and sound design",
    ],
    type: "work",
  },
  {
    role: "High School Student",
    organization: "Victorian Certificate of Education (VCE)",
    location: "Melbourne, Australia",
    startDate: "2023",
    endDate: "2025",
    description: "Currently completing VCE with a focus on Software Development, Applied Computing, and STEM.",
    highlights: [
      "Developed multiple projects combining AI, mobile, and game technologies",
      "Participated in hackathons and tech events since age 8",
      "Built study tools used by fellow VCE students",
    ],
    type: "education",
  },
]
