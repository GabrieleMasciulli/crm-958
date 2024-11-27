'use client'

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const data = [
  {
    name: 'John Smith',
    sales: 4000,
  },
  {
    name: 'Sarah Johnson',
    sales: 3800,
  },
  {
    name: 'Michael Brown',
    sales: 3600,
  },
  {
    name: 'Emily Davis',
    sales: 3200,
  },
  {
    name: 'David Wilson',
    sales: 3000,
  },
]

export function AgentPerformanceChart() {
  return (
    <ChartContainer
      config={{
        sales: {
          label: 'Sales ($)',
          color: 'hsl(var(--chart-1))',
        },
      }}
      className='h-[300px]'
    >
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart data={data}>
          <XAxis
            dataKey='name'
            stroke='#888888'
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke='#888888'
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={value => `$${value}`}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey='sales' radius={[4, 4, 0, 0]} className='fill-primary' />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
