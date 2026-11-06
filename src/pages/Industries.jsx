
import {
  Building2, ShoppingBag, HeartPulse, GraduationCap,
  Factory, Plane, BriefcaseBusiness, Home, ArrowUpRight
} from "lucide-react";
import { Link } from "react-router-dom";

import {
  PageHero, SectionHeading, FeatureCard, PageCTA
} from "../components/PageUI";

const industries = [
  {
    icon: Building2,
    title: "Real Estate",
    description: "Digital campaigns and creative marketing for residential and commercial property brands."
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce & Retail",
    description: "Product-focused content, marketplace creatives, and customer acquisition strategies."
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Wellness",
    description: "Clear and professional communication for healthcare and wellness businesses."
  },
  {
    icon: GraduationCap,
    title: "Education & Training",
    description: "Digital outreach and engaging content for educational institutions and training providers."
  },
  {
    icon: Factory,
    title: "Manufacturing & Technology",
    description: "Product storytelling and digital positioning for technical and industrial businesses."
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    description: "Creative experiences and promotional campaigns for travel and hospitality brands."
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Services",
    description: "Brand positioning and lead-focused digital communication for service businesses."
  },
  {
    icon: Home,
    title: "Lifestyle & Consumer Brands",
    description: "Distinctive content and campaigns designed to connect with modern consumers."
  }
];

export default function Industries() {
  return (
    <main className="bg-white text-[#101535]">
      <PageHero
        eyebrow="Industries We Serve"
        title="Different Industries."
        highlight="One Creative Mindset."
        description="Every industry has its own audience and challenges. We build digital strategies that reflect those differences."
      />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Industry Expertise"
            title="Solutions Across Sectors"
            description="Connecting industry understanding with creative thinking and digital execution."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <FeatureCard key={industry.title} {...industry} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6FF] px-5 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#7138F5]">
              Tailored Strategies
            </p>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              Your Industry Is Unique.
              <span className="block text-[#7138F5]">
                Your Strategy Should Be Too.
              </span>
            </h2>
            <p className="mt-6 leading-8 text-[#626B85]">
              We understand that different businesses require
              different approaches. Our work starts with understanding
              your audience, competitive environment, and business goals.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#7138F5] px-7 py-4 font-bold text-white"
            >
              Discuss Your Industry <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              ["01", "Industry Research"],
              ["02", "Audience Insights"],
              ["03", "Creative Strategy"],
              ["04", "Performance Focus"]
            ].map(([number, label]) => (
              <div key={number} className="flex min-h-44 flex-col justify-between rounded-3xl bg-white p-7 shadow-sm">
                <span className="text-4xl font-black text-[#7138F5]">
                  {number}
                </span>
                <h3 className="font-bold">{label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Let's Grow Your Industry Presence."
        description="Connect with our team to explore a digital approach suited to your business."
      />
    </main>
  );
}
