export interface Skill {
  name: string
  category: string
  proficiency: number
}

export const skills: Skill[] = [
  { name: "Public Speaking", category: "Professional", proficiency: 70 },
  { name: "Web Design", category: "Professional", proficiency: 85 },
  { name: "Design Thinking", category: "Professional", proficiency: 75 },
  { name: "Front End Coding", category: "Professional", proficiency: 90 },
  { name: "Problem-Solving", category: "Professional", proficiency: 85 },
  { name: "Computer Literacy", category: "Professional", proficiency: 90 },
  { name: "Strong Communication", category: "Professional", proficiency: 80 },
  { name: "Working With Others", category: "Professional", proficiency: 80 },
  { name: "Unity 2D", category: "Game Dev", proficiency: 70 },
  { name: "GameMaker Studio", category: "Game Dev", proficiency: 60 },
  { name: "Canva", category: "Design", proficiency: 75 },
  { name: "Photoshop", category: "Design", proficiency: 65 },
  { name: "Monday.com", category: "Tools", proficiency: 60 },
  { name: "VS Code", category: "Tools", proficiency: 95 },
]
