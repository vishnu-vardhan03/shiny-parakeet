"use client";

import { useEffect } from "react";

import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { OurVision } from "@/components/OurVision";
import { Results } from "@/components/Results";
import { Process } from "@/components/Process";
import { UseCases } from "@/components/UseCases";
import { HowItWorks } from "@/components/HowItWorks";
import { VisionMission } from "@/components/VisionMission";
import { Clients } from "@/components/Clients";
import { ClientVoices } from "@/components/ClientVoices";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomeClient() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>("main section article"));
    cards.forEach((card, index) => {
      card.classList.add("grid-scroll-card");
      card.style.setProperty("--reveal-delay", `${(index % 4) * 100}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("grid-scroll-card-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return <><Nav /><main><Hero /><OurVision /><Results /><Process /><UseCases /><HowItWorks /><VisionMission /><Clients /><ClientVoices /><Contact /></main><Footer /></>;
}
