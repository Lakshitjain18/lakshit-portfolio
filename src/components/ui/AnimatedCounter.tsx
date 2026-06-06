"use client";

import { useCounter } from "@/hooks/useCounter";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  label,
  duration = 2000,
}: AnimatedCounterProps) {
  const { ref, isVisible } = useScrollReveal(0.3);
  const count = useCounter(value, duration, isVisible);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-sm md:text-base text-[#B8B8B8] mt-2 font-medium tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
}
