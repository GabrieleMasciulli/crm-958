'use client'

import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from 'recharts'
import orders from '@/lib/data/ordersData'

const COLORS = [
  '#8884d8',
  '#82ca9d',
  '#ffc658',
  '#ff8042',
  '#a4de6c',
  '#d0ed57',
  '#8dd1e1',
]

const groupOrdersCountByRegion = () => {
  const grouped: { [region: string]: number } = {}
  orders.forEach((order) => {
    grouped[order.region] = (grouped[order.region] || 0) + 1
  })
  return Object.entries(grouped).map(([region, count]) => ({
    name: region,
    value: count,
  }))
}

export default function RegionOrdersPieChart() {
  const data = groupOrdersCountByRegion()

  return (
    <ResponsiveContainer width='100%' height={300}>
      <PieChart>
        <Pie
          dataKey='value'
          data={data}
          cx='50%'
          cy='50%'
          outerRadius={100}
          fill='#8884d8'
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}
