import { motion } from "framer-motion";
import { Brain, PenTool, Link2 } from "lucide-react";

const cards = [
  {
    icon: Brain,
    title: "THINK",
    subtitle: "Innovate & Strategize",
    description:
      "A platform to foster innovative ideas and strategic thinking for power sector development and business growth.",
  },
  {
    icon: PenTool,
    title: "INK",
    subtitle: "Share Knowledge",
    description:
      "A forum for sharing knowledge, industry insights, and technological advancements.",
  },
  {
    icon: Link2,
    title: "LINK",
    subtitle: "Build Connections",
    description:
      "Connect with industry leaders, utilities, policymakers, entrepreneurs, consultants, and solution providers.",
  },
];

const ThinkInkLink = () => {
  return (
    <section className="py-24 bg-[#0b1020] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
            THINK <span className="text-[#E8B84B]">•</span> INK{" "}
            <span className="text-[#E8B84B]">•</span> LINK
          </h2>

          <p className="text-gray-400 text-center mt-6 max-w-3xl mx-auto leading-8">
            Transform ideas into innovation, share valuable knowledge, and
            create meaningful industry connections under one platform.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-[#E8B84B]/20 bg-[#121827] p-8 transition-all duration-500 hover:border-[#E8B84B] hover:shadow-[0_0_35px_rgba(232,184,75,0.25)]"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#E8B84B]/10 flex items-center justify-center group-hover:bg-[#E8B84B] transition">
                  <Icon
                    size={32}
                    className="text-[#E8B84B] group-hover:text-black"
                  />
                </div>

                <h3 className="text-3xl font-bold text-white mt-8">
                  {card.title}
                </h3>

                <p className="text-[#E8B84B] mt-2 font-semibold">
                  {card.subtitle}
                </p>

                <p className="text-gray-400 mt-5 leading-7">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThinkInkLink;