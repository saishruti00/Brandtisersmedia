import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { steps } from '../../constants/siteData';
import { Heading } from '../ui/Common';

export function Blueprint() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.bp-line', {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 1.4,
        ease: 'power3.inOut',
        scrollTrigger: { trigger: root.current, start: 'top 75%' }
      });
      gsap.from('.bp-card', {
        y: 35,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        scrollTrigger: { trigger: root.current, start: 'top 75%' }
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="border-t border-[#e8ddf7] bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Heading
          center
          eyebrow="The Brandtisers Blueprint"
          title="How we scale brands from"
          accent="strategy to revenue."
          description="A four-stage framework built to remove guesswork and wasted ad spend."
        />
        <div className="relative">
          <div className="bp-line absolute left-6 right-6 top-8 hidden h-0.5 bg-gradient-to-r from-[#7138F5] via-[#FFB400] to-[#ff6b00] lg:block" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.step} className="bp-card relative rounded-2xl border border-[#e8ddf7] bg-[#fbf9ff] p-5 pt-12 transition-all duration-300 hover:border-[#7138F5] hover:shadow-lg sm:p-6 sm:pt-14">
                <span className="absolute left-5 top-3.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#7138F5] text-xs font-black text-white ring-4 ring-white sm:h-10 sm:w-10 sm:text-sm">
                  {s.step}
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-[#a05a00]">{s.tag}</span>
                <h3 className="mt-1 text-base font-black text-[#101535] sm:text-lg">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#626b88]">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}