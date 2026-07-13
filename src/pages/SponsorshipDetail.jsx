import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import platinum from "../assets/SponsorshipLogo/platinum.png";
import gold from "../assets/SponsorshipLogo/gold.png";
import silver from "../assets/SponsorshipLogo/silver.png";
import exhibition from "../assets/SponsorshipLogo/exhibition.png";
import kit from "../assets/SponsorshipLogo/kit.png";
import logo from "../assets/SponsorshipLogo/logo.png";
const SponsorshipDetail = () => {
  const { type } = useParams();
  const navigate = useNavigate();

const sponsorData = {
  "platinum-sponsor": {
    title: "Platinum Sponsor",
    price: 600000,
    image: platinum,
    benefits: [
      "Premium logo placement across all event branding",
      "Large exhibition booth",
      "Speaking opportunity during conference",
      "Social media promotions",
      "Website logo with backlink",
      "VIP networking access",
    ],
  },

  "gold-sponsor": {
    title: "Gold Sponsor",
    price: 500000,
    image: gold,
    benefits: [
      "Logo on event branding",
      "Medium exhibition booth",
      "Website listing",
      "Social media mentions",
      "VIP passes",
    ],
  },

  "silver-sponsor": {
    title: "Silver Sponsor",
    price: 300000,
    image: silver,
    benefits: [
      "Logo on website",
      "Exhibition booth",
      "Delegate passes",
      "Social media mention",
    ],
  },

  "exhibition-stall": {
    title: "Exhibition Stall",
    price: 80000,
    image: exhibition,
    benefits: [
      "Logo displayed as Stall Exhibitor",
      "2x3 metre exhibition stall",
      "4 delegate passes",
      "Brand promotion",
      "Networking opportunities",
    ],
  },

  "kit-sponsor": {
    title: "Kit Sponsor",
    price: 200000,
    image: kit,
    benefits: [
      "Logo on delegate kits",
      "4 delegate passes",
      "Newsletter promotion",
      "Social media promotion",
    ],
  },

  "logo-sponsor": {
    title: "Logo Sponsor",
    price: 60000,
    image: logo,
    benefits: [
      "Logo on website",
      "Brand promotion",
      "3 delegate passes",
      "Newsletter promotion",
    ],
  },
};

  const sponsor = sponsorData[type];
  const [qty, setQty] = useState(1);

  if (!sponsor) {
    return (
      <div className="min-h-screen flex justify-center items-center text-3xl font-bold">
        Sponsor Not Found
      </div>
    );
  }

  const total = sponsor.price * qty;

  return (
    // pt-28/pt-32 pushes content below a fixed navbar; adjust to match your navbar height
    <section className="bg-white pt-28 pb-20 md:pt-32 min-h-screen flex items-center">
      <div className="max-w-6xl w-full mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT */}
          <div className="bg-gray-100 rounded-2xl p-6 flex items-center justify-center">
            <img
              src={sponsor.image}
              alt={sponsor.title}
              className="w-full h-[320px] md:h-[420px] object-contain"
            />
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              {sponsor.title}
            </h1>

            <p className="text-2xl md:text-3xl font-bold text-yellow-600 mt-4">
              ₹{sponsor.price.toLocaleString("en-IN")}
            </p>

            <hr className="my-4 w-full" />

            <h3 className="font-semibold text-lg md:text-xl mb-4">Quantity</h3>

            <div className="flex items-center gap-4">
              <button
                onClick={() => qty > 1 && setQty(qty - 1)}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-lg leading-none hover:bg-gray-100 active:scale-95 transition"
              >
                −
              </button>

              <span className="text-lg font-bold w-8 text-center">{qty}</span>

              <button
                onClick={() => setQty(qty + 1)}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-lg leading-none hover:bg-gray-100 active:scale-95 transition"
              >
                +
              </button>
            </div>

            <div className="mt-8 w-full">
              <h3 className="text-lg md:text-xl font-semibold">Total</h3>
              <p className="text-2xl md:text-3xl text-yellow-600 font-bold mt-1">
                ₹{total.toLocaleString("en-IN")}
              </p>
            </div>

           <button
  onClick={() =>
    navigate("/booking", {
      state: {
        sponsor,
        qty,
        total,
      },
    })
  }
  className="mt-8 w-full py-3 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold transition duration-300"
>
  Book Now
</button>

            <div className="mt-10 w-full">
              <h2 className="text-lg md:text-xl font-bold mb-4">
                Sponsorship Benefits
              </h2>

              <ul className="space-y-3 text-left">
                {sponsor.benefits.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-yellow-500 text-xl leading-none">
                      ✔
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipDetail;
