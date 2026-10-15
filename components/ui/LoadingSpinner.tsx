import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
}

const sizes = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-10 w-10 border-[3px]",
};

export function LoadingSpinner({
  size = "md",
  label = "در حال بارگذاری",
  className,
}: LoadingSpinnerProps) {
  return (
    <span
      role="status"
      aria-label={label}
      className={cn(
        "inline-flex shrink-0 animate-spin rounded-full border-(--gold)/25 border-t-gold motion-reduce:animate-none",
        sizes[size],
        className,
      )}
    />
  );
}
