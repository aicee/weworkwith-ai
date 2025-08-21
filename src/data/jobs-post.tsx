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
  benefits?: string[];
  url: string;
  featured?: boolean;
  companyLogo: string;
}

export const jobList: JobInterface[] = [
  {
    id: "1",
    title: "Brand Web Designer - Framer Expert",
    company: "Perplexity",
    location: "Remote - New York | California",
    salary: "$165k - $220k",
    category: "Design",
    tags: ["Framer", "React", "TypeScript", "Rive"],
    postedDate: "2025-08-21 10:00:00",
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
    location: "Remote - New York | California",
    salary: "$90k - $130k",
    category: "Engineering",
    tags: ["Browser QA", "Android", "iOS"],
    postedDate: "2025-08-21 10:00:00",
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
    postedDate: "2025-08-21 10:00:00",
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
    postedDate: "2025-08-21 10:00:00",
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
    postedDate: "2025-08-21 10:00:00",
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
    postedDate: "2025-08-21 10:00:00",
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
    title: "Solutions Engineer",
    company: "Browse AI",
    location: "Remote - Philippines",
    type: "Full-time",
    category: "Engineering",
    tags: ["Web Scraping", "Automation", "Regex", "XPath", "Zapier", "N8N"],
    postedDate: "2025-08-21 12:13:11",
    description: "Deliver data extraction and custom report building for premium customers, leveraging automation workflows and web scraping tools.",
    requirements: [
      "2+ years experience in HTML or another programming language",
      "Experience with JavaScript and JQ",
      "Ability to overlap 4 hours with PST timezone",
      "High proficiency in English (spoken and written)",
      "Cross-functional collaboration skills with multiple deadlines"
    ],
    url: "https://ats.rippling.com/browse-ai/jobs/5c4c4006-ecb1-4a37-8ddc-25a0301c5f8b",
    featured: false,
    companyLogo: "browseai.webp",
  },
  {
    id: "8",
    title: "Solutions Engineer",
    company: "Browse AI",
    location: "Remote - Mexico",
    type: "Full-time",
    category: "Engineering",
    tags: ["Web Scraping", "Automation", "Regex", "XPath", "Zapier", "N8N"],
    postedDate: "2025-08-21 14:03:29",
    description: "Deliver data extraction and custom report building for premium customers, leveraging automation workflows and web scraping tools.",
    requirements: [
      "2+ years experience in HTML or another programming language",
      "Experience with JavaScript and JQ",
      "Ability to overlap 4 hours with PST timezone",
      "High proficiency in English (spoken and written)",
      "Cross-functional collaboration skills with multiple deadlines"
    ],
    url: "https://ats.rippling.com/browse-ai/jobs/5c4c4006-ecb1-4a37-8ddc-25a0301c5f8b",
    featured: false,
    companyLogo: "browseai.webp",
  },
  {
    id: "9",
    title: "Product Manager",
    company: "Anara",
    location: "Remote - California, US",
    salary: "$120k - $180k",
    type: "Full-time",
    category: "Other",
    tags: ["Product Management", "AI", "Research Tools", "Startup"],
    postedDate: "2025-08-21 14:08:05",
    description: "Lead the end-to-end development of products at Anara, from conception through rollout, in a fast-paced AI startup focused on scientific advancement.",
    requirements: [
      "Experience shipping complex features to real users",
      "Strong product and design taste",
      "Background in high-growth, fast-paced environments",
      "Hands-on builder mindset with ability to move quickly",
      "Excellent research and discovery skills through user interviews, competitive research, and data analysis"
    ],
    benefits: [
      "Premium healthcare (medical, dental, vision)",
      "Flexible working hours",
      "Visa sponsorship for relocation to San Francisco",
      "Office space with marina and Golden Gate bridge view"
    ],
    url: "https://jobs.ashbyhq.com/anara/488b4ca4-5f19-483c-80c2-ae6441a24b4c",
    featured: false,
    companyLogo: "anara.png",
  },
  {
    id: "10",
    title: "API Support Engineer",
    company: "AssemblyAI",
    location: "Remote - EU",
    salary: "£60,572 – £66,948",
    type: "Full-time",
    category: "Support",
    tags: ["API Support", "Customer Success", "REST APIs", "Technical Support"],
    postedDate: "2025-08-21 14:18:42",
    description: "Be the first line of support for AssemblyAI’s customers, helping them integrate and troubleshoot API functionality while serving as a product expert.",
    requirements: [
      "6+ months experience in a similar support role",
      "Customer-facing experience, ideally in a startup environment",
      "Technical background from coding bootcamp or past software engineering job",
      "Strong knowledge of REST APIs",
      "Ability to communicate technical concepts to both clients and engineering teams"
    ],
    url: "https://job-boards.greenhouse.io/assemblyai/jobs/4581365005",
    featured: false,
    companyLogo: "assemblyai.png"
  },
  {
    id: "11",
    title: "API Support Engineer",
    company: "AssemblyAI",
    location: "Remote - India",
    salary: "₹4,877,889 – ₹5,391,351",
    type: "Full-time",
    category: "Support",
    tags: ["API Support", "Customer Success", "REST APIs", "Technical Support"],
    postedDate: "2025-08-21 14:18:42",
    description: "Be the first line of support for AssemblyAI’s customers, helping them integrate and troubleshoot API functionality while serving as a product expert.",
    requirements: [
      "6+ months experience in a similar support role",
      "Customer-facing experience, ideally in a startup environment",
      "Technical background from coding bootcamp or past software engineering job",
      "Strong knowledge of REST APIs",
      "Ability to communicate technical concepts to both clients and engineering teams"
    ],
    url: "https://job-boards.greenhouse.io/assemblyai/jobs/4581365005",
    featured: false,
    companyLogo: "assemblyai.png"
  },
];
