import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Mic,
  Network,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

// Assuming these imports are correct for your project setup
import service1 from "../../assets/services/services1.jpg";
import service2 from "../../assets/services/services2.jpg";
import service3 from "../../assets/services/services3.jpg";
import service4 from "../../assets/services/services4.jpg";
import service5 from "../../assets/services/services5.jpg";
import service6 from "../../assets/services/services6.jpg";

const services = [
  {
    image: service1,
    title: "Meet Industry Leaders",
    icon: Users,
    description:
      "Connect with renowned experts, innovators, and decision-makers driving the future of the electrical and energy industry.",
  },
  {
    image: service2,
    title: "Showcase Innovations",
    icon: Sparkles,
    description:
      "Present your latest technologies, products, and innovative solutions to a focused audience of industry professionals.",
  },
  {
    image: service3,
    title: "Panel Discussion & Networking",
    icon: Network,
    description:
      "Participate in engaging panel discussions and networking sessions to exchange ideas and build powerful partnerships.",
  },
  {
    image: service4,
    title: "Stall Booking",
    icon: Zap,
    description:
      "Showcase your brand with premium exhibition stalls. Generate quality business leads and grow your business.",
  },
  {
    image: service5,
    title: "Speaker Slot",
    icon: Mic,
    description:
      "Grab a 15–20 minute speaker slot to share your expertise, inspire professionals, and build your brand.",
  },
  {
    image: service6,
    title: "Award Ceremony",
    icon: Award,
    description:
      "Celebrate excellence by recognizing outstanding achievements, innovation, and leadership in the electrical sector.",
  },
];

export default function Services() {
  return (
    <section className="py-28 px-5 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
  

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Tagline */}
          <span className="inline-block px-5 py-2 mb-5 text-sm font-semibold tracking-widest uppercase text-[#C89A2B] bg-[#FFF8E8] border border-[#E6C76A] rounded-full">
            What We Offer
          </span>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-black">Our </span>
            <span className="text-transparent bg-clip-text font-extrabold bg-gradient-to-b from-[#FFF1A6] via-[#E7C65C] to-[#B67A12]">
              Services
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore our comprehensive services for the ETES event, designed to
            enhance your experience and engagement.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                type: "spring",
                stiffness: 120,
                damping: 20,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/60 transition-all duration-500"
            >
              {/* Inner Card Border */}
              <div className="relative bg-white rounded-3xl overflow-hidden">
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/3] bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  {/* Icon Badge - Golden */}
                  <div className="absolute bottom-4 left-4 p-3 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg border border-amber-200 group-hover:border-amber-400 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-amber-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6 pt-5 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors duration-300 flex items-center justify-between">
                    {item.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-amber-500" />
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>

                  {/* Decorative Line - Golden */}
                  <div className="w-12 h-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-24 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}