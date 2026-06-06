"use client";

interface GradientOrbProps {
  className?: string;
  color?: "purple" | "cyan" | "mixed";
  size?: string;
}

export default function GradientOrb({
  className = "",
  color = "purple",
  size = "w-[500px] h-[500px]",
}: GradientOrbProps) {
  const colors = {
    purple: "from-purple-600/20 to-violet-600/10",
    cyan: "from-cyan-500/20 to-blue-500/10",
    mixed: "from-purple-600/15 via-cyan-500/10 to-violet-600/15",
  };

  return (
    <div
      className={`absolute ${size} rounded-full bg-gradient-radial ${colors[color]} blur-[120px] pointer-events-none animate-float-slow ${className}`}
      aria-hidden="true"
    />
  );
}
