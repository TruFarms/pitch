import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { DollarSign, Building, FlaskConical, ClipboardList, Package } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function SlideFundsRequest() {
  return (
    <Card className="w-full max-w-4xl h-[600px] flex flex-col justify-center">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Funding Request</CardTitle>
        <CardDescription>
          Seeking <span className="text-primary font-bold">$1.5 Million</span> in seed funding to launch operations.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 items-center">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-center md:text-left">Use of Proceeds</h3>
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span><Building className="inline-block mr-2 h-4 w-4" />Facility Build-Out & Retrofitting</span>
                <span className="font-semibold">40% ($600k)</span>
              </div>
              <Progress value={40} className="h-2" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span><FlaskConical className="inline-block mr-2 h-4 w-4" />Cultivation Equipment (Aeroponics)</span>
                <span className="font-semibold">30% ($450k)</span>
              </div>
              <Progress value={30} className="h-2" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span><ClipboardList className="inline-block mr-2 h-4 w-4" />Licensing & Legal Fees</span>
                <span className="font-semibold">10% ($150k)</span>
              </div>
              <Progress value={10} className="h-2" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span><Package className="inline-block mr-2 h-4 w-4" />Initial Operational Capital</span>
                <span className="font-semibold">20% ($300k)</span>
              </div>
              <Progress value={20} className="h-2" />
            </div>
          </div>
        </div>
        <div className="bg-muted/50 p-8 rounded-lg text-center">
          <DollarSign className="h-16 w-16 text-primary mx-auto mb-4" />
          <p className="text-4xl font-bold text-primary">$1,500,000</p>
          <p className="text-muted-foreground mt-2">Seed Round for 20% Equity</p>
          <p className="text-sm mt-4">
            This investment will fully fund Phase 1 development, bringing TruFarms to operational status and positive cash flow within 24 months.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
