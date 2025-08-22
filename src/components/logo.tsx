import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex items-center space-x-2 min-w-0 flex-1">
      <div className="w-2 h-2 bg-primary rounded-full animate-pulse flex-shrink-0"></div>
      <h1 className="text-base sm:text-lg font-medium tracking-tight truncate">
        <Link
          href="/"
          className="text-base sm:text-lg font-medium tracking-tight truncate hover:text-primary transition-colors"
        >
          <span>We Work w/ AI</span>
        </Link>
      </h1>
    </div>
  );
}
