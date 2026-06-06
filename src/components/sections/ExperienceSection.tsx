"use client";

import { Briefcase, MapPin, Calendar, ChevronRight, Lightbulb } from "lucide-react";
import { experiences } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientOrb from "@/components/ui/GradientOrb";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-[#0d0d0d] overflow-hidden">
      <GradientOrb color="cyan" className="-left-60 top-40" size="w-[400px] h-[400px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading
            title="Experience"
            subtitle="Building analytical thinking and product instincts through real-world roles"
          />
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#7C3AED] via-[#06B6D4] to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index} delay={index * 0.15} direction="left">
                <div className="relative pl-12 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-6 top-8 w-4 h-4 rounded-full border-2 border-[#7C3AED] bg-[#0A0A0A] z-10">
                    <div className="absolute inset-1 rounded-full bg-[#7C3AED] animate-pulse" />
                  </div>

                  <GlassCard>
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-[#7C3AED] font-medium text-lg">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1 text-sm text-[#7A7A7A]">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-xs border border-white/[0.08] bg-white/[0.03]">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2 text-[#B8B8B8] text-sm leading-relaxed">
                            <ChevronRight className="w-4 h-4 text-[#7C3AED] mt-0.5 shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    {exp.achievements && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-[#06B6D4]" />
                          Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((ach, i) => (
                            <li key={i} className="flex items-start gap-2 text-[#B8B8B8] text-sm leading-relaxed">
                              <ChevronRight className="w-4 h-4 text-[#06B6D4] mt-0.5 shrink-0" />
                              {ach}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Key Takeaways */}
                    {exp.keyTakeaways && (
                      <div>
                        <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-[#06B6D4]" />
                          Key Takeaways
                        </h4>
                        <ul className="space-y-2">
                          {exp.keyTakeaways.map((takeaway, i) => (
                            <li key={i} className="flex items-start gap-2 text-[#B8B8B8] text-sm leading-relaxed">
                              <ChevronRight className="w-4 h-4 text-[#06B6D4] mt-0.5 shrink-0" />
                              {takeaway}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </GlassCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
