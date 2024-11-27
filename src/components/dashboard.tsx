'use client'

import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { DatePickerWithRange } from '@/components/date-range-picker'
import { DataTable } from '@/components/data-table'
import { columns } from '@/components/columns'
import { SalesChart } from '@/components/sales-chart'
import { AgentPerformanceChart } from '@/components/agent-performance'
import { GeographicDistribution } from '@/components/geographic-distribution'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Download, RefreshCw } from 'lucide-react'

// Sample data - in a real app, this would come from your backend
const data = [
  {
    id: '1',
    date: '2024-01-15',
    product: 'Premium Coffee Beans',
    agent: 'John Smith',
    region: 'North',
    amount: 2500,
    quantity: 100,
    status: 'completed',
  },
  // ... more data
]

export default function Dashboard() {
  const [dateRange, setDateRange] = useState({
    from: new Date(2024, 0, 1),
    to: new Date(),
  })

  return (
    <div className='flex min-h-screen flex-col'>
      <div className='border-b'>
        <div className='flex h-16 items-center px-4'>
          <h1 className='text-2xl font-bold'>Sales Analytics Dashboard</h1>
          <div className='ml-auto flex items-center space-x-4'>
            <Button variant='outline' size='sm'>
              <RefreshCw className='mr-2 h-4 w-4' />
              Refresh Data
            </Button>
            <Button variant='outline' size='sm'>
              <Download className='mr-2 h-4 w-4' />
              Export
            </Button>
          </div>
        </div>
      </div>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <div className='flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0'>
          <div className='flex items-center space-x-4'>
            <DatePickerWithRange date={dateRange} setDate={setDateRange} />
            <Select defaultValue='all'>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Select Region' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all'>All Regions</SelectItem>
                <SelectItem value='north'>North</SelectItem>
                <SelectItem value='south'>South</SelectItem>
                <SelectItem value='east'>East</SelectItem>
                <SelectItem value='west'>West</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue='all'>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Select Agent' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all'>All Agents</SelectItem>
                <SelectItem value='direct'>Direct Sales</SelectItem>
                <SelectItem value='agents'>Sales Agents</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='flex-1'>
            <Input placeholder='Search products, agents, or regions...' />
          </div>
        </div>

        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          <Card>
            <CardHeader>
              <CardTitle>Total Sales</CardTitle>
              <CardDescription>Period total revenue</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>$123,456</div>
              <p className='text-xs text-muted-foreground'>
                +20.1% from previous period
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Units Sold</CardTitle>
              <CardDescription>Total products sold</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>1,234</div>
              <p className='text-xs text-muted-foreground'>
                +12.4% from previous period
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Active Agents</CardTitle>
              <CardDescription>Sales representatives</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>24</div>
              <p className='text-xs text-muted-foreground'>
                +2 from previous period
              </p>
            </CardContent>
          </Card>
        </div>

        <div className='grid gap-4 md:grid-cols-2'>
          <Card>
            <CardHeader>
              <CardTitle>Sales Trend</CardTitle>
              <CardDescription>Daily revenue over time</CardDescription>
            </CardHeader>
            <CardContent>
              <SalesChart />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Agent Performance</CardTitle>
              <CardDescription>Top performing sales agents</CardDescription>
            </CardHeader>
            <CardContent>
              <AgentPerformanceChart />
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Geographic Distribution</CardTitle>
            <CardDescription>Sales by region</CardDescription>
          </CardHeader>
          <CardContent>
            <GeographicDistribution />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Detailed Sales Data</CardTitle>
            <CardDescription>
              Comprehensive view of all sales transactions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={data} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
