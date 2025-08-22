import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border/30 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <Link 
              href="/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/pricing" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link 
              href="/terms" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms & Conditions
            </Link>
            {/* <Link 
              href="/resources" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Resources
            </Link> */}
          </div>
          <p className="text-sm text-muted-foreground">
            🤖 {new Date().getFullYear()} We Work With AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
