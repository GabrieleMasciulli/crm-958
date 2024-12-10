'use client'

import { TrendingUp } from 'lucide-react'
import {
  Bar as RechartsBar,
  BarChart as RechartsBarChart,
  CartesianGrid as RechartsCartesianGrid,
  LabelList as RechartsLabelList,
  XAxis as RechartsXAxis,
  YAxis as RechartsYAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from 'recharts'

import { CardFooter } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
  mobile: {
    label: 'Mobile',
    color: 'hsl(var(--chart-2))',
  },
  label: {
    color: 'hsl(var(--background))',
  },
} satisfies ChartConfig

export function ProductChart() {
  return (
    <>
      <ChartContainer config={chartConfig}>
        <ResponsiveContainer width='100%' height={300}>
          <RechartsBarChart
            accessibilityLayer
            data={chartData}
            layout='vertical'
            margin={{ right: 16 }}
          >
            <RechartsCartesianGrid horizontal={false} />
            <RechartsYAxis
              dataKey='month'
              type='category'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value: string) => value.slice(0, 3)}
              hide
            />
            <RechartsXAxis dataKey='desktop' type='number' hide />
            <RechartsTooltip
              cursor={false}
              content={<ChartTooltipContent indicator='line' />}
            />
            <RechartsBar
              dataKey='desktop'
              layout='vertical'
              fill='var(--color-desktop)'
              radius={4}
            >
              <RechartsLabelList
                dataKey='month'
                position='insideLeft'
                offset={8}
                className='fill-[--color-label]'
                fontSize={12}
              />
              <RechartsLabelList
                dataKey='desktop'
                position='right'
                offset={8}
                className='fill-foreground'
                fontSize={12}
              />
            </RechartsBar>
          </RechartsBarChart>
        </ResponsiveContainer>
      </ChartContainer>
      <CardFooter className='flex-col items-start gap-2 text-sm'>
        <div className='flex gap-2 font-medium leading-none'>
          Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
        </div>
        <div className='leading-none text-muted-foreground'>
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </>
  )
}
