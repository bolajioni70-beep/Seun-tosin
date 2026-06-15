"use client";

export default function LocationSection() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[#800000] text-center px-8">
      <div className="max-w-2xl bg-[#FFF8E7] bg-opacity-90 p-8 rounded-lg shadow-2xl border-4 border-[#FFD700]">
        <h2 className="text-4xl font-bold text-[#800000] mb-6">Wedding Location</h2>
        <p className="text-lg leading-relaxed text-[#333] mb-4">
          Join us at our chosen venue for a day of love and celebration.
        </p>
        <img
          src="/images/location.png"
          alt="Wedding Location"
          className="rounded-lg shadow-lg border-2 border-[#FFD700]"
        />
      </div>
    </section>
  );
}
