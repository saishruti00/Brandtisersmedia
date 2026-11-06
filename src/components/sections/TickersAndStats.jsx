import React, { useRef, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { gsap } from 'gsap';
import { Users, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { brands, ticker } from '../../constants/siteData';

const stats = [
  { value: 4000, suffix: '+', label: 'Happy Clients', sub: 'Across NCR & Pan-India', icon: Users },
  { value: 98, suffix: '%', label: 'Retention Rate', sub: 'Long-term Partnerships', icon: ShieldCheck },
  { value: 250, suffix: '+', label: 'Completed Projects', sub: 'Web, SEO & Lead Funnels', icon: CheckCircle2 },
  { value: 13, suffix: '+', label: 'Industry Awards', sub: 'Excellence & ROI Growth', icon: Award },
];

export function DualMarquee() {
  const reduced = useReducedMotion();

  const renderRow = (items, dir, dur, cls) => (
    <div className="marquee-wrapper relative overflow-hidden py-0.5">
      <motion.div
        className="flex w-max items-center gap-3 sm:gap-4"
        animate={reduced ? {} : { x: dir === 1 ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: dur, ease: 'linear', repeat: Infinity }}
      >
        {[...items, ...items].map((b, i) => (
          <div key={`${b}-${i}`} className={`shrink-0 rounded-xl px-3.5 py-1.5 text-xs font-bold sm:px-4 sm:py-2 ${cls}`}>
            {b}
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <div className="space-y-2.5 overflow-hidden border-y border-[#e8ddf7] bg-[#fff8ea] py-3.5 sm:py-4">
      {renderRow(brands.map((b) => `◆ ${b}`), 1, 34, 'border border-[#f0dca8] bg-white text-[#353f61] shadow-sm')}
      {renderRow(ticker, -1, 30, 'border border-[#7138F5]/25 bg-[#7138F5]/10 font-black text-[#7138F5]')}
    </div>
  );
}

export function StatsRibbon() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.count').forEach((el) => {
        const o = { v: 0 };
        const end = Number(el.dataset.end);
        const suf = el.dataset.suf || '';
        gsap.to(o, {
          v: end,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
          onUpdate: () => { el.textContent = Math.round(o.v).toLocaleString('en-IN') + suf; }
        });
      });
      gsap.from('.stat', {
        y: 28,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        scrollTrigger: { trigger: root.current, start: 'top 88%' }
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="border-b border-[#e8ddf7] bg-white py-10 sm:py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="stat border-l-[3px] border-[#FFB400] pl-3 sm:border-l-4 sm:pl-4">
            <div className="flex items-center gap-1.5 text-[#7138F5]">
              <s.icon size={19} className="shrink-0" />
              <span className="count text-2xl font-black text-[#101535] sm:text-3xl lg:text-4xl" data-end={s.value} data-suf={s.suffix}>
                0{s.suffix}
              </span>
            </div>
            <p className="mt-1 text-xs font-black text-[#101535] sm:text-sm">{s.label}</p>
            <p className="text-[11px] text-[#626b88] sm:text-xs">{s.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}