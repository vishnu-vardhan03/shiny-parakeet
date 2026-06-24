"use client";

<<<<<<< HEAD
import { useEffect } from "react";

=======
>>>>>>> 931f703bc60bfd0a0a14ef5856aed5c013f11bb4
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { OurVision } from "@/components/OurVision";
import { Results } from "@/components/Results";
<<<<<<< HEAD
import { Process } from "@/components/Process";
import { UseCases } from "@/components/UseCases";
=======
import { ResultsTimeline } from "@/components/ResultsTimeline";
import { Academy } from "@/components/Academy";
import { Process } from "@/components/Process";
import { UseCases } from "@/components/UseCases";
import { VisionMission } from "@/components/VisionMission";
import { DeliveryModels } from "@/components/DeliveryModels";
>>>>>>> 931f703bc60bfd0a0a14ef5856aed5c013f11bb4
import { HowItWorks } from "@/components/HowItWorks";
import { Clients } from "@/components/Clients";
import { ClientVoices } from "@/components/ClientVoices";
import { BlogSection } from "@/components/BlogSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomeClient() {
<<<<<<< HEAD
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
=======
  return <><Nav /><main><Hero /><OurVision /><Results /><ResultsTimeline /><Academy /><Process /><UseCases /><VisionMission /><DeliveryModels /><HowItWorks /><Clients /><ClientVoices /><BlogSection /><Contact /></main><Footer /></>;
>>>>>>> 931f703bc60bfd0a0a14ef5856aed5c013f11bb4
}
