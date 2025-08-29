"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartTooltipContent, ChartContainer } from '@/components/ui/chart'

const salesData = [
  { name: 'Vape Carts', units: 10000 },
  { name: 'Gummies', units: 5000 },
  { name: 'Concentrates', units: 20 },
  { name: 'Pre-Rolls', units: 25000 },
  { name: 'Infused', units: 10000 },
  { name: 'Distillate', units: 10 },
];

const chartConfig = {
  units: {
    label: "Monthly Units",
    color: "hsl(var(--primary))",
  }
}

export function SlideProductionSales() {
  return (
    <Card className="w-full max-w-4xl h-auto md:h-[600px] flex flex-col justify-center">
      <CardHeader className="text-center px-4 sm:px-6">
        <CardTitle className="text-2xl sm:text-3xl font-bold">Monthly Production Targets</CardTitle>
        <CardDescription className="text-sm sm:text-base">
          Our facility is designed to meet significant wholesale demand from day one.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="h-[350px] sm:h-[400px] w-full">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={salesData}
                layout="vertical"
                margin={{
                  top: 5,
                  right: 20,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <YAxis dataKey="name" type="category" width={80} tick={{fontSize: 12}} />
                <XAxis type="number" tickFormatter={(value) => value.toLocaleString()} />
                <Tooltip
                  cursor={{fill: 'hsl(var(--muted))'}}
                  content={<ChartTooltipContent formatter={(value) => `${(value as number).toLocaleString()} units`} />}
                />
                <Bar dataKey="units" fill="var(--color-units)" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}
