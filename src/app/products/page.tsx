import { Suspense } from 'react'
import { SearchIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { ProductList } from './product-list'
import { ProductListSkeleton } from './product-list-skeleton'
import { DatePickerWithRange } from './date-range-picker'

export default function ProductSalesDashboard() {
  return (
    <div className='flex flex-col gap-4 p-4 md:gap-8 md:p-10'>
      <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
        <h1 className='text-2xl font-bold tracking-tight'>
          Dashboard Vendite Prodotto
        </h1>
        <Button>
          Esporta Dati
          <span className='sr-only'>Esporta dati vendite prodotto</span>
        </Button>
      </div>

      <Card>
        <CardHeader className='pb-4'>
          <CardTitle>Filtri</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col gap-4 md:flex-row md:items-center'>
            <div className='flex-1'>
              <DatePickerWithRange className='w-full' />
            </div>
            <Select>
              <SelectTrigger className='w-full md:w-[200px]'>
                <SelectValue placeholder='All Regions' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all'>All Regions</SelectItem>
                <SelectItem value='piedmont'>Piedmont</SelectItem>
                <SelectItem value='tuscany'>Tuscany</SelectItem>
                <SelectItem value='veneto'>Veneto</SelectItem>
                {/* Add other regions */}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className='w-full md:w-[200px]'>
                <SelectValue placeholder='All Agents' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all'>All Agents</SelectItem>
                <SelectItem value='luca-rossi'>Luca Rossi</SelectItem>
                <SelectItem value='giulia-bianchi'>Giulia Bianchi</SelectItem>
                <SelectItem value='marco-verdi'>Marco Verdi</SelectItem>
                {/* Add other agents */}
              </SelectContent>
            </Select>
            <div className='relative flex-1'>
              <SearchIcon className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
              <Input
                type='search'
                placeholder='Search products...'
                className='pl-8'
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className='pb-4'>
          <CardTitle>Vendite Prodotto</CardTitle>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<ProductListSkeleton />}>
            <ProductList />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  )
}
