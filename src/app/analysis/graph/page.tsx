'use client'

import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { SalesChart } from '@/components/sales-chart'
import { AgentPerformanceChart } from '@/components/agent-performance'
import { GeographicDistribution } from '@/components/geographic-distribution'
import Link from 'next/link'
import SalesByMonthChart from '@/components/ui/graph-moth'
import RegionSalesChart from '@/components/ui/graph-region'
import RegionOrdersPieChart from '@/components/ui/graph-orders'

export default function Dashboard() {
  return (
    <div className='flex min-h-screen flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <div className='grid gap-4 md:grid-cols-2'>
          <Card>
            <CardHeader>
              <CardTitle>Trend delle Vendite</CardTitle>
              <CardDescription>Entrate giornaliere nel tempo</CardDescription>
            </CardHeader>
            <CardContent>
              <SalesChart />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Performance degli Agenti</CardTitle>
              <CardDescription>
                Agenti con le migliori prestazioni
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AgentPerformanceChart />
            </CardContent>
          </Card>
        </div>

        <Link href='/geo-view' passHref>
          <Card>
            <CardHeader>
              <CardTitle>Distribuzione Geografica</CardTitle>
              <CardDescription>Vendite per Regione</CardDescription>
            </CardHeader>
            <CardContent>
              <GeographicDistribution />
            </CardContent>
          </Card>
        </Link>
        <Card>
          <CardHeader>
            <CardTitle>Vendite per Mese</CardTitle>
            <CardDescription>Totale entrate mensili</CardDescription>
          </CardHeader>
          <CardContent>
            <SalesByMonthChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Vendite per Regione</CardTitle>
            <CardDescription>
              Distribuzione regionale delle vendite
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RegionSalesChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ordini per Regione</CardTitle>
            <CardDescription>
              Percentuale numero ordini distribuiti
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RegionOrdersPieChart />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
