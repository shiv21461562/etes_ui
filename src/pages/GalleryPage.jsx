import React, { useState } from "react";
import { ZoomIn, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop",
];

export default function GalleryPage() {
  const [selected, setSelected] = useState(null);

  const nextImage = () => {
    setSelected((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setSelected((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}

      <section className="py-20 text-center px-5">
        <span className="uppercase tracking-[6px] text-sm font-semibold text-yellow-600">
          Gallery
        </span>

        <h1 className="text-5xl md:text-6xl font-bold mt-5 text-gray-900">
          Event Highlights
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-gray-600 text-lg leading-8">
          Explore unforgettable moments from our exhibitions, conferences,
          networking sessions and keynote speeches.
        </p>
      </section>

      {/* Gallery */}

      <section className="pb-20 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelected(index)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={img}
                alt=""
                className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <ZoomIn className="text-yellow-600" size={22} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-yellow-500 hover:bg-yellow-600 text-white font-semibold transition">
            View Full Gallery
          </button>
        </div>
      </section>

      {/* Modal */}

      {selected !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          {/* Close */}

          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition"
          >
            <X />
          </button>

          {/* Previous */}

          <button
            onClick={prevImage}
            className="absolute left-5 md:left-10 w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition"
          >
            <ChevronLeft />
          </button>

          {/* Image */}

          <img
            src={galleryImages[selected]}
            alt=""
            className="max-w-[92%] max-h-[88vh] rounded-xl shadow-2xl object-contain"
          />

          {/* Next */}

          <button
            onClick={nextImage}
            className="absolute right-5 md:right-10 w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
