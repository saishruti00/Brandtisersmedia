import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Target,
  Eye,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Play,
  Check,
  Globe2,
  MousePointer2,
  Camera,
  Search,
  Code2,
  Layers3,
  Zap,
  ArrowDown,
  Building2,
  MapPin,
  Clock,
  Compass,
  Radio,
  Flame,
  Award,
  CheckCircle2,
  Gauge,
  Cpu,
  Layers,
  Sliders,
  Power,
  Activity,
} from "lucide-react";

/* =========================================
   CONFIGURATION & MEDIA
========================================= */

const PURPLE = "#7138F5";
const DARK = "#101535";
const EASE = [0.22, 1, 0.36, 1];

const MEDIA = {
  heroMain:
    "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1400",
  storyOne:
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
  galleryOne:
    "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
  galleryTwo:
    "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1200",
  galleryThree:
    "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200",
  galleryFour:
    "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200",
  galleryFive:
    "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

/* =========================================
   DATA FOR INTACT SECTIONS
========================================= */

const VALUES = [
  {
    icon: Target,
    title: "Strategy First",
    text: "We begin with clarity, understanding your goals before creating a single campaign.",
    color: "#7138F5",
    bg: "#F1EAFF",
    number: "01",
  },
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    text: "Original ideas and meaningful storytelling that make brands memorable.",
    color: "#D98A21",
    bg: "#FFF2DE",
    number: "02",
  },
  {
    icon: TrendingUp,
    title: "Performance Focus",
    text: "Every decision is guided by meaningful outcomes and continuous improvement.",
    color: "#159B75",
    bg: "#E6F8EF",
    number: "03",
  },
  {
    icon: HeartHandshake,
    title: "True Partnership",
    text: "We collaborate closely with businesses and grow together as one team.",
    color: "#E44891",
    bg: "#FFEAF3",
    number: "04",
  },
  {
    icon: Eye,
    title: "Transparency",
    text: "Open conversations, clear reporting and straightforward communication.",
    color: "#3478DB",
    bg: "#EAF2FF",
    number: "05",
  },
  {
    icon: ShieldCheck,
    title: "Quality Delivery",
    text: "Thoughtful details, consistency and care across every digital touchpoint.",
    color: "#8A54C8",
    bg: "#F3EAFE",
    number: "06",
  },
];

const PROCESS = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, audience, competitors and opportunities.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We develop a clear direction built around your growth objectives.",
    icon: Target,
  },
  {
    number: "03",
    title: "Create & Launch",
    description:
      "Our creative and performance teams turn ideas into live campaigns.",
    icon: Zap,
  },
  {
    number: "04",
    title: "Measure & Scale",
    description:
      "We study performance, optimize execution and identify the next opportunity.",
    icon: TrendingUp,
  },
];

const GALLERY = [
  {
    src: MEDIA.galleryOne,
    label: "Ideas in Motion",
    category: "Creative Collaboration",
  },
  {
    src: MEDIA.galleryTwo,
    label: "Beyond the Brief",
    category: "Teamwork",
  },
  {
    src: MEDIA.galleryThree,
    label: "Building Together",
    category: "Strategy",
  },
  {
    src: MEDIA.galleryFour,
    label: "Every Detail Matters",
    category: "Execution",
  },
  {
    src: MEDIA.galleryFive,
    label: "Made to Connect",
    category: "Digital Experiences",
  },
];

/* =========================================
   REUSABLE PRIMITIVES
========================================= */

function Reveal({ children, className = "", delay = 0, y = 24 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

function SectionEyebrow({ children, invert = false }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          invert ? "bg-[#FF9F1C]" : "bg-[#7138F5]"
        }`}
      />
      <span
        className={`font-mono text-[11px] font-black uppercase tracking-[0.2em] ${
          invert ? "text-[#D8B4FE]" : "text-[#7138F5]"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

/* ============================================================
   ANIMATED GROWTH ENGINE: BESPOKE VECTOR MACHINERY (Not AI)
============================================================ */

function GrowthMachinery({ hyperDrive }) {
  const speedMultiplier = hyperDrive ? 0.35 : 1;

  return (
    <div className="relative mx-auto flex h-[420px] w-full max-w-[540px] items-center justify-center select-none sm:h-[480px]">
      {/* Background Blueprint Grid Lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-35 stroke-[#e0d3f8]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="machineryGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#machineryGrid)" />
      </svg>

      {/* Energy Flow Circuits (Animated SVG Conduits) */}
      <svg
        viewBox="0 0 500 500"
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="laserBeamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7138F5" />
            <stop offset="50%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#FF9F1C" />
          </linearGradient>
        </defs>

        {/* Conduit to Top-Left: Creative Satellite */}
        <path
          d="M 250 250 L 140 130"
          fill="none"
          stroke="#d8c5fa"
          strokeWidth="2"
          strokeDasharray="4 6"
        />
        <motion.circle
          cx="250"
          cy="250"
          r="4"
          fill="#7138F5"
          animate={{ cx: [250, 140], cy: [250, 130] }}
          transition={{
            repeat: Infinity,
            duration: 1.8 * speedMultiplier,
            ease: "linear",
          }}
        />

        {/* Conduit to Top-Right: Funnel Satellite */}
        <path
          d="M 250 250 L 370 120"
          fill="none"
          stroke="#d8c5fa"
          strokeWidth="2"
          strokeDasharray="4 6"
        />
        <motion.circle
          cx="250"
          cy="250"
          r="4"
          fill="#FF9F1C"
          animate={{ cx: [250, 370], cy: [250, 120] }}
          transition={{
            repeat: Infinity,
            duration: 1.5 * speedMultiplier,
            ease: "linear",
          }}
        />

        {/* Conduit to Bottom-Center: Revenue Gauge Satellite */}
        <path
          d="M 250 250 L 250 380"
          fill="none"
          stroke="#d8c5fa"
          strokeWidth="2"
          strokeDasharray="4 6"
        />
        <motion.circle
          cx="250"
          cy="250"
          r="4"
          fill="#00e5bd"
          animate={{ cy: [250, 380] }}
          transition={{
            repeat: Infinity,
            duration: 1.4 * speedMultiplier,
            ease: "linear",
          }}
        />
      </svg>

      {/* CENTRAL REACTOR CORE: Dual Reverse-Rotating Gears */}
      <div className="relative z-10 flex h-48 w-48 items-center justify-center sm:h-56 sm:w-56">
        {/* Outer Ring Spoke Gear */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 20 * speedMultiplier,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full border-2 border-dashed border-[#7138F5] shadow-[0_0_30px_rgba(113,56,245,0.18)]"
        />

        {/* Reverse Middle Orbital Compass */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: 12 * speedMultiplier,
            ease: "linear",
          }}
          className="absolute inset-3 rounded-full border border-[#FF9F1C]/60"
        >
          {/* Orbital Satellite Nodes */}
          <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border border-white bg-[#7138F5]" />
          <span className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border border-white bg-[#FF9F1C]" />
        </motion.div>

        {/* Inner Power Dynamo */}
        <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-[#7138F5] via-[#8B5CF6] to-[#A855F7] text-white shadow-[0_12px_40px_rgba(113,56,245,0.4)] sm:h-36 sm:w-36">
          <motion.div
            animate={{
              scale: hyperDrive ? [1, 1.15, 1] : [1, 1.05, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: hyperDrive ? 1.2 : 3,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center text-center"
          >
            <Cpu size={32} className="text-[#FFD166]" />
            <span className="mt-1 font-mono text-[9px] font-black uppercase tracking-widest">
              REACTOR CORE
            </span>
            <span className="font-mono text-[11px] font-bold text-white/90">
              {hyperDrive ? "100% THRUST" : "60% NOMINAL"}
            </span>
          </motion.div>
        </div>
      </div>

      {/* SATELLITE MODULE 01: CREATIVE PULSE (Top-Left) */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute left-2 top-4 z-20 w-36 rounded-2xl border border-[#e8ddf7] bg-white/95 p-3 shadow-[0_8px_24px_rgba(20,20,50,0.08)] backdrop-blur-md sm:left-6 sm:w-40 sm:p-3.5"
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] font-black uppercase text-[#7138F5]">
            01 / CREATIVE
          </span>
          <Camera size={13} className="text-[#7138F5]" />
        </div>
        <p className="mt-1 text-xs font-black text-[#101535]">Motion Lab</p>
        {/* Real-time Frequency Waveform */}
        <div className="mt-2.5 flex items-end gap-1 h-3.5">
          {[0.4, 0.9, 0.3, 1, 0.6, 0.8, 0.4].map((h, i) => (
            <motion.span
              key={i}
              animate={{ scaleY: hyperDrive ? [0.2, h, 0.2] : [0.3, h * 0.7, 0.3] }}
              transition={{
                repeat: Infinity,
                duration: (0.5 + i * 0.1) * speedMultiplier,
                ease: "easeInOut",
              }}
              className="flex-1 origin-bottom rounded-full bg-[#7138F5]"
              style={{ height: "100%" }}
            />
          ))}
        </div>
      </motion.div>

      {/* SATELLITE MODULE 02: HIGH-INTENT FUNNEL (Top-Right) */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        className="absolute right-2 top-2 z-20 w-36 rounded-2xl border border-[#e8ddf7] bg-white/95 p-3 shadow-[0_8px_24px_rgba(20,20,50,0.08)] backdrop-blur-md sm:right-6 sm:w-40 sm:p-3.5"
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] font-black uppercase text-[#FF9F1C]">
            02 / FUNNEL
          </span>
          <Target size={13} className="text-[#FF9F1C]" />
        </div>
        <p className="mt-1 text-xs font-black text-[#101535]">CRO Matrix</p>
        {/* Tiered Drop Gauge */}
        <div className="mt-2 space-y-1">
          <div className="h-1.5 w-full rounded-full bg-[#FF9F1C]/20 overflow-hidden">
            <div className="h-full w-full bg-[#FF9F1C]" />
          </div>
          <div className="h-1.5 w-[75%] rounded-full bg-[#FF9F1C]/20 overflow-hidden">
            <div className="h-full w-full bg-[#FF9F1C]" />
          </div>
          <div className="h-1.5 w-[45%] rounded-full bg-[#7138F5]/30 overflow-hidden">
            <div className="h-full w-full bg-[#7138F5]" />
          </div>
        </div>
      </motion.div>

      {/* SATELLITE MODULE 03: VELOCITY GAUGE (Bottom-Center) */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute bottom-2 left-1/2 z-20 -translate-x-1/2 w-48 rounded-2xl border border-[#e8ddf7] bg-white/95 p-3 shadow-[0_8px_24px_rgba(20,20,50,0.08)] backdrop-blur-md sm:bottom-4 sm:w-52 sm:p-3.5"
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] font-black uppercase text-emerald-600">
            03 / REVENUE VELOCITY
          </span>
          <Gauge size={13} className="text-emerald-600" />
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-mono text-lg font-black text-[#101535]">
            {hyperDrive ? "4.6x" : "3.8x"} ROAS
          </span>
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-700">
            {hyperDrive ? "MAX OVERDRIVE" : "VERIFIED"}
          </span>
        </div>
      </motion.div>
    </div>
  );
}

/* ============================================================
   1. HERO SECTION (Custom Animated Machinery Blueprint)
============================================================ */

function AboutHero() {
  const [hyperDrive, setHyperDrive] = useState(false);
  const [liveClock, setLiveClock] = useState("");
  const reduce = useReducedMotion();

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      setLiveClock(
        d.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-white pb-16 pt-10 sm:pb-24 sm:pt-14 lg:pb-28 lg:pt-16">
      {/* Precision Corner Crosshair Grid */}
      <div className="pointer-events-none absolute inset-x-6 top-8 flex justify-between font-mono text-[10px] text-[#A898C8]/60 select-none sm:inset-x-10">
        <span>+ 28.6139° N, 77.2090° E</span>
        <span>DELHI NCR LAB // OPS 01</span>
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        
        {/* LIVE TELEMETRY HEADER */}
        <Reveal>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#e8ddf7] pb-4 pt-4">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-emerald-500">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
              </span>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#101535]">
                Independent Growth & Creative Foundry
              </span>
            </div>

            <div className="flex items-center gap-4 font-mono text-xs font-semibold text-[#626B85]">
              <span className="flex items-center gap-1.5">
                <Clock size={13} className="text-[#7138F5]" />
                {liveClock || "12:00:00 PM IST"}
              </span>
              <span>•</span>
              <span className="text-emerald-600 font-bold">
                Direct Partner Sprints
              </span>
            </div>
          </div>
        </Reveal>

        {/* HERO MAIN STAGE: EDITORIAL LEFT + MACHINERY BLUEPRINT RIGHT */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-6">
            <Reveal delay={0.06}>
              <SectionEyebrow>No Clichés. Pure Velocity.</SectionEyebrow>

              <h1 className="mt-4 text-[38px] font-black leading-[1.04] tracking-[-0.045em] text-[#101535] sm:text-[54px] md:text-[62px] lg:text-[70px]">
                We don't guess. We{" "}
                <span className="bg-gradient-to-r from-[#7138F5] via-[#A855F7] to-[#F46B68] bg-clip-text text-transparent">
                  engineer market dominance.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#515b7c] sm:text-lg">
                Brandtisers Media is not an agency of passive slide decks. We are a
                growth apparatus combining high-velocity video production, headless
                web engineering, and capital-protected ad buying.
              </p>
            </Reveal>

            {/* INTERACTIVE ENGINE MODE TOGGLE */}
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setHyperDrive(!hyperDrive)}
                  className={`group inline-flex items-center gap-2.5 rounded-full border px-5 py-3 text-xs font-black uppercase tracking-wider transition-all sm:text-sm ${
                    hyperDrive
                      ? "border-[#FF9F1C] bg-[#FF9F1C] text-white shadow-[0_4px_20px_rgba(255,159,28,0.4)]"
                      : "border-[#7138F5] bg-[#7138F5] text-white shadow-[0_4px_20px_rgba(113,56,245,0.35)] hover:bg-[#5f22e6]"
                  }`}
                >
                  <Power size={15} className={hyperDrive ? "animate-pulse" : ""} />
                  <span>
                    {hyperDrive ? "⚡ Hyperdrive: 100% Output" : "Ignite Engine Boost"}
                  </span>
                </button>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[#ded5ec] bg-white px-5 py-3 text-xs font-bold text-[#101535] shadow-xs transition hover:border-[#7138F5] hover:text-[#7138F5] sm:text-sm"
                >
                  <span>Book Partner Audit</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </Reveal>

            {/* OPERATIONAL TELEMETRY BADGES */}
            <Reveal delay={0.24}>
              <div className="mt-10 grid grid-cols-3 gap-3 border-t border-[#e8ddf7] pt-5 font-mono">
                <div>
                  <p className="text-xs font-bold uppercase text-[#7c86a2]">Sprint Cycle</p>
                  <p className="mt-1 text-sm font-black text-[#101535]">14 Days</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-[#7c86a2]">Senior Leads</p>
                  <p className="mt-1 text-sm font-black text-[#7138F5]">100% Direct</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-[#7c86a2]">Attributed ROAS</p>
                  <p className="mt-1 text-sm font-black text-[#101535]">3.8x Avg</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: BESPOKE ANIMATED GROWTH APPARATUS */}
          <div className="lg:col-span-6">
            <Reveal delay={0.15}>
              <div className="relative rounded-[32px] border-2 border-[#e8ddf7] bg-gradient-to-b from-[#FAF6FF] to-white p-4 shadow-[0_20px_60px_rgba(113,56,245,0.08)] sm:p-6">
                {/* Engine Mode Pill */}
                <div className="flex items-center justify-between border-b border-[#e8ddf7] pb-3 text-xs font-bold text-[#626B85]">
                  <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-[#7138F5]">
                    <Activity size={13} />
                    Apparatus State: {hyperDrive ? "TURBO OVERCLOCK" : "CALIBRATED"}
                  </span>
                  <span className="font-mono text-[10px] text-[#A898C8]">
                    FIG. 01 // GROWTH RIG
                  </span>
                </div>

                {/* THE MACHINERY ILLUSTRATION */}
                <GrowthMachinery hyperDrive={hyperDrive} />
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}

/* ============================================================
   2. CREATIVE CREED MARQUEE
============================================================ */

function CreativeMarquee() {
  const reduce = useReducedMotion();
  const manifesto = [
    "HIGH-INTENT FUNNELS",
    "ZERO VANITY METRICS",
    "VERIFIED PIPELINE",
    "FULL-THROTTLE ROI",
    "CONVERSION ARCHITECTURE",
    "AUDACIOUS CREATIVE",
  ];

  return (
    <div className="overflow-hidden border-y border-[#e8ddf7] bg-[#FAF6FF] py-4">
      <motion.div
        className="flex w-max items-center gap-10"
        animate={reduce ? {} : { x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {[...manifesto, ...manifesto, ...manifesto].map((item, i) => (
          <div key={`${item}-${i}`} className="flex shrink-0 items-center gap-10">
            <span className="font-mono text-xs font-black tracking-[0.2em] text-[#101535]">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#7138F5]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ============================================================
   3. EDITORIAL STORY SECTION
============================================================ */

function OurStory() {
  return (
    <section id="our-story" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionEyebrow>Origin & Philosophy</SectionEyebrow>
              <h2 className="mt-5 text-3xl font-black leading-[1.08] tracking-[-0.04em] text-[#101535] sm:text-4xl lg:text-5xl">
                Born out of frustration with vanity metrics and empty monthly retainers.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <blockquote className="my-8 rounded-2xl border-l-4 border-[#7138F5] bg-[#FAF6FF] p-6 text-base italic leading-relaxed text-[#101535] sm:text-lg">
                “Marketing shouldn't feel like burning money in a dark room hoping
                someone notices. It should operate like a predictable, self-funding
                growth engine.”
              </blockquote>

              <p className="text-sm leading-relaxed text-[#515b7c] sm:text-base">
                Brandtisers Media was founded on a simple realization: businesses
                were tired of agencies bragging about clicks and impressions while the
                cash register remained silent.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[#515b7c] sm:text-base">
                We stripped away the fluff, the endless middleman meetings, and the
                glossy slide decks. Instead, we built a lean, high-velocity studio
                obsessed with consumer psychology, creative craft, and verified sales pipeline.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { title: "Capital Respect", desc: "Treating client ad spend with fiduciary care." },
                  { title: "Creative Velocity", desc: "Rapid iterations that out-test market competition." },
                  { title: "Permanent Equity", desc: "Building assets that keep driving inquiries for years." },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-[#e8ddf7] p-4">
                    <CheckCircle2 size={18} className="text-[#7138F5]" />
                    <h4 className="mt-2 text-sm font-black text-[#101535]">{item.title}</h4>
                    <p className="mt-1 text-xs text-[#626B85]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2} className="relative">
              <div className="relative overflow-hidden rounded-[24px] border border-[#e8ddf7]">
                <img
                  src={MEDIA.storyOne}
                  alt="Brandtisers Media Strategy Discussion"
                  className="h-[380px] w-full object-cover sm:h-[460px]"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 p-4 shadow-sm backdrop-blur-md">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#7138F5]">
                    Studio Workshop // Session 48
                  </p>
                  <p className="mt-1 text-xs font-black text-[#101535]">
                    Dissecting customer funnels before spending a single dollar.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   4. MISSION & VISION: THE CONTRAST MANIFESTO
============================================================ */

function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-[#FAF6FF] py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal className="rounded-[28px] border border-[#ded5ec] bg-[#101535] p-8 text-white sm:p-12">
            <SectionEyebrow invert>01 // The Mandate</SectionEyebrow>
            <h3 className="mt-5 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
              Kill vanity metrics. Engineer predictable revenue funnels.
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-[#D8B4FE]/80 sm:text-base">
              Our mission is to arm ambitious brands with digital systems so
              effective, they permanently alter their market positioning. We build
              campaigns that pay for themselves.
            </p>
            <div className="mt-8 flex items-center gap-3 font-mono text-xs text-[#FFD166]">
              <Sparkles size={14} />
              <span>Zero-Fluff Fiduciary Standard</span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-[28px] border border-[#ded5ec] bg-white p-8 sm:p-12">
            <SectionEyebrow>02 // The Horizon</SectionEyebrow>
            <h3 className="mt-5 text-2xl font-black tracking-tight text-[#101535] sm:text-3xl lg:text-4xl">
              The benchmark agency for ROI-led digital dominance.
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-[#626B85] sm:text-base">
              To be the premier growth partner in National Capital Region and beyond,
              recognized by the tangible market valuation created for our partners.
            </p>
            <div className="mt-8 flex items-center gap-3 font-mono text-xs text-[#7138F5]">
              <Award size={14} />
              <span>Independent Growth Standard</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   5. EXPERTISE DIRECTORY
============================================================ */

function Expertise() {
  const [activeTab, setActiveTab] = useState(0);

  const capabilities = [
    {
      category: "Paid Acquisition",
      title: "Meta & Google Ads Engineering",
      desc: "Laser-targeted paid search and social campaigns optimized strictly for qualified revenue pipelines.",
      metrics: "3.8x Avg ROAS",
      icon: Target,
      deliverables: ["Full Funnel Retargeting", "Bid Automation", "Creative Variations", "ROAS Scaling"],
    },
    {
      category: "Organic Dominance",
      title: "Technical SEO & GMB Domination",
      desc: "Capturing high-intent commercial searches in NCR and nationwide without recurring media spend.",
      metrics: "Top 3 Rankings",
      icon: Search,
      deliverables: ["Technical Audit", "Entity SEO", "Local Map Pack", "Content Architecture"],
    },
    {
      category: "Conversion Infrastructure",
      title: "High-Velocity Web & Portal Dev",
      desc: "Ultra-fast headless architectures built for instant lead capture, friction-free UX, and high trust.",
      metrics: "Sub-Second Load",
      icon: Code2,
      deliverables: ["React / Next.js", "Figma Design Systems", "CRO Testing", "Lead Automation"],
    },
    {
      category: "Brand Authority",
      title: "Creative Storytelling & Production",
      desc: "Motion graphics, high-impact video reels, and brand positioning designed to make companies memorable.",
      metrics: "Scroll-Stopping",
      icon: Camera,
      deliverables: ["Short-form Video", "Brand Systems", "Motion Assets", "Ad Creatives"],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <SectionEyebrow>Studio Disciplines</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#101535] sm:text-4xl lg:text-5xl">
            Integrated disciplines. One compounding growth apparatus.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <Reveal
                key={cap.title}
                delay={i * 0.08}
                className="group flex flex-col justify-between rounded-[24px] border border-[#e8ddf7] bg-[#FAF6FF] p-6 transition-all duration-300 hover:border-[#7138F5] hover:bg-white hover:shadow-lg"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#7138F5] shadow-xs group-hover:bg-[#7138F5] group-hover:text-white transition-colors">
                    <Icon size={20} />
                  </div>
                  <p className="mt-5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#7c86a2]">
                    {cap.category}
                  </p>
                  <h3 className="mt-1 text-lg font-black text-[#101535]">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#626B85]">
                    {cap.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cap.deliverables.map((d) => (
                      <span key={d} className="rounded-md bg-white border border-[#e8ddf7] px-2 py-0.5 text-[10px] font-semibold text-[#101535]">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-[#ded5ec] pt-4 font-mono text-xs font-black text-[#7138F5]">
                  {cap.metrics}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   6. PROCESS TIMELINE (100% INTACT AS REQUESTED - IMAGE 1)
============================================================ */

function ProcessTimeline() {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 25%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 65,
    damping: 24,
    mass: 0.6,
  });

  const desktopPoints = [
    { x: 100, y: 385 },
    { x: 390, y: 310 },
    { x: 680, y: 205 },
    { x: 970, y: 75 },
  ];

  const graphPath =
    "M 100 385 C 230 385 250 310 390 310 S 555 205 680 205 S 855 75 970 75";

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F8F6FF] px-5 py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-[#7138F5]/[0.05] blur-[110px]" />
      <div className="pointer-events-none absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-[#B995FF]/[0.09] blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center lg:mb-16">
          <SectionEyebrow>Our Approach</SectionEyebrow>
          <h2 className="mt-4 text-[34px] font-black leading-[1.12] tracking-[-0.045em] text-[#101535] sm:text-[44px] lg:text-[54px]">
            From First Idea{" "}
            <span className="bg-gradient-to-r from-[#7138F5] via-[#965BFF] to-[#C184FF] bg-clip-text text-transparent">
              To Real Impact.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-[#626B85] sm:text-base">
            A clear, collaborative process that transforms business goals into thoughtful digital execution.
          </p>
        </div>

        {/* DESKTOP GRAPH */}
        <div className="relative hidden lg:block">
          <div className="relative h-[660px] overflow-hidden rounded-[36px] border border-[#E9E1FA] bg-white/70 shadow-[0_25px_80px_rgba(45,25,100,0.04)]">
            <div
              className="pointer-events-none absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "linear-gradient(#EDE7FA 1px, transparent 1px), linear-gradient(90deg, #EDE7FA 1px, transparent 1px)",
                backgroundSize: "65px 65px",
                maskImage:
                  "linear-gradient(to bottom, transparent, black 20%, black 85%, transparent)",
              }}
            />

            <div className="absolute left-10 top-9 z-10">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#7138F5]">
                Our Working Process
              </p>
              <h3 className="mt-2 text-xl font-black text-[#101535]">
                A connected journey from strategy to scale.
              </h3>
            </div>

            <svg
              viewBox="0 0 1070 500"
              preserveAspectRatio="none"
              className="absolute bottom-[70px] left-[4%] h-[470px] w-[92%] overflow-visible"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="processLineGradient"
                  x1="0"
                  y1="1"
                  x2="1"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#C5A8FF" />
                  <stop offset="50%" stopColor="#925BFF" />
                  <stop offset="100%" stopColor="#7138F5" />
                </linearGradient>

                <linearGradient
                  id="processAreaGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#7138F5" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#7138F5" stopOpacity="0" />
                </linearGradient>

                <filter
                  id="processGlow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feGaussianBlur stdDeviation="5" />
                </filter>
              </defs>

              {[100, 200, 300, 400].map((y) => (
                <line
                  key={y}
                  x1="45"
                  y1={y}
                  x2="1020"
                  y2={y}
                  stroke="#E9E1F8"
                  strokeWidth="1"
                  strokeDasharray="5 7"
                />
              ))}

              <path
                d={`${graphPath} L 970 460 L 100 460 Z`}
                fill="url(#processAreaGradient)"
              />

              <path
                d={graphPath}
                fill="none"
                stroke="#E4D8FF"
                strokeWidth="5"
                strokeLinecap="round"
              />

              <motion.path
                d={graphPath}
                fill="none"
                stroke="#A17AFF"
                strokeWidth="12"
                strokeLinecap="round"
                opacity="0.18"
                filter="url(#processGlow)"
                style={{ pathLength: reduce ? 1 : smoothProgress }}
              />

              <motion.path
                d={graphPath}
                fill="none"
                stroke="url(#processLineGradient)"
                strokeWidth="5"
                strokeLinecap="round"
                style={{ pathLength: reduce ? 1 : smoothProgress }}
              />

              {desktopPoints.map((point, i) => (
                <g key={i}>
                  <line
                    x1={point.x}
                    y1={point.y}
                    x2={point.x}
                    y2="460"
                    stroke="#C9B4F8"
                    strokeWidth="1.5"
                    strokeDasharray="5 7"
                  />
                  <motion.circle
                    cx={point.x}
                    cy={point.y}
                    r="19"
                    fill="#7138F5"
                    fillOpacity="0.12"
                    initial={reduce ? false : { opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.25 }}
                    style={{ transformBox: "fill-box", transformOrigin: "center" }}
                  />
                  <motion.circle
                    cx={point.x}
                    cy={point.y}
                    r="9"
                    fill="#7138F5"
                    stroke="white"
                    strokeWidth="4"
                    initial={reduce ? false : { opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.25 }}
                    style={{ transformBox: "fill-box", transformOrigin: "center" }}
                  />
                </g>
              ))}
            </svg>

            {/* STEP CONTENT */}
            <div className="pointer-events-none absolute inset-0 z-20">
              {PROCESS.map((step, i) => {
                const Icon = step.icon;
                const positions = [
                  { left: "5%", top: "53%" },
                  { left: "30%", top: "37%" },
                  { left: "55%", top: "21%" },
                  { left: "78%", top: "10%" },
                ];

                return (
                  <motion.div
                    key={step.number}
                    initial={reduce ? false : { opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.18, ease: EASE }}
                    style={{ left: positions[i].left, top: positions[i].top }}
                    className="pointer-events-auto absolute w-[210px] rounded-[22px] border border-[#E9E1FA] bg-white/95 p-5 shadow-[0_15px_45px_rgba(50,25,120,0.09)] backdrop-blur-xl xl:w-[230px]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F0E8FF] text-[#7138F5]">
                        <Icon size={22} />
                      </div>
                      <span className="text-[11px] font-black tracking-widest text-[#B49AD9]">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-black text-[#101535]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-[#626B85]">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="absolute bottom-7 left-[8%] right-[8%] flex justify-between">
              <span className="text-xs font-bold text-[#8B7DA8]">Understanding</span>
              <span className="text-xs font-bold text-[#8B7DA8]">Planning</span>
              <span className="text-xs font-bold text-[#8B7DA8]">Execution</span>
              <span className="text-xs font-bold text-[#7138F5]">Optimization</span>
            </div>
          </div>
        </div>

        {/* MOBILE JOURNEY */}
        <div className="relative mx-auto max-w-2xl lg:hidden">
          <div className="absolute bottom-10 left-[24px] top-8 w-[3px] rounded-full bg-[#E5D9FF]" />
          <motion.div
            className="absolute left-[24px] top-8 w-[3px] origin-top rounded-full bg-[#7138F5]"
            style={{ height: "calc(100% - 72px)", scaleY: reduce ? 1 : smoothProgress }}
          />
          <div className="space-y-7">
            {PROCESS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={reduce ? false : { opacity: 0, x: 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: i * 0.1, ease: EASE }}
                  className="relative pl-[65px]"
                >
                  <div className="absolute left-[10px] top-8 z-10 flex h-[31px] w-[31px] items-center justify-center rounded-full border-[5px] border-[#F8F6FF] bg-[#7138F5] shadow-[0_0_0_2px_#DAC8FF]">
                    <span className="h-[7px] w-[7px] rounded-full bg-white" />
                  </div>
                  <div className="relative overflow-hidden rounded-[24px] border border-[#E9E1FA] bg-white p-6 shadow-[0_12px_35px_rgba(50,25,120,0.06)]">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0E8FF] text-[#7138F5]">
                        <Icon size={24} />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest text-[#7138F5]">
                        Step {step.number}
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-black text-[#101535]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#626B85]">
                      {step.description}
                    </p>
                    <div className="mt-5 h-[3px] w-12 rounded-full bg-[#7138F5]/40" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   7. ART-DIRECTED GALLERY ARCHIVE
============================================================ */

function CreativeGallery() {
  return (
    <section className="overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[#e8ddf7] pb-8">
          <div>
            <SectionEyebrow>Studio Culture & Action</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#101535] sm:text-4xl lg:text-5xl">
              Where strategic obsession takes physical form.
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-[#626B85] sm:text-sm">
            Behind the high-converting ad units and rankings are real strategists,
            copywriters, and engineers pushing boundaries every sprint.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {GALLERY.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 0.05}
              className={
                i === 0
                  ? "sm:col-span-2 lg:col-span-7"
                  : i === 1
                  ? "lg:col-span-5"
                  : i === 2
                  ? "lg:col-span-4"
                  : i === 3
                  ? "lg:col-span-4"
                  : "sm:col-span-2 lg:col-span-4"
              }
            >
              <div className="group relative h-[260px] overflow-hidden rounded-[24px] border border-[#e8ddf7] bg-[#FAF6FF] sm:h-[340px]">
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101535]/85 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-90" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#FFD166]">
                    {item.category}
                  </p>
                  <h3 className="mt-1 text-base font-black text-white sm:text-xl">
                    {item.label}
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   8. CORE VALUES STAIRCASE (100% INTACT AS REQUESTED - IMAGE 2)
============================================================ */

function CoreValues() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#F8F6FF] px-5 py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#7138F5]/[0.06] blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#B995FF]/[0.09] blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center lg:mb-16">
          <SectionEyebrow>Our Core Values</SectionEyebrow>
          <h2 className="mt-4 text-[34px] font-black leading-[1.12] tracking-[-0.045em] text-[#101535] sm:text-[44px] lg:text-[54px]">
            The Thinking Behind{" "}
            <span className="bg-gradient-to-r from-[#7138F5] via-[#965BFF] to-[#C184FF] bg-clip-text text-transparent">
              Everything We Do.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-[#626B85] sm:text-base">
            Six principles that shape how we create, collaborate and deliver.
          </p>
        </div>

        {/* STAIRCASE */}
        <div className="relative mx-auto max-w-6xl pt-6 lg:pt-16">
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            viewBox="0 0 1200 850"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <motion.path
              d="M 105 740 H 300 V 600 H 490 V 460 H 680 V 320 H 870 V 180 H 1060 V 50"
              stroke="#DED0FF"
              strokeWidth="3"
              strokeDasharray="8 10"
              initial={reduce ? false : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 2.3, ease: "easeInOut" }}
            />
          </svg>

          <div className="pointer-events-none absolute bottom-10 left-[27px] top-10 w-[2px] bg-gradient-to-b from-[#7138F5] via-[#B99AFF] to-[#E4D8FF] lg:hidden" />

          <div className="relative grid gap-5 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-8">
            {VALUES.map((value, i) => {
              const Icon = value.icon;

              const desktopOffsets = [
                "lg:translate-y-[170px]",
                "lg:translate-y-[85px]",
                "lg:translate-y-0",
                "lg:translate-y-[170px]",
                "lg:translate-y-[85px]",
                "lg:translate-y-0",
              ];

              return (
                <motion.div
                  key={value.title}
                  initial={reduce ? false : { opacity: 0, y: 70, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
                  className={`relative pl-14 lg:pl-0 ${desktopOffsets[i]}`}
                >
                  <div
                    className="absolute left-[15px] top-8 z-20 flex h-[26px] w-[26px] items-center justify-center rounded-full border-[5px] border-[#F8F6FF] shadow-sm lg:hidden"
                    style={{ backgroundColor: value.color }}
                  />

                  <motion.div
                    whileHover={reduce ? {} : { y: -12, scale: 1.025 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-[26px] border border-[#E8DEFA] bg-white p-6 shadow-[0_14px_40px_rgba(45,20,100,0.07)] sm:p-7"
                  >
                    <span
                      className="pointer-events-none absolute -right-3 -top-7 select-none text-[125px] font-black leading-none opacity-[0.07]"
                      style={{ color: value.color }}
                    >
                      {value.number}
                    </span>

                    <div className="relative z-10 flex items-start justify-between">
                      <motion.div
                        animate={reduce ? {} : { y: [0, -5, 0] }}
                        transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                        className="flex h-14 w-14 items-center justify-center rounded-2xl"
                        style={{ backgroundColor: value.bg, color: value.color }}
                      >
                        <Icon size={27} strokeWidth={2} />
                      </motion.div>

                      <span
                        className="rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.13em]"
                        style={{ backgroundColor: value.bg, color: value.color }}
                      >
                        Step {value.number}
                      </span>
                    </div>

                    <div className="relative z-10 mt-auto pt-10">
                      <h3 className="text-xl font-black tracking-[-0.025em] text-[#101535]">
                        {value.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#626B85]">
                        {value.text}
                      </p>
                    </div>

                    <div
                      className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                      style={{ backgroundColor: value.color }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <div className="hidden h-[170px] lg:block" />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   9. FINAL EXECUTIVE CLOSER
============================================================ */

function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-[#e8ddf7] bg-[#101535] p-8 sm:p-14 lg:p-20 text-white">
          <div className="pointer-events-none absolute -right-36 -top-36 h-[400px] w-[400px] rounded-full bg-[#7138F5]/30 blur-[130px]" />

          <div className="relative z-10 max-w-3xl">
            <SectionEyebrow invert>Partner With Us</SectionEyebrow>
            <h2 className="mt-5 text-3xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ready to stop bleeding ad spend and start dominating?
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              Book a direct strategy consultation with our senior growth architects.
              No junior sales pitches. We review your current funnel and present
              verifiable opportunities to scale.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#7138F5] px-7 py-4 text-xs font-black uppercase tracking-wider text-white shadow-lg transition hover:bg-[#5f22e6] sm:text-sm"
              >
                <span>Initiate Executive Audit</span>
                <ArrowUpRight
                  size={16}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="tel:7701910068"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-4 text-xs font-bold text-white transition hover:bg-white/10 sm:text-sm"
              >
                <span>Direct Line: +91 7701910068</span>
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 font-mono text-xs text-white/60">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#00e5bd]" />
                Zero Obligation Audit
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#00e5bd]" />
                14-Day Delivery Sprints
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#00e5bd]" />
                Direct Partner Attention
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   MAIN ABOUT PAGE
========================================= */

export default function AboutUs() {
  return (
    <main className="overflow-hidden bg-white text-[#101535]">
      <AboutHero />
      <CreativeMarquee />
      <OurStory />
      <MissionVision />
      <Expertise />
      <ProcessTimeline />
      <CreativeGallery />
      <CoreValues />
      <AboutCTA />
    </main>
  );
}