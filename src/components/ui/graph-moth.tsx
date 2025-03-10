// File: components/charts/SalesByMonthChart.tsx
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

const groupSalesByMonth = () => {
  const data: { month: string; total: number }[] = []
  const grouped: { [key: string]: number } = {}

  orders.forEach((order) => {
    const date = new Date(order.date)
    const key = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}`
    grouped[key] = (grouped[key] || 0) + order.totalPrice
  })

  Object.entries(grouped).forEach(([month, total]) => {
    data.push({ month, total })
  })

  return data.sort((a, b) => a.month.localeCompare(b.month))
}

export default function SalesByMonthChart() {
  const data = groupSalesByMonth()

  return (
    <ResponsiveContainer width='100%' height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='month' />
        <YAxis />
        <Tooltip />
        <Bar dataKey='total' fill='#8884d8' />
      </BarChart>
    </ResponsiveContainer>
  )
}
