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
    role: "Front Service Team Member",
    organization: "McDonald's",
    location: "Victoria",
    startDate: "September 2025",
    endDate: null,
    description: "Working front service area including drive thru, order taking, and order packing.",
    highlights: [
      "Take orders and pack orders at drive thru and front counter",
      "Provide fast, friendly customer service during peak hours",
      "Collaborate with team to maintain smooth service flow",
    ],
    type: "work",
  },
  {
    role: "Soccer Referee",
    organization: "Berwick Churches Soccer Club",
    location: "Berwick, Victoria",
    startDate: "2023",
    endDate: null,
    description: "VCFA Accredited soccer referee officiating club-level games.",
    highlights: [
      "Officiate U11, U13, and U15 age group matches",
      "Maintain game flow and enforce rules consistently",
      "Developed leadership, decision-making, and communication skills",
    ],
    type: "work",
  },
  {
    role: "Work Experience - Vocational Placement",
    organization: "Goldline Appliances",
    location: "Victoria",
    startDate: "June 2024",
    endDate: "June 2024",
    description: "One-week work experience covering product design, marketing, and sales.",
    highlights: [
      "Created promotional posts and videos using Canva and Photoshop",
      "Learned project management with Monday.com",
      "Provided front desk support and customer service",
    ],
    type: "work",
  },
  {
    role: "Student Developer",
    organization: "Self-Employed / Personal Projects",
    location: "Victoria",
    startDate: "2020",
    endDate: null,
    description: "Learning and practicing software development at school and during leisure time. Built multiple projects across game development and web apps.",
    highlights: [
      "Built projects in Unity 2D and GameMaker Studio",
      "Developed web apps using Visual Studio Code",
      "Completed multiple personal and school projects over several years",
    ],
    type: "work",
  },
  {
    role: "Public Speaking & Leadership",
    organization: "Berwick Toastmasters & School Debate",
    location: "Berwick, Victoria",
    startDate: "2020",
    endDate: null,
    description: "Investing time in public speaking and leadership through Toastmasters and school programs.",
    highlights: [
      "Berwick Toastmasters member (2020 - Present)",
      "Youngest active member of the club",
      "Participated in school debate team",
    ],
    type: "work",
  },
  {
    role: "Secondary School Student",
    organization: "Hillcrest Christian College",
    location: "Victoria",
    startDate: "2023",
    endDate: null,
    description: "Currently attending secondary school.",
    highlights: [],
    type: "education",
  },
  {
    role: "Secondary School Student",
    organization: "Beaconhills College",
    location: "Victoria",
    startDate: "2021",
    endDate: "2022",
    description: "Attended secondary school.",
    highlights: [],
    type: "education",
  },
]
