
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Play,
  LockKeyhole,
} from "lucide-react";

import {
  portfolioProjects,
  getProjectThumbnail,
  getProjectUrl,
} from "../../constants/portfolioData";

export function Gallery() {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const projects = portfolioProjects;

  // =========================================
  // MANUAL CAROUSEL NAVIGATION
  // =========================================

  const scroll = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const amount = 365;

    if (direction === "next") {
      slider.scrollLeft += amount;
    } else {
      slider.scrollLeft -= amount;
    }
  };

  // =========================================
  // CONTINUOUS INFINITE AUTO PLAY
  // =========================================

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || projects.length === 0) return;

    let animationFrame;
    let lastTime = 0;

    const speed = 45; // Pixels per second

    const animate = (time) => {
      if (!slider.isConnected) return;

      if (!lastTime) lastTime = time;

      const delta = Math.min(time - lastTime, 50);
      lastTime = time;

      // Continuous movement
      slider.scrollLeft += (speed * delta) / 1000;

      // Reset after first set of duplicated cards
      const halfWidth = slider.scrollWidth / 2;

      if (halfWidth > 0 && slider.scrollLeft >= halfWidth) {
        slider.scrollLeft -= halfWidth;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [projects.length]);

  // =========================================
  // CLOSE PREVIEW
  // =========================================

  useEffect(() => {
    if (!preview) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setPreview(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [preview]);

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#f7f3ff] py-12 sm:py-16"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">

        {/* =================================
            SECTION HEADING
        ================================= */}

        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#7138F5]">
              CREATIVE PORTFOLIO
            </p>

            <h2 className="text-4xl font-black leading-tight tracking-tight text-[#101535] sm:text-5xl lg:text-[54px]">
              Our Creative Work

              <span className="block text-[#7138F5]">
                Ideas That Drive Results.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#65718d] sm:text-base">
              Explore our videos, campaigns, branding, product creatives
              and digital experiences.
            </p>
          </div>

          {/* Navigation Arrows */}

          <div className="flex shrink-0 items-center gap-3">

            <button
              type="button"
              onClick={() => scroll("prev")}
              aria-label="Previous projects"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e7e0f1] bg-white text-[#171827] shadow-sm transition hover:-translate-y-1 hover:border-[#7138F5] hover:bg-[#7138F5] hover:text-white"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              type="button"
              onClick={() => scroll("next")}
              aria-label="Next projects"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7138F5] text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1 hover:bg-[#5524d6]"
            >
              <ArrowRight size={20} />
            </button>

          </div>
        </div>

        {/* =================================
            INFINITE AUTO PLAY CAROUSEL
        ================================= */}

        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{
            scrollBehavior: "auto",
            overscrollBehaviorX: "contain",
          }}
        >

          {/* Duplicate projects for infinite scrolling */}

          {[...projects, ...projects].map((project, index) => (

            <article
              key={`${project.id}-${index}`}
              onClick={() => setPreview(project)}
              className="group w-[290px] shrink-0 cursor-pointer overflow-hidden rounded-[20px] border border-[#e5deef] bg-white transition duration-500 hover:-translate-y-2 hover:border-[#7138F5]/50 hover:shadow-[0_20px_50px_rgba(113,56,245,0.13)] sm:w-[340px]"
            >

              {/* Browser Header */}

              <div className="flex h-11 items-center gap-2 border-b border-[#ece9ef] bg-[#f7f6f8] px-3">

                <div className="flex shrink-0 gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff6258]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>

                <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-[#e8e5e8] bg-white px-3 py-1.5">

                  <LockKeyhole
                    size={11}
                    className="shrink-0 text-emerald-500"
                  />

                  <span className="truncate text-[10px] font-semibold text-[#687080]">
                    brandtisersmedia.com
                  </span>

                </div>

                <ArrowUpRight
                  size={15}
                  className="shrink-0 text-[#252535]"
                />

              </div>

              {/* Project Image */}

              <div className="relative h-[220px] overflow-hidden bg-[#f2eff8] sm:h-[235px]">

                <img
                  src={getProjectThumbnail(project)}
                  alt={project.title}
                  loading="lazy"
                  className={`h-full w-full transition duration-700 group-hover:scale-110 ${
                    project.fit === "contain"
                      ? "object-contain p-6"
                      : "object-cover"
                  }`}
                />

                {/* Hover Overlay */}

                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/25">

                  <div className="flex h-14 w-14 scale-75 items-center justify-center rounded-full bg-[#7138F5] text-white opacity-0 shadow-xl transition duration-300 group-hover:scale-100 group-hover:opacity-100">

                    {project.type === "video" ? (
                      <Play size={23} fill="white" />
                    ) : (
                      <ArrowUpRight size={24} />
                    )}

                  </div>
                </div>

                {/* Category Label */}

                <span className="absolute right-3 top-3 rounded-full border border-white/50 bg-white/95 px-3 py-1.5 text-[10px] font-black tracking-wide text-[#7138F5]">
                  {project.category}
                </span>

              </div>

              {/* Project Details */}

              <div className="p-5">

                <div className="flex items-center justify-between">

                  <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#7138F5]">
                    {project.category}
                  </span>

                  <span className="text-xs font-bold text-[#c2bfca]">
                    {String((index % projects.length) + 1).padStart(2, "0")}
                  </span>

                </div>

                <h3 className="mt-3 min-h-[28px] text-lg font-black text-[#171827]">
                  {project.title}
                </h3>

                <p className="mt-2 line-clamp-2 text-xs leading-6 text-[#81869a]">
                  {project.description ||
                    "Creative design and visual storytelling."}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-[#efedf2] pt-4">

                  <span className="text-xs font-bold text-[#73768a]">
                    View Project
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-[#7138F5] transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                </div>

              </div>

            </article>

          ))}

        </div>

        {/* =================================
            VIEW ALL PROJECTS
        ================================= */}

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

          <p className="text-xs font-medium text-[#85839a]">
            Discover more of our creative work
          </p>

          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-3 rounded-full bg-[#7138F5] px-8 py-4 text-sm font-black text-white shadow-[0_10px_30px_rgba(113,56,245,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#5524d6]"
          >
            View All Projects

            <ArrowUpRight
              size={19}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />

          </Link>

        </div>

      </div>

      {/* =================================
          VIDEO / IMAGE PREVIEW MODAL
      ================================= */}

      {preview && (

        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setPreview(null)}
        >

          <button
            type="button"
            onClick={() => setPreview(null)}
            aria-label="Close preview"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl text-black transition hover:bg-[#7138F5] hover:text-white"
          >
            ×
          </button>

          <div
            className="w-full max-w-5xl overflow-hidden rounded-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >

            {preview.type === "video" ? (

              <div className="aspect-video">

                <iframe
                  src={getProjectUrl(preview)}
                  title={preview.title}
                  className="h-full w-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />

              </div>

            ) : (

              <img
                src={preview.image}
                alt={preview.title}
                className="max-h-[85vh] w-full object-contain"
              />

            )}

          </div>

        </div>

      )}

    </section>
  );
}
