import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  HelpCircle,
} from "lucide-react";

export default function Contactpage() {
  return (
    <main className="pt-28 min-h-screen bg-[#050914] text-white font-['Jost',sans-serif]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Jost:wght@300;400;500;600&display=swap');
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        {/* ================= Contact Section ================= */}

        <section className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Content */}

          <div>

            <span className="inline-flex items-center gap-3 text-[#f3d488] uppercase tracking-[5px] text-sm mb-6 before:content-[''] before:w-9 before:h-px before:bg-[#c9962f]">
              Contact Us
            </span>

            <h1 className="font-['Playfair_Display',serif] font-extrabold text-4xl md:text-3  xl leading-tight text-[#e8b84b] [text-shadow:0_0_40px_rgba(232,184,75,0.25)]">
              Contact ETES Event Team
            </h1>

            <p className="mt-6 text-gray-400 text-lg leading-8 max-w-lg">
              Get in touch with us for inquiries regarding ETES 2026,
              registration, sponsorship opportunities, media partnerships,
              exhibition bookings or any other questions. Our team will get
              back to you as soon as possible.
            </p>

            <div className="mt-12 space-y-8">

              <div className="border-l-2 border-[#c9962f] pl-5 py-1">
                <div className="flex items-center gap-2 text-[#f3d488]">
                  <Phone size={16} />
                  <h3 className="font-['Playfair_Display',serif] text-xl font-bold">
                    Support
                  </h3>
                </div>

                <p className="mt-3 text-gray-300">
                  +91 9910228914
                </p>
              </div>

              <div className="border-l-2 border-[#c9962f] pl-5 py-1">
                <div className="flex items-center gap-2 text-[#f3d488]">
                  <Mail size={16} />
                  <h3 className="font-['Playfair_Display',serif] text-xl font-bold">
                    Inquiry
                  </h3>
                </div>

                <p className="mt-3 font-semibold">
                  Neha Chauhan
                </p>

                <p className="text-gray-400">
                  Head of Marketing &amp; ETES Head
                </p>

                <p className="mt-2 text-gray-300">
                  neha@electricalmirror.net
                </p>

                <p className="text-gray-300">
                  +91 7428 693 331
                </p>
              </div>

              <div className="border-l-2 border-[#c9962f] pl-5 py-1">
                <div className="flex items-center gap-2 text-[#f3d488]">
                  <Mail size={16} />
                  <h3 className="font-['Playfair_Display',serif] text-xl font-bold">
                    For Stall Booking &amp; Sponsorship
                  </h3>
                </div>

                <p className="mt-3 font-semibold">
                  Hemant
                </p>

                <p className="text-gray-400">
                  Manager – Sales &amp; Marketing
                </p>

                <p className="mt-2 text-gray-300">
                  hemant@electricalmirror.net
                </p>

                <p className="text-gray-300">
                  +91 9999395282
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="bg-white/[0.03] border border-[#e8b84b]/20 rounded-3xl p-8 shadow-2xl">

            <h2 className="font-['Playfair_Display',serif] text-3xl font-bold mb-8 text-[#f3d488]">
              Send us a Message
            </h2>

            <form className="space-y-6">

              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Enter your first name
                </label>

                <input
                  type="text"
                  placeholder="Your first name goes here"
                  className="w-full rounded-xl bg-[#0a1020] border border-[#e8b84b]/15 px-5 py-4 outline-none focus:border-[#e8b84b] transition placeholder:text-gray-600"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Provide your email address
                </label>

                <input
                  type="email"
                  placeholder="Your email address here"
                  className="w-full rounded-xl bg-[#0a1020] border border-[#e8b84b]/15 px-5 py-4 outline-none focus:border-[#e8b84b] transition placeholder:text-gray-600"
                />
              </div>

             


              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Your Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message here..."
                  className="w-full rounded-xl bg-[#0a1020] border border-[#e8b84b]/15 px-5 py-4 outline-none focus:border-[#e8b84b] transition resize-none placeholder:text-gray-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-[#c9962f] to-[#e8b84b] text-[#1a1305] font-bold uppercase tracking-wider text-sm hover:brightness-110 transition"
              >
                Submit Your Request <Send size={16} />
              </button>

            </form>

          </div>

        </section>

        {/* ================= Location ================= */}

        <section className="grid lg:grid-cols-2 gap-16 mt-24 items-center border-t border-[#e8b84b]/20 pt-24">

          <div>

            <span className="inline-flex items-center gap-3 text-[#f3d488] uppercase tracking-[5px] text-sm mb-6 before:content-[''] before:w-9 before:h-px before:bg-[#c9962f]">
              Event Location
            </span>

            <h2 className="font-['Playfair_Display',serif] text-4xl font-bold text-[#f3d488]">
              Location Details
            </h2>

            <p className="mt-6 text-gray-400 leading-8 max-w-md">
              Visit us at the ETES 2026 venue and experience India's
              premier Electrical &amp; Energy Exhibition. We look forward
              to welcoming exhibitors, delegates, sponsors and industry
              leaders from across the country.
            </p>

            <div className="mt-10 space-y-7">

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-[#c9962f] flex items-center justify-center text-[#e8b84b] shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#f3d488]">
                    Venue
                  </h3>
                  <p className="text-gray-300 mt-1">
                    Bharat Mandapam (Pragati Maidan)
                  </p>
                  <p className="text-gray-300">
                    New Delhi - 110001
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-[#c9962f] flex items-center justify-center text-[#e8b84b] shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#f3d488]">
                    Event Timing
                  </h3>
                  <p className="text-gray-300 mt-1">
                    9:00 AM – 5:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-[#c9962f] flex items-center justify-center text-[#e8b84b] shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#f3d488]">
                    Email
                  </h3>
                  <p className="text-gray-300 mt-1">
                    info@etesevent.com
                  </p>
                </div>
              </div>

            </div>

          </div>

          <div className="overflow-hidden rounded-3xl border border-[#e8b84b]/20 shadow-xl">

            <iframe
              title="ETES Location"
              src="https://maps.google.com/maps?q=Bharat%20Mandapam%20New%20Delhi&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              className="border-0"
            ></iframe>

          </div>

        </section>

        {/* ================= FAQ ================= */}

        <section className="mt-24 border-t border-[#e8b84b]/20 pt-24">

          <div className="text-center mb-14">

            <span className="inline-flex items-center gap-3 text-[#f3d488] uppercase tracking-[5px] text-sm mb-5 before:content-[''] before:w-9 before:h-px before:bg-[#c9962f] after:content-[''] after:w-9 after:h-px after:bg-[#c9962f]">
              Need Help?
            </span>

            <h2 className="font-['Playfair_Display',serif] text-4xl font-bold text-[#f3d488]">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              {
                q: "How can I register?",
                a: "Visit the Registration page and complete the online registration form to receive your confirmation.",
              },
              {
                q: "How can I become an exhibitor?",
                a: "Contact our sales team for booth booking and sponsorship opportunities.",
              },
              {
                q: "Is parking available?",
                a: "Yes. Paid parking facilities are available at the venue for exhibitors and visitors.",
              },
              {
                q: "Need immediate assistance?",
                a: "Call our support team or send us an email. We usually respond within 24 hours.",
              },
            ].map((item, i) => (
            <div
  key={i}
  className="group relative overflow-hidden bg-white/[0.03] border border-[#e8b84b]/20 rounded-2xl p-6 hover:border-[#e8b84b] transition-all duration-500"
>
  {/* Animated Background */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#c9962f] to-[#e8b84b] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>

  {/* Content */}
  <div className="relative z-10">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-8 h-8 rounded-full border border-[#c9962f] flex items-center justify-center text-[#e8b84b] group-hover:bg-white group-hover:text-[#c9962f] group-hover:border-white transition-all duration-300 shrink-0">
        <HelpCircle size={14} />
      </div>

      <h3 className="font-semibold text-xl text-white group-hover:text-[#111] transition-colors duration-300">
        {item.q}
      </h3>
    </div>

    <p className="text-gray-400 pl-11 group-hover:text-[#222] transition-colors duration-300">
      {item.a}
    </p>
  </div>
</div>
            ))}

          </div>

        </section>

      </div>
    </main>
  );
}
