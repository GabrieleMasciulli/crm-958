'use client'

import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { DataTable } from '@/components/data-table'
import { columns } from '@/components/columns'
import { SalesChart } from '@/components/sales-chart'
import { AgentPerformanceChart } from '@/components/agent-performance'
import { GeographicDistribution } from '@/components/geographic-distribution'
import { Button } from '@/components/ui/button'
import { Download, RefreshCw } from 'lucide-react'
import salesData from '@/lib/data/ordersData'
import Link from 'next/link'
import FilterBar from './ui/filter-bar'
import Image from 'next/image'
import Logo from '@/../public/images.png'
export default function Dashboard() {
  return (
    <div className='flex min-h-screen flex-col'>
      <div className='border-b'>
        <div className='flex items-center p-3'>
          <Image src={Logo} alt='Logo' />
          <div className='ml-auto flex items-center space-x-4'>
            <Button variant='outline' size='sm'>
              <RefreshCw className='mr-2 h-4 w-4' />
              Ricarica i dati
            </Button>
            <Button variant='outline' size='sm'>
              <Download className='mr-2 h-4 w-4' />
              Esporta statistiche
            </Button>
          </div>
        </div>
      </div>
      <FilterBar />
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          <Link href='/products' passHref>
            <Card>
              <CardHeader>
                <CardTitle>Vendite Totali</CardTitle>
                <CardDescription>Periodo totale di vendite</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>€123,456</div>
                <p className='text-xs text-muted-foreground'>
                  +20.1% dal periodo precedente
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href='/agents' passHref>
            <Card>
              <CardHeader>
                <CardTitle>Unità vendute</CardTitle>
                <CardDescription>Totale prodotti venduti</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>1,234</div>
                <p className='text-xs text-muted-foreground'>
                  +12.4% dal periodo precedente
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href='/agents' passHref>
            <Card>
              <CardHeader>
                <CardTitle>Agenti attivi</CardTitle>
                <CardDescription>Rappresentanti commerciali</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>24</div>
                <p className='text-xs text-muted-foreground'>
                  +2 dal periodo precedente
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

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
            <CardTitle>Dati dettagliati sugli ordini</CardTitle>
            <CardDescription>
              Panoramica completa di tutti gli ordini
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable
              columns={columns}
              data={salesData.map((sale) => ({
                ...sale,
                product: '',
                amount: sale.totalPrice,
              }))}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
