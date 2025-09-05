"use client"

import * as React from "react"
import type { CarouselApi } from "@/components/ui/carousel"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Header } from "@/components/header";
import { SlideProjectVision } from "@/components/pitch-deck/slide-project-vision";
import { SlideMissionVision } from "@/components/pitch-deck/slide-mission-vision";
import { SlideStartupSummary } from "@/components/pitch-deck/slide-startup-summary";
import { SlideProblem } from "@/components/pitch-deck/slide-problem";
import { SlideSolution } from "@/components/pitch-deck/slide-solution";
import { SlideProductsServices } from "@/components/pitch-deck/slide-products-services";
import { SlideMarketOpportunity } from "@/components/pitch-deck/slide-market-opportunity";
import { SlideMarketingStrategy } from "@/components/pitch-deck/slide-marketing-strategy";
import { SlideProductionSales } from "@/components/pitch-deck/slide-production-sales";
import { SlideManagementTeam } from "@/components/pitch-deck/slide-management-team";
import { SlideFinancials } from "@/components/pitch-deck/slide-financials";
import { SlideFundsRequest } from "@/components/pitch-deck/slide-funds-request";
import { SlideContact } from "@/components/pitch-deck/slide-contact";


export default function Home() {
  const [api, setApi] = React.useState<CarouselApi>()

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 flex justify-center items-center px-4 sm:px-6 md:px-8 py-4 sm:py-8">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
          }}
          className="w-full max-w-6xl"
        >
          <CarouselContent>
            <CarouselItem className="flex items-start justify-center">
              <SlideProjectVision />
            </CarouselItem>
            <CarouselItem className="flex items-start justify-center">
              <SlideMissionVision />
            </CarouselItem>
            <CarouselItem className="flex items-start justify-center">
              <SlideStartupSummary />
            </CarouselItem>
            <CarouselItem className="flex items-start justify-center">
              <SlideProblem />
            </CarouselItem>
            <CarouselItem className="flex items-start justify-center">
              <SlideSolution />
            </CarouselItem>
            <CarouselItem className="flex items-start justify-center">
              <SlideProductsServices />
            </CarouselItem>
            <CarouselItem className="flex items-start justify-center">
              <SlideMarketOpportunity />
            </CarouselItem>
            <CarouselItem className="flex items-start justify-center">
              <SlideMarketingStrategy />
            </CarouselItem>
            <CarouselItem className="flex items-start justify-center">
              <SlideProductionSales />
            </CarouselItem>
            <CarouselItem className="flex items-start justify-center">
              <SlideManagementTeam />
            </CarouselItem>
            <CarouselItem className="flex items-start justify-center">
              <SlideFinancials />
            </CarouselItem>
            <CarouselItem className="flex items-start justify-center">
              <SlideFundsRequest />
            </CarouselItem>
            <CarouselItem className="flex items-start justify-center">
              <SlideContact />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </main>
    </div>
  );
}
