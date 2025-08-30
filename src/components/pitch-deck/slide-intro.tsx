import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"
import { Logo } from "@/components/logo"

export function SlideIntro() {
  return (
    <Card className="w-full max-w-4xl h-[600px] overflow-hidden relative flex items-center justify-center text-center">
      <Image
        src="@/assets/landscapepdland.png"
        alt="Cannabis products"
        fill
        className="object-cover"
        data-ai-hint="cannabis farm"
      />
      <div className="absolute inset-0 bg-black/60" />
      <CardContent className="relative z-10 p-8 text-white">
        <div className="bg-black/50 p-8 rounded-lg backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary-foreground))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf"><path d="M11 20A7 7 0 0 1 4 13H2a10 10 0 0 0 10 10z"/><path d="M12 21a10 10 0 0 0 10-10h-2a7 7 0 0 1-7 7z"/><path d="M12 4a9.91 9.91 0 0 0-2.49 1.57"/>
            <path d="M14.49 5.57A9.91 9.91 0 0 0 12 4"/></svg>
            <span className="text-5xl font-bold text-primary-foreground">TruFarms</span>
          </div>
          <p className="mt-4 text-2xl font-light text-primary-foreground/90">
            Revolutionizing Medicinal Cannabis Cultivation
          </p>
          <p className="mt-2 text-lg text-primary-foreground/80">
            A Tier 1 Craft Grower Investment Opportunity in Rochester, Minnesota
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
