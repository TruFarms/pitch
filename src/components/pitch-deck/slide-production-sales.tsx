"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartTooltipContent, ChartContainer } from '@/components/ui/chart'

const bulkProductionData = [
  { name: 'Distillate', value: 10, unit: 'Liters' },
  { name: 'Concentrates', value: 20, unit: 'kg' },
];

const unitProductionData = [
  { name: 'Gummies', value: 5000, unit: 'units' },
  { name: 'Vape Carts', value: 10000, unit: 'units' },
  { name: 'Infused', value: 10000, unit: 'units' },
  { name: 'Pre-Rolls', value: 25000, unit: 'units' },
];


const chartConfig = {
  value: {
    label: "Monthly Amount",
    color: "hsl(var(--chart-2))",
  }
}

export function SlideProductionSales() {
  return (
    <Card className="w-full max-w-4xl h-auto md:h-[600px] flex flex-col justify-center animate-fade-up">
      <CardHeader className="text-center px-4 sm:px-6">
        <CardTitle className="text-2xl sm:text-3xl font-bold">Monthly Production Targets</CardTitle>
        <CardDescription className="text-sm sm:text-base">
          Our facility is designed to meet significant wholesale demand from day one.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-center font-semibold text-muted-foreground mb-4">Unit Production</h3>
          <div className="h-[250px] w-full">
            <ChartContainer config={chartConfig} className="w-full h-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={unitProductionData}
                  layout="vertical"
                  margin={{
                    top: 5,
                    right: 20,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <YAxis dataKey="name" type="category" width={80} tick={{fontSize: 12, fill: 'hsl(var(--card-foreground))'}} />
                  <XAxis type="number" tickFormatter={(value) => value.toLocaleString()} tick={{fill: 'hsl(var(--card-foreground))'}} />
                  <Tooltip
                    cursor={{fill: 'hsl(var(--muted))'}}
                    content={<ChartTooltipContent formatter={(value, name, item) => {
                      const { unit } = item.payload;
                      return `${(value as number).toLocaleString()} ${unit}`;
                    }} />}
                  />
                  <Bar dataKey="value" fill="var(--color-value)" radius={4} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
        <div>
           <h3 className="text-center font-semibold text-muted-foreground mb-4">Bulk Production</h3>
           <div className="h-[250px] w-full">
            <ChartContainer config={chartConfig} className="w-full h-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={bulkProductionData}
                  layout="vertical"
                  margin={{
                    top: 5,
                    right: 20,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <YAxis dataKey="name" type="category" width={80} tick={{fontSize: 12, fill: 'hsl(var(--card-foreground))'}} />
                  <XAxis type="number" tickFormatter={(value) => value.toLocaleString()} tick={{fill: 'hsl(var(--card-foreground))'}} />
                  <Tooltip
                    cursor={{fill: 'hsl(var(--muted))'}}
                    content={<ChartTooltipContent formatter={(value, name, item) => {
                      const { unit } = item.payload;
                      return `${(value as number).toLocaleString()} ${unit}`;
                    }} />}
                  />
                  <Bar dataKey="value" fill="var(--color-value)" radius={4} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
