'use client'

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const data = [
  { date: '2024-01', sales: 400 },
  { date: '2024-02', sales: 300 },
  { date: '2024-03', sales: 200 },
  { date: '2024-04', sales: 278 },
  { date: '2024-05', sales: 189 },
  { date: '2024-06', sales: 239 },
]

export function ProductivityOverTimeChart({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  productId,
}: {
  productId: string
}) {
  return (
    <ChartContainer
      config={{
        sales: {
          label: 'Vendite',
          color: 'hsl(var(--chart-1))',
        },
      }}
      className='aspect-[3/1] h-[300px] p-4'
    >
      <ResponsiveContainer width='100%' height='100%'>
        <AreaChart data={data}>
          <XAxis dataKey='date' />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area
            type='monotone'
            dataKey='sales'
            stroke='var(--color-sales)'
            fill='var(--color-sales)'
            fillOpacity={0.2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
