import React, { useState, useEffect, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from 'motion/react';
import { gsap } from 'gsap';
import {
  Sparkles,
  ArrowUpRight,
  Phone,
  Play,
  Search,
  Camera,
  Target,
  MousePointerClick,
  Code2,
  Palette,
  Clapperboard,
  TrendingUp,
  Orbit,
} from 'lucide-react';
import { MEDIA, ease } from '../../constants/siteData';
import { Magnetic } from '../ui/Common';

/* =========================================
   DIWALI SPECIAL: SLEEK MINI DIYA (Clean & Sharp)
========================================= */

function MiniDiya({ size = 20, className = '' }) {
  const reducedMotion = useReducedMotion();

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* Soft warm micro aura (no muddy blur) */}
      <motion.div
        className="pointer-events-none absolute -top-1.5 h-4 w-4 rounded-full bg-[#FFA500]/45 blur-[5px]"
        animate={
          reducedMotion
            ? {}
            : {
                scale: [0.85, 1.15, 0.9],
                opacity: [0.45, 0.8, 0.5],
              }
        }
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <svg
        width={size}
        height={size * 0.72}
        viewBox="0 0 40 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible drop-shadow-[0_2px_5px_rgba(255,140,0,0.25)]"
      >
        <defs>
          <linearGradient id="miniDiyaClay" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>

          <linearGradient id="miniDiyaFlame" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="90%" stopColor="#FEF08A" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>

        {/* Terracotta Diya Base */}
        <path
          d="M4 15 C4 26 14 28 20 28 C26 28 36 26 36 15 C36 13.5 33 13 29 13.5 C24 14.5 16 14.5 11 13.5 C7 13 4 13.5 4 15 Z"
          fill="url(#miniDiyaClay)"
        />

        {/* Gold Rim */}
        <ellipse cx="20" cy="14" rx="14" ry="2.2" fill="#FDE68A" opacity="0.9" />

        {/* Flickering Flame */}
        <motion.g
          animate={
            reducedMotion
              ? {}
              : {
                  scaleY: [1, 1.12, 0.96, 1],
                  scaleX: [1, 0.95, 1.04, 1],
                  rotate: [0, -2, 2, 0],
                }
          }
          style={{ originX: '20px', originY: '14px' }}
          transition={{
            duration: 1.1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <path
            d="M20 1 C17 6.5 15.5 10 17.5 13 C18.5 14.5 21.5 14.5 22.5 13 C24.5 10 23 6.5 20 1 Z"
            fill="url(#miniDiyaFlame)"
          />
          <path
            d="M20 5 C19 8 18 10 19 12 C19.5 12.5 20.5 12.5 21 12 C22 10 21 8 20 5 Z"
            fill="#FFFFFF"
            opacity="0.85"
          />
        </motion.g>
      </svg>
    </div>
  );
}

/* =========================================
   SUBTLE MICRO FAIRY LIGHTS
========================================= */

function DiwaliFairyLights() {
  const bulbs = [
    '#F59E0B',
    '#EC4899',
    '#7138F5',
    '#F97316',
    '#10B981',
    '#F59E0B',
    '#7138F5',
    '#EC4899',
    '#F97316',
    '#10B981',
    '#F59E0B',
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-0 right-0 top-0 z-20 flex justify-between px-4 overflow-hidden sm:px-12 opacity-75"
    >
      <svg
        className="absolute left-0 top-0 w-full h-5 stroke-[#FCD34D]/25"
        fill="none"
        preserveAspectRatio="none"
      >
        <path d="M0,2 Q120,10 240,2 T480,2 T720,2 T960,2 T1200,2 T1440,2" strokeWidth="0.9" />
      </svg>

      {bulbs.map((color, i) => (
        <div key={i} className="relative flex flex-col items-center">
          <div className="h-1.5 w-[1px] bg-[#D97706]/30" />
          <motion.div
            className="h-1.5 w-1.5 rounded-full"
            style={{
              backgroundColor: color,
              boxShadow: `0 0 5px 1px ${color}`,
            }}
            animate={{
              opacity: [0.4, 0.85, 0.4],
            }}
            transition={{
              duration: 1.8 + (i % 3) * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: (i * 0.2) % 1.2,
            }}
          />
        </div>
      ))}
    </div>
  );
}

/* =========================================
   CONSTANT + ANIMATED HERO HEADLINE
========================================= */

const rotatingKeywords = [
  'Machine.',
  'Engine.',
  'Partner.',
  'Strategy.',
  'Solution.',
  'System.',
  'Accelerator.',
];

function HeroHeadlineCarousel() {
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingKeywords.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [reducedMotion]);

  return (
    <div className="h-title-wrap w-full">
      <h1 className="text-center text-[32px] font-black leading-[1.1] tracking-[-0.045em] text-[#101535] sm:text-[44px] md:text-[50px] lg:text-left lg:text-[46px] xl:text-[53px] 2xl:text-[58px]">
        Fast Funnels. Verified
        <br />
        Inquiries.
      </h1>

      <div className="mt-3 w-full text-center text-[32px] font-black leading-[1.12] tracking-[-0.045em] sm:text-[44px] md:text-[50px] lg:text-left lg:text-[46px] xl:text-[53px] 2xl:text-[58px]">
        <span className="block text-[#7138F5]">
          Your Conversion
        </span>

        <span className="block text-[#7138F5]">
          Growth{' '}
          <span className="inline-grid max-w-full align-baseline">
            <span
              aria-hidden="true"
              className="invisible col-start-1 row-start-1 whitespace-nowrap"
            >
              Accelerator.
            </span>

            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={index}
                initial={
                  reducedMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 14,
                        filter: 'blur(5px)',
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                }}
                exit={{
                  opacity: 0,
                  y: -14,
                  filter: 'blur(5px)',
                }}
                transition={{
                  duration: 0.4,
                  ease,
                }}
                className="col-start-1 row-start-1 whitespace-nowrap bg-gradient-to-r from-[#F46B68] to-[#FF9F1C] bg-clip-text text-transparent"
              >
                {rotatingKeywords[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </span>
      </div>
    </div>
  );
}

/* =========================================
   ORBIT SERVICES DATA
========================================= */

const orbitServices = [
  {
    name: 'SEO',
    icon: Search,
    color: '#7138F5',
    bg: '#F0E8FF',
    angle: -90,
    orbit: 1,
  },
  {
    name: 'Social Media',
    icon: Camera,
    color: '#E44891',
    bg: '#FFE8F2',
    angle: -45,
    orbit: 2,
  },
  {
    name: 'Meta Ads',
    icon: Target,
    color: '#2563EB',
    bg: '#E6F0FF',
    angle: 0,
    orbit: 1,
  },
  {
    name: 'Google Ads',
    icon: MousePointerClick,
    color: '#D99017',
    bg: '#FFF2D8',
    angle: 45,
    orbit: 2,
  },
  {
    name: 'Web Development',
    icon: Code2,
    color: '#0D9488',
    bg: '#DFF8F2',
    angle: 90,
    orbit: 1,
  },
  {
    name: 'Branding',
    icon: Palette,
    color: '#A855F7',
    bg: '#F3E8FF',
    angle: 135,
    orbit: 2,
  },
  {
    name: 'Video Editing',
    icon: Clapperboard,
    color: '#EA580C',
    bg: '#FFF0E2',
    angle: 180,
    orbit: 1,
  },
  {
    name: 'Lead Generation',
    icon: TrendingUp,
    color: '#16A34A',
    bg: '#E6F8E9',
    angle: 225,
    orbit: 2,
  },
];

/* =========================================
   CONNECTED SERVICES ORBIT
========================================= */

function ServiceOrbit() {
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState(null);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[340px] sm:max-w-[450px] lg:max-w-[460px] xl:max-w-[490px] 2xl:max-w-[510px]">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-[12%] rounded-full bg-[#7138F5]/10 blur-[60px]" />

      {/* Orbit Rings */}
      <div className="pointer-events-none absolute inset-[8%] rounded-full border border-[#7138F5]/20" />
      <div className="pointer-events-none absolute inset-[16%] rounded-full border border-dashed border-[#A78BFA]/20" />
      <div className="pointer-events-none absolute inset-[24%] rounded-full border border-[#7138F5]/20" />

      {/* Rotating Outer Ring */}
      <motion.div
        className="pointer-events-none absolute inset-[8%] rounded-full border border-transparent border-r-[#7138F5]/10 border-t-[#7138F5]/40"
        animate={reducedMotion ? {} : { rotate: 360 }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Rotating Inner Ring */}
      <motion.div
        className="pointer-events-none absolute inset-[24%] rounded-full border border-transparent border-b-[#E44891]/35 border-l-[#7138F5]/20"
        animate={reducedMotion ? {} : { rotate: -360 }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Connecting Lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 500 500"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="heroOrbitLine" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#7138F5" stopOpacity=".5" />
            <stop offset="1" stopColor="#E44891" stopOpacity=".2" />
          </linearGradient>
        </defs>

        {orbitServices.map((service, i) => {
          const radius = service.orbit === 1 ? 130 : 210;
          const radians = (service.angle * Math.PI) / 180;
          const x = 250 + Math.cos(radians) * radius;
          const y = 250 + Math.sin(radians) * radius;

          return (
            <motion.line
              key={service.name}
              x1="250"
              y1="250"
              x2={x}
              y2={y}
              stroke="url(#heroOrbitLine)"
              strokeWidth="1.5"
              initial={{ opacity: 0, pathLength: 0 }}
              whileInView={{ opacity: 0.65, pathLength: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: i * 0.1,
              }}
            />
          );
        })}
      </svg>

      {/* Center Hub Pulse */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[100px] w-[100px] rounded-full border-2 border-[#7138F5]/30 sm:h-[150px] sm:w-[150px]"
        style={{ x: '-50%', y: '-50%' }}
        animate={
          reducedMotion
            ? {}
            : {
                scale: [1, 1.25, 1.55],
                opacity: [0.55, 0.2, 0],
              }
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeOut',
        }}
      />

      {/* Center Digital Growth Hub */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          type: 'spring',
          stiffness: 120,
        }}
        style={{ x: '-50%', y: '-50%' }}
        className="absolute left-1/2 top-1/2 z-20 flex h-[108px] w-[108px] flex-col items-center justify-center rounded-full border-[4px] border-white bg-gradient-to-br from-[#7138F5] via-[#8B5CF6] to-[#A86CF5] text-center shadow-[0_15px_45px_rgba(113,56,245,0.3)] sm:h-[150px] sm:w-[150px] lg:h-[152px] lg:w-[152px]"
      >
        <motion.div
          animate={
            reducedMotion
              ? {}
              : {
                  rotate: [0, 8, -8, 0],
                  scale: [1, 1.08, 1],
                }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Orbit className="mb-1 text-white" size={29} strokeWidth={1.8} />
        </motion.div>

        <span className="text-[11px] font-black leading-tight text-white sm:text-sm">
          DIGITAL
          <br />
          GROWTH
        </span>

        <span className="mt-1 text-[8px] font-bold tracking-widest text-white/75">
          HUB
        </span>
      </motion.div>

      {/* Service Planets */}
      {orbitServices.map((service, i) => {
        const Icon = service.icon;
        const radius = service.orbit === 1 ? 26 : 42;
        const radians = (service.angle * Math.PI) / 180;
        const left = 50 + Math.cos(radians) * radius;
        const top = 50 + Math.sin(radians) * radius;

        return (
          <motion.div
            key={service.name}
            className="absolute z-30"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              x: '-50%',
              y: '-50%',
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.15 + i * 0.08,
              type: 'spring',
              stiffness: 150,
            }}
            onHoverStart={() => setActive(i)}
            onHoverEnd={() => setActive(null)}
          >
            <motion.div
              animate={
                reducedMotion
                  ? {}
                  : {
                      y: [0, -5, 0, 4, 0],
                      rotate: [0, 2, 0, -2, 0],
                    }
              }
              transition={{
                duration: 3.5 + (i % 4) * 0.6,
                delay: i * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <motion.div
                whileHover={{ scale: 1.12, y: -5 }}
                className="group flex w-[78px] cursor-default flex-col items-center gap-1.5 sm:w-[98px] lg:w-[100px]"
              >
                <div
                  className="relative flex h-[49px] w-[49px] items-center justify-center rounded-full border-[3px] border-white shadow-[0_8px_24px_rgba(40,25,100,0.16)] sm:h-[65px] sm:w-[65px] lg:h-[68px] lg:w-[68px]"
                  style={{ backgroundColor: service.bg }}
                >
                  <div className="absolute inset-1 rounded-full border border-white/80" />
                  <Icon
                    size={25}
                    strokeWidth={2}
                    style={{ color: service.color }}
                    className="relative z-10 sm:h-[29px] sm:w-[29px]"
                  />
                </div>

                <span
                  className={`rounded-full border border-[#e8ddf7] bg-white/95 px-2 py-1 text-center text-[8px] font-extrabold leading-tight shadow-sm backdrop-blur-sm sm:text-[10px] ${
                    active === i ? 'text-[#7138F5]' : 'text-[#101535]'
                  }`}
                >
                  {service.name}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Orbiting Particles */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={`particle-${i}`}
          className="pointer-events-none absolute inset-[8%] rounded-full"
          animate={reducedMotion ? {} : { rotate: 360 }}
          transition={{
            duration: 20 + i * 8,
            repeat: Infinity,
            ease: 'linear',
            delay: -i * 5,
          }}
        >
          <span
            className="absolute left-1/2 top-0 h-2 w-2 rounded-full shadow-[0_0_12px_rgba(113,56,245,0.5)]"
            style={{
              backgroundColor: ['#7138F5', '#E44891', '#FBBF24', '#22C55E'][i],
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

/* =========================================
   HERO ANIMATED BACKGROUND
========================================= */

function HeroAnimatedBackground() {
  const particles = [
    { left: '8%', top: '20%', size: 3.5, gold: true },
    { left: '18%', top: '70%', size: 3, gold: false },
    { left: '30%', top: '12%', size: 3, gold: true },
    { left: '76%', top: '18%', size: 3.5, gold: false },
    { left: '90%', top: '65%', size: 3, gold: true },
    { left: '62%', top: '85%', size: 3, gold: false },
    { left: '42%', top: '75%', size: 2, gold: true },
    { left: '94%', top: '35%', size: 3, gold: false },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="hero-glow-left absolute -left-40 top-[15%] h-[420px] w-[420px] rounded-full bg-[#7138F5]/[0.08] blur-[100px] sm:h-[580px] sm:w-[580px]" />
      <div className="hero-glow-right absolute -right-40 top-[5%] h-[440px] w-[440px] rounded-full bg-[#A78BFA]/[0.10] blur-[110px] sm:h-[600px] sm:w-[600px]" />
      <div className="hero-glow-bottom absolute bottom-[-220px] left-[25%] h-[400px] w-[500px] rounded-full bg-[#FF9F1C]/[0.08] blur-[120px]" />

      {/* Dotted Pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(#7138F5 0.7px, transparent 0.7px)',
          backgroundSize: '28px 28px',
          maskImage:
            'linear-gradient(to bottom, transparent, black 30%, black 75%, transparent)',
        }}
      />

      {/* Subtle Floating Particles */}
      {particles.map((particle, i) => (
        <span
          key={i}
          className={`hero-particle absolute rounded-full ${
            particle.gold ? 'bg-[#FF9F1C]/45' : 'bg-[#7138F5]/25'
          }`}
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}
    </div>
  );
}

/* =========================================
   MAIN HERO COMPONENT
========================================= */

export function Hero({ onReel, fx = true }) {
  const root = useRef(null);

  useEffect(() => {
    const calm = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (calm) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power4.out' },
      });

      tl.from(
        '.h-badge',
        {
          y: 16,
          opacity: 0,
          duration: 0.5,
        },
        0.05
      )
        .from(
          '.h-title-wrap',
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
          },
          '-=0.3'
        )
        .from(
          '.h-sub',
          {
            y: 15,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.3'
        )
        .from(
          '.h-cta',
          {
            scale: 0.9,
            opacity: 0,
            duration: 0.5,
            stagger: 0.06,
          },
          '-=0.25'
        );

      gsap.to('.hero-glow-left', {
        x: 90,
        y: 45,
        scale: 1.15,
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.hero-glow-right', {
        x: -75,
        y: 65,
        scale: 1.2,
        duration: 17,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.hero-glow-bottom', {
        x: 65,
        y: -35,
        scale: 1.12,
        duration: 19,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.utils.toArray('.hero-particle').forEach((particle, i) => {
        gsap.to(particle, {
          y: i % 2 === 0 ? -20 : 20,
          x: i % 3 === 0 ? 10 : -10,
          opacity: 0.5,
          duration: 4.8 + i * 0.6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={root}
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#FAF6FF] via-[#FFFDFB] to-white pb-10 pt-7 sm:pb-12 sm:pt-9 lg:pb-12 lg:pt-9"
    >
      {/* Delicate Micro Fairy Lights (Clean & Low Opacity) */}
      {fx && <DiwaliFairyLights />}

      {/* Background Video */}
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-[0.08]"
        src={MEDIA.heroVideo}
        poster={MEDIA.heroPoster}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 -z-10 bg-white/75" />

      {/* Ambient Lights */}
      <HeroAnimatedBackground />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-8 xl:gap-10">

          {/* LEFT SIDE */}
          <div className="relative z-20 flex min-w-0 flex-col items-center text-center lg:items-start lg:text-left">

            {/* CLEAN UNIFIED BADGES */}
            <div className="h-badge mb-5 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              
              {/* Subtle Diwali Greeting Pill */}
              {fx && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FDE68A] bg-amber-50/70 px-2.5 py-1 text-[11px] font-medium tracking-tight text-[#92400E] shadow-sm backdrop-blur-sm">
                  <MiniDiya size={17} />
                  <span>Shubh Deepavali</span>
                </span>
              )}

              {/* Agency Location Pill */}
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#7138F5]/20 bg-white px-3 py-1 text-[11px] font-semibold text-[#7138F5] shadow-sm sm:text-xs">
                <Sparkles size={12} className="text-[#8B5CF6]" />
                NCR’s Premier Agency • Dwarka Mor
              </span>

              {/* Status Pill */}
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-[#626b88] shadow-sm sm:text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Accepting Clients
              </span>
            </div>

            {/* Fixed + Animated Headline */}
            <HeroHeadlineCarousel />

            {/* Description */}
            <p className="h-sub mt-3 max-w-[560px] text-center text-sm leading-relaxed text-[#515b7c] sm:text-base lg:text-left lg:text-[16px]">
              High-intent{' '}
              <strong className="text-[#101535]">
                SEO, Social Media Marketing, Meta & Google Ads,
                Web Development and Lead Generation
              </strong>{' '}
              for businesses ready to dominate their market.
            </p>

            {/* CTA Buttons */}
            <div className="relative z-40 mt-6 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap lg:justify-start">
              <Magnetic
                href="#contact"
                className="h-cta glow-btn group flex w-full items-center justify-center gap-2 rounded-full bg-[#7138F5] px-6 py-3 text-xs font-bold text-white shadow-[0_8px_20px_rgba(113,56,245,0.28)] transition-all hover:bg-[#6025e8] sm:w-auto sm:text-sm"
              >
                Get Free Growth Consultation
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Magnetic>

              <Magnetic
                href="tel:7701910068"
                className="h-cta flex w-full items-center justify-center gap-2 rounded-full border border-[#ded5ec] bg-white px-5 py-3 text-xs font-bold text-[#101535] shadow-sm transition-colors hover:border-[#7138F5] sm:w-auto sm:text-sm"
              >
                <Phone
                  size={14}
                  className="text-[#7138F5]"
                />
                Call: +91 7701910068
              </Magnetic>
            </div>

            {/* Showreel */}
            <button
              type="button"
              onClick={onReel}
              className="h-cta mt-4 flex items-center justify-center gap-2 rounded-full py-2 text-xs font-bold text-[#101535] hover:text-[#7138F5] sm:text-sm"
            >
              <span className="pulse-ring flex h-8 w-8 items-center justify-center rounded-full border border-[#ded5ec] bg-white text-[#7138F5] shadow-sm">
                <Play size={13} fill="currentColor" />
              </span>
              Watch Showreel
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex w-full min-w-0 items-center justify-center lg:justify-end">
            <div className="pointer-events-none absolute inset-[15%] rounded-full bg-[#7138F5]/10 blur-[70px]" />
            <div className="relative w-full max-w-[510px]">
              <ServiceOrbit />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}