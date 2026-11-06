
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import toast from "react-hot-toast";

export default function EnquiryForm({ onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo only: Replace with API integration.
    console.log("Enquiry Details:", form);

    toast.success(
      "Thank you for your enquiry! Our team will connect with you soon.",
      {
        duration: 4000,
        position: "top-right",
        style: {
          borderRadius: "14px",
          background: "#FFFFFF",
          color: "#101535",
          padding: "16px",
          fontSize: "14px",
          fontWeight: "600",
          boxShadow: "0 10px 35px rgba(113,56,245,0.15)",
          border: "1px solid #E9DFFF",
        },
        iconTheme: {
          primary: "#7138F5",
          secondary: "#FFFFFF",
        },
      }
    );

    setForm({
      name: "",
      email: "",
      phone: "",
    });

    onSuccess?.();
  };

  return (
    <div className="w-full max-w-md rounded-[24px] border border-[#E9DFFF] bg-white p-7 shadow-[0_15px_50px_rgba(113,56,245,0.1)]">

      <h2 className="text-center text-2xl font-extrabold text-[#101535]">
        Get a Free Enquiry
      </h2>

      <p className="mt-2 text-center text-sm text-[#626B85]">
        Fill in your details and our team will connect with you.
      </p>

      <form onSubmit={handleSubmit} className="mt-7 space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-[#E9DFFF] bg-[#FCFAFF] px-4 py-3.5 text-[#101535] outline-none transition focus:border-[#7138F5]"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-[#E9DFFF] bg-[#FCFAFF] px-4 py-3.5 text-[#101535] outline-none transition focus:border-[#7138F5]"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Your Contact Number"
          value={form.phone}
          onChange={handleChange}
          pattern="[0-9]{10}"
          maxLength={10}
          required
          className="w-full rounded-xl border border-[#E9DFFF] bg-[#FCFAFF] px-4 py-3.5 text-[#101535] outline-none transition focus:border-[#7138F5]"
        />

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7138F5] to-[#5F25DE] px-6 py-3.5 font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(113,56,245,0.3)]"
        >
          Submit Enquiry
          <ArrowUpRight size={18} />
        </button>

      </form>
    </div>
  );
}
