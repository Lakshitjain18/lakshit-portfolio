"use client";

import { Award, Download, ExternalLink } from "lucide-react";
import Image from "next/image";
import { certifications } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientOrb from "@/components/ui/GradientOrb";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-24 md:py-32 bg-[#0d0d0d] overflow-hidden">
      <GradientOrb color="mixed" className="-right-40 top-20" size="w-[400px] h-[400px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading
            title="Certifications"
            subtitle="Continuous learning across PM, AI, and engineering"
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.title} delay={index * 0.1}>
              <GlassCard className="h-full flex flex-col group">
                {/* Certificate image / clickable link */}
                {cert.image ? (
                  <a
                    href={cert.pdfLink || cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full h-44 rounded-xl overflow-hidden mb-4 border border-white/[0.06] group-hover:border-white/[0.12] transition-colors block cursor-pointer"
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <span className="text-xs text-white/80 flex items-center gap-1 font-medium">
                        <ExternalLink className="w-3 h-3" />
                        View Certificate
                      </span>
                    </div>
                  </a>
                ) : cert.pdfLink ? (
                  <a
                    href={cert.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full h-44 rounded-xl mb-4 border border-white/[0.06] bg-gradient-to-br from-[#7C3AED]/5 to-[#06B6D4]/5 flex flex-col items-center justify-center gap-2 group cursor-pointer hover:border-white/[0.12] transition-all hover:bg-gradient-to-br hover:from-[#7C3AED]/10 hover:to-[#06B6D4]/10 block"
                  >
                    <Award className="w-12 h-12 text-[#06B6D4] transition-transform group-hover:scale-110" />
                    <span className="text-xs text-white/60 flex items-center gap-1 font-medium group-hover:text-white">
                      <ExternalLink className="w-3 h-3" />
                      View Document
                    </span>
                  </a>
                ) : (
                  <div className="w-full h-44 rounded-xl mb-4 border border-white/[0.06] bg-gradient-to-br from-[#7C3AED]/5 to-[#06B6D4]/5 flex items-center justify-center">
                    <Award className="w-12 h-12 text-[#7A7A7A]" />
                  </div>
                )}

                <h4 className="text-white font-semibold mb-1 flex-grow">{cert.title}</h4>
                <p className="text-sm text-[#7A7A7A] mb-3">{cert.issuer}</p>

                {(cert.pdfLink || cert.image) && (
                  <a
                    href={cert.pdfLink || cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#06B6D4] hover:text-[#22D3EE] transition-colors mt-auto font-medium"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    View Certificate
                  </a>
                )}
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
