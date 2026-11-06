import React from 'react';

export function Footer() {
  return (
<footer className="border-t border-[#e8ddf7] bg-[#1a084c] pt-12 pb-0 text-white sm:pt-16 sm:pb-0">      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xl font-black">Brandtisers <span className="text-[#FFB400]">Media</span></p>
            <p className="mt-2.5 text-xs leading-relaxed text-white/70">
              NCR’s leading digital marketing agency for Web Development, SEO, Social Media, Meta Ads & Lead Generation.
            </p>
            <span className="mt-3 inline-block rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-bold text-[#FFD36B]">
              🪔 Dwarka Mor, Delhi
            </span>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-white/90">Quick Services</p>
            <ul className="mt-2.5 space-y-1.5 text-xs text-white/70">
              {['Google & Meta Ads', 'Search Engine Optimization', 'Website Development', 'WhatsApp Marketing', 'Graphic Designing'].map((x) => (
                <li key={x}><a href="#services" className="transition-colors hover:text-[#FFB400]">{x}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-white/90">Associated Brands</p>
            <ul className="mt-2.5 space-y-1.5 text-xs text-white/70">
              <li>Godrej Properties & DLF</li>
              <li>M3M India & SME PAISA</li>
              <li>Elan The Mark & Presidential</li>
              <li>Silverglades Legacy</li>
              <li>Geetanjali & Value Max</li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-white/90">Helpline & Inquiry</p>
            <div className="mt-2.5 space-y-1 text-xs text-white/70">
              <p><strong>Phone:</strong> +91 7701910068</p>
              <p><strong>Alternate:</strong> +91 7838808903</p>
              <p className="break-all"><strong>Email:</strong> info@brandtisersmedia.com</p>
              <p><strong>Timing:</strong> Mon - Sat (10 AM - 7 PM)</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-[11px] text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Brandtisers Media. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#home" className="hover:text-[#FFB400]">Privacy Policy</a>
            <a href="#home" className="hover:text-[#FFB400]">Terms & Conditions</a>
            <a href="#home" className="hover:text-[#FFB400]">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}