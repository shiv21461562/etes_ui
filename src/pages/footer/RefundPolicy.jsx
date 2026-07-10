import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-white pt-36 pb-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            Refund <span className="text-yellow-500">Policy</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 text-gray-600 max-w-2xl mx-auto"
          >
            Please read our refund and cancellation policy carefully before
            registering for ETES 2026.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-10"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Registration Fees
              </h2>

              <p className="text-gray-600 leading-8">
                Registration fees paid for ETES 2026 are generally
                non-refundable once the registration has been confirmed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Cancellation Requests
              </h2>

              <p className="text-gray-600 leading-8">
                Any cancellation request must be submitted in writing to the
                ETES organizing committee. Approval of refunds, if applicable,
                will be at the sole discretion of the organizers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Event Cancellation
              </h2>

              <p className="text-gray-600 leading-8">
                If ETES 2026 is cancelled due to unforeseen circumstances,
                registered participants will be informed regarding available
                refund or transfer options.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Transfer of Registration
              </h2>

              <p className="text-gray-600 leading-8">
                In certain cases, registrations may be transferred to another
                participant with prior approval from the organizing committee.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Processing Time
              </h2>

              <p className="text-gray-600 leading-8">
                Approved refunds, if any, will be processed through the original
                payment method within the applicable processing period.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Contact Us
              </h2>

              <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
                <p className="font-semibold text-gray-800">ETES 2026</p>

                <p className="mt-2 text-gray-600">
                  Email: info@etesevent.com
                </p>

                <p className="text-gray-600">
                  Website: www.etesevent.com
                </p>

                <p className="text-gray-600">
                  Phone: +91-XXXXXXXXXX
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 text-sm text-gray-400">
              Last Updated: July 2026
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}