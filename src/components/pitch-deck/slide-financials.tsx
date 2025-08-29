"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"
import { ChartTooltipContent, ChartContainer } from '@/components/ui/chart'

const projectedData = [
  { year: 'Year 1', revenue: 1200000, profit: 100000 },
  { year: 'Year 2', revenue: 2000000, profit: 300000 },
  { year: 'Year 3', revenue: 3500000, profit: 700000 },
];

const roiData = {
  biomassCost: 40000,
  overhead: 36610,
  totalRevenue: 146440,
  netProfit: 69830,
  roi: 174.6
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    compactDisplay: 'short'
  }).format(value);
}

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--primary))",
  },
  profit: {
    label: "Net Profit",
    color: "hsl(var(--accent))",
  },
}

export function SlideFinancials() {
  return (
    <Card className="w-full max-w-4xl h-[600px] flex flex-col justify-center overflow-hidden">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Financial Projections</CardTitle>
        <CardDescription>
          Projected growth and profitability over the first three years.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
        <div className="md:col-span-2 space-y-4">
          <h4 className="font-semibold text-center">Per 40lb Run ROI Example</h4>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Total Revenue</TableCell>
                <TableCell className="text-right font-medium text-primary">{formatCurrency(roiData.totalRevenue)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Biomass & Overhead</TableCell>
                <TableCell className="text-right font-medium text-destructive">- {formatCurrency(roiData.biomassCost + roiData.overhead)}</TableCell>
              </TableRow>
              <TableRow className="bg-muted">
                <TableCell className="font-bold">Net Profit</TableCell>
                <TableCell className="text-right font-bold text-primary">{formatCurrency(roiData.netProfit)}</TableCell>
              </TableRow>
               <TableRow className="bg-primary/10">
                <TableCell className="font-bold">Return on Investment</TableCell>
                <TableCell className="text-right font-bold text-primary">{roiData.roi}%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="md:col-span-3 h-[300px] w-full">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <ResponsiveContainer>
              <BarChart data={projectedData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="year" tickLine={false} tickMargin={10} axisLine={false} />
                <YAxis tickFormatter={(value) => formatCurrency(value)} />
                <Tooltip cursor={{ fill: 'hsl(var(--muted))' }} content={<ChartTooltipContent formatter={(value) => formatCurrency(value as number)} />} />
                <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
                <Bar dataKey="profit" fill="var(--color-profit)" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
       <CardFooter className="justify-center text-sm text-muted-foreground text-center">
          <p>Financial projections show a path to profitability within the first year, scaling to over $700K in net profit by Year 3.</p>
        </CardFooter>
    </Card>
  )
}
