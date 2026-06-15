"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Pagination, Navigation, EffectFade } from "swiper/modules";

// Import all sections
import EnvelopeGate from "./EnvelopeGate";
import LoveStory from "./LoveStory";
import LocationSection from "./LocationSection";
import RSVPForm from "./RSVPForm";
import GiftSection from "./GiftSection";
import CongratulationsSection from "./CongratulationsSection";

export default function InvitationSwiper() {
  return (
    <Swiper
      effect="fade"
      fadeEffect={{ crossFade: true }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation, EffectFade]}
      className="h-screen"
    >
      {/* Opening Line with Wedding Details */}
      <SwiperSlide>
        <section className="h-screen flex flex-col items-center justify-center bg-[#800000] text-center px-8">
          <div className="max-w-2xl bg-[#FFF8E7] bg-opacity-90 p-8 rounded-lg shadow-2xl border-4 border-[#FFD700]">
            <h1 className="text-3xl font-bold text-[#800000] mb-6">
              You are cordially invited to the joining in holy matrimony of
            </h1>
            <h2 className="calligraphy text-5xl text-[#FFD700] mb-4">
              Oluwaseun Oni
            </h2>
            <h2 className="calligraphy text-5xl text-[#FFD700] mb-4">&</h2>
            <h2 className="calligraphy text-5xl text-[#FFD700] mb-6">
              Oluwatosin Faoyemi
            </h2>

            {/* Wedding Events */}
            <h3 className="text-2xl font-bold text-[#800000] mb-4">Wedding Program</h3>
            <p className="text-lg font-semibold text-[#800000] mb-2">
              Traditional Wedding: 23rd June 2026 — Greenville Event Center, Orchid Estate, Lekki Lagos — 10:00 AM WAT
            </p>
            <p className="text-lg font-semibold text-[#800000] mb-2">
              White Wedding: 24th June 2026 — De Blue Villa, Consipure, Brazil — 4:00 PM UTC
            </p>
            <p className="text-lg font-semibold text-[#800000]">
              Reception: 24th June 2026 — Grabdere Branst, Consipure, Brazil — 7:00 PM UTC
            </p>
          </div>
        </section>
      </SwiperSlide>

      {/* Hero Envelope */}
      <SwiperSlide>
        <EnvelopeGate />
      </SwiperSlide>

      {/* Love Story with couple photo */}
      <SwiperSlide>
        <LoveStory />
      </SwiperSlide>

      {/* Location */}
      <SwiperSlide>
        <LocationSection />
      </SwiperSlide>

      {/* RSVP Form */}
      <SwiperSlide>
        <RSVPForm />
      </SwiperSlide>

      {/* Gift Section */}
      <SwiperSlide>
        <GiftSection />
      </SwiperSlide>

      {/* Congratulations */}
      <SwiperSlide>
        <CongratulationsSection />
      </SwiperSlide>
    </Swiper>
  );
}
