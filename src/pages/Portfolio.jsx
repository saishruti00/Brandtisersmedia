
import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Play,
  X,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import {
  portfolioCategories,
  portfolioProjects,
  getProjectThumbnail,
  getProjectUrl,
} from "../constants/portfolioData";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [preview, setPreview] = useState(null);

  const filteredProjects =
    activeCategory === "ALL"
      ? portfolioProjects
      : portfolioProjects.filter(
          (project) => project.category === activeCategory
        );

  // Close modal using Escape
  useEffect(() => {
    if (!preview) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setPreview(null);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [preview]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F6FF] text-[#101535]">

      {/* =========================================
          COMPACT CENTERED PORTFOLIO INTRO
      ========================================= */}

      <section className="bg-white px-5 pb-8 pt-24 sm:px-8 sm:pb-10 sm:pt-28">
        <div className="mx-auto max-w-7xl text-center">

          {/* Breadcrumb */}
          <div className="mb-3 flex items-center justify-center gap-2 text-[11px] font-semibold text-[#85839A]">
            <Link to="/" className="transition hover:text-[#7138F5]">
              Home
            </Link>

            <ChevronRight size={13} />

            <span className="text-[#7138F5]">Portfolio</span>
          </div>

          {/* Label */}
          <div className="flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-[#7138F5]" />

            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7138F5]">
              OUR CREATIVE WORK
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#101535] sm:text-4xl">
            Our Work,{" "}
            <span className="text-[#7138F5]">
              Your Inspiration.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-[#737B94]">
            A glimpse of the campaigns, brands and digital experiences
            we create to make businesses stand out.
          </p>

          {/* Single Project Count */}
          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#7138F5]" />

            <span className="text-xs font-bold text-[#7138F5]">
              {portfolioProjects.length} Creative Projects
            </span>
          </div>

        </div>
      </section>

      {/* =========================================
          PORTFOLIO GALLERY
      ========================================= */}

      <section
        id="portfolio-gallery"
        className="relative scroll-mt-20 bg-white px-5 pb-12 pt-5 sm:px-8 sm:pb-16"
      >
        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}
          <div className="mb-9">

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#7138F5]">
                SELECTED PROJECTS
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#101535] sm:text-4xl">
                Explore Our Work
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[#81869A]">
                A collection of ideas, designs and experiences created
                to make brands unforgettable.
              </p>
            </div>

          </div>

          {/* Category Filters */}
          <div className="mb-10 border-b border-[#EEEAF5] pb-5">

            <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

              {["ALL", ...portfolioCategories].map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`shrink-0 rounded-full border px-5 py-3 text-[10px] font-black tracking-wider transition-all duration-300 sm:px-6 ${
                      isActive
                        ? "border-[#7138F5] bg-[#7138F5] text-white shadow-[0_7px_20px_rgba(113,56,245,0.20)]"
                        : "border-[#EAE5F2] bg-white text-[#6E7085] hover:border-[#7138F5] hover:bg-[#F7F3FF] hover:text-[#7138F5]"
                    }`}
                  >
                    {category === "ALL" ? "ALL PROJECTS" : category}
                  </button>
                );
              })}

            </div>
          </div>

          {/* Project Grid */}
          {filteredProjects.length > 0 ? (

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {filteredProjects.map((project, index) => (

                <article
                  key={project.id}
                  onClick={() => setPreview(project)}
                  className="group cursor-pointer overflow-hidden rounded-[20px] border border-[#EAE6F0] bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#7138F5]/40 hover:shadow-[0_18px_45px_rgba(74,47,125,0.10)]"
                >

                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F5F1FA]">

                    <img
                      src={getProjectThumbnail(project)}
                      alt={project.title}
                      loading="lazy"
                      className={`h-full w-full transition duration-700 group-hover:scale-105 ${
                        project.fit === "contain"
                          ? "object-contain p-8"
                          : "object-cover"
                      }`}
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101535]/30 via-transparent to-transparent opacity-70 transition group-hover:opacity-100" />

                    {/* Category */}
                    <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/95 px-3 py-1.5 text-[9px] font-black tracking-wider text-[#7138F5] shadow-sm backdrop-blur">
                      {project.category}
                    </span>

                    {/* Play / Preview */}
                    <div className="absolute inset-0 flex items-center justify-center">

                      <div className="flex h-14 w-14 scale-75 items-center justify-center rounded-full bg-[#7138F5] text-white opacity-0 shadow-xl shadow-purple-900/20 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">

                        {project.type === "video" ? (
                          <Play size={22} fill="white" />
                        ) : (
                          <ArrowUpRight size={24} />
                        )}

                      </div>

                    </div>

                    {/* Project Number */}
                    <span className="absolute bottom-4 right-4 text-sm font-black text-white drop-shadow-md">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  {/* Project Information */}
                  <div className="p-5 sm:p-6">

                    <div className="flex items-center justify-between gap-3">

                      <div className="min-w-0">
                        <h3 className="truncate text-base font-black text-[#101535] transition group-hover:text-[#7138F5] sm:text-lg">
                          {project.title}
                        </h3>

                        <p className="mt-2 line-clamp-2 text-xs leading-6 text-[#85899A]">
                          {project.description ||
                            "Creative design and digital execution."}
                        </p>
                      </div>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5F0FF] text-[#7138F5] transition-all duration-300 group-hover:bg-[#7138F5] group-hover:text-white">
                        <ArrowUpRight size={19} />
                      </div>

                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-[#F0EDF4] pt-4">

                      <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#A0A0AE]">
                        BRANDTISERS CREATIVE
                      </span>

                      <span className="text-[10px] font-bold text-[#7138F5]">
                        VIEW PROJECT
                      </span>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            <div className="rounded-3xl bg-[#F8F6FF] px-5 py-24 text-center">

              <Sparkles
                size={30}
                className="mx-auto text-[#7138F5]"
              />

              <h3 className="mt-5 text-xl font-black text-[#101535]">
                More Creative Work Coming Soon
              </h3>

              <p className="mt-2 text-sm text-[#85899A]">
                We are working on adding more projects to this category.
              </p>

            </div>

          )}

        </div>
      </section>

      {/* =========================================
          BOTTOM CTA
      ========================================= */}

      <section className="relative overflow-hidden bg-[#F7F3FF] px-5 py-16 sm:px-8 sm:py-20">

        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#7138F5]/10 blur-[90px]" />

        <div className="relative mx-auto max-w-4xl text-center">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#7138F5] shadow-sm">
            <Sparkles size={22} />
          </div>

          <p className="mt-6 text-[10px] font-black uppercase tracking-[0.25em] text-[#7138F5]">
            HAVE A PROJECT IN MIND?
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#101535] sm:text-5xl">
            Let's Create Something

            <span className="block text-[#7138F5]">
              Remarkable Together.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#737B94]">
            Have an idea worth sharing? Let's turn your vision into
            something extraordinary.
          </p>

          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#7138F5] px-9 py-4 text-sm font-black text-white shadow-[0_10px_30px_rgba(113,56,245,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5926D8]"
          >
            Let's Talk

            <ArrowUpRight
              size={19}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </div>
      </section>

      {/* =========================================
          IMAGE / VIDEO PREVIEW MODAL
      ========================================= */}

      {preview && (

        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#101535]/90 p-4 backdrop-blur-md"
          onClick={() => setPreview(null)}
        >

          <button
            onClick={() => setPreview(null)}
            aria-label="Close preview"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white text-[#101535] transition hover:bg-[#7138F5] hover:text-white"
          >
            <X size={21} />
          </button>

          <div
            className="w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl"
            onClick={(event) => event.stopPropagation()}
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
                src={preview.image || getProjectThumbnail(preview)}
                alt={preview.title}
                className="max-h-[85vh] w-full object-contain"
              />

            )}

          </div>

        </div>

      )}

    </main>
  );
}
