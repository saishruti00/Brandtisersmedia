import React, { useState, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from 'motion/react';
import {
  Sparkles,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Zap,
  ShieldCheck,
  Fuel,
} from 'lucide-react';
import { services } from '../../constants/siteData';
import { Heading } from '../ui/Common';

const brandGradients = [
  'from-[#7138F5] to-[#A86CF5]',
  'from-[#F46B68] to-[#FF9F1C]',
  'from-[#E44891] to-[#7138F5]',
  'from-[#2563EB] to-[#60A5FA]',
  'from-[#D99017] to-[#F59E0B]',
  'from-[#0D9488] to-[#2DD4BF]',
  'from-[#EA580C] to-[#F97316]',
  'from-[#16A34A] to-[#4ADE80]',
];

/* ============================================================
   LIGHT SLEEK BRAND WHEEL
============================================================ */
function BrandWheel({ isDriving, size = 'w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20' }) {
  return (
    <div className={`relative ${size} flex items-center justify-center`}>
      {/* Soft Violet Wheel Aura */}
      <div className="absolute inset-0 rounded-full bg-[#7138F5]/20 blur-md" />

      {/* Sleek Outer Tire Rim */}
      <div className="absolute inset-0 rounded-full border-[4px] border-[#251b4d] bg-[#1a1238] shadow-[0_6px_16px_rgba(40,20,80,0.25)]" />

      {/* Rotating Mechanical Spokes */}
      <motion.div
        animate={isDriving ? { rotate: 360 } : { rotate: 0 }}
        transition={{
          repeat: Infinity,
          duration: 0.85,
          ease: 'linear',
        }}
        className="relative z-10 flex h-[76%] w-[76%] items-center justify-center rounded-full border-2 border-dashed border-[#A78BFA] bg-gradient-to-tr from-[#38236d] to-[#5a31a8]"
      >
        <div className="absolute h-full w-[2px] bg-gradient-to-b from-[#FFA500] via-transparent to-[#FFA500]" />
        <div className="absolute h-[2px] w-full bg-gradient-to-r from-[#FFA500] via-transparent to-[#FFA500]" />
        <div className="absolute h-[2px] w-full rotate-45 bg-gradient-to-r from-[#A78BFA] via-transparent to-[#A78BFA]" />
        <div className="absolute h-[2px] w-full -rotate-45 bg-gradient-to-r from-[#A78BFA] via-transparent to-[#A78BFA]" />

        {/* Center Hub Nut */}
        <div className="h-2.5 w-2.5 rounded-full border border-white bg-[#FF9F1C] shadow-[0_0_8px_#FF9F1C] sm:h-3 sm:w-3" />
      </motion.div>
    </div>
  );
}

/* ============================================================
   LIGHT-THEMED SMART SERVICE VEHICLE (Pearl & Soft Lilac)
============================================================ */
function SmartServiceVehicle({
  isDriving,
  activeIndex,
  currentService,
  activeGradient,
  reducedMotion,
}) {
  const IconComponent = currentService?.icon || Sparkles;

  return (
    <div className="relative mx-auto flex w-full max-w-[860px] flex-col items-center justify-center">
      {/* Warm Golden/Amber Headlight Projection (Aligned with lowered indicator) */}
      <div className="pointer-events-none absolute -right-16 top-[55%] z-0 h-28 w-56 -translate-y-1/2 rotate-[-2deg] bg-gradient-to-r from-[#FFA500]/25 via-[#7138F5]/10 to-transparent blur-2xl sm:-right-24 sm:w-72" />

      {/* Vehicle Floating Suspension Bounce */}
      <motion.div
        animate={
          isDriving
            ? { y: [0, -3.5, 0], rotate: [-0.2, 0.25, -0.2] }
            : { y: [0, -1.2, 0] }
        }
        transition={{
          repeat: Infinity,
          duration: isDriving ? 0.38 : 2.5,
          ease: 'easeInOut',
        }}
        className="relative z-10 w-full"
      >
        <div className="relative mx-auto w-full">
          {/* Rear Flame Exhaust */}
          <div className="absolute -left-3 bottom-10 z-10 flex items-center sm:-left-5 sm:bottom-12">
            <motion.div
              animate={
                isDriving
                  ? { scaleX: [0.9, 1.45, 0.9], opacity: [0.75, 1, 0.75] }
                  : { scaleX: 0.5, opacity: 0.25 }
              }
              transition={{ repeat: Infinity, duration: 0.22 }}
              className="h-3.5 w-11 origin-right rounded-l-full bg-gradient-to-l from-[#7138F5] via-[#F46B68] to-transparent blur-[2px]"
            />
          </div>

          {/* Underglow Soft Purple Aura */}
          <div className="absolute -bottom-1 left-10 right-10 h-8 rounded-full bg-[#7138F5]/20 blur-md" />

          {/* CHASSIS CONTAINER: Pearl-White & Light Lilac Body */}
          <div className="relative overflow-hidden rounded-[26px_55px_22px_22px] border-2 border-[#d9c8fa] bg-gradient-to-r from-white via-[#faf7ff] to-[#f0e8ff] p-4.5 shadow-[0_15px_35px_rgba(113,56,245,0.12),0_2px_10px_rgba(0,0,0,0.03)] sm:rounded-[36px_85px_26px_26px] sm:p-7">
            
            {/* Top Aerodynamic Strip */}
            <div className="flex items-center justify-between border-b border-[#e8ddf7] pb-3">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-[#7138F5] shadow-[0_0_8px_rgba(113,56,245,0.6)]">
                  <span className="h-1 w-1 rounded-full bg-white" />
                </span>
                <span className="text-[9px] font-black tracking-widest text-[#7138F5] sm:text-[10px]">
                  GROWTH CARRIER // UNIT {String(activeIndex + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="flex items-center gap-1.5 rounded-full border border-[#d8c5fa] bg-[#f2ebff] px-2.5 py-0.5 text-[9px] font-bold text-[#7138F5] sm:text-[10px]">
                <Zap size={10} className="text-[#FF9F1C]" />
                <span>{isDriving ? 'FULL THROTTLE' : 'STATION DOCKED'}</span>
              </div>
            </div>

            {/* ONBOARD SCREEN: ALL DETAILS IN CLEAN CRISP COLORS */}
            <div className="relative my-3 min-h-[160px] sm:my-4 sm:min-h-[175px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentService?.title}
                  initial={
                    reducedMotion
                      ? false
                      : { opacity: 0, x: 20, filter: 'blur(4px)' }
                  }
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
                >
                  {/* Service Icon with Badge */}
                  <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-center sm:gap-2">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${activeGradient} p-3 text-white shadow-[0_8px_20px_rgba(113,56,245,0.25)] sm:h-20 sm:w-20 sm:rounded-3xl`}
                    >
                      <IconComponent
                        size={32}
                        strokeWidth={2}
                        className="sm:h-10 sm:w-10"
                      />
                    </div>

                    <div className="inline-flex items-center gap-1 rounded-full border border-[#d8c5fa] bg-white px-2.5 py-0.5 text-[10px] font-bold text-[#7138F5] shadow-sm">
                      <Fuel size={11} className="text-[#FF9F1C]" />
                      Station #{String(activeIndex + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Service Title, Description, Tags & Button */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-black leading-tight text-[#101535] sm:text-2xl lg:text-[26px]">
                      {currentService?.title}
                    </h3>

                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[#515b7c] sm:text-sm">
                      {currentService?.text ||
                        'Ultra-fast, conversion-focused strategy built to acquire verified inquiries and accelerate revenue.'}
                    </p>

                    {/* Features Tags */}
                    <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                      {['High Intent Funnels', 'Verified Inquiries', 'Measurable Growth'].map(
                        (tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 rounded-md border border-[#e8ddf7] bg-white px-2 py-0.5 text-[9px] font-semibold text-[#101535] shadow-xs sm:px-2.5 sm:py-1 sm:text-[11px]"
                          >
                            <ShieldCheck size={11} className="text-[#7138F5]" />
                            {tag}
                          </span>
                        )
                      )}
                    </div>

                    {/* Integrated CTA Button */}
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <a
                        href="#contact"
                        className="group inline-flex items-center gap-2 rounded-full bg-[#7138F5] px-5 py-2 text-xs font-bold text-white shadow-[0_4px_16px_rgba(113,56,245,0.3)] transition-all hover:bg-[#5f22e6] active:scale-95"
                      >
                        Explore This Service
                        <ArrowUpRight
                          size={14}
                          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </a>

                      <span className="text-[11px] font-medium text-[#7c86a2]">
                        ⚡ Active Deployment Ready
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* FRONT INDICATOR / HEADLIGHT NODE (Shifted down to mid-front position) */}
            <div className="absolute -right-2 top-[55%] h-10 w-3 -translate-y-1/2 rounded-r-lg border border-amber-300 bg-[#FF9F1C] shadow-[0_0_15px_#FFA500]" />
          </div>

          {/* DUAL WHEELS AT BASE */}
          <div className="absolute -bottom-6 left-8 z-20 sm:-bottom-7 sm:left-14">
            <BrandWheel isDriving={isDriving} />
          </div>
          <div className="absolute -bottom-6 right-10 z-20 sm:-bottom-7 sm:right-16">
            <BrandWheel isDriving={isDriving} />
          </div>
        </div>
      </motion.div>

      {/* ROAD TRACK RUNWAY */}
      <div className="relative mt-2.5 h-12 w-full overflow-hidden sm:mt-3 sm:h-14">
        {/* Track Line */}
        <div className="absolute top-1/2 h-[2px] w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-[#7138F5]/25 to-transparent" />

        {/* Animated Highway Markers */}
        <motion.div
          animate={isDriving ? { x: [0, -180] } : { x: 0 }}
          transition={{
            repeat: Infinity,
            duration: 0.65,
            ease: 'linear',
          }}
          className="flex w-[200%] items-center gap-7 pt-3.5 sm:pt-4"
        >
          {Array.from({ length: 30 }).map((_, i) => (
            <span
              key={i}
              className="h-1.5 w-10 shrink-0 rounded-full bg-gradient-to-r from-[#7138F5] via-[#A855F7] to-[#F46B68] shadow-[0_0_5px_rgba(113,56,245,0.25)]"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ============================================================
   MAIN SERVICES SECTION
============================================================ */
export function ServicesSection() {
  const serviceList = services.slice(0, 8);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoDrive, setIsAutoDrive] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const reducedMotion = useReducedMotion();

  // Cruise Control (Auto switch stations)
  useEffect(() => {
    if (!isAutoDrive) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % serviceList.length);
        setIsTransitioning(false);
      }, 300);
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoDrive, serviceList.length]);

  const handleSelectService = (index) => {
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev === 0 ? serviceList.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % serviceList.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  if (!serviceList.length) return null;

  const currentService = serviceList[activeIndex];
  const activeGradient = brandGradients[activeIndex % brandGradients.length];

  return (
    <section
      id="services"
      className="scroll-mt-16 border-t border-[#e8ddf7] bg-white py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Standard Clean Heading */}
        <Heading
          center
          eyebrow="Our Core Capabilities"
          title="Digital services that accelerate"
          accent="your growth engine."
          description="Everything your brand needs to build presence, acquire verified inquiries, and scale market share."
        />

        {/* ============================================================
            SEAMLESS CONTAINER (No Separate Background or Border)
        ============================================================ */}
        <div className="mx-auto mt-10 max-w-4xl">
          
          {/* Controls Bar directly on common background */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            {/* Auto-Drive Toggle */}
            <button
              type="button"
              onClick={() => setIsAutoDrive(!isAutoDrive)}
              className={`flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold transition-all ${
                isAutoDrive
                  ? 'border-[#7138F5]/30 bg-[#7138F5] text-white shadow-[0_2px_10px_rgba(113,56,245,0.25)]'
                  : 'border-[#e5e7ef] bg-white text-[#626b88] hover:border-[#7138F5]'
              }`}
            >
              {isAutoDrive ? <Pause size={13} /> : <Play size={13} />}
              <span>Auto Drive {isAutoDrive ? 'ON' : 'OFF'}</span>
            </button>

            {/* Station Steer Navigation */}
            <div className="flex items-center gap-2">
              <span className="mr-2 text-xs font-bold text-[#626b88]">
                STATION {String(activeIndex + 1).padStart(2, '0')} / {String(serviceList.length).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous station"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#e5e7ef] bg-white text-[#101535] shadow-sm transition hover:border-[#d9c8fa] hover:text-[#7138F5]"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next station"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#e5e7ef] bg-white text-[#101535] shadow-sm transition hover:border-[#d9c8fa] hover:text-[#7138F5]"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* THE LIGHT PEARL VEHICLE */}
          <SmartServiceVehicle
            isDriving={isAutoDrive || isTransitioning}
            activeIndex={activeIndex}
            currentService={currentService}
            activeGradient={activeGradient}
            reducedMotion={reducedMotion}
          />

          {/* ============================================================
              CLICKABLE STATION ROAD STOPS (TIMELINE)
          ============================================================ */}
          <div className="mt-4 flex items-center justify-between gap-1 overflow-x-auto pb-2 pt-2">
            {serviceList.map((srv, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <button
                  key={srv.title}
                  onClick={() => handleSelectService(idx)}
                  className={`group relative flex min-w-[76px] flex-1 flex-col items-center gap-1.5 rounded-xl border p-2 transition-all sm:min-w-[90px] ${
                    isSelected
                      ? 'border-[#e4d5ff] bg-[#f5f0ff] shadow-[0_2px_10px_rgba(113,56,245,0.08)]'
                      : 'border-transparent hover:bg-[#faf7ff]'
                  }`}
                >
                  {/* Station Marker */}
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-full border text-[10px] font-black transition-all ${
                      isSelected
                        ? 'border-[#7138F5] bg-[#7138F5] text-white shadow-[0_0_10px_rgba(113,56,245,0.4)]'
                        : 'border-[#e8ddf7] bg-white text-[#626b88] group-hover:border-[#7138F5]/60'
                    }`}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </div>

                  <span
                    className={`truncate text-center text-[10px] font-bold ${
                      isSelected ? 'text-[#7138F5]' : 'text-[#626b88]'
                    }`}
                  >
                    {srv.title.split(' ')[0]}
                  </span>

                  {/* Active Indicator Bar */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeCleanStationBar"
                      className="absolute -bottom-1 h-1 w-7 rounded-full bg-[#7138F5]"
                    />
                  )}
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}