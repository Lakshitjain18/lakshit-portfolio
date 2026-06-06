"use client";

import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
  isVisible: boolean;
}

export default function SkillBar({
  name,
  level,
  delay = 0,
  isVisible,
}: SkillBarProps) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-[#B8B8B8] font-medium">{name}</span>
        <span className="text-sm text-[#7A7A7A] tabular-nums">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/[0.05] overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]"
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay: delay,
            ease: [0.25, 0.4, 0.25, 1],
          }}
        />
      </div>
    </div>
  );
}
