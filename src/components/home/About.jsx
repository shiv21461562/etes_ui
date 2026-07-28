import React from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar, Users, Building2, Globe } from "lucide-react";
import aboutImage from "../../assets/etesBG.png";
import { useNavigate } from "react-router-dom";

// Animation variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function About() {
  const navigate = useNavigate();
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-[#F3C548]/5 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#F3C548]/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#F3C548]/40 bg-[#F3C548]/10 text-[#B8860B] text-sm font-semibold tracking-widest uppercase mx-auto lg:mx-0"
            >
              About ETES 2026
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeInUp}
              className="mt-6 md:mt-8 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900"
            >
              India's Premier
              <br />
              <span className="text-[#F3C548]">Electrical & Energy</span>
              <br />
              Technology Event
            </motion.h2>

            {/* Line */}
            <motion.div
              variants={fadeInUp}
              className="mt-4 md:mt-6 w-28 h-1 rounded-full bg-[#F3C548] mx-auto lg:mx-0"
            />

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="mt-6 md:mt-8 text-base md:text-lg leading-7 md:leading-8 text-gray-600 max-w-2xl mx-auto lg:mx-0"
            >
              ETES 2026 is India's leading platform connecting innovators,
              manufacturers, investors, policymakers and technology leaders from
              the electrical, energy, automation and renewable sectors.
              <br />
              <br />
              Experience next-generation technologies, business networking, live
              product launches, international conferences and unmatched
              opportunities under one roof.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 gap-3 md:gap-5 mt-8 md:mt-12"
            >
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-xl bg-gray-50 hover:bg-[#F3C548]/10 transition-all duration-300 justify-center lg:justify-start"
              >
                <Calendar className="text-[#F3C548]" size={18} />
                <span className="text-gray-700 font-medium text-sm md:text-base">
                  3 Days Conference
                </span>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-xl bg-gray-50 hover:bg-[#F3C548]/10 transition-all duration-300 justify-center lg:justify-start"
              >
                <Users className="text-[#F3C548]" size={18} />
                <span className="text-gray-700 font-medium text-sm md:text-base">
                  5000+ Visitors
                </span>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-xl bg-gray-50 hover:bg-[#F3C548]/10 transition-all duration-300 justify-center lg:justify-start"
              >
                <Building2 className="text-[#F3C548]" size={18} />
                <span className="text-gray-700 font-medium text-sm md:text-base">
                  200+ Exhibitors
                </span>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-xl bg-gray-50 hover:bg-[#F3C548]/10 transition-all duration-300 justify-center lg:justify-start"
              >
                <Globe className="text-[#F3C548]" size={18} />
                <span className="text-gray-700 font-medium text-sm md:text-base">
                  Global Networking
                </span>
              </motion.div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 md:mt-10 flex justify-center lg:justify-start"
            >
              <button
                onClick={() => navigate("/about")}
                className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-[#F3C548] hover:bg-[#dbaa30] text-black font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group text-sm md:text-base"
              >
                Learn More
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInRight}
            className="relative flex items-center justify-center mt-8 lg:mt-0"
          >
            {/* Glow */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute w-[250px] md:w-[350px] lg:w-[420px] h-[250px] md:h-[350px] lg:h-[420px] rounded-full bg-[#F3C548]/20 blur-[100px] lg:blur-[120px]"
            />

            {/* Main Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 overflow-hidden rounded-2xl md:rounded-3xl border-2 border-[#F3C548]/30 shadow-2xl w-full max-w-[350px] md:max-w-[450px] lg:max-w-none"
            >
              <motion.img
                src={aboutImage}
                alt="ETES Event"
                className="w-full h-[300px] md:h-[450px] lg:h-[620px] object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />

              {/* Overlay gradient */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
              />
            </motion.div>

            {/* Exhibitors Card - Floating */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              whileHover={{ scale: 1.08, rotate: -3 }}
              animate={floatAnimation}
              className="absolute -right-2 md:-right-4 lg:-right-8 bottom-8 md:bottom-12 lg:bottom-16 z-20 bg-white/95 backdrop-blur-xl border-2 border-[#F3C548]/30 rounded-2xl px-4 md:px-6 py-3 md:py-5 shadow-2xl"
            >
              <motion.h3
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-2xl md:text-3xl font-bold text-[#F3C548]"
              >
                200+
              </motion.h3>
              <p className="text-gray-700 font-medium text-xs md:text-sm mt-1">
                Global Exhibitors
              </p>
            </motion.div>

            {/* Countries Card - Floating */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.08, rotate: 3 }}
              animate={floatAnimation}
              className="absolute right-2 md:right-6 lg:right-10 top-4 md:top-6 lg:top-8 z-20 bg-white/95 backdrop-blur-xl border-2 border-[#F3C548]/30 rounded-2xl px-3 md:px-5 py-2 md:py-4 shadow-2xl"
            >
              <motion.h3
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-xl md:text-2xl font-bold text-[#F3C548]"
              >
                4+
              </motion.h3>
              <p className="text-xs md:text-sm text-gray-700 font-medium">Countries</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}