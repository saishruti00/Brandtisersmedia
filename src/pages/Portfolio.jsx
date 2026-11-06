
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import {
  PageHero, SectionHeading, PageCTA
} from "../components/PageUI";

const categories = [
  "All Projects",
  "Social Media",
  "Branding",
  "Video Production",
  "Web Design",
  "Performance Marketing"
];

const projects = [
  {
    title: "Social Media Campaign",
    category: "Social Media",
    description: "Creative content and social media campaign presentation.",
    gradient: "from-[#E8DCFF] to-[#F7EFFF]"
  },
  {
    title: "Brand Identity Design",
    category: "Branding",
    description: "Visual identity and branded communication concepts.",
    gradient: "from-[#DDEBFF] to-[#EDF5FF]"
  },
  {
    title: "Promotional Video",
    category: "Video Production",
    description: "Cinematic brand storytelling and promotional content.",
    gradient: "from-[#FFE5D7] to-[#FFF4E9]"
  },
  {
    title: "Business Website",
    category: "Web Design",
    description: "Responsive website and digital experience design.",
    gradient: "from-[#DDF8F1] to-[#F1FFFA]"
  },
  {
    title: "Digital Advertising Campaign",
    category: "Performance Marketing",
    description: "Audience-focused digital advertising creative.",
    gradient: "from-[#FBE1EE] to-[#FFF2F8]"
  },
  {
    title: "Creative Content Series",
    category: "Social Media",
    description: "A collection of visual content for social platforms.",
    gradient: "from-[#EAE5FF] to-[#F8F5FF]"
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <main className="bg-white text-[#101535]">
      <PageHero
        eyebrow="Our Portfolio"
        title="Ideas Into Action."
        highlight="Creativity Into Impact."
        description="Explore our creative capabilities across branding, digital campaigns, design, and video production."
      />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Selected Work"
            title="Explore Our Creative Work"
            description="A portfolio layout ready to showcase your real projects and case studies."
          />

          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                  activeCategory === category
                    ? "border-[#7138F5] bg-[#7138F5] text-white"
                    : "border-[#E9E3F5] bg-white text-[#626B85] hover:border-[#7138F5] hover:text-[#7138F5]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-[26px] border border-[#E9E3F5] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${project.gradient} p-8`}>
                  <div className="flex h-full w-full items-center justify-center rounded-2xl border border-white/80 bg-white/40 text-center backdrop-blur-sm">
                    <span className="text-2xl font-black tracking-tight text-[#101535]/70">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#7138F5]">
                    {project.category}
                  </span>
                  <h3 className="mt-3 text-xl font-black">
                    {project.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#626B85]">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#7138F5] px-8 py-4 font-bold text-white transition hover:bg-[#5F25DE]"
            >
              Start Your Project <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <PageCTA
        title="Your Brand Could Be Our Next Project."
        description="Have an idea in mind? Let's work together to create something meaningful."
      />
    </main>
  );
}
