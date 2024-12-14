import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import products from '@/lib/data/productsData'

export function ProductDetails({ id }: { id: string }) {
  const product = products.find(p => p.id === id)

  if (!product) {
    return <div>Prodotto non trovato</div>
  }

  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>
            Nome del Prodotto
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>{product.name}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Regione</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>{product.region}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Prezzo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>€{product.price.toFixed(2)}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>
            Quantità Disponibile
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>{product.quantityAvailable}</div>
        </CardContent>
      </Card>
    </div>
  )
}
