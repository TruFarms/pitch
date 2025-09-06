import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function SlideSolution() {
  return (
    <Card className="w-full max-w-4xl h-auto md:h-[600px] flex flex-col justify-center animate-fade-up">
      <CardHeader className="text-center px-4 sm:px-6">
        <CardTitle className="text-2xl sm:text-3xl font-bold relative inline-block mx-auto">
          Our Solution
          <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-accent"></span>
        </CardTitle>
        <CardDescription className="text-sm sm:text-base">
          A premium, localized operation to capture a key market
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 flex justify-center">
        <div className="p-4 sm:p-6 bg-accent/10 rounded-lg max-w-2xl w-full">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 sm:h-8 sm:w-8 text-accent flex-shrink-0" />
            <h3 className="text-xl sm:text-2xl font-semibold text-accent">TruFarms' Strategic Approach</h3>
          </div>
           <ul className="mt-4 space-y-3 text-card-foreground/80 text-sm sm:text-base">
            <li className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <strong>First Mover Advantage:</strong>
              <span>Launch as the first dedicated cannabis extraction and manufacturing microbusiness in Southeast Minnesota</span>
            </li>
            <li className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <strong>Branded Products:</strong>
              <span>Produce high-quality vape cartridges, edibles, concentrates, and pre-rolls for direct wholesale to dispensaries</span>
            </li>
            <li className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <strong>B2B Services:</strong>
              <span>Offer white-label and toll processing extraction services, becoming a critical supply-chain partner for regional brands</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
