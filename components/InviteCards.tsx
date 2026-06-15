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
import ProgramSection from "./ProgramSection"; // NEW

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
      {/* Opening Line */}
      <SwiperSlide>
        {/* Opening slide with couple names and summary */}
      </SwiperSlide>

      {/* Program Slide */}
      <SwiperSlide>
        <ProgramSection />
      </SwiperSlide>

      {/* Hero Envelope */}
      <SwiperSlide>
        <EnvelopeGate />
      </SwiperSlide>

      {/* Love Story */}
      <SwiperSlide>
        <LoveStory />
      </SwiperSlide>

      {/* Location */}
      <SwiperSlide>
        <LocationSection />
      </SwiperSlide>

      {/* RSVP */}
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
