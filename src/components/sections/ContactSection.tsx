"use client";

import { Mail, Phone, MapPin, ArrowRight, Send } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

import { personalInfo } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import MagneticButton from "@/components/ui/MagneticButton";
import GradientOrb from "@/components/ui/GradientOrb";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "#7C3AED",
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    color: "#06B6D4",
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    color: "#F43F5E",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/lakshit-jain",
    href: personalInfo.linkedin,
    color: "#0A66C2",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#0d0d0d] overflow-hidden">
      <GradientOrb color="purple" className="-left-40 bottom-20" size="w-[500px] h-[500px]" />
      <GradientOrb color="cyan" className="-right-40 top-20" size="w-[400px] h-[400px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-[#B8B8B8] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed italic">
              &ldquo;{personalInfo.tagline}&rdquo;
            </p>
            <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] mx-auto" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <GlassCard className="flex items-center gap-4 group cursor-pointer">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="text-xs text-[#7A7A7A] uppercase tracking-wider">{item.label}</p>
                      <p className="text-white font-medium truncate">{item.value}</p>
                    </div>
                    {item.href && (
                      <ArrowRight className="w-4 h-4 text-[#7A7A7A] group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
                    )}
                  </GlassCard>
                );

                if (item.href) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block"
                    >
                      {content}
                    </a>
                  );
                }

                return <div key={item.label}>{content}</div>;
              })}
            </div>
          </ScrollReveal>

          {/* CTA Card */}
          <ScrollReveal delay={0.2}>
            <GlassCard className="h-full flex flex-col items-center justify-center text-center p-8 md:p-12">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] flex items-center justify-center mb-6">
                <Send className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Ready to build something meaningful?
              </h3>
              <p className="text-[#B8B8B8] text-sm mb-8 leading-relaxed">
                I&apos;m actively looking for APM, Product Analyst, and Product Intern roles at high-growth startups and global tech companies.
              </p>
              <MagneticButton
                href={`mailto:${personalInfo.email}?subject=${encodeURIComponent("Let's Connect — Portfolio")}`}
                className="px-8 py-3.5 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] text-sm w-full max-w-xs"
              >
                <Mail className="w-4 h-4" />
                Send Me an Email
              </MagneticButton>
              <MagneticButton
                href={personalInfo.linkedin}
                target="_blank"
                className="px-8 py-3.5 border border-white/[0.08] text-[#B8B8B8] hover:bg-white/[0.05] text-sm mt-3 w-full max-w-xs"
              >
                <LinkedinIcon className="w-4 h-4" />
                Connect on LinkedIn
              </MagneticButton>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
