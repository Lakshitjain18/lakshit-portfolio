"use client";

import { skillCategories } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBar from "@/components/ui/SkillBar";
import {
  Target,
  TrendingUp,
  Wrench,
  Code2,
  Rocket,
  Users,
} from "lucide-react";

const categoryIcons = [Target, TrendingUp, Wrench, Code2, Rocket, Users];
const categoryColors = ["#7C3AED", "#06B6D4", "#F43F5E", "#22C55E", "#F59E0B", "#8B5CF6"];

export default function SkillsSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading
            title="Skills"
            subtitle="A product manager who speaks engineering fluently"
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => {
            const Icon = categoryIcons[catIndex];
            const color = categoryColors[catIndex];

            return (
              <ScrollReveal key={category.name} delay={catIndex * 0.1}>
                <GlassCard className="h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${color}15` }}
                    >
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <h3 className="text-white font-semibold">{category.name}</h3>
                  </div>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={catIndex * 0.1 + skillIndex * 0.1}
                      isVisible={isVisible}
                    />
                  ))}
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
