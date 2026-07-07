import React, { useEffect, useRef, useState } from "react";
import {
  Users,
  Building2,
  Globe,
  Award,
  Calendar,
  Clock,
  MapPin,
  TrendingUp,
  Sparkles,
  Mic,
  Briefcase,
  Network,
  UserCheck,
  MessageSquare,
  Star,
  Zap,
} from "lucide-react";

export default function EventStats() {
  const [counts, setCounts] = useState({
    visitors: 0,
    exhibitors: 0,
    countries: 0,
    speakers: 0,
    sessions: 0,
    partners: 0,
  });

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targets = {
      visitors: 5000,
      exhibitors: 200,
      countries: 40,
      speakers: 100,
      sessions: 50,
      partners: 150,
    };

    const duration = 2000;
    const stepTime = 30;
    const totalSteps = duration / stepTime;

    let currentStep = 0;
    const intervals = [];

    Object.keys(targets).forEach((key) => {
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / totalSteps;
        const value = Math.floor(progress * targets[key]);
        setCounts((prev) => ({ ...prev, [key]: Math.min(value, targets[key]) }));

        if (currentStep >= totalSteps) {
          clearInterval(interval);
          setCounts((prev) => ({ ...prev, [key]: targets[key] }));
        }
      }, stepTime);

      intervals.push(interval);
    });

    return () => intervals.forEach(clearInterval);
  }, [isVisible]);

  const statsData = [
    {
      id: "visitors",
      label: "Expected Visitors",
      icon: Users,
      suffix: "+",
    },
    {
      id: "exhibitors",
      label: "Global Exhibitors",
      icon: Building2,
      suffix: "+",
    },
    {
      id: "countries",
      label: "Participating Countries",
      icon: Globe,
      suffix: "+",
    },
    {
      id: "speakers",
      label: "Expert Speakers",
      icon: Mic,
      suffix: "+",
    },
    {
      id: "sessions",
      label: "Technical Sessions",
      icon: Clock,
      suffix: "+",
    },
    {
      id: "partners",
      label: "Industry Partners",
      icon: Award,
      suffix: "+",
    },
  ];

  const featuresData = [
    {
      icon: Sparkles,
      title: "Innovation Hub",
      description: "Discover cutting-edge technologies and breakthrough solutions",
    },
    {
      icon: Network,
      title: "Global Networking",
      description: "Connect with industry leaders from 40+ countries",
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Generate leads, partnerships, and business opportunities",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Showcase your brand to 5000+ industry professionals",
    },
  ];

  return (
    <section ref={sectionRef} className="relative bg-[#050914] py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F3C548]/5 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F3C548]/5 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#F3C548]/30 bg-[#F3C548]/10 text-[#F3C548] text-sm font-semibold tracking-widest uppercase">
            <Calendar size={16} />
            Event Statistics 2026
          </div>


          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Discover the scale and impact of India's premier electrical and 
            energy technology event
          </p>
        </div>


        {/* Key Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white">
              What Makes <span className="text-[#F3C548]">ETES Unique</span>
            </h3>
            <p className="text-gray-400 mt-2">
              Four pillars that define the ETES experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="relative bg-[#0B1220] border border-[#F3C548]/10 rounded-2xl p-6 text-center overflow-hidden group cursor-pointer transition-all duration-300 hover:border-[#F3C548]/30"
              >
                {/* Left to Right Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F3C548]/20 to-[#F3C548]/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-[#F3C548]/10 border border-[#F3C548]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#F3C548]/20 transition-all duration-300">
                    <feature.icon className="text-[#F3C548]" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                  <p className="text-gray-400 text-sm mt-2">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Counters */}
        <div className="bg-[#0B1220] border border-[#F3C548]/20 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-[#F3C548] mb-2">
                <Zap size={20} />
                <span className="text-sm font-semibold">Live</span>
              </div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-gray-400 text-sm">Event Coverage</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-[#F3C548] mb-2">
                <UserCheck size={20} />
                <span className="text-sm font-semibold">VIP</span>
              </div>
              <div className="text-3xl font-bold text-white">200+</div>
              <div className="text-gray-400 text-sm">VIP Attendees</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-[#F3C548] mb-2">
                <Star size={20} />
                <span className="text-sm font-semibold">Rating</span>
              </div>
              <div className="text-3xl font-bold text-white">4.9</div>
              <div className="text-gray-400 text-sm">/ 5.0 Satisfaction</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-[#F3C548] mb-2">
                <MessageSquare size={20} />
                <span className="text-sm font-semibold">Engagement</span>
              </div>
              <div className="text-3xl font-bold text-white">85%</div>
              <div className="text-gray-400 text-sm">Interaction Rate</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="group px-8 py-4 rounded-xl bg-[#F3C548] text-[#050914] font-semibold flex items-center gap-3 hover:scale-105 duration-300 mx-auto">
            Join ETES 2026
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}