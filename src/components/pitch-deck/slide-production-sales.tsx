"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartTooltipContent, ChartContainer } from '@/components/ui/chart'

const salesData = [
  { year: '2025', production: 1500, sales: 1200 },
  { year: '2026', production: 3500, sales: 3000 },
  { year: '2027', production: 5000, sales: 4800 },
  { year: '2028', production: 5000, sales: 5000 },
];

const chartConfig = {
  production: {
    label: "Production (lbs)",
    color: "hsl(var(--primary))",
  },
  sales: {
    label: "Sales (lbs)",
    color: "hsl(var(--accent))",
  },
}

export function SlideProductionSales() {
  return (
    <Card className="w-full max-w-4xl h-[600px] flex flex-col justify-center">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Production & Sales Forecast</CardTitle>
        <CardDescription>
          Projected capacity and sales volume for the first four years of operation.
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
                <XAxis dataKey="year" />
                <YAxis label={{ value: 'Pounds (lbs)', angle: -90, position: 'insideLeft' }} />
                <Tooltip content={<ChartTooltipContent formatter={(value) => `${value} lbs`} />} />
                <Line type="monotone" dataKey="production" stroke="var(--color-production)" strokeWidth={2} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="sales" stroke="var(--color-sales)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}
