import {
  ArrowRight,
  Calendar,
  Users,
  Building2,
  Globe,
} from "lucide-react";
import aboutImage from "../../assets/etesBG.png";

export default function About() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Background Glow - Lighter for white theme */}
   

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#F3C548]/40 bg-[#F3C548]/10 text-[#B8860B] text-sm font-semibold tracking-widest uppercase">
              About ETES 2026
            </div>

            {/* Heading */}
            <h2 className="mt-8 text-5xl lg:text-5xl font-bold leading-tight text-gray-900">
              India's Premier
              <br />
              <span className="text-[#F3C548]">
                Electrical & Energy
              </span>
              <br />
              Technology Event
            </h2>

            {/* Line */}
            <div className="mt-6 w-28 h-1 rounded-full bg-[#F3C548]"></div>

            {/* Description */}
            <p className="mt-8 text-lg leading-8 text-gray-600">
              ETES 2026 is India's leading platform connecting innovators,
              manufacturers, investors, policymakers and technology leaders
              from the electrical, energy, automation and renewable sectors.
              <br />
              <br />
              Experience next-generation technologies, business networking,
              live product launches, international conferences and unmatched
              opportunities under one roof.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-5 mt-12">
              <div className="flex items-center gap-3">
                <Calendar className="text-[#F3C548]" size={22} />
                <span className="text-gray-700 font-medium">3 Days Conference</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-[#F3C548]" size={22} />
                <span className="text-gray-700 font-medium">5000+ Visitors</span>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="text-[#F3C548]" size={22} />
                <span className="text-gray-700 font-medium">200+ Exhibitors</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="text-[#F3C548]" size={22} />
                <span className="text-gray-700 font-medium">Global Networking</span>
              </div>
            </div>

         
          </div>

          {/* Right Side - Image */}
          <div className="relative flex items-center justify-center">
            {/* Glow */}
            <div className="absolute w-[420px] h-[420px] rounded-full bg-[#F3C548]/20 blur-[120px]"></div>

            {/* Main Image */}
            <div className="relative z-10 overflow-hidden rounded-3xl border-2 border-[#F3C548]/30 shadow-2xl">
              <img
                src={aboutImage}
                alt="ETES Event"
                className="w-full lg:w-[520px] h-[620px] object-cover hover:scale-105 duration-700"
              />
            </div>

            {/* Visitors Card */}
            <div className="absolute -left-10 top-16 z-20 bg-white/95 backdrop-blur-xl border-2 border-[#F3C548]/30 rounded-2xl px-6 py-5 shadow-2xl">
              <h3 className="text-3xl font-bold text-[#F3C548]">5000+</h3>
              <p className="text-gray-700 font-medium mt-1">Expected Visitors</p>
            </div>

            {/* Exhibitors Card */}
            <div className="absolute -right-8 bottom-16 z-20 bg-white/95 backdrop-blur-xl border-2 border-[#F3C548]/30 rounded-2xl px-6 py-5 shadow-2xl">
              <h3 className="text-3xl font-bold text-[#F3C548]">200+</h3>
              <p className="text-gray-700 font-medium mt-1">Global Exhibitors</p>
            </div>

            {/* Countries Card */}
            <div className="absolute right-10 top-8 z-20 bg-white/95 backdrop-blur-xl border-2 border-[#F3C548]/30 rounded-2xl px-5 py-4 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#F3C548]">40+</h3>
              <p className="text-sm text-gray-700 font-medium">Countries</p>
            </div>

            {/* Experience Badge */}
            <div className="absolute left-8 bottom-10 z-20 bg-gradient-to-r from-[#F3C548] to-[#d6a521] text-gray-900 rounded-full px-6 py-3 font-semibold shadow-2xl">
              20+ Years of Excellence
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}