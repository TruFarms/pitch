"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"
import { ChartTooltipContent, ChartContainer } from '@/components/ui/chart'

const chartData = [
  { year: "2025", marketSize: 15, patientCount: 8 },
  { year: "2026", marketSize: 35, patientCount: 18 },
  { year: "2027", marketSize: 55, patientCount: 30 },
  { year: "2028", marketSize: 75, patientCount: 45 },
];

const chartConfig = {
  marketSize: {
    label: "Market Size ($M)",
    color: "hsl(var(--primary))",
  },
  patientCount: {
    label: "Patients (Thousands)",
    color: "hsl(var(--accent))",
  },
}

export function SlideMarket() {
  return (
    <Card className="w-full max-w-4xl h-[600px] flex flex-col justify-center">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Market Analysis</CardTitle>
        <CardDescription>
          Projected medicinal cannabis market growth in Rochester, MN.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <ResponsiveContainer>
              <BarChart data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="year"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <YAxis yAxisId="left" tickFormatter={(value) => `$${value}M`} />
                <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => `${value}k`} />
                <Tooltip 
                  cursor={{ fill: 'hsl(var(--muted))' }} 
                  content={<ChartTooltipContent 
                    formatter={(value, name) => {
                      if (name === "marketSize") return `$${value}M`;
                      if (name === "patientCount") return `${value}k`;
                      return `${value}`;
                    }} 
                  />} 
                />
                <Bar yAxisId="left" dataKey="marketSize" fill="var(--color-marketSize)" radius={4} />
                <Bar yAxisId="right" dataKey="patientCount" fill="var(--color-patientCount)" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}
