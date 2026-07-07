import { motion } from "framer-motion";

import spark from "../../assets/supported/spark.png";
import itma from "../../assets/supported/itma.png";
import ipe from "../../assets/supported/ipe.png";
import cosma from "../../assets/supported/cosma.png";
import global from "../../assets/supported/global.png";
import renewable from "../../assets/supported/renewable.avif";
import construction from "../../assets/supported/construction.webp";

const supporters = [
  spark,
  itma,
  ipe,
  cosma,
  global,
  renewable,
  construction,
];

export default function SupportedBy() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900 py-28 transition-colors duration-300">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block px-5 py-2 rounded-full border border-[#F3C548]/30 bg-[#F3C548]/10 text-[#F3C548] uppercase tracking-[3px] text-xs font-semibold">
            Our Associations
          </span>

          <h2 className="mt-6 text-5xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            Supported By
          </h2>

          <div className="flex justify-center items-center mt-6">
            <div className="w-16 h-[2px] bg-[#F3C548]" />
            <div className="w-3 h-3 rounded-full bg-[#F3C548] mx-3" />
            <div className="w-16 h-[2px] bg-[#F3C548]" />
          </div>

          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-8 transition-colors duration-300">
            ETES proudly collaborates with renowned industry
            associations, media partners and organizations
            driving innovation in the electrical, energy,
            automation and manufacturing sectors.
          </p>
        </motion.div>

        {/* Logo Grid with White Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 mt-20"
        >
          {supporters.map((logo, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.08,
                y: -8,
              }}
              className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl border-2 border-transparent hover:border-[#F3C548] transition-all duration-300 ease-in-out cursor-pointer group"
            >
              <img
                src={logo}
                alt={`Supporter ${index + 1}`}
                className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}