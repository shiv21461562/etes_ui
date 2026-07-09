  import { motion } from "framer-motion";
  import dgef from "../../assets/partners/dg.png";
  import interviewWorld from "../../assets/partners/interview.avif";

  export default function MediaPartners() {
    const partners = [
      {
        name: "DGEF",
        logo: dgef,
        role: "Social Media Partner",
      },
      {
        name: "The Interview World",
        logo: interviewWorld,
        role: "Online Interview Partner",
      },
    ];

    return (
      <section className="bg-white py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5">

          {/* Heading with Animated Underline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 inline-block relative">
              Media <span className="text-amber-500">Partners</span>
              <motion.span 
                className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 animate-pulse"></span>
              </motion.span>
            </h2>
            <p className="mt-6 text-slate-500 max-w-2xl mx-auto">
              Our trusted media partners covering ETES 2026
            </p>
          </motion.div>

          {/* Partner Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
    {partners.map((partner, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.15,
        }}
        viewport={{ once: true }}
        whileHover={{ y: -6, scale: 1.04 }}
        className="flex flex-col items-center justify-center text-center"
      >
        {/* Logo */}
        <img
          src={partner.logo}
          alt={partner.name}
          className="max-w-[220px] max-h-[120px] object-contain transition-all duration-300"
          draggable={false}
        />

        {/* Name */}
        <h3 className="mt-6 text-l font-bold text-slate-800">
          {partner.name}
        </h3>

        {/* Role */}
        <p className="mt-2 text-sm text-amber-600 font-medium tracking-wide uppercase">
          {partner.role}
        </p>
      </motion.div>
    ))}
  </div>

          {/* Bottom Line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-14 flex items-center justify-center gap-4"
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-amber-300"></span>
            <span className="text-xs text-amber-400 font-medium tracking-widest uppercase">Media Coverage</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-amber-300"></span>
          </motion.div>
        </div>
      </section>
    );
  }