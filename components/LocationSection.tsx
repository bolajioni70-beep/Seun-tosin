"use client";

export default function LocationSection() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[#800000] text-center px-8">
      <div className="max-w-2xl bg-[#FFF8E7] bg-opacity-90 p-8 rounded-lg shadow-2xl border-4 border-[#FFD700]">
        <h2 className="text-4xl font-bold text-[#800000] mb-6">Wedding Locations</h2>

        {/* Traditional Wedding */}
        <h3 className="text-2xl font-semibold text-[#800000] mb-2">
          Traditional Wedding
        </h3>
        <p className="text-lg text-[#333] mb-2">
          Green Bull Event Center, Orchid Lekki, Nigeria
        </p>
        <p className="italic text-[#800000] font-semibold mb-6">10:00 AM WAT</p>

        {/* White Wedding */}
        <h3 className="text-2xl font-semibold text-[#800000] mb-2">
          White Wedding
        </h3>
        <p className="text-lg text-[#333] mb-2">De Blue Villa, Brazil</p>
        <p className="italic text-[#800000] font-semibold mb-6">4:00 PM UTC</p>

        {/* Reception */}
        <h3 className="text-2xl font-semibold text-[#800000] mb-2">
          Reception
        </h3>
        <p className="text-lg text-[#333] mb-2">Jan De Uted Mansion, Brazil</p>
        <p className="italic text-[#800000] font-semibold mb-6">7:00 PM UTC</p>

        <p className="italic text-[#800000] font-semibold">
          We look forward to celebrating with you!
        </p>
      </div>
    </section>
  );
}
