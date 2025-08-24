"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Logo from "@/components/logo";
import {
  ExclamationTriangleIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <div className="bg-background text-foreground font-mono antialiased">
      {/* Header with navigation */}
      <header className="border-b border-border/20 bg-background/95 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="flex items-center space-x-3 sm:space-x-6 flex-shrink-0">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* 404 Content */}
      <main className="container mx-auto px-6 py-16 sm:py-24">
        <div className="max-w-md mx-auto text-center">
          {/* Icon */}
          {/* <div className="mb-8">
            <div className="mx-auto w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center">
              <ExclamationTriangleIcon
                className="w-8 h-8 text-destructive"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </div>
          </div> */}

          {/* Error Message */}
          <div className="mb-8 mt-20">
            <h1 className="text-4xl sm:text-5xl font-medium text-foreground mb-4 tracking-tight">
              404
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-foreground mb-4 tracking-tight">
              Page not found
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Sorry, we couldn&apos;t find the page you&apos;re looking for. The
              page may have been moved, deleted, or the URL might be incorrect.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 focus-visible"
            >
              <HomeIcon
                className="w-4 h-4"
                strokeWidth={2}
                aria-hidden="true"
              />
              Back to home
            </Link> */}

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground text-sm font-medium rounded-lg hover:bg-secondary/80 transition-all duration-200 hover:scale-105 focus-visible"
            >
              <MagnifyingGlassIcon
                className="w-4 h-4"
                strokeWidth={2}
                aria-hidden="true"
              />
              Browse jobs
            </Link>
          </div>

          {/* Additional Help */}
          {/* <div className="mt-12 pt-8 border-t border-border/20">
            <p className="text-sm text-muted-foreground">
              Need help? Try searching for{" "}
              <Link 
                href="/" 
                className="text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
              >
                AI jobs
              </Link>
              {" "}or{" "}
              <Link 
                href="/" 
                className="text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
              >
                remote positions
              </Link>
              .
            </p>
          </div> */}
        </div>
      </main>
    </div>
  );
}
