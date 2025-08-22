import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";

export function generateMetadata({ params }: { params: any }): Metadata {
  const baseUrl = "https://www.weworkwith-ai.com";
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";
  const canonicalUrl = `${baseUrl}${pathname}`;

  return {
    metadataBase: new URL(baseUrl),
    title: "Remote AI Jobs at AI Companies – We Work With AI",
    description:
      "Curated remote AI jobs and machine learning jobs—design, developer, support, research, operations, sales, and more, at top AI startups and AI companies. 100% remote. $175 job post. Updated weekly.",
    keywords: [
      "remote AI jobs",
      "AI job board",
      "machine learning jobs",
      "artificial intelligence careers",
      "AI companies hiring",
      "remote work",
      "remote tech jobs",
      "post AI jobs",
      "remote AI companies",
      "AI engineer",
      "ML engineer",
      "prompt engineer",
      "AI researcher",
      "tech jobs",
      "remote developer",
    ],
    authors: [{ name: "We Work With AI" }],
    creator: "We Work With AI",
    publisher: "We Work With AI",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://www.weworkwith-ai.com",
      title: "Remote AI Jobs at AI Companies – We Work With AI",
      description:
        "Discover curated remote AI jobs and machine learning jobs at AI startups and companies. 100% remote. Updated weekly.",
      siteName: "We Work With AI",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: "We Work With AI - Curated Remote AI Jobs",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Remote AI Jobs at AI Companies – We Work With AI",
      description: "Curated remote roles at AI companies. Updated weekly.",
      images: ["/logo.png"],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </head>
      <body className="min-h-screen bg-background font-mono antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
