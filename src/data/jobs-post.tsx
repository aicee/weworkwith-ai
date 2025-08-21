export interface JobInterface {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  type?: "Full-time" | "Part-time" | "Contract";
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
  url: string;
  featured?: boolean;
  companyLogo: string;
}

export const jobList: JobInterface[] = [
  {
    id: "1",
    title: "Brand Web Designer - Framer Expert",
    company: "Perplexity",
    location: "Remote - New York, San Francisco",
    salary: "$165k - $220k",
    category: "Design",
    tags: ["Framer", "React", "TypeScript", "Rive"],
    postedDate: "August 21, 2025",
    description: "Use Framer to craft interactive web stories that feel fast, clear, and alive.",
    requirements: [
      "Framer mastery",
      "Portfolio that proves interactive storytelling",
      "Comfort adding custom code in Framer (React, TypeScript, or beyond)"
    ],
    benefits: ["Equity", "Comprehensive health, dental, and vision insurance"],
    url: "https://job-boards.greenhouse.io/perplexityai/jobs/4828223007",
    featured: false,
    companyLogo: "perplexity.png",
  },
  {
    id: "2",
    title: "Quality Engineer - Comet",
    company: "Perplexity",
    location: "Remote - New York, San Francisco",
    salary: "$90k - $130k",
    category: "Engineering",
    tags: ["Browser QA", "Android", "iOS"],
    postedDate: "August 21, 2025",
    description: "Work with design, engineering, product, data and support teams to ensure high quality Comet on Android and iOS.",
    requirements: [
      "4+ years industry experience",
      "Experience with Android and iOS",
      "Experience with Browser QA",
      "Experience with CI/CD systems",
      "Experience managing QA vendors"
    ],
    benefits: ["Equity", "Comprehensive health, dental, and vision insurance"],
    url: "https://job-boards.greenhouse.io/perplexityai/jobs/4790717007",
    featured: false,
    companyLogo: "perplexity.png",
  },
  {
    id: "3",
    title: "Country Manager - Germany",
    company: "Cohere",
    location: "Remote - Germany",
    type: "Full-time",
    category: "Sales",
    tags: ["GTM Strategy", "Enterprise Sales", "Business Development"],
    postedDate: "August 21, 2025",
    description: "Drive year-over-year revenue growth and build Cohere’s presence in Germany through strategic sales, partnerships, and market expansion.",
    requirements: [
        "15+ years experience in revenue growth and GTM leadership for technology organizations",
        "Proven track record in enterprise-level consultative sales and business development",
        "Strong network of senior-level contacts across sectors",
        "Excellent communication and leadership skills",
        "Experience in AI or a related industry is highly desirable"
    ],
    benefits: [
      "Full health and dental benefits, including mental health budget",
      "Weekly lunch stipend",
      "100% parental leave top-up (Canada, US, UK)",
      "Remote-flexible with co-working stipend",
      "6 weeks vacation"
    ],
    url: "https://jobs.ashbyhq.com/cohere/922f67a4-da99-4d01-8a2f-8c5997c688df", 
    featured: false,
    companyLogo: "cohere.png",
  },
  {
    id: "4",
    title: "Country Manager - Saudi Arabia",
    company: "Cohere",
    location: "Remote - Saudi Arabia",
    type: "Full-time",
    category: "Sales",
    tags: ["GTM Strategy", "Enterprise Sales", "Business Development"],
    postedDate: "August 21, 2025",
    description: "Drive year-over-year revenue growth and build Cohere’s presence in Saudi Arabia through strategic sales, partnerships, and market expansion.",
    requirements: [
      "15+ years experience in revenue growth and GTM leadership for technology organizations",
      "Proven track record in enterprise-level consultative sales and business development",
      "Strong network of senior-level contacts across sectors",
      "Excellent communication and leadership skills",
      "Experience in AI or a related industry is highly desirable"
    ],
    benefits: [
      "Full health and dental benefits, including mental health budget",
      "Weekly lunch stipend",
      "100% parental leave top-up (Canada, US, UK)",
      "Remote-flexible with co-working stipend",
      "6 weeks vacation"
    ],
    url: "https://jobs.ashbyhq.com/cohere/ea104e05-2bbc-492e-adec-51aff6c9cbff",
    featured: false,
    companyLogo: "cohere.png",
  },
  {
    id: "5",
    title: "Solutions Architect",
    company: "Cohere",
    location: "Remote - Tokyo",
    type: "Full-time",
    category: "Engineering",
    tags: ["Solutions Architecture", "Generative AI", "NLP", "Python"],
    postedDate: "August 21, 2025",
    description: "Work closely with customers as a trusted technical advisor, designing and implementing AI/NLP solutions to drive adoption of Cohere’s products.",
    requirements: [
      "5+ years customer-facing Solutions Architect or similar experience",
      "2+ years architecting or deploying NLP/AI/LLM solutions",
      "Strong understanding of Generative AI technologies",
      "Comfortable with Python and Jupyter Notebooks",
      "Excellent communication skills with both technical and executive audiences",
      "Preferred: Experience managing Kubernetes clusters",
      "Preferred: Experience with networking (firewalls, DNS, cert management, etc)",
      "Preferred: Familiarity with authentication protocols/frameworks (SAML, OAuth, etc)"
    ],
    benefits: [
      "Full health and dental benefits, including mental health budget",
      "Weekly lunch stipend",
      "100% parental leave top-up (Canada, US, UK)",
      "Remote-flexible with co-working stipend",
      "6 weeks vacation"
    ],
    url: "https://jobs.ashbyhq.com/cohere/ca446389-c793-459b-b07a-a3544defea04",
    featured: false,
    companyLogo: "cohere.png",
  },
  {
    id: "6",
    title: "AI Tutor - Bilingual",
    company: "xAI",
    location: "Remote",
    salary: "$35/hr - $65/hr",
    type: "Contract",
    category: "Support",
    tags: ["AI Training", "Bilingual", "Data Annotation", "Generative AI"],
    postedDate: "August 21, 2025",
    description: "6-month contract role to generate high-quality bilingual datasets and improve xAI’s AI models, working across English and another supported language.",
    requirements: [
      "Full proficiency in English and one or more of Korean, Vietnamese, Chinese, German, Russian, Italian, French, Arabic, Indonesian, Turkish, Hindi, Persian, Spanish, or Portuguese",
      "Strong written and spoken communication skills",
      "Experience labeling and annotating data",
      "Comfort with text, audio, and video data tasks",
      "Passion for advancing AI technology"
    ],
    benefits: [
      "Medical insurance depending on country of residence",
      "Competitive compensation"
    ],
    url: "https://job-boards.greenhouse.io/xai/jobs/4512212007",
    featured: false,
    companyLogo: "xai.png",
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
    url: "https://google.com",
    companyLogo: "stabilityai.webp",
  },
];
