// File: components/charts/RegionSalesChart.tsx
'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'
import orders from '@/lib/data/ordersData'

const groupSalesByRegion = () => {
  const grouped: { [region: string]: number } = {}

  orders.forEach((order) => {
    grouped[order.region] = (grouped[order.region] || 0) + order.totalPrice
  })

  return Object.entries(grouped).map(([region, total]) => ({ region, total }))
}

export default function RegionSalesChart() {
  const data = groupSalesByRegion()

  return (
    <ResponsiveContainer width='100%' height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='region' />
        <YAxis />
        <Tooltip />
        <Bar dataKey='total' fill='#82ca9d' />
      </BarChart>
    </ResponsiveContainer>
  )
}
