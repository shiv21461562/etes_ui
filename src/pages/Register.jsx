import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Calendar,
  MapPin,
  Users,
  Mic,
  Globe,
  User,
  Mail,
  Phone,
  Pencil,
  Send,
  Lock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import registrationImage from "../assets/REG.png";

import { registerUser } from "../services/registrationApi";
import toast from "react-hot-toast";
// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ETES2026() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [remember, setRemember] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const payload = {
      full_name: form.name,
      email: form.email,
      phone: form.phone,
      message: form.message,
    };

    const res = await registerUser(payload);

    if (res.data.success) {
      toast.success("Registration submitted successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  } catch (error) {
    console.error(error);

    alert(
      error.response?.data?.message ||
      "Something went wrong."
    );
  } finally {
    setLoading(false);
  }
};

  const stats = [
    {
      icon: Calendar,
      big: "23",
      small: "SEP 2026",
      label: "Event Dates",
    },
    {
      icon: MapPin,
      big: "Scope complex",
      small: "Centre",
      label: "New Delhi",
    },
    { icon: Users, big: "50+", small: "", label: "Participants" },
    { icon: Mic, big: "20+", small: "", label: "Speakers" },
    { icon: Globe, big: "4+", small: "", label: "Countries" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e1a] via-[#111827] to-[#0a0e1a] text-white font-sans">
      {/* HERO - Clean Text Only */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative px-6 md:px-12 py-20 md:py-28 overflow-hidden"
      >
        {/* Animated Background Glow */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10 text-center"
        >
          {/* Main Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight mb-4"
          >
            <span className="text-white">Register for</span>
            <br />
            <motion.span
              variants={fadeInUp}
              className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500"
            >
              ETES 2026
            </motion.span>
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            className="text-xl md:text-2xl font-semibold text-white/80 mb-6"
          >
            India's Premier Energy &amp; Technology Event
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-gray-300/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Join 5000+ industry professionals, innovators, and thought leaders
            at the most anticipated energy event of the year.
            <motion.span
              variants={fadeInUp}
              className="text-amber-400 font-semibold block mt-2"
            >
              ✦ Early bird registration closes soon! ✦
            </motion.span>
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 mb-10 max-w-3xl mx-auto"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={scaleUp}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.08)",
                  borderColor: "rgba(251,191,36,0.4)",
                }}
                transition={{ duration: 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:border-amber-400/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center mb-1.5">
                  <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center group-hover:bg-amber-400/20 transition-colors">
                    <s.icon size={16} className="text-amber-400" />
                  </div>
                </div>
                <div className="text-sm font-bold text-white">
                  {s.big}{" "}
                  {s.small && <span className="text-xs block">{s.small}</span>}
                </div>
                <div className="text-[10px] text-gray-400 font-medium tracking-wide uppercase mt-0.5">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("registration-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-bold text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-amber-400/30 hover:shadow-amber-400/50"
            >
              <User size={18} />
              REGISTER NOW
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors group"
            >
              <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-amber-400/50 transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              Watch Event Trailer
            </motion.a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-6 mt-10"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#0a0e1a] bg-gradient-to-br from-gray-300 to-gray-400"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-400">
                <span className="text-white font-semibold">500+</span> already
                registered
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>


{/* REGISTRATION FORM - Clean White Card */}
<motion.section
  id="registration-form"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  className="px-6 md:px-12 py-20 bg-white"
>
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="text-center mb-12"
  >
    <motion.div
      variants={fadeInUp}
      className="flex items-center justify-center gap-3 mb-4"
    >
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500" />
      <span className="text-amber-500 text-xs font-bold tracking-widest">
        REGISTRATION
      </span>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500" />
    </motion.div>
    <motion.h2
      variants={fadeInUp}
      className="text-4xl md:text-4xl font-extrabold mb-3"
    >
      <span className="text-gray-900">Get Your</span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 ml-3">
        Pass Now
      </span>
    </motion.h2>
    <motion.p
      variants={fadeInUp}
      className="text-gray-600 max-w-lg mx-auto"
    >
      Fill in your details below and our team will get in touch with you
      shortly.
    </motion.p>
  </motion.div>

  {/* Two Column Layout - Image & Form */}
  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
    
    {/* Image Section */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="hidden lg:block"
    >
      <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">
    <img
  src={registrationImage}
  alt="ETES 2026 Registration"
  className="w-full h-[600px] object-cover"
/>
        {/* Overlay with text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
          <div>
            <h3 className="text-white text-2xl font-bold">Register Now</h3>
            <p className="text-white/80 text-sm mt-1">Secure your spot at ETES 2026</p>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Form Section with Transparent Inputs */}
    <motion.form
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="rounded-2xl p-8 md:p-10 border border-gray-100 bg-white"
    >
      <div className="space-y-5">
        {/* Full Name */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Full Name <span className="text-amber-500">*</span>
          </label>
          <div className="flex items-center gap-3 bg-transparent border-b-2 border-amber-500 px-0 py-2 focus-within:border-amber-400 transition-all duration-300">
            <User size={18} className="text-amber-500 flex-shrink-0" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="bg-transparent outline-none w-full text-gray-700 placeholder:text-gray-400 text-sm"
            />
          </div>
        </motion.div>

        {/* Email */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Email Address <span className="text-amber-500">*</span>
          </label>
          <div className="flex items-center gap-3 bg-transparent border-b-2 border-amber-500 px-0 py-2 focus-within:border-amber-400 transition-all duration-300">
            <Mail size={18} className="text-amber-500 flex-shrink-0" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              className="bg-transparent outline-none w-full text-gray-700 placeholder:text-gray-400 text-sm"
            />
          </div>
        </motion.div>

        {/* Phone */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Phone Number <span className="text-amber-500">*</span>
          </label>
          <div className="flex items-center gap-3 bg-transparent border-b-2 border-amber-500 px-0 py-2 focus-within:border-amber-400 transition-all duration-300">
            <Phone size={18} className="text-amber-500 flex-shrink-0" />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              required
              className="bg-transparent outline-none w-full text-gray-700 placeholder:text-gray-400 text-sm"
            />
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Message <span className="text-amber-500">*</span>
          </label>
          <div className="flex items-start gap-3 bg-transparent border-b-2 border-amber-500 px-0 py-2 focus-within:border-amber-400 transition-all duration-300">
            <Pencil size={18} className="text-amber-500 flex-shrink-0 mt-1" />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us how we can help you..."
              required
              rows={3}
              className="bg-transparent outline-none w-full text-gray-700 placeholder:text-gray-400 text-sm resize-none"
            />
          </div>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-sm tracking-widest py-4 rounded-xl transition-all duration-300 shadow-lg shadow-amber-400/30 hover:shadow-amber-400/50 mt-4"
        >
          {loading ? (
  <>Submitting...</>
) : submitted ? (
            <>
              <CheckCircle2 size={18} />
              SUBMITTED!
            </>
          ) : (
            <>
              SUBMIT REGISTRATION
            </>
          )}
        </motion.button>

        {/* Privacy Note */}
        <motion.p
          variants={fadeInUp}
          className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-4"
        >
          <Lock size={14} />
          Your information is safe with us. We respect your privacy.
        </motion.p>
      </div>
    </motion.form>

  </div>
</motion.section>




    </div>
  );
}
