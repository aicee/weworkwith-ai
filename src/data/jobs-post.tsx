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
    type: "Full-time",
    category: "Support",
    tags: ["AI Training", "Bilingual", "Data Annotation", "Generative AI"],
    postedDate: "2025-08-21 10:00:00",
    description: "Generate high-quality bilingual datasets and improve xAI’s AI models, working across English and another supported language.",
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
    title: "AI Tutor",
    company: "xAI",
    location: "Remote",
    salary: "$35/hr - $65/hr",
    type: "Full-time",
    category: "Support",
    tags: ["AI Training", "Data Annotation", "Generative AI", "English Proficiency"],
    postedDate: "2025-08-21 14:26:08",
    description: "Support the training and refinement of xAI’s AI models by labeling and annotating text, voice, and video data, helping improve generative AI systems.",
    requirements: [
      "Proficiency in reading and writing English across informal and professional contexts",
      "Strong communication, interpersonal, analytical, and organizational skills",
      "Ability to navigate various information resources and exercise judgment with limited data",
      "Passion for technological advancements and innovation",
      "Preferred: Proficiency in Korean, Vietnamese, Chinese, German, Russian, Italian, French, Arabic, Indonesian, Turkish, Hindi, Persian, Spanish, or Portuguese"
    ],
    benefits: [
      "Medical insurance depending on country of residence",
      "Remote work flexibility"
    ],
    url: "https://job-boards.greenhouse.io/xai/jobs/4595198007",
    featured: false,    
    companyLogo: "xai.png",
  },
  {
    id: "11",
    title: "Account Executive - Korea",
    company: "ElevenLabs",
    location: "Remote - Korea",
    salary: "Not listed",
    type: "Full-time",
    category: "Sales",
    tags: ["Account Management", "Sales", "AI", "Voice Technology", "Conversational AI"],
    postedDate: "2025-08-21 14:29:33",
    description: "Build and manage accounts across industries adopting conversational AI, helping ElevenLabs drive revenue growth with breakthrough voice technology.",
    requirements: [
      "3–5 years sales experience in SaaS or technology, ideally with AI or API platforms",
      "Track record of meeting and exceeding sales targets",
      "Experience selling technical solutions to product or engineering teams is a plus",
      "Strong communication and relationship-building skills",
      "Fluency in English and Korean with deep regional and cultural understanding"
    ],
    benefits: [
      "Annual professional development stipend",
      "Annual stipend for social travel to meet colleagues",
      "Annual company offsite at a new location",
      "Monthly coworking stipend"
    ],
    url: "https://elevenlabs.io/careers/592954c4-0c40-4198-9fa3-2ed82a84518f/account-executive-korea",
    featured: false,
    companyLogo: "elevenlabs.svg",
  },
  {
    id: "12",
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
    id: "13",
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
  {
    id: "14",
    title: "Design Engineer",
    company: "ElevenLabs",
    location: "Remote",
    type: "Full-time",
    category: "Design",
    tags: ["Frontend", "Next.js", "React", "Framer Motion", "Web Design"],
    postedDate: "2025-08-21 14:34:35",
    description: "Design and implement world-class website pages and interactive demos that showcase ElevenLabs’ brand, products, and research, driving engagement and conversion.",
    requirements: [
      "Strong frontend engineering skills with proficiency in Next.js and React",
      "Experience with design libraries such as Framer Motion or D3",
      "Portfolio showcasing compelling web and marketing projects",
      "Ability to collaborate with Design, Engineering, and Growth teams",
      "Bonus: proficiency in design, copywriting, or SEO"
    ],
    benefits: [
      "Annual professional development stipend",
      "Annual stipend for social travel to meet colleagues",
      "Annual company offsite at a new location",
      "Monthly coworking stipend"
    ],
    url: "https://elevenlabs.io/careers/20476dac-9e9d-4a34-9b84-8cf97b7cc35e/design-engineer",
    featured: false,    
    companyLogo: "elevenlabs.svg"
  },
  {
    id: "15",
    title: "Data Engineer",
    company: "ElevenLabs",
    location: "Remote - United Kingdom",
    type: "Full-time",
    category: "Engineering",
    tags: ["Data Engineering", "dbt", "Python", "SQL", "Data Pipelines"],
    postedDate: "2025-08-21 14:36:55",
    description: "Formalize, optimize, and scale ElevenLabs’ data pipelines while ensuring data quality and enabling self-service data access across teams.",
    requirements: [
      "Expert knowledge of dbt",
      "Proficiency with modern data stack tools (Python, SQL, BI tools)",
      "Experience scaling and formalizing data pipelines",
      "Ability to simplify complex data into clear structures",
      "Strong ability to meet varied stakeholder requirements with generalized solutions"
    ],
    benefits: [
      "Annual professional development stipend",
      "Annual stipend for social travel to meet colleagues",
      "Annual company offsite at a new location",
      "Monthly coworking stipend"
    ],
    url: "https://elevenlabs.io/careers/ffde876c-a04c-4bc7-a7f5-da1bfd0312f1/data-engineer?ashby_jid=ffde876c-a04c-4bc7-a7f5-da1bfd0312f1",
    featured: false,
    companyLogo: "elevenlabs.svg"
  },
  {
    id: "16",
    title: "Technical Customer Support Specialist",
    company: "ElevenLabs",
    location: "Remote",
    type: "Full-time",
    category: "Support",
    tags: ["Customer Support", "Technical Troubleshooting", "APIs", "Python", "GCP"],
    postedDate: "2025-08-21 14:39:45",
    description: "Provide exceptional technical support to B2B and enterprise clients, resolving API and platform issues, improving documentation, and collaborating with product and engineering teams.",
    requirements: [
      "2-3 years technical customer support experience in SaaS or high-growth tech",
      "Expertise troubleshooting APIs, browser errors, and integrations",
      "Experience with GCP, BigQuery, Firestore/Firebase, and GoogleSQL/SQL",
      "Ability to read and troubleshoot code (Python, JavaScript, Node.js, React)",
      "Strong communication skills and ability to work autonomously in remote teams"
    ],
    benefits: [
      "High-velocity innovation with rapid experimentation",
      "Truly global remote-first team across 30+ countries",
      "Collaboration with AI leaders and continuous growth opportunities",
      "Office hubs in New York, London, and Warsaw"
    ],
    url: "https://elevenlabs.io/careers/370464ac-eb94-4ed9-b705-f3ad834c83ce/technical-customer-support-specialist",
    featured: false,    
    companyLogo: "elevenlabs.svg"
  },
  {
    id: "17",
    title: "Community Software Engineer",
    company: "n8n",
    location: "Remote - Europe",
    type: "Full-time",
    category: "Engineering",
    tags: ["JavaScript", "TypeScript", "Open Source", "Community", "GitHub"],
    postedDate: "2025-08-21 14:46:13",
    description: "Support community-driven development at n8n by triaging GitHub issues, fixing bugs, reviewing community contributions, and improving contributor workflows.",
    requirements: [
      "Experience with JavaScript and TypeScript",
      "Fluency with GitHub issues, pull requests, and workflows",
      "Ability to debug and fix bugs across different APIs and node types",
      "Strong written communication for clear contributor feedback",
      "Collaborative mindset with openness to feedback"
    ],
    benefits: [
      "Competitive compensation with equity",
      "30 vacation days in Europe plus public holidays",
      "Health, pension, and financial benefits according to local norms",
      "€1K annual budget for courses, books, events, or coaching",
      "Remote-first culture with team off-sites and hackathons",
      "$100 per month to support open-source projects"
    ],
    url: "https://jobs.ashbyhq.com/n8n/e536d902-678d-4cda-a17d-4dbbcba47430?embed=js&customCssUrl=https%3A%2F%2Fn8n.io%2Fassets%2Fcss%2Fashbyhq.css",
    featured: false,
    companyLogo: "n8n.png"
  },
  {
    id: "18",
    title: "Senior AI Engineer",
    company: "n8n",
    location: "Remote - Europe",
    type: "Full-time",
    category: "Engineering",
    tags: ["TypeScript", "Node.js", "Vue", "LLMs", "Prompt Engineering"],
    postedDate: "2025-08-21 14:48:15",
    description: "Drive intelligent features at n8n by building AI-powered capabilities, integrating LLMs, and enhancing the user experience with smart automation features.",
    requirements: [
      "5+ years building web-based products, ideally in B2B SaaS startups",
      "Strong backend development skills with TypeScript, Node.js, and API design",
      "Proven experience shipping AI-powered features with LLM APIs (OpenAI, Anthropic, etc.)",
      "Hands-on experience with prompt engineering, embedding models, and vector stores",
      "User-focused mindset with fast iteration and bias for shipping"
    ],
    benefits: [
      "Competitive compensation with equity",
      "30 vacation days in Europe plus public holidays",
      "Health, pension, and financial benefits according to local norms",
      "€1K annual budget for courses, books, events, or coaching",
      "Remote-first culture with team off-sites and hackathons",
      "$100 per month to support open-source projects"
    ],
    url: "https://jobs.ashbyhq.com/n8n/69607328-f9fa-4788-8a6e-8b2d7a102969?embed=js&customCssUrl=https%3A%2F%2Fn8n.io%2Fassets%2Fcss%2Fashbyhq.css",
    featured: false,    
    companyLogo: "n8n.png"
  },
  {
    id: "19",
    title: "AI Tutor - Japanese",
    company: "xAI",
    location: "Remote",
    salary: "$35/hr - $65/hr",
    type: "Full-time",
    category: "Support",
    tags: ["AI Training", "Data Annotation", "Japanese", "Generative AI"],
    postedDate: "2025-08-21 14:50:32",
    description: "Generate high-quality, accurately labeled Japanese datasets to improve xAI’s AI models, working on text, voice, and video data for training and benchmarking.",
    requirements: [
      "Native proficiency in Japanese, with strong written and spoken skills",
      "Ability to navigate information sources and databases in Japanese",
      "Strong communication, interpersonal, and analytical skills",
      "Expert reading comprehension and ability to make judgments with limited data",
      "Preferred: background in technical writing, journalism, or professional writing focused on Japanese content"
    ],
    benefits: [
      "Medical, vision, dental, STD, LTD, and life insurance",
      "Remote work flexibility"
    ],
    url: "https://job-boards.greenhouse.io/xai/jobs/4593416007",
    featured: false,    
    companyLogo: "xai.png",
  },
  {
    id: "20",
    title: "AI Tutor - Data Science",
    company: "xAI",
    location: "Remote",
    salary: "$35/hr - $65/hr",
    type: "Full-time",
    category: "Support",
    tags: ["AI Training", "Data Annotation", "Data Science", "Generative AI"],
    postedDate: "2025-08-21 14:52:22",
    description: "Provide high-quality labeled data and annotations to support AI model training at xAI. Collaborate with technical teams to refine annotation tools, support AI initiatives, and ensure delivery of curated datasets for model development.",
    requirements: [
      "IMO medalist (or similar) OR Master's/PhD in a data science related field",
      "Proficiency in English, both written and spoken",
      "Strong ability to navigate databases and online resources",
      "Excellent communication, interpersonal, and analytical skills",
      "Strong reading comprehension and ability to make informed judgments",
      "Preferred: publication experience, teaching background, or professional Data Scientist experience"
    ],
    benefits: [
      "Compensation: $35–$65/hour depending on skills and experience",
      "Medical insurance for full-time roles (varies by country)",
      "Remote work flexibility"
    ],
    url: "https://job-boards.greenhouse.io/xai/jobs/4621682007",
    featured: false,
    companyLogo: "xai.png",
  },
  {
    id: "21",
    title: "VP of Engineering",
    company: "Layer",
    location: "Remote",
    type: "Full-time",
    category: "Engineering",
    tags: ["Engineering Leadership", "System Architecture", "Mentorship", "Generative AI", "Gaming"],
    postedDate: "2025-08-21 14:56:45",
    description: "Lead Layer’s engineering vision, strategy, and execution while building and mentoring a world-class team to deliver AI-driven creative tools for game artists.",
    requirements: [
      "Deep technical expertise as a software engineer and architect",
      "Proven experience scaling engineering teams in high-growth startups",
      "Strong background in system architecture and pragmatic trade-offs",
      "Experience hiring, managing, and developing engineering talent",
      "Excellent communication skills for both technical and non-technical audiences",
      "Strong ownership and ability to thrive in dynamic environments"
    ],
    benefits: [
      "Equity plan",
      "Competitive salary and benefits",
      "Laptop and equipment budget"
    ],
    url: "https://ats.rippling.com/layer/jobs/5b30dd57-2883-48c6-873d-1ffe841ce82b",
    featured: false,
    companyLogo: "layer.png",
  },
  {
    id: "22",
    title: "Contract Partner Marketing Manager",
    company: "Cohere",
    location: "Remote - San Francisco | Toronto | New York",
    type: "Contract",
    category: "Sales",
    tags: ["Partner Marketing", "B2B Marketing", "Cloud Ecosystems", "Go-to-Market"],
    postedDate: "2025-08-21 15:12:44",
    description: "Drive strategic partner marketing initiatives with key cloud providers to accelerate adoption of Cohere’s enterprise AI solutions through GTM programs, campaigns, and partner enablement.",
    requirements: [
      "5+ years of experience in B2B marketing within enterprise tech, SaaS, or AI",
      "Proven experience in cloud partner marketing and co-marketing with large technology providers",
      "Strong understanding of GTM strategies, partner ecosystems, and cloud-based AI solutions",
      "Track record of leading multi-channel marketing campaigns with measurable impact",
      "Strong relationship management skills across sales, product, and partner teams",
      "Ability to translate technical concepts into compelling marketing narratives",
      "Data-driven mindset with experience analyzing program performance",
      "Passion for AI and experience leveraging AI tools in marketing strategies"
    ],
    benefits: [
      "Inclusive and collaborative culture",
      "Work with leading AI research team",
      "Weekly lunch stipend and office snacks",
      "Full health and dental benefits with mental health budget",
      "100% parental leave top-up for 6 months (Canada, US, UK)",
      "Personal enrichment benefits",
      "Remote-flexible with offices in major cities and co-working stipend",
      "6 weeks of vacation"
    ],
    url: "https://jobs.ashbyhq.com/cohere/335a79f7-e972-49b2-9df7-0c9ade963979",
    featured: false,
    companyLogo: "cohere.png",
  },
  {
    id: "23",
    title: "AI Agent Engineer",
    company: "Cresta",
    location: "Remote - Canada",
    type: "Full-time",
    category: "Engineering",
    tags: ["AI Agents", "Python", "Golang", "System Integration", "LLMs", "Cloud"],
    postedDate: "2025-08-23 14:29:34",
    description: "Develop and deploy AI agents at Cresta, integrating them with external systems and ensuring high-performance, scalable, and secure deployments for enterprise customers.",
    requirements: [
      "Bachelor’s or Master’s degree in Computer Science, Engineering, or related field",
      "3+ years experience in software development, AI/ML engineering, or system integration",
      "Proficiency in Python and Golang",
      "Hands-on experience with LLMs, prompt engineering, and AI agent frameworks",
      "Experience with cloud platforms (AWS, GCP, Azure) and DevOps practices",
      "Strong integration skills with APIs, webhooks, and data pipelines",
      "Excellent communication, project management, and customer engagement skills"
    ],
    benefits: [
      "Medical, dental, and vision plans",
      "Paid parental leave",
      "Monthly health & wellness allowance",
      "Work from home office stipend",
      "3 weeks PTO in Canada",
      "Equity options"
    ],
    url: "https://job-boards.greenhouse.io/cresta/jobs/4595480008",
    featured: false,
    companyLogo: "cresta.jpg",
  },
  {
    id: "24",
    title: "Customer Engineer",
    company: "Cresta",
    location: "Remote - Canada",
    type: "Full-time",
    category: "Engineering",
    tags: ["APIs", "AWS", "Go", "Python", "JavaScript"],
    postedDate: "2025-08-23 14:33:42",
    description: "Act as a Solution Architect and technical authority at Cresta, designing and delivering integrations with contact center platforms like AWS Connect, Genesys, and Five9 to drive real-time coaching and agent efficiency.",
    requirements: [
      "Experience with contact center platforms (AWS Connect, Genesys, Five9, etc.)",
      "Proficiency with APIs, SDKs, AWS, Git, and coding in Go, Python, and JavaScript",
      "Blend of sales enthusiasm, technical confidence, and execution ability",
      "Strong organizational and project management skills",
      "Consultative approach to problem-solving and stakeholder engagement"
    ],
    benefits: [
      "Comprehensive medical, dental, and vision coverage",
      "Flexible PTO policy",
      "Paid parental leave",
      "Retirement savings plan",
      "Remote work setup budget",
      "Monthly wellness and communication stipend",
      "In-office meal program and commuter benefits for onsite employees",
      "Equity options"
    ],
    url: "https://job-boards.greenhouse.io/cresta/jobs/4884188008",
    featured: false,
    companyLogo: "cresta.jpg",
  },
];
