"use client";

export default function LoveStory() {
  return (
    <section
      className="h-screen flex flex-col items-center justify-center text-center px-8"
      style={{
        backgroundImage: "url('/photos/couple.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for regal look */}
      <div className="bg-[#800000]/70 w-full h-full flex flex-col items-center justify-center p-6">
        <h1 className="text-5xl font-bold text-[#FFD700] mb-6">
          Seun & Tosin
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-white bg-[#800000]/60 p-6 rounded-lg shadow-lg">
          Our journey began with laughter and friendship, blossomed into love,
          and now leads us to forever. We invite you to celebrate this union
          with us, surrounded by family, friends, and the joy of tradition.
        </p>
      </div>
    </section>
  );
}
