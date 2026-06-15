"use client";

export default function ProgramSection() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[#800000] text-center px-8">
      <div className="max-w-2xl bg-[#FFF8E7] bg-opacity-90 p-8 rounded-lg shadow-2xl border-4 border-[#FFD700]">
        <h2 className="text-4xl font-bold text-[#800000] mb-6">Wedding Program</h2>

        {/* Traditional Wedding */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-[#FFD700] mb-2">Traditional Wedding</h3>
          <p className="text-lg text-[#333]">
            23rd June 2026 — Greenville Event Center, Orchid Estate, Lekki Lagos — 10:00 AM WAT
          </p>
        </div>

        {/* White Wedding */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-[#FFD700] mb-2">White Wedding</h3>
          <p className="text-lg text-[#333]">
            24th June 2026 — De Blue Villa, Consipure, Brazil — 4:00 PM UTC
          </p>
        </div>

        {/* Reception */}
        <div>
          <h3 className="text-2xl font-bold text-[#FFD700] mb-2">Reception</h3>
          <p className="text-lg text-[#333]">
            24th June 2026 — Grabdere Branst, Consipure, Brazil — 7:00 PM UTC
          </p>
        </div>
      </div>
    </section>
  );
}
