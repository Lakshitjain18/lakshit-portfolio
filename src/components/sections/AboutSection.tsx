"use client";

import { Target, Rocket } from "lucide-react";
import { aboutMe } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientOrb from "@/components/ui/GradientOrb";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <GradientOrb color="purple" className="-right-60 top-20" size="w-[400px] h-[400px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading title="About Me" subtitle="The intersection of data, empathy, and execution" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-[2fr,1fr] gap-8 items-start">
          {/* Main paragraph */}
          <ScrollReveal delay={0.1}>
            <GlassCard className="lg:row-span-2">
              <p className="text-[#B8B8B8] text-lg leading-relaxed">
                {aboutMe.paragraph}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Figma", "Notion", "Jira", "SQL", "Python", "System Design", "Figma Prototyping", "RICE Framework"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full border border-white/[0.08] bg-white/[0.03] text-[#B8B8B8]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Mission */}
          <ScrollReveal delay={0.2}>
            <GlassCard className="border-l-2 border-l-[#7C3AED]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-[#7C3AED]" />
                </div>
                <h3 className="text-white font-semibold text-lg">Mission</h3>
              </div>
              <p className="text-[#B8B8B8] leading-relaxed italic">
                &ldquo;{aboutMe.mission}&rdquo;
              </p>
            </GlassCard>
          </ScrollReveal>

          {/* Vision */}
          <ScrollReveal delay={0.3}>
            <GlassCard className="border-l-2 border-l-[#06B6D4]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/10 flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-[#06B6D4]" />
                </div>
                <h3 className="text-white font-semibold text-lg">Vision</h3>
              </div>
              <p className="text-[#B8B8B8] leading-relaxed italic">
                &ldquo;{aboutMe.vision}&rdquo;
              </p>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
