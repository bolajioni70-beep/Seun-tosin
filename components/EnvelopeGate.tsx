"use client";

import { useState, useRef } from "react";

export default function EnvelopeGate() {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpen = () => {
    setOpened(true);
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log("Autoplay blocked, user must interact again.");
      });
    }
  };

  return (
    <section className="h-screen flex items-center justify-center bg-[#800000] text-center">
      {!opened ? (
        <button
          onClick={handleOpen}
          className="px-8 py-4 bg-[#FFD700] text-[#800000] rounded-lg shadow-lg font-bold text-xl hover:bg-yellow-500"
        >
          Open Envelope
        </button>
      ) : (
        <div className="text-[#FFD700] text-3xl font-bold">
          Welcome to Our Wedding Invitation
        </div>
      )}

      {/* Hidden audio player */}
      <audio ref={audioRef} src="/audio/Anendlessocean.mp3" loop />
    </section>
  );
}
