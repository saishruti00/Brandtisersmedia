
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
  MoveUpRight,
  Camera,
  Search,
  Code2,
  Megaphone,
  BarChart3,
  Layers3,
  Zap,
  Quote,
  ChevronLeft,
  ChevronRight,
  ArrowDown,
  CircleCheck,
} from "lucide-react";

/* =========================================
   CONFIGURATION
========================================= */

const PURPLE = "#7138F5";
const DARK = "#101535";
const EASE = [0.22, 1, 0.36, 1];

const MEDIA = {
  heroMain:
    "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1400",

  heroSmall:
    "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=900",

  storyOne:
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",

  storyTwo:
    "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1000",

  studio:
    "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1200",

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
   DATA
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

const SERVICES = [
  { name: "SEO & GMB", icon: Search },
  { name: "Social Media", icon: Camera },
  { name: "Meta Ads", icon: Target },
  { name: "Google Ads", icon: MousePointer2 },
  { name: "Web Development", icon: Code2 },
  { name: "Brand Strategy", icon: Layers3 },
  { name: "Creative Campaigns", icon: Lightbulb },
  { name: "Lead Generation", icon: TrendingUp },
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
   REUSABLE COMPONENTS
========================================= */

function Reveal({
  children,
  className = "",
  delay = 0,
  y = 40,
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduce
          ? false
          : { opacity: 0, y }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.8,
        delay,
        ease: EASE,
      }}
    >
      {children}
    </motion.div>
  );
}

function SectionTag({ children, light = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] ${
        light
          ? "border-white/25 bg-white/10 text-white"
          : "border-[#E8DEFF] bg-[#F8F4FF] text-[#7138F5]"
      }`}
    >
      <Sparkles size={13} />
      {children}
    </span>
  );
}

function SectionTitle({
  tag,
  title,
  accent,
  description,
  center = false,
}) {
  return (
    <Reveal
      className={`mb-12 lg:mb-16 ${
        center
          ? "mx-auto max-w-3xl text-center"
          : "max-w-2xl"
      }`}
    >
      <SectionTag>{tag}</SectionTag>

      <h2 className="mt-6 text-[34px] font-black leading-[1.12] tracking-[-0.045em] text-[#101535] sm:text-[44px] lg:text-[54px]">
        {title}{" "}
        {accent && (
          <span className="bg-gradient-to-r from-[#7138F5] via-[#965BFF] to-[#C184FF] bg-clip-text text-transparent">
            {accent}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={`mt-5 text-sm leading-8 text-[#626B85] sm:text-base ${
            center ? "mx-auto max-w-2xl" : ""
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

function Photo({
  src,
  alt,
  className = "",
  imageClassName = "",
}) {
  return (
    <div
      className={`group relative overflow-hidden bg-[#EEE8F8] ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.07] ${imageClassName}`}
      />
    </div>
  );
}

function GradientButton({
  children,
  href,
  light = false,
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-extrabold shadow-[0_12px_30px_rgba(113,56,245,0.20)] transition-colors ${
        light
          ? "bg-white text-[#7138F5] hover:bg-[#F5EFFF]"
          : "bg-[#7138F5] text-white hover:bg-[#5F29E4]"
      }`}
    >
      {children}

      <ArrowUpRight
        size={18}
        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </motion.a>
  );
}

/* =========================================
   ABOUT HERO
========================================= */

function AboutHero() {
  const reduce = useReducedMotion();
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 90]
  );

  const imageRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 5]
  );

  return (
    <section
      ref={container}
      className="relative isolate overflow-hidden bg-[#FBFAFF] px-5 pb-20 pt-16 sm:pt-20 lg:pb-28 lg:pt-24"
    >
      <div className="pointer-events-none absolute -left-52 top-10 h-[600px] w-[600px] rounded-full bg-[#7138F5]/[0.07] blur-[110px]" />

      <div className="pointer-events-none absolute -right-48 top-[-150px] h-[600px] w-[600px] rounded-full bg-[#B89AFF]/[0.13] blur-[120px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(#BDA4F4 0.7px, transparent 0.7px)",
          backgroundSize: "27px 27px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 95%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.03fr_0.97fr] lg:gap-12 xl:gap-20">

          {/* LEFT CONTENT */}
          <div className="relative z-20">
            <Reveal>
              <SectionTag>Inside Brandtisers Media</SectionTag>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-7 text-[46px] font-black leading-[1.06] tracking-[-0.055em] text-[#101535] sm:text-[64px] lg:text-[65px] xl:text-[76px]">
                We're Not
                <br />
                Just Another
                <br />

                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#7138F5] via-[#9356FA] to-[#E18B71] bg-clip-text text-transparent">
                    Agency.
                  </span>

                  <motion.svg
                    viewBox="0 0 320 24"
                    className="absolute -bottom-3 left-0 w-full"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <motion.path
                      d="M4 15 Q160 -2 316 12"
                      fill="none"
                      stroke="#F5A623"
                      strokeWidth="7"
                      strokeLinecap="round"
                      initial={
                        reduce
                          ? false
                          : { pathLength: 0 }
                      }
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 1.1,
                        delay: 0.7,
                        ease: EASE,
                      }}
                    />
                  </motion.svg>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="mt-9 text-xl font-bold tracking-tight text-[#101535] sm:text-2xl">
                We're the team behind your
                <span className="text-[#7138F5]">
                  {" "}next big move.
                </span>
              </h2>

              <p className="mt-5 max-w-[550px] text-sm leading-8 text-[#626B85] sm:text-base">
                We blend strategy, creativity and technology
                to help ambitious brands stand out, connect
                with the right audience and grow with purpose.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <GradientButton href="/contact">
                  Let's Work Together
                </GradientButton>

                <a
                  href="#our-story"
                  className="group inline-flex items-center gap-2 text-sm font-extrabold text-[#101535] transition-colors hover:text-[#7138F5]"
                >
                  Discover Our Story

                  <ArrowDown
                    size={16}
                    className="transition-transform group-hover:translate-y-1"
                  />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-12 flex flex-wrap items-center gap-5 border-t border-[#E8E1F4] pt-7 sm:gap-8">
                <div>
                  <p className="text-2xl font-black text-[#101535] sm:text-3xl">
                    15+
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#626B85]">
                    Industry Sectors
                  </p>
                </div>

                <div className="h-10 w-px bg-[#E8E1F4]" />

                <div>
                  <p className="text-2xl font-black text-[#101535] sm:text-3xl">
                    360°
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#626B85]">
                    Digital Approach
                  </p>
                </div>

                <div className="h-10 w-px bg-[#E8E1F4]" />

                <div>
                  <p className="text-2xl font-black text-[#101535] sm:text-3xl">
                    One
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#626B85]">
                    Growth Partner
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT IMAGE COMPOSITION */}
          <div className="relative mx-auto w-full max-w-[590px] pb-8 pt-5 sm:px-5 lg:pt-0">
            <motion.div
              style={
                reduce
                  ? undefined
                  : {
                      y: imageY,
                      rotate: imageRotate,
                    }
              }
              initial={
                reduce
                  ? false
                  : { opacity: 0, scale: 0.92 }
              }
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: EASE,
              }}
              className="relative"
            >
              <div className="absolute -right-4 -top-4 h-[90%] w-[90%] rounded-[42px] border-2 border-[#D9C8FF] sm:-right-7 sm:-top-7" />

              <div className="absolute -bottom-5 -left-5 h-[80%] w-[80%] rounded-[42px] bg-[#EDE4FF] sm:-bottom-8 sm:-left-8" />

              <Photo
                src={MEDIA.heroMain}
                alt="Creative digital marketing team collaborating"
                className="relative z-10 h-[400px] rounded-[30px] shadow-[0_35px_90px_rgba(49,22,110,0.16)] sm:h-[540px] lg:h-[560px]"
              />

              <div className="pointer-events-none absolute inset-0 z-10 rounded-[30px] bg-gradient-to-t from-[#101535]/45 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 z-20 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/75">
                  Brandtisers Media
                </p>

                <p className="mt-2 text-xl font-black sm:text-2xl">
                  Ideas that move brands.
                </p>
              </div>
            </motion.div>

            {/* FLOATING CREATIVE CARD */}
            <motion.div
              initial={
                reduce
                  ? false
                  : {
                      opacity: 0,
                      x: -35,
                      rotate: -12,
                    }
              }
              animate={{
                opacity: 1,
                x: 0,
                rotate: -8,
              }}
              transition={{
                duration: 0.8,
                delay: 0.65,
              }}
              className="absolute -left-2 top-[15%] z-30 hidden w-[155px] rounded-2xl border-[5px] border-white bg-white shadow-[0_20px_50px_rgba(20,15,70,0.18)] sm:block lg:-left-10"
            >
              <img
                src={MEDIA.heroSmall}
                alt="Creative teamwork"
                className="h-[110px] w-full rounded-xl object-cover"
              />

              <p className="px-2 py-3 text-center text-[11px] font-black text-[#101535]">
                Think. Create. Grow.
              </p>
            </motion.div>

            {/* FLOATING LABEL */}
            <motion.div
              animate={
                reduce
                  ? {}
                  : {
                      y: [0, -12, 0],
                    }
              }
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-3 right-0 z-30 flex items-center gap-3 rounded-2xl border border-[#E8DEFA] bg-white px-5 py-4 shadow-[0_18px_45px_rgba(35,20,100,0.13)] sm:-right-5 sm:bottom-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0E8FF] text-[#7138F5]">
                <TrendingUp size={25} />
              </div>

              <div>
                <p className="text-sm font-black text-[#101535]">
                  Growth Mindset
                </p>

                <p className="mt-1 text-xs text-[#626B85]">
                  Strategy meets creativity
                </p>
              </div>
            </motion.div>

            {/* FLOATING SPARKLE */}
            <motion.div
              animate={
                reduce
                  ? {}
                  : {
                      rotate: [0, 18, -10, 0],
                      scale: [1, 1.15, 1],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -right-4 top-5 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5B63D] text-white shadow-lg"
            >
              <Sparkles size={23} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   MARQUEE
========================================= */

function CreativeMarquee() {
  const reduce = useReducedMotion();

  const words = [
    "STRATEGY",
    "CREATIVITY",
    "PERFORMANCE",
    "INNOVATION",
    "GROWTH",
    "DIGITAL",
  ];

  return (
    <div className="overflow-hidden border-y border-[#EDE6F8] bg-white py-5">
      <motion.div
        className="flex w-max items-center gap-10"
        animate={
          reduce
            ? {}
            : { x: ["0%", "-50%"] }
        }
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...words, ...words, ...words, ...words].map(
          (word, i) => (
            <div
              key={`${word}-${i}`}
              className="flex shrink-0 items-center gap-10"
            >
              <span className="text-sm font-black tracking-[0.16em] text-[#333455] sm:text-base">
                {word}
              </span>

              <Sparkles
                size={17}
                className="text-[#7138F5]"
              />
            </div>
          )
        )}
      </motion.div>
    </div>
  );
}

/* =========================================
   OUR STORY
========================================= */

function OurStory() {
  return (
    <section
      id="our-story"
      className="relative overflow-hidden bg-white px-5 py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">

        {/* LEFT IMAGES */}
        <div className="relative pb-8">
          <Reveal>
            <div className="grid grid-cols-[1.15fr_0.85fr] items-end gap-4">
              <Photo
                src={MEDIA.storyOne}
                alt="Marketing team collaboration"
                className="h-[380px] rounded-[28px] sm:h-[500px]"
              />

              <div className="flex flex-col gap-4">
                <Photo
                  src={MEDIA.storyTwo}
                  alt="Team strategy discussion"
                  className="h-[220px] rounded-[24px] sm:h-[290px]"
                />

                <div className="flex h-[145px] flex-col justify-center rounded-[24px] bg-[#7138F5] p-5 text-white sm:h-[185px] sm:p-7">
                  <Sparkles size={24} />

                  <p className="mt-3 text-xl font-black leading-tight sm:text-2xl">
                    Ideas.
                    <br />
                    Impact.
                    <br />
                    Growth.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <motion.div
            animate={{
              y: [0, -9, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-2 left-5 rounded-2xl border border-[#EEE5FF] bg-white px-6 py-4 shadow-[0_15px_45px_rgba(30,20,90,0.12)] sm:left-12"
          >
            <p className="text-sm font-black text-[#101535]">
              Creative Minds.
            </p>

            <p className="mt-1 text-xs font-bold text-[#7138F5]">
              Digital Growth.
            </p>
          </motion.div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <Reveal>
            <SectionTag>Our Story</SectionTag>

            <h2 className="mt-6 text-[35px] font-black leading-[1.12] tracking-[-0.045em] text-[#101535] sm:text-[45px] lg:text-[54px]">
              Behind Every
              <br />
              Great Brand,
              <br />
              <span className="text-[#7138F5]">
                There's a Story.
              </span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-[#626B85] sm:text-base">
              At Brandtisers Media, we believe that successful
              marketing is not just about being seen. It's about
              being remembered, trusted and chosen.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#626B85] sm:text-base">
              We bring together strategists, designers, marketers
              and digital thinkers who share one common goal:
              helping businesses turn their potential into
              meaningful growth.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#626B85] sm:text-base">
              From shaping brand identities to executing
              performance-focused campaigns, we approach every
              project with curiosity, commitment and a clear
              understanding of business objectives.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 space-y-4">
              {[
                "Strategy built around your business goals",
                "Creative ideas designed to connect",
                "Execution focused on measurable progress",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F0E8FF] text-[#7138F5]">
                    <Check size={15} strokeWidth={3} />
                  </div>

                  <span className="text-sm font-semibold text-[#333455]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   MISSION & VISION
========================================= */

function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-[#F8F6FF] px-5 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          tag="Our Purpose"
          title="What We Believe."
          accent="What We Build."
          description="Our purpose is simple: create meaningful work that helps brands move forward."
          center
        />

        <div className="grid gap-5 lg:grid-cols-2">

          {/* MISSION */}
          <Reveal>
            <motion.div
              whileHover={{ y: -7 }}
              className="relative flex min-h-[390px] flex-col overflow-hidden rounded-[32px] bg-[#7138F5] p-9 text-white sm:p-12"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-[340px] w-[340px] rounded-full border border-white/20" />

              <div className="pointer-events-none absolute -right-10 -top-10 h-[260px] w-[260px] rounded-full border border-white/20" />

              <div className="relative z-10 flex items-start justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
                  <Target size={32} />
                </div>

                <span className="text-xs font-bold tracking-widest text-white/60">
                  01 / PURPOSE
                </span>
              </div>

              <div className="relative z-10 mt-auto pt-16">
                <h3 className="text-3xl font-black sm:text-4xl">
                  Our Mission
                </h3>

                <p className="mt-5 max-w-md text-sm leading-8 text-white/85 sm:text-base">
                  To empower businesses with creative,
                  strategic and performance-driven digital
                  solutions that build stronger brands and
                  support sustainable growth.
                </p>
              </div>
            </motion.div>
          </Reveal>

          {/* VISION */}
          <Reveal delay={0.1}>
            <motion.div
              whileHover={{ y: -7 }}
              className="relative flex min-h-[390px] flex-col overflow-hidden rounded-[32px] border border-[#E8DEFA] bg-white p-9 sm:p-12"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-[340px] w-[340px] rounded-full border border-[#7138F5]/10" />

              <div className="pointer-events-none absolute -right-10 -top-10 h-[260px] w-[260px] rounded-full border border-[#7138F5]/10" />

              <div className="relative z-10 flex items-start justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F0E8FF] text-[#7138F5]">
                  <Eye size={32} />
                </div>

                <span className="text-xs font-bold tracking-widest text-[#AAA0BC]">
                  02 / FUTURE
                </span>
              </div>

              <div className="relative z-10 mt-auto pt-16">
                <h3 className="text-3xl font-black text-[#101535] sm:text-4xl">
                  Our Vision
                </h3>

                <p className="mt-5 max-w-md text-sm leading-8 text-[#626B85] sm:text-base">
                  To become a trusted digital growth partner
                  for ambitious brands by combining innovation,
                  creativity and meaningful long-term
                  partnerships.
                </p>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   EXPERTISE SECTION
========================================= */

function Expertise() {
  return (
    <section className="overflow-hidden bg-white px-5 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">

        {/* LEFT CONTENT */}
        <div>
          <Reveal>
            <SectionTag>Our Expertise</SectionTag>

            <h2 className="mt-6 text-[36px] font-black leading-[1.1] tracking-[-0.045em] text-[#101535] sm:text-[46px] lg:text-[54px]">
              Different Skills.
              <br />
              One Powerful
              <br />
              <span className="text-[#7138F5]">
                Team.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-8 text-[#626B85] sm:text-base">
              Great marketing happens when creative thinking
              and strategic execution work together.
              Our multidisciplinary approach connects
              every part of your digital presence.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {SERVICES.map(({ name, icon: Icon }) => (
                <motion.div
                  key={name}
                  whileHover={{
                    x: 5,
                    backgroundColor: "#F2ECFF",
                  }}
                  className="flex items-center gap-3 rounded-2xl border border-[#EDE6FA] bg-[#FAF9FF] px-4 py-4"
                >
                  <Icon
                    size={18}
                    className="shrink-0 text-[#7138F5]"
                  />

                  <span className="text-xs font-bold text-[#101535] sm:text-sm">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9">
              <GradientButton href="/services">
                Explore Our Services
              </GradientButton>
            </div>
          </Reveal>
        </div>

        {/* RIGHT VISUAL */}
        <Reveal>
          <div className="relative">
            <Photo
              src={MEDIA.studio}
              alt="Creative team working on a digital project"
              className="h-[420px] rounded-[32px] sm:h-[570px]"
            />

            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-t from-[#101535]/55 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8 right-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-black text-[#7138F5] backdrop-blur">
                <Sparkles size={14} />
                Built for Digital Growth
              </span>

              <p className="mt-4 max-w-sm text-2xl font-black leading-tight text-white sm:text-3xl">
                Where strategy meets imagination.
              </p>
            </div>

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-3 top-8 flex h-20 w-20 items-center justify-center rounded-[24px] border-4 border-white bg-[#F6B943] text-white shadow-xl sm:-right-8 sm:h-24 sm:w-24"
            >
              <Lightbulb size={37} />
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================
   PROCESS TIMELINE
========================================= */


/* =========================================
   PROCESS TIMELINE - ANIMATED LADDER
========================================= */


/* =========================================
   PROCESS TIMELINE - ANIMATED GROWTH GRAPH
========================================= */

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
      {/* Background */}
      <div className="pointer-events-none absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-[#7138F5]/[0.05] blur-[110px]" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-[#B995FF]/[0.09] blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          tag="Our Approach"
          title="From First Idea"
          accent="To Real Impact."
          description="A clear, collaborative process that transforms business goals into thoughtful digital execution."
          center
        />

        {/* DESKTOP GRAPH */}
        <div className="relative hidden lg:block">
          <div className="relative h-[660px] overflow-hidden rounded-[36px] border border-[#E9E1FA] bg-white/70 shadow-[0_25px_80px_rgba(45,25,100,0.04)]">

            {/* Grid background */}
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

            {/* Graph title */}
            <div className="absolute left-10 top-9 z-10">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#7138F5]">
                Our Working Process
              </p>

              <h3 className="mt-2 text-xl font-black text-[#101535]">
                A connected journey from strategy to scale.
              </h3>
            </div>

            {/* Graph SVG */}
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
                  <stop
                    offset="0%"
                    stopColor="#7138F5"
                    stopOpacity="0.18"
                  />
                  <stop
                    offset="100%"
                    stopColor="#7138F5"
                    stopOpacity="0"
                  />
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

              {/* Horizontal guides */}
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

              {/* Area under curve */}
              <path
                d={`${graphPath} L 970 460 L 100 460 Z`}
                fill="url(#processAreaGradient)"
              />

              {/* Background curve */}
              <path
                d={graphPath}
                fill="none"
                stroke="#E4D8FF"
                strokeWidth="5"
                strokeLinecap="round"
              />

              {/* Animated glow */}
              <motion.path
                d={graphPath}
                fill="none"
                stroke="#A17AFF"
                strokeWidth="12"
                strokeLinecap="round"
                opacity="0.18"
                filter="url(#processGlow)"
                style={{
                  pathLength: reduce ? 1 : smoothProgress,
                }}
              />

              {/* Animated growth curve */}
              <motion.path
                d={graphPath}
                fill="none"
                stroke="url(#processLineGradient)"
                strokeWidth="5"
                strokeLinecap="round"
                style={{
                  pathLength: reduce ? 1 : smoothProgress,
                }}
              />

              {/* Graph milestone nodes */}
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
                    initial={
                      reduce
                        ? false
                        : { opacity: 0, scale: 0 }
                    }
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.25,
                    }}
                    style={{
                      transformBox: "fill-box",
                      transformOrigin: "center",
                    }}
                  />

                  <motion.circle
                    cx={point.x}
                    cy={point.y}
                    r="9"
                    fill="#7138F5"
                    stroke="white"
                    strokeWidth="4"
                    initial={
                      reduce
                        ? false
                        : { opacity: 0, scale: 0 }
                    }
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.25,
                    }}
                    style={{
                      transformBox: "fill-box",
                      transformOrigin: "center",
                    }}
                  />
                </g>
              ))}
            </svg>

            {/* STEP CONTENT */}
            <div className="pointer-events-none absolute inset-0 z-20">
              {PROCESS.map((step, i) => {
                const Icon = step.icon;

                const positions = [
                  {
                    left: "5%",
                    top: "53%",
                  },
                  {
                    left: "30%",
                    top: "37%",
                  },
                  {
                    left: "55%",
                    top: "21%",
                  },
                  {
                    left: "78%",
                    top: "10%",
                  },
                ];

                return (
                  <motion.div
                    key={step.number}
                    initial={
                      reduce
                        ? false
                        : {
                            opacity: 0,
                            y: 35,
                          }
                    }
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.18,
                      ease: EASE,
                    }}
                    style={{
                      left: positions[i].left,
                      top: positions[i].top,
                    }}
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

            {/* Bottom labels */}
            <div className="absolute bottom-7 left-[8%] right-[8%] flex justify-between">
              <span className="text-xs font-bold text-[#8B7DA8]">
                Understanding
              </span>

              <span className="text-xs font-bold text-[#8B7DA8]">
                Planning
              </span>

              <span className="text-xs font-bold text-[#8B7DA8]">
                Execution
              </span>

              <span className="text-xs font-bold text-[#7138F5]">
                Optimization
              </span>
            </div>
          </div>
        </div>

        {/* MOBILE & TABLET JOURNEY */}
        <div className="relative mx-auto max-w-2xl lg:hidden">
          <div className="absolute bottom-10 left-[24px] top-8 w-[3px] rounded-full bg-[#E5D9FF]" />

          <motion.div
            className="absolute left-[24px] top-8 w-[3px] origin-top rounded-full bg-[#7138F5]"
            style={{
              height: "calc(100% - 72px)",
              scaleY: reduce ? 1 : smoothProgress,
            }}
          />

          <div className="space-y-7">
            {PROCESS.map((step, i) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={
                    reduce
                      ? false
                      : {
                          opacity: 0,
                          x: 35,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: i * 0.1,
                    ease: EASE,
                  }}
                  className="relative pl-[65px]"
                >
                  {/* Timeline node */}
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



/* =========================================
   PHOTO GALLERY
========================================= */

function CreativeGallery() {
  return (
    <section className="overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          tag="The Creative Side"
          title="The People."
          accent="The Process. The Passion."
          description="A glimpse into the kind of collaboration, energy and thinking that drives great digital work."
          center
        />
      </div>

      <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-3 px-4 sm:gap-4 sm:px-6 lg:grid-cols-12">
        {GALLERY.map((item, i) => (
          <Reveal
            key={item.label}
            delay={i * 0.07}
            className={
              i === 0
                ? "col-span-2 lg:col-span-5"
                : i === 1
                ? "lg:col-span-3"
                : i === 2
                ? "lg:col-span-4"
                : i === 3
                ? "lg:col-span-7"
                : "col-span-2 lg:col-span-5"
            }
          >
            <div className="group relative h-[240px] overflow-hidden rounded-[24px] bg-[#EEE8F8] sm:h-[330px] lg:h-[360px]">
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.09]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#101535]/75 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />

              <div className="absolute bottom-6 left-6 right-6 translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/75">
                  {item.category}
                </p>

                <h3 className="mt-2 text-lg font-black text-white sm:text-2xl">
                  {item.label}
                </h3>
              </div>

              <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/20 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
                <ArrowUpRight size={19} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-5 text-center">
        <p className="text-sm font-medium text-[#626B85]">
          Creative thinking. Meaningful collaboration.
          Work that moves brands forward.
        </p>
      </div>
    </section>
  );
}

/* =========================================
   CORE VALUES
========================================= */


/* =========================================
   ANIMATED CORE VALUES
========================================= */


/* =========================================
   CORE VALUES - ANIMATED GROWTH STAIRCASE
========================================= */

function CoreValues() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#F8F6FF] px-5 py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#7138F5]/[0.06] blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#B995FF]/[0.09] blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          tag="Our Core Values"
          title="The Thinking Behind"
          accent="Everything We Do."
          description="Six principles that shape how we create, collaborate and deliver."
          center
        />

        {/* STAIRCASE */}
        <div className="relative mx-auto max-w-6xl pt-6 lg:pt-16">
          {/* Desktop rising staircase connector */}
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

          {/* Mobile vertical connector */}
          <div className="pointer-events-none absolute bottom-10 left-[27px] top-10 w-[2px] bg-gradient-to-b from-[#7138F5] via-[#B99AFF] to-[#E4D8FF] lg:hidden" />

          <div className="relative grid gap-5 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-8">
            {VALUES.map((value, i) => {
              const Icon = value.icon;

              // Staircase: first step at bottom, last step at top.
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
                  initial={
                    reduce
                      ? false
                      : {
                          opacity: 0,
                          y: 70,
                          scale: 0.9,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.12,
                    ease: EASE,
                  }}
                  className={`relative pl-14 lg:pl-0 ${desktopOffsets[i]}`}
                >
                  {/* Mobile timeline node */}
                  <div
                    className="absolute left-[15px] top-8 z-20 flex h-[26px] w-[26px] items-center justify-center rounded-full border-[5px] border-[#F8F6FF] shadow-sm lg:hidden"
                    style={{ backgroundColor: value.color }}
                  />

                  {/* Step card */}
                  <motion.div
                    whileHover={
                      reduce
                        ? {}
                        : {
                            y: -12,
                            scale: 1.025,
                          }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    className="group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-[26px] border border-[#E8DEFA] bg-white p-6 shadow-[0_14px_40px_rgba(45,20,100,0.07)] sm:p-7"
                  >
                    {/* Large transparent step number */}
                    <span
                      className="pointer-events-none absolute -right-3 -top-7 select-none text-[125px] font-black leading-none opacity-[0.07]"
                      style={{ color: value.color }}
                    >
                      {value.number}
                    </span>

                    {/* Top row */}
                    <div className="relative z-10 flex items-start justify-between">
                      <motion.div
                        animate={
                          reduce
                            ? {}
                            : { y: [0, -5, 0] }
                        }
                        transition={{
                          duration: 4 + i * 0.3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="flex h-14 w-14 items-center justify-center rounded-2xl"
                        style={{
                          backgroundColor: value.bg,
                          color: value.color,
                        }}
                      >
                        <Icon size={27} strokeWidth={2} />
                      </motion.div>

                      <span
                        className="rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.13em]"
                        style={{
                          backgroundColor: value.bg,
                          color: value.color,
                        }}
                      >
                        Step {value.number}
                      </span>
                    </div>

                    {/* Card text */}
                    <div className="relative z-10 mt-auto pt-10">
                      <h3 className="text-xl font-black tracking-[-0.025em] text-[#101535]">
                        {value.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[#626B85]">
                        {value.text}
                      </p>
                    </div>

                    {/* Bottom accent */}
                    <div
                      className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                      style={{ backgroundColor: value.color }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Spacer for desktop offsets */}
          <div className="hidden h-[170px] lg:block" />
        </div>
      </div>
    </section>
  );
}

/* =========================================
   FINAL CTA - PREMIUM SPLIT LAYOUT
========================================= */

function AboutCTA() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[30px] border border-[#E9E1F8] bg-[#F8F6FF] shadow-[0_25px_80px_rgba(50,25,110,0.06)] sm:rounded-[36px]">
            <div className="grid items-stretch lg:grid-cols-[1.08fr_0.92fr]">

              {/* LEFT CONTENT */}
              <div className="relative z-10 flex flex-col justify-center px-7 py-14 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
                <motion.div
                  initial={
                    reduce
                      ? false
                      : { opacity: 0, y: 20 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    ease: EASE,
                  }}
                >
                  <SectionTag>
                    Let's Work Together
                  </SectionTag>

                  <h2 className="mt-7 max-w-xl text-[38px] font-black leading-[1.12] tracking-[-0.045em] text-[#101535] sm:text-[50px] lg:text-[56px]">
                    Have a Vision?
                    <br />

                    <span className="bg-gradient-to-r from-[#7138F5] via-[#955BFF] to-[#C084FC] bg-clip-text text-transparent">
                      Let's Make
                      <br />
                      It Happen.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-md text-sm leading-8 text-[#626B85] sm:text-base">
                    Whether you're building a new brand or
                    taking your business to the next level,
                    we're here to bring the right ideas,
                    people and expertise together.
                  </p>

                  <div className="mt-9 flex flex-wrap items-center gap-4">
                    <GradientButton href="/contact">
                      Start a Conversation
                    </GradientButton>

                    <a
                      href="tel:7701910068"
                      className="group inline-flex items-center gap-2 text-sm font-bold text-[#101535] transition-colors hover:text-[#7138F5]"
                    >
                      Call +91 7701910068

                      <ArrowUpRight
                        size={17}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  </div>
                </motion.div>

                {/* PARTNERSHIP NOTE */}
                <div className="mt-12 flex items-center gap-3 border-t border-[#E4DAF4] pt-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAE0FF] text-[#7138F5]">
                    <HeartHandshake size={20} />
                  </div>

                  <p className="text-xs font-semibold leading-6 text-[#626B85] sm:text-sm">
                    Great partnerships begin with
                    <span className="font-black text-[#101535]">
                      {" "}a simple conversation.
                    </span>
                  </p>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative min-h-[340px] overflow-hidden sm:min-h-[460px] lg:min-h-[580px]">
                <motion.img
                  src={MEDIA.heroMain}
                  alt="Creative professionals collaborating on a project"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={
                    reduce
                      ? false
                      : { scale: 1.12 }
                  }
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.3,
                    ease: EASE,
                  }}
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101535]/65 via-[#101535]/10 to-transparent" />

                {/* IMAGE CAPTION */}
                <motion.div
                  initial={
                    reduce
                      ? false
                      : { opacity: 0, y: 30 }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: EASE,
                  }}
                  className="absolute bottom-8 left-7 right-7 sm:bottom-10 sm:left-10"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-white backdrop-blur-md">
                    <Sparkles size={23} />
                  </div>

                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/75">
                    Brandtisers Media
                  </p>

                  <h3 className="mt-2 max-w-sm text-2xl font-black leading-tight text-white sm:text-3xl">
                    Good Ideas.
                    <br />
                    Great People.
                    <br />
                    Better Together.
                  </h3>
                </motion.div>

                {/* FLOATING ACCENT */}
                <motion.div
                  animate={
                    reduce
                      ? {}
                      : {
                          y: [0, -9, 0],
                          rotate: [0, 4, 0],
                        }
                  }
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/40 bg-white/90 text-[#7138F5] shadow-lg backdrop-blur sm:right-9 sm:top-9"
                >
                  <ArrowUpRight size={27} />
                </motion.div>
              </div>

            </div>
          </div>
        </Reveal>
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
