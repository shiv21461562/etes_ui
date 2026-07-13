import { useLocation } from "react-router-dom";
import { useState } from "react";
import {
  createBooking,
  createOrder,
  verifyPayment,
} from "../services/bookingApi";

const BookingForm = () => {
  const { state } = useLocation();

  const sponsor = state?.sponsor;
  const qty = state?.qty;
  const total = state?.total;

  const [formData, setFormData] = useState({
    company: "",
    contactPerson: "",
    email: "",
    phone: "",
    gst: "",
    address: "",
    city: "",
    state: "",
    country: "India",
  });

  const [bookingId, setBookingId] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // book
  const handleBookNow = async (e) => {
    e.preventDefault();

    try {
      let id = bookingId;

      if (!id) {
        const bookingRes = await createBooking({
          company: formData.company,
          contactPerson: formData.contactPerson,
          email: formData.email,
          phone: formData.phone,
          gst: formData.gst,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          country: formData.country,

          packageName: sponsor.title,
          quantity: qty,
          amount: total,
        });

        id = bookingRes.data.bookingId;

        setBookingId(id);

        console.log("Booking Saved", bookingRes.data);
      }
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Booking Failed");
    }
  };

  const handleProceedPayment = async (e) => {
    e.preventDefault();

    try {
      let id = bookingId;

      // Agar booking pehle save nahi hui
      if (!id) {
        const bookingRes = await createBooking({
          company: formData.company,
          contactPerson: formData.contactPerson,
          email: formData.email,
          phone: formData.phone,
          gst: formData.gst,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          country: formData.country,

          packageName: sponsor.title,
          quantity: qty,
          amount: total,
        });

        id = bookingRes.data.bookingId;
        setBookingId(id);

        console.log("Booking Saved", bookingRes.data);
      }

      // Create Razorpay Order
      const orderRes = await createOrder({
        bookingId: id,
        amount: total,
      });

      const order = orderRes.data.order;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "ETES 2026",
        description: sponsor.title,
        image: "/logo.png",
        order_id: order.id,

        handler: async function (response) {
          try {
            await verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            alert("Payment Successful 🎉");

            console.log(response);

            navigate("/thank-you");
          } catch (error) {
            console.log(error);

            alert("Payment Verification Failed");
          }
        },

        prefill: {
          name: formData.contactPerson,
          email: formData.email,
          contact: formData.phone,
        },

        theme: {
          color: "#d4a017",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <div className="min-h-screen bg-white pt-26 pb-16 px-6">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">
            Create Your Account
          </h1>
        </div>

        {/* Package Summary - Clean cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-50 rounded-xl px-4 py-3 text-center border border-gray-100">
            <p className="text-xs text-gray-400 font-medium">Package</p>
            <p className="text-sm font-semibold text-gray-800 mt-1">
              {sponsor?.title}
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl px-4 py-3 text-center border border-gray-100">
            <p className="text-xs text-gray-400 font-medium">Quantity</p>
            <p className="text-sm font-semibold text-gray-800 mt-1">{qty}</p>
          </div>
          <div className="bg-gray-50 rounded-xl px-4 py-3 text-center border border-gray-100">
            <p className="text-xs text-gray-400 font-medium">Total</p>
            <p className="text-sm font-bold text-gray-800 mt-1">
              ₹{total?.toLocaleString("en-IN")}
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                placeholder="Enter company name"
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Contact Person
              </label>
              <input
                type="text"
                name="contactPerson"
                placeholder="Enter contact person"
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@company.com"
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                GST Number
              </label>
              <input
                type="text"
                name="gst"
                placeholder="Enter GST number"
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                City
              </label>
              <input
                type="text"
                name="city"
                placeholder="Enter city"
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                State
              </label>
              <input
                type="text"
                name="state"
                placeholder="Enter state"
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-600 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all bg-gray-50"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Address
            </label>
            <textarea
              name="address"
              placeholder="Enter your address"
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all resize-none"
              rows={2}
            />
          </div>

          <div className="flex justify-center items-center gap-20 mt-6">
            <button
              type="button"
              onClick={handleBookNow}
              className="w-44 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold py-3 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition"
            >
              Book Now
            </button>

            <button
              type="button"
              onClick={handleProceedPayment}
              className="w-56 bg-gray-900 hover:bg-black text-white font-semibold py-3 rounded-lg transition"
            >
              Proceed to Payment →
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <span className="text-xs text-gray-400 flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            Secured
          </span>
          <span className="w-px h-4 bg-gray-200"></span>
          <span className="text-xs text-gray-400">SSL Encrypted</span>
          <span className="w-px h-4 bg-gray-200"></span>
          <span className="text-xs text-gray-400">2 min to complete</span>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
