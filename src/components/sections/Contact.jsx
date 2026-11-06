import React, { useState } from 'react';
import { Phone, Mail, MapPin, Building2, MessageCircle, CheckCircle2, Send } from 'lucide-react';
import { Heading } from '../ui/Common';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const info = [
    { icon: Phone, label: 'Direct Helpline', body: <><a href="tel:7701910068" className="text-xs font-bold hover:text-[#7138F5] sm:text-sm">+91 7701910068</a><p className="text-[11px] text-[#626b88]">+91 7838808903 / +91 8802081802</p></> },
    { icon: Mail, label: 'Email Us', body: <><a href="mailto:info@brandtisersmedia.com" className="break-all text-xs font-bold hover:text-[#7138F5] sm:text-sm">info@brandtisersmedia.com</a><p className="break-all text-[11px] text-[#626b88]">brandtisersmedia@gmail.com</p></> },
    { icon: MapPin, label: 'Office 1 (Dwarka Mor)', body: <p className="text-[11px] leading-relaxed text-[#495475] sm:text-xs">A-91, First Floor, Dwarka Mor, Sewak Park, Dwarka, New Delhi 110059</p> },
    { icon: Building2, label: 'Office 2 (Vijay Enclave)', body: <p className="text-[11px] leading-relaxed text-[#495475] sm:text-xs">1/46 2nd Floor, Vijay Enclave, Dashrath Puri, Dabri Marg, New Delhi 110045</p> },
  ];

  const inputClass = 'w-full rounded-xl border border-[#ded5ec] bg-[#faf7ff] px-3.5 py-2.5 text-xs text-[#101535] placeholder:text-gray-400 focus:border-[#7138F5] focus:outline-none focus:ring-2 focus:ring-[#7138F5]/20';

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="scroll-mt-16 border-t border-[#e8ddf7] bg-[#f7f2ff] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Heading
          center
          eyebrow="Get In Touch"
          title="Ready to take your brand"
          accent="further?"
          description="Speak with our growth consultants and get a custom SEO, ads or web plan."
        />

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between rounded-2xl border-2 border-[#e8ddf7] bg-white p-6 sm:rounded-[28px] sm:p-8">
              <div>
                <h3 className="text-lg font-black text-[#101535] sm:text-xl">Contact Information</h3>
                <div className="mt-6 space-y-5">
                  {info.map((r) => (
                    <div key={r.label} className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7138F5]/10 text-[#7138F5]">
                        <r.icon size={18} />
                      </div>
                      <div className="text-[#101535]">
                        <p className="mb-0.5 text-[10px] font-bold uppercase tracking-wider text-[#7138F5]">{r.label}</p>
                        {r.body}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://wa.me/917701910068"
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-xs font-bold text-white shadow-sm hover:opacity-95"
              >
                <MessageCircle size={17} /> Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border-2 border-[#e8ddf7] bg-white p-6 sm:rounded-[28px] sm:p-8">
              <h3 className="flex flex-wrap items-center gap-2 text-lg font-black text-[#101535] sm:text-xl">
                Request a Free Growth Audit
                <span className="rounded-full bg-[#fff2cf] px-2 py-0.5 text-[10px] font-black text-[#a05a00]">🪔 Diwali offer</span>
              </h3>
              <p className="mt-1 text-xs text-[#626b88]">Tell us your goals and we’ll review your pipeline within 24 hours.</p>

              {submitted ? (
                <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
                  <CheckCircle2 size={36} className="mx-auto text-emerald-600" />
                  <h4 className="mt-2 text-base font-bold text-emerald-900">Audit Request Received!</h4>
                  <p className="mt-1 text-xs text-emerald-700">Our Delhi NCR growth team will review your account and call you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <label className="block text-xs font-bold text-[#101535]">
                      <span className="mb-1 block">Your Name *</span>
                      <input required type="text" placeholder="e.g. Rahul Verma" className={inputClass} />
                    </label>
                    <label className="block text-xs font-bold text-[#101535]">
                      <span className="mb-1 block">Phone Number *</span>
                      <input required type="tel" placeholder="+91 98765 43210" className={inputClass} />
                    </label>
                  </div>
                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <label className="block text-xs font-bold text-[#101535]">
                      <span className="mb-1 block">Email Address</span>
                      <input type="email" placeholder="rahul@company.com" className={inputClass} />
                    </label>
                    <label className="block text-xs font-bold text-[#101535]">
                      <span className="mb-1 block">Primary Requirement</span>
                      <select className={inputClass}>
                        <option>Lead Generation (Google & Meta Ads)</option>
                        <option>Search Engine Optimization (SEO)</option>
                        <option>Website Design & Development</option>
                        <option>Social Media Marketing & Reels</option>
                        <option>WhatsApp Marketing Automation</option>
                      </select>
                    </label>
                  </div>
                  <label className="block text-xs font-bold text-[#101535]">
                    <span className="mb-1 block">Brief Your Project / Goals</span>
                    <textarea rows={3} placeholder="Industry, ad budget or current challenges..." className={inputClass} />
                  </label>
                  <button
                    type="submit"
                    className="glow-btn flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#7138F5] to-[#a855f7] px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md active:scale-[0.99]"
                  >
                    <Send size={15} /> Submit & Claim Free Audit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}