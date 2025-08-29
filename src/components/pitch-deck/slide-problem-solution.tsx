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
                <span>No licensed extraction operations in Southeast Minnesota to meet growing consumer demand.</span>
              </li>
              <li className="flex items-start gap-2">
                <strong>Partnership Gap:</strong>
                <span>Local cultivators and brands lack a regional partner for B2B extraction and white-label manufacturing.</span>
              </li>
              <li className="flex items-start gap-2">
                <strong>Market Entry Barrier:</strong>
                <span>High cost and complexity of setting up extraction labs prevent many microbusinesses from producing their own concentrates.</span>
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
                <strong>First Mover Advantage:</strong>
                <span>Launch as the first dedicated cannabis extraction and manufacturing microbusiness in Southeast Minnesota.</span>
              </li>
              <li className="flex items-start gap-2">
                <strong>Branded Products:</strong>
                <span>Produce high-quality vape cartridges, edibles, concentrates, and pre-rolls for direct wholesale to dispensaries.</span>
              </li>
              <li className="flex items-start gap-2">
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
