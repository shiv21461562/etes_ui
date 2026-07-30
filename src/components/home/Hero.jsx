import React from "react";
import { Calendar, MapPin, Users } from "lucide-react";
import heroImage from "../../assets/heroBG5.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        background: "#0a0c12",
        color: "#f5f4f0",
        fontFamily: "'Jost','Segoe UI',sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Jost:wght@300;400;500;600&display=swap');
        .etes-root * { box-sizing: border-box; }

        .etes-btn-gold{
          display:inline-flex;align-items:center;gap:10px;background:linear-gradient(90deg,#c9962f,#e8b84b);
          color:#1a1305;font-weight:700;padding:15px 34px;border-radius:999px;letter-spacing:.06em;
          font-size:.82rem;text-transform:uppercase;border:none;cursor:pointer;
          box-shadow:0 8px 24px rgba(201,150,47,.35);
          transition:transform .25s ease, box-shadow .25s ease;
        }
        .etes-btn-gold:hover{ transform:translateY(-2px); box-shadow:0 12px 30px rgba(201,150,47,.45); }

        /* ---------- HERO ---------- */
        .etes-hero{
          position: relative;
          min-height: 100vh;
          min-height: 100dvh;
          width: 100%;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 110px 6vw 60px;
        }
        .etes-hero-img{
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          z-index: 0;
        }
        .etes-hero-overlay{
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background:
            linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.48) 42%, rgba(0,0,0,0.15) 65%, rgba(0,0,0,0.05) 100%),
            linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 30%);
        }
        .etes-hero-inner{
          position: relative;
          z-index: 2;
          width: 100%;
        }
        .etes-hero-content{ max-width: 620px; }

        .etes-eyebrow{
          display:flex;align-items:center;gap:12px;
          color:#f3d488;letter-spacing:.28em;font-size:.7rem;text-transform:uppercase;
          margin-bottom:18px;
        }
        .etes-eyebrow::before{ content:'';width:30px;height:1px;background:#c9962f;flex-shrink:0; }

        .etes-tagline{
          color:#f3d488;
          letter-spacing:.14em;
          font-size:1.05rem;
          margin-top:20px;
          text-shadow:0 2px 18px rgba(0,0,0,.75);
        }

        .etes-cta-row{ 
          display:flex; 
          gap:14px; 
          margin-top:32px; 
          flex-wrap:wrap;
          justify-content: flex-start;
        }

        /* ---- Small stat cards, sit below the CTA buttons ---- */
        .etes-stat-cards{
          display:flex; 
          flex-direction:row; 
          gap:10px; 
          flex-wrap:wrap; 
          margin-top:26px;
          justify-content: flex-start;
        }
        .etes-stat-card{
          display:flex;align-items:center;gap:8px;
          background:rgba(10,12,18,0.6);
          border:1px solid rgba(232,184,75,0.35);
          border-radius:16px;
          padding:8px 12px;
          backdrop-filter:blur(10px);
          -webkit-backdrop-filter:blur(10px);
          transition:transform .3s ease, border-color .3s ease, background .3s ease;
        }
        .etes-stat-card:hover{
          transform:translateY(-3px);
          border-color:#e8b84b;
          background:rgba(10,12,18,0.8);
        }
        .etes-stat-card .ic{
          width:20px;height:20px;border-radius:50%;flex-shrink:0;
          border:1px solid #c9962f;
          display:flex;align-items:center;justify-content:center;
          color:#e8b84b;background:rgba(0,0,0,0.4);
        }
        .etes-stat-card .txt b{
          display:block;color:#f3d488;font-size:.68rem;font-weight:600;letter-spacing:.01em;line-height:1.2;
        }
        .etes-stat-card .txt span{
          color:#c7c9d1;font-size:.6rem;letter-spacing:.02em;
        }

        @media(max-width:600px){
          .etes-hero{
            min-height: auto;  /* ← FIX: removes extra white space */
            padding: 100px 6vw 30px;  /* ← reduced bottom padding */
          }
          .etes-hero-img{ object-position: 70% 18%; }
          .etes-hero-overlay{
            background:
              linear-gradient(180deg, rgba(4,5,9,0.72) 0%, rgba(4,5,9,0.58) 40%, rgba(4,5,9,0.88) 100%),
              linear-gradient(100deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 65%);
          }
          .etes-hero-content{ max-width: 100%; }
          .etes-eyebrow{ font-size:.6rem; gap:8px; letter-spacing:.2em; margin-bottom:14px; }
          .etes-eyebrow::before{ width:20px; }

          .etes-tagline{ font-size:.85rem; letter-spacing:.1em; margin-top:16px; }

          .etes-cta-row{ 
            width:100%; 
            margin-top:22px;
            justify-content: center !important;
          }
          .etes-cta-row a{
            justify-content:center;
            text-align:center;
            padding:10px 22px;
            font-size:.72rem;
          }

          .etes-stat-cards{ 
            gap:6px; 
            margin-top:20px;
            justify-content: center !important;
            flex-wrap: nowrap !important;
          }
          .etes-stat-card{
            flex: 0 1 auto;
            padding: 6px 10px;
            min-width: 0;
          }
          .etes-stat-card .txt b{
            font-size: 0.55rem;
          }
          .etes-stat-card .txt span{
            font-size: 0.5rem;
          }
          .etes-stat-card .ic{
            width: 16px;
            height: 16px;
          }
          .etes-stat-card .ic svg{
            width: 12px;
            height: 12px;
          }
        }
      `}</style>

      <div className="etes-root">
        {/* HERO */}
        <section className="etes-hero">
          <img src={heroImage} alt="ETES 2026" className="etes-hero-img" />
          <div className="etes-hero-overlay" />

          <div className="etes-hero-inner">
            {/* text content */}
            <div className="etes-hero-content">
              <div className="etes-eyebrow">
                India&apos;s Premier Energy &amp; Technology Event
              </div>

              <h1
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                  lineHeight: 1.08,
                  color: "#ffffff",
                  textShadow: "0 2px 25px rgba(0,0,0,.8)",
                  margin: 0,
                }}
              >
                Where Visionaries Meet, Ideas Ignite,
                <span style={{ display: "block", color: "#f3d488" }}>
                  Innovation Transforms
                </span>
              </h1>

              <div
                className="etes-tagline"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 900,
                  fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                  color: "#f3d488",
                  letterSpacing: "0.04em",
                  textShadow:
                    "0 1px 0 rgba(255,255,255,.15), 0 2px 6px rgba(0,0,0,.8)",
                }}
              >
                Powering the Next Era of Energy!
              </div>

              <p
                style={{
                  color: "#d9d9d9",
                  maxWidth: 460,
                  marginTop: 16,
                  fontSize: ".98rem",
                  lineHeight: 1.6,
                  textShadow: "0 2px 18px rgba(0,0,0,.85)",
                }}
              >
                India&apos;s premier energy and electrical technology conference
                uniting policymakers, industry leaders, innovators, utilities,
                researchers, and solution providers to drive the next wave of
                digitalisation, sustainability, and intelligent power systems.
              </p>
<div className="etes-cta-row">
  <Link to="/register" className="etes-btn-gold">
    <Calendar size={16} />
    Register Now
  </Link>
</div>

              {/* 3 small stat cards, below the CTA button */}
              <div className="etes-stat-cards">
                <div className="etes-stat-card">
                  <div className="ic">
                    <Calendar size={16} />
                  </div>
                  <div className="txt">
                    <b>23rd SEP 2026</b>
                    <span>Event Date</span>
                  </div>
                </div>

                <div className="etes-stat-card">
                  <div className="ic">
                    <MapPin size={16} />
                  </div>
                  <div className="txt">
                    <b>Scope Complex</b>
                    <span>New Delhi</span>
                  </div>
                </div>

                <div className="etes-stat-card">
                  <div className="ic">
                    <Users size={16} />
                  </div>
                  <div className="txt">
                    <b>20+</b>
                    <span>Participants</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
