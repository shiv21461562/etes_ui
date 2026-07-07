import { motion } from "framer-motion";

import doble from "../../assets/sponsors/doble.png";
import flir from "../../assets/sponsors/flir.png";
import polywater from "../../assets/sponsors/polywater.png";
import nextgen from "../../assets/sponsors/nextgen.png";
import wago from "../../assets/sponsors/wago.png";
import motwane from "../../assets/sponsors/motwane.png";
import solera from "../../assets/sponsors/solera.png";
import dhash from "../../assets/sponsors/dhash.png";
import kp from "../../assets/sponsors/kp.png";
import modutec from "../../assets/sponsors/modutec.png";
import ptss from "../../assets/sponsors/ptss.png";
import phoenix from "../../assets/sponsors/phoenix.png";

const sponsorData = [
  {
    title: "Platinum Sponsor",
    logos: [{ image: doble }],
  },
  {
    title: "Gold Sponsor",
    logos: [{ image: flir }, { image: polywater }, { image: nextgen }],
  },
  {
    title: "Silver Sponsor",
    logos: [{ image: wago }, { image: motwane }],
  },
  {
    title: "Logo Sponsor",
    logos: [
      { image: solera },
      { image: dhash },
      { image: kp },
      { image: modutec },
      { image: ptss },
      { image: phoenix },
    ],
  },
];

export default function Partners() {
  return (
    <section className="bg-white py-20 md:py-28">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');
      `}</style>

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] font-['Baloo_2',sans-serif]">
            Our Sponsors
          </h2>
        </motion.div>

        {/* Sponsors */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-x-10 gap-y-14">

          {sponsorData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >

              {/* Title */}
              <div className="flex justify-center mb-8">
                <span className="bg-gray-100 text-[#111827] text-base font-semibold px-6 py-2.5 rounded-md font-['Inter',sans-serif]">
                  {category.title}
                </span>
              </div>

              {/* Logos */}
            {/* Logos */}
{category.title === "Logo Sponsor" ? (
  <div className="grid grid-cols-2 gap-5 justify-items-center">
    {category.logos.map((logo, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.2 }}
        className="h-24 w-full flex items-center justify-center"
      >
        <img
          src={logo.image}
          alt={category.title}
          className="max-w-[120px] max-h-[55px] object-contain select-none"
          draggable={false}
        />
      </motion.div>
    ))}
  </div>
) : (
  <div className="flex flex-col gap-6">
    {category.logos.map((logo, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.2 }}
        className="h-24 flex items-center justify-center"
      >
        <img
          src={logo.image}
          alt={category.title}
          className="max-w-[150px] max-h-[64px] object-contain select-none"
          draggable={false}
        />
      </motion.div>
    ))}
  </div>
)}

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
