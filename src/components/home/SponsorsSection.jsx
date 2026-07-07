import React from "react";
import { motion } from "framer-motion";

export default function SponsorsSection() {
  const sponsors = [
    {
      name: "REC",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=210,fit=crop/m6LjPL4vo3tDyBRd/download-17-mnlW5l3WGGTVD4J1.png",
    },
    {
      name: "Adani Solar",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=230,fit=crop/m6LjPL4vo3tDyBRd/download-27-A1aPrN4jJgsPo5Wk.png",
    },
    {
      name: "Megger",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=172,fit=crop/m6LjPL4vo3tDyBRd/download-19-ALpebG9q0RSoZyzA.png",
    },
    {
      name: "Servokon",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=132,fit=crop/m6LjPL4vo3tDyBRd/download-21-mxB489nNOvU0Xbej.png",
    },
    {
      name: "KP Group",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/m6LjPL4vo3tDyBRd/download-28-mxB489JLZQSQ14MV.png",
    },
    {
      name: "EMR",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=111,fit=crop/m6LjPL4vo3tDyBRd/images-YZ9jWZM5MjuB44gW.png",
    },
    {
      name: "Sonel",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=134,fit=crop/m6LjPL4vo3tDyBRd/download-24-YleW50wLZLuWQ9Pm.png",
    },
    {
      name: "PTss",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=173,fit=crop/m6LjPL4vo3tDyBRd/download-20-mp8W7NEMyzFPDnKq.png",
    },
    {
      name: "Nu-Cork",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=158,fit=crop/m6LjPL4vo3tDyBRd/download-23-YKb3NxRVDZua2nK5.png",
    },
    {
      name: "Tata Power",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=173,fit=crop/m6LjPL4vo3tDyBRd/download-26-m6LZr1B3bbFe06nj.png",
    },
    {
      name: "PFC",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=390,fit=crop/m6LjPL4vo3tDyBRd/download-6-mjE75DB0XQU15EVl.jpeg",
    },
    {
      name: "Kryfs",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=162,fit=crop/m6LjPL4vo3tDyBRd/download-32-AMq1pwrO2pUJrj2M.png",
    },
    {
      name: "Inter-Tech",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=73,fit=crop/m6LjPL4vo3tDyBRd/inter-tech-logo-A1a58PREX5Ibvj44.jpg",
    },
    {
      name: "Mahati",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=173,fit=crop/m6LjPL4vo3tDyBRd/download-33-YZ98XN4xJVf6E4eO.png",
    },
    {
      name: "TCI",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=203,fit=crop/m6LjPL4vo3tDyBRd/download-3-dOqa8yPybyf07ZVQ.png",
    },
    {
      name: "Shootfire",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=173,fit=crop/m6LjPL4vo3tDyBRd/download-34-m5KMrD7V48UObLzW.png",
    },
    {
      name: "Jinko Solar",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=125,fit=crop/m6LjPL4vo3tDyBRd/download-18-mk3v5MrgR6FEG6JG.png",
    },
    {
      name: "MTek Pro",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=191,fit=crop/m6LjPL4vo3tDyBRd/download-22-AMq1pze55QI47zwk.png",
    },
    {
      name: "Gloster",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=191,fit=crop/m6LjPL4vo3tDyBRd/download-22-AMq1pze55QI47zwk.png",
    },
    {
      name: "Proterial",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=52,fit=crop/m6LjPL4vo3tDyBRd/download-31-dJoZNO7Ea2TWZB4J.png",
    },
    {
      name: "ERDA",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=359,fit=crop/m6LjPL4vo3tDyBRd/download-29-YNqBNoEnK5c0VnEe.png",
    },
    {
      name: "OM Technical",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=90,fit=crop/m6LjPL4vo3tDyBRd/images-8-mP4ONLaxGKIwoO2Z.png",
    },
    {
      name: "Grew",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=117,fit=crop/m6LjPL4vo3tDyBRd/download-7-A0xlrKLB39TJMj5A.jpeg",
    },
  ];

  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <h2 className="text-4xl font-extrabold text-white text-center tracking-tight">
              Our Sponsors/Supporters in Past Conferences
            </h2>
            {/* Golden Underline */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-full shadow-lg shadow-yellow-500/30"></div>
          </div>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {sponsors.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.03,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.5)",
              }}
              className="group bg-white rounded-2xl h-32 flex items-center justify-center p-5 shadow-lg border-2 border-transparent hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-500/20 transition-all duration-300 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="max-h-16 w-full object-contain transition-all duration-300 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}