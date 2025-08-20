import { Suspense } from "react";
import { HomePageClient } from "@/components/home-page-client";

export default function HomePage() {
  return (
    <Suspense fallback={
      <div className="relative min-h-screen bg-background text-foreground font-mono">
        <div className="container mx-auto px-6 py-16">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded mb-4"></div>
            <div className="h-4 bg-muted rounded mb-2"></div>
            <div className="h-4 bg-muted rounded w-2/3"></div>
          </div>
        </div>
      </div>
    }>
      <HomePageClient />
    </Suspense>
  );
}
