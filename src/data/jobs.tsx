import jobs from "./jobs.json";
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

export const jobList = jobs as JobInterface[];