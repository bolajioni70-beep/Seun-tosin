"use client";

import { useState } from "react";

export default function RSVPForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [attending, setAttending] = useState("");
  const [plusOne, setPlusOne] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `RSVP Received:\nName: ${name}\nPhone: ${phone}\nAttending: ${attending}\nPlus One: ${plusOne}`
    );
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[#800000] text-center px-8">
      <div className="max-w-md bg-[#FFF8E7] bg-opacity-90 p-8 rounded-lg shadow-2xl border-4 border-[#FFD700]">
        <h2 className="text-3xl font-bold text-[#800000] mb-6">RSVP</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <label className="text-[#333] font-semibold">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border-2 border-[#FFD700] rounded-lg"
            required
          />

          <label className="text-[#333] font-semibold">Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-2 border-2 border-[#FFD700] rounded-lg"
            required
          />

          <label className="text-[#333] font-semibold">Are you attending?</label>
          <select
            value={attending}
            onChange={(e) => setAttending(e.target.value)}
            className="p-2 border-2 border-[#FFD700] rounded-lg"
            required
          >
            <option value="">Select an option</option>
            <option value="Yes">Yes, I will attend</option>
            <option value="No">No, I cannot make it</option>
          </select>

          <label className="text-[#333] font-semibold">Are you bringing a plus one?</label>
          <select
            value={plusOne}
            onChange={(e) => setPlusOne(e.target.value)}
            className="p-2 border-2 border-[#FFD700] rounded-lg"
            required
          >
            <option value="">Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-[#FFD700] text-[#800000] font-bold rounded-lg shadow hover:bg-yellow-500"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
