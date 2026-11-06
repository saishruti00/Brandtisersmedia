
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import EnquiryForm from "./EnquiryForm";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },

  { name: "Contact", href: "/contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  useEffect(() => {
    if (!isEnquiryOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsEnquiryOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isEnquiryOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const openEnquiry = () => {
    setIsMenuOpen(false);
    setIsEnquiryOpen(true);
  };

  const closeEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  return (
    <>
      {/* Seamless Navbar */}
      <header className="sticky top-0 z-50 w-full bg-[#FCFAFF]">
        <nav
          className="relative mx-auto flex h-[78px] max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-7 lg:px-9"
          aria-label="Main navigation"
        >
          {/* Company Logo */}
          <NavLink
            to="/"
            className="flex min-w-0 shrink-0 items-center"
            onClick={handleLinkClick}
          >
            <div className="flex h-[60px] w-[160px] items-center justify-start overflow-hidden sm:w-[200px] xl:w-[230px]">
              <img
                src="/bm logo.jpg"
                alt="Brandtisers Media Logo"
                className="h-full w-full object-contain object-left"
              />
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                end={link.href === "/"}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `group relative whitespace-nowrap py-3 text-sm font-semibold transition-colors duration-300 ${
                    isActive
                      ? "text-[#7138F5]"
                      : "text-[#101535] hover:text-[#7138F5]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    <span
                      className={`absolute bottom-1 left-1/2 h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-[#7138F5] transition-all duration-300 ${
                        isActive
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            type="button"
            onClick={openEnquiry}
            className="group hidden shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7138F5] to-[#5F25DE] px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(113,56,245,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(113,56,245,0.25)] lg:inline-flex"
          >
            Let's Talk

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E9DFFF] bg-[#F5EFFF] text-[#7138F5] transition-colors hover:bg-[#EDE2FF] lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-[#EEE8F7] bg-[#FCFAFF] px-5 py-4 lg:hidden"
          >
            <div className="mx-auto flex max-w-[1440px] flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  end={link.href === "/"}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-300 ${
                      isActive
                        ? "bg-[#F3EBFF] text-[#7138F5]"
                        : "text-[#101535] hover:bg-[#F8F4FF] hover:text-[#7138F5]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {/* Mobile CTA */}
              <button
                type="button"
                onClick={openEnquiry}
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7138F5] to-[#5F25DE] px-6 py-3.5 text-sm font-bold text-white transition-all hover:shadow-lg"
              >
                Let's Talk
                <ArrowUpRight size={17} />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Existing EnquiryForm Popup */}
      {isEnquiryOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#101535]/60 px-4 py-6 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeEnquiry();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Free Enquiry Form"
            className="relative w-full max-w-md"
          >
            <button
              type="button"
              onClick={closeEnquiry}
              aria-label="Close enquiry form"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#F5EFFF] text-[#7138F5] transition hover:bg-[#EDE2FF]"
            >
              <X size={20} />
            </button>

            <EnquiryForm onSuccess={closeEnquiry} />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
