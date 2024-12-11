import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function ProductDetailsSkeleton() {
  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>
            Nome del Prodotto
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className='h-8 w-[200px]' />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Regione</CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className='h-8 w-[150px]' />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Prezzo</CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className='h-8 w-[100px]' />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>
            Quantità Disponibile
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className='h-8 w-[80px]' />
        </CardContent>
      </Card>
    </div>
  )
}
