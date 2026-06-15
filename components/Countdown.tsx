"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const weddingDate = new Date("2026-06-27T14:00:00"); // June 27, 2026 at 2 PM
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const total = weddingDate.getTime() - new Date().getTime();
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);
    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[#800000] text-center px-8">
      <h2 className="text-4xl font-bold text-[#FFD700] mb-6">Countdown to Our Day</h2>
      <div className="flex space-x-6 text-[#FFD700] text-3xl font-semibold">
        <div className="flex flex-col items-center">
          <span>{timeLeft.days}</span>
          <span className="text-sm text-white">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.hours}</span>
          <span className="text-sm text-white">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.minutes}</span>
          <span className="text-sm text-white">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.seconds}</span>
          <span className="text-sm text-white">Seconds</span>
        </div>
      </div>
    </section>
  );
}
