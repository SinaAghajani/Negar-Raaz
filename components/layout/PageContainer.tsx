import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  as?: "main" | "section" | "div";
}

export default function PageContainer({
  children,
  className,
  as = "main",
}: PageContainerProps) {
  const Component = as;

  return (
    <Component className={cn("section-container", className)}>
      {children}
    </Component>
  );
}
