import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Rocket, MapPin, Users, Target } from "lucide-react"

export function SlideStartupSummary() {
  return (
    <Card className="w-full max-w-4xl h-[600px] flex flex-col justify-center">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Startup Summary</CardTitle>
        <CardDescription>
          A brief overview of TruFarms&apos; mission and strategic position.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-6 text-left p-8">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Rocket className="h-8 w-8 text-primary mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Mission</h3>
              <p className="text-muted-foreground">
                To cultivate and provide the highest-grade medicinal cannabis for patients in Southern Minnesota, ensuring safe, consistent, and accessible products through sustainable and innovative aeroponic farming.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="h-8 w-8 text-primary mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Location</h3>
              <p className="text-muted-foreground">
                Strategically located in Rochester, MN, to serve the significant patient population from the Mayo Clinic and the surrounding region, filling a critical gap in local supply.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Users className="h-8 w-8 text-primary mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Team</h3>
              <p className="text-muted-foreground">
                Led by a team with combined expertise in horticulture, business management, and regulatory compliance, ensuring operational excellence and strategic growth.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Target className="h-8 w-8 text-primary mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Objectives</h3>
              <p className="text-muted-foreground">
                Secure Tier 1 Craft Grower license, establish a state-of-the-art cultivation facility, and capture a significant share of the local medicinal cannabis market within three years.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
