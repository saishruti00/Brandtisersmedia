import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ease = [0.22, 1, 0.36, 1];

/* =========================================
   SCROLL REVEAL WRAPPER
========================================= */
export function Reveal({ children, className = '', delay = 0 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================
   SECTION HEADING (Clean Typography)
========================================= */
export function Heading({ eyebrow, title, accent, description, center = false }) {
  return (
    <Reveal className={`mb-8 sm:mb-12 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <div
          className={`mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#7138F5]/20 bg-[#F0E8FF] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#7138F5] shadow-2xs ${
            center ? 'mx-auto' : ''
          }`}
        >
          <Sparkles size={12} className="text-[#8B5CF6]" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2
        className={`text-2xl font-black tracking-[-0.035em] text-[#101535] sm:text-4xl lg:text-[44px] lg:leading-[1.15] ${
          center ? 'mx-auto max-w-4xl' : 'max-w-3xl'
        }`}
      >
        {title} <span className="shimmer-text">{accent}</span>
      </h2>

      {description && (
        <p
          className={`mt-3 max-w-2xl text-sm leading-relaxed text-[#515b7c] sm:text-base ${
            center ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

/* =========================================
   3D TILT CARD (Hover Interaction)
========================================= */
export function TiltCard({ children, className = '' }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const [pt, setPt] = useState({ x: 50, y: 50, rx: 0, ry: 0 });
  const [canTilt, setCanTilt] = useState(false);

  useEffect(() => {
    setCanTilt(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
  }, []);

  const move = (e) => {
    if (reduced || !canTilt || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    setPt({
      x: (x / r.width) * 100,
      y: (y / r.height) * 100,
      rx: (0.5 - y / r.height) * 5,
      ry: (x / r.width - 0.5) * 5,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={() => setPt({ x: 50, y: 50, rx: 0, ry: 0 })}
      animate={reduced || !canTilt ? {} : { rotateX: pt.rx, rotateY: pt.ry }}
      transition={{ type: 'spring', stiffness: 220, damping: 25 }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      className={`group relative overflow-hidden rounded-2xl border border-[#e8ddf7] bg-white shadow-sm transition-all duration-300 hover:border-[#7138F5]/40 hover:shadow-[0_16px_40px_rgba(113,56,245,.10)] sm:rounded-[24px] ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(350px circle at ${pt.x}% ${pt.y}%, rgba(255,180,0,.12), rgba(113,56,245,.06) 40%, transparent 70%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}

/* =========================================
   MAGNETIC INTERACTION (Fixed: Works with both <a> and <button>)
========================================= */
export function Magnetic({ children, className = '', href, onClick, ...rest }) {
  const containerRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const target = targetRef.current;
    if (!container || !target || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const xTo = gsap.quickTo(target, 'x', { duration: 0.35, ease: 'power3.out' });
    const yTo = gsap.quickTo(target, 'y', { duration: 0.35, ease: 'power3.out' });

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      xTo(relX * 0.28);
      yTo(relY * 0.28);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Agar href pass hua hai toh Anchor <a> render karo, warna interactive span wrapper
  if (href) {
    return (
      <span ref={containerRef} className="inline-block">
        <a ref={targetRef} href={href} className={className} onClick={onClick} {...rest}>
          {children}
        </a>
      </span>
    );
  }

  return (
    <span ref={containerRef} className="inline-block">
      <div ref={targetRef} className={className} onClick={onClick} {...rest}>
        {children}
      </div>
    </span>
  );
}

/* =========================================
   SCROLL PROGRESS BAR
========================================= */
export function ScrollProgress() {
  const bar = useRef(null);

  useEffect(() => {
    const el = bar.current;
    if (!el) return;
    const t = gsap.to(el, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: { scrub: 0.15, start: 0, end: 'max' },
    });
    return () => {
      t.scrollTrigger?.kill();
      t.kill();
    };
  }, []);

  return (
    <div
      ref={bar}
      className="fixed left-0 top-0 z-[100] h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-[#7138F5] via-[#8B5CF6] to-[#FF9F1C]"
    />
  );
}