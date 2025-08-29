import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Rocket, MapPin, Users, Target } from "lucide-react"

export function SlideStartupSummary() {
  return (
    <Card className="w-full max-w-4xl h-auto md:h-[600px] flex flex-col justify-center">
      <CardHeader className="text-center px-4 sm:px-6">
        <CardTitle className="text-2xl sm:text-3xl font-bold">Startup Summary</CardTitle>
        <CardDescription className="text-sm sm:text-base">
          A brief overview of TruFarms&apos; mission and strategic position.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-6 text-left p-4 sm:p-8">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Rocket className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">Mission</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                To be the first dedicated cannabis extraction and manufacturing operation in Southeast Minnesota, producing high-quality THC vape cartridges, edibles, and concentrates for licensed dispensaries and B2B partners.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">Location</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Strategically based in Rochester, MN, to serve the significant patient and consumer population from the Mayo Clinic and the surrounding region, filling a critical gap in local supply.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Users className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">Team</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Founded by Quinton Jones and supported by a planned team of 9 specialists in extraction, compliance, sales, and operations to ensure manufacturing excellence and strategic growth.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Target className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">Objectives</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Launch with branded products in 25 licensed dispensaries, achieve $600K–$1.2M in Year 1 revenue, and become a leading product manufacturer in Southeast Minnesota, scaling to $3.5M+ by Year 3.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
