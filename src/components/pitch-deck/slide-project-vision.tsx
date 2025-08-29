import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookUp } from "lucide-react"

export function SlideProjectVision() {
  return (
    <Card className="w-full max-w-4xl h-[90svh] md:h-[600px] overflow-hidden relative flex items-center justify-center text-center">
      <Image
        src="https://picsum.photos/seed/vision/1200/800"
        alt="Cannabis extraction facility"
        fill
        className="object-cover"
        data-ai-hint="cannabis extraction"
      />
      <div className="absolute inset-0 bg-black/60" />
      <CardContent className="relative z-10 p-4 sm:p-8 text-white">
        <div className="bg-black/50 p-4 sm:p-8 rounded-lg backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary-foreground))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf h-8 w-8 sm:h-12 sm:w-12"><path d="M11 20A7 7 0 0 1 4 13H2a10 10 0 0 0 10 10z"/><path d="M12 21a10 10 0 0 0 10-10h-2a7 7 0 0 1-7 7z"/><path d="M12 4a9.91 9.91 0 0 0-2.49 1.57"/>
            <path d="M14.49 5.57A9.91 9.91 0 0 0 12 4"/></svg>
            <span className="text-3xl sm:text-5xl font-bold text-primary-foreground">TruFarms</span>
          </div>
          <p className="mt-4 text-lg sm:text-2xl font-light text-primary-foreground/90">
            Our vision is to become the leading cannabis extraction hub in Greater Minnesota, combining strict compliance, science-backed manufacturing, and community-focused operations to set new standards for quality and patient care.
          </p>
          <Link href="https://trufarms.net" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block">
            <Button>
              <BookUp className="mr-2 h-4 w-4" />
              Visit Our Website
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
