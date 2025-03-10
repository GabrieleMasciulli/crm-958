// File: components/tables/ProductsTable.tsx
'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import products from '@/lib/data/productsData'

export default function ProductsTable() {
  const [search, setSearch] = useState('')

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.region.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Prodotti Disponibili</CardTitle>
        <Input
          placeholder='Filtra per nome o regione'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='mt-4'
        />
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Agenti</TableHead>
              <TableHead>Regione</TableHead>
              <TableHead>Quantità</TableHead>
              <TableHead>Prezzo €</TableHead>
              <TableHead>Sconto %</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.name}</TableCell>
                <TableCell>{p.agents.join(', ')}</TableCell>
                <TableCell>{p.region}</TableCell>
                <TableCell>{p.quantityAvailable}</TableCell>
                <TableCell>{p.price.toFixed(2)}</TableCell>
                <TableCell>{(p.discount * 100).toFixed(0)}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
