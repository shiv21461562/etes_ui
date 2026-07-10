import React from "react";
import {
  Users,
  Globe,
  Calendar,
  ShoppingBag,
  Mic2,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-speaker.jpg";
import { useNavigate } from "react-router-dom";

// Import all speaker images with clean filenames
import AtherSalim from "../assets/speakers/AtherSalim.avif";
import DrDiegoRobalino from "../assets/speakers/DrDiegoRobalino.avif";
import DrVSKVHarish from "../assets/speakers/DrVSKVHarish.avif";
import ImteyazSiddiqui from "../assets/speakers/ImteyazSiddiqui.avif";
import JayeshPatel from "../assets/speakers/JayeshPatel.avif";
import PKPattanaik from "../assets/speakers/PKPattanaik.avif";
import RajeshArora from "../assets/speakers/RajeshArora.avif";
import RamaniMani from "../assets/speakers/RamaniMani.avif";
import SaiMynampati from "../assets/speakers/SaiMynampati.avif";
import ShashankGupta from "../assets/speakers/ShashankGupta.avif";
import ShitalShah from "../assets/speakers/ShitalShah.avif";
import ShyamRavindran from "../assets/speakers/ShyamRavindran.avif";
import SiddharthBajoria from "../assets/speakers/SiddharthBajoria.avif";
import SushilVarshney from "../assets/speakers/SushilVarshney.avif";
import YogeshSood from "../assets/speakers/YogeshSood.avif";

const stats = [
  { icon: Users, value: "20+", label: "Industry Speakers" },
  { icon: Globe, value: "4+", label: "Countries" },
  { icon: Calendar, value: "25+", label: "Technical Sessions" },
  { icon: Users, value: "5000+", label: "Delegates" },
];

const speakers = [
  {
    name: "Imteyaz Siddiqui",
    role: "Vice President",
    org: "Polywater Apac & Gcc",
    img: ImteyazSiddiqui,
  },
  {
    name: "Er. P.K Pattanaik",
    role: "Senior General Manager",
    org: "(OPTCL)",
    img: PKPattanaik,
  },
  {
    name: "Ather Salim",
    role: "DIRECTOR & OWNER",
    org: "NEXT GEN EQUIPMENTS P. LTD",
    img: AtherSalim,
  },
  {
    name: "Shyam Ravindran",
    role: "Senior Manager (Technical)",
    org: "(Sonel India)",
    img: ShyamRavindran,
  },
  {
    name: "Yogesh Sood",
    role: "Advisor - Application Technology",
    org: "(Ptess)",
    img: YogeshSood,
  },
  {
    name: "Shital Shah",
    role: "Sales Director-India, Jason, ANZ",
    org: "Qualitrol",
    img: ShitalShah,
  },
  {
    name: "Ramani Mani",
    role: "Founder & MD",
    org: "(Modutec Ready Panels Pvt. Ltd)",
    img: RamaniMani,
  },
  {
    name: "Sai Mynampati",
    role: "Head of operations",
    org: "(IPEC, UK)",
    img: SaiMynampati,
  },
  {
    name: "Dr. Diego Robalino",
    role: "Global Industry Director",
    org: "(Utilities Transformer at Megger USA)",
    img: DrDiegoRobalino,
  },
  {
    name: "Sushil Varshney",
    role: "Director",
    org: "Tech-Pubs Media Pvt Ltd",
    img: SushilVarshney,
  },
  {
    name: "Jayesh Patel",
    role: "BDM",
    org: "Megger India",
    img: JayeshPatel,
  },
  {
    name: "Rajesh Arora",
    role: "Senior Manager (Technical)",
    org: "Delhi transco ltd.",
    img: RajeshArora,
  },
  {
    name: "Siddharth Bajoria",
    role: "Technical Sales Manager India",
    org: "Qualitrol Iris Power",
    img: SiddharthBajoria,
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
    org: "(IIT, Roorkee)",
    img: ShashankGupta,
  },
];

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
      staggerChildren: 0.08,
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

export default function SpeakersPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative overflow-hidden bg-[#0a0e1a] min-h-[720px] lg:min-h-[730px]"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />

          {/* Light Overlay */}
          <div className="absolute inset-0 bg-black/35"></div>

          {/* Golden Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a]/45 via-[#0a0e1a]/20 to-transparent"></div>

          {/* Extra Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#d4af3720,transparent_60%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 min-h-[720px] lg:min-h-[800px] flex flex-col justify-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeInLeft}
              className="flex items-center gap-3 mb-4"
            >
              <span className="h-px w-10 bg-amber-500" />

              <span className="text-amber-400 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
                Meet Our Industry Leaders
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight text-white"
            >
              Our{" "}
              <span className="bg-gradient-to-b from-amber-300 to-amber-600 bg-clip-text text-transparent">
                Speakers
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-gray-200 text-lg md:text-xl leading-8 max-w-2xl"
            >
              Learn from India's leading Electrical, Energy & Utility experts
              sharing innovative ideas, real-world experience and future-ready
              technologies shaping tomorrow's power sector.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats bar */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-20 -mt-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-amber-500/30 bg-[#0d1220]/95 backdrop-blur px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 shadow-2xl"
          >
            {stats.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                variants={scaleUp}
                className={`flex flex-col items-center text-center gap-2 ${
                  i !== stats.length - 1
                    ? "md:border-r md:border-amber-500/20"
                    : ""
                }`}
              >
                <Icon className="text-amber-400" size={28} strokeWidth={1.5} />
                <span className="text-3xl md:text-4xl font-bold text-white">
                  {value}
                </span>
                <span className="text-sm text-gray-400">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Speakers Section (light page bg, dark cards) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto px-6 pt-36 pb-16 bg-white"
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
            className="flex items-center justify-center gap-3 mb-3"
          >
            <span className="h-px w-8 bg-amber-500" />
            <span className="text-amber-500 text-xs font-semibold tracking-[0.2em] uppercase">
              Our Speakers
            </span>
            <span className="h-px w-8 bg-amber-500" />
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-900 relative inline-block"
          >
            Meet the Experts
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 h-1 w-16 bg-amber-500 rounded-full" />
          </motion.h2>
        </motion.div>

        {/* Speakers Grid - dark cards with left-to-right hover fill */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {speakers.map((speaker) => (
            <motion.div
              key={speaker.name}
              variants={scaleUp}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              className="group relative overflow-hidden rounded-2xl border border-amber-500/30 bg-[#0d1220] p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-500/20 shadow-md shadow-gray-300/40 min-h-[300px]"
            >
              {/* Left-to-right hover fill overlay */}
              <span
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-amber-500/25 via-amber-500/15 to-amber-500/25 scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"
                aria-hidden="true"
              />

              {/* Content (above overlay) */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Image with soft gold ring */}
                <div className="w-42 h-42 rounded-full overflow-hidden border-2 border-amber-400/70 mb-4 ring-4 ring-amber-500/10 transition-transform duration-300 group-hover:scale-110 bg-[#0a0e1a] p-1">
                  <img
                    src={speaker.img}
                    alt={speaker.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-white font-bold text-base mb-1">
                  {speaker.name}
                </h3>
                <p className="text-amber-400 text-sm leading-snug">
                  {speaker.role}
                </p>
                <p className="text-gray-400 text-sm leading-snug">
                  {speaker.org}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14 rounded-2xl border border-amber-400 bg-white px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-md shadow-gray-200/60"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
              <Mic2 className="text-white" size={22} />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-1 text-gray-900">
                Be a Part of <span className="text-amber-500">ETES 2026</span>
              </h3>
              <p className="text-gray-600 text-sm">
                Share your expertise, inspire the industry and shape the future
                of energy.
              </p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="flex items-center gap-2 bg-gradient-to-b from-amber-400 to-amber-500 text-[#0a0e1a] font-semibold px-6 py-3 rounded-lg hover:from-amber-300 hover:to-amber-400 transition-colors whitespace-nowrap"
          >
            Join as Speaker
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
}
