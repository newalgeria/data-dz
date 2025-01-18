"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export function AuroraBackground({
  className,
  children,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center w-full overflow-hidden bg-slate-950",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 w-full h-full bg-slate-950">
        <div className="absolute inset-0 w-full h-full transition duration-300 bg-gradient-to-r from-indigo-500/30 via-sky-500/30 to-emerald-500/30 animate-aurora" />
        <div className="absolute inset-0 w-full h-full transition duration-300 bg-gradient-to-r from-indigo-500/30 via-sky-500/30 to-emerald-500/30 animate-aurora" style={{ animationDelay: "250ms" }} />
        <div className="absolute inset-0 w-full h-full transition duration-300 bg-gradient-to-r from-indigo-500/30 via-sky-500/30 to-emerald-500/30 animate-aurora" style={{ animationDelay: "500ms" }} />
      </div>
      {children}
    </div>
  );
}