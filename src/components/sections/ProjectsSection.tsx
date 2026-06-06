"use client";

import { ExternalLink, FileText, ArrowRight, TrendingUp, Users, Bot, Target, BarChart3, Star } from "lucide-react";
import Image from "next/image";
import { projects } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import GradientOrb from "@/components/ui/GradientOrb";

const kpiIcons = [TrendingUp, Users, Bot, Target, BarChart3, Star];

export default function ProjectsSection() {
  const featured = projects[0];
  const caseStudies = projects[1];
  const engineering = projects[2];

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-[#0d0d0d] overflow-hidden">
      <GradientOrb color="purple" className="-right-40 top-60" size="w-[500px] h-[500px]" />
      <GradientOrb color="cyan" className="-left-40 bottom-40" size="w-[400px] h-[400px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading
            title="Projects"
            subtitle="From product discovery to shipped solutions — every project tells a story"
          />
        </ScrollReveal>

        {/* ─── TM Café Featured Card ─── */}
        <ScrollReveal>
          <div className="relative mb-16 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent backdrop-blur-xl overflow-hidden">
            {/* Gradient top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7C3AED] via-[#06B6D4] to-[#7C3AED]" />

            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[#7C3AED]/10 text-[#7C3AED] border border-[#7C3AED]/20 mb-4">
                    <Star className="w-3 h-3" />
                    Featured Capstone
                  </span>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-2">
                    {featured.title}
                  </h3>
                  <p className="text-[#7A7A7A] text-sm">{featured.type} · {featured.duration}</p>
                </div>
                {featured.image && (
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border border-white/[0.08] shrink-0">
                    <Image src={featured.image} alt={featured.title} fill className="object-cover" />
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-[#B8B8B8] text-base md:text-lg leading-relaxed mb-8 max-w-4xl">
                {featured.description}
              </p>

              {/* KPIs Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                {featured.kpis?.map((kpi, i) => {
                  const Icon = kpiIcons[i % kpiIcons.length];
                  return (
                    <div
                      key={kpi.label}
                      className="text-center p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]"
                    >
                      <Icon className="w-5 h-5 mx-auto mb-2 text-[#7C3AED]" />
                      <p className="text-lg font-bold text-white">{kpi.value}</p>
                      <p className="text-xs text-[#7A7A7A] mt-1">{kpi.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Outcomes */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
                  Key Outcomes
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {featured.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-start gap-2 text-[#B8B8B8] text-sm leading-relaxed">
                      <ArrowRight className="w-4 h-4 text-[#06B6D4] mt-0.5 shrink-0" />
                      {outcome}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-8">
                {featured.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/5 text-[#A78BFA]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                {featured.links?.map((link) => (
                  <MagneticButton
                    key={link.label}
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    className={`px-5 py-2.5 text-sm ${
                      link.label === "View Case Study"
                        ? "bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white hover:from-[#6D28D9] hover:to-[#5B21B6]"
                        : link.label === "View Prototype"
                        ? "border border-[#06B6D4]/30 text-[#06B6D4] hover:bg-[#06B6D4]/10"
                        : "border border-white/[0.08] text-[#B8B8B8] hover:bg-white/[0.05]"
                    }`}
                  >
                    {link.url.endsWith(".pdf") ? (
                      <FileText className="w-4 h-4" />
                    ) : (
                      <ExternalLink className="w-4 h-4" />
                    )}
                    {link.label}
                  </MagneticButton>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ─── PM Fellowship — Bento Grid ─── */}
        {caseStudies && caseStudies.subProjects && (
          <>
            <ScrollReveal>
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                  {caseStudies.title}
                </h3>
                <p className="text-[#B8B8B8]">{caseStudies.description}</p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {caseStudies.subProjects.map((sub, index) => (
                <ScrollReveal key={sub.title} delay={index * 0.1}>
                  <GlassCard padding="p-0" className="h-full relative overflow-hidden group min-h-[340px] flex flex-col">
                    {/* Background Image */}
                    {sub.image ? (
                      <>
                        <Image
                          src={sub.image}
                          alt={sub.title}
                          fill
                          className="object-cover z-0 transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Gradient overlay to ensure text readability */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/95 z-10 transition-opacity duration-300 group-hover:opacity-90" />
                      </>
                    ) : (
                      // Fallback gradient background if no image
                      <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 to-[#06B6D4]/10 z-10" />
                    )}

                    {/* Content */}
                    <div className="relative z-20 p-6 flex flex-col h-full flex-grow">
                      <h4 className="text-lg font-bold text-white mb-3">{sub.title}</h4>
                      <p className="text-sm text-[#CCCCCC] leading-relaxed flex-grow mb-6">
                        {sub.description}
                      </p>

                      {/* Links */}
                      <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-white/[0.06]">
                        {sub.link && (
                          <a
                            href={sub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-[#06B6D4] hover:text-[#22D3EE] transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Live Demo
                          </a>
                        )}
                        {sub.pdfLink && (
                          <a
                            href={sub.pdfLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-[#A78BFA] hover:text-[#C4B5FD] transition-colors"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            Case Study PDF
                          </a>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </>
        )}

        {/* ─── Vigilant Eye — Engineering Project ─── */}
        {engineering && (
          <ScrollReveal>
            <GlassCard className="border-l-2 border-l-[#06B6D4]">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#06B6D4]/10 text-[#06B6D4] border border-[#06B6D4]/20 mb-3">
                    Engineering Project
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {engineering.title}
                  </h3>
                </div>
                <span className="text-sm text-[#7A7A7A]">{engineering.duration}</span>
              </div>
              <p className="text-[#B8B8B8] mb-6">{engineering.description}</p>
              <ul className="space-y-2 mb-6">
                {engineering.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#B8B8B8] leading-relaxed">
                    <ArrowRight className="w-4 h-4 text-[#06B6D4] mt-0.5 shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {engineering.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full border border-[#06B6D4]/20 bg-[#06B6D4]/5 text-[#67E8F9]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
