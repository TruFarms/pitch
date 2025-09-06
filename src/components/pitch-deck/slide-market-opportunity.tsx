"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { DollarSign, Users, Hospital, TrendingUp } from "lucide-react"

const infoItems = [
  {
    icon: Users,
    title: "Olmsted County Population",
    value: "160,000+",
    description: "A robust local consumer base from day one."
  },
  {
    icon: DollarSign,
    title: "Est. Monthly Retail Market",
    value: "~$6M",
    description: "In Olmsted County alone, based on state projections."
  },
  {
    icon: Hospital,
    title: "The Mayo Clinic Effect",
    value: "1.3M+ Patients",
    description: "Annual influx of health-conscious consumers and staff."
  },
  {
    icon: TrendingUp,
    title: "Our Target Market Share",
    value: "10%",
    description: "Capture via branded products and B2B services."
  },
]

export function SlideMarketOpportunity() {
  return (
    <Card className="w-full max-w-4xl h-auto md:min-h-[600px] flex flex-col justify-center animate-fade-up">
      <CardHeader className="text-center px-4 sm:px-6">
        <CardTitle className="text-2xl sm:text-3xl font-bold relative inline-block mx-auto">
          Market Opportunity
          <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-accent"></span>
        </CardTitle>
        <CardDescription className="text-sm sm:text-base">
          Positioned for success in Minnesota's high-growth cannabis market
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
          {infoItems.map((item, index) => (
            <div
              key={item.title}
              className="bg-card p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-in"
               style={{ animationDelay: `${index * 150 + 200}ms` }}
            >
              <div className="flex justify-center items-center">
                <div className="p-3 sm:p-4 bg-primary/10 rounded-full">
                  <item.icon className="h-7 w-7 sm:h-8 sm:w-8 text-chart-2" />
                </div>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-accent mt-4">{item.value}</p>
              <h3 className="text-base sm:text-lg font-semibold mt-2">{item.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm mt-1">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 sm:mt-8 text-center bg-muted/50 p-4 rounded-lg animate-fade-in" style={{ animationDelay: `${(infoItems.length * 150) + 200}ms` }}>
          <h4 className="font-semibold text-lg">First Mover Advantage</h4>
          <p className="text-muted-foreground text-sm sm:text-base">
            As the only licensed extraction operation in Southeast Minnesota at launch, TruFarms will become a critical supply-chain partner for regional brands and retailers, creating a significant barrier to entry for future competitors
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
