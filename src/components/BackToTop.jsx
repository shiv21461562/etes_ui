import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goTop = () => {
    const start = window.pageYOffset;
    const duration = 1200; // 1.2 sec

    let startTime = null;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const ease = easeInOutCubic(progress);

      window.scrollTo(0, start * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  if (!show) return null;

  return (
<button
  onClick={goTop}
  className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-yellow-500 hover:bg-yellow-400 text-black shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
>
  <ArrowUp size={20} />
</button>
  );
};

export default BackToTop;
