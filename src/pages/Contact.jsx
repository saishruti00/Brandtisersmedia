
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

import {
  Phone,
  MapPin,
  Globe2,
  ArrowUpRight,
  Send,
  ShieldCheck,
  Mail,
  Star,
  Navigation,
  MessageSquare,
  Building2,
  X,
  ChevronLeft,
  ChevronRight,
  Images,
  ZoomIn,
} from "lucide-react";

const PURPLE = "#7138F5";

/* =========================================
   OFFICE LOCATIONS
========================================= */

const offices = [
  {
    id: 1,
    name: "Dwarka Mor",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=A-91%2C+First+Floor%2C+Dwarka+Mor%2C+Sewak+Park%2C+Dwarka%2C+New+Delhi+110059",
  },
  {
    id: 2,
    name: "Vijay Enclave",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=1%2F46+2nd+Floor%2C+Vijay+Enclave%2C+Dashrath+Puri%2C+Dabri+Marg%2C+New+Delhi+110045",
  },
];

/* =========================================
   CONTACT DETAILS
========================================= */

const contactDetails = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 7701910068",
    href: "tel:+917701910068",
    description: "Speak directly with our team",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@brandtisersmedia.com",
    href: "mailto:info@brandtisersmedia.com",
    description: "Send us your business enquiry",
  },
  {
    icon: Globe2,
    label: "Website",
    value: "www.brandtisersmedia.com",
    href: "https://www.brandtisersmedia.com",
    description: "Explore our digital services",
  },
];

/* =========================================
   SERVICES
========================================= */

const services = [
  "Social Media Management",
  "SEO",
  "Performance Marketing",
  "Graphic Designing",
  "Video Editing",
  "Website Development",
  "Other",
];

/* =========================================
   BUSINESS PHOTOS
========================================= */

const businessPhotos = [
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400",
    title: "Our Workspace",
    category: "Office",
  },
  {
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200",
    title: "Office Interior",
    category: "Office",
  },
  {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200",
    title: "Our Team",
    category: "Team",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200",
    title: "Meeting Space",
    category: "Workspace",
  },
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200",
    title: "Creative Workspace",
    category: "Office",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200",
    title: "Team Collaboration",
    category: "Team",
  },
];

/* =========================================
   SECTION HEADING
========================================= */

function SectionHeading({ label, title, description }) {
  return (
    <div className="mb-7">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#7138F5]">
        {label}
      </p>

      <h2 className="text-2xl font-extrabold tracking-tight text-[#101535] sm:text-3xl">
        {title}
      </h2>

      {description && (
        <p className="mt-2 text-sm leading-6 text-[#737B91]">
          {description}
        </p>
      )}
    </div>
  );
}

/* =========================================
   BUSINESS PHOTO COLLAGE
========================================= */

function BusinessCollage({ onPhotoClick }) {
  return (
    <div className="grid h-[340px] grid-cols-2 grid-rows-2 gap-1.5 bg-white p-1.5 sm:h-[430px] lg:h-full lg:min-h-[470px]">
      {businessPhotos.slice(0, 4).map((photo, index) => (
        <motion.button
          key={photo.title}
          type="button"
          onClick={() => onPhotoClick(index)}
          whileHover={{ scale: 0.99 }}
          className="group relative min-h-0 overflow-hidden rounded-xl bg-[#F2ECFF] text-left"
        >
          <img
            src={photo.src}
            alt={photo.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-90" />

          <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3">
            <p className="truncate text-[11px] font-bold text-white sm:text-sm">
              {photo.title}
            </p>

            <p className="mt-0.5 text-[9px] text-white/75 sm:text-xs">
              {photo.category}
            </p>
          </div>

          {index !== 3 && (
            <div className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-md transition group-hover:bg-[#7138F5]">
              <ArrowUpRight size={15} />
            </div>
          )}

          {index === 3 && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white transition group-hover:bg-black/65">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                <Images size={22} />
              </div>

              <p className="text-xl font-extrabold">
                +{businessPhotos.length - 4}
              </p>

              <p className="mt-1 text-xs font-semibold">
                More Photos
              </p>
            </div>
          )}
        </motion.button>
      ))}
    </div>
  );
}

/* =========================================
   BUSINESS PROFILE
   LEFT: BUSINESS DETAILS
   RIGHT: MAP + COLLAGE
========================================= */

function BusinessProfile({ onPhotoClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-[26px] border border-[#EAE4F5] bg-white shadow-[0_12px_45px_rgba(45,25,100,0.05)]"
    >
      <div className="grid lg:grid-cols-[1fr_0.95fr]">

        {/* LEFT: BUSINESS INFORMATION */}

        <div className="p-6 sm:p-8 lg:p-10">

          {/* BUSINESS HEADER */}

          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F2ECFF] text-[#7138F5]">
              <Building2 size={31} />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#858CA2]">
                Business Profile
              </p>

              <h2 className="mt-1 text-xl font-extrabold tracking-tight text-[#101535] sm:text-2xl">
                Brandtisers Media
              </h2>

              <p className="mt-1 text-sm text-[#747C91]">
                Digital Marketing Agency
              </p>
            </div>
          </div>

          {/* RATING */}

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span className="text-xl font-extrabold text-[#101535]">
              4.5
            </span>

            <div className="flex text-[#F5AE32]">
              {[1, 2, 3, 4, 5].map((item) => (
                <Star
                  key={item}
                  size={15}
                  fill="currentColor"
                  strokeWidth={1}
                />
              ))}
            </div>

            <span className="text-sm text-[#858CA2]">
              (8 reviews)
            </span>

            <span className="h-1 w-1 rounded-full bg-[#C7C4D0]" />

            <span className="text-sm font-medium text-[#626B85]">
              Marketing Agency
            </span>
          </div>

          {/* OFFICE LOCATIONS */}

          <div className="mt-7 space-y-3">
            <div className="flex items-center gap-2">
              <MapPin size={19} className="shrink-0 text-[#7138F5]" />

              <p className="text-sm font-bold text-[#101535]">
                Our Locations
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {offices.map((office) => (
                <a
                  key={office.id}
                  href={office.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open Address 0${office.id} in Google Maps`}
                  className="group inline-flex items-center gap-2.5 rounded-xl border border-[#E7DDF8] bg-white px-4 py-3 text-sm font-bold text-[#7138F5] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7138F5] hover:bg-[#7138F5] hover:text-white hover:shadow-lg hover:shadow-[#7138F5]/15"
                >
                  <MapPin size={17} className="shrink-0" />

                  <span>
                    Address 0{office.id}
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* PHONE */}

          <div className="mt-6 flex items-start gap-3">
            <Phone
              size={18}
              className="mt-0.5 shrink-0 text-[#7138F5]"
            />

            <div>
              <p className="text-sm font-bold text-[#101535]">
                Phone Number
              </p>

              <a
                href="tel:+917701910068"
                className="mt-1 block text-sm text-[#737B91] transition hover:text-[#7138F5]"
              >
                +91 7701910068
              </a>
            </div>
          </div>

          {/* WEBSITE */}

          <div className="mt-5 flex items-start gap-3">
            <Globe2
              size={18}
              className="mt-0.5 shrink-0 text-[#7138F5]"
            />

            <div>
              <p className="text-sm font-bold text-[#101535]">
                Website
              </p>

              <a
                href="https://www.brandtisersmedia.com"
                target="_blank"
                rel="noreferrer"
                className="mt-1 block break-all text-sm text-[#7138F5]"
              >
                www.brandtisersmedia.com
              </a>
            </div>
          </div>

          {/* ACTION BUTTONS */}

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+917701910068"
              className="inline-flex items-center gap-2 rounded-full bg-[#7138F5] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#602BE3]"
            >
              <Phone size={16} />
              Call Now
            </a>

            <a
              href={offices[0].mapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#E6DDF6] bg-white px-6 py-3 text-sm font-bold text-[#7138F5] transition hover:bg-[#F6F1FF]"
            >
              <Navigation size={16} />
              Get Directions
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* RIGHT: GOOGLE MAP + COLLAGE */}

        <div className="grid grid-cols-1 overflow-hidden bg-[#F0EBF9] sm:grid-cols-2">

          {/* GOOGLE MAP */}

          <div className="relative min-h-[300px] overflow-hidden sm:min-h-[430px] lg:min-h-[470px]">
            <iframe
              title="Brandtisers Media Office - Dwarka Mor"
              src="https://maps.google.com/maps?q=A-91%2C%20First%20Floor%2C%20Dwarka%20Mor%2C%20Sewak%20Park%2C%20New%20Delhi%20110059&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* MAP LINK */}

            <a
              href={offices[0].mapUrl}
              target="_blank"
              rel="noreferrer"
              className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-[10px] font-bold text-[#7138F5] shadow-md transition hover:bg-[#7138F5] hover:text-white sm:left-4 sm:top-4 sm:text-xs"
            >
              <MapPin size={13} />
              Open Maps
              <ArrowUpRight size={13} />
            </a>

            {/* MAP INFO */}

            <div className="absolute bottom-3 left-2 right-2 rounded-xl border border-white/70 bg-white/95 p-2.5 shadow-lg backdrop-blur-md sm:bottom-4 sm:left-3 sm:right-3 sm:p-3">
              <div className="flex items-center gap-2">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F1EAFF] text-[#7138F5] sm:h-10 sm:w-10">
                  <MapPin size={18} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-[10px] font-bold text-[#101535] sm:text-xs">
                    Brandtisers Media
                  </p>

                  <p className="truncate text-[9px] text-[#777F94] sm:text-[10px]">
                    Office 01 · Dwarka Mor
                  </p>
                </div>

                <a
                  href={offices[0].mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open directions"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#7138F5] text-white transition hover:bg-[#602BE3] sm:h-8 sm:w-8"
                >
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>

          {/* PHOTO COLLAGE */}

          <BusinessCollage onPhotoClick={onPhotoClick} />
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================
   FULL SCREEN PHOTO VIEWER
========================================= */

function PhotoViewer({ selectedPhoto, setSelectedPhoto }) {
  const [zoomed, setZoomed] = useState(false);

  const closeViewer = () => {
    setSelectedPhoto(null);
    setZoomed(false);
  };

  const nextPhoto = () => {
    setSelectedPhoto((prev) => (prev + 1) % businessPhotos.length);
    setZoomed(false);
  };

  const previousPhoto = () => {
    setSelectedPhoto(
      (prev) => (prev - 1 + businessPhotos.length) % businessPhotos.length
    );
    setZoomed(false);
  };

  useEffect(() => {
    setZoomed(false);
  }, [selectedPhoto]);

  useEffect(() => {
    if (selectedPhoto === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeViewer();
      if (event.key === "ArrowRight") nextPhoto();
      if (event.key === "ArrowLeft") previousPhoto();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPhoto]);

  return (
    <AnimatePresence>
      {selectedPhoto !== null && (
        <motion.div
          key="photo-viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={closeViewer}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#100D19]/95 p-4 backdrop-blur-md"
        >

          {/* TOP BAR */}

          <div className="absolute left-5 right-5 top-5 z-50 flex items-center justify-between sm:left-8 sm:right-8">
            <div>
              <p className="text-sm font-bold text-white sm:text-base">
                {businessPhotos[selectedPhoto].title}
              </p>

              <p className="mt-1 text-xs text-white/55">
                {businessPhotos[selectedPhoto].category}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white">
                {selectedPhoto + 1} / {businessPhotos.length}
              </span>

              <button
                type="button"
                onClick={closeViewer}
                aria-label="Close image viewer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#7138F5] sm:h-11 sm:w-11"
              >
                <X size={22} />
              </button>
            </div>
          </div>

          {/* PREVIOUS BUTTON */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              previousPhoto();
            }}
            aria-label="Previous photo"
            className="absolute left-2 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-[#7138F5] sm:left-8 sm:h-14 sm:w-14"
          >
            <ChevronLeft size={28} />
          </button>

          {/* IMAGE */}

          <motion.div
            key={selectedPhoto}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(event) => event.stopPropagation()}
            className="flex h-[75vh] w-full max-w-5xl flex-col items-center justify-center"
          >
            <div className="flex h-full w-full items-center justify-center overflow-hidden">
              <img
                src={businessPhotos[selectedPhoto].src}
                alt={businessPhotos[selectedPhoto].title}
                onClick={() => setZoomed((prev) => !prev)}
                className={`max-h-full max-w-full rounded-xl object-contain transition-transform duration-300 ${
                  zoomed
                    ? "scale-150 cursor-zoom-out"
                    : "scale-100 cursor-zoom-in"
                }`}
              />
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
              <ZoomIn size={15} />
              Click image to {zoomed ? "zoom out" : "zoom in"}
            </div>
          </motion.div>

          {/* NEXT BUTTON */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              nextPhoto();
            }}
            aria-label="Next photo"
            className="absolute right-2 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-[#7138F5] sm:right-8 sm:h-14 sm:w-14"
          >
            <ChevronRight size={28} />
          </button>

          {/* BOTTOM INDICATORS */}

          <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
            {businessPhotos.map((photo, index) => (
              <button
                key={photo.title}
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setSelectedPhoto(index);
                  setZoomed(false);
                }}
                aria-label={`View photo ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  selectedPhoto === index
                    ? "w-8 bg-[#7138F5]"
                    : "w-2 bg-white/35 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* =========================================
   CONTACT INFORMATION
========================================= */

function ContactInformation() {
  return (
    <section className="mt-16">
      <SectionHeading
        label="Contact Information"
        title="We're Just a Message Away."
        description="Choose your preferred way to connect with our team."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {contactDetails.map(
          ({ icon: Icon, label, value, href, description }, index) => (
            <motion.a
              key={label}
              href={href}
              target={label === "Website" ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              className="group rounded-[20px] border border-[#EAE4F5] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4C1FF] hover:shadow-[0_12px_35px_rgba(113,56,245,0.09)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F2ECFF] text-[#7138F5] transition group-hover:bg-[#7138F5] group-hover:text-white">
                  <Icon size={20} />
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-[#B2A5C8] transition group-hover:text-[#7138F5]"
                />
              </div>

              <h3 className="mt-5 text-base font-bold text-[#101535]">
                {label}
              </h3>

              <p className="mt-2 break-words text-sm font-semibold text-[#7138F5]">
                {value}
              </p>

              <p className="mt-2 text-xs leading-5 text-[#858CA2]">
                {description}
              </p>
            </motion.a>
          )
        )}
      </div>
    </section>
  );
}

/* =========================================
   CONTACT FORM
========================================= */

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
      `mailto:info@brandtisersmedia.com?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full rounded-xl border border-[#E8E1F3] bg-[#FCFBFF] px-4 py-3.5 text-sm text-[#101535] outline-none transition-all placeholder:text-[#A1A4B5] focus:border-[#7138F5] focus:bg-white focus:ring-4 focus:ring-[#7138F5]/[0.06]";

  return (
    <section id="contact-form" className="mt-16 scroll-mt-24">
      <div className="grid items-start gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">

        {/* FORM INTRO */}

        <div className="lg:sticky lg:top-28">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#7138F5]">
            Let's Work Together
          </p>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-[#101535] sm:text-4xl">
            Have a Project in Mind?
            <span className="mt-1 block text-[#7138F5]">
              Let's Talk.
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#737B91]">
            Whether you need digital marketing, website development or a
            complete growth strategy, tell us what you're looking for.
            Our team would love to hear from you.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F2ECFF] text-[#7138F5]">
                <MessageSquare size={19} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#101535]">
                  Let's Discuss Your Ideas
                </p>

                <p className="text-xs text-[#858CA2]">
                  Every great project starts with a conversation.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F2ECFF] text-[#7138F5]">
                <ShieldCheck size={19} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#101535]">
                  Business-Focused Solutions
                </p>

                <p className="text-xs text-[#858CA2]">
                  Strategies designed around your goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FORM CARD */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-[26px] border border-[#EAE4F5] bg-white p-6 shadow-[0_15px_50px_rgba(45,25,100,0.05)] sm:p-8 lg:p-9"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-extrabold text-[#101535] sm:text-2xl">
                Send Us a Message
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#737B91]">
                Fill in your details and tell us about your requirements.
              </p>
            </div>

            <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F1EAFF] text-[#7138F5] sm:flex">
              <MessageSquare size={21} />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">

            {/* NAME + EMAIL */}

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold text-[#101535]"
                >
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
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-[#101535]"
                >
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

            {/* PHONE + SERVICE */}

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-bold text-[#101535]"
                >
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
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-bold text-[#101535]"
                >
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

            {/* MESSAGE */}

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-bold text-[#101535]"
              >
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

            {/* SUBMIT */}

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-full bg-[#7138F5] px-7 py-4 text-sm font-bold text-white transition-all hover:bg-[#602BE3] hover:shadow-lg hover:shadow-[#7138F5]/20"
            >
              Prepare Email Inquiry
              <Send size={17} />
            </button>

            <p className="flex items-start justify-center gap-2 text-center text-xs leading-5 text-[#858CA2]">
              <ShieldCheck
                size={15}
                className="mt-0.5 shrink-0 text-[#7138F5]"
              />

              Opens your email app with the enquiry prepared.
              No message is sent automatically.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================
   MAIN CONTACT PAGE
========================================= */

export default function Contact() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (index) => {
    setSelectedPhoto(index);
  };

  return (
    <main className="min-w-0 overflow-hidden bg-[#FCFAFF] text-[#101535]">

      {/* PAGE HEADING */}

      <section className="px-5 pb-9 pt-12 sm:pb-12 sm:pt-10">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#7138F5]">
            Get In Touch
          </p>

          <h1 className="text-[34px] font-black leading-tight tracking-[-0.045em] sm:text-[48px] lg:text-[54px]">
            Let's Start a{" "}
            <span className="text-[#7138F5]">
              Conversation.
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#737B91] sm:text-base">
            Connect with Brandtisers Media and discover
            how we can help your business grow digitally.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}

      <section className="px-5">
        <div className="mx-auto max-w-7xl">

          {/* BUSINESS PROFILE + MAP + COLLAGE */}

          <BusinessProfile onPhotoClick={handlePhotoClick} />

          {/* FULL SCREEN IMAGE VIEWER */}

          <PhotoViewer
            selectedPhoto={selectedPhoto}
            setSelectedPhoto={setSelectedPhoto}
          />

          {/* CONTACT INFORMATION */}

          <ContactInformation />

          {/* CONTACT FORM */}

          <ContactForm />

        </div>
      </section>

      <div className="h-20 sm:h-24" />
    </main>
  );
}
