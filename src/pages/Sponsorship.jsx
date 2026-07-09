import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  Crown,
  Gem,
  Medal,
  Package,
  Store,
  Tag,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
{/* PACKAGES */}
import platinumLogo from '../assets/SponsorshipLogo/platinum.png'; // adjust path as needed
import goldLogo from '../assets/SponsorshipLogo/gold.png';
import silverLogo from '../assets/SponsorshipLogo/silver.png';


import exhibitionLogo from '../assets/SponsorshipLogo/exhibition.png';
import kitLogo from '../assets/SponsorshipLogo/kit.png';
import supportedLogo from '../assets/SponsorshipLogo/logo.png';

import { useState } from "react";
import SponsorFormModal from "../components/SponsorFormModal";

// ---------- DATA (pulled from the sponsorship brochure) ----------

const packages = [
  {
    title: "Platinum Sponsor",
    icon: Crown,
    price: "₹6,00,000/- + GST",
    altPrice: "or 7000 $",
    color: "from-yellow-300 to-yellow-600",
    border: "border-yellow-500",
    features: [
      "Logo featured as Platinum Sponsor",
      "Branding on all communication elements & displays",
      "Exhibition stall of 2x3 square metres",
      "4 to 5 minute slot for video presentation",
      "Submit your technical papers",
      "4 to 7 free delegate registrations",
      "Branding promotion on our weekly e-newsletter",
      "Promotion on LinkedIn, Facebook, Instagram & Twitter",
    ],
  },
  {
    title: "Gold Sponsor",
    icon: Gem,
    price: "₹5,00,000/- + GST",
    altPrice: "or 6000 $",
    color: "from-amber-300 to-yellow-500",
    border: "border-amber-400",
    features: [
      "Logo displayed as Gold Sponsor",
      "Branding on all communication elements & displays",
      "4 minute slot for video presentation",
      "Submit your technical papers",
      "Branding promotion on our weekly e-newsletter",
      "4 to 6 free delegate registrations",
      "Promotion on LinkedIn, Facebook, Instagram & Twitter",
    ],
  },
  {
    title: "Silver Sponsor",
    icon: Medal,
    price: "₹2,50,000/- + GST",
    altPrice: "or 3000 $",
    color: "from-gray-300 to-gray-500",
    border: "border-gray-400",
    features: [
      "Logo displayed as Silver Sponsor",
      "Branding on all communication elements & displays",
      "5-8 minute slot for video presentation (Briefing)",
      "4 free delegate registrations",
      "Submit your technical papers",
      "Branding promotion on our weekly e-newsletter",
      "Promotion on LinkedIn, Facebook, Instagram & Twitter",
    ],
  },
];

const otherPackages = [
  {
    title: "Kit Sponsor",
    icon: Package,
    price: "₹2,00,000/- + GST",
    altPrice: "or 2500 $",
    desc: "Brand your delegate kits and promotional materials.",
    features: [
      "Logo displayed as Kit Sponsor",
      "4 free delegate registrations",
      "Branding promotion on our weekly e-newsletter",
      "Promotion on LinkedIn, Facebook, Instagram & Twitter",
    ],
  },
  {
    title: "Exhibition Stall",
    icon: Store,
    price: "₹80,000/- + GST",
    altPrice: null,
    desc: "Present your latest technologies on the exhibition floor.",
    features: [
      "Logo displayed as Stall Exhibitor",
      "Exhibition stall of 2x3 square metres",
      "4 free delegate registrations",
      "Branding promotion on our weekly e-newsletter",
      "Promotion on LinkedIn, Facebook, Instagram & Twitter",
    ],
  },
  {
    title: "Logo Sponsor",
    icon: Tag,
    price: "₹60,000/- + GST",
    altPrice: null,
    desc: "Display your logo across event branding and website.",
    features: [
      "Logo displayed as Logo Sponsor",
      "3 free delegate registrations",
      "Branding promotion on our weekly e-newsletter",
      "Promotion on LinkedIn, Facebook, Instagram & Twitter",
    ],
  },
];

const delegateBenefits = [
  "Access to all keynote sessions, panel discussions, and presentations",
  "Opportunity to network with industry leaders, innovators, and peers",
  "Entry to exhibition zones showcasing cutting-edge technologies",
  "Delegate kit with event materials and exclusive merchandise",
  "Participation certificate recognizing your presence at ETES 2026",
  "Access to refreshments and networking lunch sessions",
  "Inclusion in the delegate directory for future collaboration",
  "Updates and insights shared through our event e-newsletter",
];

// ---------- SHARED MOTION VARIANTS ----------

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function Sponsorship() {

  const [openModal, setOpenModal] = useState(false);
const [selectedPackage, setSelectedPackage] = useState("");
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="relative overflow-hidden pt-40 pb-28"
        style={{
          backgroundImage:
            "linear-gradient(rgba(7,7,7,.82),rgba(7,7,7,.92)),url('https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background Blur */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#d4af3720,transparent_60%)]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center px-5 py-2 rounded-full bg-yellow-500/10 border border-yellow-500 text-yellow-400 tracking-[3px] uppercase text-sm">
                ETES 2026
              </span>

              <h1 className="mt-8 text-6xl lg:text-6xl font-black leading-tight">
                <span className="text-white">Become an</span>

                <br />

                <span className="text-yellow-400">Official Sponsor</span>
              </h1>

              <p className="mt-8 text-lg text-gray-300 leading-8 max-w-xl">
                Connect with industry leaders, showcase your products, generate
                high-quality business leads, and maximize your brand visibility
                at India's largest Energy & Electrical Technology Exhibition.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">
                <button className="px-8 py-4 rounded-full bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition">
                  Become Sponsor
                </button>

                <button className="px-8 py-4 rounded-full border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black transition">
                  Download Brochure
                </button>
              </div>

              <div className="flex gap-10 mt-14">
                <div>
                  <h3 className="text-yellow-400 text-4xl font-bold">5000+</h3>

                  <p className="text-gray-400">Visitors</p>
                </div>

                <div>
                  <h3 className="text-yellow-400 text-4xl font-bold">120+</h3>

                  <p className="text-gray-400">Exhibitors</p>
                </div>

                <div>
                  <h3 className="text-yellow-400 text-4xl font-bold">40+</h3>

                  <p className="text-gray-400">Speakers</p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200"
                className="rounded-3xl object-cover shadow-2xl"
              />

              {/* Floating Card */}

              <div className="absolute -bottom-8 -left-8 bg-[#111111]/90 backdrop-blur-xl rounded-3xl p-6 border border-yellow-500">
                <p className="text-gray-400 text-sm">Platinum Sponsor</p>

                <h3 className="text-yellow-400 text-3xl font-bold mt-2">
                  ₹6 Lakh
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>




    
    {/* PACKAGES */}




<section className="bg-gray-50 py-24">
  <div className="max-w-7xl mx-auto px-6">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
      className="text-center mb-16"
    >
      <span className="text-yellow-600 uppercase tracking-[4px] text-sm font-semibold">
        Sponsorship Tiers
      </span>
      <h2 className="text-5xl font-bold text-gray-900 mt-4">
        Sponsorship Packages
      </h2>
      <p className="text-gray-600 mt-4">
        Select the package that matches your business goals.
      </p>
    </motion.div>

    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="grid lg:grid-cols-3 gap-8"
    >
      {packages.map((item, index) => {
        const Icon = item.icon;
        
        // Define logo URLs for each tier
        const tierLogos = {
          'Platinum Sponsor': platinumLogo,
          'Gold Sponsor': goldLogo,
          'Silver Sponsor': silverLogo,
        };
        
        const logoUrl = tierLogos[item.title] || platinumLogo;
        
        return (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ y: -12, transition: { duration: 0.3 } }}
            className={`group rounded-3xl border ${item.border}
              bg-white
              overflow-hidden
              transition-all
              duration-500
              hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]
              hover:border-yellow-400/50`}
          >
            <div
              className={`relative bg-white p-0 text-center overflow-hidden h-72 flex items-center justify-center`}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 140,
                  damping: 12,
                  delay: index * 0.1,
                }}
                className="w-full h-full flex items-center justify-center"
              >
                {/* Full Logo Image with white bg */}
                <img 
                  src={logoUrl} 
                  alt={item.title}
                  className="w-full h-full object-contain p-8 bg-white"
                />
              </motion.div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                {item.title}
              </h3>
              <h4 className="text-yellow-600 text-3xl font-bold text-center">
                {item.price}
              </h4>
              {item.altPrice && (
                <p className="text-gray-500 text-sm mt-1 mb-6 text-center">
                  {item.altPrice}
                </p>
              )}

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={stagger}
                className="space-y-4 mt-6"
              >
                {item.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={listItem}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle
                      className="text-yellow-500 mt-0.5 shrink-0"
                      size={18}
                    />
                    <span className="text-gray-700 text-sm leading-6">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

<button
  onClick={() => {
    setSelectedPackage(item.title);
    setOpenModal(true);
  }}
  className="mt-10 w-full rounded-full py-4 bg-yellow-500 text-white font-bold flex justify-center items-center gap-2 hover:bg-yellow-600 transition-all duration-300 shadow-lg"
>
  Book Now
</button>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  </div>
</section>





      

      {/* ================= OTHER SPONSORSHIP OPTIONS ================= */}



<section className="bg-[#0b0b0b] py-24">
  <div className="max-w-7xl mx-auto px-6">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
      className="text-center mb-16"
    >
      <span className="text-yellow-400 uppercase tracking-[4px] text-sm">
        More Ways To Sponsor
      </span>

      <h2 className="text-2xl font-bold text-white mt-4">
        More Sponsorship Options
      </h2>
    </motion.div>

    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="grid md:grid-cols-3 gap-8"
    >
      {otherPackages.map((item, index) => {
        const Icon = item.icon;
        
        // Public folder se direct path
   const optionLogos = {
  "Kit Sponsor": kitLogo,
  "Exhibition Stall": exhibitionLogo,
  "Logo Sponsor": supportedLogo,
};

const logoUrl = optionLogos[item.title];

        return (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="rounded-3xl border border-yellow-500/60 bg-[#121212] overflow-hidden hover:border-yellow-300 transition-colors duration-500"
          >
            <div className="bg-white p-0 text-center overflow-hidden h-56 flex items-center justify-center border-b border-yellow-500/30">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 140,
                  damping: 12,
                  delay: index * 0.1,
                }}
                className="w-full h-full flex items-center justify-center bg-white"
              >
           <img
    src={logoUrl}
    alt={item.title}
    className="w-full h-full object-contain p-8"
/>
              </motion.div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-yellow-400 text-center mb-2">
                {item.title}
              </h3>
              <h4 className="text-white text-2xl font-bold text-center">
                {item.price}
              </h4>

              {item.altPrice && (
                <p className="text-gray-500 text-sm mt-1 text-center">
                  {item.altPrice}
                </p>
              )}

              <p className="text-gray-400 mt-5 leading-7">{item.desc}</p>

              <ul className="mt-6 space-y-3">
                {item.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-300 text-sm leading-6"
                  >
                    <CheckCircle
                      className="text-yellow-500 mt-0.5 shrink-0"
                      size={16}
                    />
                    {f}
                  </li>
                ))}
              </ul>

<button
  onClick={() => {
    setSelectedPackage(item.title);
    setOpenModal(true);
  }}
  className="mt-10 w-full rounded-full py-4 bg-yellow-500 text-white font-bold flex justify-center items-center gap-2 hover:bg-yellow-600 transition-all duration-300 shadow-lg"
>
  Book Now
</button>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  </div>
</section>





      {/* ================= DELEGATE REGISTRATION ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-gray-200 shadow-xl"
          >
            {/* Left */}
            <div className="bg-white p-10 flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-yellow-500 flex items-center justify-center mb-5">
                <Users size={40} className="text-white" />
              </div>

              <h2 className="text-3xl font-bold text-gray-900">
                Delegate Registration
              </h2>

              <p className="mt-3 text-gray-500">Starting From</p>

              <h3 className="text-4xl font-black text-yellow-500 mt-2">
                ₹1500
              </h3>

              <button className="mt-8 px-8 py-3 rounded-full bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition">
                Register Now
              </button>
            </div>

            {/* Right */}

            <div className="bg-[#fafafa] p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900">
                What's Included
              </h3>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Full Conference Access",
                  "Technical Sessions & Keynotes",
                  "Networking Opportunities",
                  "Access to Exhibition Area",
                  "Lunch & Refreshments",
                  "Delegate Kit",
                  "Participation Certificate",
                  "B2B Meeting Opportunities",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white  hover:shadow-md transition-all duration-300"
                  >
                    <CheckCircle
                      size={18}
                      className="text-yellow-500 shrink-0"
                    />

                    <span className="text-gray-700 text-sm font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button className="mt-10 w-fit px-7 py-3 rounded-full border border-yellow-500 text-yellow-600 font-semibold hover:bg-yellow-500 hover:text-white transition">
                Book Your Seat
              </button>
            </div>
          </motion.div>
        </div>
      </section>


<SponsorFormModal
open={openModal}
onClose={()=>setOpenModal(false)}
packageName={selectedPackage}
/>

      <Footer />
    </>
  );
}
