"use client";

import { useState } from "react";

export default function EnvelopeGate() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened ? (
        <div className="flex flex-col items-center justify-center h-screen bg-[#800000]">
          {/* Envelope background */}
          <div
            className="w-96 h-56 rounded-lg shadow-lg relative flex items-center justify-center"
            style={{
              backgroundColor: "#800000", // deep maroon
            }}
          >
            {/* Shiny wax seal image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/photos/seal.png"
                alt="Wax Seal"
                className="w-24 h-24 rounded-full shadow-lg border-4 border-[#b8860b]"
              />
            </div>
          </div>

          {/* Open button */}
          <button
            onClick={() => {
              setOpened(true);
              document.getElementById("weddingSong")?.play();
            }}
            className="mt-6 px-6 py-3 bg-[#FFD700] text-[#800000] rounded-lg shadow hover:bg-yellow-500 font-semibold"
          >
            Open Invitation
          </button>

          {/* Audio trigger */}
          <audio id="weddingSong" src="/audio/anendlessocean.mp3" loop />
        </div>
      ) : (
        <div>
          {/* Swiper slides go here (LoveStory, InviteCards, etc.) */}
        </div>
      )}
    </>
  );
}
