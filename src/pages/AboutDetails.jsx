import React from "react";

export default function AboutDetails() {

  // Sirf ye URL change karna hoga
  const youtubeUrl = "https://www.youtube.com/watch?v=YOUR_VIDEO_ID";

  // Automatically Embed URL ban jayega
  const embedUrl = youtubeUrl.replace("watch?v=", "embed/");

  return (
    <div className="bg-[#fafafa] min-h-screen pt-28 pb-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="uppercase tracking-[5px] text-yellow-600 font-semibold">
            About ETES
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-5 leading-tight">
            The Story of ETES
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg leading-8">
            A journey of innovation, collaboration and technological excellence
            in the electrical & energy industry.
          </p>

        </div>

        {/* Content */}

       

          <div className="space-y-8 text-gray-700 leading-9 text-lg">

            <p>
              It all began in <b>2022</b>, when the world of electrical,
              technology and energy was rapidly evolving. The industry needed a
              platform where visionaries, experts and innovators could come
              together to share ideas and build partnerships.
            </p>

            <p>
              Recognizing this need, <b>Electrical Mirror Magazine</b> created
              the <b>Emerging Technologies on Electrical Systems (ETES)</b>,
              bringing together manufacturers, utilities, consultants,
              technology providers and global experts.
            </p>

            <p>
              The first ETES became a huge success. Every edition has expanded
              in scale, attracting industry leaders, researchers, policymakers
              and solution providers from across India and abroad.
            </p>

            <p>
              ETES 2026 will focus on cutting-edge technologies, renewable
              energy, smart grids, AI, automation, testing equipment,
              transmission systems and sustainable power solutions.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12">
              Key Discussion Areas
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mt-6">

              <div className="bg-yellow-50 p-5 rounded-xl">
                ✔ Advanced Electrical Systems
              </div>

              <div className="bg-yellow-50 p-5 rounded-xl">
                ✔ Automation & Testing
              </div>

              <div className="bg-yellow-50 p-5 rounded-xl">
                ✔ Fire Safety
              </div>

              <div className="bg-yellow-50 p-5 rounded-xl">
                ✔ UPS & Batteries
              </div>

              <div className="bg-yellow-50 p-5 rounded-xl">
                ✔ Transmission Systems
              </div>

              <div className="bg-yellow-50 p-5 rounded-xl">
                ✔ Renewable Energy
              </div>

            </div>

       

        </div>

        {/* Video */}

        <div className="mt-24">

          <h2 className="text-4xl font-bold text-center mb-10">
            Watch Highlights from Previous Conference
          </h2>

          <div className="overflow-hidden rounded-3xl shadow-2xl max-w-5xl mx-auto">

            <iframe
              src={embedUrl}
              title="ETES Video"
              className="w-full aspect-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

          </div>

        </div>

      </div>

    </div>
  );
}