"use client";

import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";
import { education } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function EducationSection() {
  const icons = [GraduationCap, Award];

  return (
    <section id="education" className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading
            title="Education"
            subtitle="Where technical depth meets product thinking"
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => {
            const Icon = icons[index];
            const accentColor = index === 0 ? "#7C3AED" : "#06B6D4";

            return (
              <ScrollReveal key={index} delay={index * 0.15}>
                <GlassCard className="h-full relative overflow-hidden">
                  {/* Top accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{
                      background: `linear-gradient(90deg, ${accentColor}, transparent)`,
                    }}
                  />

                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${accentColor}15` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: accentColor }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {edu.qualification}
                      </h3>
                      {edu.degree && (
                        <p className="text-sm text-[#B8B8B8]">{edu.degree}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <p className="text-[#B8B8B8] font-medium">{edu.institution}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-[#7A7A7A]">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {edu.mode}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {edu.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-[#B8B8B8] text-sm leading-relaxed"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                          style={{ backgroundColor: accentColor }}
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
