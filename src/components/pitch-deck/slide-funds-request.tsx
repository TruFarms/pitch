import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { DollarSign, Building, FlaskConical, ClipboardList, Package } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function SlideFundsRequest() {
  return (
    <Card className="w-full max-w-4xl h-auto md:h-[600px] flex flex-col justify-center">
      <CardHeader className="text-center px-4 sm:px-6">
        <CardTitle className="text-2xl sm:text-3xl font-bold">Funding Request & Use of Proceeds</CardTitle>
        <CardDescription className="text-sm sm:text-base">
          Seeking <span className="text-primary font-bold">$150k - $220k</span> in startup capital.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 p-4 sm:p-8 items-center">
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold text-center md:text-left">Use of Proceeds (based on $200k)</h3>
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="flex items-center gap-2"><FlaskConical className="inline-block h-4 w-4" />Extraction & C1D1 Lab</span>
                <span className="font-semibold">75% ($150k)</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="flex items-center gap-2"><Package className="inline-block h-4 w-4" />Product Packaging</span>
                <span className="font-semibold">21% ($41.5k)</span>
              </div>
              <Progress value={21} className="h-2" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="flex items-center gap-2"><Building className="inline-block h-4 w-4" />Pre-Roll Equipment</span>
                <span className="font-semibold">4% ($8k)</span>
              </div>
              <Progress value={4} className="h-2" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="flex items-center gap-2"><ClipboardList className="inline-block h-4 w-4" />Lease, Legal & Other</span>
                <span className="font-semibold">(Covered Separately)</span>
              </div>
              <Progress value={0} className="h-2 bg-muted/50" />
            </div>
          </div>
        </div>
        <div className="bg-muted/50 p-6 sm:p-8 rounded-lg text-center">
          <DollarSign className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto mb-4" />
          <p className="text-3xl sm:text-4xl font-bold text-primary">$150,000 - $220,000</p>
          <p className="text-muted-foreground mt-2 text-sm sm:text-base">Startup Capital for Equipment & Operations</p>
          <p className="text-xs sm:text-sm mt-4">
            This investment will fully fund all necessary extraction, processing, and packaging equipment to make TruFarms operational and profitable within the first year.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
