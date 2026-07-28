import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    company: "ABB India",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "ETES provided an excellent platform to connect with industry leaders and generate quality business opportunities.",
  },
  {
    name: "Amit Verma",
    company: "Schneider Electric",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    review:
      "The conference sessions and exhibition were world-class. We made valuable partnerships during the event.",
  },
  {
    name: "Neha Gupta",
    company: "Siemens",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "One of India's best Electrical & Energy exhibitions. Looking forward to ETES 2026.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-center"
        >
          <span className="inline-block border border-[#F3C548]/30 bg-[#F3C548]/10 text-[#B8860B] px-5 py-2 rounded-full text-sm font-semibold tracking-widest">
            TESTIMONIALS
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6">
            What Industry Leaders Say
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Hear from exhibitors, delegates and partners who experienced ETES.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity:0, y:40 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:.5, delay:index*.2 }}
              whileHover={{ y:-10 }}
              className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >

              <div className="flex gap-1 mb-5">
                {[1,2,3,4,5].map((star)=>(
                  <Star
                    key={star}
                    size={18}
                    className="fill-[#F3C548] text-[#F3C548]"
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-8 italic">
                "{item.review}"
              </p>

              <div className="flex items-center gap-4 mt-8">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full border-2 border-[#F3C548] object-cover"
                />

                <div>
                  <h4 className="text-gray-900 font-bold text-lg">
                    {item.name}
                  </h4>

                  <p className="text-[#B8860B] text-sm font-medium">
                    {item.company}
                  </p>
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}