"use client";

import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { OurVision } from "@/components/OurVision";
import { Results } from "@/components/Results";
import { ResultsTimeline } from "@/components/ResultsTimeline";
import { Academy } from "@/components/Academy";
import { Process } from "@/components/Process";
import { UseCases } from "@/components/UseCases";
import { VisionMission } from "@/components/VisionMission";
import { DeliveryModels } from "@/components/DeliveryModels";
import { HowItWorks } from "@/components/HowItWorks";
import { Clients } from "@/components/Clients";
import { ClientVoices } from "@/components/ClientVoices";
import { BlogSection } from "@/components/BlogSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomeClient() {
  return <><Nav /><main><Hero /><OurVision /><Results /><ResultsTimeline /><Academy /><Process /><UseCases /><VisionMission /><DeliveryModels /><HowItWorks /><Clients /><ClientVoices /><BlogSection /><Contact /></main><Footer /></>;
}
