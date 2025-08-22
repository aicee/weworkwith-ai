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
        Job posted successfully! <br /> We will review and publish it soon.
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
          Terms & Conditions
        </h1>

        <div className="space-y-12">
          {/* Terms and Conditions Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">
              Terms and Conditions
            </h2>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                By using We Work With AI, you agree to these terms and
                conditions. Our platform provides a job board service for
                AI-related remote positions.
              </p>
              <p>
                Job postings are subject to approval and must comply with our
                community guidelines. We reserve the right to reject or remove
                any posting that violates our standards.
              </p>
              <p>
                Users are responsible for the accuracy of their job postings and
                contact information. We are not liable for any disputes between
                employers and job seekers.
              </p>
            </div>
          </section>

          {/* Privacy Policy Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Privacy Policy</h2>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                We respect your privacy and are committed to protecting your
                personal information. This policy outlines how we collect, use,
                and safeguard your data.
              </p>
              <p>
                We collect information you provide when submitting job postings,
                including company details and contact information. This data is
                used solely to display your job listings and facilitate
                communication with potential candidates.
              </p>
              <p>
                We do not sell, trade, or share your personal information with
                third parties except as necessary to provide our services or as
                required by law.
              </p>
              <p>
                We use industry-standard security measures to protect your
                information. However, no internet transmission is completely
                secure, and we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          {/* Refund Policy Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Refund Policy</h2>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                We want you to be satisfied with our service. If you need a
                refund for your job posting, please contact us and we&apos;ll be
                happy to help.
              </p>
              <p>
                To request a refund, send an email to{" "}
                <a
                  href="mailto:hey@weworkwith-ai.com"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  hey@weworkwith-ai.com
                </a>{" "}
                with your request details. We&apos;ll review your case and
                respond promptly.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Job Post Modal */}
      <JobPostModal
        open={isJobPostModalOpen}
        onOpenChange={setIsJobPostModalOpen}
        onSuccess={handleJobSubmissionSuccess}
      />
    </div>
  );
}
