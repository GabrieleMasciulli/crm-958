"use client";

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  {
    date: "Jan 1",
    sales: 4000,
    units: 240,
  },
  {
    date: "Jan 2",
    sales: 3000,
    units: 180,
  },
  {
    date: "Jan 3",
    sales: 5000,
    units: 300,
  },
  {
    date: "Jan 4",
    sales: 4500,
    units: 270,
  },
  {
    date: "Jan 5",
    sales: 6000,
    units: 360,
  },
  {
    date: "Jan 6",
    sales: 5500,
    units: 330,
  },
  {
    date: "Jan 7",
    sales: 7000,
    units: 420,
  },
];

export function SalesChart() {
  return (
    <ChartContainer
      config={{
        sales: {
          label: "Sales ($)",
          color: "hsl(var(--chart-1))",
        },
        units: {
          label: "Units Sold",
          color: "hsl(var(--chart-2))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="date"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="sales"
            strokeWidth={2}
            activeDot={{
              r: 6,
              style: { fill: "var(--chart-1)", opacity: 0.8 },
            }}
          />
          <Line
            type="monotone"
            dataKey="units"
            strokeWidth={2}
            activeDot={{
              r: 6,
              style: { fill: "var(--chart-2)", opacity: 0.8 },
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
