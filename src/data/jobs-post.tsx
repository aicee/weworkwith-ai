export interface JobInterface {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  type: "Full-time" | "Part-time" | "Contract" | " ";
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
    title: "Brand Web Designer - Framer Expert",
    company: "Perplexity",
    location: "Remote",
    salary: "$165k - $220k",
    type: " ",
    category: "Design",
    tags: ["Framer", "React", "TypeScript", "Rive"],
    postedDate: "2025-08-21",
    description: "Tell stories on the web.",
    requirements: [
      "Framer mastery",
      "Portfolio that proves interactive storytelling",
      "Comfort adding custom code in Framer (React, TypeScript, or beyond)",
    ],
    benefits: ["Equity", "Comprehensive health, dental, and vision insurance"],
    url: "https://job-boards.greenhouse.io/perplexityai/jobs/4828223007",
    featured: false,
    companyLogo: "perp.png",
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
    companyLogo: "perp.png",
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
    companyLogo: "tesla.jpg",
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
    companyLogo: "huggingface.png",
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
    companyLogo: "scaleai.png",
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
    companyLogo: "cohere.png",
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
    companyLogo: "stabilityai.webp",
  },
];
