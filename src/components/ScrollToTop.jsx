import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // agar animation nahi chahiye to "auto" kar do
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;