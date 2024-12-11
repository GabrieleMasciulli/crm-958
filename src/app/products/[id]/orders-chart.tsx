'use client'

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const data = [
  { date: '2024-01', total: 400, pending: 100, completed: 250, cancelled: 50 },
  { date: '2024-02', total: 450, pending: 120, completed: 300, cancelled: 30 },
  { date: '2024-03', total: 500, pending: 150, completed: 320, cancelled: 30 },
  { date: '2024-04', total: 550, pending: 180, completed: 350, cancelled: 20 },
  { date: '2024-05', total: 600, pending: 200, completed: 380, cancelled: 20 },
  { date: '2024-06', total: 650, pending: 220, completed: 400, cancelled: 30 },
]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function OrdersChart({ productId }: { productId: string }) {
  return (
    <ChartContainer
      config={{
        total: {
          label: 'Ordini Totali',
          color: 'hsl(var(--chart-1))',
        },
        pending: {
          label: 'Ordini Pendenti',
          color: 'hsl(var(--chart-2))',
        },
        completed: {
          label: 'Ordini Completati',
          color: 'hsl(var(--chart-3))',
        },
        cancelled: {
          label: 'Ordini Annullati',
          color: 'hsl(var(--chart-4))',
        },
      }}
      className='aspect-[2/1] h-[300px] p-4'
    >
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart data={data}>
          <XAxis dataKey='date' />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type='monotone'
            dataKey='total'
            stroke='var(--color-total)'
            strokeWidth={2}
          />
          <Line
            type='monotone'
            dataKey='pending'
            stroke='var(--color-pending)'
            strokeWidth={2}
          />
          <Line
            type='monotone'
            dataKey='completed'
            stroke='var(--color-completed)'
            strokeWidth={2}
          />
          <Line
            type='monotone'
            dataKey='cancelled'
            stroke='var(--color-cancelled)'
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
