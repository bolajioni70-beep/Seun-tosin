"use client";

export default function GiftSection() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[#800000] text-center px-8">
      <div className="max-w-2xl bg-[#FFF8E7] bg-opacity-90 p-8 rounded-lg shadow-2xl border-4 border-[#FFD700]">
        <h2 className="text-4xl font-bold text-[#800000] mb-6">Gift Details</h2>
        <p className="text-lg leading-relaxed text-[#333] mb-4">
          Your presence is the greatest gift we could ask for.
        </p>
        <p className="text-lg leading-relaxed text-[#333] mb-4">
          However, if you wish to honor us further, we welcome contributions
          towards building our new home and future together.
        </p>
        <p className="text-lg leading-relaxed text-[#333] mb-4">
          Kindly send gifts or support through our family representatives at the
          wedding venues.
        </p>
        <p className="italic text-[#800000] font-semibold">
          Thank you for being part of our journey.
        </p>
      </div>
    </section>
  );
}
