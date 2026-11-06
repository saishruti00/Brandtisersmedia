
import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Phone,
  MapPin,
  Globe2,
  ArrowUpRight,
  Send,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 7701910068",
    href: "tel:7701910068",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Dwarka Mor, Delhi - 110059",
    href: null,
  },
  {
    icon: Globe2,
    label: "Website",
    value: "www.brandtisersmedia.com",
    href: "https://www.brandtisersmedia.com",
  },
];

const services = [
  "Social Media Management",
  "SEO",
  "Performance Marketing",
  "Graphic Designing",
  "Video Editing",
  "Website Development",
  "Other",
];

function ContactIllustration() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[440px]">
      <motion.svg
        viewBox="0 0 500 320"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
        role="img"
        aria-label="Illustration of a business enquiry and communication"
        initial={reduce ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <defs>
          <linearGradient id="contactCard" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F7F2FF" />
          </linearGradient>

          <linearGradient id="contactPurple" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7138F5" />
            <stop offset="100%" stopColor="#A77AFF" />
          </linearGradient>
        </defs>

        <ellipse
          cx="250"
          cy="165"
          rx="210"
          ry="140"
          fill="#F2ECFF"
        />

        <circle
          cx="390"
          cy="55"
          r="25"
          fill="#E7DAFF"
        />

        <circle
          cx="82"
          cy="236"
          r="17"
          fill="#D8C5FF"
        />

        {/* Main illustration panel */}
        <rect
          x="95"
          y="55"
          width="305"
          height="205"
          rx="22"
          fill="url(#contactCard)"
          stroke="#E4D9FA"
          strokeWidth="2"
        />

        {/* Top bar */}
        <path
          d="M95 77 Q95 55 117 55 H378 Q400 55 400 77 V94 H95Z"
          fill="#F1EAFF"
        />

        <circle cx="118" cy="75" r="5" fill="#A98BFA" />
        <circle cx="135" cy="75" r="5" fill="#C7B4F8" />
        <circle cx="152" cy="75" r="5" fill="#DCCFFF" />

        {/* Form lines */}
        <rect
          x="125"
          y="117"
          width="125"
          height="12"
          rx="6"
          fill="#C7B5F4"
        />

        <rect
          x="125"
          y="145"
          width="150"
          height="22"
          rx="7"
          fill="#F0EAFE"
          stroke="#E2D7F9"
        />

        <rect
          x="125"
          y="178"
          width="150"
          height="22"
          rx="7"
          fill="#F0EAFE"
          stroke="#E2D7F9"
        />

        <rect
          x="125"
          y="212"
          width="95"
          height="24"
          rx="12"
          fill="url(#contactPurple)"
        />

        <path
          d="M164 224 H181 M176 219 L182 224 L176 229"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Envelope */}
        <rect
          x="295"
          y="126"
          width="78"
          height="62"
          rx="12"
          fill="#7138F5"
        />

        <path
          d="M307 141 L334 162 L361 141"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Floating chat */}
        <rect
          x="320"
          y="205"
          width="112"
          height="49"
          rx="16"
          fill="white"
          stroke="#E2D7F9"
          strokeWidth="2"
        />

        <circle cx="343" cy="230" r="9" fill="#7138F5" />

        <rect
          x="360"
          y="222"
          width="52"
          height="5"
          rx="2.5"
          fill="#BDA8EE"
        />

        <rect
          x="360"
          y="234"
          width="37"
          height="5"
          rx="2.5"
          fill="#DDD2F5"
        />

        {/* Decorative sparkles */}
        <path
          d="M73 100 L79 116 L95 122 L79 128 L73 144 L67 128 L51 122 L67 116Z"
          fill="#F4B94B"
        />

        <path
          d="M419 113 L423 124 L434 128 L423 132 L419 143 L415 132 L404 128 L415 124Z"
          fill="#A67BFF"
        />
      </motion.svg>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `New Business Inquiry - ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`
    );

    window.location.href =
      `mailto:?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full rounded-xl border border-[#E8E1F3] bg-[#FCFBFF] px-4 py-3.5 text-sm text-[#101535] outline-none transition-all placeholder:text-[#A1A4B5] focus:border-[#7138F5] focus:bg-white focus:ring-4 focus:ring-[#7138F5]/[0.06]";

  return (
    <div
      id="contact-form"
      className="scroll-mt-24 rounded-[26px] border border-[#EAE4F5] bg-white p-6 shadow-[0_15px_50px_rgba(45,25,100,0.05)] sm:p-8 lg:p-9"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-[#101535] sm:text-[30px]">
            Send Us a Message
          </h2>

          <p className="mt-2 text-sm leading-7 text-[#626B85]">
            Tell us about your business requirements.
          </p>
        </div>

        <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F1EAFF] text-[#7138F5] sm:flex">
          <MessageSquare size={22} />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-7 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-bold">
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-bold">
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-bold">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="service" className="mb-2 block text-sm font-bold">
              Service Required
            </label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-bold">
            Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-3 rounded-full bg-[#7138F5] px-7 py-4 text-sm font-bold text-white transition-all hover:bg-[#602BE3]"
        >
          Prepare Email Inquiry
          <Send size={17} />
        </button>

        <p className="flex items-start justify-center gap-2 text-center text-xs leading-5 text-[#7D849A]">
          <ShieldCheck
            size={15}
            className="mt-0.5 shrink-0 text-[#7138F5]"
          />
          Opens your email app with the enquiry prepared.
          No message is sent automatically.
        </p>
      </form>
    </div>
  );
}

export default function Contact() {
  return (
    <main className="min-w-0 overflow-hidden bg-[#FCFAFF] text-[#101535]">
      {/* COMPACT HEADING */}
      <section className="px-5 pb-7 pt-12 sm:pb-10 sm:pt-16">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-[34px] font-black leading-tight tracking-[-0.04em] sm:text-[46px]">
            Let's Start a{" "}
            <span className="text-[#7138F5]">
              Conversation.
            </span>
          </h1>
        </div>
      </section>

      {/* ILLUSTRATION + CONTACT + FORM */}
      <section className="px-5 pb-20 sm:pb-24">
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* LEFT */}
          <div className="min-w-0">
            <ContactIllustration />

            <div className="mt-3 rounded-[24px] border border-[#EAE4F5] bg-white p-6 sm:p-8">
              <h2 className="text-xl font-black text-[#101535]">
                Get in Touch
              </h2>

              <p className="mt-2 text-sm leading-7 text-[#626B85]">
                Connect with Brandtisers Media for digital
                marketing and business enquiries.
              </p>

              <div className="mt-6 space-y-5">
                {contactDetails.map(
                  ({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F2ECFF] text-[#7138F5]">
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-[#858CA2]">
                          {label}
                        </p>

                        {href ? (
                          <a
                            href={href}
                            className="mt-1 block break-words text-sm font-bold text-[#101535] hover:text-[#7138F5]"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm font-bold text-[#101535]">
                            {value}
                          </p>
                        )}
                      </div>

                      {href && (
                        <ArrowUpRight
                          size={16}
                          className="shrink-0 text-[#A89BBB]"
                        />
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
