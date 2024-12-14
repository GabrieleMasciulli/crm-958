'use client'

import Link from 'next/link'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import products from '@/lib/data/productsData'

export function ProductList() {
  return (
    <div className='relative w-full overflow-auto'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome del Prodotto</TableHead>
            <TableHead>Regione</TableHead>
            <TableHead>Prezzo</TableHead>
            <TableHead>Quantità Disponibile</TableHead>
            <TableHead>Sconto</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map(product => (
            <TableRow key={product.id}>
              <TableCell className='font-medium'>
                <Link
                  href={`/products/${product.id}`}
                  className='hover:underline'
                >
                  {product.name}
                </Link>
              </TableCell>
              <TableCell>{product.region}</TableCell>
              <TableCell>€{product.price.toFixed(2)}</TableCell>
              <TableCell>{product.quantityAvailable}</TableCell>
              <TableCell>{(product.discount * 100).toFixed(0)}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
