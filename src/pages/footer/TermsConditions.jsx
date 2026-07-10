import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function TermsConditions() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
     <section className="bg-white text-black pt-36 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-5xl font-bold"
          >
            Terms & <span className="text-yellow-500">Conditions</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 text-gray-800 max-w-2xl mx-auto"
          >
            Please read these Terms & Conditions carefully before using the
            ETES 2026 website or registering for the conference.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-10"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>

              <p className="text-gray-600 leading-8">
                By accessing this website or registering for ETES 2026, you
                agree to comply with these Terms & Conditions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Registration
              </h2>

              <p className="text-gray-600 leading-8">
                All registration information must be accurate and complete.
                ETES reserves the right to reject or cancel any registration
                containing false or misleading information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Payments
              </h2>

              <p className="text-gray-600 leading-8">
                Registration fees, sponsorship charges and exhibition bookings
                must be paid according to the payment terms mentioned during
                registration.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Intellectual Property
              </h2>

              <p className="text-gray-600 leading-8">
                All logos, trademarks, event materials and website content are
                the property of ETES 2026 and may not be copied or reproduced
                without written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Event Changes
              </h2>

              <p className="text-gray-600 leading-8">
                ETES reserves the right to modify the event schedule, speakers,
                venue or program whenever necessary.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Limitation of Liability
              </h2>

              <p className="text-gray-600 leading-8">
                ETES 2026 shall not be responsible for any indirect or
                consequential loss arising from participation in the conference
                or use of this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Contact Information
              </h2>

              <div className="rounded-2xl bg-yellow-50 border border-yellow-200 p-6">
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

            <div className="pt-6 border-t text-sm text-gray-500">
              Last Updated: July 2026
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}