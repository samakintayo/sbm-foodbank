import { useState } from "react";
import { supabase } from "../supabaseClient";
import { Heart } from "lucide-react";
import SubmissionModal from "./SubmissionModal";

const FoodSupportForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    householdSize: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Handle input change
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Submit form to Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from("food_bank_requests").insert([formData]);

      if (error) {
        console.error(error);
        alert("Failed to submit your request. Please try again.");
      } else {
        setShowModal(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          address: "",
          postalCode: "",
          householdSize: "",
          message: "",
        });
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto bg-white/90 shadow-xl rounded-2xl px-6 py-8 md:px-8 border border-gray-100 overflow-hidden">
      {/* Modal */}
      <SubmissionModal show={showModal} onClose={() => setShowModal(false)} />

      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex justify-center mb-3">
          <Heart className="h-10 w-10 text-purple-700" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-purple-900">
          Request Food Support
        </h2>
        <p className="text-gray-600 text-sm md:text-base mt-1">
          Fill out the form below and our team will contact you to arrange
          emergency food support.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-purple-600 focus:outline-none"
          />
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-purple-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Phone *
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-purple-600 focus:outline-none"
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Address *
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Enter your address"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-purple-600 focus:outline-none"
          />
        </div>

        {/* Postal Code & Household Size */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Postal Code *
            </label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
              placeholder="Enter your postal code"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-purple-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Household Size *
            </label>
            <input
              type="number"
              name="householdSize"
              value={formData.householdSize}
              onChange={handleChange}
              required
              placeholder="Number of people in household"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-purple-600 focus:outline-none"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Message / Additional Details
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Please share any additional information..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm min-h-[100px] focus:ring-2 focus:ring-purple-600 focus:outline-none resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-purple-700 to-yellow-500 hover:opacity-90"
          } text-white font-semibold py-3 rounded-lg shadow-md transition-all text-base`}
        >
          {loading ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
};

export default FoodSupportForm;
