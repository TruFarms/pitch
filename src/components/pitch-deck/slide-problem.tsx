import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

export function SlideProblem() {
  return (
    <Card className="w-full max-w-4xl h-auto md:h-[600px] flex flex-col justify-center animate-fade-up">
      <CardHeader className="text-center px-4 sm:px-6">
        <CardTitle className="text-2xl sm:text-3xl font-bold relative inline-block mx-auto">
          The Problem
          <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-accent"></span>
        </CardTitle>
        <CardDescription className="text-sm sm:text-base">
          A critical supply gap in a high-demand emerging market.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 flex justify-center">
        <div className="p-4 sm:p-6 bg-destructive/10 rounded-lg max-w-lg w-full">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8 text-destructive flex-shrink-0" />
            <h3 className="text-xl sm:text-2xl font-semibold text-destructive">Key Market Challenges</h3>
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
      </CardContent>
    </Card>
  )
}
