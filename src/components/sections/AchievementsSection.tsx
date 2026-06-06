"use client";

import { Trophy, Award, BookOpen, Shield } from "lucide-react";
import { achievements, achievementStats } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const categoryConfig = {
  Professional: { icon: Trophy, color: "#7C3AED" },
  Academic: { icon: BookOpen, color: "#06B6D4" },
  Leadership: { icon: Shield, color: "#F43F5E" },
};

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading
            title="Achievements & Leadership"
            subtitle="From perfect scores to production-shipped AI — here's what the work looks like."
          />
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal>
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mb-16">
            {achievementStats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                suffix={"suffix" in stat ? stat.suffix : undefined}
                label={stat.label}
              />
            ))}
          </div>
        </ScrollReveal>

        {/* Achievement cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const config = categoryConfig[achievement.category];
            const Icon = config.icon;

            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlassCard className="h-full">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${config.color}15` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: config.color }} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="px-2 py-0.5 rounded-full text-xs font-medium border"
                          style={{
                            color: config.color,
                            borderColor: `${config.color}30`,
                            backgroundColor: `${config.color}10`,
                          }}
                        >
                          {achievement.category}
                        </span>
                        {achievement.year && (
                          <span className="text-xs text-[#7A7A7A]">{achievement.year}</span>
                        )}
                      </div>
                      <h4 className="text-white font-semibold text-lg mb-1">
                        {achievement.title}
                      </h4>
                      {achievement.institution && (
                        <p className="text-sm text-[#7A7A7A] mb-2">{achievement.institution}</p>
                      )}
                      <p className="text-sm text-[#B8B8B8] leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
