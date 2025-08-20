export interface JobInterface {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  type: "Full-time" | "Part-time" | "Contract";
  category:
    | "Engineering"
    | "Design"
    | "Operations"
    | "Sales"
    | "Support"
    | "Research"
    | "Other";
  tags: string[];
  postedDate: string;
  description: string;
  requirements: string[];
  benefits: string[];
  url?: string;
  featured?: boolean;
  companyLogo: string;
}

export const jobList: JobInterface[] = [
  {
    id: "1",
    title: "Senior Machine Learning Engineer",
    company: "OpenAI",
    location: "Remote",
    salary: "$180k - $350k",
    type: "Full-time",
    category: "Engineering",
    tags: ["Python", "TensorFlow", "PyTorch", "ML"],
    postedDate: "2024-01-15",
    description: "Join our team building the future of AI systems at scale.",
    requirements: [
      "5+ years ML experience",
      "PhD preferred",
      "Distributed systems",
    ],
    benefits: ["Equity", "Health insurance", "Unlimited PTO"],
    url: "https://openai.com/careers",
    featured: true,
    companyLogo: "/company_logo/openai.svg",
  },
  {
    id: "2",
    title: "AI Research Scientist",
    company: "Anthropic",
    location: "Remote",
    salary: "$200k - $400k",
    type: "Part-time",
    category: "Research",
    tags: ["Research", "NLP", "Safety", "Python"],
    postedDate: "2024-01-14",
    description: "Research and develop safe, beneficial AI systems.",
    requirements: ["PhD in CS/ML", "Publication record", "Safety focus"],
    benefits: ["Research budget", "Conference travel", "Flexible hours"],
    featured: false,
    companyLogo: "/company_logo/anthropic.png",
  },
  {
    id: "3",
    title: "Computer Vision Engineer",
    company: "Tesla",
    location: "Remote",
    salary: "$160k - $280k",
    type: "Full-time",
    category: "Engineering",
    tags: ["Computer Vision", "C++", "CUDA", "Robotics"],
    postedDate: "2024-01-13",
    description: "Develop autonomous driving perception systems.",
    requirements: [
      "Computer vision expertise",
      "Real-time systems",
      "3+ years exp",
    ],
    benefits: ["Stock options", "Health/dental", "Gym membership"],
    companyLogo: "/company_logo/tesla.jpg",
  },
  {
    id: "4",
    title: "NLP Engineer",
    company: "Hugging Face",
    location: "Remote",
    salary: "$140k - $240k",
    type: "Full-time",
    category: "Research",
    tags: ["NLP", "Transformers", "Python", "Open Source"],
    postedDate: "2024-01-12",
    description: "Build and improve state-of-the-art NLP models.",
    requirements: ["NLP experience", "Transformer models", "Open source"],
    benefits: ["Remote first", "Learning budget", "Open source time"],
    companyLogo: "/company_logo/huggingface.png",
  },
  {
    id: "5",
    title: "AI Product Manager",
    company: "Scale AI",
    location: "Remote",
    salary: "$150k - $280k",
    type: "Full-time",
    category: "Operations",
    tags: ["Product", "AI/ML", "Strategy", "Data"],
    postedDate: "2024-01-11",
    description: "Lead product strategy for AI-powered data platforms.",
    requirements: ["Product management", "AI/ML knowledge", "B2B experience"],
    benefits: ["Equity package", "Health benefits", "Growth opportunities"],
    companyLogo: "/company_logo/scaleai.png",
  },
  {
    id: "6",
    title: "MLOps Engineer",
    company: "Cohere",
    location: "Remote",
    salary: "$130k - $220k",
    type: "Full-time",
    category: "Engineering",
    tags: ["MLOps", "Kubernetes", "AWS", "CI/CD"],
    postedDate: "2024-01-10",
    description: "Scale ML infrastructure and deployment pipelines.",
    requirements: ["DevOps experience", "ML systems", "Cloud platforms"],
    benefits: ["Remote work", "Tech stipend", "Professional development"],
    companyLogo: "/company_logo/cohere.png",
  },
  {
    id: "7",
    title: "Prompt Engineer",
    company: "Stability AI",
    location: "Remote",
    salary: "$120k - $200k",
    type: "Full-time",
    category: "Engineering",
    tags: ["LLM", "Prompt Engineering", "AI Safety"],
    postedDate: "2024-01-09",
    description: "Design and optimize prompts for large language models.",
    requirements: ["LLM experience", "Creative writing", "AI safety awareness"],
    benefits: ["Flexible hours", "Learning stipend", "Remote workspace budget"],
    companyLogo: "/company_logo/stabilityai.webp",
  },
];
