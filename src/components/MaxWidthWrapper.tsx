"use client";

import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
  className?: string;
  children: React.ReactNode;
}

export default function MaxWidthWrapper({
  className,
  children,
}: MaxWidthWrapperProps) {
  return (
    <div
      className={cn(
        `h-full mx-auto w-full max-w-screen-xl px-5 md:px-8 ${className}`
      )}
    >
      {children}
    </div>
  );
}
