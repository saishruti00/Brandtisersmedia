import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Zap,
  CheckCircle2,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

import { companyStorySlides } from "../../constants/siteData";

export function LaptopMonitorStorySection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const SLIDE_DURATION = 4000;
  const totalSlides = companyStorySlides.length;

  useEffect(() => {
    if (totalSlides <= 1) return;

    const startedAt = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startedAt;
      const percentage = Math.min(
        100,
        (elapsed / SLIDE_DURATION) * 100
      );

      setProgress(percentage);

      if (elapsed >= SLIDE_DURATION) {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
        setProgress(0);
      }
    }, 40);

    return () => clearInterval(timer);
  }, [currentSlide, totalSlides]);

  const changeSlide = (index) => {
    setCurrentSlide((index + totalSlides) % totalSlides);
    setProgress(0);
  };

  const getPosition = (index) => {
    let offset = index - currentSlide;

    if (offset > totalSlides / 2) {
      offset -= totalSlides;
    }

    if (offset < -totalSlides / 2) {
      offset += totalSlides;
    }

    return offset;
  };

  if (!totalSlides) return null;

  return (
    <section
      id="brand-story-monitor"
      className="relative isolate overflow-hidden bg-white py-20 sm:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7138F5]/[0.06] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#7138F5]/20 bg-[#7138F5]/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#7138F5]">
            <Zap size={14} />
            Discover Our Story
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#111633] sm:text-4xl md:text-5xl">
            Inside{" "}
            <span className="bg-gradient-to-r from-[#7138F5] to-[#a26aff] bg-clip-text text-transparent">
              Brandtisers Media
            </span>
          </h2>
        </div>

        {/* 3D Carousel */}
        <div
          className="relative mx-auto h-[530px] w-full sm:h-[490px] lg:h-[470px]"
          style={{ perspective: "1200px" }}
        >
          {companyStorySlides.map((slide, index) => {
            const position = getPosition(index);
            const isActive = position === 0;
            const distance = Math.abs(position);

            return (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  x: `${position * 67}%`,
                  scale: isActive ? 1 : distance === 1 ? 0.78 : 0.6,
                  rotateY: position * -13,
                  opacity: distance > 1 ? 0 : isActive ? 1 : 0.55,
                  filter: isActive
                    ? "blur(0px)"
                    : "blur(1.5px)",
                  zIndex: isActive ? 30 : 20 - distance
                }}
                transition={{
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1]
                }}
                onClick={() => {
                  if (!isActive) changeSlide(index);
                }}
                className={`absolute left-1/2 top-1/2 w-[min(88vw,510px)] -translate-x-1/2 -translate-y-1/2 ${
                  isActive ? "cursor-default" : "cursor-pointer"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  pointerEvents: distance > 1 ? "none" : "auto"
                }}
              >
                <div
                  className={`relative flex h-[440px] flex-col overflow-hidden rounded-[28px] border bg-white p-6 shadow-xl transition-shadow duration-500 sm:h-[400px] sm:p-8 ${
                    isActive
                      ? "border-[#7138F5]/30 shadow-[0_25px_80px_rgba(113,56,245,0.18)]"
                      : "border-[#e8e1f5]"
                  }`}
                >
                  {/* Top accent */}
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#7138F5] via-[#a26aff] to-[#FFB400]" />

                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#7138F5]/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-[#7138F5]">
                      <Zap size={13} />
                      {slide.badge}
                    </span>

                    <span className="text-xs font-bold tracking-widest text-[#a8a4b8]">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(totalSlides).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-7">
                    <h3 className="text-2xl font-black leading-tight text-[#111633] sm:text-[29px]">
                      {slide.heading}
                    </h3>

                    <p className="mt-3 text-sm font-semibold leading-relaxed text-[#7138F5]">
                      {slide.subheading}
                    </p>

                    <div className="mt-6 space-y-3">
                      {slide.bullets.map((point, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 text-[13px] leading-relaxed text-[#555b73]"
                        >
                          <CheckCircle2
                            size={17}
                            className="mt-0.5 shrink-0 text-[#7138F5]"
                          />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom metric */}
                  <div className="mt-auto flex items-center gap-4 border-t border-[#eeeaf6] pt-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#7138F5]/10 text-lg font-black text-[#7138F5]">
                      {slide.step}
                    </div>

                    <div>
                      <p className="text-2xl font-black text-[#111633]">
                        {slide.highlightStat}
                      </p>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#8a8fa5]">
                        {slide.metricLabel}
                      </p>
                    </div>
                  </div>

                  {/* Active progress */}
                  {isActive && (
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-[#eee8ff]">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#7138F5] to-[#FFB400]"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel controls */}
        <div className="mt-3 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => changeSlide(currentSlide - 1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e6def5] bg-white text-[#7138F5] shadow-sm transition hover:bg-[#7138F5] hover:text-white"
            aria-label="Previous slide"
          >
            <ChevronLeft size={21} />
          </button>

          <div className="flex items-center gap-2">
            {companyStorySlides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => changeSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-9 bg-[#7138F5]"
                    : "w-2.5 bg-[#d9d1e8] hover:bg-[#a78bfa]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => changeSlide(currentSlide + 1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e6def5] bg-white text-[#7138F5] shadow-sm transition hover:bg-[#7138F5] hover:text-white"
            aria-label="Next slide"
          >
            <ChevronRight size={21} />
          </button>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#7138F5] px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(113,56,245,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5c27d6]"
          >
            Claim Free Growth Audit
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}