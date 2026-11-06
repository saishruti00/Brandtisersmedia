
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Calculator, Clock, ArrowUpRight } from 'lucide-react';
import { Heading } from '../ui/Common';

export function GrowthSimulator() {
  const [budget, setBudget] = useState(120000);
  const leadsRef = useRef(null);
  const pipeRef = useRef(null);

  const cur = useRef({
    l: Math.round(120000 / 460),
    p: Math.round((120000 * 4.6) / 100000)
  });

  const leads = Math.round(budget / 460);
  const pipe = Math.round((budget * 4.6) / 100000);

  useEffect(() => {
    gsap.to(cur.current, {
      l: leads,
      p: pipe,
      duration: 0.45,
      ease: 'power2.out',
      onUpdate: () => {
        if (leadsRef.current)
          leadsRef.current.textContent = `${Math.round(cur.current.l)}+`;

        if (pipeRef.current)
          pipeRef.current.textContent = `₹${Math.round(cur.current.p)}L`;
      }
    });
  }, [leads, pipe]);

  return (
    <section
      id="simulator"
className="scroll-mt-16 bg-[#f7f2ff] pt-6 pb-6 sm:pt-8 sm:pb-8">      <div className="mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
        <div className="[&>div]:!mb-6 sm:[&>div]:!mb-8">
          <Heading
            center
            eyebrow="Real-Time Forecasting"
            title="Model your customer acquisition"
            accent="before spending a rupee."
            description="Forecast leads and pipeline across Meta & Google campaigns."
          />
        </div>

        {/* Wider, vertically compact calculator */}
        <div className="mx-auto w-full max-w-[1120px] rounded-2xl border-2 border-[#e8ddf7] bg-white p-4 shadow-[0_16px_40px_rgba(113,56,245,0.08)] sm:rounded-[28px] sm:p-5">

          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#f0e4fc] pb-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#7138F5]/10 text-[#7138F5]">
                <Calculator size={22} />
              </div>

              <div>
                <h3 className="text-base font-black text-[#101535] sm:text-lg">
                  Live Growth & Lead Calculator
                </h3>

                <p className="text-xs text-[#626b88]">
                  Slide your ad budget to forecast returns
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-[#fff2cf] px-3.5 py-1.5 text-right">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#a05a00]">
                Monthly spend
              </p>

              <p className="text-lg font-black text-[#101535] sm:text-xl">
                ₹{budget.toLocaleString('en-IN')}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex justify-between text-xs font-bold text-[#626b88]">
              <span>₹50,000</span>
              <span>₹15,00,000</span>
            </div>

            <input
              aria-label="Monthly ad budget in Rupees"
              type="range"
              min="50000"
              max="1500000"
              step="25000"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="mt-3 h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-[#efe6fb] accent-[#7138F5]"
            />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl border border-[#e8ddf7] bg-[#faf7ff] p-3 text-center sm:p-4">
            <div>
              <p className="text-[11px] font-bold text-[#626b88] sm:text-xs">
                Projected Leads
              </p>

              <p
                ref={leadsRef}
                className="mt-1 text-lg font-black text-[#101535] sm:text-2xl md:text-3xl"
              >
                {leads}+
              </p>
            </div>

            <div className="border-x border-[#e8ddf7] px-1 sm:px-2">
              <p className="text-[11px] font-bold text-[#626b88] sm:text-xs">
                Pipeline Potential
              </p>

              <p
                ref={pipeRef}
                className="mt-1 text-lg font-black text-[#7138F5] sm:text-2xl md:text-3xl"
              >
                ₹{pipe}L
              </p>
            </div>

            <div>
              <p className="text-[11px] font-bold text-[#626b88] sm:text-xs">
                Target ROAS
              </p>

              <p className="mt-1 text-lg font-black text-[#101535] sm:text-2xl md:text-3xl">
                4.6x
              </p>
            </div>
          </div>

          <p className="mt-3 text-center text-[10px] text-[#7c84a0] sm:text-[11px]">
            Estimates for illustration only; actual results vary by industry and offer.
          </p>

          <div className="mt-4 flex flex-col items-center justify-between gap-3 border-t border-[#f0e4fc] pt-3 sm:flex-row">
            <span className="flex items-center gap-2 text-xs text-[#626b88]">
              <Clock size={15} className="text-[#7138F5]" />
              Typical turnaround: <strong>14 days to full optimisation</strong>
            </span>

            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#7138F5] px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-[#5b26dc] sm:w-auto"
            >
              Claim This Growth Model
              <ArrowUpRight size={14} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
