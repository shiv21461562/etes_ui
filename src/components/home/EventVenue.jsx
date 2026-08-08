"use client";

import { MapPin, Calendar, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import venueImg from "../../assets/vanue/bg.png";

export default function Venue() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-flex px-4 py-2 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-widest">
            Event Venue
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
            Join Us At The Venue
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600">
            Experience world-class networking, exhibitions and sustainability
            discussions at India's premier event destination.
          </p>
        </motion.div>

        {/* Venue Card */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            overflow-hidden
            rounded-[32px]
            border
            border-slate-200
            bg-white
            hover:border-orange-400
            hover:shadow-2xl
            transition-all
            duration-500
          "
        >
          <div className="grid lg:grid-cols-2">
            {/* Image */}
          {/* Image */}
<div className="relative h-[300px] lg:h-[320px] overflow-hidden">
<img
  src={venueImg}
  alt="Scope Complex"
  className="w-full h-full object-cover transition duration-700 hover:scale-110"
/>

  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

  <div className="absolute bottom-6 left-6 z-10">
    <span className="inline-block bg-orange-500 px-4 py-2 rounded-full text-sm font-semibold text-white">
      ETES INDIA 2026
    </span>

    <h3 className="mt-3 text-4xl font-bold text-[#D4AF37] drop-shadow-lg">
      Scope Complex
    </h3>

    <p className="text-lg text-white font-medium">
      New Delhi
    </p>
  </div>
</div>

            {/* Content */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0B3A63]">
                Scope Complex, New Delhi
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                One of India's leading conference and exhibition venues,
                bringing together global leaders, innovators and sustainability
                experts under one roof.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-xl bg-orange-100 flex items-center justify-center">
                    <MapPin size={18} className="text-orange-500" />
                  </div>

                  <span className="text-slate-700">
                    SCOPE Complex, Lodhi Road, Institutional Area, Lodi Colony,
                    New Delhi, Delhi 110003
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-xl bg-orange-100 flex items-center justify-center">
                    <Calendar size={18} className="text-orange-500" />
                  </div>

                  <span className="text-slate-700">23rd SEP 2026</span>
                </div>
              </div>

           <a
  href="https://www.google.com/maps/search/?api=1&query=SCOPE+Complex,+Lodhi+Road,+Institutional+Area,+Lodi+Colony,+New+Delhi,+Delhi+110003"
  target="_blank"
  rel="noopener noreferrer"
  className="
    mt-8
    inline-flex
    items-center
    gap-2
    w-fit
    px-6
    py-3
    rounded-full
    bg-orange-500
    text-white
    font-semibold
    hover:bg-orange-600
    hover:scale-105
    transition-all
    duration-300
  "
>
  Get Directions
  <Navigation size={18} />
</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}