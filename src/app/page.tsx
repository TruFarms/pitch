import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Header } from "@/components/header";
import { SlideIntro } from "@/components/pitch-deck/slide-intro";
import { SlideProblemSolution } from "@/components/pitch-deck/slide-problem-solution";
import { SlideMarket } from "@/components/pitch-deck/slide-market";
import { SlideInfographics } from "@/components/pitch-deck/slide-infographics";
import { SlideFinancials } from "@/components/pitch-deck/slide-financials";
import { SlideMap } from "@/components/pitch-deck/slide-map";
import { SlideDocument } from "@/components/pitch-deck/slide-document";
import { SlideContact } from "@/components/pitch-deck/slide-contact";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-6xl"
        >
          <CarouselContent>
            <CarouselItem className="flex items-center justify-center">
              <SlideIntro />
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center">
              <SlideProblemSolution />
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center">
              <SlideMarket />
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center">
              <SlideInfographics />
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center">
              <SlideFinancials />
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center">
              <SlideMap />
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center">
              <SlideDocument />
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center">
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
