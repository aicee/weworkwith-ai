"use client";

import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { CategoryFilter } from "@/components/ui/category-filter";
import { jobList, JobInterface } from "@/data/jobs-post";
import { lastUpdated } from "@/data/hero-section";
import { formatDistanceToNow, format, parseISO } from "date-fns";
interface JobListingsProps {
  isAiMode: boolean;
}

function ExternalLinkIcon() {
  return (
    <svg
      className="w-4 h-4 transition-all duration-200 group-hover:scale-110"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

function JobCard({ job, index }: { job: JobInterface; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (job.url) {
      window.open(job.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className={`group relative p-4 sm:p-6 bg-card border border-border/30 rounded-lg transition-all duration-300 hover:border-border hover:shadow-lg hover:shadow-primary/5 cursor-pointer max-w-full ${
        job.featured
          ? "ring-1 ring-primary/20 bg-gradient-to-br from-card to-primary/5"
          : ""
      }`}
      style={{
        animationName: "slideUp",
        animationDuration: "0.6s",
        animationTimingFunction: "ease-out",
        animationFillMode: "both",
        animationDelay: `${index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {job.featured && (
        <div className="absolute -top-2 -right-2 z-10">
          <div className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
            Featured
          </div>
        </div>
      )}

      <div className="flex items-start justify-between">
        <div className="flex-1 space-y-3">
          <div>
            <div className="flex items-center gap-4 mb-1">
              {/* Company Logo inline with title */}
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-secondary/20 border border-border/20 shadow-sm">
                  <Image
                    src={`/company_logo/${job.companyLogo}`}
                    alt={`${job.company} logo`}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover bg-white p-1"
                  />
                </div>
              </div>
              <h3 className="font-medium text-lg text-foreground group-hover:text-primary transition-colors duration-200">
                {job.title}
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm text-muted-foreground">
              <span className="font-medium">{job.company}</span>
              <span className="text-xs">•</span>
              <span>{job.location}</span>
              {job.type && (
                <>
                  <span className="text-xs">•</span>
                  <span>{job.type}</span>
                </>
              )}
              {job.salary && (
                <>
                  <span className="text-xs">•</span>
                  <span className="text-primary font-medium">{job.salary}</span>
                </>
              )}
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {job.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {job.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-secondary/50 text-secondary-foreground border border-secondary/20"
              >
                {tag}
              </span>
            ))}
            {/* {job.tags.length > 4 && (
              <span className="text-xs text-muted-foreground">
                +{job.tags.length - 4} more
              </span>
            )} */}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              Posted{" "}
              {formatDistanceToNow(new Date(job.postedDate), {
                addSuffix: true,
              })}
            </span>
          </div>
        </div>

        {/* Link icon that appears on hover */}
        <div
          className={`ml-4 transition-all duration-300 ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}`}
        >
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <ExternalLinkIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

function AiJobData({ job }: { job: JobInterface }) {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    hiringOrganization: {
      "@type": "Organization",
      name: job.company,
    },
    jobLocation: {
      "@type": "Place",
      address: job.location,
    },
    baseSalary: job.salary
      ? {
          "@type": "MonetaryAmount",
          currency: "USD",
          value: job.salary,
        }
      : undefined,
    employmentType: job.type ? job.type.toUpperCase().replace("-", "_") : "",
    datePosted: job.postedDate,
    skills: job.tags,
    qualifications: job.requirements,
    benefits: job.benefits,
    identifier: {
      "@type": "PropertyValue",
      name: "AI Remote Work Job ID",
      value: job.id,
    },
  };

  return (
    <div className="p-4 bg-card border border-border/30 rounded-lg hover:border-border transition-colors duration-200">
      <pre className="text-xs text-muted-foreground font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed">
        {JSON.stringify(structuredData, null, 2)}
      </pre>
    </div>
  );
}

function CopyJobDataButton({ jobs }: { jobs: JobInterface[] }) {
  const [copied, setCopied] = useState(false);

  const handleCopyAll = async () => {
    const allJobsData = jobs.map((job) => ({
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      title: job.title,
      description: job.description,
      hiringOrganization: {
        "@type": "Organization",
        name: job.company,
      },
      jobLocation: {
        "@type": "Place",
        address: job.location,
      },
      baseSalary: job.salary
        ? {
            "@type": "MonetaryAmount",
            currency: "USD",
            value: job.salary,
          }
        : undefined,
      employmentType: job.type ? job.type.toUpperCase().replace("-", "_") : "",
      datePosted: job.postedDate,
      skills: job.tags,
      qualifications: job.requirements,
      benefits: job.benefits,
      identifier: {
        "@type": "PropertyValue",
        name: "AI Remote Work Job ID",
        value: job.id,
      },
    }));

    try {
      await navigator.clipboard.writeText(JSON.stringify(allJobsData, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={handleCopyAll}
      className="px-4 py-2 bg-primary text-primary-foreground text-xs md:text-sm font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105"
    >
      {copied ? "Copied!" : "Copy Job Data"}
    </button>
  );
}

type CategoryType = JobInterface["category"] | "All";

export function JobListings({ isAiMode }: JobListingsProps) {
  const [jobs, setJobs] = useState<JobInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setJobs(jobList);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [jobs]);

  // Calculate job counts per category
  const jobCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    jobs.forEach((job) => {
      counts[job.category] = (counts[job.category] || 0) + 1;
    });
    return counts;
  }, [jobs]);

  // Filter jobs based on selected category
  const filteredJobs = useMemo(() => {
    if (selectedCategory === "All") {
      return jobs;
    }
    return jobs.filter((job) => job.category === selectedCategory);
  }, [jobs, selectedCategory]);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="text-sm text-muted-foreground">Loading jobs...</div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="p-4 sm:p-6 bg-card border border-border/30 rounded-lg"
            >
              <div className="animate-pulse space-y-4">
                <div className="space-y-2">
                  <div className="h-5 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                </div>
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="flex space-x-2">
                  <div className="h-6 bg-muted rounded w-16"></div>
                  <div className="h-6 bg-muted rounded w-20"></div>
                  <div className="h-6 bg-muted rounded w-14"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      {!isAiMode && (
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          jobCounts={jobCounts}
        />
      )}

      {/* Header */}
      <div className="flex flex-col items-start md:flex-row md:items-center justify-between">
        <h2 className="text-base md:text-xl font-medium">
          {isAiMode
            ? "Machine-readable job data"
            : `${filteredJobs.length} open position${filteredJobs.length !== 1 ? "s" : ""}`}
        </h2>
        {!isAiMode && (
          <div className="text-xs md:text-sm text-muted-foreground">
            Last updated:{" "}
            {formatDistanceToNow(new Date(lastUpdated), { addSuffix: true })}
          </div>
        )}
        {isAiMode && <CopyJobDataButton jobs={filteredJobs} />}
      </div>

      {/* Job listings */}
      {isAiMode ? (
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <AiJobData key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {filteredJobs.map((job, index) => (
            <JobCard key={job.id} job={job} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}
