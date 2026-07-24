// import React from "react";
// import { Calendar, MapPin, Users, ArrowRight, Send } from "lucide-react";
// import heroImage from "../../assets/etes5.png";

// export default function Home() {
//   return (
//     <div
//       style={{
//         background: "#0a0c12",
//         color: "#f5f4f0",
//         fontFamily: "'Jost','Segoe UI',sans-serif",
//       }}
//     >
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Jost:wght@300;400;500;600&display=swap');
//         .etes-root * { box-sizing: border-box; }
//         .etes-eyebrow{
//           display:flex;align-items:center;justify-content:center;gap:14px;
//           color:#f3d488;letter-spacing:.35em;font-size:.72rem;text-transform:uppercase;
//           margin-bottom:14px;
//         }
//         .etes-eyebrow::before,.etes-eyebrow::after{ content:'';width:36px;height:1px;background:#c9962f; }
//         .etes-section-title{
//           text-align:center;font-family:'Playfair Display',Georgia,serif;font-size:2.4rem;
//           color:#f3d488;letter-spacing:.04em;margin-bottom:8px;font-weight:700;
//         }
//         .etes-section-sub{ text-align:center;color:#a9adb8;max-width:560px;margin:0 auto 46px;font-size:.95rem; }
//         .etes-service-card{
//           background:#0d1220;border:1px solid rgba(232,184,75,0.25);border-radius:4px;overflow:hidden;
//           transition:transform .35s ease, border-color .35s ease;
//         }
//         .etes-service-card:hover{ transform:translateY(-6px); border-color:#c9962f; }
//         .etes-hero-stat .ic{
//           width:38px;height:38px;border:1px solid #c9962f;border-radius:50%;
//           display:flex;align-items:center;justify-content:center;color:#e8b84b;flex-shrink:0;
//         }
//         .etes-btn-gold{
//           display:inline-flex;align-items:center;gap:10px;background:linear-gradient(90deg,#c9962f,#e8b84b);
//           color:#1a1305;font-weight:600;padding:14px 34px;border-radius:3px;letter-spacing:.06em;
//           font-size:.85rem;text-transform:uppercase;border:none;cursor:pointer;
//         }
//         .etes-newsletter-input input:focus{ outline:none; }
//         @media(max-width:900px){
//           .etes-services-grid{ grid-template-columns:1fr 1fr !important; }
//           .etes-tier-row{ grid-template-columns:1fr !important; }
//           .etes-footer-grid{ grid-template-columns:1fr 1fr !important; }
//         }
//         @media(max-width:600px){
//           .etes-services-grid{ grid-template-columns:1fr !important; }
//           .etes-footer-grid{ grid-template-columns:1fr !important; }
//           .etes-countdown-bar{ flex-direction:column !important; align-items:flex-start !important; }
//         }
//       `}</style>

//       <div className="etes-root">
//         {/* HERO */}
//   <section
//   style={{
//     position: "relative",
//     height: "100vh", // minHeight ki jagah
//     width: "100%",
//     display: "flex",
//     alignItems: "center",
//     overflow: "hidden",
//     padding: "80px 6vw",
//     background: `
//       linear-gradient(
//         90deg,
//         rgba(5,9,20,.82) 0%,
//         rgba(5,9,20,.60) 35%,
//         rgba(5,9,20,.18) 70%,
//         rgba(5,9,20,.05) 100%
//       ),
//       url(${heroImage})
//     `,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//   }}
// >
//           {/* Light overlay glow */}
//           <div
//             style={{
//               position: "absolute",
//               inset: 0,
//               background:
//                 "radial-gradient(ellipse at 40% 30%, rgba(232,184,75,0.06), transparent 50%)",
//               zIndex: 1,
//               pointerEvents: "none",
//             }}
//           />

//           <div style={{ maxWidth: 760, position: "relative", zIndex: 2 }}>
//             <div
//               style={{
//                 color: "#f3d488",
//                 letterSpacing: ".15em",
//                 fontSize: ".95rem",
//                 marginBottom: 18,
//               }}
//             >
//               India's Premier Energy &amp; Technology Event
//             </div>
//             <h1
//               style={{
//                 fontFamily: "'Playfair Display',Georgia,serif",
//                 fontWeight: 800,
//                 fontSize: "clamp(3.2rem,9vw,6.5rem)",
//                 lineHeight: 0.95,
//                 color: "#e8b84b",
//                 textShadow:
//                   "0 0 60px rgba(232,184,75,0.3), 0 4px 30px rgba(0,0,0,0.4)",
//                 letterSpacing: ".01em",
//                 margin: 0,
//               }}
//             >
//               ETES
//               <span
//                 style={{
//                   display: "block",
//                   fontSize: ".55em",
//                   color: "#f5f4f0",
//                   fontWeight: 600,
//                   letterSpacing: ".25em",
//                   marginTop: 8,
//                   paddingTop: 12,
//                   borderTop: "1px solid transparent",
//                   backgroundImage:
//                     "linear-gradient(90deg,transparent,#c9962f,transparent)",
//                   backgroundSize: "130px 1px",
//                   backgroundRepeat: "no-repeat",
//                   backgroundPosition: "top center",
//                   textShadow: "0 2px 20px rgba(0,0,0,0.5)",
//                 }}
//               >
//                 2026
//               </span>
//             </h1>
//             <div
//               style={{
//                 fontFamily: "'Playfair Display',Georgia,serif",
//                 fontWeight: 700,
//                 fontSize: "clamp(1.5rem,3vw,2.2rem)",
//                 color: "#f5f4f0",
//                 marginTop: 26,
//                 textShadow: "0 2px 20px rgba(0,0,0,0.4)",
//               }}
//             >
//               Where Innovation Connects with Vision
//             </div>
//             <p
//               style={{
//                 color: "#d0d4dd",
//                 maxWidth: 480,
//                 marginTop: 16,
//                 fontSize: "1rem",
//                 textShadow: "0 2px 10px rgba(0,0,0,0.3)",
//               }}
//             >
//               Join industry leaders, innovators, and visionaries to shape the
//               future of energy and electrical technology.
//             </p>

//             <div
//               style={{
//                 display: "flex",
//                 gap: 38,
//                 marginTop: 38,
//                 flexWrap: "wrap",
//               }}
//             >
//               <div
//                 className="etes-hero-stat"
//                 style={{ display: "flex", alignItems: "center", gap: 12 }}
//               >
//                 <div
//                   className="ic"
//                   style={{ background: "rgba(232,184,75,0.08)" }}
//                 >
//                   <Calendar size={18} />
//                 </div>
//                 <span style={{ fontSize: ".85rem", lineHeight: 1.3 }}>
//                   <b
//                     style={{
//                       color: "#f3d488",
//                       display: "block",
//                       fontSize: ".95rem",
//                       fontWeight: 600,
//                     }}
//                   >
//                     23rd  SEP 2026
//                   </b>
//                   Event Dates
//                 </span>
//               </div>
//               <div
//                 className="etes-hero-stat"
//                 style={{ display: "flex", alignItems: "center", gap: 12 }}
//               >
//                 <div
//                   className="ic"
//                   style={{ background: "rgba(232,184,75,0.08)" }}
//                 >
//                   <MapPin size={18} />
//                 </div>
//                 <span style={{ fontSize: ".85rem", lineHeight: 1.3 }}>
//                   <b
//                     style={{
//                       color: "#f3d488",
//                       display: "block",
//                       fontSize: ".95rem",
//                       fontWeight: 600,
//                     }}
//                   >
//                    Scope Complex
//                   </b>
//                  New Delhi
//                 </span>
//               </div>
//               <div
//                 className="etes-hero-stat"
//                 style={{ display: "flex", alignItems: "center", gap: 12 }}
//               >
//                 <div
//                   className="ic"
//                   style={{ background: "rgba(232,184,75,0.08)" }}
//                 >
//                   <Users size={18} />
//                 </div>
//                 <span style={{ fontSize: ".85rem", lineHeight: 1.3 }}>
//                   <b
//                     style={{
//                       color: "#f3d488",
//                       display: "block",
//                       fontSize: ".95rem",
//                       fontWeight: 600,
//                     }}
//                   >
//                     50+
//                   </b>
//                   Participants
//                 </span>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }



// import React from "react";
// import { Calendar, MapPin, Users, ArrowRight, Send } from "lucide-react";
// import heroImage from "../../assets/heroBG6.png";

// export default function Home() {
//   return (
//     <div
//       style={{
//         background: "#0a0c12",
//         color: "#f5f4f0",
//         fontFamily: "'Jost','Segoe UI',sans-serif",
//       }}
//     >
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Jost:wght@300;400;500;600&display=swap');
//         .etes-root * { box-sizing: border-box; }

//         .etes-eyebrow{
//           display:flex;align-items:center;justify-content:center;gap:14px;
//           color:#f3d488;letter-spacing:.35em;font-size:.72rem;text-transform:uppercase;
//           margin-bottom:14px;
//         }
//         .etes-eyebrow::before,.etes-eyebrow::after{ content:'';width:36px;height:1px;background:#c9962f; }
//         .etes-section-title{
//           text-align:center;font-family:'Playfair Display',Georgia,serif;font-size:2.4rem;
//           color:#f3d488;letter-spacing:.04em;margin-bottom:8px;font-weight:700;
//         }
//         .etes-section-sub{ text-align:center;color:#a9adb8;max-width:560px;margin:0 auto 46px;font-size:.95rem; }
//         .etes-service-card{
//           background:#0d1220;border:1px solid rgba(232,184,75,0.25);border-radius:4px;overflow:hidden;
//           transition:transform .35s ease, border-color .35s ease;
//         }
//         .etes-service-card:hover{ transform:translateY(-6px); border-color:#c9962f; }
//         .etes-hero-stat .ic{
//           width:38px;height:38px;border:1px solid #c9962f;border-radius:50%;
//           display:flex;align-items:center;justify-content:center;color:#e8b84b;flex-shrink:0;
//         }
//         .etes-btn-gold{
//           display:inline-flex;align-items:center;gap:10px;background:linear-gradient(90deg,#c9962f,#e8b84b);
//           color:#1a1305;font-weight:600;padding:14px 34px;border-radius:3px;letter-spacing:.06em;
//           font-size:.85rem;text-transform:uppercase;border:none;cursor:pointer;
//         }
//         .etes-newsletter-input input:focus{ outline:none; }

//         /* ---------- HERO ---------- */
//         .etes-hero{
//           position: relative;
//           height: 100vh;
//           height: 100dvh;
//           width: 100%;
//           display: flex;
//           align-items: center;
//           overflow: hidden;
//           padding: 80px 6vw;
//         }
//         .etes-hero-img{
//           position: absolute;
//           inset: 0;
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           object-position: center 30%;
//           z-index: 0;
//         }

//         .etes-hero-blur{
//           position: absolute;
//           inset: 0;
//           z-index: 1;
//           pointer-events: none;
//           backdrop-filter: blur(3px);
//           -webkit-backdrop-filter: blur(3px);
//           -webkit-mask-image: linear-gradient(to right, black 0%, black 28%, transparent 50%);
//           mask-image: linear-gradient(to right, black 0%, black 28%, transparent 50%);
//         }

//         .etes-hero-overlay{
//           position: absolute;
//           inset: 0;
//           z-index: 2;
//           pointer-events: none;
//           background:
//             linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.1) 100%),
//             linear-gradient(0deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 30%);
//         }
//         .etes-hero-content{ max-width: 760px; position: relative; z-index: 3; }

//         @media(max-width:900px){
//           .etes-services-grid{ grid-template-columns:1fr 1fr !important; }
//           .etes-tier-row{ grid-template-columns:1fr !important; }
//           .etes-footer-grid{ grid-template-columns:1fr 1fr !important; }
//           .etes-hero-img{ object-position: 65% 25%; }
//         }
//         @media(max-width:600px){
//           .etes-services-grid{ grid-template-columns:1fr !important; }
//           .etes-footer-grid{ grid-template-columns:1fr !important; }
//           .etes-countdown-bar{ flex-direction:column !important; align-items:flex-start !important; }

//           .etes-hero{ padding: 100px 6vw 40px; align-items: flex-start; }
//           .etes-hero-img{ object-position: 68% 20%; }
//           .etes-hero-blur{
//             backdrop-filter: blur(3px);
//             -webkit-backdrop-filter: blur(3px);
//             -webkit-mask-image: linear-gradient(to bottom, black 0%, black 35%, transparent 60%);
//             mask-image: linear-gradient(to bottom, black 0%, black 35%, transparent 60%);
//           }
//           .etes-hero-overlay{
//             background:
//               linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.65) 100%),
//               linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 70%);
//           }
//           .etes-hero-content{ max-width: 100%; }
//         }
//       `}</style>

//       <div className="etes-root">
//         {/* HERO - Full Image, No Crop-Cutoff, Responsive, Blurred Backdrop for Readability */}
//         <section className="etes-hero">
//           <img src={heroImage} alt="ETES 2026" className="etes-hero-img" />
//           <div className="etes-hero-blur" />
//           <div className="etes-hero-overlay" />

//           <div className="etes-hero-content">
//             <div
//               style={{
//                 color: "#FFFFFF",
//                 letterSpacing: ".15em",
//                 fontSize: "1.2rem",
//                 marginBottom: 18,
//                 textShadow: "0 2px 20px rgba(0,0,0,0.7)",
//               }}
//             >
//               India's Premier Energy &amp; Technology Event
//             </div>
//             <h1
//               style={{
//                 fontFamily: "'Playfair Display',Georgia,serif",
//                 fontWeight: 800,
//                 fontSize: "clamp(3.2rem,9vw,6.5rem)",
//                 lineHeight: 0.95,
//                 background:
//                   "linear-gradient(180deg,#FFF8D5 0%,#FFD86A 25%,#E8B84B 60%,#C9962F 100%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//                 textShadow: "0 4px 20px rgba(201,150,47,.35)",
//                 letterSpacing: ".01em",
//                 margin: 0,
//               }}
//             >
//               ETES
//               <span
//                 style={{
//                   display: "block",
//                   fontSize: ".55em",
//                   fontWeight: 700,
//                   letterSpacing: ".28em",
//                   marginTop: 10,
//                   paddingTop: 14,
//                   color: "#FFFFFF",
//                   WebkitTextFillColor: "#FFFFFF",
//                   background: "none",
//                   WebkitBackgroundClip: "border-box",
//                   backgroundClip: "border-box",
//                   textShadow:
//                     "0 2px 18px rgba(0,0,0,0.85), 0 0 30px rgba(0,0,0,0.5)",
//                 }}
//               >
//                 2026
//               </span>
//             </h1>

//             <div
//               style={{
//                 fontFamily: "'Playfair Display',Georgia,serif",
//                 fontWeight: 700,
//                 fontSize: "clamp(1.5rem,3vw,2.2rem)",
//                 color: "#ffffff",
//                 marginTop: 26,
//                 textShadow: "0 2px 30px rgba(0,0,0,0.7)",
//               }}
//             >
//               Where Innovation Connects with Vision
//             </div>

//             <p
//               style={{
//                 color: "#e8e8e8",
//                 maxWidth: 480,
//                 marginTop: 16,
//                 fontSize: "1rem",
//                 textShadow: "0 2px 20px rgba(0,0,0,0.8)",
//               }}
//             >
//               Join industry leaders, innovators, and visionaries to shape the
//               future of energy and electrical technology.
//             </p>

//             <div
//               style={{
//                 display: "flex",
//                 gap: 38,
//                 marginTop: 38,
//                 flexWrap: "wrap",
//               }}
//             >
//               <div
//                 className="etes-hero-stat"
//                 style={{ display: "flex", alignItems: "center", gap: 12 }}
//               >
//                 <div
//                   className="ic"
//                   style={{
//                     background: "rgba(0,0,0,0.5)",
//                     borderColor: "#f3d488",
//                     backdropFilter: "blur(8px)",
//                     border: "1px solid rgba(243,212,136,0.5)",
//                   }}
//                 >
//                   <Calendar size={18} style={{ color: "#f3d488" }} />
//                 </div>
//                 <span
//                   style={{
//                     fontSize: ".85rem",
//                     lineHeight: 1.3,
//                     color: "#ffffff",
//                     textShadow: "0 2px 15px rgba(0,0,0,0.9)",
//                   }}
//                 >
//                   <b
//                     style={{
//                       color: "#f3d488",
//                       display: "block",
//                       fontSize: ".95rem",
//                       fontWeight: 600,
//                     }}
//                   >
//                     23rd SEP 2026
//                   </b>
//                   Event Dates
//                 </span>
//               </div>

//               <div
//                 className="etes-hero-stat"
//                 style={{ display: "flex", alignItems: "center", gap: 12 }}
//               >
//                 <div
//                   className="ic"
//                   style={{
//                     background: "rgba(0,0,0,0.5)",
//                     borderColor: "#f3d488",
//                     backdropFilter: "blur(8px)",
//                     border: "1px solid rgba(243,212,136,0.5)",
//                   }}
//                 >
//                   <MapPin size={18} style={{ color: "#f3d488" }} />
//                 </div>
//                 <span
//                   style={{
//                     fontSize: ".85rem",
//                     lineHeight: 1.3,
//                     color: "#ffffff",
//                     textShadow: "0 2px 15px rgba(0,0,0,0.9)",
//                   }}
//                 >
//                   <b
//                     style={{
//                       color: "#f3d488",
//                       display: "block",
//                       fontSize: ".95rem",
//                       fontWeight: 600,
//                     }}
//                   >
//                     Scope Complex
//                   </b>
//                   New Delhi
//                 </span>
//               </div>

//               <div
//                 className="etes-hero-stat"
//                 style={{ display: "flex", alignItems: "center", gap: 12 }}
//               >
//                 <div
//                   className="ic"
//                   style={{
//                     background: "rgba(0,0,0,0.5)",
//                     borderColor: "#f3d488",
//                     backdropFilter: "blur(8px)",
//                     border: "1px solid rgba(243,212,136,0.5)",
//                   }}
//                 >
//                   <Users size={18} style={{ color: "#f3d488" }} />
//                 </div>
//                 <span
//                   style={{
//                     fontSize: ".85rem",
//                     lineHeight: 1.3,
//                     color: "#ffffff",
//                     textShadow: "0 2px 15px rgba(0,0,0,0.9)",
//                   }}
//                 >
//                   <b
//                     style={{
//                       color: "#f3d488",
//                       display: "block",
//                       fontSize: ".95rem",
//                       fontWeight: 600,
//                     }}
//                   >
//                     50+
//                   </b>
//                   Participants
//                 </span>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }





import React from "react";
import { Calendar, MapPin, Users, ArrowRight, Send } from "lucide-react";
import heroImage from "../../assets/heroBG5.png";

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

        .etes-eyebrow{
          display:flex;align-items:center;justify-content:center;gap:14px;
          color:#f3d488;letter-spacing:.35em;font-size:.72rem;text-transform:uppercase;
          margin-bottom:14px;
        }
        .etes-eyebrow::before,.etes-eyebrow::after{ content:'';width:36px;height:1px;background:#c9962f; }
        .etes-section-title{
          text-align:center;font-family:'Playfair Display',Georgia,serif;font-size:2.4rem;
          color:#f3d488;letter-spacing:.04em;margin-bottom:8px;font-weight:700;
        }
        .etes-section-sub{ text-align:center;color:#a9adb8;max-width:560px;margin:0 auto 46px;font-size:.95rem; }
        .etes-service-card{
          background:#0d1220;border:1px solid rgba(232,184,75,0.25);border-radius:4px;overflow:hidden;
          transition:transform .35s ease, border-color .35s ease;
        }
        .etes-service-card:hover{ transform:translateY(-6px); border-color:#c9962f; }
        .etes-hero-stat .ic{
          width:38px;height:38px;border:1px solid #c9962f;border-radius:50%;
          display:flex;align-items:center;justify-content:center;color:#e8b84b;flex-shrink:0;
        }
        .etes-btn-gold{
          display:inline-flex;align-items:center;gap:10px;background:linear-gradient(90deg,#c9962f,#e8b84b);
          color:#1a1305;font-weight:600;padding:14px 34px;border-radius:3px;letter-spacing:.06em;
          font-size:.85rem;text-transform:uppercase;border:none;cursor:pointer;
        }
        .etes-newsletter-input input:focus{ outline:none; }

        /* ---------- HERO ---------- */
        .etes-hero{
          position: relative;
          height: 100vh;
          height: 100dvh;
          width: 100%;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 80px 6vw;
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

        .etes-hero-blur{
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          backdrop-filter: blur(3px);
          -webkit-backdrop-filter: blur(3px);
          -webkit-mask-image: linear-gradient(to right, black 0%, black 28%, transparent 50%);
          mask-image: linear-gradient(to right, black 0%, black 28%, transparent 50%);
        }

        .etes-hero-overlay{
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background:
            linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.1) 100%),
            linear-gradient(0deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 30%);
        }
        .etes-hero-content{ max-width: 760px; position: relative; z-index: 3; }

        @media(max-width:900px){
          .etes-services-grid{ grid-template-columns:1fr 1fr !important; }
          .etes-tier-row{ grid-template-columns:1fr !important; }
          .etes-footer-grid{ grid-template-columns:1fr 1fr !important; }
          .etes-hero-img{ object-position: 65% 25%; }
        }
        @media(max-width:600px){
          .etes-services-grid{ grid-template-columns:1fr !important; }
          .etes-footer-grid{ grid-template-columns:1fr !important; }
          .etes-countdown-bar{ flex-direction:column !important; align-items:flex-start !important; }

          .etes-hero{ padding: 100px 6vw 40px; align-items: flex-start; }
          .etes-hero-img{ object-position: 68% 20%; }
          .etes-hero-blur{
            backdrop-filter: blur(3px);
            -webkit-backdrop-filter: blur(3px);
            -webkit-mask-image: linear-gradient(to bottom, black 0%, black 35%, transparent 60%);
            mask-image: linear-gradient(to bottom, black 0%, black 35%, transparent 60%);
          }
          .etes-hero-overlay{
            background:
              linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.65) 100%),
              linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 70%);
          }
          .etes-hero-content{ max-width: 100%; }
        }
      `}</style>

      <div className="etes-root">
        {/* HERO - Full Image, No Crop-Cutoff, Responsive, Blurred Backdrop for Readability */}
        <section className="etes-hero">
          <img src={heroImage} alt="ETES 2026" className="etes-hero-img" />
          <div className="etes-hero-blur" />
          <div className="etes-hero-overlay" />

          <div className="etes-hero-content">
            <div
              style={{
                color: "#FFFFFF",
                letterSpacing: ".15em",
                fontSize: "1.2rem",
                marginBottom: 18,
                textShadow: "0 2px 20px rgba(0,0,0,0.7)",
              }}
            >
              India's Premier Energy &amp; Technology Event
            </div>
            <h1
              style={{
                fontFamily: "'Playfair Display',Georgia,serif",
                fontWeight: 800,
                fontSize: "clamp(3.2rem,9vw,6.5rem)",
                lineHeight: 0.95,
                background:
                  "linear-gradient(180deg,#FFF8D5 0%,#FFD86A 25%,#E8B84B 60%,#C9962F 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 4px 20px rgba(201,150,47,.35)",
                letterSpacing: ".01em",
                margin: 0,
              }}
            >
              ETES
              <span
                style={{
                  display: "block",
                  fontSize: ".55em",
                  fontWeight: 700,
                  letterSpacing: ".28em",
                  marginTop: 10,
                  paddingTop: 14,
                  color: "#FFFFFF",
                  WebkitTextFillColor: "#FFFFFF",
                  background: "none",
                  WebkitBackgroundClip: "border-box",
                  backgroundClip: "border-box",
                  textShadow:
                    "0 2px 18px rgba(0,0,0,0.85), 0 0 30px rgba(0,0,0,0.5)",
                }}
              >
                2026
              </span>
            </h1>

            <div
              style={{
                fontFamily: "'Playfair Display',Georgia,serif",
                fontWeight: 700,
                fontSize: "clamp(1.5rem,3vw,2.2rem)",
                color: "#ffffff",
                marginTop: 26,
                textShadow: "0 2px 30px rgba(0,0,0,0.7)",
              }}
            >
              Where Innovation Connects with Vision
            </div>

            <p
              style={{
                color: "#e8e8e8",
                maxWidth: 480,
                marginTop: 16,
                fontSize: "1rem",
                textShadow: "0 2px 20px rgba(0,0,0,0.8)",
              }}
            >
              Join industry leaders, innovators, and visionaries to shape the
              future of energy and electrical technology.
            </p>

            <div
              style={{
                display: "flex",
                gap: 38,
                marginTop: 38,
                flexWrap: "wrap",
              }}
            >
              <div
                className="etes-hero-stat"
                style={{ display: "flex", alignItems: "center", gap: 12 }}
              >
                <div
                  className="ic"
                  style={{
                    background: "rgba(0,0,0,0.5)",
                    borderColor: "#f3d488",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(243,212,136,0.5)",
                  }}
                >
                  <Calendar size={18} style={{ color: "#f3d488" }} />
                </div>
                <span
                  style={{
                    fontSize: ".85rem",
                    lineHeight: 1.3,
                    color: "#ffffff",
                    textShadow: "0 2px 15px rgba(0,0,0,0.9)",
                  }}
                >
                  <b
                    style={{
                      color: "#f3d488",
                      display: "block",
                      fontSize: ".95rem",
                      fontWeight: 600,
                    }}
                  >
                    23rd SEP 2026
                  </b>
                  Event Dates
                </span>
              </div>

              <div
                className="etes-hero-stat"
                style={{ display: "flex", alignItems: "center", gap: 12 }}
              >
                <div
                  className="ic"
                  style={{
                    background: "rgba(0,0,0,0.5)",
                    borderColor: "#f3d488",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(243,212,136,0.5)",
                  }}
                >
                  <MapPin size={18} style={{ color: "#f3d488" }} />
                </div>
                <span
                  style={{
                    fontSize: ".85rem",
                    lineHeight: 1.3,
                    color: "#ffffff",
                    textShadow: "0 2px 15px rgba(0,0,0,0.9)",
                  }}
                >
                  <b
                    style={{
                      color: "#f3d488",
                      display: "block",
                      fontSize: ".95rem",
                      fontWeight: 600,
                    }}
                  >
                    Scope Complex
                  </b>
                  New Delhi
                </span>
              </div>

              <div
                className="etes-hero-stat"
                style={{ display: "flex", alignItems: "center", gap: 12 }}
              >
                <div
                  className="ic"
                  style={{
                    background: "rgba(0,0,0,0.5)",
                    borderColor: "#f3d488",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(243,212,136,0.5)",
                  }}
                >
                  <Users size={18} style={{ color: "#f3d488" }} />
                </div>
                <span
                  style={{
                    fontSize: ".85rem",
                    lineHeight: 1.3,
                    color: "#ffffff",
                    textShadow: "0 2px 15px rgba(0,0,0,0.9)",
                  }}
                >
                  <b
                    style={{
                      color: "#f3d488",
                      display: "block",
                      fontSize: ".95rem",
                      fontWeight: 600,
                    }}
                  >
                    50+
                  </b>
                  Participants
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}