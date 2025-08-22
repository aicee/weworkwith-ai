"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { JobPostModal } from "@/components/job-post-modal";
import { Notification } from "@/components/ui/notification";

const metadata: Metadata = {
  title: "Pricing | We Work With AI",
  description:
    "Simple, transparent pricing for job postings from AI startups and companies worldwide.",
};

export default function PricingPage() {
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
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Pricing</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Simple, transparent pricing for job postings from AI startups and companies worldwide
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-md mx-auto mb-16">
          <div className="border border-border rounded-lg p-8 text-center bg-card">
            <h2 className="text-2xl font-semibold mb-4">Job Post</h2>
            <div className="mb-6">
              <span className="text-5xl font-bold">$175</span>
              <span className="text-muted-foreground ml-2">per post</span>
            </div>
            <p className="text-muted-foreground mb-8">
              30-day featured placement with maximum visibility
            </p>
            <div className="space-y-3 text-left">
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-sm">30 days placement on weworkwith-ai.com</span>
              </div>
              {/* <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-sm">10k+ monthly pageviews</span>
              </div> */}
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-sm">Social media promotion to our growing community of AI professionals</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        {/* <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Quality Candidates</h3>
            <p className="text-muted-foreground text-sm">
              Our audience consists of top AI talent actively looking for remote opportunities. 
              Reach experienced engineers, researchers, and specialists in machine learning and AI.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
            <p className="text-muted-foreground text-sm">
              Companies using our platform see an average of 50+ qualified applications per posting. 
              Our curated approach ensures your job reaches the right audience.
            </p>
          </div>
        </div> */}

        {/* Stats Section */}
        {/* <div className="grid grid-cols-3 gap-8 text-center mb-16">
          <div>
            <div className="text-2xl font-bold mb-2">10k+</div>
            <div className="text-sm text-muted-foreground">
              Monthly Pageviews
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-2">1k+</div>
            <div className="text-sm text-muted-foreground">
              Email Subscribers
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-2">50+</div>
            <div className="text-sm text-muted-foreground">
              Avg Applications
            </div>
          </div>
        </div> */}

        <div className="h-8" />

        {/* FAQ Section */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-10">
            <div>
              <h3 className="font-semibold mb-4">
                How long does my job post stay active?
              </h3>
              <p className="text-sm text-muted-foreground">
                Your job listing will be live on our AI job board for 30 days. If you fill the role before then and want the post taken down, simply reach out to us and we’ll remove it for you.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">
                What payment methods do you accept?
              </h3>
              <p className="text-sm text-muted-foreground">
                We accept all major credit cards and debit cards through PayPal for fast and secure checkout.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">
                Can I edit my job post after submission?
              </h3>
              <p className="text-sm text-muted-foreground">
                Yes! If you need to update your job description, role details, or links, just contact us with the changes and we’ll update your post promptly.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Do you offer refunds?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, we offer refunds if you&apos;re not satisfied with our
                service. Email us at hey@weworkwith-ai.com to request a refund.
              </p>
            </div>
          </div>
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
