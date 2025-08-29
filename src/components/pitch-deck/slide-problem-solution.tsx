import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle2, AlertTriangle } from "lucide-react"

export function SlideProblemSolution() {
  return (
    <Card className="w-full max-w-4xl h-auto md:h-[600px] flex flex-col justify-center animate-fade-up">
      <CardHeader className="text-center px-4 sm:px-6">
        <CardTitle className="text-2xl sm:text-3xl font-bold relative inline-block mx-auto">
          The Opportunity
          <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-accent"></span>
        </CardTitle>
        <CardDescription className="text-sm sm:text-base">
          Addressing a critical supply gap with a premium, localized solution.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-start">
          <div className="p-4 sm:p-6 bg-destructive/10 rounded-lg">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8 text-destructive flex-shrink-0" />
              <h3 className="text-xl sm:text-2xl font-semibold text-destructive">The Problem</h3>
            </div>
            <ul className="mt-4 space-y-3 text-foreground/80 text-sm sm:text-base">
              <li className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <strong>Supply Shortage:</strong>
                <span>No licensed extraction operations in Southeast Minnesota to meet growing consumer demand.</span>
              </li>
              <li className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <strong>Partnership Gap:</strong>
                <span>Local cultivators and brands lack a regional partner for B2B extraction and white-label manufacturing.</span>
              </li>
              <li className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <strong>Market Entry Barrier:</strong>
                <span>High cost and complexity of setting up extraction labs prevent many microbusinesses from producing their own concentrates.</span>
              </li>
            </ul>
          </div>

          <div className="p-4 sm:p-6 bg-primary/10 rounded-lg">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
              <h3 className="text-xl sm:text-2xl font-semibold text-primary">Our Solution</h3>
            </div>
             <ul className="mt-4 space-y-3 text-foreground/80 text-sm sm:text-base">
              <li className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <strong>First Mover Advantage:</strong>
                <span>Launch as the first dedicated cannabis extraction and manufacturing microbusiness in Southeast Minnesota.</span>
              </li>
              <li className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <strong>Branded Products:</strong>
                <span>Produce high-quality vape cartridges, edibles, concentrates, and pre-rolls for direct wholesale to dispensaries.</span>
              </li>
              <li className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <strong>B2B Services:</strong>
                <span>Offer white-label and toll processing extraction services, becoming a critical supply-chain partner for regional brands.</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
