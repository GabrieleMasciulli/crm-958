// File: components/tables/OrdersTable.tsx
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
import orders from '@/lib/data/ordersData'

export default function OrdersTable() {
  const [search, setSearch] = useState('')

  const filtered = orders.filter(
    (o) =>
      o.agent.toLowerCase().includes(search.toLowerCase()) ||
      o.region.toLowerCase().includes(search.toLowerCase()) ||
      o.status.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Storico Ordini</CardTitle>
        <Input
          placeholder='Filtra per agente, regione o stato'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='mt-4'
        />
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Data</TableHead>
              <TableHead>Agente</TableHead>
              <TableHead>Regione</TableHead>
              <TableHead>Quantità</TableHead>
              <TableHead>Totale €</TableHead>
              <TableHead>Stato</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((o) => (
              <TableRow key={o.id}>
                <TableCell>{o.date}</TableCell>
                <TableCell>{o.agent}</TableCell>
                <TableCell>{o.region}</TableCell>
                <TableCell>{o.quantity}</TableCell>
                <TableCell>{o.totalPrice.toFixed(2)}</TableCell>
                <TableCell
                  style={{
                    color: o.status === 'Completato' ? 'green' : 'orange',
                  }}
                >
                  {o.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
