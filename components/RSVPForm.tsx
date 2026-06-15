"use client";

import { useState } from "react";

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "",
    guests: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your RSVP! We look forward to celebrating with you.");
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[#800000] text-center px-8">
      <div className="max-w-2xl bg-[#FFF8E7] bg-opacity-90 p-8 rounded-lg shadow-2xl border-4 border-[#FFD700]">
        <h2 className="text-4xl font-bold text-[#800000] mb-6">RSVP</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {/* Name */}
          <div>
            <label className="block text-[#800000] font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded border border-[#FFD700]"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#800000] font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded border border-[#FFD700]"
              required
            />
          </div>

          {/* Attending */}
          <div>
            <label className="block text-[#800000] font-semibold mb-2">Will you attend?</label>
            <select
              name="attending"
              value={formData.attending}
              onChange={handleChange}
              className="w-full p-2 rounded border border-[#FFD700]"
              required
            >
              <option value="">Select</option>
              <option value="yes">Yes, I will attend</option>
              <option value="no">Sorry, I cannot attend</option>
            </select>
          </div>

          {/* Guests */}
          <div>
            <label className="block text-[#800000] font-semibold mb-2">Number of Guests</label>
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full p-2 rounded border border-[#FFD700]"
              min="0"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-4 w-full py-3 bg-[#FFD700] text-[#800000] rounded-lg shadow hover:bg-yellow-500 font-semibold"
          >
            Submit RSVP
          </button>
        </form>
      </div>
    </section>
  );
}
