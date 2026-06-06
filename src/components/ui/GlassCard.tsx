"use client";

import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: string;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  padding = "p-6",
}: GlassCardProps) {
  return (
    <div
      className={`
        relative rounded-2xl border border-white/[0.08] 
        bg-white/[0.03] backdrop-blur-xl
        ${padding}
        ${hover ? "transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.12] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(124,58,237,0.1)]" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
