
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronDown } from 'lucide-react';
import {
  industries,
  testimonials,
  faqs,
  GOLD,
} from '../../constants/siteData';
import { Heading, Reveal, TiltCard } from '../ui/Common';

/* =========================================
   INDUSTRIES SECTION
========================================= */

export function Industries() {
  const additionalServices = [
    {
      name: 'Search Engine Optimization (SEO)',
      emoji: '🔎',
      note: 'Organic search visibility',
    },
    {
      name: 'Social Media Marketing (SMM)',
      emoji: '📱',
      note: 'Social media growth and management',
    },
    {
      name: 'Google Ads (PPC)',
      emoji: '🎯',
      note: 'Paid search advertising',
    },
    {
      name: 'Meta Ads',
      emoji: '📣',
      note: 'Facebook and Instagram advertising',
    },
    {
      name: 'Content Marketing',
      emoji: '✍️',
      note: 'Content strategy and creation',
    },
    {
      name: 'Website Design & Development',
      emoji: '💻',
      note: 'Business websites and development',
    },
    {
      name: 'Graphic Designing',
      emoji: '🎨',
      note: 'Creative branding and graphics',
    },
    {
      name: 'Video Editing',
      emoji: '🎬',
      note: 'Professional video content',
    },
    {
      name: 'Email Marketing',
      emoji: '📧',
      note: 'Email campaigns and automation',
    },
    {
      name: 'Lead Generation',
      emoji: '📈',
      note: 'Customer acquisition campaigns',
    },
    {
      name: 'Google Business Profile',
      emoji: '📍',
      note: 'Local business visibility',
    },
    {
      name: 'E-Commerce Marketing',
      emoji: '🛒',
      note: 'Marketplace and store marketing',
    },
    {
      name: 'Online Reputation Management',
      emoji: '⭐',
      note: 'Reviews and brand reputation',
    },
    {
      name: 'Influencer Marketing',
      emoji: '🤝',
      note: 'Creator partnerships and campaigns',
    },
    {
      name: 'Branding & Strategy',
      emoji: '💡',
      note: 'Brand identity and positioning',
    },
    {
      name: 'Marketing Analytics',
      emoji: '📊',
      note: 'Campaign reporting and insights',
    },
    {
      name: 'Remarketing Campaigns',
      emoji: '🔁',
      note: 'Audience retargeting campaigns',
    },
    {
      name: 'WhatsApp Marketing',
      emoji: '💬',
      note: 'Business messaging campaigns',
    },
  ];

  const allServices = [
    ...industries,
    ...additionalServices,
  ].filter(
    (item, index, array) =>
      array.findIndex(
        (service) =>
          service.name.trim().toLowerCase() ===
          item.name.trim().toLowerCase()
      ) === index
  );

  const colors = [
    'bg-[#f0e8ff] border-[#e4d5ff]',
    'bg-[#fff3e1] border-[#ffe5bd]',
    'bg-[#e9f7f5] border-[#d3efea]',
    'bg-[#e8f2ff] border-[#d5e7ff]',
    'bg-[#ffeaf1] border-[#ffd7e5]',
    'bg-[#f3eaff] border-[#e6d7ff]',
  ];

  const iconColors = [
    'bg-[#e4d3ff]',
    'bg-[#ffe3bd]',
    'bg-[#d1f0e8]',
    'bg-[#d4e7ff]',
    'bg-[#ffd5e5]',
    'bg-[#e7d7ff]',
  ];

  return (
    <section
      id="industries"
className="scroll-mt-16 bg-white pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20"    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Heading
          center
          eyebrow="Our Sector Experience"
          title="Industry insight across"
          accent="15+ sectors."
          description="Domain understanding that shapes funnels around your buyer personas."
        />

        {/* Industry and service cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-4">
          {allServices.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.45,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.02,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 20,
                }}
                title={ind.note}
                className={`group flex h-full min-h-[100px] items-center gap-4 rounded-[18px] border px-4 py-4 transition-shadow duration-300 hover:shadow-[0_12px_28px_rgba(113,56,245,0.12)] sm:px-5 ${
                  colors[i % colors.length]
                }`}
              >
                {/* Service icon */}
                <motion.div
                  whileHover={{
                    rotate: [-8, 8, -5, 0],
                    scale: 1.12,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className={`flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-2xl ${
                    iconColors[i % iconColors.length]
                  }`}
                >
                  <span className="text-[34px] leading-none drop-shadow-sm sm:text-[38px]">
                    {ind.emoji}
                  </span>
                </motion.div>

                {/* Service name */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-[14px] font-extrabold leading-snug text-[#101535] sm:text-[15px] lg:text-[16px]">
                    {ind.name}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   TESTIMONIALS SECTION
========================================= */

export function Testimonials() {
  return (
    <section className="border-t border-[#e8ddf7] bg-[#f7f2ff] py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
        <Heading
          center
          eyebrow="Client Testimonials"
          title="Reviews from our"
          accent="happy partners."
          description="Feedback from owners and marketing leaders who scaled with Brandtisers Media."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <TiltCard className="flex h-full flex-col justify-between p-4 sm:p-6">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star
                          key={k}
                          size={16}
                          fill={GOLD}
                          stroke={GOLD}
                        />
                      ))}
                    </div>

                    <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-black text-emerald-600">
                      {t.highlight}
                    </span>
                  </div>

                  <p className="mt-4 text-xs font-medium italic leading-relaxed text-[#263051] sm:text-sm sm:leading-relaxed">
                    “{t.quote}”
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-[#f0e4fc] pt-3">
                  <div>
                    <h4 className="text-sm font-bold text-[#101535]">
                      {t.name}
                    </h4>

                    <p className="text-[11px] text-[#626b88]">
                      {t.role} • {t.company}
                    </p>
                  </div>

                  <span className="rounded-full bg-[#f1e5ff] px-2.5 py-1 text-[10px] font-bold text-[#7138F5]">
                    Verified Client
                  </span>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   FAQ SECTION - UPDATED UI
========================================= */

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="border-t border-[#e8ddf7] bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">

        {/* Original heading and content */}
        <Heading
          center
          eyebrow="FAQ"
          title="Everything you need to know about"
          accent="partnering with us."
          description="Setup times, deliverables and office visits in West Delhi."
        />

        {/* Centered equal-width FAQ cards */}
        <div className="mx-auto mt-8 flex max-w-[980px] flex-col gap-3.5 sm:mt-10 sm:gap-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;

            return (
              <div
                key={f.q}
                className={`w-full overflow-hidden rounded-[17px] border bg-white transition-colors duration-300 sm:rounded-[18px] ${
                  isOpen
                    ? 'border-[#d9c8fa]'
                    : 'border-[#e5e7ef] hover:border-[#d9c8fa]'
                }`}
              >
                {/* Question */}
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() =>
                    setOpen(isOpen ? null : i)
                  }
                  className="flex min-h-[72px] w-full items-center justify-between gap-5 px-5 py-4 text-left sm:min-h-[82px] sm:px-7 sm:py-5"
                >
                  <span className="text-[14px] font-bold leading-relaxed text-[#101535] sm:text-[16px] lg:text-[17px]">
                    {f.q}
                  </span>

                  {/* Rounded square dropdown */}
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border transition-all duration-300 sm:h-10 sm:w-10 ${
                      isOpen
                        ? 'border-[#d8c6ff] bg-[#f1eaff] text-[#7138F5]'
                        : 'border-[#d7dce5] bg-[#f4f6f9] text-[#818895]'
                    }`}
                  >
                    <ChevronDown
                      size={19}
                      className={`transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </span>
                </button>

                {/* Answer - original content unchanged */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      key={`faq-answer-${i}`}
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        height: {
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        },
                        opacity: {
                          duration: 0.25,
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-[13px] leading-[1.8] text-[#626b88] sm:px-7 sm:pb-6 sm:text-[15px]">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
