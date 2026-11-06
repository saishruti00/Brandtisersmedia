
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ArrowRight, LockKeyhole } from "lucide-react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    category: "WEBSITE",
    domain: "glowbeauty.demo",
    title: "Glow Beauty — Skincare Store",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=1000&q=85",
    badge: "+250% Growth",
    stats: [{ value: "+250%", label: "Conversion Growth" }],
    tags: ["Beauty", "E-Commerce", "Website"],
    color: "#7138F5",
  },
  {
    id: "02",
    category: "E-COMMERCE",
    domain: "luxejewels.demo",
    title: "Luxe Jewels — Jewellery Store",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1000&q=85",
    badge: "Premium E-Commerce Store",
    stats: [
      { value: "500+", label: "Products" },
      { value: "24/7", label: "Support" },
      { value: "Global", label: "Reach" },
    ],
    tags: ["E-Commerce", "Jewellery", "Branding"],
    color: "#b58a4c",
  },
  {
    id: "03",
    category: "BRANDING",
    domain: "fitzone.demo",
    title: "FitZone — Fitness Platform",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000&q=85",
    badge: "Complete Fitness Ecosystem",
    stats: [
      { value: "10K+", label: "Active Users" },
      { value: "95%", label: "Retention" },
      { value: "4.8★", label: "Rating" },
    ],
    tags: ["Fitness", "Health", "Digital"],
    color: "#e84c91",
  },
];

export function Gallery({ onPlay }) {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".portfolio-card",
        {
          y: 65,
          opacity: 0,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={root}
className="relative scroll-mt-20 overflow-hidden bg-white pt-8 pb-8 sm:pt-12 sm:pb-10">      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8b8499]">
            CREATIVE WORK
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-[#101535] sm:text-5xl">
            Our Creative Work
            <span className="block text-[#7138F5]">
              Ideas That Drive Results.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#65718d] sm:text-lg">
            Explore our digital campaigns, creative designs, and web solutions
            crafted to strengthen brands and accelerate business growth.
          </p>
        </div>

        {/* Portfolio Grid - Reduced Width */}
        <div className="mx-auto grid w-full max-w-[1160px] gap-6 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.id}
              className="portfolio-card group overflow-hidden rounded-[22px] border border-[#dedbe5] bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#7138F5]/40 hover:shadow-[0_20px_55px_rgba(113,56,245,0.13)]"
            >

              {/* Browser Header */}
              <div className="flex h-12 items-center gap-2.5 border-b border-[#dedbe5] bg-[#f5f5f3] px-3">

                <div className="flex shrink-0 gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full border border-red-400 bg-[#ff6258]" />
                  <span className="h-2.5 w-2.5 rounded-full border border-yellow-500 bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full border border-green-500 bg-[#28c840]" />
                </div>

                <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-[#e2e2df] bg-white px-3 py-1.5">
                  <LockKeyhole
                    size={12}
                    className="shrink-0 text-emerald-500"
                  />
                  <span className="truncate text-xs font-semibold text-[#59636a]">
                    {project.domain}
                  </span>
                </div>

                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-[#20232e]"
                />
              </div>

              {/* Website Preview - Reduced Height */}
              <div className="relative h-[210px] overflow-hidden bg-[#f4f0f8] sm:h-[225px]">

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute right-3 top-3 flex items-center gap-2 rounded-full border border-emerald-700/30 bg-[#d4f7df] px-3 py-1.5 text-[11px] font-black tracking-wider text-[#176b3d] shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  LIVE
                </div>

              </div>

              {/* Project Details */}
              <div className="p-4 sm:p-5">

                <div className="flex items-center justify-between gap-3">
                  <span
                    className="text-[11px] font-black uppercase tracking-[0.12em]"
                    style={{ color: project.color }}
                  >
                    {project.category}
                  </span>

                  <span className="text-sm font-black text-[#c0c0b8]">
                    {project.id}
                  </span>
                </div>

                <h3 className="mt-3 min-h-[48px] text-lg font-black leading-snug text-[#171827]">
                  {project.title}
                </h3>

                {/* Project Highlight */}
                <div className="mt-3">
                  <span className="inline-flex rounded-full border border-[#252525] bg-[#fff176] px-3 py-1.5 text-xs font-black text-[#161616]">
                    {project.badge}
                  </span>
                </div>

                {/* Statistics */}
                <div className="mt-4 grid min-h-[78px] grid-cols-3 items-center gap-2 border-t border-dashed border-[#e7e4e0] pt-3">

                  {project.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center"
                    >
                      <p
                        className="text-lg font-black"
                        style={{ color: project.color }}
                      >
                        {stat.value}
                      </p>

                      <p className="mt-1 text-[10px] font-semibold leading-snug text-[#92958f]">
                        {stat.label}
                      </p>
                    </div>
                  ))}

                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#e4e5df] bg-[#f6f7f3] px-3 py-1 text-[11px] font-semibold text-[#64716a]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* View All Projects */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/portfolio"
            className="group inline-flex items-center justify-center gap-4 rounded-2xl border border-[#7138F5] bg-white px-8 py-4 text-sm font-black text-[#171827] shadow-[0_5px_0_rgba(113,56,245,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#7138F5] hover:text-white"
          >
            View All Projects

            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}
