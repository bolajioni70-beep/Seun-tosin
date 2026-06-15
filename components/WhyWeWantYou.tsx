"use client";

export default function WhyWeWantYou() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[#800000] text-center px-8">
      <div className="max-w-2xl bg-[#FFF8E7] bg-opacity-90 p-8 rounded-lg shadow-2xl border-4 border-[#FFD700]">
        <h2 className="text-4xl font-bold text-[#800000] mb-6">
          Why We Want You There
        </h2>
        <p className="text-lg leading-relaxed text-[#333] mb-4">
          Your presence is a blessing to us. You have been part of our journey,
          and sharing this day with you makes it complete.
        </p>
        <p className="text-lg leading-relaxed text-[#333] mb-4">
          Together, we will celebrate love, family, and tradition in a way that
          honors our heritage and future.
        </p>
        <p className="italic text-[#800000] font-semibold">
          We cannot imagine this day without you.
        </p>
      </div>
    </section>
  );
}
