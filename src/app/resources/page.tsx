import Link from "next/link";
import { Metadata } from "next";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { JobPostModal } from "@/components/job-post-modal";

export const metadata: Metadata = {
  title: "Resources | We Work With AI",
  description: "Helpful resources, guides, and articles for AI professionals and companies.",
};

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "How to Attract Top AI Talent in 2024",
    excerpt: "Learn the best strategies for hiring AI professionals in today's competitive market.",
    date: "August 15, 2024",
    readTime: "5 min read",
    category: "Hiring",
    slug: "how-to-attract-top-ai-talent",
  },
  // More posts can be added here
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-2">Resources</h1>
        <p className="text-muted-foreground mb-12">Insights, guides, and articles for AI professionals and companies</p>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/resources/${post.slug}`}
              className="block group"
            >
              <article className="h-full p-6 bg-card border border-border/30 rounded-lg hover:border-primary/50 transition-colors duration-200">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                  {post.category}
                </span>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
