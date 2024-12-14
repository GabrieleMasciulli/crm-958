'use client'

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const data = [
  { name: 'Luca Rossi', sales: 400 },
  { name: 'Giulia Bianchi', sales: 300 },
  { name: 'Marco Verdi', sales: 200 },
  { name: 'Sofia Conti', sales: 278 },
  { name: 'Roberto Gallo', sales: 189 },
]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function AgentProductivityChart({ productId }: { productId: string }) {
  return (
    <ChartContainer
      config={{
        sales: {
          label: 'Sales',
          color: 'hsl(var(--chart-1))',
        },
      }}
      className='aspect-[2/1] h-[300px] p-4'
    >
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart data={data}>
          <XAxis dataKey='name' />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey='sales' fill='var(--color-sales)' />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
