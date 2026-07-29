import { useEffect, useState } from "react";
import { FaWhatsapp, FaTimes, FaCommentDots } from "react-icons/fa";

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);

  // Typing State
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");

  const phone = "919910228914";

  const msg1 = "👋 Hello!";
  const msg2 = "Welcome to ETES 2026.";
  const msg3 =
    "India's Premier Energy & Technology Event.\nHow can we help you today?";

  useEffect(() => {
    if (!open) {
      setText1("");
      setText2("");
      setText3("");
      return;
    }

    let i = 0;
    let j = 0;
    let k = 0;

    const interval1 = setInterval(() => {
      setText1(msg1.slice(0, i + 1));
      i++;

      if (i === msg1.length) {
        clearInterval(interval1);

        const interval2 = setInterval(() => {
          setText2(msg2.slice(0, j + 1));
          j++;

          if (j === msg2.length) {
            clearInterval(interval2);

            const interval3 = setInterval(() => {
              setText3(msg3.slice(0, k + 1));
              k++;

              if (k === msg3.length) {
                clearInterval(interval3);
              }
            }, 25);
          }
        }, 35);
      }
    }, 40);

    return () => {
      clearInterval(interval1);
    };
  }, [open]);

  const sendMessage = (text) => {
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <>
      {/* Floating Button */}

      <div
        className="fixed bottom-6 right-6 z-[999]"
        onMouseEnter={() => setOpen(true)}
      >
        <div className="relative">

          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40"></div>

          <button className="relative w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:scale-110 transition">

            <FaWhatsapp className="text-white text-4xl" />

          </button>

        </div>
      </div>

      {/* Popup */}

      {open && (
        <div
          className="fixed bottom-24 right-6 w-[340px] max-w-[92%] rounded-3xl overflow-hidden bg-white shadow-2xl z-[999]"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {/* Header */}

          <div className="bg-[#075E54] text-white p-4 relative">

            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4"
            >
              <FaTimes />
            </button>

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center">

                <FaWhatsapp className="text-white text-2xl"/>

              </div>

              <div>

                <h3 className="font-bold">
                  ETES Support
                </h3>

                <p className="text-xs opacity-80">
                  🟢 Online
                </p>

              </div>

            </div>

          </div>

          {/* Chat */}

          <div className="bg-[#ECE5DD] p-4 h-[290px] overflow-y-auto space-y-3">

            <div className="bg-white rounded-2xl px-4 py-3 w-fit max-w-[85%] shadow">

              {text1}
              {text1 !== msg1 && (
                <span className="animate-pulse">|</span>
              )}

            </div>

            {text1 === msg1 && (
              <div className="bg-white rounded-2xl px-4 py-3 w-fit max-w-[90%] shadow whitespace-pre-line">

                {text2}
                {text2 !== msg2 && (
                  <span className="animate-pulse">|</span>
                )}

              </div>
            )}

            {text2 === msg2 && (
              <div className="bg-white rounded-2xl px-4 py-3 w-fit max-w-[95%] shadow whitespace-pre-line">

                {text3}
                {text3 !== msg3 && (
                  <span className="animate-pulse">|</span>
                )}

              </div>
            )}

          </div>

          {/* Footer */}

          <div className="p-4 bg-white border-t">

            <button
              onClick={() =>
                sendMessage(
                  "Hello ETES Team, I need more information."
                )
              }
              className="w-full bg-[#25D366] text-white rounded-full py-3 font-semibold flex items-center justify-center gap-2 hover:bg-green-600 transition"
            >

              <FaCommentDots />

              Chat on WhatsApp

            </button>

          </div>

        </div>
      )}
    </>
  );
};

export default WhatsAppButton;