
import { ArrowUpRight, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export function PageHero({ eyebrow, title, highlight, description }) {
  return (
    <section className="relative overflow-hidden bg-[#FCFAFF] px-5 py-20 text-center text-[#101535] sm:py-28">
      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-amber-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <span className="inline-flex rounded-full border border-purple-200 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7138F5] shadow-sm">
          {eyebrow}
        </span>

        <h1 className="mt-8 text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          {title}
          <span className="block text-[#7138F5]">{highlight}</span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#626B85] sm:text-lg">
          {description}
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#7138F5] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1 hover:bg-[#5F25DE]"
          >
            Let's Talk <ArrowUpRight size={18} />
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-7 py-4 text-sm font-bold text-[#101535] transition hover:border-[#7138F5]"
          >
            Explore Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#7138F5]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black tracking-tight text-[#101535] sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-8 text-[#626B85]">
          {description}
        </p>
      )}
    </div>
  );
}

export function FeatureCard({ icon: Icon, title, description, items }) {
  return (
    <article className="group rounded-[26px] border border-[#E9E3F5] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100/70">
      <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F2EBFF] text-[#7138F5] transition group-hover:bg-[#7138F5] group-hover:text-white">
        <Icon size={27} />
      </div>

      <h3 className="mb-3 text-xl font-extrabold text-[#101535]">
        {title}
      </h3>
      <p className="leading-7 text-[#626B85]">{description}</p>

      {items && (
        <ul className="mt-6 space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-[#34405C]">
              <CheckCircle2 size={16} className="shrink-0 text-[#7138F5]" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export function PageCTA({ title, description }) {
  return (
    <section className="bg-[#FCFAFF] px-5 py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-[#101535] px-7 py-16 text-center text-white sm:px-12">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#7138F5]/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#7138F5]/20 blur-3xl" />

        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-3xl font-black sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-8 text-[#C4C8DB]">
            {description}
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#7138F5] px-8 py-4 font-bold text-white transition hover:bg-[#8654FF]"
          >
            Start a Conversation <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
