import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.avif";

const menus = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "SPEAKERS", path: "/speakers" },
    { name: "SPONSORSHIP", path: "/sponsorship" },
  { name: "GALLERY", path: "/gallery" },
  { name: "CONTACT", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scroll
            ? "bg-white shadow-lg border-b border-gray-200"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group shrink-0">
              <img
                src={logo}
                alt="Logo"
                className="h-10 sm:h-12 md:h-10 object-contain transition-all duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {menus.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative py-1 group text-[11px] xl:text-[12px] font-bold tracking-[2px] transition-colors duration-300 ${
                      isActive ? "text-yellow-500" : "text-gray-800"
                    }`}
                    style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
                  >
                    {item.name}

                    {/* Golden underline - shows on hover AND active state */}
                    <span className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`} />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Register Button */}
            <div className="hidden lg:block">
              <Link
                to="/register"
                className="
                  px-8 py-[13px]
                  rounded-full
                  bg-gradient-to-r
                  from-[#FFE9A0]
                  via-[#D4AF37]
                  to-[#B8860B]
                  text-black
                  font-bold
                  tracking-[2px]
                  uppercase
                  transition-all duration-300
                  hover:scale-105
                  hover:-translate-y-1
                  hover:shadow-[0_15px_40px_rgba(212,175,55,.55)]
                "
              >
                REGISTER
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 hover:text-yellow-500 transition-colors duration-300 p-2 relative z-[60]"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 transition-all duration-300 z-[60] ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[85%] sm:w-[60%] bg-white shadow-2xl transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] z-[70] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6 sm:px-8 overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-yellow-500 transition-colors p-2"
          >
            <X size={22} />
          </button>

          {/* Mobile Logo */}
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200">
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-8 object-contain rounded-full border-2 border-yellow-400/30"
            />
            <div>
              <span className="text-gray-800 text-lg font-bold tracking-[2px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                ETES
              </span>
              <span className="text-yellow-500 text-[9px] font-semibold tracking-[2px] block -mt-0.5">
                2026
              </span>
            </div>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex flex-col gap-0.5">
            {menus.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`py-3 px-4 text-[11px] tracking-[2px] font-bold transition-all duration-300 rounded-lg ${
                    isActive
                      ? "text-yellow-500 bg-yellow-50"
                      : "text-gray-600 hover:text-yellow-500 hover:bg-gray-50"
                  }`}
                  style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Register Button */}
          <Link
            to="/register"
            onClick={() => setOpen(false)}
            className="w-full mt-6 py-3 text-center rounded-full bg-yellow-400 text-black font-bold text-[12px] tracking-[1px] transition-all duration-300 hover:bg-yellow-300 active:scale-95"
            style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
          >
            REGISTER
          </Link>

          {/* Footer */}
          <div className="mt-auto pt-6 pb-4 border-t border-gray-200">
            <p className="text-gray-400 text-[10px] text-center tracking-[1px]" style={{ fontFamily: "'Inter', sans-serif" }}>
              © 2026 ETES. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}