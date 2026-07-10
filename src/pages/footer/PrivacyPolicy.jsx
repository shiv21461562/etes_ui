import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function PrivacyPolicy() {
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
            Privacy <span className="text-yellow-500">Policy</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 text-gray-600 max-w-2xl mx-auto"
          >
            Your privacy is important to us. This Privacy Policy explains how
            ETES 2026 collects, uses and protects your information.
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
            {/* 1 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Information We Collect
              </h2>

              <p className="text-gray-600 leading-8">
                We may collect personal information including your name, email
                address, phone number, organization, designation and other
                registration details when you register for ETES 2026, contact
                us or subscribe to our updates.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. How We Use Your Information
              </h2>

              <ul className="list-disc pl-6 text-gray-600 space-y-3">
                <li>To process event registrations.</li>
                <li>To provide conference updates and announcements.</li>
                <li>To improve our website and event experience.</li>
                <li>To respond to your enquiries and support requests.</li>
                <li>To send event-related communications.</li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Data Protection
              </h2>

              <p className="text-gray-600 leading-8">
                We implement appropriate security measures to protect your
                personal information from unauthorized access, misuse,
                disclosure or alteration.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Cookies
              </h2>

              <p className="text-gray-600 leading-8">
                Our website may use cookies to improve user experience, analyze
                website traffic and enhance website functionality.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Third-Party Services
              </h2>

              <p className="text-gray-600 leading-8">
                We may use trusted third-party services for payment processing,
                analytics and communication. These services maintain their own
                privacy practices.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Your Rights
              </h2>

              <p className="text-gray-600 leading-8">
                You may request access, correction or deletion of your personal
                information by contacting our support team.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Contact Us
              </h2>

              <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
                <p className="text-gray-800 font-semibold">
                  ETES 2026
                </p>

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