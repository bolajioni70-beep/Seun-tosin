"use client";

export default function DressCode() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[#800000] text-center px-8">
      <div className="max-w-2xl bg-[#FFF8E7] bg-opacity-90 p-8 rounded-lg shadow-2xl border-4 border-[#FFD700]">
        <h2 className="text-4xl font-bold text-[#800000] mb-6">Dress Code</h2>
        <p className="text-lg leading-relaxed text-[#333] mb-4">
          Kindly honor us by dressing in the colors of royalty.
        </p>
        <p className="text-lg leading-relaxed text-[#333] mb-4">
          Ladies: Elegant gowns in maroon and gold accents.
        </p>
        <p className="text-lg leading-relaxed text-[#333] mb-4">
          Gentlemen: Classic suits with maroon ties or gold pocket squares.
        </p>
        <p className="italic text-[#800000] font-semibold">
          Together, let’s shine in regal harmony.
        </p>
      </div>
    </section>
  );
}
