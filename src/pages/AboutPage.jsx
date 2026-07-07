import React from "react";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Keep your existing image imports exactly as before, e.g:
import about1 from "../assets/about3.avif";
import about2 from "../assets/about4.avif";
import speaker1 from "../assets/speaker1.jpg";
import speaker2 from "../assets/speaker2.jpg";
import speaker3 from "../assets/speaker3.jpg";
import speaker4 from "../assets/speaker4.jpg";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
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

const fadeInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#050914] text-white font-['Jost',sans-serif]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Jost:wght@300;400;500;600&display=swap');
      `}</style>

      {/* Hero */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="pt-32 pb-24 min-h-screen border-b border-[#e8b84b]/20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:mt-12"
          >
            <motion.span
              variants={fadeInLeft}
              className="flex items-center gap-3 text-[#f3d488] uppercase tracking-[5px] text-sm before:content-[''] before:w-9 before:h-px before:bg-[#c9962f]"
            >
              About ETES
            </motion.span>

            <motion.h1
              variants={fadeInLeft}
              className="font-['Playfair_Display',serif] font-extrabold text-5xl md:text-6xl mt-6 leading-[1.05] text-[#e8b84b] [text-shadow:0_0_40px_rgba(232,184,75,0.25)]"
            >
              International Electrical Energy Business Event
            </motion.h1>

            <motion.p
              variants={fadeInLeft}
              className="text-gray-400 mt-8 leading-8 max-w-md"
            >
              ETES is India's premier platform connecting manufacturers, EPC
              companies, utilities, consultants, government organizations,
              technology providers and global innovators under one roof.
            </motion.p>

            <Link
              to="/about-details"
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-[35px]
  bg-gradient-to-r from-[#c9962f] to-[#e8b84b]
  text-[#1a1305] font-semibold uppercase tracking-wider text-sm
  hover:brightness-110 transition"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Images */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >
            <motion.img
              variants={fadeInRight}
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ duration: 0.3 }}
              src={about1}
              alt="ETES event"
              className="rounded-3xl h-[260px] w-full object-cover border border-[#e8b84b]/20"
            />

            <motion.img
              variants={fadeInRight}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              src={about2}
              alt="ETES event"
              className="rounded-3xl h-[260px] w-full object-cover mt-14 border border-[#e8b84b]/20"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Speakers */}

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-24 overflow-hidden bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-3 text-yellow-600 uppercase tracking-[5px] text-sm font-semibold before:content-[''] before:w-9 before:h-px before:bg-yellow-500 after:content-[''] after:w-9 after:h-px after:bg-yellow-500"
          >
            Meet The Voices
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="font-['Playfair_Display',serif] font-bold text-5xl mt-5 text-gray-900"
          >
            ETES 2026 Speakers
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16"
          >
            {[speaker1, speaker2, speaker3, speaker4].map((img, i) => (
              <motion.div
                key={i}
                variants={scaleUp}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="relative w-52 h-52 mx-auto">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={img}
                    alt={`ETES speaker ${i + 1}`}
                    className="w-52 h-52 rounded-full object-cover border-4 border-yellow-400 transition duration-300 group-hover:border-yellow-500 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                  />
                  {/* Optional: Add speaker names overlay */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow-md border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    <span className="text-xs font-semibold text-gray-700">
                      Speaker {i + 1}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              to="/speakers"
              className="mt-12 inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:shadow-[0_8px_25px_rgba(212,175,55,0.4)] hover:gap-3"
            >
              View All Speakers
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Join */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-24 bg-[#0a1020] border-y border-[#e8b84b]/20 overflow-hidden"
      >
        <div className="max-w-5xl mx-auto text-center px-6">
          <motion.h2
            variants={fadeInUp}
            className="font-['Playfair_Display',serif] font-bold text-5xl text-[#f3d488]"
          >
            Why Participate?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-8 text-gray-300 text-xl italic"
          >
            Discover the impact of being part of ETES 2026. Meet industry
            leaders, explore innovations, generate business opportunities and
            grow your network.
          </motion.p>

          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 inline-flex items-center gap-2 px-10 py-4 rounded-[30px] bg-gradient-to-r from-[#c9962f] to-[#e8b84b] text-[#1a1305] font-bold uppercase tracking-wider text-sm hover:brightness-110 transition"
          >
            Discover Why 
          </motion.button>
        </div>
      </motion.section>

      {/* Location */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-24 overflow-hidden bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              variants={fadeInLeft}
              className="flex items-center gap-3 text-yellow-600 uppercase tracking-[5px] text-sm font-semibold before:content-[''] before:w-9 before:h-px before:bg-yellow-500"
            >
              Find Us
            </motion.span>

            <motion.h2
              variants={fadeInLeft}
              className="font-['Playfair_Display',serif] font-bold text-5xl mt-5 text-gray-900"
            >
              Event Location
            </motion.h2>

            <motion.p
              variants={fadeInLeft}
              className="mt-8 text-gray-600 leading-8 max-w-md"
            >
              Join us at India Expo Centre &amp; Mart, Greater Noida, Delhi NCR.
            </motion.p>

            <motion.div
              variants={fadeInLeft}
              className="mt-10 flex items-start gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-10 h-10 rounded-full border-2 border-yellow-400 flex items-center justify-center text-yellow-500 shrink-0 bg-yellow-50"
              >
                <MapPin size={18} />
              </motion.div>
              <div>
                <h4 className="text-yellow-600 font-semibold uppercase tracking-wider text-xs">
                  Venue
                </h4>
                <p className="mt-2 text-gray-700">
                  India Expo Centre &amp; Mart
                  <br />
                  Greater Noida
                  <br />
                  Uttar Pradesh
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInLeft}
              className="mt-8 flex items-start gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-10 h-10 rounded-full border-2 border-yellow-400 flex items-center justify-center text-yellow-500 shrink-0 bg-yellow-50"
              >
                <Calendar size={18} />
              </motion.div>
              <div>
                <h4 className="text-yellow-600 font-semibold uppercase tracking-wider text-xs">
                  Date
                </h4>
                <p className="mt-2 text-gray-700">18–20 August 2026</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <motion.iframe
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              title="ETES venue map"
              className="rounded-3xl w-full h-[450px] border-2 border-yellow-200/50 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]"
              src="https://www.google.com/maps?q=India+Expo+Centre+Greater+Noida&output=embed"
              loading="lazy"
            ></motion.iframe>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
