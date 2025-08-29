"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartTooltipContent, ChartContainer } from '@/components/ui/chart'

const salesData = [
  { month: 'Vape Carts', units: 10000 },
  { month: 'Gummies (Packs)', units: 5000 },
  { month: 'Concentrates (kg)', units: 20 },
  { month: 'Pre-Rolls', units: 25000 },
  { month: 'Infused Pre-Rolls', units: 10000 },
  { month: 'Distillate (L)', units: 10 },
];

const chartConfig = {
  units: {
    label: "Monthly Units",
    color: "hsl(var(--primary))",
  }
}

export function SlideProductionSales() {
  return (
    <Card className="w-full max-w-4xl h-[600px] flex flex-col justify-center">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Monthly Production Targets</CardTitle>
        <CardDescription>
          Our facility is designed to meet significant wholesale demand from day one.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={salesData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis
                  tickFormatter={(value) => value.toLocaleString()}
                  label={{ value: 'Units', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip
                  content={<ChartTooltipContent formatter={(value, name) => `${(value as number).toLocaleString()} units`} />}
                />
                <Line type="monotone" dataKey="units" stroke="var(--color-units)" strokeWidth={2} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}
