// File: app/filters/page.tsx
'use client'

import { useState } from 'react'
import ProductsTable from '@/components/ui/table-products'
import OrdersTable from '@/components/ui/table-orders'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

export default function Filters() {
  const [tab, setTab] = useState('products')

  return (
    <Tabs value={tab} onValueChange={setTab} className='w-full p-6'>
      <TabsList className='mb-4'>
        <TabsTrigger value='products'>Prodotti</TabsTrigger>
        <TabsTrigger value='orders'>Ordini</TabsTrigger>
      </TabsList>

      <TabsContent value='products'>
        <ProductsTable />
      </TabsContent>

      <TabsContent value='orders'>
        <OrdersTable />
      </TabsContent>
    </Tabs>
  )
}
