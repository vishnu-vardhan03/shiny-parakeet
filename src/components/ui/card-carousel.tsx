"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// ---------- Types ----------
export interface StepCard {
  number: string;
  timing: string;
  title: string;
  body: string;
  detail: string;
  color: string;
}

interface StepCarouselProps {
  steps: StepCard[];
  autoplayDelay?: number;
}

// ---------- Component ----------
export const StepCarousel: React.FC<StepCarouselProps> = ({
  steps,
  autoplayDelay = 2500,
}) => {
  const swiperCss = `
    .step-swiper {
      width: 100%;
      padding-bottom: 48px !important;
    }
    .step-swiper .swiper-slide {
      width: 300px;
      height: auto;
    }
    .step-swiper .swiper-pagination-bullet {
      background: rgba(255,255,255,0.35);
      opacity: 1;
      width: 8px;
      height: 8px;
    }
    .step-swiper .swiper-pagination-bullet-active {
      background: #38bdf8;
      width: 24px;
      border-radius: 4px;
    }
    .step-swiper .swiper-3d .swiper-slide-shadow-left,
    .step-swiper .swiper-3d .swiper-slide-shadow-right {
      background-image: none;
    }
  `;

  return (
    <>
      <style>{swiperCss}</style>
      <Swiper
        className="step-swiper"
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView="auto"
        spaceBetween={20}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 2,
          slideShadows: false,
        }}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
      >
        {steps.map((step) => (
          <SwiperSlide key={step.number}>
            <article
              className="relative min-h-[390px] overflow-hidden rounded-2xl border border-white/20 bg-[#111114] p-7 shadow-[0_24px_70px_rgba(0,0,0,.35)]"
            >
              {/* Glow blob */}
              <div
                className="absolute -right-12 -top-12 size-36 rounded-full opacity-30 blur-2xl"
                style={{ backgroundColor: step.color }}
              />

              <div className="relative">
                {/* Top row: number + timing badge */}
                <div className="flex items-start justify-between">
                  <b className="text-lg" style={{ color: step.color }}>
                    {step.number}
                  </b>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[.14em] text-white/65">
                    {step.timing}
                  </span>
                </div>

                {/* Step label */}
                <span
                  className="mt-12 block text-[10px] font-bold uppercase tracking-[.2em]"
                  style={{ color: step.color }}
                >
                  Step {step.number}
                </span>

                {/* Title */}
                <h3 className="mt-3 text-2xl font-black text-white">{step.title}</h3>

                {/* Body */}
                <p className="mt-5 text-sm leading-relaxed text-white/75">{step.body}</p>

                {/* Detail */}
                <p className="mt-5 border-t border-white/10 pt-5 text-sm font-medium leading-relaxed text-white">
                  {step.detail}
                </p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
