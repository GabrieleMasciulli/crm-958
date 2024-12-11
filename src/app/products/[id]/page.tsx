import { Suspense } from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ProductDetails } from './product-details'
import { ProductDetailsSkeleton } from './product-details-skeleton'
import { OrdersChart } from './orders-chart'
import { AgentProductivityChart } from './agent-productivity-chart'
import { ProductivityOverTimeChart } from './productivity-over-time-chart'

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className='flex flex-col gap-6 p-4 md:gap-8 md:p-10'>
      <div className='flex items-center gap-4'>
        <Button variant='ghost' size='icon' asChild>
          <Link href='/products'>
            <ArrowLeft className='h-4 w-4' />
            <span className='sr-only'>Torna ai prodotti</span>
          </Link>
        </Button>
        <h1 className='text-2xl font-bold tracking-tight'>
          Dettagli del Prodotto
        </h1>
      </div>

      <Suspense fallback={<ProductDetailsSkeleton />}>
        <ProductDetails id={params.id} />
      </Suspense>

      <div className='grid gap-6'>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-7'>
          <Card className='lg:col-span-4'>
            <CardHeader>
              <CardTitle>Panoramica degli Ordini</CardTitle>
            </CardHeader>
            <CardContent className='p-0'>
              <OrdersChart productId={params.id} />
            </CardContent>
          </Card>
          <Card className='lg:col-span-3'>
            <CardHeader>
              <CardTitle>Produttività dell&apos;Agente</CardTitle>
            </CardHeader>
            <CardContent className='p-0'>
              <AgentProductivityChart productId={params.id} />
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Produttività nel Tempo</CardTitle>
          </CardHeader>
          <CardContent className='p-0'>
            <ProductivityOverTimeChart productId={params.id} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
