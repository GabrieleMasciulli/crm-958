'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import products from '@/lib/data/productsData' // Import dei dati
import FilterBar from './ui/filter-bar'

export default function SalesProductsPage() {
  return (
    <div>
      <h1 className='text-4xl text-center p-10'>Prodotti Venduti</h1>
      <FilterBar />
      <div className='grid grid-cols-4 gap-4 px-3'>
        {products.map(product => (
          <Link key={product.id} href={`products/${product.id}`}>
            <Card className='mb-4'>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.quantityAvailable}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Prezzo al dettaglio: {product.price}</p>
                <p>Regione di provenienza: {product.region}</p>
                {product.agents.map(agent => (
                  <p key={agent}>Agente: {agent}</p>
                ))}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
