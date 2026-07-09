import { motion } from "framer-motion";

import flir from "../../assets/ExhibitionImage/flir.png";
import motwane from "../../assets/ExhibitionImage/motwane.png";
import emr from "../../assets/ExhibitionImage/emr.png";
import interTech from "../../assets/ExhibitionImage/inter-tech.png";
import nuCork from "../../assets/ExhibitionImage/nucork.png";

const exhibitors = [
  {
    image: flir,
    width: "w-[165px]",
  },
  {
    image: motwane,
    width: "w-[105px]",
  },
  {
    image: emr,
    width: "w-[150px]",
  },
  {
    image: interTech,
    width: "w-[170px]",
  },
  {
    image: nuCork,
    width: "w-[150px]",
  },
];

export default function ExhibitorStall() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-gray-900">
            Exhibitor Stall
          </h2>

          <div className="flex justify-center items-center mt-5">
            <div className="w-16 h-[2px] bg-[#F3C548]" />
            <div className="w-3 h-3 rounded-full bg-[#F3C548] mx-3"></div>
            <div className="w-16 h-[2px] bg-[#F3C548]" />
          </div>
        </motion.div>

        {/* Logos */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-3 place-items-center"
        >
          {exhibitors.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 35,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              transition={{ duration: 0.35 }}
             className="w-[150px] h-[75px] flex items-center justify-center"
            >
              <img
                src={item.image}
                alt={`Exhibitor ${index + 1}`}
                className={`${item.width} h-auto object-contain transition-all duration-300`}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}