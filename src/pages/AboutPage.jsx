import React from "react";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  Award,
  BadgeCheck,
  Users,
  BarChart3,

} from "lucide-react";

// Import images
import about1 from "../assets/about3.avif";
import about2 from "../assets/about4.avif";

// Import only 4 speakers from speakers folder
import ImteyazSiddiqui from "../assets/speakers/ImteyazSiddiqui.avif";
import DrDiegoRobalino from "../assets/speakers/DrDiegoRobalino.avif";
import DrVSKVHarish from "../assets/speakers/DrVSKVHarish.avif";
import ShashankGupta from "../assets/speakers/ShashankGupta.avif";


import brand from "../assets/WhyParticipate/brand.png";
import networking from "../assets/WhyParticipate/networking.png";
import market from "../assets/WhyParticipate/market.png";
import award from "../assets/WhyParticipate/award.png";



// Featured speakers data (only 4)
const featuredSpeakers = [
  {
    name: "Imteyaz Siddiqui",
    role: "Vice President",
    org: "Polywater Apac & Gcc",
    img: ImteyazSiddiqui,
  },
  {
    name: "Dr. Diego Robalino",
    role: "Global Industry Director",
    org: "Megger USA",
    img: DrDiegoRobalino,
  },
  {
    name: "Dr. V.S.K.V Harish",
    role: "Assistant Professor",
    org: "NSUT",
    img: DrVSKVHarish,
  },
  {
    name: "Shashank Gupta",
    role: "PHD Research Scholar",
    org: "IIT, Roorkee",
    img: ShashankGupta,
  },
];

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

export default function AboutPage() {
  const navigate = useNavigate();
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
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-[35px] bg-gradient-to-r from-[#c9962f] to-[#e8b84b] text-[#1a1305] font-semibold uppercase tracking-wider text-sm hover:brightness-110 transition"
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

      {/* Speakers Section - Circular Layout */}
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

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
          >
            Learn from India's top Electrical, Energy &amp; Utility experts
            sharing knowledge, insights and innovations.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          >
            {featuredSpeakers.map((speaker, index) => (
              <motion.div
                key={index}
                variants={scaleUp}
                whileHover={{ scale: 1.05 }}
                className="group flex flex-col items-center"
              >
                {/* Circular Image */}
                <div className="relative w-48 h-48 mx-auto">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={speaker.img}
                    alt={speaker.name}
                    className="w-48 h-48 rounded-full object-cover "
                  />
                  {/* Decorative ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-yellow-400/20 group-hover:border-yellow-400/40 transition-all duration-300 scale-110"></div>
                </div>

                {/* Speaker Details */}
                <div className="mt-6 text-center">
                  <h3 className="text-gray-900 font-bold text-lg">
                    {speaker.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{speaker.role}</p>
                  <p className="text-gray-500 text-sm">{speaker.org}</p>
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



{/* Why Participate */}
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  className="relative py-24 bg-[#0a1020] overflow-hidden"
>
  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/10 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-500/10 blur-[120px] rounded-full"></div>

  <div className="relative max-w-7xl mx-auto px-6">
    {/* Heading */}
    <motion.div
      variants={fadeInUp}
      className="text-center max-w-3xl mx-auto"
    >
      <span className="inline-block px-4 py-2 rounded-full bg-[#e8b84b]/10 border border-[#e8b84b]/20 text-[#f3d488] text-sm uppercase tracking-[3px] font-semibold">
        Why Participate
      </span>

      <h2 className="mt-6 font-['Playfair_Display',serif] text-4xl md:text-5xl font-bold text-white leading-tight">
        Unlock Opportunities at
        <span className="text-[#e8b84b]"> ETES 2026</span>
      </h2>

      <p className="mt-6 text-lg text-gray-300 leading-8">
        Join India's premier Electrical & Power Engineering Exhibition &
        Conference to connect with industry leaders, discover innovations,
        strengthen your brand, and explore new business opportunities.
      </p>
    </motion.div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
      {/* Card 1 */}
      <motion.div
        variants={fadeInUp}
        whileHover={{ 
          y: -8,
          borderColor: "#e8b84b"
        }}
        className="group relative bg-white/5 border border-[#e8b84b]/20 rounded-3xl p-6 backdrop-blur-md transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
      >
        {/* Animated Background Gradient - Left to Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#e8b84b]/0 via-[#e8b84b]/20 to-[#e8b84b]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex justify-center items-center w-full h-56">
            <img
              src={brand}
              alt="Brand Value"
              className="w-66 h-66 object-contain group-hover:scale-110 transition-all duration-500"
            />
          </div>

          <h3 className="mt-4 text-xl font-bold text-white">
            Brand Value
          </h3>

          <p className="mt-3 text-gray-300 leading-6 text-sm">
            Enhance your organization's visibility and strengthen your
            reputation within the Electrical & Power industry.
          </p>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        variants={fadeInUp}
        whileHover={{ 
          y: -8,
          borderColor: "#e8b84b"
        }}
        className="group relative bg-white/5 border border-[#e8b84b]/20 rounded-3xl p-6 backdrop-blur-md transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
      >
        {/* Animated Background Gradient - Left to Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#e8b84b]/0 via-[#e8b84b]/20 to-[#e8b84b]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex justify-center items-center w-full h-56">
            <img
              src={networking}
              alt="Networking"
              className="w-66 h-66 object-contain group-hover:scale-110 transition-all duration-500"
            />
          </div>

          <h3 className="mt-4 text-xl font-bold text-white">
            Networking
          </h3>

          <p className="mt-3 text-gray-300 leading-6 text-sm">
            Connect with industry decision-makers, manufacturers,
            consultants, utilities and key stakeholders from across India.
          </p>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        variants={fadeInUp}
        whileHover={{ 
          y: -8,
          borderColor: "#e8b84b"
        }}
        className="group relative bg-white/5 border border-[#e8b84b]/20 rounded-3xl p-6 backdrop-blur-md transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
      >
        {/* Animated Background Gradient - Left to Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#e8b84b]/0 via-[#e8b84b]/20 to-[#e8b84b]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex justify-center items-center w-full h-56">
            <img
              src={market}
              alt="Market Research"
              className="w-66 h-66 object-contain group-hover:scale-110 transition-all duration-500"
            />
          </div>

          <h3 className="mt-4 text-xl font-bold text-white">
            Market Research
          </h3>

          <p className="mt-3 text-gray-300 leading-6 text-sm">
            Gain valuable insights into emerging market trends, industry
            challenges and future business opportunities.
          </p>
        </div>
      </motion.div>

      {/* Card 4 */}
      <motion.div
        variants={fadeInUp}
        whileHover={{ 
          y: -8,
          borderColor: "#e8b84b"
        }}
        className="group relative bg-white/5 border border-[#e8b84b]/20 rounded-3xl p-6 backdrop-blur-md transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
      >
        {/* Animated Background Gradient - Left to Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#e8b84b]/0 via-[#e8b84b]/20 to-[#e8b84b]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex justify-center items-center w-full h-56">
            <img
              src={award}
              alt="Award Ceremony"
              className="w-66 h-66 object-contain group-hover:scale-110 transition-all duration-500"
            />
          </div>

          <h3 className="mt-4 text-xl font-bold text-white">
            Award Ceremony
          </h3>

          <p className="mt-3 text-gray-300 leading-6 text-sm">
            Celebrate excellence by recognizing entrepreneurs, product
            developers, manufacturers and utilities across the Electrical &
            Power industry and allied sectors.
          </p>
        </div>
      </motion.div>
    </div>

    {/* Bottom CTA */}
    <motion.div
      variants={fadeInUp}
      className="mt-20 rounded-3xl border border-[#e8b84b]/20 bg-gradient-to-r from-[#10182e] via-[#111827] to-[#10182e] p-10 text-center"
    >
      <h3 className="text-3xl font-bold text-white">
        Be a Part of India's Leading Electrical & Power Event
      </h3>

      <p className="mt-4 text-gray-300 max-w-3xl mx-auto leading-8">
        ETES 2026 offers an unmatched platform to showcase innovations,
        build strategic partnerships, generate business leads and celebrate
        excellence in the Electrical & Power ecosystem.
      </p>

 <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => navigate("/register")}
  className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#c9962f] to-[#e8b84b] px-8 py-4 text-[#0a1020] font-bold transition-all duration-300 shadow-lg hover:shadow-[#e8b84b]/30"
>
  Register Now
 
</motion.button>
    </motion.div>
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
