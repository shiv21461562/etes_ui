import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin, Ticket } from "lucide-react";
import { Link } from "react-router-dom";

export default function Countdown() {
  // Event date: September 23, 2026
  const eventDate = new Date("2026-09-23T09:00:00");

  const calculateTimeLeft = () => {
    const difference = eventDate - new Date();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="bg-[#081321] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F3C548]/30 bg-[#F3C548]/10 px-6 py-2.5 text-[#F3C548] text-sm font-semibold">
            <CalendarDays size={18} />
            COUNTDOWN TO ETES 2026
          </div>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold text-white leading-tight">
            September 23, 2026
          </h2>

          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            India's biggest Electrical & Energy Technology Exhibition is coming soon!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <MapPin size={16} className="text-[#F3C548]" />
              <span className="text-gray-300 text-sm">Scope Complex, New Delhi</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">

          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-[#F3C548]/20 bg-white/5 backdrop-blur-xl p-8 text-center shadow-xl"
            >
              <h3 className="text-5xl md:text-6xl font-bold text-[#F3C548] font-mono">
                {String(item.value).padStart(2, "0")}
              </h3>

              <p className="mt-3 uppercase tracking-[0.2em] text-gray-400 text-xs font-semibold">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .4, duration: .6 }}
          className="text-center mt-14"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-xl bg-[#F3C548] px-10 py-4 text-black font-semibold transition hover:scale-105 hover:bg-yellow-400"
            >
              <Ticket size={20} />
              Register Now
            </Link>
            
            <Link
              to="/Sponsorship"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 text-white font-semibold transition hover:bg-white/10 hover:scale-105"
            >
              Book Exhibition Stall
            </Link>
          </div>

          <p className="mt-6 text-gray-500 text-sm">
            Limited spots available. Register before it's too late!
          </p>
        </motion.div>

      </div>
    </section>
  );
}