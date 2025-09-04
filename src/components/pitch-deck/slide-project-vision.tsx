import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookUp } from "lucide-react"
import { Landing } from "@/components/landing"
import { Logo } from "@/components/logo";

export function SlideProjectVision() {
  return (
    <Card className="w-full max-w-4xl h-[90svh] md:h-[600px] overflow-hidden relative flex items-center justify-center text-center">
      <Landing
      />
      <div className="absolute inset-0 bg-black/60" />
      <CardContent className="relative z-10 p-4 sm:p-8 text-white">
        <div className="bg-black/50 p-4 sm:p-8 rounded-lg backdrop-blur-sm">
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Logo />
          </div>
          <p className="mt-4 text-lg sm:text-2xl font-light text-primary-foreground/90 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Our vision is to become the leading cannabis extraction hub in Greater Minnesota, combining strict compliance, science-backed manufacturing, and community-focused operations to set new standards for quality and patient care.
          </p>
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Link href="https://trufarms.net" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block">
              <Button>
                <BookUp className="mr-2 h-4 w-4" />
                Visit Our Website
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
