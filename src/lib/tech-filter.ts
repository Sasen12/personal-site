const TECH_KEYWORDS = [
  "ai", "machine learning", "deep learning", "llm", "gpt", "neural network",
  "programming", "coding", "software", "app", "application", "api", "database",
  "web", "website", "mobile", "ios", "android", "windows", "macos", "linux",
  "python", "javascript", "typescript", "rust", "go", "java", "c++", "c#", "swift",
  "kotlin", "react", "angular", "vue", "node", "next.js", "docker", "kubernetes",
  "cloud", "aws", "google cloud", "azure", "serverless", "microservice",
  "computer", "laptop", "desktop", "phone", "smartphone", "tablet",
  "chip", "processor", "cpu", "gpu", "nvidia", "amd", "intel", "apple silicon",
  "memory", "ram", "storage", "ssd", "hard drive",
  "startup", "tech company", "silicon valley", "saas", "open source",
  "robot", "automation", "self-driving", "autonomous", "ev", "electric vehicle",
  "cryptocurrency", "blockchain", "web3", "nft",
  "cybersecurity", "encryption", "privacy", "hacking", "security",
  "game", "gaming", "unity", "unreal", "vr", "ar", "xr", "metaverse",
  "network", "internet", "wifi", "5g", "bluetooth", "protocol",
  "hardware", "circuit", "arduino", "raspberry pi", "iot",
  "quantum", "server", "data center", "semiconductor", "foundry",
  "algorithm", "data structure", "framework", "library", "compiler",
  "os", "operating system", "firmware", "driver", "kernel",
  "tech", "technology", "digital", "software engineering",
  "frontend", "backend", "full-stack", "devops", "ci/cd",
  "ui", "ux", "design", "figma", "prototype", "wireframe",
  "vim", "neovim", "ide", "editor", "terminal", "bash", "zsh",
  "git", "github", "version control",
  "testing", "debugging", "deployment", "production",
  "agile", "scrum", "sprint",
  "responsive", "accessibility", "a11y", "seo",
  "graphics", "rendering", "shader", "animation",
  "tensorflow", "pytorch", "langchain", "vector database",
  "api gateway", "load balancer", "cdn", "cache",
  "thread", "process", "async", "concurrency", "parallel",
  "tensor", "transformer", "attention", "diffusion model",
  "fine-tuning", "rag", "embedding", "token",
  "mcp", "model context protocol", "function calling",
  "agent", "agentic", "multi-agent", "workflow",
]

export function isTechRelated(text: string): { pass: boolean; score: number; hints: string[] } {
  const lower = text.toLowerCase()
  const found = TECH_KEYWORDS.filter((kw) => lower.includes(kw))
  const score = found.length
  return {
    pass: score >= 2,
    score,
    hints: found.slice(0, 10),
  }
}
