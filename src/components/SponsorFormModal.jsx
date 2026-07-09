import { useState } from "react";
import {
  X,
  Building2,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Globe,
  Send,
  Award,
} from "lucide-react";

export default function SponsorFormModal({ open, onClose, packageName }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    designation: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    message: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      ...formData,
      packageName,
    });
    alert("Thank you! Our team will contact you soon.");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-8 py-6 flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2">
              <Award className="w-7 h-7 text-black" />
              <h2 className="text-2xl font-bold text-black">
                Sponsor Registration
              </h2>
            </div>
            <p className="text-black/80 text-sm mt-0.5">
              ETES 2026 Sponsorship Enquiry
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-black/10 rounded-full transition-colors"
          >
            <X size={26} className="text-black" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="text-xs font-semibold text-gray-600 flex items-center gap-1.5">
                <User size={14} className="text-yellow-500" />
                Full Name
              </label>
              <input
                name="name"
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2.5 border-2 border-gray-200 rounded-xl outline-none focus:border-yellow-400 transition-colors text-sm"
                required
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="text-xs font-semibold text-gray-600 flex items-center gap-1.5">
                <Building2 size={14} className="text-yellow-500" />
                Company Name
              </label>
              <input
                name="company"
                placeholder="Enter company name"
                value={formData.company}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2.5 border-2 border-gray-200 rounded-xl outline-none focus:border-yellow-400 transition-colors text-sm"
                required
              />
            </div>

            {/* Designation */}
            <div>
              <label className="text-xs font-semibold text-gray-600 flex items-center gap-1.5">
                <Briefcase size={14} className="text-yellow-500" />
                Designation
              </label>
              <input
                name="designation"
                placeholder="Your designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2.5 border-2 border-gray-200 rounded-xl outline-none focus:border-yellow-400 transition-colors text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-xs font-semibold text-gray-600 flex items-center gap-1.5">
                <Mail size={14} className="text-yellow-500" />
                Email Address
              </label>
              <input
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2.5 border-2 border-gray-200 rounded-xl outline-none focus:border-yellow-400 transition-colors text-sm"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-xs font-semibold text-gray-600 flex items-center gap-1.5">
                <Phone size={14} className="text-yellow-500" />
                Mobile Number
              </label>
              <input
                name="phone"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2.5 border-2 border-gray-200 rounded-xl outline-none focus:border-yellow-400 transition-colors text-sm"
                required
              />
            </div>

            {/* City */}
            <div>
              <label className="text-xs font-semibold text-gray-600 flex items-center gap-1.5">
                <MapPin size={14} className="text-yellow-500" />
                City
              </label>
              <input
                name="city"
                placeholder="Your city"
                value={formData.city}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2.5 border-2 border-gray-200 rounded-xl outline-none focus:border-yellow-400 transition-colors text-sm"
              />
            </div>

            {/* Country */}
            <div>
              <label className="text-xs font-semibold text-gray-600 flex items-center gap-1.5">
                <Globe size={14} className="text-yellow-500" />
                Country
              </label>
              <input
                name="country"
                placeholder="Your country"
                value={formData.country}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2.5 border-2 border-gray-200 rounded-xl outline-none focus:border-yellow-400 transition-colors text-sm"
              />
            </div>

            {/* Selected Package */}
            <div>
              <label className="text-xs font-semibold text-gray-600 flex items-center gap-1.5">
                <Award size={14} className="text-yellow-500" />
                Selected Package
              </label>
              <input
                value={packageName || "Not selected"}
                readOnly
                className="w-full mt-1 px-4 py-2.5 border-2 border-yellow-200 bg-yellow-50 rounded-xl outline-none text-sm font-semibold text-gray-700 cursor-default"
              />
            </div>
          </div>

          {/* Message - Full Width */}
          <div>
            <label className="text-xs font-semibold text-gray-600">
              Message
            </label>
            <textarea
              rows={3}
              name="message"
              onChange={handleChange}
              value={formData.message}
              placeholder="Tell us about your sponsorship requirements..."
              className="w-full mt-1 px-4 py-2.5 border-2 border-gray-200 rounded-xl outline-none focus:border-yellow-400 transition-colors text-sm resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl border-2 border-gray-200 font-semibold text-gray-600 hover:bg-gray-50 transition-colors text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-yellow-500 hover:bg-yellow-600 text-black font-bold transition-colors shadow-lg shadow-yellow-500/30 flex items-center gap-2 text-sm"
            >
              <Send size={16} />
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
