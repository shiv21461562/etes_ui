import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import Register from "./pages/Register";
import Speakers from "./pages/Speakers";
import AboutDetails from "./pages/AboutDetails";
import Sponsorship from "./pages/Sponsorship";
import PrivacyPolicy from "./pages/footer/PrivacyPolicy";
import TermsConditions from "./pages/footer/TermsConditions";
import RefundPolicy from "./pages/footer/RefundPolicy";
import FAQ from "./pages/footer/FAQ";
import ScrollToTop from "./components/ScrollToTop";

import SponsorshipDetail from "./pages/SponsorshipDetail";
import BookingForm from "./pages/BookingForm";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Loader 2.5 sec dikhega

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader loading={loading} />;
  }

  return (
    <>
      {" "}
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/about-details" element={<AboutDetails />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="/sponsorship/:type" element={<SponsorshipDetail />} />
        <Route path="/booking" element={<BookingForm />} />
        

        {/* footer */}

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/terms-conditions" element={<TermsConditions />} />

        <Route path="/refund-policy" element={<RefundPolicy />} />

        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
