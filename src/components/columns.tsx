'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { MoreHorizontal } from 'lucide-react'
import products from '@/lib/data/productsData'

export type Sale = {
  id: string
  date: string
  productId: number
  agent: string
  region: string
  amount: number
  quantity: number
  status: string
}

export const columns: ColumnDef<Sale>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: 'ID Ordine',
  },
  {
    accessorKey: 'date',
    header: 'Data',
  },
  {
    accessorKey: 'productId',
    header: 'Prodotto',
    cell: ({ row }) => {
      const productId = row.getValue('productId') as number
      const product = products.find(p => p.id === String(productId))
      return product?.name || 'Prodotto sconosciuto'
    },
  },
  {
    accessorKey: 'agent',
    header: 'Agente',
  },
  {
    accessorKey: 'region',
    header: 'Regione',
  },
  {
    accessorKey: 'amount',
    header: 'Importo',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)
      return formatted
    },
  },
  {
    accessorKey: 'quantity',
    header: 'Quantità',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string
      return (
        <Badge
          variant={
            status === 'Completato'
              ? 'default'
              : status === 'Cancellato'
              ? 'destructive'
              : 'secondary'
          }
        >
          {status}
        </Badge>
      )
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const sale = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Apri menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Azioni</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(sale.id)}
            >
              Copia ID vendita
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Vedi dettagli</DropdownMenuItem>
            <DropdownMenuItem>Vedi pagamento</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
