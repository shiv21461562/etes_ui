import { motion } from "framer-motion";
import { Zap, Users, Mic2, Building2, Globe2, TrendingUp } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Zap,
    title: "Latest Technology",
    desc: "Experience live demonstrations of next-generation electrical and energy innovations.",
  },
  {
    icon: Users,
    title: "B2B Networking",
    desc: "Meet manufacturers, EPC companies, consultants and key decision makers.",
  },
  {
    icon: Mic2,
    title: "Expert Sessions",
    desc: "Learn from keynote speakers, technical workshops and industry leaders.",
  },
  {
    icon: Building2,
    title: "500+ Brands",
    desc: "Explore products and solutions from India's leading electrical companies.",
  },
  {
    icon: Globe2,
    title: "Global Participation",
    desc: "Connect with exhibitors and delegates from multiple countries.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    desc: "Generate leads, partnerships and long-term business opportunities.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function WhyAttend() {
  const [activeCard, setActiveCard] = useState(null);
  return (
    <section className="relative overflow-hidden bg-[#050914] py-24">
      {/* Background Glow */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            Why Attend ETES
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
            Experience The Future Of
            <span className="block text-[#D4AF37]">
              Electrical & Energy Innovation
            </span>
          </h2>

          <p className="mt-6 text-gray-400 leading-8">
            Join thousands of professionals, innovators, manufacturers,
            consultants and decision-makers for India's premier Electrical &
            Energy Technology Exhibition.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                onClick={() => setActiveCard(index)}
                variants={item}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 cursor-pointer"
              >
                {/* Hover Glow - Subtle */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5" />

                {/* Gold Line */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] transition-all duration-500 group-hover:bg-[#D4AF37] group-hover:text-black group-hover:border-[#D4AF37]">
                    <Icon size={30} />
                  </div>

                  {/* Title - Stays White on hover */}
                  <h3 className="mt-7 text-2xl font-semibold text-white transition-all duration-500">
                    {feature.title}
                  </h3>

                  {/* Description - Stays Gray on hover */}
                  <p className="mt-4 leading-7 text-gray-400 transition-all duration-500">
                    {feature.desc}
                  </p>

                  {/* Decorative Line */}
                  <div className="mt-8 h-[2px] w-12 bg-[#D4AF37] transition-all duration-500 group-hover:w-24" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <button
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r
            from-[#C9A227]
            via-[#F8E7A1]
            to-[#C9A227]
            px-10
            py-4
            font-bold
            tracking-wider
            text-black
            shadow-[0_20px_50px_rgba(212,175,55,.25)]
            transition-all
            duration-500
            hover:-translate-y-1
            hover:scale-105
            hover:shadow-[0_25px_70px_rgba(212,175,55,.45)]"
          >
            {/* Shine */}
            <span className="absolute inset-0 overflow-hidden rounded-xl">
              <span className="absolute -left-24 top-0 h-full w-16 rotate-12 bg-white/60 blur-md transition-all duration-1000 group-hover:left-[120%]" />
            </span>

            <span className="relative flex items-center gap-3">
              Become A Visitor
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}