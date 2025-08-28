import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, AlertTriangle } from "lucide-react"

export function SlideProblemSolution() {
  return (
    <Card className="w-full max-w-4xl h-[600px] flex flex-col justify-center">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">The Opportunity</CardTitle>
        <CardDescription>
          Addressing a critical supply gap with a premium, localized solution.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="p-6 bg-destructive/10 rounded-lg">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-destructive" />
              <h3 className="text-2xl font-semibold text-destructive">The Problem</h3>
            </div>
            <ul className="mt-4 space-y-3 text-foreground/80">
              <li className="flex items-start gap-2">
                <strong>Supply Shortage:</strong>
                <span>Limited local cultivation to meet growing patient demand in Southern Minnesota.</span>
              </li>
              <li className="flex items-start gap-2">
                <strong>Quality Concerns:</strong>
                <span>Inconsistent quality from mass-produced cannabis from out-of-state facilities.</span>
              </li>
              <li className="flex items-start gap-2">
                <strong>Access Issues:</strong>
                <span>Patients face long travel times and limited product variety at existing dispensaries.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-primary/10 rounded-lg">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold text-primary">Our Solution</h3>
            </div>
             <ul className="mt-4 space-y-3 text-foreground/80">
              <li className="flex items-start gap-2">
                <strong>Local Craft Cultivation:</strong>
                <span>A Tier 1 craft grower license to produce high-quality, small-batch cannabis locally.</span>
              </li>
              <li className="flex items-start gap-2">
                <strong>Medicinal Focus:</strong>
                <span>State-of-the-art aeroponic facility designed to produce consistent, high-potency products.</span>
              </li>
              <li className="flex items-start gap-2">
                <strong>Strategic Partnership:</strong>
                <span>Located in Rochester to directly serve the Mayo Clinic patient population and surrounding areas.</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
