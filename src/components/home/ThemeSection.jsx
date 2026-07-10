import { motion } from "framer-motion";
import {
  BrainCircuit,
  Zap,
  ShieldCheck,
  Cable,
  Cpu,
  Factory,
  Sun,
  Trophy,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const topics = [
  {
    icon: Zap,
    title: "Power Transformers",
    desc: "Latest innovations in transformer technology and reliability.",
  },
  {
    icon: Cable,
    title: "Transmission & Distribution",
    desc: "Modern transmission, distribution and smart grid infrastructure.",
  },
  {
    icon: Cpu,
    title: "Testing & Measuring",
    desc: "Advanced testing, diagnostics and precision measuring solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Electrical & Fire Safety",
    desc: "Safety systems, compliance and electrical protection.",
  },
  {
    icon: Factory,
    title: "Automation",
    desc: "Industrial automation and intelligent control systems.",
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    desc: "Solar, wind and sustainable energy technologies.",
  },
  {
    icon: BrainCircuit,
    title: "Smart Technologies & AI",
    desc: "Artificial Intelligence, IoT and digital transformation.",
  },
  {
    icon: Zap,
    title: "Wire & Cable",
    desc: "Future-ready cable technologies for modern infrastructure.",
  },
];

const ThemeSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E8B84B]/10 text-[#C79211] font-semibold text-sm tracking-wide">
            ETES 2026 Conference Theme
          </span>

          <h3 className="mt-5 text-3xl md:text-4xl font-black text-[#08162E] leading-tight max-w-6xl">
            Artificial Intelligence{" "}
            <span className="text-[#E8B84B]">Now & Next</span> Electricity
            Beyond
            <span className="text-[#E8B84B]"> (AINN)</span>
          </h3>

          <p className="max-w-3xl mx-auto mt-4 text-base leading-relaxed text-slate-600">
            ETES 2026 explores how Artificial Intelligence is transforming
            today's electrical and power sector while shaping the next
            generation of intelligent, resilient, sustainable and digitally
            connected energy systems.
          </p>
        </motion.div>

        {/* Hero Content */}

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#E8B84B] uppercase tracking-[4px] font-semibold text-sm">
              Conference Vision
            </span>

            <h3 className="text-3xl md:text-4xl font-black text-[#08162E] mt-3 leading-tight">
              Powering the Future with
              <span className="text-[#E8B84B]"> Artificial Intelligence</span>
            </h3>

            <p className="text-slate-600 mt-4 leading-relaxed text-base">
              The conference will showcase AI-driven innovations, predictive
              maintenance, digital transformation, energy efficiency, smart
              grids and intelligent infrastructure that are redefining the
              future of electricity.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="rounded-xl border border-[#E8B84B]/20 p-3.5 bg-white/50 backdrop-blur-sm">
                <h4 className="font-bold text-[#08162E] text-sm">Smart Grid</h4>
                <p className="text-slate-500 text-xs mt-0.5">
                  AI powered intelligent distribution.
                </p>
              </div>
              <div className="rounded-xl border border-[#E8B84B]/20 p-3.5 bg-white/50 backdrop-blur-sm">
                <h4 className="font-bold text-[#08162E] text-sm">
                  Predictive Maintenance
                </h4>
                <p className="text-slate-500 text-xs mt-0.5">
                  Reduce downtime with analytics.
                </p>
              </div>
              <div className="rounded-xl border border-[#E8B84B]/20 p-3.5 bg-white/50 backdrop-blur-sm">
                <h4 className="font-bold text-[#08162E] text-sm">
                  Digital Transformation
                </h4>
                <p className="text-slate-500 text-xs mt-0.5">
                  Modernizing utilities.
                </p>
              </div>
              <div className="rounded-xl border border-[#E8B84B]/20 p-3.5 bg-white/50 backdrop-blur-sm">
                <h4 className="font-bold text-[#08162E] text-sm">
                  Sustainable Energy
                </h4>
                <p className="text-slate-500 text-xs mt-0.5">
                  Greener, resilient systems.
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate("/register")}
              className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#E8B84B] text-black font-bold hover:scale-105 duration-300 text-sm shadow-lg shadow-[#E8B84B]/20"
            >
              Register Now
            </button>
          </motion.div>

          {/* Right */}

          {/* <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[32px] border border-[#E8B84B]/20 bg-gradient-to-br from-[#08162E] to-[#132C56] p-8 overflow-hidden">
              <BrainCircuit
                size={120}
                className="mx-auto text-[#E8B84B] opacity-80"
              />
              <h3 className="text-center text-white text-2xl font-bold mt-4">
                AI Driven Electrical Future
              </h3>
              <p className="text-center text-gray-300 mt-3 leading-relaxed text-sm">
                Smarter grids, intelligent monitoring, renewable integration,
                automation and next-generation power infrastructure.
              </p>
            </div>
          </motion.div> */}

{/* video */}

          <motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="relative"
>
  <div >
    
    <video
      className="w-full h-64 object-cover rounded-2xl"
      src="/videos/ai-electric.mp4" // apni video ka path
      autoPlay
      loop
      muted
      playsInline
    />

    <h3 className="text-center text-black
     text-2xl font-bold mt-6">
      AI Driven Electrical Future
    </h3>

    <p className="text-center text-gray-800 mt-3 leading-relaxed text-sm">
      Smarter grids, intelligent monitoring, renewable integration,
      automation and next-generation power infrastructure.
    </p>
  </div>
</motion.div>



        </div>

        {/* Conference Topics */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E8B84B]/10 text-[#C79211] font-semibold text-sm">
              Conference Discussions
            </span>

            <h2 className="text-3xl md:text-4xl font-black text-[#08162E] mt-3">
              Conference Topics
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto mt-3 leading-relaxed text-sm">
              ETES 2026 brings together experts, manufacturers, utilities and
              technology leaders to discuss the latest trends and innovations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {topics.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-[#E8B84B]/20 bg-white p-6 shadow-sm transition-all duration-500 hover:border-[#E8B84B] hover:shadow-2xl

          before:absolute before:inset-0
          before:bg-gradient-to-r
          before:from-[#08162E]
          before:to-[#132C56]
          before:origin-left
          before:scale-x-0
          before:transition-transform
          before:duration-500
          before:ease-out
          hover:before:scale-x-100"
                >
                  {/* Content */}

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-[#E8B84B]/10 flex items-center justify-center transition-all duration-500 group-hover:bg-[#E8B84B]">
                      <Icon
                        size={28}
                        className="text-[#E8B84B] transition-all duration-500 group-hover:text-black"
                      />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-[#08162E] transition-colors duration-500 group-hover:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600 transition-colors duration-500 group-hover:text-gray-300">
                      {item.desc}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-[#E8B84B] font-semibold opacity-0 -translate-x-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                      Learn More
                      <span>→</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Key Highlights */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E8B84B]/10 text-[#C79211] font-semibold text-sm">
              Key Highlights
            </span>

            <h2 className="text-3xl md:text-4xl font-black text-[#08162E] mt-3">
              Why Attend ETES 2026
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {/* Excellence Awards */}

            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-3xl border border-[#E8B84B]/20 bg-white p-8 shadow-sm transition-all duration-500 hover:border-[#E8B84B] hover:shadow-2xl

      before:absolute before:inset-0
      before:bg-gradient-to-r
      before:from-[#08162E]
      before:to-[#132C56]
      before:origin-left
      before:scale-x-0
      before:transition-transform
      before:duration-500
      before:ease-out
      hover:before:scale-x-100"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-[#E8B84B]/15 flex items-center justify-center transition-all duration-500 group-hover:bg-[#E8B84B]">
                  <Trophy
                    size={32}
                    className="text-[#E8B84B] transition duration-500 group-hover:text-black"
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#08162E] mt-6 transition duration-500 group-hover:text-white">
                  Excellence Awards Ceremony
                </h3>

                <p className="text-slate-600 mt-4 leading-8 transition duration-500 group-hover:text-gray-300">
                  Celebrating outstanding achievements, innovation and
                  leadership across the Electrical & Power Industry.
                </p>

                <ul className="mt-6 space-y-3 text-slate-700 transition duration-500 group-hover:text-gray-200">
                  <li>🏆 Industry Recognition</li>
                  <li>📜 Trophy & Certificate</li>
                  <li>📰 Extensive Media Coverage</li>
                  <li>🤝 Networking with Industry Leaders</li>
                </ul>

                <div className="mt-8 flex items-center gap-2 text-[#E8B84B] font-semibold opacity-0 -translate-x-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                  Learn More →
                </div>
              </div>
            </motion.div>

            {/* Knowledge Sharing */}

            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-3xl border border-[#E8B84B]/20 bg-white p-8 shadow-sm transition-all duration-500 hover:border-[#E8B84B] hover:shadow-2xl

      before:absolute before:inset-0
      before:bg-gradient-to-r
      before:from-[#08162E]
      before:to-[#132C56]
      before:origin-left
      before:scale-x-0
      before:transition-transform
      before:duration-500
      before:ease-out
      hover:before:scale-x-100"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-[#E8B84B]/15 flex items-center justify-center transition-all duration-500 group-hover:bg-[#E8B84B]">
                  <BookOpen
                    size={32}
                    className="text-[#E8B84B] transition duration-500 group-hover:text-black"
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#08162E] mt-6 transition duration-500 group-hover:text-white">
                  Knowledge Sharing Sessions
                </h3>

                <p className="text-slate-600 mt-4 leading-8 transition duration-500 group-hover:text-gray-300">
                  Gain insights from experts through technical discussions, case
                  studies and future-focused presentations.
                </p>

                <ul className="mt-6 space-y-3 text-slate-700 transition duration-500 group-hover:text-gray-200">
                  <li>💡 Emerging Technologies</li>
                  <li>⚡ Smart Grid & AI</li>
                  <li>🌱 Renewable Energy</li>
                  <li>🎤 Expert Panel Discussions</li>
                </ul>

                <div className="mt-8 flex items-center gap-2 text-[#E8B84B] font-semibold opacity-0 -translate-x-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                  Learn More →
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="rounded-[32px] bg-[#08162E] overflow-hidden relative p-8 md:p-14">
            <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-[#E8B84B]/10 blur-3xl" />

            <div className="relative z-10 max-w-3xl">
              <h2 className="text-2xl md:text-4xl font-black text-white leading-tight">
                Join India's Premier
                <span className="text-[#E8B84B]">
                  {" "}
                  Electrical & Power Technology Conference
                </span>
              </h2>

              <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                ETES 2026 provides a unique platform for manufacturers,
                entrepreneurs, consultants, utilities and policymakers to
                exchange knowledge, showcase innovations and build meaningful
                business relationships.
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                <button
                  onClick={() => navigate("/register")}
                  className="px-6 py-2.5 rounded-full bg-[#E8B84B] text-black font-bold hover:scale-105 transition text-sm shadow-lg shadow-[#E8B84B]/20"
                >
                  Register Now
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="px-6 py-2.5 rounded-full border border-white text-white hover:bg-white hover:text-black transition text-sm"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThemeSection;
