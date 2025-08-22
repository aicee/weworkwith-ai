"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { JobPostModal } from "@/components/job-post-modal";
import { Notification } from "@/components/ui/notification";

const metadata: Metadata = {
  title: "Terms & Conditions | We Work With AI",
  description:
    "Terms and Conditions, Privacy Policy, and Refund Policy for We Work With AI.",
};

export default function TermsPage() {
  const [isJobPostModalOpen, setIsJobPostModalOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleJobSubmissionSuccess = () => {
    setIsJobPostModalOpen(false);
    setShowNotification(true);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground font-mono">
      {/* Success Notification */}
      <Notification
        show={showNotification}
        onClose={() => setShowNotification(false)}
      >
        Job posting submitted successfully! 🎉 <br /><br /> Please check your email for the next steps. <br /><br /> 
        Our team will review your submission, and once approved, it will be published on We Work With AI.
      </Notification>

      {/* Header Navigation */}
      <header className="border-b border-border/20 bg-background/95 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 min-w-0 flex-1">
              <Link
                href="/"
                className="text-base sm:text-lg font-medium tracking-tight truncate hover:text-primary transition-colors"
              >
                <span>We Work w/ AI</span>
              </Link>
            </div>

            <div className="flex items-center space-x-3 sm:space-x-6 flex-shrink-0">
              <button
                onClick={() => setIsJobPostModalOpen(true)}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-primary text-primary-foreground text-xs sm:text-sm font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 whitespace-nowrap"
              >
                <span className="sm:inline">Submit Job</span>
              </button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-12 text-center">
          Terms & Conditions – We Work With AI
        </h1>

        <div className="space-y-12">
        {/* Introduction */}<section>
            <h2 className="text-2xl font-semibold mb-6">
              Introduction
            </h2>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
              Welcome to We Work With AI, a global job board connecting professionals 
              with opportunities at AI-driven companies. By using our website and services, 
              you agree to the following Terms & Conditions. Please read them carefully before 
              posting or applying for jobs.
              </p>
            </div>
          </section>

          {/* Terms and Conditions Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">
              Job Posting Terms
            </h2>
            <div className="space-y-4 text-sm leading-relaxed">
              <ul className="list-disc pl-5 space-y-2">
                <li>Job postings must be relevant to AI companies or AI-related industries.</li>
                <li>All postings are reviewed to ensure they meet our community and content guidelines.</li>
                <li>We reserve the right to reject or remove any job post that is misleading, inappropriate, or violates our standards.</li>
                <li>Employers are solely responsible for the accuracy of job details, company information, and contact details.</li>
              </ul>
            </div>
          </section>

          {/* Disclaimer of Liability Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">
              Disclaimer of Liability
            </h2>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
              WeWorkWith-AI.com serves only as a platform to connect employers and candidates.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>We are not responsible for the hiring process, payment disputes, or employment agreements between employers and job seekers.</li>
                <li>Users are encouraged to verify job details and use due diligence when applying.</li>
              </ul>
            </div>
          </section>

          {/* Privacy Policy Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Privacy Policy</h2>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
              We respect your privacy and are committed to protecting your personal data.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>We collect information that you provide when submitting job postings, such as company name, contact details, and job description.</li>
                <li>This information is used only for publishing listings and enabling candidate communication.</li>
                <li>We do not sell, trade, or share your personal information with
                third parties except as necessary to provide our services or as
                required by law.</li>
                <li>We use industry-standard security measures to protect your
                information. However, no internet transmission is completely
                secure, and we cannot guarantee absolute security.</li>
              </ul>
            </div>
          </section>

          {/* Refund Policy Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Refund Policy</h2>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
              We want you to be satisfied with our service.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>If you are unsatisfied with the job posting on our board, you may request a refund.</li>
                <li>To start a refund request, email us at{' '}
                <span className="text-blue-500">
                  hey [at] weworkwith-ai [dot] com
                </span>{' '}
                with your request details.</li>
                <li>Each request will be reviewed promptly, and we will respond as quickly as possible.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      {/* Minimal Footer
      <footer className="relative container mx-auto px-6 py-12 border-t border-border/20">
        <div className="text-sm text-muted-foreground space-y-4">
          <div className="text-xs">
            Built for the AI community. Open to feedback and contributions →{" "}
            <a
              href="https://twitter.com/messages/compose?recipient_id=1482692177340035075"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              DM us on <span className="text-lg font-black font-serif">X</span>
            </a>{" "}
            or{" "}
            <a
              href="mailto:hey@weworkwith-ai.com"
              className="text-primary hover:underline"
            >
              send us an email
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a href="/pricing" className="text-primary hover:underline">
              Pricing
            </a>
            <a href="/terms" className="text-primary hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer> */}

      {/* Job Post Modal */}
      <JobPostModal
        open={isJobPostModalOpen}
        onOpenChange={setIsJobPostModalOpen}
        onSuccess={handleJobSubmissionSuccess}
      />
    </div>
  );
}
