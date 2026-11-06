
import {
  Users, Search, Target, PenTool, Video,
  Globe, BarChart3, Megaphone, ArrowUpRight
} from "lucide-react";
import { Link } from "react-router-dom";

import {
  PageHero, SectionHeading, FeatureCard, PageCTA
} from "../components/PageUI";

const services = [
  {
    icon: Users,
    title: "Social Media Management",
    description: "Build a strong, consistent social presence and meaningful audience connections.",
    items: ["Content Planning", "Social Media Strategy", "Account Management"]
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Improve search visibility and help potential customers discover your business.",
    items: ["Keyword Research", "On-Page SEO", "SEO Optimization"]
  },
  {
    icon: Target,
    title: "Performance Marketing",
    description: "Run targeted digital campaigns aligned with your business objectives.",
    items: ["Meta Ads", "Google Ads", "Campaign Optimization"]
  },
  {
    icon: PenTool,
    title: "Graphic Designing",
    description: "Create compelling brand visuals that communicate clearly and consistently.",
    items: ["Social Media Creatives", "Brand Graphics", "Advertising Designs"]
  },
  {
    icon: Video,
    title: "Video Editing & Motion Graphics",
    description: "Turn ideas and footage into engaging visual stories for digital platforms.",
    items: ["Reels & Shorts", "Promotional Videos", "Motion Graphics"]
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Build responsive digital experiences that represent your business professionally.",
    items: ["Business Websites", "Landing Pages", "Responsive Design"]
  },
  {
    icon: BarChart3,
    title: "Digital Strategy & Analytics",
    description: "Use data and insights to make more informed marketing decisions.",
    items: ["Performance Tracking", "Marketing Insights", "Growth Planning"]
  },
  {
    icon: Megaphone,
    title: "Branding & Creative Campaigns",
    description: "Develop a distinct brand presence through strategy and creative communication.",
    items: ["Brand Identity", "Campaign Concepts", "Creative Direction"]
  }
];

export default function Services() {
  return (
    <main className="bg-white text-[#101535]">
      <PageHero
        eyebrow="Our Expertise"
        title="Complete Digital Solutions."
        highlight="One Growth Partner."
        description="From strategy to execution, discover digital services designed to strengthen your brand and support business growth."
      />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What We Do"
            title="Services Built Around Your Goals"
            description="A connected approach to creativity, technology, marketing, and measurable performance."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <FeatureCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6FF] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Approach"
            title="From Ideas to Impact"
          />

          <div className="grid gap-5 md:grid-cols-4">
            {[
              ["01", "Discover", "Understand your brand, audience, and objectives."],
              ["02", "Strategize", "Develop a practical plan aligned with your goals."],
              ["03", "Execute", "Bring campaigns and creative ideas to life."],
              ["04", "Optimize", "Review performance and improve continuously."]
            ].map(([number, title, description]) => (
              <div key={number} className="rounded-3xl bg-white p-7">
                <span className="text-5xl font-black text-[#D9C9FF]">
                  {number}
                </span>
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-[#626B85]">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#7138F5] px-8 py-4 font-bold text-white transition hover:bg-[#5F25DE]"
            >
              Discuss Your Requirements <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <PageCTA
        title="Your Next Growth Chapter Starts Here."
        description="Tell us about your business and let's explore the digital solutions that fit your goals."
      />
    </main>
  );
}
