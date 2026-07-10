import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is ETES 2026?",
    answer:
      "ETES 2026 (Emerging Technologies on Electrical System) is a premier conference and mini expo that brings together industry experts, manufacturers, utilities, consultants, policymakers and technology providers from the electrical and power sector.",
  },
  {
    question: "Who can attend ETES 2026?",
    answer:
      "The conference is open to manufacturers, EPC companies, consultants, government organizations, utilities, startups, students and professionals working in the electrical and energy industry.",
  },
  {
    question: "How can I register as a delegate?",
    answer:
      "You can register through the Register page on our website. Fill in the required details and complete the registration process.",
  },
  {
    question: "What sponsorship opportunities are available?",
    answer:
      "ETES 2026 offers Platinum, Gold, Silver Sponsorships and Exhibition Stall opportunities with exclusive branding and networking benefits.",
  },
  {
    question: "Can I submit a technical paper?",
    answer:
      "Yes. Organizations and professionals can submit technical papers as per the conference guidelines.",
  },
  {
    question: "Will delegates receive a certificate?",
    answer:
      "Yes, all eligible delegates attending the conference will receive a participation certificate.",
  },
  {
    question: "Where will ETES 2026 be आयोजित?",
    answer:
      "ETES 2026 will be held at SCOPE Convention Centre, New Delhi.",
  },
  {
    question: "How can I contact the organizing team?",
    answer:
      "You can contact us through the Contact page or email us for sponsorship, registration or any event-related queries.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-white pt-36 pb-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            Frequently Asked{" "}
            <span className="text-yellow-500">Questions</span>
          </motion.h1>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Find answers to the most commonly asked questions about ETES 2026,
            registration, sponsorship and participation.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5 rounded-2xl bg-white shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`transition-transform duration-300 text-gray-400 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-gray-600 leading-8 border-t border-gray-100">
                  <p className="pt-4">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl bg-white border border-gray-200 shadow-sm p-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Still Have Questions?
            </h2>

            <p className="text-gray-600 mt-4">
              Our team is here to help you with registration, sponsorship and
              event-related queries.
            </p>

            <a
              href="/contact"
              className="inline-block mt-8 px-8 py-3 rounded-full bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition shadow-md hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}