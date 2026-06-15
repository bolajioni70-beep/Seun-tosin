"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

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
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="h-screen"
    >
      <SwiperSlide>
        <EnvelopeGate />
      </SwiperSlide>
      <SwiperSlide>
        <LoveStory />
      </SwiperSlide>
      <SwiperSlide>
        <LocationSection />
      </SwiperSlide>
      <SwiperSlide>
        <RSVPForm />
      </SwiperSlide>
      <SwiperSlide>
        <GiftSection />
      </SwiperSlide>
      <SwiperSlide>
        <CongratulationsSection />
      </SwiperSlide>
    </Swiper>
  );
}
