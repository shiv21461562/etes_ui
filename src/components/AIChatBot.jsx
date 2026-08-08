// import { useState, useRef, useEffect } from "react";
// import { X, Send, Minimize2, Maximize2, Mic } from "lucide-react";

// const URL_REGEX = /(https?:\/\/[^\s]+)/g;

// function Linkified({ text }) {
//   const parts = text.split(URL_REGEX);
//   return (
//     <>
//       {parts.map((part, i) =>
//         URL_REGEX.test(part) ? (
//           <a
//             key={i}
//             href={part}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="underline underline-offset-2 decoration-current/50 hover:decoration-current text-inherit break-all font-medium"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {part}
//           </a>
//         ) : (
//           <span key={i}>{part}</span>
//         ),
//       )}
//     </>
//   );
// }

// export default function AIChatBot() {
//   const [open, setOpen] = useState(false);
//   const [input, setInput] = useState("");
//   const [isMinimized, setIsMinimized] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       sender: "ai",
//       text: "👋 Welcome to ETES 2026!\n\nI am your ETES AI Assistant.how can I help you today? 😊",
//       timestamp: new Date().toLocaleTimeString(),
//     },
//   ]);
//   const [listening, setListening] = useState(false);
//   const messagesEndRef = useRef(null);
//   const inputRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   useEffect(() => {
//     if (open) {
//       inputRef.current?.focus();
//     }
//   }, [open, isMinimized]);

//   const quickReplies = [
//     { label: "📍 Venue", value: "Venue" },
//     { label: "🎟 Register", value: "Register" },
//     { label: "🤝 Sponsor", value: "Sponsor" },
//     { label: "📞 Contact", value: "Contact" },
//     { label: "ℹ About", value: "About ETES" },
//   ];

//   const knowledgeBase = {
//     venue: {
//       keywords: ["venue", "location", "address", "map", "direction", "scope"],
//       response: `📍 ETES 2026 Venue

// Scope Complex
// Lodhi Road,
// Institutional Area,
// Lodi Colony,
// New Delhi - 110003

// 📅 Event Date
// 23 September 2026

// 🗺 Google Map
// https://maps.google.com/?q=SCOPE+Complex+Lodhi+Road+New+Delhi`,
//     },
//     register: {
//       keywords: [
//         "register",
//         "registration",
//         "ticket",
//         "pass",
//         "visitor",
//         "delegate",
//       ],
//       response: `🎟 Registration

// Register here:
// https://www.etesevent.com/register

// Available Passes

// • Visitor Pass
// • Delegate Pass
// • Speaker Registration

// Fill the registration form and our team will contact you shortly.`,
//     },
//     contact: {
//       keywords: ["contact", "phone", "email", "call", "support", "whatsapp"],
//       response: `📞 Contact

// WhatsApp Support
// +91 98731 68426

// 📧 Inquiry
// Neha Chauhan, Head of Marketing
// neha@electricalmirror.net
// +91 7428693331

// ------------------------

// 📧 Stall Booking
// Hemant, Manager - Sales
// hemant@electricalmirror.net
// +91 9999395282`,
//     },
//     sponsorship: {
//       keywords: ["sponsor", "stall", "exhibitor", "branding"],
//       response: `🤝 Sponsorship Packages

// 🥇 Platinum — ₹8,00,000 + GST
// 🥈 Gold — ₹6,00,000 + GST
// 🥉 Silver — ₹3,00,000 + GST
// 🎁 Kit Sponsor — ₹2,00,000 + GST
// 🏢 Exhibition Stall — ₹80,000 + GST
// 🏷 Logo Sponsor — ₹60,000 + GST

// More Details
// https://www.etesevent.com/sponsorship`,
//     },
//     about: {
//       keywords: ["about", "etes", "event", "conference"],
//       response: `International Electrical Energy Business Event.

// The event brings together

// • Manufacturers
// • EPC Companies
// • Consultants
// • Government Officials
// • Technology Providers

// for networking, exhibitions and business opportunities.`,
//     },
//   };

//   const generateAIResponse = (question) => {
//     const q = question.toLowerCase();
//     for (const key in knowledgeBase) {
//       const item = knowledgeBase[key];
//       if (item.keywords.some((word) => q.includes(word))) {
//         return item.response;
//       }
//     }
//     return `😊 I can help you with:

// 📍 Venue
// 🎟 Registration
// 🤝 Sponsorship
// 📞 Contact
// ℹ About ETES

// Please ask me anything related to ETES 2026.`;
//   };

//   const speakText = (text) => {
//     if (!("speechSynthesis" in window)) return;
//     window.speechSynthesis.cancel();
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = "en-IN";
//     utterance.rate = 1;
//     utterance.pitch = 1;
//     utterance.volume = 1;
//     const voices = window.speechSynthesis.getVoices();
//     const femaleVoice = voices.find(
//       (voice) =>
//         voice.lang.includes("en") &&
//         (voice.name.includes("Google") ||
//           voice.name.includes("Female") ||
//           voice.name.includes("Microsoft")),
//     );
//     if (femaleVoice) utterance.voice = femaleVoice;
//     window.speechSynthesis.speak(utterance);
//   };

//   // Replies now come back immediately — no artificial "thinking" delay,
//   // so a second question can be asked right away without waiting.
//   const sendMessage = (messageText) => {
//     const text = (messageText ?? input).trim();
//     if (!text) return;

//     const userMessage = {
//       id: Date.now(),
//       sender: "user",
//       text,
//       timestamp: new Date().toLocaleTimeString(),
//     };

//     const reply = generateAIResponse(text);
//     const aiResponse = {
//       id: Date.now() + 1,
//       sender: "ai",
//       text: reply,
//       timestamp: new Date().toLocaleTimeString(),
//     };

//     setMessages((prev) => [...prev, userMessage, aiResponse]);
//     setInput("");
//     speakText(reply);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       sendMessage();
//     }
//   };

//   const startListening = () => {
//     const SpeechRecognition =
//       window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SpeechRecognition) {
//       alert("Speech Recognition is not supported in this browser.");
//       return;
//     }
//     const recognition = new SpeechRecognition();
//     recognition.lang = "en-IN";
//     recognition.continuous = false;
//     recognition.interimResults = false;

//     setListening(true);
//     recognition.start();

//     recognition.onresult = (event) => {
//       const transcript = event.results[0][0].transcript;
//       setInput(transcript);
//       setListening(false);
//     };
//     recognition.onerror = () => setListening(false);
//     recognition.onend = () => setListening(false);
//   };

//   const toggleMinimize = () => setIsMinimized((v) => !v);

//   useEffect(() => {
//     window.speechSynthesis.getVoices();
//     window.speechSynthesis.onvoiceschanged = () => {
//       window.speechSynthesis.getVoices();
//     };
//   }, []);

//   // Voice replies are fine while the chat is open, but the moment the
//   // user closes or minimizes it, stop talking immediately.
//   useEffect(() => {
//     if (!open || isMinimized) {
//       window.speechSynthesis?.cancel();
//     }
//   }, [open, isMinimized]);

//   return (
//     <>
//       {/* Floating AI Button */}
//       <div className="fixed -bottom-4 left-1/2 -translate-x-1/2 z-[9999] flex flex-col items-center">
//         {!open && (
//           <div className="absolute top-[58%] right-full -mr-3 -translate-y-1/2 flex items-center animate-[float_3s_ease-in-out_infinite]">
//             {/* speed-line trail, like the reference art */}
//             <div className="hidden sm:flex flex-col gap-2 mr-[-2px]">
//               <span className="h-[2px] w-9 bg-gradient-to-r from-transparent via-yellow-400/60 to-yellow-400/80 rounded-full" />
//               <span className="h-[2px] w-14 bg-gradient-to-r from-transparent via-yellow-400/60 to-yellow-400/80 rounded-full" />
//               <span className="h-[2px] w-7 bg-gradient-to-r from-transparent via-yellow-400/60 to-yellow-400/80 rounded-full" />
//             </div>
//             <div className="assist-bubble flex items-center gap-1.5 pl-3 pr-4 py-1.5 whitespace-nowrap">
//               <span className="text-xl leading-none">👋</span>
//               <span className="text-white text-[14px] font-medium">
//                 How can I help you?
//               </span>
//             </div>
//           </div>
//         )}
//         <button
//           onClick={() => setOpen(!open)}
//           aria-label={open ? "Close chat" : "Open ETES AI chat"}
//           className="w-40 h-40 flex items-center justify-center hover:scale-110 transition-all duration-300"
//         >
//           {open ? (
//             <X
//               size={28}
//               className="text-black group-hover:rotate-90 transition-transform duration-300"
//             />
//           ) : (
//             <img
//               src="/ai/ai-gif2.gif"
//               alt="AI"
//               className="w-full h-full object-contain"
//             />
//           )}
//         </button>
//       </div>

//       {/* Chat Window */}
//       {open && (
//         <div
//           className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] w-[420px] max-w-[92vw] rounded-3xl overflow-hidden bg-white border border-yellow-500/20 shadow-[0_25px_90px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col ${
//             isMinimized ? "h-[72px]" : "h-[620px]"
//           }`}
//         >
//           {/* Header */}
//           <div
//             className="h-[72px] shrink-0 px-4 flex items-center justify-between bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 cursor-pointer select-none"
//             onClick={toggleMinimize}
//           >
//             <div className="flex items-center gap-3 min-w-0">
//               <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 bg-white/40">
//                 <img
//                   src="/ai/ai-gif2.gif"
//                   alt="AI"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <div className="min-w-0">
//                 <h2 className="font-bold text-black text-lg leading-tight truncate">
//                   ETES AI Assistant
//                 </h2>
//                 <p className="text-xs text-black/60 flex items-center gap-1.5">
//                   <span className="w-2 h-2 bg-emerald-600 rounded-full inline-block animate-pulse" />
//                   Online • Replies instantly
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center gap-1 shrink-0">
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   toggleMinimize();
//                 }}
//                 aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
//                 className="text-black/70 hover:text-black transition p-2 rounded-lg hover:bg-black/10"
//               >
//                 {isMinimized ? (
//                   <Maximize2 size={18} />
//                 ) : (
//                   <Minimize2 size={18} />
//                 )}
//               </button>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setOpen(false);
//                 }}
//                 aria-label="Close chat"
//                 className="text-black/70 hover:text-black transition p-2 rounded-lg hover:bg-black/10"
//               >
//                 <X size={18} />
//               </button>
//             </div>
//           </div>

//           {!isMinimized && (
//             <>
//               {/* Chat Body */}
//               <div className="flex-1 min-h-0 overflow-y-auto px-4 py-4 space-y-4 custom-scrollbar">
//                 {messages.map((msg) => (
//                   <div
//                     key={msg.id}
//                     className={`flex items-end gap-2.5 ${
//                       msg.sender === "user" ? "flex-row-reverse" : ""
//                     }`}
//                   >
//                     {msg.sender === "ai" && (
//                       <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 shadow-[0_1px_4px_rgba(234,179,8,0.4)] ring-1 ring-yellow-500/20 bg-white">
//                         <img
//                           src="/ai/ai-gif2.gif"
//                           alt="AI"
//                           className="w-full h-full object-contain"
//                         />
//                       </div>
//                     )}
//                     {msg.sender === "user" && (
//                       <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center text-base flex-shrink-0 shadow-md">
//                         👤
//                       </div>
//                     )}
//                     <div
//                       className={`px-4 py-3 rounded-2xl max-w-[78%] whitespace-pre-line ${
//                         msg.sender === "user"
//                           ? "bg-gradient-to-br from-yellow-400 to-amber-500 text-black rounded-br-md shadow-md"
//                           : "bg-gray-100 text-gray-800 rounded-bl-md border border-gray-200"
//                       }`}
//                     >
//                       <div className="text-[13.5px] leading-relaxed">
//                         <Linkified text={msg.text} />
//                       </div>
//                       <div
//                         className={`text-[10px] mt-1.5 ${
//                           msg.sender === "user"
//                             ? "text-black/50"
//                             : "text-gray-400"
//                         }`}
//                       >
//                         {msg.timestamp}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//                 <div ref={messagesEndRef} />
//               </div>

//               {/* Quick Replies */}
//               <div className="px-4 py-2.5 border-t border-gray-100 bg-white shrink-0">
//                 <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
//                   {quickReplies.map((reply, idx) => (
//                     <button
//                       key={idx}
//                       onClick={() => sendMessage(reply.value)}
//                       className="flex-shrink-0 bg-gray-100 hover:bg-yellow-500 hover:text-black transition-all px-4 py-2 rounded-full text-[13px] text-gray-700 whitespace-nowrap border border-gray-200 hover:border-yellow-500 font-medium"
//                     >
//                       {reply.label}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Input Area */}
//               <div className="border-t border-gray-100 p-3.5 bg-white shrink-0">
//                 <div className="flex items-center gap-2.5">
//                   <input
//                     ref={inputRef}
//                     type="text"
//                     placeholder="Ask anything..."
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     onKeyDown={handleKeyDown}
//                     className="flex-1 bg-gray-100 rounded-xl px-4 py-3 text-gray-800 outline-none text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-500/50 transition min-w-0"
//                   />
//                   <button
//                     onClick={startListening}
//                     aria-label="Voice input"
//                     className={`w-11 h-11 rounded-xl transition flex items-center justify-center shrink-0 ${
//                       listening
//                         ? "bg-red-500 text-white animate-pulse"
//                         : "bg-gray-100 text-yellow-600 hover:bg-gray-200"
//                     }`}
//                   >
//                     <Mic size={19} />
//                   </button>
//                   <button
//                     onClick={() => sendMessage()}
//                     disabled={!input.trim()}
//                     aria-label="Send message"
//                     className="w-11 h-11 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 hover:brightness-105 text-black flex items-center justify-center transition disabled:opacity-40 shrink-0"
//                   >
//                     <Send size={20} />
//                   </button>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       )}

//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-3px); }
//         }
//         .assist-bubble {
//           position: relative;
//           background: linear-gradient(135deg, rgba(10,10,10,0.75), rgba(30,20,5,0.6));
//           border: 1.5px solid rgba(250,204,21,0.85);
//           border-radius: 999px;
//           backdrop-filter: blur(6px);
//           box-shadow:
//             0 0 18px rgba(250,204,21,0.45),
//             0 0 45px rgba(250,204,21,0.18),
//             inset 0 0 16px rgba(250,204,21,0.08);
//         }
//         .assist-bubble::after {
//           content: "";
//           position: absolute;
//           top: 50%;
//           right: -13px;
//           width: 20px;
//           height: 20px;
//           transform: translateY(-50%) rotate(45deg);
//           background: linear-gradient(135deg, rgba(10,10,10,0.75), rgba(30,20,5,0.6));
//           border-top: 1.5px solid rgba(250,204,21,0.85);
//           border-right: 1.5px solid rgba(250,204,21,0.85);
//           border-radius: 0 4px 0 0;
//           box-shadow: 3px -3px 10px rgba(250,204,21,0.25);
//         }
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 4px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: transparent;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: #eab308;
//           border-radius: 20px;
//         }
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </>
//   );
// }
