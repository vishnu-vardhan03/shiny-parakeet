"use client";

import { useEffect } from "react";

import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { OurVision } from "@/components/OurVision";
import { Results } from "@/components/Results";
import { Process } from "@/components/Process";
import { UseCases } from "@/components/UseCases";
import { HowItWorks } from "@/components/HowItWorks";
import { Clients } from "@/components/Clients";
import { ClientVoices } from "@/components/ClientVoices";
import { BlogSection } from "@/components/BlogSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomeClient() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>("main section .grid > article"));
    cards.forEach((card, index) => {
      card.classList.add("grid-scroll-card");
      card.style.setProperty("--reveal-delay", `${(index % 4) * 85}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("grid-scroll-card-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.14 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return <><Nav /><main><Hero /><OurVision /><Results /><Process /><UseCases /><HowItWorks /><Clients /><ClientVoices /><BlogSection /><Contact /></main><Footer /></>;
}
