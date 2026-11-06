
import React, { useState, useCallback } from 'react';

// Go up one level to reach src/constants/siteData
import { MEDIA } from '../constants/siteData';

// UI Helpers & Shell (in the same components folder)
import { ScrollProgress } from './ui/Common';
import { FestiveBanner } from './ui/Festive';
import { VideoModal, WhatsAppFAB } from './ui/Modals';

// Sections (in the same components folder)
import { Hero } from './sections/Hero';
import { DualMarquee, StatsRibbon } from './sections/TickersAndStats';
import { LaptopMonitorStorySection } from './sections/MonitorStory';
import { ServicesSection } from './sections/Services';
import { Gallery } from './sections/Gallery';
import { GrowthSimulator } from './sections/Simulator';
import { About } from './sections/About';
import { Industries, Testimonials, FAQ } from './sections/TrustSections';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

export default function Homepage() {
  const [fx, setFx] = useState(true);
  const [video, setVideo] = useState(null);

  const openReel = useCallback(() => {
    setVideo({
      video: MEDIA.showreel,
      src: MEDIA.showreelPoster,
      title: 'Agency Showreel',
      tag: 'Showreel'
    });
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-clip bg-[#fdfbff] text-[#101535] antialiased selection:bg-[#FFB400] selection:text-[#2b1200]">
      <style>{`
        html { scroll-behavior: smooth; -webkit-overflow-scrolling: touch; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        .marquee-wrapper {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .shimmer-text {
          background: linear-gradient(90deg, #7138F5, #9333ea, #FFB400, #7138F5);
          background-size: 250% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmer 6s linear infinite;
        }
        @keyframes shimmer { to { background-position: 250% 0; } }

        .wish-glow {
          background: radial-gradient(circle, rgba(245,166,35,0.35), transparent 70%);
          animation: wglow 3.5s ease-in-out infinite;
        }
        @keyframes wglow {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.15); }
        }

        .diya-flame {
          transform-box: fill-box;
          transform-origin: 50% 100%;
          animation: flick 1.8s ease-in-out infinite;
        }
        @keyframes flick {
          0%, 100% { transform: scale(1,1) skewX(0); }
          30% { transform: scale(0.93, 1.07) skewX(3deg); }
          60% { transform: scale(1.04, 0.96) skewX(-3deg); }
        }

        .glow-btn {
          box-shadow: 0 10px 24px rgba(113,56,245,0.3);
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .glow-btn:hover {
          box-shadow: 0 14px 32px rgba(255,180,0,0.4);
        }

        .pulse-ring { position: relative; }
        .pulse-ring::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          border: 2px solid currentColor;
          opacity: 0.5;
          animation: ring 2s ease-out infinite;
        }
        @keyframes ring { to { transform: scale(1.55); opacity: 0; } }

        @media (prefers-reduced-motion: reduce) {
          .shimmer-text, .wish-glow, .diya-flame, .pulse-ring::after { animation: none; }
        }
      `}</style>

      <ScrollProgress />
      <FestiveBanner on={fx} setOn={setFx} />

      <main className="homepage-main flex-1">
        <Hero onReel={openReel} fx={fx} />
        <DualMarquee />
        <StatsRibbon />
        <LaptopMonitorStorySection />
        <ServicesSection />
        <Gallery onPlay={setVideo} />
        <GrowthSimulator />
        <About />
        <Industries />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <div className="relative z-10 -mb-14 bg-[#1a084c]">
      </div>

      {/* <WhatsAppFAB /> */}

      <VideoModal item={video} onClose={() => setVideo(null)} />
    </div>
  );
}
