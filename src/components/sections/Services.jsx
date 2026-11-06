
import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
  useMemo
} from 'react';

import {
  motion,
  AnimatePresence,
  useReducedMotion
} from 'motion/react';

import {
  Check,
  FileText,
  Eye,
  Download,
  Sparkles
} from 'lucide-react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { services } from '../../constants/siteData';

gsap.registerPlugin(ScrollTrigger);

const PURPLE = '#7138F5';
const NAVBAR_OFFSET = 80;
const SCROLL_PER_SERVICE = 300;
const PDF_PATH = '/brandtisers-services.pdf';

const revealEase = [0.22, 1, 0.36, 1];

/* =========================================
   DESKTOP SERVICE CIRCLE
========================================= */

function ServiceCircle({
  service,
  index,
  activeIndex,
  reducedMotion,
  onSelect
}) {
  const Icon = service.icon;

  const isRevealed = index <= activeIndex;
  const isActive = index === activeIndex;

  return (
    <div className="relative aspect-square w-full">
      <AnimatePresence initial={false}>
        {isRevealed && (
          <motion.button
            key={service.title}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Explore ${service.title}`}
            aria-current={isActive ? 'step' : undefined}
            initial={
              reducedMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    scale: 0.2,
                    rotate: -18
                  }
            }
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0
            }}
            exit={{
              opacity: 0,
              scale: 0.35,
              rotate: 10
            }}
            transition={{
              duration: reducedMotion ? 0.01 : 0.6,
              ease: revealEase
            }}
            className={`relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-full border p-4 text-center outline-none transition-[border-color,box-shadow] duration-300 focus-visible:ring-4 focus-visible:ring-[#c4adff] ${
              isActive
                ? 'border-[#a780ff] shadow-[0_12px_32px_rgba(113,56,245,0.18),inset_0_4px_16px_rgba(255,255,255,0.9)]'
                : 'border-[#e0d0ff] shadow-[0_6px_20px_rgba(113,56,245,0.07),inset_0_3px_12px_rgba(255,255,255,0.8)]'
            }`}
            style={{
              background: isActive
                ? 'radial-gradient(circle at 35% 20%,#ffffff 0%,#eee4ff 48%,#d1bcff 100%)'
                : 'radial-gradient(circle at 35% 20%,#ffffff 0%,#faf7ff 52%,#e8dcff 100%)'
            }}
          >
            <span className="pointer-events-none absolute inset-[5px] rounded-full border border-white/80" />

            <span className="pointer-events-none absolute left-[22%] top-[7%] h-[12%] w-[52%] -rotate-12 rounded-full bg-white/70 blur-md" />

            {isActive && !reducedMotion && (
              <motion.span
                className="pointer-events-none absolute inset-[3px] rounded-full border-2 border-[#7138F5]/25"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.98, 1, 0.98]
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            )}

            <div className="relative z-10 flex w-full flex-col items-center justify-center">
              <motion.div
                initial={reducedMotion ? false : { scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: reducedMotion ? 0 : 0.12,
                  type: 'spring',
                  stiffness: 180,
                  damping: 15
                }}
                className={`mb-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-[0_5px_14px_rgba(113,56,245,0.15)] ${
                  isActive
                    ? 'bg-[#7138F5] text-white'
                    : 'bg-white text-[#7138F5]'
                }`}
              >
                <Icon size={20} strokeWidth={1.8} />
              </motion.div>

              <span className="mb-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#7138F5]">
                Service {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className="max-w-[95%] text-xs font-extrabold leading-[1.25] text-[#101535] xl:text-[13px]">
                {service.title}
              </h3>

              <p
                className="mt-2 max-w-[95%] text-[10px] leading-[1.4] text-[#626b88] xl:text-[11px]"
                style={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 4,
                  overflow: 'hidden'
                }}
              >
                {service.text}
              </p>
            </div>

            {!isActive && (
              <span className="absolute bottom-[9%] right-[16%] flex h-5 w-5 items-center justify-center rounded-full bg-[#7138F5] text-white">
                <Check size={11} strokeWidth={3} />
              </span>
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {!isRevealed && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-dashed border-[#d9c8fa] bg-white/60">
            <span className="text-[10px] font-bold text-[#c4afea]">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================
   MOBILE SERVICE CIRCLE
========================================= */

function MobileServiceCircle({
  service,
  index,
  reducedMotion
}) {
  const Icon = service.icon;

  return (
    <motion.div
      key={service.title}
      initial={
        reducedMotion
          ? { opacity: 0 }
          : {
              opacity: 0,
              scale: 0.4,
              rotate: -12
            }
      }
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 0
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
        rotate: 12
      }}
      transition={{
        duration: reducedMotion ? 0.01 : 0.55,
        ease: revealEase
      }}
      className="relative flex aspect-square w-[min(68vw,260px)] flex-col items-center justify-center overflow-hidden rounded-full border border-[#b999ff] p-6 text-center shadow-[0_15px_40px_rgba(113,56,245,0.16),inset_0_5px_18px_rgba(255,255,255,0.9)]"
      style={{
        background:
          'radial-gradient(circle at 35% 20%,#ffffff 0%,#f1e8ff 48%,#d3bdff 100%)'
      }}
    >
      <div className="pointer-events-none absolute inset-[5px] rounded-full border border-white/80" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#7138F5] text-white">
          <Icon size={23} />
        </div>

        <span className="mb-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#7138F5]">
          Service {String(index + 1).padStart(2, '0')}
        </span>

        <h3 className="max-w-[185px] text-[13px] font-extrabold leading-tight text-[#101535]">
          {service.title}
        </h3>

        <p
          className="mt-2 max-w-[190px] text-[10px] leading-[1.4] text-[#626b88]"
          style={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 4,
            overflow: 'hidden'
          }}
        >
          {service.text}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================
   MAIN SERVICES SECTION
========================================= */

export function ServicesSection() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);

  const contentRef = useRef(null);
  const contentSpaceRef = useRef(null);

  const triggerRef = useRef(null);
  const activeIndexRef = useRef(0);

  const reducedMotion = useReducedMotion();

  const serviceList = useMemo(
    () => services.slice(0, 8),
    []
  );

  const total = serviceList.length;

  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = serviceList[activeIndex];

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  /* =========================================
     FIT HEADING, CIRCLES AND PDF FOOTER
     INSIDE THE VIEWPORT
  ========================================= */

  const fitContent = useCallback(() => {
    const pin = pinRef.current;
    const content = contentRef.current;
    const space = contentSpaceRef.current;

    if (!pin || !content || !space) return;

    // Reset previous scaling.
    content.style.transform = 'none';
    content.style.transformOrigin = 'top center';
    space.style.height = 'auto';

    // Measure the complete content including PDF buttons.
    const naturalHeight = content.scrollHeight;
    const naturalWidth = content.offsetWidth;

    const availableHeight = Math.max(
      250,
      pin.clientHeight - 48
    );

    const availableWidth = Math.max(
      200,
      pin.clientWidth - 24
    );

    const heightScale =
      availableHeight / Math.max(naturalHeight, 1);

    const widthScale =
      availableWidth / Math.max(naturalWidth, 1);

    const scale = Math.min(
      1,
      heightScale,
      widthScale
    );

    content.style.transform = `scale(${scale})`;
    content.style.transformOrigin = 'top center';

    // Reserve the complete scaled height.
    space.style.height =
      `${Math.ceil(naturalHeight * scale)}px`;
  }, []);

  /* =========================================
     GSAP SCROLL PINNING
  ========================================= */

  useLayoutEffect(() => {
    if (
      !sectionRef.current ||
      !pinRef.current ||
      total <= 1
    ) {
      return;
    }

    const section = sectionRef.current;

    fitContent();

    const ctx = gsap.context(() => {
      triggerRef.current = ScrollTrigger.create({
        trigger: section,

        start: `top top+=${NAVBAR_OFFSET}`,

        end: () =>
          `+=${total * SCROLL_PER_SERVICE}`,

        pin: pinRef.current,

        pinSpacing: true,

        anticipatePin: 1,

        invalidateOnRefresh: true,

        onUpdate: (self) => {
          const nextIndex = Math.min(
            total - 1,
            Math.floor(self.progress * total)
          );

          if (activeIndexRef.current !== nextIndex) {
            activeIndexRef.current = nextIndex;
            setActiveIndex(nextIndex);
          }
        }
      });
    }, section);

    const handleResize = () => {
      fitContent();
      ScrollTrigger.refresh();
    };

    const refreshFrame = requestAnimationFrame(() => {
      fitContent();
      ScrollTrigger.refresh();
    });

    window.addEventListener('resize', handleResize);

    document.fonts?.ready.then(() => {
      if (triggerRef.current) {
        fitContent();
        ScrollTrigger.refresh();
      }
    });

    return () => {
      cancelAnimationFrame(refreshFrame);

      window.removeEventListener(
        'resize',
        handleResize
      );

      ctx.revert();

      if (contentRef.current) {
        contentRef.current.style.transform = '';
        contentRef.current.style.transformOrigin = '';
      }

      if (contentSpaceRef.current) {
        contentSpaceRef.current.style.height = '';
      }

      triggerRef.current = null;
    };
  }, [total, fitContent]);

  /* =========================================
     CLICK TO NAVIGATE SERVICES
  ========================================= */

  const goToService = (index) => {
    const trigger = triggerRef.current;

    if (!trigger) return;

    const safeIndex = Math.max(
      0,
      Math.min(total - 1, index)
    );

    const targetProgress =
      (safeIndex + 0.4) / total;

    const scrollPosition =
      trigger.start +
      (trigger.end - trigger.start) * targetProgress;

    window.scrollTo({
      top: scrollPosition,
      behavior: reducedMotion ? 'auto' : 'smooth'
    });
  };

  if (!total) return null;

  return (
    <section
      id="services"
      ref={sectionRef}
className="relative bg-[#f7f2ff] border-0"    >
      {/* Pinned viewport */}
      <div
        ref={pinRef}
        className="relative flex w-full items-center justify-center overflow-hidden"
        style={{
          height: `calc(100svh - ${NAVBAR_OFFSET}px)`,
          minHeight: 250
        }}
      >
        {/* Background effects */}
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#e5d8ff]/35 blur-[90px]" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#e5d8ff]/35 blur-[90px]" />

        {/* Scaled content holder */}
        <div
          ref={contentSpaceRef}
          className="relative w-full"
        >
          <div
            ref={contentRef}
            className="absolute left-0 top-0 w-full"
          >
            <div className="mx-auto w-full max-w-[1450px] px-3 sm:px-5 lg:px-6">

              {/* =================================
                  COMPACT SINGLE-LINE HEADING
              ================================= */}

              <div className="mb-3">

                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#ddcaff] bg-[#f5efff] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-[#7138F5]">
                  <Sparkles size={12} />
                  Our Full-Scale Services
                </div>

                <h2 className="whitespace-nowrap text-[clamp(18px,2.7vw,39px)] font-extrabold leading-[1.15] tracking-tight text-[#101535]">
                  Digital solutions built for{' '}
                  <span className="bg-gradient-to-r from-[#7138F5] via-[#9639ee] to-[#d08748] bg-clip-text text-transparent">
                    measurable growth.
                  </span>
                </h2>

                <p className="mt-2 text-xs leading-relaxed text-[#626b88] sm:text-sm">
                  From targeted Google & Meta ad campaigns
                  to custom web platforms and SEO.
                </p>

              </div>

              {/* =================================
                  SERVICES PANEL
              ================================= */}

<div className="relative bg-transparent px-4 py-3 sm:px-5 lg:px-6">
                {/* Panel header */}
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-extrabold text-[#101535] sm:text-base">
                      Explore Our Services
                    </h3>

                    <p className="mt-1 text-[11px] text-[#74718d]">
                      Discover how every service supports your growth.
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full bg-[#f0e9ff] px-3 py-1.5 text-xs font-extrabold text-[#7138F5]">
                    {String(activeIndex + 1).padStart(2, '0')}
                    {' / '}
                    {String(total).padStart(2, '0')}
                  </span>
                </div>

                {/* =================================
                    DESKTOP 4 x 2 CIRCLES
                ================================= */}

                <div className="hidden md:block">
                  <div className="mx-auto grid max-w-[940px] grid-cols-4 justify-items-center gap-x-4 gap-y-2 lg:gap-x-5 lg:gap-y-3">
                    {serviceList.map((service, index) => (
                      <div
                        key={service.title}
                        className="w-full max-w-[210px]"
                      >
                        <ServiceCircle
                          service={service}
                          index={index}
                          activeIndex={activeIndex}
                          reducedMotion={reducedMotion}
                          onSelect={goToService}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* =================================
                    MOBILE DISPLAY
                ================================= */}

                <div className="flex flex-col items-center md:hidden">

                  {/* Previous services */}
                  <div className="mb-2 flex min-h-[36px] flex-wrap items-center justify-center gap-2">
                    {serviceList.map((service, index) => {
                      if (index >= activeIndex) return null;

                      const Icon = service.icon;

                      return (
                        <motion.button
                          key={service.title}
                          type="button"
                          onClick={() => goToService(index)}
                          aria-label={service.title}
                          initial={{
                            opacity: 0,
                            scale: 0.5
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1
                          }}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d4bfff] bg-[#eee5ff] text-[#7138F5]"
                        >
                          <Icon size={15} />
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Active service */}
                  <div className="flex h-[275px] w-full items-center justify-center">
                    <AnimatePresence mode="wait">
                      <MobileServiceCircle
                        key={activeService.title}
                        service={activeService}
                        index={activeIndex}
                        reducedMotion={reducedMotion}
                      />
                    </AnimatePresence>
                  </div>

                  {/* Progress steps */}
                  <div className="mt-3 flex items-center justify-center gap-2">
                    {serviceList.map((service, index) => (
                      <span
                        key={service.title}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index <= activeIndex
                            ? 'w-5 bg-[#7138F5]'
                            : 'w-2 bg-[#dfd2f8]'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* =================================
                    PDF BROCHURE - ALWAYS VISIBLE
                ================================= */}

                <div className="mt-3 flex flex-col gap-3 rounded-2xl border border-[#e8ddfa] bg-[#f7f2ff] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">

                  {/* Brochure details */}
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#7138F5]/10 text-[#7138F5]">
                      <FileText
                        size={22}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-extrabold text-[#101535]">
                        Explore Our Company Brochure
                      </h3>

                      <p className="mt-1 text-xs leading-relaxed text-[#626b88]">
                        Discover Brandtisers Media's digital
                        marketing services and solutions.
                      </p>
                    </div>
                  </div>

                  {/* View and Download buttons */}
                  <div className="flex shrink-0 items-center gap-2">

                    <a
                      href={PDF_PATH}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#7138F5] bg-white px-4 py-2.5 text-xs font-bold text-[#7138F5] transition-colors hover:bg-[#f0e9ff]"
                    >
                      <Eye size={15} />
                      View PDF
                    </a>

                    <a
                      href={PDF_PATH}
                      download="Brandtisers-Media-Brochure.pdf"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7138F5] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#5c28d7]"
                    >
                      <Download size={15} />
                      Download
                    </a>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
