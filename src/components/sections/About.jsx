import React, {
  useRef,
  useEffect,
  useState,
  useLayoutEffect,
  useCallback
} from "react";

import { motion, useReducedMotion } from "motion/react";

import {
  ArrowRight,
  Calculator,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  TrendingUp,
  Users,
  Clapperboard,
  LoaderCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Reveal, Magnetic } from "../ui/Common";

/* =========================================
   DUMMY VIDEO DATA - UNCHANGED
========================================= */

const showcaseVideos = [
  {
    id: 1,
    title: "Creative Campaigns",
    category: "BRAND STORYTELLING",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    poster:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=700&q=85",
  },
  {
    id: 2,
    title: "Digital Experiences",
    category: "DIGITAL MARKETING",
    video:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    poster:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=85",
  },
  {
    id: 3,
    title: "Social Media Creatives",
    category: "CONTENT CREATION",
    video:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    poster:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=700&q=85",
  },
  {
    id: 4,
    title: "Growth Strategies",
    category: "PERFORMANCE MARKETING",
    video:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    poster:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=85",
  },
  {
    id: 5,
    title: "Brand Visuals",
    category: "CREATIVE DESIGN",
    video:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    poster:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=85",
  },
];

const VIDEO_COUNT = showcaseVideos.length;

// Continuous carousel speed in pixels per second.
const CAROUSEL_SPEED = 38;

// How long a manually clicked card remains highlighted.
const CLICK_FOCUS_DURATION = 2600;

/* =========================================
   VIDEO CARD COMPONENT
========================================= */

function VideoCard({
  item,
  isActive,
  onSelect,
  onTogglePause,
  isPaused,
}) {
  const videoRef = useRef(null);

  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const reducedMotion = useReducedMotion();

  /* =========================================
     VIDEO PLAY / PAUSE
  ========================================= */

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (isActive && !isPaused && !hasError) {
      setIsLoading(true);

      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsLoading(false);
          })
          .catch(() => {
            setIsPlaying(false);
            setIsLoading(false);
          });
      }
    } else {
      video.pause();
      setIsPlaying(false);
      setIsLoading(false);
    }

    return () => {
      video.pause();
    };
  }, [isActive, isPaused, hasError]);

  /* =========================================
     VIDEO PLAYBACK CONTROL
  ========================================= */

  const togglePlayback = (event) => {
    event.stopPropagation();

    if (!isActive) {
      onSelect();
      return;
    }

    onTogglePause();
  };

  /* =========================================
     MUTE / UNMUTE
  ========================================= */

  const toggleMute = (event) => {
    event.stopPropagation();

    const nextMuted = !muted;

    setMuted(nextMuted);

    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
    }
  };

  /* =========================================
     CARD UI
  ========================================= */

  return (
    <motion.div
      onClick={onSelect}
      animate={{
        scale: isActive ? 1.08 : 0.9,
        opacity: isActive ? 1 : 0.7,
        y: isActive ? -8 : 0,
      }}
      transition={{
        duration: reducedMotion ? 0 : 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative h-[320px] w-[195px] shrink-0 cursor-pointer overflow-hidden rounded-[26px] border shadow-[0_20px_50px_rgba(30,12,80,0.15)] transition-[border-color,box-shadow] duration-500 sm:h-[380px] sm:w-[225px] lg:h-[400px] lg:w-[235px] ${
        isActive
          ? "z-10 border-[#7138F5]/60 shadow-[0_25px_65px_rgba(113,56,245,0.25)]"
          : "z-0 border-white/30"
      }`}
      style={{
        backgroundColor: "#1a084c",
      }}
    >
      {/* POSTER IMAGE */}

      <img
        src={item.poster}
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* VIDEO */}

      {!hasError && (
        <video
          ref={videoRef}
          src={item.video}
          poster={item.poster}
          muted={muted}
          loop
          playsInline
          preload={isActive ? "auto" : "none"}
          controls={false}
          onLoadedData={() => {
            setIsLoading(false);
            setHasError(false);
          }}
          onCanPlay={() => {
            setIsLoading(false);
          }}
          onPlaying={() => {
            setIsPlaying(true);
            setIsLoading(false);
          }}
          onPause={() => {
            setIsPlaying(false);
          }}
          onWaiting={() => {
            if (isActive) setIsLoading(true);
          }}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
            setIsPlaying(false);
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* GRADIENT OVERLAY */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10072d]/95 via-[#10072d]/10 to-[#10072d]/25" />

      {/* CATEGORY */}

      <div className="absolute left-4 top-4 z-10 max-w-[calc(100%-80px)] rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-[10px] font-black tracking-wide text-white backdrop-blur-md">
        {item.category}
      </div>

      {/* MUTE BUTTON */}

      <button
        type="button"
        onClick={toggleMute}
        className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all hover:bg-black/65"
        aria-label={muted ? "Unmute video" : "Mute video"}
      >
        {muted ? (
          <VolumeX size={16} />
        ) : (
          <Volume2 size={16} />
        )}
      </button>

      {/* LOADING INDICATOR */}

      {isLoading && isActive && !hasError && (
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <LoaderCircle
            size={30}
            className="animate-spin text-white"
          />
        </div>
      )}

      {/* VIDEO CONTENT */}

      <div className="absolute inset-x-0 bottom-0 z-20 p-5">
        <button
          type="button"
          onClick={togglePlayback}
          disabled={hasError}
          className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-white/30 disabled:cursor-not-allowed disabled:opacity-50"
          aria-label={
            isActive && isPlaying
              ? "Pause video"
              : "Play video"
          }
        >
          {isActive && isPlaying ? (
            <Pause size={18} fill="currentColor" />
          ) : (
            <Play size={18} fill="currentColor" />
          )}
        </button>

        <h3 className="text-lg font-black leading-tight text-white">
          {item.title}
        </h3>

        <p className="mt-2 text-xs text-white/70">
          Brandtisers Media Showcase
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================
   ABOUT SECTION
========================================= */

export function About() {
  const [activeGlobalIndex, setActiveGlobalIndex] =
    useState(VIDEO_COUNT * 1 + 2);

  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const groupRef = useRef(null);
  const cardRefs = useRef([]);

  const offsetRef = useRef(0);
  const groupStrideRef = useRef(0);
  const stepRef = useRef(0);
  const firstCardLeftRef = useRef(0);
  const cardWidthRef = useRef(0);

  const activeRef = useRef(activeGlobalIndex);
  const focusRef = useRef({
    index: null,
    until: 0,
  });

  const nudgeRef = useRef(0);
  const initializedRef = useRef(false);

  const reducedMotion = useReducedMotion();

  const activeIndex =
    ((activeGlobalIndex % VIDEO_COUNT) + VIDEO_COUNT) %
    VIDEO_COUNT;

  /* =========================================
     THREE GROUPS FOR SEAMLESS INFINITE LOOP
  ========================================= */

  const repeatedGroups = [0, 1, 2];

  /* =========================================
     MEASURE CAROUSEL DIMENSIONS
  ========================================= */

  const measureCarousel = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const group = groupRef.current;

    if (!viewport || !track || !group) return;

    const firstCard = cardRefs.current[0];
    const secondCard = cardRefs.current[1];

    if (!firstCard || !secondCard) return;

    const styles = window.getComputedStyle(track);
    const groupGap = parseFloat(styles.columnGap) || 0;

    const stride = group.offsetWidth + groupGap;
    const step = secondCard.offsetLeft - firstCard.offsetLeft;

    if (stride <= 0 || step <= 0) return;

    const previousStride = groupStrideRef.current;

    groupStrideRef.current = stride;
    stepRef.current = step;
    firstCardLeftRef.current = firstCard.offsetLeft;
    cardWidthRef.current = firstCard.offsetWidth;

    if (!initializedRef.current) {
      // Start with the middle duplicated group.
      const initialIndex = VIDEO_COUNT + 2;

      offsetRef.current =
        viewport.clientWidth / 2 -
        (
          firstCard.offsetLeft +
          initialIndex * step +
          firstCard.offsetWidth / 2
        );

      // Keep the offset inside the middle group.
      while (offsetRef.current > -stride) {
        offsetRef.current -= stride;
      }

      while (offsetRef.current <= -2 * stride) {
        offsetRef.current += stride;
      }

      initializedRef.current = true;
    } else if (previousStride > 0) {
      // Preserve the carousel position on resize.
      offsetRef.current =
        (offsetRef.current / previousStride) * stride;
    }

    track.style.transform =
      `translate3d(${offsetRef.current}px, 0, 0)`;
  }, []);

  useLayoutEffect(() => {
    measureCarousel();

    const observer = new ResizeObserver(() => {
      measureCarousel();
    });

    if (viewportRef.current) {
      observer.observe(viewportRef.current);
    }

    if (groupRef.current) {
      observer.observe(groupRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [measureCarousel]);

  /* =========================================
     DETECT CAROUSEL VISIBILITY
  ========================================= */

  useEffect(() => {
    const element = viewportRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  /* =========================================
     CONTINUOUS INFINITE CAROUSEL MOVEMENT
  ========================================= */

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) return;

    let animationFrame;
    let previousTime = null;

    const animate = (timestamp) => {
      if (previousTime === null) {
        previousTime = timestamp;
      }

      const delta = Math.min(
        (timestamp - previousTime) / 1000,
        0.05
      );

      previousTime = timestamp;

      const stride = groupStrideRef.current;
      const step = stepRef.current;

      if (stride > 0 && step > 0) {
        if (isVisible && !reducedMotion) {
          // Continuous movement, no interval or slide stop.
          offsetRef.current -= CAROUSEL_SPEED * delta;

          // Smoothly move when arrows are clicked.
          if (Math.abs(nudgeRef.current) > 0.05) {
            const adjustment =
              nudgeRef.current *
              Math.min(1, delta * 7);

            offsetRef.current -= adjustment;
            nudgeRef.current -= adjustment;
          } else {
            nudgeRef.current = 0;
          }

          // Seamless wrap from last card to first card.
          while (offsetRef.current <= -2 * stride) {
            offsetRef.current += stride;

            if (focusRef.current.index !== null) {
              focusRef.current.index -= VIDEO_COUNT;
            }
          }

          while (offsetRef.current > -stride) {
            offsetRef.current -= stride;

            if (focusRef.current.index !== null) {
              focusRef.current.index += VIDEO_COUNT;
            }
          }

          track.style.transform =
            `translate3d(${offsetRef.current}px, 0, 0)`;
        }

        // Detect which card is closest to the center.
        const centerX =
          viewport.clientWidth / 2 - offsetRef.current;

        const nearestIndex = Math.max(
          0,
          Math.min(
            VIDEO_COUNT * 3 - 1,
            Math.round(
              (
                centerX -
                firstCardLeftRef.current -
                cardWidthRef.current / 2
              ) / step
            )
          )
        );

        const manualFocus = focusRef.current;

        let nextActive = nearestIndex;

        // Keep a clicked card zoomed temporarily.
        if (
          manualFocus.index !== null &&
          timestamp < manualFocus.until
        ) {
          nextActive = manualFocus.index;
        } else if (manualFocus.index !== null) {
          manualFocus.index = null;
        }

        if (nextActive !== activeRef.current) {
          activeRef.current = nextActive;
          setActiveGlobalIndex(nextActive);
          setIsPaused(false);
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isVisible, reducedMotion]);

  /* =========================================
     SELECT CARD - ZOOM WITHOUT STOPPING
  ========================================= */

  const selectCard = useCallback((globalIndex) => {
    focusRef.current = {
      index: globalIndex,
      until: performance.now() + CLICK_FOCUS_DURATION,
    };

    activeRef.current = globalIndex;
    setActiveGlobalIndex(globalIndex);
    setIsPaused(false);
  }, []);

  /* =========================================
     ARROW NAVIGATION
  ========================================= */

  const moveCarousel = (direction) => {
    const step = stepRef.current;

    if (!step) return;

    // Move smoothly by one card while retaining
    // the continuous automatic rotation.
    nudgeRef.current += direction * step;

    focusRef.current = {
      index: null,
      until: 0,
    };
  };

  const nextSlide = () => {
    moveCarousel(1);
  };

  const previousSlide = () => {
    moveCarousel(-1);
  };

  /* =========================================
     PAGINATION NAVIGATION
  ========================================= */

  const selectSlide = (index) => {
    const currentIndex =
      ((activeRef.current % VIDEO_COUNT) + VIDEO_COUNT) %
      VIDEO_COUNT;

    let difference = index - currentIndex;

    // Use the shortest direction around the loop.
    if (difference > VIDEO_COUNT / 2) {
      difference -= VIDEO_COUNT;
    }

    if (difference < -VIDEO_COUNT / 2) {
      difference += VIDEO_COUNT;
    }

    if (stepRef.current) {
      nudgeRef.current += difference * stepRef.current;
    }
  };

  /* =========================================
     TOUCH SWIPE
  ========================================= */

  const touchStartRef = useRef(null);

  const handleTouchStart = (event) => {
    touchStartRef.current =
      event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    if (touchStartRef.current === null) return;

    const endX =
      event.changedTouches[0]?.clientX ?? 0;

    const difference =
      touchStartRef.current - endX;

    touchStartRef.current = null;

    if (Math.abs(difference) < 45) return;

    if (difference > 0) {
      nextSlide();
    } else {
      previousSlide();
    }
  };

  return (
    <section
      id="about"
className="relative scroll-mt-20 overflow-hidden bg-[#f7f2ff] pt-6 pb-6 sm:pt-8 sm:pb-8"    >
      {/* BACKGROUND GLOW */}

      <div className="pointer-events-none absolute left-1/2 top-[25%] h-[550px] w-[800px] -translate-x-1/2 rounded-full bg-[#7138F5]/[0.055] blur-[110px]" />

      <div className="relative mx-auto max-w-[1080px] px-4 sm:px-6 lg:px-8">

        {/* =========================================
            SECTION HEADING - UNCHANGED
        ========================================= */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#7138F5]/20 bg-[#7138F5]/5 px-4 py-2 text-xs font-black uppercase tracking-widest text-[#7138F5]">
            <Sparkles size={14} />
            WHO WE ARE
          </span>

          <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-[#101535] sm:text-5xl">
            More Than Marketing.

            <span className="block bg-gradient-to-r from-[#7138F5] to-[#a54bff] bg-clip-text text-transparent">
              We Build Brand Growth.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#65718d] sm:text-lg">
            We combine creativity, strategy, and performance-driven
            marketing to help ambitious brands connect with the right
            audience and achieve meaningful business growth.
          </p>
        </div>

        {/* =========================================
            CONTINUOUS INFINITE VIDEO CAROUSEL
        ========================================= */}

        <div className="relative mt-12">

          {/* LEFT FADE */}

          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-8 bg-gradient-to-r from-[#f7f2ff] to-transparent sm:w-14" />

          {/* RIGHT FADE */}

          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 bg-gradient-to-l from-[#f7f2ff] to-transparent sm:w-14" />

          {/* CAROUSEL VIEWPORT */}

          <div
            ref={viewportRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative w-full overflow-hidden py-9"
          >
            {/* MOVING TRACK */}

            <div
              ref={trackRef}
              className="flex w-max items-center gap-3 will-change-transform sm:gap-5"
            >
              {repeatedGroups.map((groupIndex) => (
                <div
                  key={groupIndex}
                  ref={
                    groupIndex === 0
                      ? groupRef
                      : undefined
                  }
                  className="flex shrink-0 items-center gap-3 sm:gap-5"
                >
                  {showcaseVideos.map((item, index) => {
                    const globalIndex =
                      groupIndex * VIDEO_COUNT + index;

                    return (
                      <div
                        key={`${groupIndex}-${item.id}`}
                        ref={(element) => {
                          cardRefs.current[globalIndex] =
                            element;
                        }}
                        className="relative shrink-0"
                      >
                        <VideoCard
                          item={item}
                          isActive={
                            activeGlobalIndex === globalIndex
                          }
                          onSelect={() =>
                            selectCard(globalIndex)
                          }
                          isPaused={isPaused}
                          onTogglePause={() =>
                            setIsPaused((previous) => !previous)
                          }
                        />
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* =========================================
              CAROUSEL PAGINATION
          ========================================= */}

          <div className="mt-5 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous video"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d7c8ed] bg-white text-[#7138F5] transition-all hover:bg-[#7138F5] hover:text-white"
            >
              <ChevronLeft size={19} />
            </button>

            <div className="flex items-center gap-2">
              {showcaseVideos.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => selectSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-9 bg-[#7138F5]"
                      : "w-2 bg-[#d7c8ed]"
                  }`}
                  aria-label={`Show video ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next video"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d7c8ed] bg-white text-[#7138F5] transition-all hover:bg-[#7138F5] hover:text-white"
            >
              <ChevronRight size={19} />
            </button>
          </div>
        </div>

        {/* =========================================
            AGENCY INTRODUCTION & VALUE CARDS
            COMMENTED OUT - NOT DELETED
        ========================================= */}

        {/*
        <div className="mx-auto mt-14 grid w-full max-w-[900px] items-center gap-6 border-t border-[#e4d9f5] pt-10 lg:grid-cols-2 lg:gap-8">

          <Reveal>
            <div>
              <span className="text-xs font-black uppercase tracking-[0.18em] text-[#7138F5]">
                THE BRANDTISERS APPROACH
              </span>

              <h3 className="mt-4 text-2xl font-black leading-tight text-[#101535] sm:text-3xl">
                Your Vision.

                <span className="block text-[#7138F5]">
                  Our Digital Expertise.
                </span>
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#626b88] sm:text-base">
                At Brandtisers Media, we go beyond traditional
                digital marketing. Our dedicated teams create
                customized strategies that strengthen your online
                presence, generate quality leads, and support
                sustainable business growth.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#626b88] sm:text-base">
                Inspired by <strong>Murari Sharan</strong>, our
                approach combines business understanding with
                creative execution. We have collaborated with
                brands including{" "}
                <strong>
                  Godrej Properties, DLF, M3M India, SME PAISA,
                  Elan, and Silverglades
                </strong>
                , along with leading real estate brokers.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Magnetic
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#7138F5] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#5b26dc]"
                >
                  Book A Strategy Session
                  <ArrowRight size={16} />
                </Magnetic>

                <a
                  href="#simulator"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#d9cbea] bg-white px-6 py-3.5 text-sm font-bold text-[#101535] transition-colors hover:border-[#7138F5]"
                >
                  Try Budget Simulator
                  <Calculator size={16} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid gap-3 sm:grid-cols-2">

              <div className="rounded-3xl border border-[#e5dcf3] bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7138F5]/10 text-[#7138F5]">
                  <TrendingUp size={23} />
                </div>

                <h4 className="mt-5 text-lg font-black text-[#101535]">
                  Performance Focused
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-[#65718d]">
                  Strategies designed around measurable marketing
                  outcomes and business objectives.
                </p>
              </div>

              <div className="rounded-3xl border border-[#e5dcf3] bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7138F5]/10 text-[#7138F5]">
                  <Users size={23} />
                </div>

                <h4 className="mt-5 text-lg font-black text-[#101535]">
                  Dedicated Teams
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-[#65718d]">
                  Specialized professionals working closely with
                  each brand to understand its unique goals.
                </p>
              </div>

              <div className="rounded-3xl border border-[#e5dcf3] bg-white p-4 shadow-sm sm:col-span-2">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#7138F5]/10 text-[#7138F5]">
                    <Clapperboard size={23} />
                  </div>

                  <div>
                    <h4 className="text-lg font-black text-[#101535]">
                      Creative Thinking. Real Impact.
                    </h4>

                    <p className="mt-1 text-sm leading-relaxed text-[#65718d]">
                      Bringing together creative storytelling,
                      digital innovation, and data-informed decisions.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </Reveal>

        </div>
        */}

      </div>
    </section>
  );
}