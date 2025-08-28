"use client"

import { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"
import { ChartTooltipContent, ChartContainer } from '@/components/ui/chart'

const initialData = [
  { year: '2025', revenue: 0 },
  { year: '2026', revenue: 0 },
  { year: '2027', revenue: 0 },
  { year: '2028', revenue: 0 },
  { year: '2029', revenue: 0 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--primary))",
  },
}

export function SlideFinancials() {
  const [marketShare, setMarketShare] = useState(5);
  const [productionVolume, setProductionVolume] = useState(50);

  const projectedData = useMemo(() => {
    const baseRevenue = 200000; // A base value for calculation
    return initialData.map((item, index) => {
      const growthFactor = (1 + (marketShare / 100)) * (1 + (productionVolume / 100));
      const revenue = Math.floor(baseRevenue * (index + 1) * growthFactor * (1 + index * 0.5));
      return { ...item, revenue };
    });
  }, [marketShare, productionVolume]);
  
  const totalProjectedRevenue = useMemo(() => {
    return projectedData.reduce((acc, item) => acc + item.revenue, 0);
  }, [projectedData]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      compactDisplay: 'short'
    }).format(value);
  }

  return (
    <Card className="w-full max-w-4xl h-[600px] flex flex-col justify-center overflow-hidden">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Financial Projections</CardTitle>
        <CardDescription>
          Adjust the sliders to simulate different growth scenarios.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-1 space-y-8 p-4">
          <div>
            <Label htmlFor="market-share" className="text-lg">Market Share: <span className="font-bold text-primary">{marketShare}%</span></Label>
            <Slider
              id="market-share"
              defaultValue={[marketShare]}
              max={25}
              step={1}
              onValueChange={(value) => setMarketShare(value[0])}
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="production-volume" className="text-lg">Production Volume: <span className="font-bold text-primary">{productionVolume}% Capacity</span></Label>
            <Slider
              id="production-volume"
              defaultValue={[productionVolume]}
              max={100}
              step={5}
              onValueChange={(value) => setProductionVolume(value[0])}
              className="mt-2"
            />
          </div>
          <div className="text-center bg-muted p-4 rounded-lg">
            <p className="text-muted-foreground">5-Year Projected Revenue</p>
            <p className="text-4xl font-bold text-primary">{formatCurrency(totalProjectedRevenue)}</p>
          </div>
        </div>
        <div className="md:col-span-2 h-[350px] w-full">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <ResponsiveContainer>
              <BarChart data={projectedData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="year" tickLine={false} tickMargin={10} axisLine={false} />
                <YAxis tickFormatter={(value) => formatCurrency(value)} />
                <Tooltip cursor={{ fill: 'hsl(var(--muted))' }} content={<ChartTooltipContent formatter={(value) => formatCurrency(value as number)} />} />
                <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}
