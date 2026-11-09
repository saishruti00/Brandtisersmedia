
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import {
  Star,
  ChevronDown,
  Heart,
  MessageCircle,
  Send,
  ThumbsUp,
  MoreHorizontal,
  CheckCheck,
  Share2,
  Bookmark,
} from 'lucide-react';

import {
  SiGoogle,
  SiFacebook,
  SiInstagram,
  SiWhatsapp,
  SiYoutube,
  SiX,
  SiTrustpilot,
} from 'react-icons/si';

import { FaLinkedinIn } from 'react-icons/fa';

import {
  industries,
  testimonials,
  faqs,
  GOLD,
} from '../../constants/siteData';

import { Heading } from '../ui/Common';


/* =========================================
   PLATFORM CONFIG
========================================= */

const platformConfig = {
  google: {
    Icon: SiGoogle,
    color: '#4285F4',
    label: 'Google',
  },
  facebook: {
    Icon: SiFacebook,
    color: '#1877F2',
    label: 'Facebook',
  },
  instagram: {
    Icon: SiInstagram,
    color: '#E4405F',
    label: 'Instagram',
  },
  whatsapp: {
    Icon: SiWhatsapp,
    color: '#25D366',
    label: 'WhatsApp',
  },
  linkedin: {
    Icon: FaLinkedinIn,
    color: '#0A66C2',
    label: 'LinkedIn',
  },
  youtube: {
    Icon: SiYoutube,
    color: '#FF0000',
    label: 'YouTube',
  },
  x: {
    Icon: SiX,
    color: '#111111',
    label: 'X',
  },
  trustpilot: {
    Icon: SiTrustpilot,
    color: '#00B67A',
    label: 'Trustpilot',
  },
};


/* =========================================
   COMMON COMPONENTS
========================================= */

function Avatar({ name, avatar, size = 42 }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#eee7ff] font-bold text-[#7138F5]"
      style={{ width: size, height: size }}
    >
      {avatar ? (
        <img
          src={avatar}
          alt={name || 'Customer'}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      ) : (
        name?.charAt(0)?.toUpperCase() || 'C'
      )}
    </div>
  );
}

function RatingStars({ size = 16 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          fill={GOLD}
          stroke={GOLD}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function PlatformHeader({ platform, name }) {
  const config = platformConfig[platform] || platformConfig.google;
  const Icon = config.Icon;

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon size={22} style={{ color: config.color }} />
        <span className="text-[13px] font-bold text-[#252536]">
          {config.label}
        </span>
      </div>
      <MoreHorizontal size={19} className="text-gray-400" />
    </div>
  );
}


/* =========================================
   INDUSTRIES SECTION
========================================= */

export function Industries() {
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
      className="scroll-mt-16 bg-white pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <Heading
          center
          eyebrow="Our Sector Experience"
          title="Industry insight across"
          accent="15+ sectors."
          description="Domain understanding that shapes funnels around your buyer personas."
        />

        <div className="mx-auto grid max-w-5xl grid-cols-2 justify-items-center gap-3 sm:grid-cols-2 lg:grid-cols-4">

          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: (i % 5) * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full"
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.025 }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 20,
                }}
                title={ind.note}
                className={`flex h-[122px] flex-col items-center justify-center rounded-[17px] border px-2.5 py-3 text-center shadow-sm transition-shadow duration-300 hover:shadow-[0_10px_25px_rgba(113,56,245,0.10)] sm:h-[130px] ${colors[i % colors.length]}`}
              >
                <motion.div
                  whileHover={{ rotate: [-8, 8, -5, 0], scale: 1.12 }}
                  transition={{ duration: 0.5 }}
                  className={`mb-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconColors[i % iconColors.length]}`}
                >
                  <span className="text-[25px]">
                    {ind.emoji}
                  </span>
                </motion.div>

                <h3 className="line-clamp-2 text-[11px] font-extrabold text-[#101535] sm:text-xs">
                  {ind.name}
                </h3>

                <p className="mt-1 line-clamp-1 text-[9px] font-medium text-[#7c86a2] sm:text-[10px]">
                  {ind.note}
                </p>
              </motion.div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}


/* =========================================
   GOOGLE REVIEW CARD
========================================= */

function GoogleCard({ t }) {
  return (
    <article className="rounded-[18px] border border-[#e5e7eb] bg-white p-5 shadow-sm">

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SiGoogle size={23} color="#4285F4" />
          <span className="text-sm font-semibold text-[#3c4043]">
            Google
          </span>
        </div>
        <MoreHorizontal size={19} className="text-gray-400" />
      </div>

      <div className="mt-4 flex items-center gap-3">
        <Avatar name={t.name} avatar={t.avatar} />
        <div className="min-w-0">
          <h4 className="text-[13px] font-semibold text-[#202124]">
            {t.name}
          </h4>
          <p className="text-[10px] text-gray-500">
            {t.date || 'Customer review'}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <RatingStars />
        <span className="text-[10px] text-gray-500">5.0</span>
      </div>

      <h3 className="mt-3 text-[14px] font-bold text-[#202124]">
        {t.highlight || 'Excellent Experience'}
      </h3>

      <p className="mt-2 text-[13px] leading-[1.8] text-[#3c4043]">
        {t.quote}
      </p>

      <div className="mt-4 border-t border-gray-100 pt-3 text-[11px] text-[#4285F4]">
        Google review
      </div>
    </article>
  );
}


/* =========================================
   FACEBOOK REVIEW CARD
========================================= */

function FacebookCard({ t }) {
  return (
    <article className="rounded-[18px] border border-[#e4e6eb] bg-white p-5 shadow-sm">

      <PlatformHeader platform="facebook" />

      <div className="mt-4 flex items-center gap-3">
        <Avatar name={t.name} avatar={t.avatar} />
        <div className="min-w-0">
          <h4 className="text-[13px] font-bold text-[#1c1e21]">
            {t.name}
          </h4>
          <p className="text-[10px] text-gray-500">
            {t.date || 'Shared feedback'}
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-[#f0f2f5] p-4">
        <div className="mb-2 flex items-center gap-2">
          <SiFacebook color="#1877F2" size={17} />
          <span className="text-[12px] font-bold text-[#1877F2]">
            Recommendation
          </span>
        </div>

        <p className="text-[13px] leading-[1.8] text-[#242526]">
          {t.quote}
        </p>
      </div>

      <div className="mt-4 flex justify-between border-t border-gray-100 pt-3 text-[11px] font-semibold text-[#65676b]">
        <span className="flex items-center gap-1">
          <ThumbsUp size={14} /> Like
        </span>
        <span className="flex items-center gap-1">
          <MessageCircle size={14} /> Comment
        </span>
        <span className="flex items-center gap-1">
          <Share2 size={14} /> Share
        </span>
      </div>
    </article>
  );
}


/* =========================================
   INSTAGRAM REVIEW CARD
========================================= */

function InstagramCard({ t }) {
  return (
    <article className="overflow-hidden rounded-[18px] border border-[#e9e9e9] bg-white shadow-sm">

      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
            <div className="rounded-full bg-white p-[2px]">
              <Avatar name={t.name} avatar={t.avatar} size={34} />
            </div>
          </div>

          <div>
            <h4 className="text-[12px] font-bold text-[#262626]">
              {t.name}
            </h4>
            <p className="text-[10px] text-gray-500">
              {t.company || 'Customer'}
            </p>
          </div>
        </div>

        <SiInstagram size={22} color="#E4405F" />
      </div>

      <div className="flex min-h-[155px] items-center justify-center bg-gradient-to-br from-[#fce7f3] via-[#f5e8ff] to-[#e0e7ff] p-6">
        {t.image ? (
          <img
            src={t.image}
            alt="Customer shared post"
            loading="lazy"
            className="h-[180px] w-full rounded-lg object-cover"
          />
        ) : (
          <div className="text-center">
            <SiInstagram size={30} className="mx-auto mb-3 text-[#E4405F]" />
            <p className="text-[13px] font-bold text-[#7138F5]">
              {t.highlight || 'A great experience!'}
            </p>
            <p className="mt-1 text-[10px] text-[#777]">
              Brandtisers Media
            </p>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex gap-4">
            <Heart size={21} />
            <MessageCircle size={21} />
            <Send size={21} />
          </div>
          <Bookmark size={20} />
        </div>

        <p className="text-[12px] leading-[1.8] text-[#262626]">
          <strong>{t.name}</strong> {t.quote}
        </p>

        <p className="mt-2 text-[10px] text-gray-400">
          {t.date}
        </p>
      </div>
    </article>
  );
}


/* =========================================
   WHATSAPP REVIEW CARD
========================================= */

function WhatsAppCard({ t }) {
  return (
    <article className="overflow-hidden rounded-[18px] border border-[#dce9df] bg-[#efeae2] shadow-sm">

      <div className="flex items-center gap-3 bg-[#075E54] p-4 text-white">
        <SiWhatsapp size={24} />

        <div>
          <h4 className="text-[13px] font-bold">
            Brandtisers Media
          </h4>
          <p className="text-[10px] text-white/70">
            Customer conversation
          </p>
        </div>

        <span className="ml-auto text-[10px] text-white/70">
          WhatsApp
        </span>
      </div>

      <div className="flex flex-col gap-3 p-4">

        <div className="max-w-[90%] self-start rounded-xl rounded-tl-none bg-white p-3 shadow-sm">
          <p className="text-[12px] font-semibold text-[#303030]">
            {t.name}
          </p>
          <p className="mt-1 text-[13px] leading-[1.7] text-[#303030]">
            {t.quote}
          </p>
          <span className="mt-2 block text-right text-[9px] text-gray-400">
            {t.date || 'Customer feedback'}
          </span>
        </div>

        {t.reply && (
          <div className="max-w-[85%] self-end rounded-xl rounded-tr-none bg-[#d9fdd3] p-3 shadow-sm">
            <p className="text-[12px] text-[#303030]">
              {t.reply}
            </p>
            <div className="mt-1 flex justify-end">
              <CheckCheck size={14} className="text-[#53a6d0]" />
            </div>
          </div>
        )}

      </div>
    </article>
  );
}


/* =========================================
   LINKEDIN REVIEW CARD
========================================= */

function LinkedInCard({ t }) {
  return (
    <article className="rounded-[18px] border border-[#e0e0e0] bg-white p-5 shadow-sm">

      <PlatformHeader platform="linkedin" />

      <div className="mt-4 flex items-center gap-3">
        <Avatar name={t.name} avatar={t.avatar} />
        <div className="min-w-0">
          <h4 className="text-[13px] font-bold text-[#191919]">
            {t.name}
          </h4>
          <p className="truncate text-[10px] text-gray-500">
            {[t.role, t.company].filter(Boolean).join(' • ')}
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-lg border-l-[3px] border-[#0A66C2] bg-[#f3f6f8] p-4">
        <p className="text-[11px] font-bold text-[#0A66C2]">
          Recommendation
        </p>
        <p className="mt-2 text-[13px] leading-[1.8] text-[#333]">
          {t.quote}
        </p>
      </div>

      <p className="mt-3 text-[10px] text-gray-400">
        {t.date}
      </p>
    </article>
  );
}


/* =========================================
   YOUTUBE REVIEW CARD
========================================= */

function YouTubeCard({ t }) {
  return (
    <article className="rounded-[18px] border border-[#e5e5e5] bg-white p-5 shadow-sm">

      <PlatformHeader platform="youtube" />

      <div className="mt-4 flex gap-3">
        <Avatar name={t.name} avatar={t.avatar} />

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-[12px] font-bold text-[#282828]">
              {t.name}
            </h4>
            <span className="text-[10px] text-gray-500">
              {t.date}
            </span>
          </div>

          <p className="mt-2 text-[13px] leading-[1.8] text-[#333]">
            {t.quote}
          </p>

          <div className="mt-4 flex items-center gap-5 text-gray-500">
            <ThumbsUp size={15} />
            <MessageCircle size={15} />
            <span className="text-[10px] font-semibold">
              Reply
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}


/* =========================================
   X REVIEW CARD
========================================= */

function XCard({ t }) {
  return (
    <article className="rounded-[18px] border border-[#e5e7eb] bg-white p-5 shadow-sm">

      <PlatformHeader platform="x" />

      <div className="mt-4 flex gap-3">
        <Avatar name={t.name} avatar={t.avatar} />

        <div className="min-w-0 flex-1">
          <h4 className="text-[13px] font-bold text-black">
            {t.name}
          </h4>

          <p className="text-[10px] text-gray-500">
            Customer · {t.date}
          </p>

          <p className="mt-3 text-[13px] leading-[1.8] text-[#222]">
            {t.quote}
          </p>

          <div className="mt-5 flex justify-between text-gray-500">
            <MessageCircle size={15} />
            <Share2 size={15} />
            <Heart size={15} />
            <Bookmark size={15} />
          </div>
        </div>
      </div>
    </article>
  );
}


/* =========================================
   TRUSTPILOT REVIEW CARD
========================================= */

function TrustpilotCard({ t }) {
  return (
    <article className="rounded-[18px] border border-[#e5e5e5] bg-white p-5 shadow-sm">

      <PlatformHeader platform="trustpilot" />

      <div className="mt-4 inline-flex gap-0.5 bg-[#00B67A] p-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            fill="white"
            stroke="white"
          />
        ))}
      </div>

      <h4 className="mt-3 text-[15px] font-bold text-[#191919]">
        {t.highlight || 'Excellent service'}
      </h4>

      <p className="mt-2 text-[13px] leading-[1.8] text-[#444]">
        {t.quote}
      </p>

      <div className="mt-4 flex items-center gap-3 border-t border-gray-100 pt-4">
        <Avatar name={t.name} avatar={t.avatar} />
        <div>
          <h4 className="text-[12px] font-bold text-[#191919]">
            {t.name}
          </h4>
          <p className="text-[10px] text-gray-500">
            {t.date}
          </p>
        </div>
      </div>
    </article>
  );
}


/* =========================================
   PLATFORM CARD ROUTER
========================================= */

function PlatformReviewCard({ t }) {
  const platform = String(
    t.platform || t.source || 'google'
  ).toLowerCase().trim();

  const cardMap = {
    google: GoogleCard,
    facebook: FacebookCard,
    instagram: InstagramCard,
    whatsapp: WhatsAppCard,
    linkedin: LinkedInCard,
    youtube: YouTubeCard,
    x: XCard,
    twitter: XCard,
    trustpilot: TrustpilotCard,
  };

  const Card = cardMap[platform] || GoogleCard;

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="w-full shrink-0"
    >
      <Card t={t} />
    </motion.div>
  );
}


/* =========================================
   TESTIMONIALS SECTION
   INFINITE 3-COLUMN SOCIAL WALL
========================================= */

export function Testimonials() {
  const source = Array.isArray(testimonials)
    ? testimonials.filter((t) => t && t.quote)
    : [];

  const reviewColumns = [0, 1, 2].map((columnIndex) => {
    if (!source.length) return [];

    return Array.from(
      { length: Math.max(source.length, 4) },
      (_, index) => source[(index + columnIndex) % source.length]
    );
  });

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-[#eee5fa] bg-[#f8f3ff] py-14 sm:py-20 lg:py-20"
    >

      {/* BACKGROUND ATMOSPHERE */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-[15%] h-[400px] w-[400px] rounded-full bg-[#c4b5fd]/25 blur-[110px]" />

        <div className="absolute -right-24 top-[30%] h-[450px] w-[450px] rounded-full bg-[#67e8f9]/25 blur-[120px]" />

        <div className="absolute bottom-0 left-[35%] h-[350px] w-[350px] rounded-full bg-[#f0abfc]/25 blur-[110px]" />
      </div>


      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADING */}

        <Heading
          center
          eyebrow="Client Testimonials"
          title="Real stories."
          accent="Real results."
          description="Experiences shared by businesses and partners across our digital platforms."
        />


        {/* SOCIAL PLATFORM LOGOS */}

        <div className="mb-8 mt-7 flex flex-wrap items-center justify-center gap-2.5">

          {Object.entries(platformConfig).map(([key, platform]) => {
            const Icon = platform.Icon;

            return (
              <motion.div
                key={key}
                title={platform.label}
                whileHover={{ y: -5, scale: 1.08 }}
                transition={{ duration: 0.2 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eceaf2] bg-white shadow-[0_2px_5px_rgba(20,20,50,0.07)]"
              >
                <Icon
                  size={19}
                  style={{ color: platform.color }}
                />
              </motion.div>
            );
          })}

        </div>


        {/* ANIMATED MASONRY COLUMNS */}

        {source.length > 0 ? (
          <div className="testimonial-marquee relative mt-8 grid h-[540px] grid-cols-1 gap-5 overflow-hidden sm:grid-cols-2 lg:h-[650px] lg:grid-cols-3 lg:gap-6">

            {reviewColumns.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className={`relative h-full overflow-hidden ${
                  columnIndex === 1
                    ? 'hidden sm:block'
                    : columnIndex === 2
                    ? 'hidden lg:block'
                    : 'block'
                }`}
              >

                <div
                  className={`testimonial-scroll-track flex flex-col ${
                    columnIndex === 1
                      ? 'testimonial-scroll-down'
                      : 'testimonial-scroll-up'
                  }`}
                >

                  {/* FIRST SET */}

                  <div className="flex flex-col gap-5 pb-5">
                    {column.map((t, i) => (
                      <PlatformReviewCard
                        key={`${columnIndex}-first-${i}`}
                        t={t}
                      />
                    ))}
                  </div>


                  {/* DUPLICATE SET */}

                  <div
                    className="flex flex-col gap-5 pb-5"
                    aria-hidden="true"
                  >
                    {column.map((t, i) => (
                      <PlatformReviewCard
                        key={`${columnIndex}-second-${i}`}
                        t={t}
                      />
                    ))}
                  </div>

                </div>
              </div>
            ))}


            {/* TOP FADE */}

            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-[#f8f3ff] to-transparent" />


            {/* BOTTOM FADE */}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[#f8f3ff] to-transparent" />

          </div>
        ) : (
          <p className="py-16 text-center text-sm text-gray-500">
            Client reviews will appear here soon.
          </p>
        )}

      </div>


      {/* INFINITE SCROLL ANIMATION */}

      <style>{`

        @keyframes testimonialScrollUp {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-50%);
          }
        }

        @keyframes testimonialScrollDown {
          from {
            transform: translateY(-50%);
          }
          to {
            transform: translateY(0);
          }
        }

        .testimonial-scroll-track {
          will-change: transform;
        }

        .testimonial-scroll-up {
          animation: testimonialScrollUp 35s linear infinite;
        }

        .testimonial-scroll-down {
          animation: testimonialScrollDown 42s linear infinite;
        }

        .testimonial-marquee:hover .testimonial-scroll-track {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .testimonial-scroll-up {
            animation-duration: 28s;
          }

          .testimonial-scroll-down {
            animation-duration: 32s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-scroll-track {
            animation: none !important;
          }
        }

      `}</style>

    </section>
  );
}


/* =========================================
   FAQ SECTION
========================================= */

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="border-t border-[#e8ddf7] bg-white py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">

        <Heading
          center
          eyebrow="FAQ"
          title="Everything you need to know about"
          accent="partnering with us."
          description="Setup times, deliverables and office visits in West Delhi."
        />

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

                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex min-h-[72px] w-full items-center justify-between gap-5 px-5 py-4 text-left sm:min-h-[82px] sm:px-7 sm:py-5"
                >

                  <span className="text-[14px] font-bold leading-relaxed text-[#101535] sm:text-[16px] lg:text-[17px]">
                    {f.q}
                  </span>

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

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      key={`faq-answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: {
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        },
                        opacity: { duration: 0.25 },
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
