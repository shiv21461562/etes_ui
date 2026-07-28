import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleHelp, Plus } from "lucide-react";

const faqs = [
  {
    question: "Who can attend ETES 2026?",
    answer:
      "ETES 2026 welcomes manufacturers, EPC companies, consultants, engineers, distributors, investors, government officials, startups, students, exhibitors and industry professionals.",
  },
  {
    question: "How do I register for ETES 2026?",
    answer:
      "Click on the Register Now button, select your registration category (Visitor, Delegate or Speaker), complete the form and submit your registration.",
  },
  {
    question: "How can I book an exhibition stall?",
    answer:
      "Visit the Exhibitor section or contact our sales team to reserve your preferred stall before all spaces are booked.",
  },
  {
    question: "Will I receive an Event Pass?",
    answer:
      "Yes. After successful registration and payment (if applicable), your digital Event Pass will be generated automatically.",
  },
  {
    question: "Is parking available at the venue?",
    answer:
      "Yes. Dedicated parking will be available for exhibitors, delegates and visitors.",
  },
  {
    question: "Can I become a sponsor?",
    answer:
      "Absolutely. ETES offers multiple sponsorship opportunities including Title Sponsor, Gold Sponsor, Silver Sponsor, Media Partner and more.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span className="inline-block px-5 py-2 rounded-full bg-[#F3C548]/10 border border-[#F3C548]/30 text-[#B8860B] dark:text-[#F3C548] font-semibold text-sm uppercase tracking-widest">
            FAQ
          </span>

          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mt-6">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-5 text-lg max-w-2xl mx-auto">
            Find answers to the most common questions about ETES 2026.
          </p>

        </motion.div>

        <div className="space-y-5">

          {faqs.map((item, index) => {

            const active = open === index;

            return (

              <motion.div
                key={index}
                layout
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: .25,
                }}
                className={`rounded-2xl border overflow-hidden transition-all duration-300
                ${
                  active
                    ? "border-[#F3C548] shadow-xl dark:shadow-[#F3C548]/20"
                    : "border-gray-200 dark:border-gray-700 hover:border-[#F3C548] hover:bg-[#FFFBEA] dark:hover:bg-[#1a1a1a] hover:shadow-lg dark:hover:shadow-[#F3C548]/10"
                }`}
              >

                <button
                  onClick={() =>
                    setOpen(active ? null : index)
                  }
                  className="w-full flex items-center justify-between px-7 py-6"
                >

                  <div className="flex items-center gap-4">

                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300
                      ${
                        active
                          ? "bg-[#F3C548] text-black"
                          : "bg-gray-100 dark:bg-gray-800 text-[#B8860B] dark:text-[#F3C548]"
                      }`}
                    >

                      <CircleHelp size={22} />

                    </div>

                    <h3
                      className={`text-lg font-semibold transition-colors duration-300 text-left
                      ${
                        active
                          ? "text-[#B8860B] dark:text-[#F3C548]"
                          : "text-gray-900 dark:text-gray-100"
                      }`}
                    >
                      {item.question}
                    </h3>

                  </div>

                  <motion.div
                    animate={{
                      rotate: active ? 45 : 0,
                    }}
                    transition={{
                      duration: .3,
                    }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
                    ${
                      active
                        ? "bg-[#F3C548] text-black"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    }`}
                  >

                    <Plus size={22} />

                  </motion.div>

                </button>

                <AnimatePresence>

                  {active && (

                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: .35,
                      }}
                    >

                      <div className="px-7 pb-7 text-gray-600 dark:text-gray-300 leading-8">
                        {item.answer}
                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>

            );
          })}

        </div>

      </div>
    </section>
  );
}