"use client";

export default function GiftSection() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[#800000] text-center px-8">
      <div className="max-w-2xl bg-[#FFF8E7] bg-opacity-90 p-8 rounded-lg shadow-2xl border-4 border-[#FFD700]">
        <h2 className="text-4xl font-bold text-[#800000] mb-6">Gift Section</h2>
        
        <p className="text-lg leading-relaxed text-[#333] mb-4">
          Your presence is the greatest gift. If you wish to bless us further, kindly support us with cash or landed property.
        </p>

        <div className="bg-[#FFD700] text-[#800000] font-bold p-4 rounded-lg mb-6">
          <p>Account Number: 9061693121</p>
          <p>Account Name: Tayo Faoyemi</p>
          <p>Bank Name: Matrix Bank</p>
        </div>

        <h3 className="text-2xl font-bold text-[#800000] mb-4">Landed Property Option</h3>
        <p className="text-lg leading-relaxed text-[#333] mb-4">
          Two-bedroom in Orchid Estate, Lekki Lagos — Price: ₦2,000,000
        </p>
        <p className="text-lg leading-relaxed text-[#333] mb-6">
          Help us buy our dream home by supporting. Kindly use the same account number above.
        </p>

        <h3 className="text-2xl font-bold text-[#800000] mb-4">Appreciation</h3>
        <p className="text-lg leading-relaxed text-[#333]">
          We deeply appreciate your love and generosity. We can’t wait to see you at our wedding and celebrate together!
        </p>
      </div>
    </section>
  );
}
