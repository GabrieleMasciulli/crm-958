'use client'

import { Pie, PieChart, ResponsiveContainer, Cell, Legend } from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const data = [
  {
    name: 'North',
    value: 35,
  },
  {
    name: 'South',
    value: 25,
  },
  {
    name: 'East',
    value: 20,
  },
  {
    name: 'West',
    value: 20,
  },
]

const COLORS = [
  'hsl(var(--chart-1))',
  'hsl(var(--chart-2))',
  'hsl(var(--chart-3))',
  'hsl(var(--chart-4))',
]

export function GeographicDistribution() {
  return (
    <ChartContainer
      config={{
        value: {
          label: 'Sales Distribution (%)',
          color: 'hsl(var(--chart-1))',
        },
      }}
      className='h-[300px]'
    >
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart>
          <Pie
            data={data}
            cx='50%'
            cy='50%'
            labelLine={false}
            outerRadius={80}
            fill='#8884d8'
            dataKey='value'
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
