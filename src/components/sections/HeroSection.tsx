"use client";

import { motion } from "framer-motion";
import { ChevronDown, Mail, ExternalLink } from "lucide-react";
import Image from "next/image";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

import { personalInfo, heroIntro } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";
import GradientOrb from "@/components/ui/GradientOrb";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [designationIdx, setDesignationIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDesignationIdx((prev) => (prev + 1) % personalInfo.designations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Aurora background */}
      <div className="absolute inset-0 aurora-bg" aria-hidden="true" />

      {/* Gradient Orbs */}
      <GradientOrb color="purple" className="-top-40 -left-40" size="w-[600px] h-[600px]" />
      <GradientOrb color="cyan" className="-bottom-40 -right-40" size="w-[500px] h-[500px]" />
      <GradientOrb color="mixed" className="top-1/3 right-1/4" size="w-[400px] h-[400px]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-[1fr,auto] gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-[#B8B8B8]">Open to APM & Product roles</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-[1.1]"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Animated designation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-10 mb-8 overflow-hidden"
            >
              <motion.p
                key={designationIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#06B6D4] bg-clip-text text-transparent font-medium"
              >
                {personalInfo.designations[designationIdx]}
              </motion.p>
            </motion.div>

            {/* Intro paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#B8B8B8] text-base md:text-lg leading-relaxed max-w-2xl mb-10"
            >
              {heroIntro}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <MagneticButton
                href={personalInfo.linkedin}
                target="_blank"
                className="px-6 py-3 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white hover:from-[#6D28D9] hover:to-[#5B21B6] text-sm"
              >
                <LinkedinIcon className="w-4 h-4" />
                Connect
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right - Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#06B6D4] to-[#7C3AED] opacity-50 blur-md animate-spin-slow" />
              <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-white/10">
                <Image
                  src="/images/profile.jpeg"
                  alt="Lakshit Jain — Aspiring Product Manager"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[#7A7A7A]"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
