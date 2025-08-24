"use client";

import { JobInterface } from "@/data/jobs";
import { Button } from "@/components/ui/button";

type CategoryType = JobInterface["category"] | "All";

interface CategoryFilterProps {
  selectedCategory: CategoryType;
  onCategoryChange: (category: CategoryType) => void;
  jobCounts?: Record<string, number>;
}

const categories: CategoryType[] = [
  "All",
  "Engineering",
  "Research",
  "Design",
  "Operations",
  "Sales",
  "Support",
  "Other",
];

export function CategoryFilter({
  selectedCategory,
  onCategoryChange,
  jobCounts = {},
}: CategoryFilterProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-muted-foreground">
          Filter by category
        </h3>
        {selectedCategory !== "All" && (
          <button
            onClick={() => onCategoryChange("All")}
            className="text-xs text-primary hover:text-primary/80 transition-colors"
          >
            Clear filter
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const count =
            category === "All"
              ? Object.values(jobCounts).reduce((sum, count) => sum + count, 0)
              : jobCounts[category] || 0;

          const isSelected = selectedCategory === category;

          return (
            <Button
              key={category}
              variant={isSelected ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category)}
              className={`h-8 text-xs font-medium transition-all duration-200 ${
                isSelected
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-background hover:bg-secondary/50 border-border/30"
              }`}
            >
              {category}
              {count > 0 && (
                <span
                  className={`ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] font-medium ${
                    isSelected
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {count}
                </span>
              )}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
