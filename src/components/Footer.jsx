import {
  Mail,
  Phone,
  Globe,
  MapPin,
  PhoneCall,
  Send,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.avif";

// Custom SVG icons for social media
const LinkedinIcon = ({ size = 18, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ size = 18, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const YoutubeIcon = ({ size = 18, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const InstagramIcon = ({ size = 18, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 18, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#050914] text-white font-['Jost',sans-serif] border-t border-[#e8b84b]/20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Jost:wght@300;400;500;600&display=swap');
      `}</style>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Column 1 - Company Info with Logo */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="ETES 2026"
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              ETES 2026 brings together policymakers, investors, innovators and
              industry leaders driving the future of electrical technology and
              infrastructure development.
            </p>

            <h3 className="text-sm font-semibold text-[#f3d488] mb-2">
              Tresub Media Pvt Ltd
            </h3>

            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#e8b84b] shrink-0 mt-0.5" />
                <span className="text-gray-400 text-xs leading-relaxed">
                  Gaur City Mall 14th Floor (Office No. 14130, 14130-A),
                  Sector-04, Greater Noida West - 201318, Uttar Pradesh, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#e8b84b] shrink-0" />
                <span className="text-gray-300 text-sm font-medium">
                  +91-120-5162126
                </span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneCall size={16} className="text-[#e8b84b] shrink-0" />
                <span className="text-gray-300 text-sm font-medium">
                  +91 7428 693 331
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#e8b84b] shrink-0" />
                <a
                  href="mailto:neha@electricalmirror.net"
                  className="text-gray-300 hover:text-[#e8b84b] transition-colors text-sm font-medium"
                >
                  neha@electricalmirror.net
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={16} className="text-[#e8b84b] shrink-0" />
                <a
                  href="https://www.electricalmirror.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#e8b84b] transition-colors text-sm font-medium"
                >
                  www.electricalmirror.net
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 - Navigation (Home, About, Speakers, Gallery, Contact) */}
          <div>
            <h3 className="font-['Playfair_Display',serif] text-xl font-semibold text-[#f3d488] mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-[#e8b84b] transition-colors text-base flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-4 h-px bg-[#e8b84b] transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-[#e8b84b] transition-colors text-base flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-4 h-px bg-[#e8b84b] transition-all duration-300"></span>
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/speakers"
                  className="text-gray-300 hover:text-[#e8b84b] transition-colors text-base flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-4 h-px bg-[#e8b84b] transition-all duration-300"></span>
                  Speakers
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-[#e8b84b] transition-colors text-base flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-4 h-px bg-[#e8b84b] transition-all duration-300"></span>
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-[#e8b84b] transition-colors text-base flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-4 h-px bg-[#e8b84b] transition-all duration-300"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div>
            <h3 className="font-['Playfair_Display',serif] text-xl font-semibold text-[#f3d488] mb-5">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-[#e8b84b] transition-colors text-base flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-4 h-px bg-[#e8b84b] transition-all duration-300"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-300 hover:text-[#e8b84b] transition-colors text-base flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-4 h-px bg-[#e8b84b] transition-all duration-300"></span>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
                  className="text-gray-300 hover:text-[#e8b84b] transition-colors text-base flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-4 h-px bg-[#e8b84b] transition-all duration-300"></span>
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-300 hover:text-[#e8b84b] transition-colors text-base flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-4 h-px bg-[#e8b84b] transition-all duration-300"></span>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="font-['Playfair_Display',serif] text-xl font-semibold text-[#f3d488] mb-5">
              Newsletter
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Subscribe to receive the latest updates, event announcements,
              speaker news, and renewable energy insights.
            </p>

            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email for updates"
                  className="w-full bg-white/5 border border-[#e8b84b]/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#e8b84b] transition-colors pr-11"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-[#e8b84b] text-[#050914] hover:bg-[#f3d488] transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
              <Link
                to="/register"
                className="w-full bg-[#e8b84b] hover:bg-[#f3d488] text-[#050914] font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
              >
                Submit your registration now
                <ArrowRight size={16} />
              </Link>
              <p className="text-xs text-gray-500">
                We respect your privacy. No spam, unsubscribe anytime.
              </p>
            </form>

            {/* Social Icons */}
            <div className="flex gap-2.5 mt-6 pt-6 border-t border-[#e8b84b]/10">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-[#c9962f]/30 flex items-center justify-center text-[#e8b84b] hover:bg-[#e8b84b] hover:text-[#050914] transition-all duration-300 hover:scale-110"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-[#c9962f]/30 flex items-center justify-center text-[#e8b84b] hover:bg-[#e8b84b] hover:text-[#050914] transition-all duration-300 hover:scale-110"
              >
                <TwitterIcon size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-[#c9962f]/30 flex items-center justify-center text-[#e8b84b] hover:bg-[#e8b84b] hover:text-[#050914] transition-all duration-300 hover:scale-110"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-[#c9962f]/30 flex items-center justify-center text-[#e8b84b] hover:bg-[#e8b84b] hover:text-[#050914] transition-all duration-300 hover:scale-110"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-[#c9962f]/30 flex items-center justify-center text-[#e8b84b] hover:bg-[#e8b84b] hover:text-[#050914] transition-all duration-300 hover:scale-110"
              >
                <YoutubeIcon size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#e8b84b]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span>© 2024. All rights reserved to Electrical Mirror</span>
              <span className="hidden sm:inline w-px h-3 bg-[#e8b84b]/20"></span>
              <span className="hidden sm:inline">Design by Tresub Media</span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <Link
                to="/privacy-policy"
                className="text-gray-500 hover:text-[#e8b84b] transition-colors"
              >
                Privacy
              </Link>
              <span className="w-px h-3 bg-[#e8b84b]/20"></span>
              <Link
                to="/terms"
                className="text-gray-500 hover:text-[#e8b84b] transition-colors"
              >
                Terms
              </Link>
              <span className="w-px h-3 bg-[#e8b84b]/20"></span>
              <Link
                to="/sitemap"
                className="text-gray-500 hover:text-[#e8b84b] transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
