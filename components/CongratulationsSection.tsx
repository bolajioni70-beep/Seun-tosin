"use client";

export default function CongratulationsSection() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[#800000] text-center px-8">
      <div className="max-w-2xl bg-[#FFF8E7] bg-opacity-90 p-8 rounded-lg shadow-2xl border-4 border-[#FFD700]">
        <h2 className="text-4xl font-bold text-[#800000] mb-6">Congratulations</h2>
        <p className="text-lg leading-relaxed text-[#333] mb-4">
          With joy in our hearts, we celebrate the union of
        </p>
        <h1 className="calligraphy text-3xl mb-2">
          Oluwaseun Oni
        </h1>
        <h1 className="calligraphy text-3xl mb-6">
          &amp; Oluwatosin Faoyemi
        </h1>
        <p className="text-lg leading-relaxed text-[#333] mb-4">
          Thank you for being part of our love story and sharing in this
          unforgettable day.
        </p>
        <p className="calligraphy text-2xl">
          #S&amp;T love story 26#
        </p>
      </div>
    </section>
  );
}
