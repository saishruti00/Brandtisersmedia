import React from 'react';
import { Gift, X } from 'lucide-react';

export function FestiveBanner({ on, setOn }) {
  if (!on) return null;

  return (
    <div className="relative z-40 border-b border-[#f1e2bf] bg-[#fff3d6] px-3 py-1.5 text-[#3b1291] sm:py-2">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-[11px] font-semibold sm:text-xs">
        <span className="inline-flex items-center gap-1 text-[#8a4b00]">
          <Gift size={13} className="shrink-0" /> 🪔 Diwali Growth Offer: Free Digital Marketing & Competitor Audit
        </span>
        <span className="hidden text-[#5b4a2a] sm:inline">• Light up your brand’s revenue this festive season</span>
        <div className="flex items-center gap-2">
          <a href="#contact" className="rounded-full bg-[#FFB400] px-2.5 py-0.5 text-[10px] font-black text-[#2b1200] transition-transform hover:scale-105">
            Claim Offer
          </a>
          <button
            type="button"
            onClick={() => setOn(false)}
            aria-label="Dismiss festive banner"
            className="inline-flex items-center gap-1 rounded-full border border-[#e0c48a] bg-white/70 px-2 py-0.5 text-[10px] font-semibold hover:bg-white"
          >
            <X size={11} /> Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}

export function WishOrnament() {
  return (
    <div aria-hidden className="mb-0.5 flex items-center justify-center gap-2">
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#d4b25a] sm:w-16" />
      <div className="relative">
        <div className="wish-glow absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <svg viewBox="0 0 80 50" className="relative h-5 w-8 sm:h-7 sm:w-11">
          <ellipse className="diya-flame" cx="40" cy="15" rx="5" ry="11" fill="#F5A623" />
          <ellipse className="diya-flame" cx="40" cy="18" rx="2.2" ry="6" fill="#FFF3C4" />
          <path d="M6 26 Q40 58 74 26 Z" fill="#b8741f" />
        </svg>
      </div>
      <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#d4b25a] sm:w-16" />
    </div>
  );
}