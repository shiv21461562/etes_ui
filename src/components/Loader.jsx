import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ loading }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!loading) return;

    let value = 0;

    const timer = setInterval(() => {
      value += 2;

      if (value > 100) value = 100;

      setProgress(value);

      if (value >= 100) {
        clearInterval(timer);
      }
    }, 40);

    return () => clearInterval(timer);
  }, [loading]);

  // Circle calculations
  const size = 280; 
  const center = size / 2;
  const radius = 120; 
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[99999] bg-[#0A0B14] flex flex-col items-center justify-center"
        >
          <div className="relative flex items-center justify-center">
            {/* SVG Circle with Progress */}
            <svg 
              width={size} 
              height={size} 
              viewBox={`0 0 ${size} ${size}`}
              className="-rotate-90"
            >
              {/* Background Circle */}
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke="#ffffff"
                strokeOpacity="0.05"
                strokeWidth="6"
              />
              
              {/* Progress Circle */}
              <motion.circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke="url(#goldenGradient)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              
              {/* Gradient Definition */}
              <defs>
                <linearGradient id="goldenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F3C548" />
                  <stop offset="50%" stopColor="#FFD700" />
                  <stop offset="100%" stopColor="#F3C548" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center Percentage */}
            <div className="absolute flex flex-col items-center">
              <motion.h1
                key={progress}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-6xl font-bold text-yellow-400"
                style={{
                  textShadow: "0 0 40px rgba(255,215,0,0.2)"
                }}
              >
                {progress}%
              </motion.h1>
            </div>
          </div>

          {/* Loading Text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-[#FFD700] text-sm font-semibold tracking-[6px] uppercase"
          >
            {progress === 100 ? "Ready!" : "Loading..."}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}