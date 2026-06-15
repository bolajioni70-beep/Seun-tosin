"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import EnvelopeGate from "../components/EnvelopeGate";
import InviteCards from "../components/InviteCards";
import LoveStory from "../components/LoveStory";
import WhyWeWantYou from "../components/WhyWeWantYou";
import Countdown from "../components/Countdown";
import DressCode from "../components/DressCode";
import LocationSection from "../components/LocationSection";
import GiftSection from "../components/GiftSection";
import RSVPForm from "../components/RSVPForm";
import CongratulationsSection from "../components/CongratulationsSection";

export default function Page() {
  return (
    <main className="bg-[#800000] text-[#FFD700]">
      {/* Envelope gate first */}
      <EnvelopeGate />

      {/* Swiper for slides */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        className="h-screen"
      >
        <SwiperSlide>
          <InviteCards />
        </SwiperSlide>
        <SwiperSlide>
          <LoveStory />
        </SwiperSlide>
        <SwiperSlide>
          <WhyWeWantYou />
        </SwiperSlide>
        <SwiperSlide>
          <Countdown />
        </SwiperSlide>
        <SwiperSlide>
          <DressCode />
        </SwiperSlide>
        <SwiperSlide>
          <LocationSection />
        </SwiperSlide>
        <SwiperSlide>
          <GiftSection />
        </SwiperSlide>
        <SwiperSlide>
          <RSVPForm />
        </SwiperSlide>
        <SwiperSlide>
          <CongratulationsSection />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
