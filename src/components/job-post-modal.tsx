"use client";

import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalDescription,
} from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import Image from "next/image";

interface JobPostModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export function JobPostModal({
  open,
  onOpenChange,
  onSuccess,
}: JobPostModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobPostUrl: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/submit-job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Reset form immediately
        setFormData({ name: "", email: "", jobPostUrl: "" });
        setSubmitMessage("");
        // Call success callback to show notification and close modal
        onSuccess?.();
      } else {
        setSubmitMessage(
          `Error: ${result.error || "Failed to submit job posting"}`
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitMessage("Error: Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const featuredCompanies = [
    { name: "BrowseAI", logo: "/company_logo/browseai.webp" },
    { name: "xAI", logo: "/company_logo/xai.png" },
    { name: "Cohere", logo: "/company_logo/cohere.png" },
    { name: "Perplexity", logo: "/company_logo/perplexity.png" },
    { name: "Anara", logo: "/company_logo/anara.png" },
    { name: "Layer", logo: "/company_logo/layer.png" },
    { name: "AssemblyAI", logo: "/company_logo/assemblyai.png" },
    { name: "ElevenLabs", logo: "/company_logo/elevenlabs.svg" },
    { name: "N8N", logo: "/company_logo/n8n.png" },
  ];

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContent className="max-w-md">
        <ModalHeader className="mb-2">
          <ModalTitle className="text-center mb-4">
            Post a Job at We Work With AI
          </ModalTitle>
          <ModalDescription className="text-center">
            Add your information below, and we&apos;ll email you the next steps
            along with a PayPal invoice for $175.
          </ModalDescription>
        </ModalHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-12">
            {/* Benefits List */}
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>
                  Job post will be featured on <strong>We Work With AI</strong>{" "}
                  for 30 days
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>
                  We’ll promote your role to our growing audience of AI-focused
                  professionals
                </span>
              </li>
            </ul>

            {/* Form Fields */}
            <div className="space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <input
                  type="url"
                  placeholder="Link to job post"
                  value={formData.jobPostUrl}
                  onChange={(e) =>
                    handleInputChange("jobPostUrl", e.target.value)
                  }
                  className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Submit Message */}
            {submitMessage && (
              <div
                className={`p-3 rounded-md text-sm ${
                  submitMessage.startsWith("✓")
                    ? "bg-green-50 text-green-800 border border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800"
                    : "bg-red-50 text-red-800 border border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800"
                }`}
              >
                {submitMessage}
              </div>
            )}
          </div>

          <ModalFooter>
            <Button
              type="button"
              variant="ghost"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? <Loader /> : "Submit"}
            </Button>
          </ModalFooter>
        </form>

        {/* Previously Featured Companies */}
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center mb-3">
            Featured companies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {featuredCompanies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden bg-white"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={32}
                  height={32}
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
            ))}
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}
