"use client";

export default function InviteCards() {
  return (
    <section className="h-screen flex items-center justify-center bg-[#800000] px-6">
      <div className="max-w-2xl bg-[#800000] text-[#FFD700] p-8 rounded-lg shadow-2xl border-4 border-[#FFD700] text-center">
        {/* Decorative corners */}
        <div className="flex justify-between mb-6">
          <span className="text-2xl">❀</span>
          <span className="text-2xl">❀</span>
        </div>

        {/* Invitation text */}
        <h2 className="text-3xl font-bold mb-4">MR. & MRS. ONI</h2>
        <p className="mb-2">Kindly request your presence at the</p>
        <p className="mb-6">Marriage of their son</p>

        <h1 className="text-4xl font-serif italic mb-4">Oluwaseun Oni</h1>
        <p className="mb-2">with</p>
        <h1 className="text-4xl font-serif italic mb-6">Oluwatosin Faoyemi</h1>

        <p className="mb-4">Daughter of MR. & MRS. FAOYEMI</p>

        <h3 className="text-2xl font-bold mb-2">Saturday, June 27, 2026</h3>
        <p className="mb-6">At Two O’Clock in the Afternoon</p>

        <h3 className="text-xl font-semibold mb-2">Kaduna Hall</h3>
        <p className="mb-6">Sabon Tasha, Kaduna State, Nigeria</p>

        <p className="italic">Reception to follow</p>

        {/* Decorative corners bottom */}
        <div className="flex justify-between mt-6">
          <span className="text-2xl">❀</span>
          <span className="text-2xl">❀</span>
        </div>
      </div>
    </section>
  );
}
